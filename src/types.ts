export interface Skill {
  name: string;
  level: number; // 0 to 100 for progress indicators
  iconName?: string; // Optional icon name
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  company: string;
  companyLink?: string;
  role: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
}

export interface ProjectArchitectureStep {
  name: string;
  details: string;
}

export interface ProjectArchitecture {
  nodes: ProjectArchitectureStep[];
  description: string;
}

export interface ProjectInterviewPrep {
  whyBuilt: string;
  biggestChallenge: string;
  whatLearned: string;
  futureImprovements: string;
}

export interface ProjectTechStackBreakdown {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  authentication?: string[];
  deployment?: string[];
  thirdPartyServices?: string[];
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  problemStatement: string;
  solution: string;
  features: string[];
  technologies: string[];
  contribution: string;
  challengesFaced: string;
  outcome: string;
  futureImprovements: string;
  githubLink: string;
  liveLink?: string;
  iconName: string;
  architecture: ProjectArchitecture;
  techStackBreakdown: ProjectTechStackBreakdown;
  interviewPrep: ProjectInterviewPrep;
  galleryImages: {
    title: string;
    description: string;
    type: 'ui' | 'schema' | 'mobile' | 'code';
  }[];
}

export interface Education {
  id: string;
  degree: string;
  college: string;
  university: string;
  duration: string;
  score?: string;
  coursework?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  credentialLink?: string;
  details: string;
  iconName: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
