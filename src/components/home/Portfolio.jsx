import React from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';
import { useNavigate } from 'react-router-dom';
import projects from '../../data/projects';
import stats from '../../data/stats';
import './Portfolio.css';
import './Stats.css';

export default function Portfolio() {
  const navigate = useNavigate();
  return (
    <Container>
      <section id="portfolio">
        <div className="projects-grid">
          <Card className="intro-card">
            <SectionTitle
              tag="Our Work"
              title="Some Of Our Recent Projects"
            />
            <Button onClick={() => navigate('/portfolio')}>View All Projects</Button>
          </Card>

          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="project-content">
                <h4>{project.title}</h4>
                <p>{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="stats">
          {stats.map((stat) => (
            <div key={stat.id} className="stat">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
