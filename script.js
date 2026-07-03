// script.js
// No events yet — just reaching into the page and setting content.

const yearEl = document.querySelector("#year");
yearEl.textContent = new Date().getFullYear();

const headlineEl = document.querySelector("#hero-headline");
headlineEl.textContent = "Your Perfect Resume in Minutes";