# WanderWise

A complete travel booking website built with React 18, Vite, Tailwind CSS v3, Framer Motion and
React Router v6. Browse eight fictional destinations, explore day-by-day itineraries, and book
journeys through a fully validated multi-step booking flow. Bookings are saved to the browser's
localStorage and can be managed on the "My bookings" page.

> All destinations, regions, reviews and imagery on this site are fictional / AI-generated and
> created for demonstration purposes.

## Features

- **Home** — animated hero with search-bar overlay, featured destinations carousel, "how it
  works" steps, testimonials, validated newsletter signup, footer
- **Destinations** — live text search; filters for region, price range and minimum rating;
  five sort orders; animated card grid with live results count; filters synced to the URL
- **Destination detail** (`/destinations/:slug`) — photo gallery with keyboard-navigable
  lightbox, day-by-day itinerary timeline, highlights, included/excluded lists, traveller
  reviews, sticky "Book now" card, related destinations
- **Booking flow** (`/booking/:slug`) — three steps: dates & travellers (departure/return date
  validation, adult/child steppers), contact details (name, email regex, phone validation),
  review & confirm with full price breakdown (child fares at 40% off, 8% service fee)
- **Confirmation** (`/booking/confirmed/:reference`) — booking reference in `WW-XXXXXX` format,
  saved to localStorage
- **My bookings** — lists saved bookings with a two-step cancel option
- **About & Contact** — company story, values, stats and a validated enquiry form
- Smooth page transitions (Framer Motion `AnimatePresence`), scroll-triggered reveals, fully
  responsive with a mobile menu

## Stack

- React 18 + Vite 6
- Tailwind CSS v3 (with `tailwind.config.js` + PostCSS)
- Framer Motion 12
- React Router DOM v6 (`BrowserRouter`)

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build locally
```

## Project structure

```
├── index.html
├── vercel.json            # SPA rewrites for Vercel
├── public/images/         # AI-generated destination photography (9 images)
└── src/
    ├── main.jsx
    ├── App.jsx            # routes + AnimatePresence page transitions
    ├── index.css          # Tailwind directives + small custom styles
    ├── data/destinations.js   # 8 fictional destinations, regions, reviews
    ├── utils/helpers.js       # currency/date formatting, booking storage
    ├── components/        # Navbar, Footer, ScrollToTop, PageWrapper, Reveal,
    │                      # DestinationCard, Stars, Lightbox, NewsletterForm
    └── pages/             # Home, Destinations, DestinationDetail, Booking,
                           # Confirmation, MyBookings, About, Contact, NotFound
```

## Notes

- Prices are in GBP, per person. Copy uses British English spelling throughout.
- The `vercel.json` rewrite (`{ "source": "/(.*)", "destination": "/" }`) keeps client-side
  routes working when deployed to Vercel.
