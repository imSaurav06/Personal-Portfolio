import { Certification, Achievement } from '../types';

export const certificationsData: Certification[] = [
  {
    id: 'internshala-webdev',
    title: 'Web Development Training (Top Performer - 98%)',
    issuer: 'Internshala Trainings',
    credentialLink: 'https://drive.google.com/file/d/1HNuEI9Juw6E7SR-HA3IqizEhPI2Daq5m/view?usp=sharing',
    details: 'HTML, CSS, Bootstrap, DBMS, PHP, React.js. Scored 98% in examinations, recognized as a Top Performer.',
    iconName: 'Award'
  },
  {
    id: 'cisco-python',
    title: 'Python Essentials 1 & 2',
    issuer: 'Cisco Networking Academy',
    credentialLink: 'https://drive.google.com/file/d/1XI4pxO3JmgJpDGC5YvzNkufQAFUswc-G/view?usp=sharing',
    details: 'Python fundamentals, OOP, modules, functions, data handling, and algorithmic problem solving.',
    iconName: 'Award'
  },
  {
    id: 'nptel-cloud',
    title: 'Cloud Computing Certification',
    issuer: 'NPTEL (IIT Roorkee)',
    credentialLink: 'https://drive.google.com/file/d/1qOR0As_wsaZLbCUqPIWzcQItd6QYIaay/view?usp=sharing',
    details: 'Completed rigorous cloud computing curriculum under the guidance of IIT Roorkee.',
    iconName: 'Award'
  },
  {
    id: 'dste-bihar',
    title: 'Machine Learning, Data Science & IoT',
    issuer: 'DSTE Bihar',
    credentialLink: 'https://drive.google.com/file/d/1RKtsnBpNw_4KgUozLA_gIFwOHB1ekl1V/view?usp=sharing',
    details: 'Fundamentals of Machine Learning, Data Science pipelines, and Internet of Things deployment architectures.',
    iconName: 'Award'
  }
];

export const achievementsData: Achievement[] = [
  {
    id: 'gate-2026',
    title: 'Qualified GATE 2026',
    description: 'Demonstrated high competence in Computer Science, Discrete Mathematics, Algorithms, and System Architecture.',
    iconName: 'Award'
  },
  {
    id: 'leetcode-150',
    title: '150+ LeetCode DSA Solved',
    description: 'Solved 150+ Data Structures & Algorithms problems across graphs, dynamic programming, trees, and system design.',
    iconName: 'TrendingUp',
    link: 'https://leetcode.com/u/i_am_saurav/'
  },
  {
    id: 'top-performer-webdev',
    title: '98% Top Performer',
    description: 'Scored 98% in full-stack web training from Internshala, recognized in the top cohort.',
    iconName: 'ShieldAlert',
    link: 'https://drive.google.com/file/d/1HNuEI9Juw6E7SR-HA3IqizEhPI2Daq5m/view?usp=sharing'
  },
  {
    id: 'salesforce-superbadges',
    title: 'Salesforce Superbadges',
    description: 'Earned Apex Specialist, Process Automation Specialist, and Developer Super Set credentials.',
    iconName: 'BadgeCheck'
  }
];
