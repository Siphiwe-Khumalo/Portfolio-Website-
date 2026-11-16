# CLAUDE.md — Siphiwe Khumalo portfolio (handover notes)

Read this first. It records what the portfolio is, where every fact came from, the rules it follows, and what is
still open. Last updated: 2026-11-16.

Live site: https://siphiwe-khumalo.github.io/Portfolio-Website-/ (GitHub Pages, serves `main`).
Repo: `Siphiwe-Khumalo/Portfolio-Website-`. Work branch: `claude/gifted-sagan-4ugtao`, merged via
[PR #1](https://github.com/Siphiwe-Khumalo/Portfolio-Website-/pull/1) (rebuild) and
[PR #2](https://github.com/Siphiwe-Khumalo/Portfolio-Website-/pull/2) (email + certificate).
The owner asks for a PR and a merge explicitly; do not merge without being asked.

The person you work with is **Siphiwe Khumalo** ("Ronnie"), IT Administrator at Spartcon Technologies.
They want short, direct answers and work under time pressure.

---

## 1. What the site is

A static personal portfolio (HTML, CSS, a little JS, no build step) positioning Siphiwe across three disciplines:
**building automation**, **IT infrastructure** and **software development**. It was rebuilt in November 2026 from
an older single-page site that had become corrupted (chat text pasted into `index.html` and the page duplicated).

Sections (all in `index.html`, in this order): Hero · 01 About · 02 Experience · 03 Case studies (ARC Glasshouse,
Department of Health Middelburg, Spartcon Capture) · 04 Additional Software & Web Projects · 05 Skills ·
06 Certifications & training · 07 Contact.

A separate **13-page A4 PDF portfolio** (`Siphiwe-Khumalo-Portfolio.pdf`) is generated from `pdf/portfolio.html`
with its own editorial layout (dark cover, light interior). It is not a print of the website.

## 2. Structure

```
index.html                     All website content
css/site.css                   Styles; colour tokens in :root
js/site.js                     Header state, mobile menu, nav highlight, scroll reveal, gallery lightbox
assets/favicon.svg             "SK" monogram
assets/img/<project>/          Web images (WebP, max 1800 px wide)
assets/img/og-card.jpg         Social preview, 1200 × 630
Siphiwe-Khumalo-Portfolio.pdf  Generated PDF (~5 MB)
pdf/portfolio.html             PDF source (A4 pages, class .page)
pdf/img/                       JPEG copies for the PDF (WebP is re-encoded losslessly by Chromium: 17 MB PDF)
pdf/build-pdf.cjs              node pdf/build-pdf.cjs → writes the PDF, warns on page overflow
README.md                      Run / deploy / update instructions for humans
```

Design: graphite background `#161718`, surfaces `#1e1f21` / `#26272a`, amber accent `#d9913f`, text `#ece9e3`.
Fonts (Google Fonts): Space Grotesk (headings), Manrope (body), JetBrains Mono (labels). The brief forbids neon,
purple/blue gradients, glassmorphism, glow, stock tech imagery and progress bars.

Gallery markup: `<div class="gallery" data-gallery="Name">` containing `<a class="g-item [g-lg|g-md|g-wide]">`
links to the full image. JS opens them in a `<dialog>` lightbox (arrows, Esc, focus returns). Without JS the links
just open the image. The certificate uses the same lightbox (`.cert-slot[data-gallery]`).

## 3. Facts and where they came from (do not change without the owner)

| Fact | Source |
|---|---|
| Job title IT Administrator, Spartcon Technologies, started **1 Aug 2026** | Siphiwe, 2026-11-13 |
| ARC Glasshouse: Siphiwe's role is **software only** (custom BMS UI, HVAC graphics, 10 Windows PoE touchscreens, Niagara N4, testing/handover). Hardware, electrical and infrastructure were done by others, and the site must say so. Handover **9 Oct 2026** | Siphiwe, 2026-11-13 |
| ARC details shown (10 greenhouses, temp/humidity/CO₂, irrigation `ValveSch` 1–10, roles, thresholds, BACnet/IP v2.0) | Siphiwe's ARC screenshots |
| Middelburg: Department of Health pharmaceutical warehouse, 5 rooftop + 11 hybrid units, 6 sensors, 6 fire dampers; dashboard, gateway, host PC, Tailscale, training; handover **11 Nov 2026** | Built in `Siphiwe-Khumalo/Lumenlabscreatives` (`middelburg-bms/`, see its CLAUDE.md) |
| Spartcon Capture (invoice OCR/extraction, review, duplicate check, Excel export, append-only audit log with integrity check) and Spartcon Timesheet (geofenced 100 m clock-in, approvals, CSV) | Siphiwe's screenshots only (the code lives on Siphiwe's laptop and was not reachable). Tech stack not stated on purpose. Role written as "Design & development" |
| **Niagara 4 Technical Certification** (Tridium Certificate of Completion), five-day course 26–30 Oct 2026, certified **30 Oct 2026**, exam **83%**, Authentication ID **438218109**, **4.0 CEU** | Siphiwe + certificate PDF |
| Earlier web projects (SmartMailGen, CineVerse, RonnieAi, GlowUp, Quote Generator) and their live/source links; freelance web dev + IT support; "Tourism studies" | Old portfolio |
| Public email **siphiwek@spartcongroup.co.za**, LinkedIn `siphiwe-khumalo-97a0aa306`, GitHub `Siphiwe-Khumalo` | Siphiwe asked for these on the Contact page, 2026-11-13 |

Clients that may be named publicly (owner's permission): **Spartcon**, **ARC Glasshouse**, **Department of Health
(Middelburg)**. Do not name individual people from the projects (for example the controls integrator).

## 4. Content rules

1. **Never invent** qualifications, responsibilities, dates, numbers or technology. If something is unknown, leave
   it out or show a clearly marked placeholder, and ask.
2. **No confidential technical detail**: no IP addresses, hostnames, credentials, point paths or internal notes.
   The ARC settings screenshot has a demo email blurred, and the irrigation screenshot had an internal note (with a
   person's name and slot names) painted out. Keep it that way.
3. Screenshots with sample or test values carry a caption that says so (Middelburg: test environment; ARC: development
   and testing; Capture: fictional sample documents).
4. Tone: an emerging professional with real deployments. Not a student, and not a senior engineer.
5. No stats without evidence (the old "15+ projects / 3+ years" was dropped).

## 5. Image provenance

- `profile/on-site.webp`: Siphiwe in a hi-vis vest with a floor-standing rack, Spartcon site, photo dated 6 Nov 2026.
  The caption deliberately does not name the site (unconfirmed).
- `profile/portrait.webp`: from the old site (`image.png`).
- `middelburg/commissioning.webp`: laptop, ping test and Omada box. Placed in the Middelburg gallery as commissioning
  work (assumed, not contradicted by Siphiwe).
- `middelburg/*` dashboard shots: captured from the dashboard against a mock JACE with sample values.
- `arc/*`, `capture/*`, `timesheet/*`: Siphiwe's screenshots, cropped and converted.
- `certificates/niagara4-technical-certification.webp`: the Tridium PDF, rotated upright and trimmed.
- **Not used**: a Netgear/Synology wall board photo and a grey wall-cabinet photo. They look like downloaded
  reference images (736 × 981, no date). Use only if Siphiwe confirms they are their own installs.

## 6. Decisions

- Kept the static, no-build architecture (it already deployed on GitHub Pages). No backend and no contact form:
  the email link is the contact mechanism.
- Videos: the case studies were designed to take videos, but Siphiwe has none, and on 2026-11-13 asked for the
  video support to be removed. It is gone from the CSS and README. Re-add a `<figure>` with `<video controls>`
  only if real footage arrives.
- Spartcon Payroll was left out (no screenshots, per Siphiwe). The CSIR Building 53 concept demonstration
  (`Lumenlabscreatives/Building53_BMS_Spartcon.pdf`) was not added; Siphiwe never asked for it.

## 7. Check before every push

```
python3 -m http.server 8123          # in the repo root
# Playwright (NODE_PATH=/opt/node-tools/node_modules in the cloud sandbox): load the page at 1440, 820 and 390 px,
# assert no console errors / failed requests / horizontal overflow, every img has naturalWidth > 0,
# every href="#…" resolves, the lightbox opens and arrows/Esc work, the mobile menu opens and closes.
node pdf/build-pdf.cjs               # must stay ~13 pages; the only known warning is page 1 (cover, harmless)
```
Save QA screenshots in a scratch folder, **not the repo** (`lb.png` and `menu.png` slipped into PR #2 and were removed
on 2026-11-16). When content changes, update **both** `index.html` and `pdf/portfolio.html`, then rebuild the PDF.

## 8. Open items

- Confirm the site of the hi-vis photo and the Middelburg commissioning photo, if Siphiwe wants captions to name it.
- Confirm whether Tourism studies were completed (no CV was supplied; the site says "studies").
- The live site could not be fetched from the cloud sandbox (github.io blocked by the proxy). Siphiwe checks it in a browser.
