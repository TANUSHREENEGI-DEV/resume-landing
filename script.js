// script.js
// No events yet — just reaching into the page and setting content.

const yearEl = document.querySelector("#year");
yearEl.textContent = new Date().getFullYear();

const eyebrowEl = document.querySelector("#hero-eyebrow");
eyebrowEl.textContent = "✨ Built for job seekers who mean business";