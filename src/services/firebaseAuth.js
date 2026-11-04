import { createRemoteJWKSet, jwtVerify } from 'jose';
import env from '../config/env.js';
import AppError from '../utils/AppError.js';

// Firebase ID tokens are RS256 JWTs signed by Google's securetoken service.
// Verifying them only needs the project id, no service-account key:
// https://firebase.google.com/docs/auth/admin/verify-id-tokens#verify_id_tokens_using_a_third-party_jwt_library
let JWKS = createRemoteJWKSet(
  new URL('https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com')
);

// Test hook only (not reachable over HTTP): swap Google's key set for a local one
export function _setKeySetForTests(keySet) {
  JWKS = keySet;
}

export function googleAuthEnabled() {
  return Boolean(env.firebaseProjectId);
}

// Returns { uid, email, emailVerified, name, picture } for a valid Google sign-in token
export async function verifyFirebaseIdToken(idToken) {
  if (!googleAuthEnabled()) throw new AppError('Google sign-in is not configured', 503);
  if (!idToken || typeof idToken !== 'string') throw new AppError('Google sign-in token is missing', 400);

  let payload;
  try {
    ({ payload } = await jwtVerify(idToken, JWKS, {
      algorithms: ['RS256'],
      issuer: `https://securetoken.google.com/${env.firebaseProjectId}`,
      audience: env.firebaseProjectId,
      clockTolerance: 60,
    }));
  } catch {
    throw new AppError('Google sign-in could not be verified, please try again', 401);
  }

  if (!payload.sub || payload.firebase?.sign_in_provider !== 'google.com') {
    throw new AppError('Only Google sign-in is accepted here', 401);
  }
  // auth_time must be in the past (Firebase's own check)
  if (typeof payload.auth_time !== 'number' || payload.auth_time * 1000 > Date.now() + 60_000) {
    throw new AppError('Google sign-in could not be verified, please try again', 401);
  }

  return {
    uid: payload.sub,
    email: typeof payload.email === 'string' ? payload.email.toLowerCase().trim() : null,
    emailVerified: payload.email_verified === true,
    name: typeof payload.name === 'string' ? payload.name.trim() : '',
    picture: typeof payload.picture === 'string' ? payload.picture : '',
  };
}

export function isAdminEmail(email) {
  return Boolean(email) && env.adminEmails.includes(String(email).toLowerCase().trim());
}
