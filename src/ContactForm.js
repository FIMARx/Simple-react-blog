import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here
    // For demonstration purposes, let's just console log the values
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear input fields
    setName('');
    setEmail('');
    setMessage('');

    // Mark form as submitted
    setSubmitted(true);
  };

  return (
    <div className="contact-form">
      <h2><i class="fa-solid fa-file-signature"></i> Contact Us</h2>
      {submitted ? (
        <p className="success-message"><i class="fa-solid fa-square-check"></i> Thank you for your message! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name"><i class="fa-solid fa-signature"></i> Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email"><i class="fa-solid fa-envelope"></i> Email</label>
          <input
            type="email"
            id="email"
            className="email-input" // Add a specific class name to the email input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="message"><i class="fa-solid fa-message"></i> Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit"><i class="fa-solid fa-paper-plane"></i> Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;