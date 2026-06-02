import React from 'react';
import Container from '../ui/Container';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="footer-grid">
          <div>
            <div className="logo">
              <i className="fa-solid fa-cloud"></i>
              Cloud Tech
            </div>

            <p style={{marginTop: '20px'}}>
              We build modern websites, mobile apps and digital solutions
              that help businesses grow and succeed.
            </p>

            <div className="socials">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-x-twitter"></i>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Pricing</li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li>Website Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>E-Commerce Solutions</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          <div>
            <h4>Contact Us</h4>
            <ul>
              <li>+91 98765 43210</li>
              <li>hello@cloudtech.com</li>
              <li>123, Tech Street, Lucknow, India - 226010</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Cloud Tech. All Rights Reserved.</p>
          <p>Terms & Conditions</p>
        </div>
      </Container>
    </footer>
  );
}
