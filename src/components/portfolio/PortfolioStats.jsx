import React from 'react';
import Container from '../ui/Container';
import { companyStats } from '../../data/stats';
import './PortfolioStats.css';

const statsData = [
  ...companyStats.slice(0, 2),
  {
    id: 3,
    icon: '🚀',
    value: '0',
    label: 'Client Satisfaction',
  },
  {
    id: 4,
    icon: '🌐',
    value: '0',
    label: 'Industries Served',
  },
];

export default function PortfolioStats() {
  return (
    <div className="portfolio-stats-wrap">
      <Container>
        <div className="portfolio-stats-heading">

          <h2>NUMBERS THAT SPEAK</h2>
        </div>
        <div className="portfolio-stats">
          {statsData.map((stat) => (
            <div key={stat.id} className="portfolio-stat">
              <div className="portfolio-stat-circle">{stat.icon}</div>
              <div>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
