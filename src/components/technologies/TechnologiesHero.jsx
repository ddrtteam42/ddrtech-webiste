import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import './TechnologiesHero.css';

export default function TechnologiesHero() {
  return (
    <section className="technologies-hero">
      <Container>
        <div className="technologies-hero-inner">
          <div className="technologies-hero-text">
            <div className="technologies-eyebrow">OUR TECHNOLOGIES</div>
            <h1>Powering Solutions With The <span>Best Technologies</span></h1>
            <p>
              We use modern, secure and scalable technologies to build high-performance digital solutions that
              drive business growth and deliver exceptional user experiences.
            </p>
            <div className="technologies-hero-btns">
              <Button>Our Services</Button>
              <Button variant="outline">Get Free Quote</Button>
            </div>
          </div>
          <div className="technologies-hero-visual">
            <div className="technologies-glow"></div>
            <div className="technologies-stack">
              <div className="technologies-layer l1"></div>
              <div className="technologies-layer l2"></div>
              <div className="technologies-layer l3"></div>
            </div>
            <div className="technologies-float-icon fi1">&lt;/&gt;</div>
            <div className="technologies-float-icon fi2">⚙</div>
            <div className="technologies-float-icon fi3">💻</div>
            <div className="technologies-float-icon fi4">🎯</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
