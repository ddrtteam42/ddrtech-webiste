import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import './ContactCTA.css';

export default function ContactCTA() {
  return (
    <section className="contact-cta-section">
      <Container>
        <div className="contact-cta">
          <div className="contact-cta-left">
            <div className="contact-cta-rocket">🚀</div>
            <div>
              <h2>Ready To Start Your Project?</h2>
              <p>Let's turn your ideas into real digital solutions.</p>
            </div>
          </div>
          <div className="contact-cta-right">
            <Button>Get a Free Quote</Button>
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
