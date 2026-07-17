const yearEl = document.querySelector("#year");
yearEl.textContent = new Date().getFullYear();

const eyebrowEl = document.querySelector("#hero-eyebrow");
eyebrowEl.textContent = "✨ AI-Powered Resume Builder";
// dark mode toggle
var toggleBtn = document.getElementById("theme-toggle");
var currentTheme = localStorage.getItem("theme");

if (currentTheme === null) {
  currentTheme = "light";
}

document.body.setAttribute("data-theme", currentTheme);

if (currentTheme === "dark") {
  toggleBtn.textContent = "Light";
} else {
  toggleBtn.textContent = "Dark";
}

toggleBtn.addEventListener("click", function () {
  var theme = document.body.getAttribute("data-theme");

  if (theme === "dark") {
    document.body.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "Dark";
  } else {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "Light";
  }
});
