const form = document.getElementById('registration-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const rememberMeCheckbox = document.getElementById('remember-me');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const username = usernameInput.value;
  const email = emailInput.value;
  const rememberMe = rememberMeCheckbox.checked;

  // Set username cookie
  document.cookie = `username=${username}`;

  // Set email cookie (if provided)
  if (email) {
    document.cookie = `email=${email}`;
  }

  // Set remember me cookie (optional with expiry)
  if (rememberMe) {
    const expires = new Date(Date.now() + 86400000).toUTCString(); // Expires in 24 hours
    document.cookie = `remember-me=true; expires=${expires}`;
  }

  alert(`Successfully registered! Username: ${username}, Email: ${email}`);
});
