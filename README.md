# ResumeFlow — Landing Page

A marketing homepage for an imaginary resume-builder product called **ResumeFlow**.
Built as a weekend PRD exercise: read a written spec, matched its structure and
visual style exactly, and shipped it to GitHub Pages.

## What this page is

A single-page site pitching ResumeFlow to job seekers. It follows the reference
page's section order and dark, violet-accented visual style, rebuilt from
scratch in plain HTML, CSS, and a small amount of JavaScript — no frameworks,
no copied code.

**Sections, top to bottom:**

1. Navigation bar
2. Hero (headline, description, primary CTA, reassurance line)
3. Stats strip (4 quick numbers)
4. Features (6 cards)
5. Templates (3 preview cards)
6. Testimonials (3 quote cards)
7. Call-to-action band
8. FAQ (4 question/answer pairs)
9. Footer (brand, grouped links, copyright)

## Tech

- **HTML** — semantic tags throughout (`header`, `nav`, `main`, `section`,
  `article`, `footer`); one `h1`, then `h2`s for each section heading.
- **CSS** — all styling lives in `style.css`, linked from `<head>`. No inline
  styles, no `<style>` block. Layout uses Flexbox and CSS Grid, and stacks
  cleanly on mobile widths.
- **JavaScript** — `script.js` uses `querySelector` + `textContent` to set the
  footer year and the hero headline from JS. No event handlers yet — that's
  next week's topic.

## Design

- **Theme:** near-black background (`#0a0a0f`) with white text
- **Accent:** violet/indigo (`#7c5cff`), used consistently for buttons, links,
  and highlights
- **Cards:** rounded corners (16px), soft borders, generous padding
- **Type:** Inter (Google Font), large bold headings, one body size scale

Colours were sampled directly from the reference page using the browser
DevTools colour picker.

## Screenshot

![ResumeFlow landing page screenshot](images/screenshot.png)

*(Screenshot added after deploying to GitHub Pages — see note below.)*

## Running locally

Clone the repo and open `index.html` in a browser — no build step required.

```bash
git clone https://github.com/TANUSHREENEGI-DEV/resume-landing.git
cd resume-landing
```

Then just open `index.html`.

## Live site

Deployed with GitHub Pages: _add your live link here after enabling Pages in
repo settings._