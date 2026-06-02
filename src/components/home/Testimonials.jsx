import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import testimonials from '../../data/testimonials';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <Container>
      <section id="testimonials">
        <SectionTitle
          tag="Clients Feedback"
          title="What Our Clients Say"
        />

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial">
              <div className="stars">
                {'★'.repeat(testimonial.rating)}
              </div>

              <p>{testimonial.text}</p>

              <div className="user">
                <img src={testimonial.image} alt={testimonial.name} />

                <div>
                  <h5>{testimonial.name}</h5>
                  <span>{testimonial.position}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
