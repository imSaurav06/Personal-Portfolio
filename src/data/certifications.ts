import { Certification, Achievement } from '../types';

export const certificationsData: Certification[] = [
  {
    id: 'internshala-webdev',
    title: 'Web Development Certification Training',
    issuer: 'Internshala Trainings',
    credentialLink: 'https://drive.google.com/file/d/1HNuEI9Juw6E7SR-HA3IqizEhPI2Daq5m/view?usp=sharing',
    details: 'Completed comprehensive full-stack training covering HTML, CSS, Bootstrap, DBMS, PHP, and JavaScript with React. Scored 98% in final examinations and recognized as a Top Performer.',
    iconName: 'Award'
  },
  {
    id: 'cisco-python',
    title: 'Python Essentials 1 & 2',
    issuer: 'Cisco Networking Academy',
    credentialLink: 'https://drive.google.com/file/d/1XI4pxO3JmgJpDGC5YvzNkufQAFUswc-G/view',
    details: 'Covers Python fundamentals, object-oriented programming (OOPs), packages, custom modules, data handling, and scientific mathematical modelling.',
    iconName: 'Award'
  },
  {
    id: 'nptel-cloud',
    title: 'Cloud Computing Certification',
    issuer: 'NPTEL (IIT Roorkee)',
    credentialLink: 'https://drive.google.com/file/d/1qOR0As_wsaZLbCUqPIWzcQItd6QYIaay/view',
    details: 'Rigorous course covering distributed systems, virtualization, cloud architectures, and cloud networking under IIT Roorkee guidance.',
    iconName: 'Award'
  },
  {
    id: 'nptel-softskills',
    title: 'Soft Skills Training',
    issuer: 'NPTEL',
    credentialLink: '#',
    details: 'Focused on advanced problem-solving, communication strategies, collaborative teamwork dynamics, and professional workplace standards.',
    iconName: 'Award'
  },
  {
    id: 'dste-bihar',
    title: 'ML & IoT Foundations',
    issuer: 'DSTE Bihar',
    credentialLink: 'https://drive.google.com/file/d/1RKtsnBpNw_4KgUozLA_gIFwOHB1ekl1V/view',
    details: 'Foundational training in Data Science, Machine Learning, and Internet of Things deployment frameworks.',
    iconName: 'Award'
  }
];

export const achievementsData: Achievement[] = [
  {
    id: 'top-performer-webdev',
    title: '98% Top Performer',
    description: 'Scored 98% in full-stack training from Internshala, recognized in top 1% of students.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'salesforce-reduction',
    title: '30% Efficiency Gain',
    description: 'Automated sales workflows and CRM pages at SmartInternz, reducing manual effort by 30%.',
    iconName: 'TrendingUp'
  },
  {
    id: 'salesforce-superbadges',
    title: 'Salesforce Superbadges',
    description: 'Completed Apex Specialist, Process Automation Specialist, and Developer Super Set credentials.',
    iconName: 'BadgeCheck'
  },
  {
    id: 'ml-quantization',
    title: 'Leaf Classification Model',
    description: 'Developed crop classification CNN scoring 95% accuracy, quantizing weights to run on simple CPUs under 150ms.',
    iconName: 'BrainCircuit'
  }
];
