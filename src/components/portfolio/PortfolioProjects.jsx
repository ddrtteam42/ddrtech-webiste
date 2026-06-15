// import React from 'react';
// import Container from '../ui/Container';
// import './PortfolioProjects.css';

// const projectsData = [
//   {
//     id: 1,
//     title: 'E-Commerce Platform',
//     description: 'Modern online shopping website with payment gateway, order management and responsive design.',
//     icon: '🛒',
//     tags: ['React', 'Node.js', 'MySQL'],
//     gradient: 'linear-gradient(135deg, #e8edf5, #cdd7e8)',
//   },
//   {
//     id: 2,
//     title: 'Property Dealer Website',
//     description: 'Lead generation focused real-estate website with inquiry forms and SEO optimization.',
//     icon: '🏠',
//     tags: ['WordPress', 'PHP'],
//     gradient: 'linear-gradient(135deg, #1b2c4d, #0a1430)',
//   },
//   {
//     id: 3,
//     title: 'Restaurant Mobile App',
//     description: 'Food ordering and delivery application with real-time tracking.',
//     icon: '📱',
//     tags: ['Flutter', 'Firebase'],
//     gradient: 'linear-gradient(135deg, #f0e6da, #d8c4ad)',
//   },
//   {
//     id: 4,
//     title: 'CRM Management Software',
//     description: 'Custom software for managing customers, sales and reports.',
//     icon: '👥',
//     tags: ['Laravel', 'MySQL'],
//     gradient: 'linear-gradient(135deg, #eef2f8, #d4dded)',
//   },
//   {
//     id: 5,
//     title: 'Corporate Business Website',
//     description: 'Professional business website with modern UI and performance optimization.',
//     icon: '💼',
//     tags: ['HTML', 'CSS', 'JavaScript'],
//     gradient: 'linear-gradient(135deg, #16294d, #0a1430)',
//   },
//   {
//     id: 6,
//     title: 'HR Management System',
//     description: 'Employee attendance, payroll and performance management software.',
//     icon: '👤',
//     tags: ['React', 'Node.js'],
//     gradient: 'linear-gradient(135deg, #eef2f8, #d4dded)',
//   },
// ];

// export default function PortfolioProjects() {
//   return (
//     <section className="portfolio-projects">
//       <Container>
//         <div className="portfolio-sec-label">Featured Projects</div>
//         <h2 className="portfolio-sec-title">Recent Work</h2>
//         <div className="portfolio-grid">
//           {projectsData.map((project) => (
//             <div key={project.id} className="portfolio-pcard">
//               <div className="portfolio-thumb" style={{ background: project.gradient }}></div>
//               <div className="portfolio-badge">{project.icon}</div>
//               <div className="portfolio-body">
//                 <h3>{project.title}</h3>
//                 <p>{project.description}</p>
//                 <div className="portfolio-tags">
//                   {project.tags.map((tag, index) => (
//                     <span key={index} className="portfolio-tag">{tag}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="portfolio-view-more">
//           <a href="#">View More Projects</a>
//         </div>
//       </Container>
//     </section>
//   );
// }
import React from 'react';
import Container from '../ui/Container';
import './PortfolioProjects.css';

import CRM from '../../assets/images/Protfolio-images/CRM.jpg';
import Ecom from '../../assets/images/Protfolio-images/Ecom.jpg';
import HR from '../../assets/images/Protfolio-images/HR.jpg';
import Realestate from '../../assets/images/Protfolio-images/Realestate.jpg';
import RestaurantApp from '../../assets/images/Protfolio-images/restaurantapp.jpg';
import Business from '../../assets/images/Protfolio-images/Corp.jpg';

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'Modern online shopping website with payment gateway, order management and responsive design.',
    image: Ecom,
    tags: ['React', 'Node.js', 'MySQL'],
  },
  {
    id: 2,
    title: 'Property Dealer Website',
    description:
      'Lead generation focused real-estate website with inquiry forms and SEO optimization.',
    image: Realestate,
    tags: ['WordPress', 'PHP'],
  },
  {
    id: 3,
    title: 'Restaurant Mobile App',
    description:
      'Food ordering and delivery application with real-time tracking.',
    image: RestaurantApp,
    tags: ['Flutter', 'Firebase'],
  },
  {
    id: 4,
    title: 'CRM Management Software',
    description:
      'Custom software for managing customers, sales and reports.',
    image: CRM,
    tags: ['Laravel', 'MySQL'],
  },
  {
    id: 5,
    title: 'Corporate Business Website',
    description:
      'Professional business website with modern UI and performance optimization.',
    image: Business,
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 6,
    title: 'HR Management System',
    description:
      'Employee attendance, payroll and performance management software.',
    image: HR,
    tags: ['React', 'Node.js'],
  },
];

export default function PortfolioProjects() {
  return (
    <section className="portfolio-projects">
      <Container>
        <div className="portfolio-sec-label">Featured Projects</div>
        <h2 className="portfolio-sec-title">Recent Work</h2>

        <div className="portfolio-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="portfolio-pcard">
              <div className="portfolio-thumb">
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-thumb-img"
                />
              </div>

              <div className="portfolio-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="portfolio-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="portfolio-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-view-more">
          <a href="#portfolio">View More Projects</a>
        </div>
      </Container>
    </section>
  );
}