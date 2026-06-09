import React from 'react';
import Container from '../ui/Container';
import './TeamSection.css';

const teamMembers = [
  {
    id: 1,
    name: 'Rishan Mehta',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    name: 'Amit Verma',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 4,
    name: 'Neha Singh',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 5,
    name: 'Rohit Patel',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 6,
    name: 'Sneha Reddy',
    role: 'Digital Marketer',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80',
  },
];

export default function TeamSection() {
  return (
    <section className="team-section">
      <Container>
        <div className="center-head">
          <div className="section-tag">Our Team</div>
          <h2 className="section-title">Meet The Experts Behind Our Success</h2>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-photo">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-body">
                <h4>{member.name}</h4>
                <p>{member.role}</p>
                <div className="socials">
                  <span>in</span>
                  <span>𝕏</span>
                  <span>✉</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
