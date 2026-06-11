import React from 'react';
import Container from '../ui/Container';
import './TechnologiesTestimonials.css';
import html5Icon from '../../assets/icons/SVG ICONS/html-5.svg';
import css3Icon from '../../assets/icons/SVG ICONS/css3.svg';
import jsIcon from '../../assets/icons/SVG ICONS/javascript-svgrepo-com.svg';
import reactIcon from '../../assets/icons/SVG ICONS/react-svgrepo-com.svg';
import nextIcon from '../../assets/icons/SVG ICONS/next-dot-js-svgrepo-com.svg';
import nodeIcon from '../../assets/icons/SVG ICONS/nodejs-logo-svgrepo-com.svg';
import laravelIcon from '../../assets/icons/SVG ICONS/Laravel.svg';
import phpIcon from '../../assets/icons/SVG ICONS/php-svgrepo-com.svg';
import mysqlIcon from '../../assets/icons/SVG ICONS/mysql-logo-svgrepo-com.svg';
import firebaseIcon from '../../assets/icons/SVG ICONS/firebase-1-logo-svgrepo-com.svg';

const technologies = [
  { id: 1, logo: html5Icon, name: 'HTML' },
  { id: 2, logo: css3Icon, name: 'CSS' },
  { id: 3, logo: jsIcon, name: 'JavaScript' },
  { id: 4, logo: reactIcon, name: 'React' },
  { id: 5, logo: nextIcon, name: 'Next.js' },
  { id: 6, logo: nodeIcon, name: 'Node.js' },
  { id: 7, logo: laravelIcon, name: 'Laravel' },
  { id: 8, logo: phpIcon, name: 'PHP' },
  { id: 9, logo: mysqlIcon, name: 'MySQL' },
  { id: 10, logo: firebaseIcon, name: 'Firebase' },
];

const testimonials = [
  {
    id: 1,
    stars: '★★★★★',
    quote: 'Digital Drive Resource Tech Private Limited delivered an amazing website for our business. They understood our needs perfectly.',
    name: 'Rishan Mehta',
    role: 'CEO, Mehta Traders',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 2,
    stars: '★★★★★',
    quote: 'The mobile app they built for us is fast, clean and user-friendly. Highly recommended!',
    name: 'Priya Sharma',
    role: 'Founder, FitLife',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 3,
    stars: '★★★★★',
    quote: 'Great experience working with Digital Drive Resource Tech Private Limited. Very professional team and on-time delivery.',
    name: 'Amit Verma',
    role: 'CTO, Verma Industries',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
  },
];

export default function TechnologiesTestimonials() {
  return (
    <section className="tech-testimonials-section">
      <Container>
        <div className="tech-testimonials-wrapper">
          <div className="tech-panel">
            <div className="section-tag">Technologies We Use</div>
            <h3 className="section-heading">Tech Stack</h3>
            <div className="tech-grid">
              {technologies.map((tech) => (
                <div key={tech.id} className="tech-item">
                  <div className="tech-logo">
                    <img src={tech.logo} alt={tech.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonials-panel">
            <div className="section-tag">What Our Clients Say</div>
            <h3 className="section-heading">Testimonials</h3>
            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial">
                  <div className="testimonial-content">
                    <div className="stars">{testimonial.stars}</div>
                    <p className="testimonial-quote">{testimonial.quote}</p>
                  </div>
                  <div className="testimonial-footer">
                    <img src={testimonial.image} alt={testimonial.name} className="client-avatar" />
                    <div className="client-info">
                      <strong className="client-name">{testimonial.name}</strong>
                      <span className="client-role">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
