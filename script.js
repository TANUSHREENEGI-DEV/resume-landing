const toggleBtn = document.getElementById("theme-toggle");
let currentTheme = localStorage.getItem("theme");

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
  const theme = document.body.getAttribute("data-theme");

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
