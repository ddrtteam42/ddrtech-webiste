import React from 'react';
import Container from '../ui/Container';
import './TechnologiesTestimonials.css';

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

const testimonials = [
  {
    id: 1,
    stars: '★★★★★',
    quote: 'Digital Drive Resource Private Limited delivered an amazing website for our business. They understood our needs perfectly.',
    name: 'Rishan Mehta',
    role: 'CEO, Mehta Traders',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 2,
    stars: '★★★★★',
    quote: 'The mobile app they built for us is fast, clean and user-friendly. Highly recommended!',
    name: 'Priya Sharma',
    role: 'Founder, FitLife',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 3,
    stars: '★★★★★',
    quote: 'Great experience working with Digital Drive Resource Private Limited. Very professional team and on-time delivery.',
    name: 'Amit Verma',
    role: 'CTO, Verma Industries',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
  },
];

export default function TechnologiesTestimonials() {
  return (
    <section className="tech-testimonials-section">
      <Container>
        <div className="tech-testimonials-wrapper">
          <div className="tech-panel">
            <div className="section-tag">Technologies We Use</div>
            <h3 className="section-heading">Tech Stack</h3>
            <div className="tech-grid">
              {technologies.map((tech) => (
                <div key={tech.id} className="tech-item">
                  <div className="tech-logo">{tech.logo}</div>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonials-panel">
            <div className="section-tag">What Our Clients Say</div>
            <h3 className="section-heading">Testimonials</h3>
            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial">
                  <div className="testimonial-content">
                    <div className="stars">{testimonial.stars}</div>
                    <p className="testimonial-quote">{testimonial.quote}</p>
                  </div>
                  <div className="testimonial-footer">
                    <img src={testimonial.image} alt={testimonial.name} className="client-avatar" />
                    <div className="client-info">
                      <strong className="client-name">{testimonial.name}</strong>
                      <span className="client-role">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
