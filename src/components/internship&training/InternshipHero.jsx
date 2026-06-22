import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import './InternshipHero.css';

export default function InternshipHero() {
  return (
    <section className="internship-hero">
      <div className="internship-hero-bg"></div>
      <Container>
        <div className="internship-hero-grid">
          <div className="internship-hero-content">
            <p className="internship-hero-tag">Industrial Training & Internship Program</p>
            <h1>
              Learn. Implement.<br />
              <span className="gradient-text">Lead Your Future.</span>
            </h1>
            <p className="internship-hero-desc">
              Gain practical skills by working on live projects and real-time scenarios
              under the guidance of industry experts.
            </p>
            <div className="internship-hero-features">
              <div className="hero-feature">
                <span className="dot blue"></span> Live Projects
              </div>
              <div className="hero-feature">
                <span className="dot green"></span> Placement Assistance
              </div>
              <div className="hero-feature">
                <span className="dot orange"></span> Industry Certificate
              </div>
              <div className="hero-feature">
                <span className="dot blue"></span> Expert Mentorship
              </div>
              <div className="hero-feature">
                <span className="dot red"></span> Internship Letter
              </div>
              <div className="hero-feature">
                <span className="dot green"></span> Resume Building Support
              </div>
            </div>
            <div className="internship-hero-buttons">
              <Button onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}>
                Apply Now <i className="fas fa-arrow-right"></i>
              </Button>
              <Button variant="outline" className="hero-outline-btn">
                Download Brochure <i className="fas fa-download"></i>
              </Button>
            </div>
          </div>

          <div className="internship-hero-image">
            <div className="hero-mockup-container">
              <div className="hero-glow-effect"></div>
              <div className="hero-device-mockup">
                <img
                  src="/images/internshipHero.webp"
                  alt="Internship Training Program - Students Learning"
                  className="hero-image"
                  loading="lazy"
                  width="1536"
                  height="1024"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
