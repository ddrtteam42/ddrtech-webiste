import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { scrollToSection } from '../../utils/scrollUtils';
import './ContactCTA.css';

export default function ContactCTA() {
  return (
    <Container>
      <section id="contact">
        <div className="cta">
          <div>
            <small>Let's Work Together</small>
            <h2>
              Have a project in mind?
              Let's build something amazing together.
            </h2>
          </div>

          <Button onClick={() => scrollToSection('contact')}>Get a Free Quote</Button>
        </div>
      </section>
    </Container>
  );
}
