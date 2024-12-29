function togglePassword() {
  const passwordField = document.getElementById('password');
  const eyeIcon = document.getElementById('eye-icon');

  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    eyeIcon.classList.replace('fa-eye', 'fa-eye-slash');
  } else {
    passwordField.type = 'password';
    eyeIcon.classList.replace('fa-eye-slash', 'fa-eye');
  }
}

function animateButton(button) {
  button.classList.add('button-move-up');
  setTimeout(() => button.classList.remove('button-move-up'), 300);
}
