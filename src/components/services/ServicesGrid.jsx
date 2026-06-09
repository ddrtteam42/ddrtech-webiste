import React from 'react';
import Container from '../ui/Container';
import './ServicesGrid.css';

const servicesData = [
  {
    id: 1,
    icon: '💻',
    title: 'Website Development',
    description: 'We build modern, responsive and SEO-friendly websites that help you build a strong online presence and grow your business.',
  },
  {
    id: 2,
    icon: '📱',
    title: 'Mobile App Development',
    description: 'We create high-performance mobile applications for Android and iOS with smooth user experience and scalable architecture.',
  },
  {
    id: 3,
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'We design intuitive and engaging user experiences that make your digital products simple, attractive and effective.',
  },
  {
    id: 4,
    icon: '⚙️',
    title: 'Software Development',
    description: 'We develop custom software solutions that automate processes, improve efficiency and solve complex business challenges.',
  },
  {
    id: 5,
    icon: '📢',
    title: 'Digital Marketing',
    description: 'From SEO to Social Media, we help you increase visibility, generate leads and grow your brand online.',
  },
  {
    id: 6,
    icon: '🎧',
    title: 'Maintenance & Support',
    description: 'We provide 24/7 support, regular updates and performance optimization to keep your systems secure and running smoothly.',
  },
];

export default function ServicesGrid() {
  return (
    <section className="services-section">
      <Container>
        <div className="services-section-header">
          <span className="services-section-eyebrow">What We Offer</span>
          <h2>Our Professional Services</h2>
        </div>
        <div className="services-section-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="services-section-card">
              <div className="services-section-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#" className="services-section-link">Learn More →</a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
