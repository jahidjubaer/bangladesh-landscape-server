import Payment from '../models/Payment.js';
import Plan from '../models/Plan.js';
import Setting from '../models/Setting.js';
import AppError from '../utils/AppError.js';
import env from '../config/env.js';
import { initPayment, validateSslPayment, activeGateway, newTranId } from '../services/paymentService.js';

async function fulfill(payment, gatewayData) {
  if (payment.status === 'success') return; // idempotent — IPN + callback may both fire
  payment.status = 'success';
  payment.gatewayTranId = gatewayData?.bank_tran_id || gatewayData?.tran_id || '';
  payment.raw = gatewayData;
  await payment.save();

  if (payment.purpose === 'plan') {
    await Plan.findByIdAndUpdate(payment.ref, {
      status: 'paid',
      paidAt: new Date(),
      payment: payment._id,
    });
  }
}

async function fail(payment, status, gatewayData) {
  if (payment.status === 'success') return;
  payment.status = status;
  payment.raw = gatewayData;
  await payment.save();
}

async function redirectTarget(payment, result) {
  let path = '/';
  if (payment?.purpose === 'plan') {
    const plan = await Plan.findById(payment.ref).select('publicId');
    if (plan) path = `/plans/${plan.publicId}`;
  }
  return `${env.clientUrl}${path}?payment=${result}`;
}

// POST /payments/init { planPublicId }
export async function init(req, res, next) {
  try {
    // Never expose the mock gateway outside development
    if (activeGateway === 'mock' && env.nodeEnv === 'production') {
      throw new AppError('Online payment is not available yet — use bKash send money', 503);
    }

    const plan = await Plan.findOne({ publicId: req.body.planPublicId, user: req.user._id });
    if (!plan) throw new AppError('Plan not found', 404);
    if (plan.status === 'paid') throw new AppError('Plan already paid', 409);

    const settings = await Setting.get();
    const { gatewayUrl } = await initPayment({
      user: req.user,
      purpose: 'plan',
      ref: plan._id,
      amount: settings.planPrice,
      productName: `Tour plan ${plan.publicId}`,
    });

    res.json({ success: true, data: { gatewayUrl, gateway: activeGateway } });
  } catch (err) {
    next(err);
  }
}

// SSLCommerz browser redirects (POST) — validate server-side before fulfilling
export async function callbackSuccess(req, res, next) {
  try {
    const { tran_id: tranId, val_id: valId } = req.body;
    const payment = await Payment.findOne({ tranId });
    if (!payment) throw new AppError('Unknown transaction', 404);

    const { valid, data } = await validateSslPayment(valId);
    if (valid && Number(data.amount) >= payment.amount) await fulfill(payment, data);
    else await fail(payment, 'failed', data);

    res.redirect(303, await redirectTarget(payment, valid ? 'success' : 'failed'));
  } catch (err) {
    next(err);
  }
}

export async function callbackFail(req, res, next) {
  try {
    const payment = await Payment.findOne({ tranId: req.body.tran_id });
    if (payment) await fail(payment, 'failed', req.body);
    res.redirect(303, await redirectTarget(payment, 'failed'));
  } catch (err) {
    next(err);
  }
}

export async function callbackCancel(req, res, next) {
  try {
    const payment = await Payment.findOne({ tranId: req.body.tran_id });
    if (payment) await fail(payment, 'cancelled', req.body);
    res.redirect(303, await redirectTarget(payment, 'cancelled'));
  } catch (err) {
    next(err);
  }
}

// SSLCommerz IPN (server-to-server, most reliable signal)
export async function ipn(req, res, next) {
  try {
    const { tran_id: tranId, val_id: valId, status } = req.body;
    const payment = await Payment.findOne({ tranId });
    if (!payment) return res.status(404).end();

    if (status === 'VALID' && valId) {
      const { valid, data } = await validateSslPayment(valId);
      if (valid && Number(data.amount) >= payment.amount) await fulfill(payment, data);
    } else if (['FAILED', 'CANCELLED', 'EXPIRED'].includes(status)) {
      await fail(payment, status === 'CANCELLED' ? 'cancelled' : 'failed', req.body);
    }
    res.status(200).end();
  } catch (err) {
    next(err);
  }
}

// POST /payments/manual-bkash { planPublicId, trxId, senderNumber }
// User already sent money to the personal bKash number; admin verifies by hand.
export async function submitManualBkash(req, res, next) {
  try {
    const { planPublicId, trxId, senderNumber } = req.body;
    if (!trxId || String(trxId).trim().length < 6) throw new AppError('Valid bKash TrxID is required', 400);
    if (!senderNumber || !/^(\+?880|0)1[3-9]\d{8}$/.test(String(senderNumber).replace(/[\s-]/g, ''))) {
      throw new AppError('Valid sender bKash number is required', 400);
    }

    const plan = await Plan.findOne({ publicId: planPublicId, user: req.user._id });
    if (!plan) throw new AppError('Plan not found', 404);
    if (plan.status === 'paid') throw new AppError('Plan already paid', 409);

    const existing = await Payment.findOne({ ref: plan._id, status: 'pending-verification' });
    if (existing) throw new AppError('A payment for this plan is already awaiting verification', 409);

    const duplicateTrx = await Payment.findOne({ 'manual.trxId': trxId.trim() });
    if (duplicateTrx) throw new AppError('This TrxID has already been submitted', 409);

    const settings = await Setting.get();
    await Payment.create({
      user: req.user._id,
      purpose: 'plan',
      ref: plan._id,
      gateway: 'bkash-manual',
      tranId: newTranId(),
      amount: settings.planPrice,
      status: 'pending-verification',
      manual: { senderNumber: String(senderNumber).trim(), trxId: String(trxId).trim() },
    });

    res.status(201).json({ success: true, message: 'Payment submitted for verification' });
  } catch (err) {
    next(err);
  }
}

// ---------- Admin verification ----------

export async function adminListPayments(req, res, next) {
  try {
    const filter = {};
    if (req.query.status) filter.status = req.query.status;
    const payments = await Payment.find(filter)
      .populate('user', 'name phone')
      .sort('-createdAt')
      .limit(200);
    res.json({ success: true, data: { payments } });
  } catch (err) {
    next(err);
  }
}

export async function adminApprovePayment(req, res, next) {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) throw new AppError('Payment not found', 404);
    if (payment.status !== 'pending-verification') throw new AppError('Payment is not awaiting verification', 409);

    payment.verifiedBy = req.user._id;
    payment.adminNote = req.body.note || '';
    await fulfill(payment, { manual: true, trxId: payment.manual?.trxId });

    res.json({ success: true, message: 'Payment approved, plan unlocked' });
  } catch (err) {
    next(err);
  }
}

export async function adminRejectPayment(req, res, next) {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) throw new AppError('Payment not found', 404);
    if (payment.status !== 'pending-verification') throw new AppError('Payment is not awaiting verification', 409);

    payment.verifiedBy = req.user._id;
    payment.adminNote = req.body.note || '';
    await fail(payment, 'failed', { manual: true, rejected: true });

    res.json({ success: true, message: 'Payment rejected' });
  } catch (err) {
    next(err);
  }
}

// Mock gateway (dev only): GET link → confirm page → success
export async function mockPay(req, res, next) {
  try {
    if (activeGateway !== 'mock') throw new AppError('Mock gateway disabled', 404);
    const payment = await Payment.findOne({ tranId: req.query.tranId, status: 'initiated' });
    if (!payment) throw new AppError('Unknown or already processed transaction', 404);

    if (req.query.confirm === '1') {
      await fulfill(payment, { mock: true, tran_id: payment.tranId });
      return res.redirect(303, await redirectTarget(payment, 'success'));
    }
    if (req.query.confirm === '0') {
      await fail(payment, 'cancelled', { mock: true });
      return res.redirect(303, await redirectTarget(payment, 'cancelled'));
    }

    res.send(`<!doctype html><html lang="bn"><head><meta charset="utf-8"><title>Mock Payment</title>
<style>body{font-family:sans-serif;display:grid;place-items:center;min-height:90vh;background:#f0fdf4}
.card{background:#fff;padding:32px;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,.08);text-align:center}
a{display:inline-block;margin:8px;padding:10px 24px;border-radius:8px;text-decoration:none;color:#fff}
.ok{background:#059669}.no{background:#9ca3af}</style></head><body>
<div class="card"><h2>🧪 Mock Payment Gateway</h2>
<p>Transaction: <code>${payment.tranId}</code> — <strong>${payment.amount} BDT</strong></p>
<p>(SSLCommerz credentials set করা হলে এখানে আসল গেটওয়ে খুলবে)</p>
<a class="ok" href="?tranId=${payment.tranId}&confirm=1">✓ Pay success</a>
<a class="no" href="?tranId=${payment.tranId}&confirm=0">✗ Cancel</a></div></body></html>`);
  } catch (err) {
    next(err);
  }
}
