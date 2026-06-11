import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import './PortfolioCTA.css';

export default function PortfolioCTA() {
  return (
    <div className="portfolio-cta-wrap">
      <Container>
        <div className="portfolio-cta">
          <div className="portfolio-cta-left">
            <div className="portfolio-cta-rocket">🚀</div>
            <div>
              <h2>Have A Project In Mind?</h2>
              <p>Let's build your next digital success story together.</p>
            </div>
          </div>
          <div className="portfolio-cta-right">
            <Button>Get a Free Quote</Button>
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
