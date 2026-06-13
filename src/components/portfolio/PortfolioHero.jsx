import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import './PortfolioHero.css';
import heroImage from '../../assets/images/PortHeroImage.png';
export default function PortfolioHero() {
  return (
    <section className="portfolio-hero">
      <Container>
        <div className="portfolio-hero-inner">
          <div className="portfolio-hero-text">
            <div className="portfolio-eyebrow">OUR PORTFOLIO</div>
            <h1>Projects That<br />Deliver <span>Results</span></h1>
            <p>
              We create innovative websites, mobile applications and software solutions that help businesses grow
              and succeed in the digital world.
            </p>
            <div className="portfolio-hero-btns">
              <Button>View Projects</Button>
              <Button variant="outline">Get Free Quote</Button>
            </div>
          </div>
          <div className="portfolio-hero-visual">
            <div className="portfolio-glow"></div>
           <div className="device-mockup">
              <img src={heroImage} alt="Digital Drive Resource Tech Private Limited Services - Modern Device Mockup" className="port-hero-image" />
            </div>
            
          </div>
        </div>
      </Container>
    </section>
  );
}
