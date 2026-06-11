import React from 'react';
import Container from '../ui/Container';
import './TeamSection.css';

const teamMembers = [
  {
    id: 1,
    name: 'Dikshit Singh',
    role: 'CEO & Director',
    image: require('../../assets/team_images/DikshitSingh.jpg'),
  },
  {
    id: 2,
    name: 'HEENA CHANDEL',
    role: 'CEO & Founder',
    image: require('../../assets/team_images/HeenaChandel.jpg'),
  },
  {
    id: 3,
    name: 'Divyansh',
    role: 'Team Lead',
    image: require('../../assets/team_images/Divyansh.jpg'),
  },
  {
    id: 4,
    name: 'Aniket Chaudhary',
    role: 'Full Stack Developer',
    image: require('../../assets/team_images/aniket.png'),
  },
  {
    id: 5,
    name: 'Rahul Kaushal',
    role: 'Full Stack Developer',
    image: require('../../assets/team_images/Rahul.png'),
  },
  // {
  //   id: 6,
  //   name: 'Sneha Reddy',
  //   role: 'Digital Marketer',
  //   image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80',
  // },
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
