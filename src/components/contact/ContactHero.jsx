import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import './ContactHero.css';
import heroImage from '../../assets/images/ContactHero.png';
export default function ContactHero() {
  return (
    <section className="contact-hero">
      <Container>
        <div className="contact-hero-inner">
          <div className="contact-hero-text">
            <div className="contact-eyebrow">CONTACT US</div>
            <h1>Let's Build Something <span>Amazing</span> Together</h1>
            <p>
              We're here to help and answer any question you might have. We look forward to hearing from you!
            </p>
            <div className="contact-hero-btns">
              <Button>Get Free Quote</Button>
              <Button variant="outline">Call Us Now</Button>
            </div>
          </div>
          <div className="contact-hero-visual">
            <div className="contact-glow"></div>
            <div className="device-mockup">
              <img src={heroImage} alt="Digital Drive Resource Tech Private Limited Services - Modern Device Mockup" className="hero-image" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
