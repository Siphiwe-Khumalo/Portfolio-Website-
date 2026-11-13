# Siphiwe Khumalo: Portfolio

Personal portfolio covering building automation, IT infrastructure and software development.
It is a plain static site (HTML, CSS and a little JavaScript) with no build step, and it is hosted on GitHub Pages.

## Structure

```
index.html                     The whole website (all content lives here)
css/site.css                   Styles (colour tokens at the top)
js/site.js                     Menu, section highlight, scroll reveal, gallery lightbox
assets/favicon.svg             Site icon
assets/img/<project>/          Web images (WebP), one folder per project
assets/img/og-card.jpg         Social sharing preview (1200 × 630)
Siphiwe-Khumalo-Portfolio.pdf  Downloadable PDF portfolio (generated)
pdf/portfolio.html             Source layout of the PDF (A4, 13 pages)
pdf/img/                       Compressed JPEG copies used by the PDF
pdf/build-pdf.cjs              Renders the PDF
```

## Run locally

```
python -m http.server 8080
```
Then open http://localhost:8080. You can also open `index.html` directly in a browser.

## Deploy

GitHub Pages serves the `main` branch. Merge or push to `main`, and the site updates at
https://siphiwe-khumalo.github.io/Portfolio-Website-/ within a minute or two.

## Common updates

- **New images:** export as WebP at most 1800 px wide, put them in the project's folder, and add an
  `<a class="g-item" href="…"><img src="…" width="…" height="…" loading="lazy" alt="…"><figcaption>…</figcaption></a>`.
  Add `g-lg` (large), `g-md` (half) or `g-wide` (full width) to change the size in the grid.

## Rebuild the PDF

Requires Node.js and Playwright (`npm i -D playwright`, then `npx playwright install chromium`):
```
node pdf/build-pdf.cjs
```
The script warns if any page's content overflows. If you add images to the PDF, save JPEG copies in `pdf/img/`.
WebP is re-encoded losslessly and makes the file very large.
