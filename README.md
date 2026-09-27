# বাংলাদেশ ল্যান্ডস্কেপ — Server

Express + MongoDB API of Bangladesh Landscape, a district-by-district travel portal for Bangladesh: AI tour plans (Gemini/Claude with mock fallback), verified guide & partner bookings with feature-flag gating, manual bKash + SSLCommerz payments, moderated blogs, admin operations.

**Stack**: Node.js (ESM, JavaScript only) · Express 5 · Mongoose · JWT httpOnly-cookie auth · multer · sanitize-html · puppeteer-core (Bangla PDF rendering via installed Chrome).

Frontend: [`bangladesh-landscape-client`](../../../bangladesh-landscape-client)

## Run locally

Requirements: Node 20+, MongoDB running locally (or set `MONGODB_URI`).

```bash
cp .env.example .env    # then set JWT_SECRET (and optionally GEMINI_API_KEY)
npm install
npm run dev             # http://localhost:5000
npm run seed            # admin user + Sunamganj base data
node src/seed/expandSunamganj.js   # extended spots + English content
```

Health check: `GET /api/v1/health`

## Notes

- Without `GEMINI_API_KEY`/`ANTHROPIC_API_KEY`, plan generation uses a deterministic mock (dev mode).
- Without SSLCommerz credentials, a mock gateway runs in development; production uses the manual bKash flow (number set in admin settings).
- `uploads/` (public images) and `private-uploads/` (NID documents) are runtime data, not tracked in git.
