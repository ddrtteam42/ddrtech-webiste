import React from 'react';
import Container from '../ui/Container';
import './TechnologiesProcess.css';

const processSteps = [
  {
    id: 1,
    icon: '🔍',
    number: '01',
    title: 'Research',
    description: 'We research and select the best technologies.',
  },
  {
    id: 2,
    icon: '📋',
    number: '02',
    title: 'Plan',
    description: 'We plan the architecture and tech stack.',
  },
  {
    id: 3,
    icon: '</>',
    number: '03',
    title: 'Develop',
    description: 'We build with clean and efficient code.',
  },
  {
    id: 4,
    icon: '✅',
    number: '04',
    title: 'Test',
    description: 'We test for performance, security and quality.',
  },
  {
    id: 5,
    icon: '☁',
    number: '05',
    title: 'Deploy',
    description: 'We deploy and deliver scalable solutions.',
  },
  {
    id: 6,
    icon: '🎯',
    number: '06',
    title: 'Support',
    description: 'We provide ongoing support and updates.',
  },
];

export default function TechnologiesProcess() {
  return (
    <section className="technologies-process">
      <Container>
        <div className="technologies-process-label">Our Technology Process</div>
        <div className="technologies-steps">
          {processSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="technologies-step">
                <div className="technologies-step-dot">{step.icon}</div>
                <div className="technologies-step-num">{step.number}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="technologies-step-arrow">→</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}
