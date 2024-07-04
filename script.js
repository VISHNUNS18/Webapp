const form = document.getElementById('registration-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const rememberMeCheckbox = document.getElementById('remember-me');

// Function to set a cookie
function setCookie(name, value, expires) {
  let cookie = `${name}=${value}`;
  if (expires) {
    cookie += `; expires=${expires}`;
  }
  document.cookie = cookie;
}

// Set a sample cookie on page load
window.onload = () => {
  setCookie('sample-cookie', 'sample-value', new Date(Date.now() + 86400000).toUTCString()); // Expires in 24 hours
};
const privacyButton = document.getElementById('privacy-policy-button');
const privacyPopup = document.getElementById('privacy-popup');
const closeButton = document.querySelector('.privacy-popup-close');

privacyButton.addEventListener('click', () => {
  privacyPopup.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  privacyPopup.style.display = 'none';
});
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const username = usernameInput.value;
  const email = emailInput.value;
  const rememberMe = rememberMeCheckbox.checked;
  const expires = new Date(Date.now() + 86400000).toUTCString(); // Expires in 24 hours

  setCookie('site-name', 'vishnu');
  setCookie('username', username);

  if (email) {
    setCookie('email', email);
  }

  if (rememberMe) {
    setCookie('remember-me', 'true', expires);
  } else {
    setCookie('remember-me', 'false', expires);
  }

  alert(`Successfully registered! Username: ${username}, Email: ${email}`);
});