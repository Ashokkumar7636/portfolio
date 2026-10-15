import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import './Contact.css';  // Link to the CSS file

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <Mail className="icon" size={32} />
          <h2 className="title">Get in Touch</h2>
        </div>
        <div className="contact-grid">
          <div className="form-container">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="label">Name</label>
                <input
                  type="text"
                  id="name"
                  className="input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="label">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="textarea"
                />
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
          <div className="contact-info">
            <div className="contact-details">
              <h3 className="contact-title">Contact Information</h3>
              <p className="contact-desc">Feel free to reach out through any of these channels.</p>
            </div>
            <div className="contact-links">
              <a href="https://mail.google.com" className="contact-link">
                <Mail size={20} />
                <span>ashokkumar76367@gmail.com</span>
              </a>
              <a href="https://github.com" className="contact-link">
                <Github size={20} />
                <span>Ashokkumar7636</span>
              </a>
              <a href="https://linkedin.com" className="contact-link">
                <Linkedin size={20} />
                <span>Ashokkumar</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
