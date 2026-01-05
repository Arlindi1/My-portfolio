import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((current) => ({
      ...current,
      [name]: value
    }));

    if (status.type !== 'idle') setStatus({ type: 'idle', message: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus({ type: 'sending', message: '' });

    emailjs
      .sendForm('service_007', 'template_007', e.target, '9Xnd_SJv22oliwWHD')
      .then(
        () => {
          setStatus({
            type: 'success',
            message: "Thanks! I'll get back to you as soon as possible."
          });

          setFormData({
            from_name: '',
            reply_to: '',
            message: ''
          });
        },
        () => {
          setStatus({
            type: 'error',
            message:
              'Something went wrong while sending. Please try again in a moment.'
          });
        }
      );

  };

  return (
    <section id="contact" className="section contact-section reveal">
      <header className="section-header">
        <p className="section-kicker">Let’s talk</p>
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          Have an opportunity or want to connect? Send me a message.
        </p>
      </header>

      <div className="card contact-card">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-grid">
            <label className="field">
              <span className="field-label">Name</span>
              <input
                type="text"
                name="from_name"
                className="field-input"
                value={formData.from_name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </label>

            <label className="field">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="reply_to"
                className="field-input"
                value={formData.reply_to}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </label>

            <label className="field field--full">
              <span className="field-label">Message</span>
              <textarea
                name="message"
                className="field-input field-textarea"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
              />
            </label>
          </div>

          <div className="contact-actions">
            <button
              type="submit"
              className="btn"
              disabled={status.type === 'sending'}
            >
              {status.type === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {status.type !== 'idle' ? (
              <p className={`contact-status is-${status.type}`} role="status">
                {status.message}
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
