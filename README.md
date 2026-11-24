# Grovjoint India website – development starter

Premium multi-page Next.js website starter using the supplied 62-page Grovjoint catalogue and logo.

## Run locally
1. Install Node.js LTS.
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open http://localhost:3000.

## Important implementation notes
- Catalogue product names/model numbers are represented in `src/lib/products.ts`; compare against the original catalogue before final production release, especially small-print model codes.
- Certificate images in `public/images/certificates/` are crops from catalogue pages 4–6. Confirm certificate validity and scope before publishing.
- Individual product images are intentionally not replaced with group shots or unverified alternatives. Product cards currently show a clearly marked image placeholder until a model-matched single-product image is sourced and approved.
- Contact details follow the user's instruction to use catalogue page 62. The map embed and directions link use the supplied coordinates `8.802428, 78.134050`.
- The RFQ page is front-end only. A production backend still needs database persistence, email delivery, validation, spam protection and admin authentication.
- Company copy expands the catalogue profile without inventing factory capacity, years of experience or unverified claims.

## Before production
- Verify every model code and product specification against the original catalogue.
- Replace placeholders with individual images verified against exact product type/model.
- Connect PostgreSQL and secure admin/RFQ APIs.
- Add SMTP/email service, captcha/anti-spam and privacy policy.
- Confirm the map pin and certificate validity.
