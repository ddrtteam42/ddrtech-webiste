import React, { useState } from 'react';
import Container from '../ui/Container';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-form-section">
      <Container>
        <div className="contact-grid">
          {/* Form */}
          <div className="form-box">
            <div className="form-heading">Send Us A Message</div>
            <div className="form-heading-underline"></div>
            <p className="form-sub">Fill out the form and our team will get back to you as soon as possible.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <span className="field-icon">👤</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field">
                  <span className="field-icon">✉</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <span className="field-icon">📞</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <span className="field-icon">✎</span>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="field field-area">
                <span className="field-icon">✎</span>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="send-btn">
                Send Message →
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="info-card">
            <div className="form-heading">Contact Information</div>
            <div className="form-heading-underline"></div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <b>Phone</b>
                <span>+91 83606 86961</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">✉</div>
              <div>
                <b>Email</b>
                <span>hellodigitaldriveresourcetech@gmail.com</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <b>Address</b>
                <span>Plot no.257, Ind.Area Phase-IX, Mohali-160062 Chandigarh (INDIA)</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕐</div>
              <div>
                <b>Working Hours</b>
                <span>Mon - Sat: 10:00 AM - 7:00 PM<br />Sunday: Closed</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
