import Plan from '../models/Plan.js';
import Setting from '../models/Setting.js';
import AppError from '../utils/AppError.js';
import { generatePlan } from '../services/planGenerator.js';
import { renderPlanPdf, PDF_DIR } from '../services/pdfService.js';
import path from 'path';
import fs from 'fs';

function validateInput(body) {
  const { district, spots, members, days, nights, budget, foodPref, exploreStyle, stayPref, startDate } = body || {};
  if (!district) throw new AppError('District is required', 400);
  if (!Array.isArray(spots) || spots.length === 0) throw new AppError('Select at least one spot', 400);
  const m = Number(members), d = Number(days), n = Number(nights), b = Number(budget);
  if (!m || m < 1 || m > 100) throw new AppError('Members must be 1–100', 400);
  if (!d || d < 1 || d > 15) throw new AppError('Days must be 1–15', 400);
  if (!(n >= 0) || n > 15) throw new AppError('Nights must be 0–15', 400);
  if (!b || b < 500) throw new AppError('Budget looks too low', 400);
  if (!['local', 'special', 'regular'].includes(foodPref)) throw new AppError('Invalid food preference', 400);
  if (!['adventure', 'relaxed', 'family', 'other'].includes(exploreStyle)) throw new AppError('Invalid explore style', 400);
  if (!['houseboat', 'cottage', 'hotel', 'resort', 'any'].includes(stayPref)) throw new AppError('Invalid stay preference', 400);
  return { district, spots, members: m, days: d, nights: n, budget: b, foodPref, exploreStyle, stayPref, startDate: startDate ? new Date(startDate) : undefined };
}

// Preview shape for unpaid viewers: summary + day 1 only
function toPublicJSON(plan, { full }) {
  const o = plan.output;
  return {
    publicId: plan.publicId,
    district: plan.district,
    input: plan.input,
    status: plan.status,
    isPreview: !full,
    createdAt: plan.createdAt,
    output: full
      ? o
      : {
          title: o.title,
          summary: o.summary,
          budgetVerdict: o.budgetVerdict,
          days: o.days?.slice(0, 1),
          totalDays: o.days?.length || 0,
          mapPoints: o.mapPoints,
          totalCostEstimate: o.totalCostEstimate,
        },
  };
}

export async function createPlan(req, res, next) {
  try {
    const input = validateInput(req.body);
    const { district, output, modelMeta } = await generatePlan(input);

    const plan = await Plan.create({
      user: req.user._id,
      district: district._id,
      input,
      output,
      modelMeta,
      status: 'generated',
    });

    res.status(201).json({ success: true, message: 'Plan generated', data: { publicId: plan.publicId } });
  } catch (err) {
    next(err);
  }
}

export async function getByPublicId(req, res, next) {
  try {
    const plan = await Plan.findOne({ publicId: req.params.publicId })
      .populate('district', 'slug name mapCenter zoom')
      .populate('input.spots', 'slug name');
    if (!plan) throw new AppError('Plan not found', 404);

    const isOwner = req.user && plan.user.toString() === req.user._id.toString();
    const full = plan.status === 'paid' && isOwner;
    const settings = await Setting.get();

    res.json({
      success: true,
      data: {
        plan: toPublicJSON(plan, { full }),
        isOwner,
        planPrice: settings.planPrice,
        freeCredits: req.user?.freePlanCredits ?? 0,
      },
    });
  } catch (err) {
    next(err);
  }
}

export async function myPlans(req, res, next) {
  try {
    const plans = await Plan.find({ user: req.user._id })
      .populate('district', 'slug name')
      .select('publicId status input.days input.nights input.members output.title createdAt')
      .sort('-createdAt');
    res.json({ success: true, data: { plans } });
  } catch (err) {
    next(err);
  }
}

// Unlock with a free plan credit (no payment)
export async function unlockWithCredit(req, res, next) {
  try {
    const plan = await Plan.findOne({ publicId: req.params.publicId, user: req.user._id });
    if (!plan) throw new AppError('Plan not found', 404);
    if (plan.status === 'paid') throw new AppError('Plan already unlocked', 409);
    if (req.user.freePlanCredits < 1) throw new AppError('No free credits left', 402);

    req.user.freePlanCredits -= 1;
    await req.user.save();
    plan.status = 'paid';
    plan.paidAt = new Date();
    plan.usedFreeCredit = true;
    await plan.save();

    res.json({ success: true, message: 'Plan unlocked with free credit' });
  } catch (err) {
    next(err);
  }
}

export async function downloadPdf(req, res, next) {
  try {
    const plan = await Plan.findOne({ publicId: req.params.publicId, user: req.user._id }).populate('district');
    if (!plan) throw new AppError('Plan not found', 404);
    if (plan.status !== 'paid') throw new AppError('Pay or use a free credit to download this plan', 402);

    // Serve cached PDF if already rendered
    if (plan.pdfFile && fs.existsSync(path.join(PDF_DIR, plan.pdfFile))) {
      return res.download(path.join(PDF_DIR, plan.pdfFile), `${plan.output.title || 'tour-plan'}.pdf`);
    }

    const { filename, filePath } = await renderPlanPdf(plan, plan.district, req.user.name);
    plan.pdfFile = filename;
    await plan.save();
    res.download(filePath, `${plan.output.title || 'tour-plan'}.pdf`);
  } catch (err) {
    next(err);
  }
}
