import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_007', 'template_007', e.target, '9Xnd_SJv22oliwWHD')
      .then((result) => {
          console.log('Email successfully sent!', result.text);
      }, (error) => {
          console.log('Failed to send email:', error.text);
      });

    setFormData({
      from_name: '',
      reply_to: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="bg-dark-800 text-white p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">Contact</h2>
        <form className="mt-6" onSubmit={handleSubmit}>
          <label className="block mb-4">
            <span className="block text-sm">Name</span>
            <input
              type="text"
              name="from_name"
              className="w-full mt-1 p-2 rounded bg-dark-700 text-white"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="block mb-4">
            <span className="block text-sm">Email</span>
            <input
              type="email"
              name="reply_to"
              className="w-full mt-1 p-2 rounded bg-dark-700 text-white"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="block mb-4">
            <span className="block text-sm">Message</span>
            <textarea
              name="message"
              className="w-full mt-1 p-2 rounded bg-dark-700 text-white"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button type="submit" className="mt-4 p-2 bg-blue-600 rounded">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
