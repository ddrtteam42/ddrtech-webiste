import React from 'react';
import Container from '../ui/Container';
import './AchievementsBar.css';

const achievements = [
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
  {
    id: 5,
    icon: '👍',
    value: '98%',
    label: 'Client Satisfaction',
  },
];

export default function AchievementsBar() {
  return (
    <section className="achievements-section">
     
      <Container><p>Our Achievements</p>
         
        <div className="achievement-bar">
          
          <div className="achievement-grid">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="achievement">
                <div className="stat-icon">{achievement.icon}</div>
                <div>
                  <strong>{achievement.value}</strong>
                  <span>{achievement.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
