# Spira Co.

A boutique lighting catalogue and storefront experience for handcrafted lamps. This project is a React single-page app that showcases a premium collection, supports language switching, and includes a shopping cart and checkout flow.

## Overview

Spira Co. presents a curated collection of sculptural lamps with a minimal editorial layout, warm neutral palette, and elevated product storytelling. The experience is designed as a polished front-end prototype for a luxury home goods brand.

## Features

- Editorial-style product landing page
- Responsive catalogue layout for desktop and mobile
- Multi-language toggle for English, Portuguese, and French
- Light and dark theme support
- Interactive shopping cart drawer
- Quantity controls and subtotal calculation
- Checkout modal form for customer details
- React component architecture powered by Vite
- i18next translations with browser locale detection and English fallback

## Project structure

- `index.html` — Vite HTML entry point
- `src/App.jsx` — page composition, cart state, theme, and checkout state
- `src/components/` — reusable storefront UI, with each component folder containing its JSX, CSS, and test files
- `src/data/` — catalogue data and product metadata
- `src/utils/` — shared currency and product-copy helpers
- `src/i18n.js` — supported languages, translated copy, locale detection, and fallback configuration
- `src/styles.css` — responsive visual system and layout

Each component follows this pattern:

```text
src/components/Header/
├── Header.jsx
├── Header.css
└── Header.test.jsx
```
- `src/main.jsx` — React application bootstrap
- `README.md` — project overview and setup instructions

## Local development

Install dependencies and start the Vite development server:

```bash
npm install
npm run dev
```

Then visit the local URL shown by Vite, usually:

```text
http://localhost:5173
```

Create a production build with:

```bash
npm run build
```

Run the component tests with:

```bash
npm test
```

## Notes

- The site is implemented as a front-end prototype and uses placeholder product imagery and sample data.
- Product data and UI behavior are now separated into React-ready structures for future API, CMS, and checkout integrations.
- The Stripe Payment Link remains a placeholder and must be configured before production use.

## License

This project is provided as-is for demonstration and personal use.
