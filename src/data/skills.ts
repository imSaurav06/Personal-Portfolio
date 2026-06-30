import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    skills: [
      { name: 'Python', level: 90, iconName: 'Flame' },
      { name: 'JavaScript', level: 90, iconName: 'Flame' },
      { name: 'TypeScript', level: 85, iconName: 'Flame' },
      { name: 'C/C++', level: 80, iconName: 'Flame' },
      { name: 'Dart', level: 85, iconName: 'Flame' },
      { name: 'SQL', level: 85, iconName: 'Flame' }
    ]
  },
  {
    id: 'frontend-mobile',
    title: 'Frontend & Mobile',
    skills: [
      { name: 'React.js', level: 90, iconName: 'Monitor' },
      { name: 'Flutter', level: 88, iconName: 'Smartphone' },
      { name: 'React Native', level: 80, iconName: 'Smartphone' },
      { name: 'Tailwind CSS', level: 90, iconName: 'Monitor' },
      { name: 'HTML5 & CSS3', level: 95, iconName: 'Monitor' },
      { name: 'Bootstrap', level: 85, iconName: 'Monitor' }
    ]
  },
  {
    id: 'backend-api',
    title: 'Backend & APIs',
    skills: [
      { name: 'Node.js', level: 88, iconName: 'Server' },
      { name: 'Express.js', level: 88, iconName: 'Server' },
      { name: 'Flask / FastAPI', level: 80, iconName: 'Server' },
      { name: 'REST APIs', level: 90, iconName: 'Cpu' },
      { name: 'JWT (Auth)', level: 85, iconName: 'Key' }
    ]
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    skills: [
      { name: 'TensorFlow', level: 85, iconName: 'Brain' },
      { name: 'CNN / Deep Learning', level: 82, iconName: 'Brain' },
      { name: 'OpenCV', level: 80, iconName: 'Brain' },
      { name: 'Scikit-Learn', level: 80, iconName: 'Brain' },
      { name: 'Keras', level: 80, iconName: 'Brain' },
      { name: 'Pandas & NumPy', level: 85, iconName: 'Brain' }
    ]
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    skills: [
      { name: 'MongoDB', level: 88, iconName: 'Database' },
      { name: 'MySQL', level: 85, iconName: 'Database' },
      { name: 'Cloud Firestore', level: 88, iconName: 'Database' }
    ]
  },
  {
    id: 'cloud-tools',
    title: 'Cloud & Platforms',
    skills: [
      { name: 'Git & GitHub', level: 92, iconName: 'GitBranch' },
      { name: 'Firebase Stack', level: 88, iconName: 'Cloud' },
      { name: 'Azure Services', level: 75, iconName: 'Cloud' },
      { name: 'VPS Deployment', level: 80, iconName: 'Server' },
      { name: 'Docker', level: 75, iconName: 'Cpu' },
      { name: 'Kubernetes', level: 70, iconName: 'Cpu' },
      { name: 'Salesforce (LWC, Apex)', level: 80, iconName: 'Cloud' }
    ]
  }
];
