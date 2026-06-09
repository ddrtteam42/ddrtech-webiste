import React from 'react';
import Container from '../ui/Container';
import './AboutStats.css';

const stats = [
  {
    id: 1,
    icon: '◎',
    value: '50+',
    label: 'Projects Completed',
  },
  {
    id: 2,
    icon: '👥',
    value: '30+',
    label: 'Happy Clients',
  },
  {
    id: 3,
    icon: '💡',
    value: '3+',
    label: 'Years Experience',
  },
  {
    id: 4,
    icon: '👤',
    value: '10+',
    label: 'Expert Team Members',
  },
];

export default function AboutStats() {
  return (
    <div className="floating-stats">
      <Container>
        <div className="stats-card">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <div>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
