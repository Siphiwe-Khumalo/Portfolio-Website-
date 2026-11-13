// Renders pdf/portfolio.html to Siphiwe-Khumalo-Portfolio.pdf (A4) and reports any page that overflows.
// Usage (from the repository root): node pdf/build-pdf.cjs   (needs Playwright: npm i -D playwright)
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const src = 'file://' + path.resolve(__dirname, 'portfolio.html');
  const out = path.resolve(__dirname, '..', 'Siphiwe-Khumalo-Portfolio.pdf');
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 794, height: 1123 } });
  await page.goto(src, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const overflow = await page.$$eval('.page', (pages) =>
    pages.map((p, i) => (p.scrollHeight > p.clientHeight + 2 ? i + 1 : 0)).filter(Boolean));
  if (overflow.length) console.warn('Pages with overflowing content:', overflow.join(', '));
  await page.pdf({ path: out, format: 'A4', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  console.log('Wrote', out);
  await browser.close();
})();
