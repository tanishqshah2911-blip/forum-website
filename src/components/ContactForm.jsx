import { useState } from 'react';

/**
 * Premium animated contact form.
 * Submits via mailto: (no backend dependency). Glowing focus
 * borders, animated submit button, success state.
 */
export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      message
    ].join('\n');
    const href =
      'mailto:tfxautomation@gmail.com' +
      '?subject=' + encodeURIComponent(subject || `Inquiry from ${name}`) +
      '&body=' + encodeURIComponent(body);
    window.location.href = href;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="cf-row">
        <div className="cf-field">
          <input
            id="cf-name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            placeholder=" "
          />
          <label htmlFor="cf-name">Your name</label>
          <span className="cf-underline" />
        </div>
        <div className="cf-field">
          <input
            id="cf-email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder=" "
          />
          <label htmlFor="cf-email">Email</label>
          <span className="cf-underline" />
        </div>
      </div>
      <div className="cf-field">
        <input
          id="cf-subject"
          type="text"
          value={subject}
          onChange={e => setSubject(e.target.value)}
          placeholder=" "
        />
        <label htmlFor="cf-subject">Subject (optional)</label>
        <span className="cf-underline" />
      </div>
      <div className="cf-field">
        <textarea
          id="cf-message"
          rows="4"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
          placeholder=" "
        />
        <label htmlFor="cf-message">Message</label>
        <span className="cf-underline" />
      </div>
      <button type="submit" className={`btn btn-primary cf-submit ${sent ? 'is-sent' : ''}`}>
        <span className="cf-submit-label">{sent ? 'Opening your mail app…' : 'Send Message'}</span>
        <span className="cf-submit-arrow">→</span>
      </button>
    </form>
  );
}
