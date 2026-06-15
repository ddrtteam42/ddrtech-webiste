import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import './PricingHero.css';
import heroImage from '../../assets/images/PricingHero.webp';
export default function PricingHero() {
  return (
    <section className="pricing-hero">
      <Container>
        <div className="pricing-hero-inner">
          <div className="pricing-hero-text">
            <div className="pricing-eyebrow">PRICING PLANS</div>
            <h1>Simple, Transparent Pricing For <span>Everyone</span></h1>
            <p>
              Choose the perfect plan for your business needs. All plans are scalable and comes with our dedicated support.
            </p>
            <div className="pricing-hero-btns">
              <Button>Get Free Consultation</Button>
              <Button variant="outline">Compare Plans</Button>
            </div>
          </div>
          <div className="pricing-hero-visual">
            <div className="pricing-glow"></div>
             <div className="device-mockup">
              <img src={heroImage} alt="Digital Drive Resource Tech Private Limited Services - Modern Device Mockup" className="hero-image" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
