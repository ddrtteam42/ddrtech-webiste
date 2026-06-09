// import React from 'react';
// import Container from '../ui/Container';
// import Button from '../ui/Button';
// import './ServicesCTA.css';

// export default function ServicesCTA() {
//   return (
//     <section className="services-cta-section">
//       <Container>
//         <div className="services-cta-container">
//           <div className="services-cta-text">
//             <h2>Ready To Grow Your Business?</h2>
//             <p>Let's build powerful digital solutions together.</p>
//           </div>
//           <div className="services-cta-btns">
//             <Button>Get a Free Quote</Button>
//             <Button variant="outline">Contact Us</Button>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import './ServicesCTA.css';

export default function ServicesCTA() {
  return (
    <section className="services-cta-section">
      <Container>
        <div className="cta">
          <div className="left">
            <div className="cta-icon">🚀</div>
            <div>
              <h3>Ready To Grow Your Business?</h3>
              <p>Let's build powerful digital solutions together.</p>
            </div>
          </div>
          <Button>Get a Free Quote</Button>
          <Button variant="outline">Contact Us</Button>
        </div>
      </Container>
    </section>
  );
}
