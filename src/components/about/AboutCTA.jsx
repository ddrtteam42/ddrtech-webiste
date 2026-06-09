import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import './AboutCTA.css';

export default function AboutCTA() {
  return (
    <section className="about-cta-section">
      <Container>
        <div className="cta">
          <div className="left">
            <div className="cta-icon">🚀</div>
            <div>
              <h3>Have a project in mind?</h3>
              <p>Let's build something amazing together.</p>
            </div>
          </div>
          <Button>Get a Free Quote</Button>
        </div>
      </Container>
    </section>
  );
}
