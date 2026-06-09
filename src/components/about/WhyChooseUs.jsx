import React from 'react';
import Container from '../ui/Container';
import './WhyChooseUs.css';

const services = [
  { id: 1, icon: '🖥', title: 'Website Development' },
  { id: 2, icon: '📱', title: 'Mobile App Development' },
  { id: 3, icon: '✏', title: 'UI/UX Design' },
  { id: 4, icon: '🛒', title: 'E-Commerce Solutions' },
  { id: 5, icon: '📣', title: 'Digital Marketing' },
  { id: 6, icon: '🧩', title: 'Software Development' },
  { id: 7, icon: '🗂', title: 'CMS Development' },
  { id: 8, icon: '🎧', title: 'Maintenance & Support' },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-section">
      <Container>
        <div className="cards-split">
          <div className="feature-panel">
            <div>
              <div className="section-tag">Why Choose Us?</div>
              <h2 className="section-title">Why Businesses Choose Digital Drive Resource Private Limited</h2>
              <ul>
                <li>Experienced and skilled team</li>
                <li>Custom solutions tailored to your needs</li>
                <li>On-time delivery and 24/7 support</li>
                <li>Affordable pricing with no hidden costs</li>
                <li>Focus on quality and client satisfaction</li>
              </ul>
            </div>

            <div className="illus-box">
              <div className="floating-dot a">☁</div>
              <div className="floating-dot b">🔒</div>
              <div className="floating-dot c">⚙</div>
              <div className="floating-dot d">📱</div>
              <div className="illus-laptop"></div>
            </div>
          </div>

          <div className="service-panel">
            <div className="section-tag">Our Services</div>
            <h2 className="section-title">What We Do</h2>

            <div className="service-grid">
              {services.map((service) => (
                <div key={service.id} className="service-item">
                  <div className="service-icon">{service.icon}</div>
                  <h4>{service.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
