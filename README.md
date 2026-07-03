# ResumeFlow Landing Page

This is my weekend project for the internship. My mentor gave me a PRD — a
proper spec document, like what you'd get handed on a real job — and the
whole point was to read it carefully and build exactly what it asked for,
not what I assumed it meant. No skipping sections, no shortcuts.

## What this project is

ResumeFlow is a made-up product — a resume-builder tool. This page is its
marketing homepage, the kind of page you'd land on before signing up. It's
not a real product, it's a practice run for a bigger resume-building tool
we're going to build later in the internship. The idea was to treat it like
the "front door" of a real product, something that would actually make
someone want to click Get Started.

My mentor gave me a reference site to study — not to copy, but to understand
how a page like this is usually structured: what sections it has, what order
they come in, what the visual style feels like. I opened it, looked at the
layout, the spacing, the colours, then closed it and wrote my own HTML and
CSS from scratch. Nothing here is copied from the reference's source code.

## Sections (in order)

The PRD required these 9 sections, top to bottom, and I followed that order
exactly:

1. **Navigation bar** — logo on the left, nav links (Features, Templates,
   FAQ) and a Get Started button on the right
2. **Hero** — a big headline, a short description, the main CTA button, and
   a small reassurance line under it ("No credit card needed")
3. **Stats strip** — 4 quick numbers with labels, like resumes created and
   user rating
4. **Features** — a heading plus 6 cards, each with an icon, a title, and
   one line describing it
5. **Templates** — a heading plus 3 template preview cards
6. **Testimonials** — a heading plus 3 review cards with stars, a quote, and
   a name/role
7. **Call-to-action band** — one last push before the footer, with its own
   button
8. **FAQ** — 4 question and answer pairs
9. **Footer** — logo, tagline, grouped links (Product / Company / Legal),
   and a copyright line

## How I built it

- **Semantic HTML** — I used `header`, `nav`, `main`, `section`, `article`,
  and `footer` properly instead of wrapping everything in generic divs. Divs
  only show up where there genuinely isn't a semantic tag that fits, like
  the grid wrapper around a set of cards.
- **External CSS** — everything is in `style.css`, linked from the head. No
  inline styles anywhere, no `<style>` block sitting in the HTML.
- **Responsive layout** — built with Flexbox and CSS Grid, with media
  queries so the page doesn't fall apart on a phone. Cards stack into a
  single column on small screens instead of squeezing sideways.
- **Accessibility basics** — there's exactly one `h1` on the page (the hero
  headline), and every image has real alt text describing what it is.
- **JavaScript, kept small on purpose** — we haven't covered events yet, so
  `script.js` doesn't have any click handlers or listeners. It just uses
  `querySelector` and `textContent` to set the footer year and the hero
  headline directly from JS, which was enough to show I can reach into the
  page and change it programmatically.

## Design choices

Dark, near-black background with white text, and one accent colour — a
purple/violet — used consistently across every button, link, and highlight.
I got the exact shade by opening the reference site, pressing F12, and using
the DevTools colour picker to sample it directly rather than guessing.
Cards throughout (features, templates, testimonials, FAQ) all share the same
rounded corners, soft borders, and generous padding, so the whole page feels
consistent instead of like separate pieces stitched together.

## Screenshot

![Screenshot of my ResumeFlow landing page](images/screenshot.png)

## Live site

https://tanushreenegi-dev.github.io/resume-landing/