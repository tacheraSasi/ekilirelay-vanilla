import './style.css';
import { sender } from '../mailer.js';

// Grabing the form element
const form = document.querySelector('#form');

// Handling form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Preventing form from reloading the page

  // Geting input values
  const to = document.querySelector('#to').value;
  const subject = document.querySelector('#subject').value;
  const message = document.querySelector('#message').value;

  // Validate inputs (optional)
  if (!to || !subject || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Calling sender function
  sender(to, subject, message, 'From:ekilirelay <relay@ekilie.com>');

  // Optional: Resetcing the form after sending
  form.reset();

  // Notifying the user
  alert('Message sent successfully!');
});
