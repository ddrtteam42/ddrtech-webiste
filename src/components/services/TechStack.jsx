import React from 'react';
import Container from '../ui/Container';
import './TechStack.css';

const technologies = [
  { id: 1, logo: '🌐', name: 'HTML' },
  { id: 2, logo: '🎨', name: 'CSS' },
  { id: 3, logo: 'JS', name: 'JavaScript' },
  { id: 4, logo: '⚛', name: 'React' },
  { id: 5, logo: 'N', name: 'Next.js' },
  { id: 6, logo: '🟢', name: 'Node.js' },
  { id: 7, logo: '◇', name: 'Laravel' },
  { id: 8, logo: 'PHP', name: 'PHP' },
  { id: 9, logo: '🛢', name: 'MySQL' },
  { id: 10, logo: '🔥', name: 'Firebase' },
];

export default function TechStack() {
  return (
    <section className="tech-stack">
      <Container>
        <div className="tech-stack-header">
          <span className="tech-stack-eyebrow">Technologies We Use</span>
          <h2>Our Tech Stack</h2>
        </div>
        <div className="tech-stack-grid">
          {technologies.map((tech) => (
            <div key={tech.id} className="tech-stack-item">
              <div className="tech-stack-logo">{tech.logo}</div>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
