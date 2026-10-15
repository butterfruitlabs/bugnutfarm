# Bugnut Farm Ciderhouse — one-page website

A responsive, static website for the cidery in Montgomery, New York. The site's hand-lettered wordmark is traced from the artwork supplied by Bugnut Farm. The temporary illustrations are original decorative placeholders, **not photographs of the actual orchard, barn, or bottles**.

## View the site

Open `index.html` in any modern browser. No installation, server, database, or subscription is required. Alternatively, upload all files and folders unchanged to any static web host (Netlify, Cloudflare Pages, GitHub Pages, or conventional web hosting).

## Before publishing

1. **Add your real photos.** Put JPG/WebP images in the `assets` folder. In `site-config.js`, change `photos.orchard`, `photos.barn`, `photos.apples`, `photos.rosalie`, and `photos.lucie` to their paths (example: `"assets/orchard.jpg"`). Leave any blank to continue showing the vintage illustration. Wide landscape images suit the orchard and barn; portrait/cropped bottle images suit the cider cards. You can provide just one or two images to start.
2. **Add your contact email.** Set `contactEmail: "your-real-address@example.com"` in `site-config.js`. Until then the footer displays “Contact email to be added before launch.” No fictitious email or nonfunctional form is used.
3. **Double-check vintage and release details** after bottling. Rosalie (2026 release / 2025 harvest) is 8.0% ABV and dry; Lucie (same release/harvest) is 8.2% ABV and dry; Babette (2025 release / 2024 harvest) is bone dry, 8.4% ABV, 750 mL. Production method, carbonation, and packaging for Rosalie and Lucie are intentionally not assumed.
4. Add your domain and your preferred Open Graph image if desired. A domain is not required to preview.

## Editing the copy

All text is in `index.html` under the respective `section` headings. Styling is in `styles.css`. `script.js` supplies photos and contact email from `site-config.js` and updates the copyright year.

## Fonts and dependencies

The site uses the publicly hosted Google Fonts `Goudy Bookletter 1911` and `DM Sans` when an internet connection is available. Browser fonts are used as fallbacks when offline. The site otherwise requires no external libraries or tracking scripts.

## What's included

- `index.html` — homepage
- `styles.css` — layout, color, responsive styles
- `site-config.js` — contact and photo settings
- `script.js` — simple configuration loader
- `assets/wordmark.svg` — original provided artwork vector-traced
- `assets/wordmark-*.svg` — cropped sections of the same vector art for mobile
- `assets/orchard-engraving.svg`, `assets/barn-engraving.svg`, `assets/apple-sprig.svg` — temporary decorative illustrations
- `assets/favicon.svg` — favicon

The whole site is static, accessible, mobile responsive, and includes basic search/social metadata. No checkout or public visitor booking is included.

### Current branding

The website header uses the smoothed high-resolution wordmark PNG assets. The favicon uses the borderless dairy-barn illustration (`assets/favicon-32x32.png`, `assets/favicon-16x16.png`, `assets/apple-touch-icon.png`, and `favicon.ico`). The site contains no bottle-label gallery.
