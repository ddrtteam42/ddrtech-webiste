import React from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { scrollToSection } from '../../utils/scrollUtils';
import './About.css';
import officeImage from "../../assets/images/Office.webp";

export default function About() {
  return (
    <Container>
      <section id="about">
        <div className="about-grid">
          <Card>
            <div className="section-tag">About Digital Drive Resource Tech Private Limited</div>
            <h3>We turn ideas into digital products</h3>
            <p>
              We are a passionate team of developers, designers and strategists.
              We build fast, secure and scalable digital solutions.
            </p>
            <ul className="features">
              <li><i className="fa-solid fa-circle-check"></i>Modern & Creative Design</li>
              <li><i className="fa-solid fa-circle-check"></i>High Performance</li>
              <li><i className="fa-solid fa-circle-check"></i>Secure & Scalable</li>
              <li><i className="fa-solid fa-circle-check"></i>24/7 Support</li>
            </ul>
            <Button onClick={() => scrollToSection('contact')}>Learn More About Us</Button>
          </Card>

          <div className="about-image">
            <img src={officeImage} alt="Team collaboration" />
            
          </div>

          <Card>
            <h3>Our Story</h3>
            <p>
              Digital Drive Resource Tech Private Limited was founded with a vision to help businesses in the digital world.
              We started as a small team of developers and designers and today we are proud
              to have delivered many successful projects worldwide.
            </p>
            <p>
              We believe in innovation, quality and long-term partnerships.
              Our goal is to deliver solutions that create real impact.
            </p>
          </Card>
        </div>
      </section>
    </Container>
  );
}
