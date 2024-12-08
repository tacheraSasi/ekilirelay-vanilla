import './style.css';
import { sender } from '../mailer.js';

// Grab the form element
const form = document.querySelector('#form');

// Handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from reloading the page

  // Get input values
  const to = document.querySelector('#to').value;
  const subject = document.querySelector('#subject').value;
  const message = document.querySelector('#message').value;

  // Validate inputs (optional)
  if (!to || !subject || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Call sender function
  sender(to, subject, message, 'From:<ekilirelay> relay@ekilie.com');

  // Optional: Reset the form after sending
  form.reset();

  // Notify the user
  alert('Message sent successfully!');
});
