import React from 'react';
import './contacts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Contacts = () => {
  return (
    <section id="contacts" className="contacts-section">
      <h1 className="contacts-title"><span className="highlight-letter">C</span>ontact Us</h1>
      <p className="contacts-description">Feel free to reach out to us for any inquiries.</p>
      <form className="contacts-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" className="btn">Send Message</button>
      </form>
      <div className="social-media">
        <a href="https://t.me/yourtelegram" className="social-icon telegram" aria-label="Telegram">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a href="https://www.instagram.com/yourinstagram" className="social-icon instagram" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/yourfacebook" className="social-icon facebook" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </section>
  );
}

export default Contacts;
