import React from 'react';
import Container from '../ui/Container';
import './WhyChooseServices.css';

const whyChooseData = [
  { id: 1, icon: '👥', label: 'Experienced Team' },
  { id: 2, icon: '⚙️', label: 'Custom Solutions' },
  { id: 3, icon: '⏱️', label: 'On-Time Delivery' },
  { id: 4, icon: '🏷️', label: 'Affordable Pricing' },
  { id: 5, icon: '⚡', label: 'Latest Technologies' },
  { id: 6, icon: '🎧', label: 'Dedicated Support' },
];

export default function WhyChooseServices() {
  return (
    <section className="why-choose-services">
      <Container>
        <div className="why-choose-header">Why Choose Digital Drive Resource Tech Private Limited?</div>
        <div className="why-choose-grid">
          {whyChooseData.map((item) => (
            <div key={item.id} className="why-choose-item">
              <div className="why-choose-icon">{item.icon}</div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
