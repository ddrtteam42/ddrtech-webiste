import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import processSteps from '../../data/processSteps';
import './Process.css';

export default function Process() {
  return (
    <Container>
      <section id="process">
        <div className="process">
          <div>
            <SectionTitle
              tag="Our Process"
              title="Our Development Process"
              description="We follow a simple and effective process to deliver successful projects."
            />
          </div>

          <div className="process-steps">
            {processSteps.map((step) => (
              <div key={step.id} className="step">
                <div className="step-circle">
                  <i className={step.icon}></i>
                </div>
                <h5>{step.number}</h5>
                <h6>{step.title}</h6>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
