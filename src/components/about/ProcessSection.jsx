import React from 'react';
import Container from '../ui/Container';
import './ProcessSection.css';

const processSteps = [
  {
    id: 1,
    icon: '🔍',
    number: '01',
    title: 'Discover',
    description: 'We understand your requirements and business goals.',
  },
  {
    id: 2,
    icon: '📋',
    number: '02',
    title: 'Plan',
    description: 'We plan project strategy, timeline and right roadmap.',
  },
  {
    id: 3,
    icon: '✏',
    number: '03',
    title: 'Design',
    description: 'We design modern clean and user-friendly interfaces.',
  },
  {
    id: 4,
    icon: '</>',
    number: '04',
    title: 'Develop',
    description: 'We build fast, secure and scalable solutions.',
  },
  {
    id: 5,
    icon: '🛡',
    number: '05',
    title: 'Test',
    description: 'We test everything carefully to deliver perfect product.',
  },
  {
    id: 6,
    icon: '🚀',
    number: '06',
    title: 'Deliver',
    description: 'We deliver final product and provide ongoing support.',
  },
];

export default function ProcessSection() {
  return (
    <section className="process-section">
      <Container>
        <div className="center-head">
          <div className="section-tag">Our Process</div>
          <h2 className="section-title">Our Development Process</h2>
        </div>

        <div className="process-row">
          {processSteps.map((step) => (
            <div key={step.id} className="process-step">
              <div className="process-badge">{step.icon}</div>
              <div className="step-num">{step.number}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
