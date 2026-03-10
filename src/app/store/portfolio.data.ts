import { PortfolioState } from '../models/portfolio.models';

export const INITIAL_PORTFOLIO_STATE: PortfolioState = {
  activeTimelineTab: 'experience',
  navScrolled: false,
  mobileMenuOpen: false,

  personal: {
    name: 'Shaninath Pawar',
    initials: 'SP',
    title: 'Senior Software Engineer',
    tagline: 'Angular · TypeScript · Micro-Frontend Architecture',
    summary: 'Results-driven engineer with 7.5+ years designing and delivering responsive, scalable, user-centric web applications. Expert in Angular, TypeScript, and performance optimization — consistently turning complex requirements into elegant, maintainable solutions.',
    location: 'Pune, Maharashtra, India',
    email: 'shaninathpawar.jobs@gmail.com',
    phone: '+91 8381025113',
    linkedin: 'https://www.linkedin.com/in/shaninath-pawar-0b95b5189/',
    github: 'https://github.com/shaninathpawargit',
    available: true,
  },

  stats: [
    { label: 'Years Experience', value: '7.5+' },
    { label: 'Projects Shipped', value: '5+' },
    { label: 'Bundle Reduction', value: '70%' },
    { label: 'i18n Languages', value: '28' },
  ],

  skills: [
    {
      icon: '◈',
      category: 'Languages',
      items: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3 / SCSS', 'JSON', 'SQL']
    },
    {
      icon: '⬡',
      category: 'Frameworks & Libraries',
      items: ['Angular v17–21', 'RxJS', 'PrimeNG v17–21', 'Angular Material', 'Tailwind CSS', 'Bootstrap', 'Chart.js', 'Vue.js']
    },
    {
      icon: '⚙',
      category: 'Dev Toolchain',
      items: ['Git / GitHub', 'Angular CLI', 'Webpack', 'ESLint', 'Prettier', 'npm', 'VS Code', 'IntelliJ IDEA', 'JIRA']
    },
    {
      icon: '◎',
      category: 'Architecture',
      items: ['Micro Frontend (Single SPA)', 'Module Federation', 'Lazy Loading', 'NgRx / Signals', 'Design Systems', 'Component Libraries']
    },
    {
      icon: '⊞',
      category: 'Backend & DB',
      items: ['Java', 'Spring Boot', 'Hibernate', 'JPA', 'REST APIs', 'SQL Databases']
    },
    {
      icon: '★',
      category: 'Process & Soft Skills',
      items: ['Agile / Scrum', 'SDLC', 'Code Review', 'Team Mentoring', 'Problem Solving', 'i18n (28 languages)']
    },
  ],

  experience: [
    {
      period: 'Feb 2025 — Present',
      role: 'Senior Software Engineer',
      company: 'Vinz Global, IVL',
      client: 'Client: NICE',
      current: true,
      highlights: [
        'Led migration of large-scale Angular 10 application to Angular 17, improving performance, maintainability, and long-term support.',
        'Contributed to greenfield product development — architected and built core modules from scratch.',
        'Owned end-to-end UI development delivering scalable, responsive interfaces aligned with product & UX requirements.',
      ],
      tech: ['Angular 17', 'PrimeNG', 'TypeScript', 'RxJS', 'Java', 'Spring Boot'],
    },
    {
      period: 'Oct 2021 — Jan 2025',
      role: 'Technical Lead',
      company: 'KPIT Technologies',
      client: 'Cummins Acumen Project',
      current: false,
      highlights: [
        'Reduced app build bundle size by 70–80% through extensive debugging and optimization, dramatically improving load times.',
        'Improved data fetching performance by 30–40% by employing client-side sorting and grouping strategies.',
        'Implemented full internationalization supporting 28 languages across the application.',
        'Developed responsive, user-friendly interfaces that increased Customer Satisfaction by 60–70%.',
        'Led migration of multiple legacy UIs to responsive Bootstrap 4 interfaces following Agile / SDLC practices.',
      ],
      tech: ['Angular', 'TypeScript', 'Single SPA', 'Micro Frontend', 'Bootstrap 4', 'Java'],
    },
    {
      period: 'Sep 2018 — Oct 2021',
      role: 'System Engineer',
      company: 'Tata Consultancy Services (TCS)',
      client: 'JLR Projects',
      current: false,
      highlights: [
        'Built the Supplier Onboarding (SoB) tool from scratch, reducing manual onboarding effort by 80–90%.',
        'Implemented multi-language internationalization for multiple customer-facing applications.',
        'Developed fully responsive UIs for plant floor operations, supply chain management, and dashboards.',
        'Implemented role-based auth, session management, chart dashboards, file upload/download, and CSV export.',
      ],
      tech: ['Angular', 'TypeScript', 'Material UI', 'Java', 'Spring Boot', 'Hibernate', 'JPA'],
    },
  ],

  education: [
    {
      period: 'May 2015 — Jul 2018',
      degree: 'Bachelor of Engineering — Computer Science & Engineering',
      institution: 'Rajarshi Shahu College of Engineering',
      location: 'Pune, Maharashtra, India',
      gpa: '67.23 / 100',
      detail: 'Core curriculum: Data Structures, Algorithms, DBMS, OOP, Operating Systems, Computer Networks, and Software Engineering principles.',
    },
  ],

  projects: [
    {
      client: 'NICE',
      period: 'Feb 2025 – Present',
      name: 'WFM Cloud Reporting',
      desc: 'Cloud-based reporting application offered as an add-on to NICE WFM. Enables users to generate, view, edit, and save multiple reports across Standard, Custom, Exporter, and Importer categories using data synchronized from WFM database.',
      stack: ['Angular 17', 'PrimeNG', 'TypeScript', 'Java', 'Spring Boot', 'Cloud'],
      featured: true,
    },
    {
      client: 'Cummins',
      period: 'Oct 2021 – Jan 2025',
      name: 'Acumen / Nimbus Gateway',
      desc: 'IoT gateway application for Cummins products managing connections with up to 5 gensets or ATS devices. Monitors, analyzes, and transmits device data to Cummins Cloud. Built with Micro Frontend Architecture via Single SPA for multi-team development.',
      stack: ['Angular', 'Single SPA', 'Micro Frontend', 'TypeScript', 'Java', 'IoT'],
      featured: true,
    },
    {
      client: 'JLR',
      period: 'Oct 2020 – Oct 2021',
      name: 'Plant Floor BAU',
      desc: 'Plant floor application for maintaining key production metrics and dispatching alerts to workers and supervisors. Full role-based personas, authentication, real-time dashboards, and notification management.',
      stack: ['Angular', 'TypeScript', 'Material UI', 'Java', 'Spring Boot'],
      featured: false,
    },
    {
      client: 'JLR',
      period: 'Mar 2020 – Oct 2020',
      name: 'Supplier OnBoarding (SoB)',
      desc: 'Purpose-built automation tool that eliminated 80–90% of manual effort for onboarding external suppliers into the JLR ecosystem. Fully responsive across all devices.',
      stack: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'Hibernate', 'JPA'],
      featured: false,
    },
    {
      client: 'JLR',
      period: 'Sep 2018 – Mar 2020',
      name: 'PODS — Processing Operations & Data Solution',
      desc: 'Repository management system for JLR automotive parts with region-wise sales charts, calculations, and supply chain management. Role-based login, dashboards, file uploads, and CSV data exports.',
      stack: ['Angular', 'TypeScript', 'Material UI', 'Java', 'Spring Boot', 'JPA'],
      featured: false,
    },
  ],

  awards: [
    { icon: '🏆', name: "NiCE Sparkathon'25 Winner", year: '2025' },
    { icon: '⚡', name: 'AGILE Value Award', year: '2023' },
    { icon: '🌟', name: 'Client Champion Award', year: '2022' },
    { icon: '⚙', name: 'Process Champion Award', year: '2021' },
    { icon: '✦', name: 'Best Practice Award', year: '2020' },
  ],

  languages: [
    { name: 'English', level: 'Professional Proficiency', bars: 4 },
    { name: 'Hindi',   level: 'Native Proficiency',       bars: 5 },
    { name: 'Marathi', level: 'Native Proficiency',       bars: 5 },
  ],

  interests: [
    { icon: '◈', label: 'Open-Source Contribution' },
    { icon: '◎', label: 'Continuous Learning' },
    { icon: '⬡', label: 'Traveling' },
    { icon: '★', label: 'Hiking' },
  ],
};
