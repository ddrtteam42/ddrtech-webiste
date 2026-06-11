import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import './TechnologiesCTA.css';

export default function TechnologiesCTA() {
  return (
    <div className="technologies-cta-wrap">
      <Container>
        <div className="technologies-cta">
          <div className="technologies-cta-left">
            <div className="technologies-cta-rocket">🚀</div>
            <div>
              <h2>Ready To Build Something Amazing?</h2>
              <p>We use the best technologies to turn your ideas into success.</p>
            </div>
          </div>
          <div className="technologies-cta-right">
            <Button>Get a Free Quote</Button>
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
