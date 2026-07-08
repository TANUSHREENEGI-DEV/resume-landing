document.querySelector('#year').textContent = '© ' + new Date().getFullYear() + ' ResumeFlow. All rights reserved.';

document.querySelectorAll('.toggle-password').forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const input = document.getElementById(targetId);
    const isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    btn.textContent = isHidden ? 'Hide' : 'Show';
  });
});

document.querySelector('#authForm').addEventListener('submit', (e) => {
  e.preventDefault();
});
