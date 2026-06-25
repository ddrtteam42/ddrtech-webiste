// --- Company Stats (used on Home, About, Portfolio pages) ---
const companyStats = [
  { id: 1, icon: '◎', value: '0', label: 'Projects Completed' },
  { id: 2, icon: '👥', value: '0', label: 'Happy Clients' },
  { id: 3, icon: '💡', value: '0', label: 'Years Experience' },
  { id: 4, icon: '👤', value: '0', label: 'Expert Team Members' },
];

// --- Internship / Training Stats ---
const internshipStats = [
  { icon: 'fas fa-user-graduate', number: '0', label: 'Students Trained' },
  { icon: 'fas fa-project-diagram', number: '0', label: 'Live Projects' },
  { icon: 'fas fa-chart-line', number: '0', label: 'Student Satisfaction' },
  { icon: 'fas fa-chalkboard-teacher', number: '0', label: 'Industry Mentors' },

];

// Export both — components can pick the group they need
export { companyStats, internshipStats };

// Default export keeps existing home/Portfolio.jsx working without changes
const stats = companyStats;
export default stats;
