document.querySelector("#year").textContent = "© " + new Date().getFullYear() + " ResumeFlow. All rights reserved.";

const toggleButtons = document.querySelectorAll(".toggle-password");

toggleButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const targetId = btn.getAttribute("data-target");
    const input = document.getElementById(targetId);

    if (input.type === "password") {
      input.type = "text";
      btn.textContent = "Hide";
    } else {
      input.type = "password";
      btn.textContent = "Show";
    }
  });
});

const emailInput = document.querySelector('input[type="email"]');

if (emailInput) {
  const savedEmail = sessionStorage.getItem("tempEmail");
  if (savedEmail !== null) {
    emailInput.value = savedEmail;
  }

  emailInput.addEventListener("input", function () {
    sessionStorage.setItem("tempEmail", emailInput.value);
  });
}

document.querySelector("#authForm").addEventListener("submit", function (e) {
  e.preventDefault();
  sessionStorage.removeItem("tempEmail");
});
