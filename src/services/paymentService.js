import crypto from 'crypto';
import Payment from '../models/Payment.js';
import env from '../config/env.js';

// Gateway abstraction: SSLCommerz when credentials exist, otherwise a mock
// gateway so the full pay→unlock→download flow works in development.

const SSL_STORE_ID = process.env.SSLCOMMERZ_STORE_ID;
const SSL_STORE_PASS = process.env.SSLCOMMERZ_STORE_PASSWORD;
const SSL_SANDBOX = process.env.SSLCOMMERZ_LIVE !== 'true';
const SSL_BASE = SSL_SANDBOX ? 'https://sandbox.sslcommerz.com' : 'https://securepay.sslcommerz.com';
const SERVER_URL = process.env.SERVER_URL || `http://localhost:${env.port}`;

export const activeGateway = SSL_STORE_ID && SSL_STORE_PASS ? 'sslcommerz' : 'mock';

export function newTranId() {
  return `BL-${Date.now()}-${crypto.randomBytes(3).toString('hex')}`;
}

// Returns { gatewayUrl } the client should redirect to
export async function initPayment({ user, purpose, ref, amount, productName }) {
  const tranId = newTranId();
  const payment = await Payment.create({
    user: user._id,
    purpose,
    ref,
    gateway: activeGateway,
    tranId,
    amount,
  });

  if (activeGateway === 'mock') {
    return { payment, gatewayUrl: `${SERVER_URL}/api/v1/payments/mock/pay?tranId=${tranId}` };
  }

  const body = new URLSearchParams({
    store_id: SSL_STORE_ID,
    store_passwd: SSL_STORE_PASS,
    total_amount: String(amount),
    currency: 'BDT',
    tran_id: tranId,
    success_url: `${SERVER_URL}/api/v1/payments/callback/success`,
    fail_url: `${SERVER_URL}/api/v1/payments/callback/fail`,
    cancel_url: `${SERVER_URL}/api/v1/payments/callback/cancel`,
    ipn_url: `${SERVER_URL}/api/v1/payments/ipn`,
    cus_name: user.name,
    cus_email: user.email || 'customer@bangladeshlandscape.com',
    cus_phone: user.phone,
    cus_add1: 'Bangladesh',
    cus_city: 'Dhaka',
    cus_country: 'Bangladesh',
    shipping_method: 'NO',
    product_name: productName,
    product_category: 'travel',
    product_profile: 'general',
  });

  const res = await fetch(`${SSL_BASE}/gwprocess/v4/api.php`, { method: 'POST', body });
  const data = await res.json();
  if (data.status !== 'SUCCESS' || !data.GatewayPageURL) {
    payment.status = 'failed';
    payment.raw = data;
    await payment.save();
    throw new Error(`SSLCommerz init failed: ${data.failedreason || data.status}`);
  }
  return { payment, gatewayUrl: data.GatewayPageURL };
}

// Server-side validation of an SSLCommerz callback (never trust the POST alone)
export async function validateSslPayment(valId) {
  const url = `${SSL_BASE}/validator/api/validationserverAPI.php?val_id=${encodeURIComponent(valId)}&store_id=${SSL_STORE_ID}&store_passwd=${SSL_STORE_PASS}&format=json`;
  const res = await fetch(url);
  const data = await res.json();
  const valid = data.status === 'VALID' || data.status === 'VALIDATED';
  return { valid, data };
}
