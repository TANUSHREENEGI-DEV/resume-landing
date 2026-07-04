# ResumeFlow Landing Page

This is my weekend project for the internship. My mentor gave me a PRD (a
proper spec document) and I had to build exactly what it said, no guessing.

## What this is

ResumeFlow is a fake product, just a resume builder. This is its homepage,
built as practice before we build the real resume tool later in the
internship. My mentor gave me a reference site to look at — not to copy the
code, just to see how it's structured. So I looked at it, then wrote
everything myself.

After I submitted the first version, my mentor said the colors, fonts, and
a couple sections needed to match the reference more closely. So I went
back and changed the accent color to a teal-blue gradient, switched the
font to Poppins, and added a "How It Works" section I didn't have before.

## Sections

1. Navbar
2. Hero
3. Stats
4. Features (6 cards)
5. How It Works (3 steps)
6. Templates (3 cards)
7. Testimonials (3 cards)
8. CTA section
9. FAQ (4 questions)
10. Footer

## What I used

- **HTML** — real semantic tags (header, nav, main, section, article,
  footer) instead of divs everywhere. Only used div where nothing else made
  sense, like the grid wrapper for the cards.
- **CSS** — everything in style.css, no inline styles.
- **Responsive** — Flexbox and Grid, with media queries so it doesn't break
  on phones.
- **JS** — kept it small since we haven't done events yet. script.js just
  sets the footer year and the hero eyebrow text using querySelector and
  textContent.
- **FAQ** — used the details/summary HTML tags for the accordion instead of
  JavaScript. The browser handles the open/close on its own, no events
  needed.

## Colors and fonts

Dark background, teal-to-blue gradient on the logo, buttons, and part of the
headline. Stats numbers each have a different color (teal, blue, purple,
pink) instead of all being the same. Font is Poppins.

## Screenshot

![screenshot of my ResumeFlow landing page](images/screenshot.png)

## Live site

https://tanushreenegi-dev.github.io/resume-landing/



