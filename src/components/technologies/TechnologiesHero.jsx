import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import './TechnologiesHero.css';
import heroImage from '../../assets/images/technologiesHero.webp';
export default function TechnologiesHero() {
  return (
    <section className="technologies-hero">
      <Container>
        <div className="technologies-hero-inner">
          <div className="technologies-hero-text">
            <div className="technologies-eyebrow">OUR TECHNOLOGIES</div>
            <h1>Powering Solutions <br></br>With The <span>Best Technologies</span></h1>
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
            <div className="device-mockup">
              <img src={heroImage} alt="Digital Drive Resource Tech Private Limited Services - Modern Device Mockup" className="hero-image" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
