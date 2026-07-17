document.querySelector("#year").textContent = "© " + new Date().getFullYear() + " ResumeFlow. All rights reserved.";

var toggleButtons = document.querySelectorAll(".toggle-password");

toggleButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var targetId = btn.getAttribute("data-target");
    var input = document.getElementById(targetId);

    if (input.type === "password") {
      input.type = "text";
      btn.textContent = "Hide";
    } else {
      input.type = "password";
      btn.textContent = "Show";
    }
  });
});

var emailInput = document.querySelector('input[type="email"]');

if (emailInput) {
  var savedEmail = sessionStorage.getItem("tempEmail");
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
