import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { scrollToSection } from '../../utils/scrollUtils';
import logoImage from '../../assets/icons/logo.png';
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

  const handleAboutClick = () => {
    navigate('/about');
    window.scrollTo(0, 0);
  };

  const handleServicesClick = () => {
    navigate('/services');
    window.scrollTo(0, 0);
  };

  const handlePortfolioClick = () => {
    navigate('/portfolio');
    window.scrollTo(0, 0);
  };

  const handleTechnologiesClick = () => {
    navigate('/technologies');
    window.scrollTo(0, 0);
  };

  const handlePricingClick = () => {
    navigate('/pricing');
    window.scrollTo(0, 0);
  };

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <nav className="navbar">
        <img
  src={logoImage}
  alt="Digital Drive Resource Tech Private Limited"
  className="logo-image"
  onClick={() => navigate('/')}
/>

        <ul className="nav-links">
          <li><button onClick={() => handleNavClick('home')} className={`nav-button ${location.pathname === '/' ? 'active' : ''}`}>Home</button></li>
          <li><button onClick={handleAboutClick} className={`nav-button ${location.pathname === '/about' ? 'active' : ''}`}>About Us</button></li>
          <li><button onClick={handleServicesClick} className={`nav-button ${location.pathname === '/services' ? 'active' : ''}`}>Services</button></li>
          <li><button onClick={handlePortfolioClick} className={`nav-button ${location.pathname === '/portfolio' ? 'active' : ''}`}>Portfolio</button></li>
          <li><button onClick={handleTechnologiesClick} className={`nav-button ${location.pathname === '/technologies' ? 'active' : ''}`}>Technologies</button></li>
          <li><button onClick={handlePricingClick} className={`nav-button ${location.pathname === '/pricing' ? 'active' : ''}`}>Pricing</button></li>
          <li><button onClick={handleContactClick} className={`nav-button ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</button></li>
        </ul>

        <Button onClick={handleContactClick}>Get a Free Quote</Button>
      </nav>
    </Container>
  );
}
