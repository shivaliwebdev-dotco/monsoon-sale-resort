# Rainwood Resorts — Monsoon Sale Landing Page

A responsive promotional landing page for a fictional resort group, built using semantic HTML, CSS and vanilla JavaScript.

## Run locally
1. Extract the ZIP.
2. Open `index.html` in a modern browser.
3. Optional local server: run `python -m http.server 8000` in this folder, then open `http://localhost:8000`.

## Page structure
- Announcement bar and header navigation
- Hero campaign section with resort image, headline, countdown and CTA
- Seasonal introduction
- Three offer cards with original price, sale price, discount and amount saved
- Editorial resort-experience image section
- Booking terms strip
- Expandable FAQ using native HTML `<details>`
- Footer and fixed mobile CTA

## Offers (illustrative demo rates)
| Package | Original price | Sale price | Saving |
|---|---:|---:|---:|
| Rainforest Reset | ₹18,500 | ₹12,950 | ₹5,550 (30%) |
| Cloud Nine Couple | ₹24,000 | ₹18,000 | ₹6,000 (25%) |
| Misty Mountain Stay | ₹32,000 | ₹20,800 | ₹11,200 (35%) |

## Key techniques
- **Live countdown:** JavaScript calculates time remaining to `30 November 2026, 23:59:59 IST` and refreshes the display every second. The timestamp uses an explicit `+05:30` offset.
- **Staggered card entrance:** `IntersectionObserver` adds a `visible` class when each card enters view. CSS transition delays produce the staggered effect.
- **Mobile sticky CTA:** fixed to the viewport bottom only on narrow screens. Bottom body padding leaves room so it does not cover the page content.
- **Lightweight interactions:** no framework, carousel, icon pack or animation library. Native FAQ disclosures and reduced-motion support are included.

## Performance notes
The page uses external Unsplash photographs and Google Fonts. For a production release, download and optimize images as WebP/AVIF, self-host fonts, and replace demo content with verified resort details. The page itself has no heavy JavaScript dependencies.

## Before publishing
Replace the fictional Rainwood Resorts brand, example reservation email (`reservations@rainwood.example`), illustrative prices, package inclusions, dates and booking conditions with approved business information.
