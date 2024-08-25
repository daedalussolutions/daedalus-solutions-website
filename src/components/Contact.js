import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const domainName = 'daedalussolutions.xyz';

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('https://mail.daedalussolutions.online:443/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, subject, message, domain: domainName }),
    });

    if (response.ok) {
      alert('Email sent successfully');
    } else {
      alert('Error sending email');
    }
  };

  return (
    <div className="contact-form-bg">
      <div className='contact-form'>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <label>Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            required
          />
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            required
          />
          <input type="hidden" name="domain" value={domainName} />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;