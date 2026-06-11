import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import testimonials from '../../data/testimonials';
import './PortfolioTestimonials.css';

export default function PortTestimonials() {
  return (
    <section className="port-testimonials-section">
    <Container>
      <section id="port-testimonials">
        <SectionTitle
          tag="Clients Feedback"
          title="What Our Clients Say"
        />

        <div className="port-testimonial-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="port-testimonial">
              <div className="port-stars">
                {'★'.repeat(testimonial.rating)}
              </div>

              <p>{testimonial.text}</p>

              <div className="port-user">
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
    </section>
  );
}
// // import React from 'react';
// // import Container from '../ui/Container';
// // import './PortfolioTestimonials.css';

// // const testimonialsData = [
// //   {
// //     id: 1,
// //     name: 'Rohan Mehta',
// //     position: 'Founder, Mehta Traders',
// //     initials: 'RM',
// //     rating: 5,
// //     text: 'Professional team and excellent support throughout the project.',
// //   },
// //   {
// //     id: 2,
// //     name: 'Priya Sharma',
// //     position: 'Founder, FitLife',
// //     initials: 'PS',
// //     rating: 5,
// //     text: 'Delivered our website on time with outstanding quality.',
// //   },
// //   {
// //     id: 3,
// //     name: 'Amit Verma',
// //     position: 'CTO, Verma Industries',
// //     initials: 'AV',
// //     rating: 5,
// //     text: 'Great communication and technical expertise.',
// //   },
// // ];

// // export default function PortfolioTestimonials() {
// //   return (
// //     <section className="portfolio-testi">
// //       <Container>
// //         <div className="portfolio-sec-label">What Clients Say</div>
// //         <h2 className="portfolio-sec-title">Client Testimonials</h2>
// //         <div className="portfolio-tgrid">
// //           {testimonialsData.map((testimonial) => (
// //             <div key={testimonial.id} className="portfolio-tcard">
// //               <div className="portfolio-stars">
// //                 {'★'.repeat(testimonial.rating)}
// //               </div>
// //               <q>{testimonial.text}</q>
// //               <div className="portfolio-person">
// //                 <div className="portfolio-av">{testimonial.initials}</div>
// //                 <div>
// //                   <b>{testimonial.name}</b>
// //                   <small>{testimonial.position}</small>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //         <div className="portfolio-dots">
// //           <i className="active"></i>
// //           <i></i>
// //           <i></i>
// //         </div>
// //       </Container>
// //     </section>
// //   );
// // }
// import React from 'react';
// import Container from '../ui/Container';
// import SectionTitle from '../ui/SectionTitle';
// import testimonials from '../../data/testimonials';
// import './PortfolioTestimonials.css';

// export default function Testimonials() {
//   return (
//     <Container>
//       <section id="testimonials">
//         <SectionTitle
//           tag="Clients Feedback"
//           title="What Our Clients Say"
//         />

//         <div className="testimonial-grid">
//           {testimonials.map((testimonial) => (
//             <div key={testimonial.id} className="testimonial">
//               <div className="stars">
//                 {'★'.repeat(testimonial.rating)}
//               </div>

//               <p>{testimonial.text}</p>

//               <div className="user">
//                 <img src={testimonial.image} alt={testimonial.name} />

//                 <div>
//                   <h5>{testimonial.name}</h5>
//                   <span>{testimonial.position}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </Container>
//   );
// }
