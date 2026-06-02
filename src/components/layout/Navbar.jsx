import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { scrollToSection } from '../../utils/scrollUtils';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 100);
    }
  };

  const handleContactClick = () => {
    if (location.pathname === '/') {
      scrollToSection('contact');
    } else {
      navigate('/');
      setTimeout(() => scrollToSection('contact'), 100);
    }
  };

  return (
    <Container>
      <nav className="navbar">
        <div className="logo">
          <i className="fa-solid fa-cloud"></i>
          Cloud Tech
        </div>

        <ul className="nav-links">
          <li><button onClick={() => handleNavClick('home')} className="nav-button">Home</button></li>
          <li><button onClick={() => handleNavClick('about')} className="nav-button">About Us</button></li>
          <li><button onClick={() => handleNavClick('services')} className="nav-button">Services</button></li>
          <li><button onClick={() => handleNavClick('portfolio')} className="nav-button">Portfolio</button></li>
          <li><button onClick={() => handleNavClick('pricing')} className="nav-button">Pricing</button></li>
          <li><button onClick={() => handleNavClick('contact')} className="nav-button">Contact</button></li>
        </ul>

        <Button onClick={() => handleContactClick()}>Get a Free Quote</Button>
      </nav>
    </Container>
  );
}
