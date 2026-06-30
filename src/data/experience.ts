import { Experience } from '../types';

export const experienceData: Experience[] = [
  {
    id: 'elevate-lab',
    company: 'Elevate Lab',
    companyLink: '#',
    role: 'Web Developer Intern',
    duration: 'May 2025 – June 2025',
    responsibilities: [
      'Successfully delivered 6 minor applications and 1 major real-world project, demonstrating full-stack competencies.',
      'Developed responsive user interfaces using HTML, CSS, JavaScript, and React.js.',
      'Designed and engineered server-side logic and RESTful endpoints using Node.js and Express.js.',
      'Managed application data structures using MongoDB, designing efficient schemas for complex workflows.',
      'Utilized Git for version control and collaborated with team members to resolve development bottlenecks.'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Git'],
    achievements: [
      'Successfully completed the full-stack development, problem-solving, and deployment cycle of a major project within tight constraints.',
      'Ranked among the top performers of the internship cohort through clean code implementations.'
    ]
  },
  {
    id: 'smartinternz',
    company: 'SmartInternz',
    companyLink: '#',
    role: 'Salesforce Developer Virtual Intern',
    duration: 'Dec 2023 – Jan 2024',
    responsibilities: [
      'Completed an 8-week intensive virtual internship covering Salesforce CRM fundamentals and cloud logic.',
      'Built automated processes, record validations, custom page layouts, and security rules on the Salesforce Org.',
      'Developed custom controller logic and integrations using Apex programming, LWC (Lightning Web Components), and APIs.',
      'Utilized VS Code, Salesforce CLI, and Apex debug triggers for automated testing and code validation.'
    ],
    technologies: ['Salesforce Services', 'Apex', 'Lightning Web Components (LWC)', 'Salesforce CLI', 'VS Code', 'REST APIs'],
    achievements: [
      'Reduced manual administrative effort by 30% through the implementation of automated flows and Process Builders.',
      'Earned high-difficulty credentials including the Apex Specialist, Process Automation Specialist, and Developer Super Set Superbadges.'
    ]
  }
];
