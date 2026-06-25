import React from 'react';
import Container from '../ui/Container';
import { companyStats as stats } from '../../data/stats';
import './AboutStats.css';

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
