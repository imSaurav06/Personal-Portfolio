import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    skills: [
      { name: 'TensorFlow & Keras', level: 90, iconName: 'Brain' },
      { name: 'CNNs & Neural Networks', level: 90, iconName: 'Brain' },
      { name: 'Scikit-learn', level: 85, iconName: 'Brain' },
      { name: 'Pandas & NumPy', level: 92, iconName: 'Brain' },
      { name: 'Matplotlib', level: 85, iconName: 'Brain' },
      { name: 'OpenCV Computer Vision', level: 88, iconName: 'Brain' },
      { name: 'Model Training & Evaluation', level: 88, iconName: 'Brain' }
    ]
  },
  {
    id: 'llm-agents',
    title: 'LLM APIs & Orchestration',
    skills: [
      { name: 'Claude, OpenAI & Gemini APIs', level: 94, iconName: 'Cpu' },
      { name: 'Multi-Agent AI Architecture', level: 92, iconName: 'Cpu' },
      { name: 'Prompt Engineering & Eval', level: 95, iconName: 'Cpu' },
      { name: 'LangChain & Orchestration', level: 85, iconName: 'Cpu' },
      { name: 'Hugging Face (Inference/Loading)', level: 82, iconName: 'Cpu' }
    ]
  },
  {
    id: 'rag-vector',
    title: 'Vector DBs & RAG',
    skills: [
      { name: 'RAG Pipelines & Retrieval', level: 88, iconName: 'Database' },
      { name: 'Embeddings & Similarity Search', level: 88, iconName: 'Database' },
      { name: 'Pinecone / Weaviate / Chroma', level: 80, iconName: 'Database' }
    ]
  },
  {
    id: 'backend-apis',
    title: 'Backend & APIs',
    skills: [
      { name: 'Python & FastAPI', level: 88, iconName: 'Server' },
      { name: 'Node.js & Express.js', level: 90, iconName: 'Server' },
      { name: 'REST APIs & WebSockets', level: 92, iconName: 'Server' },
      { name: 'JWT Authentication & Security', level: 88, iconName: 'Key' },
      { name: 'JSON & Clean Architecture', level: 90, iconName: 'Server' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 92, iconName: 'Monitor' },
      { name: 'Next.js', level: 88, iconName: 'Monitor' },
      { name: 'TypeScript', level: 88, iconName: 'Monitor' },
      { name: 'Tailwind CSS', level: 94, iconName: 'Monitor' },
      { name: 'Redux Toolkit', level: 86, iconName: 'Monitor' },
      { name: 'Material UI & Bootstrap', level: 85, iconName: 'Monitor' },
      { name: 'HTML5 & CSS3', level: 95, iconName: 'Monitor' }
    ]
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    skills: [
      { name: 'MongoDB & MongoDB Atlas', level: 90, iconName: 'Database' },
      { name: 'PostgreSQL', level: 82, iconName: 'Database' },
      { name: 'MySQL', level: 85, iconName: 'Database' }
    ]
  },
  {
    id: 'devops-tools',
    title: 'Languages, DevOps & Tools',
    skills: [
      { name: 'Python', level: 92, iconName: 'Flame' },
      { name: 'JavaScript & TypeScript', level: 90, iconName: 'Flame' },
      { name: 'C & C++', level: 80, iconName: 'Flame' },
      { name: 'SQL', level: 85, iconName: 'Flame' },
      { name: 'Git & GitHub', level: 92, iconName: 'GitBranch' },
      { name: 'Docker (Containers)', level: 80, iconName: 'Cpu' },
      { name: 'AWS (Exposure)', level: 75, iconName: 'Cloud' },
      { name: 'Postman & VS Code', level: 92, iconName: 'Cpu' }
    ]
  },
  {
    id: 'core-concepts',
    title: 'Core CS Concepts',
    skills: [
      { name: 'Data Structures & Algorithms', level: 90, iconName: 'Award' },
      { name: 'Object-Oriented Programming (OOP)', level: 92, iconName: 'Award' },
      { name: 'DBMS & Operating Systems', level: 88, iconName: 'Award' },
      { name: 'System Design Basics', level: 82, iconName: 'Award' },
      { name: 'Agile / Scrum', level: 88, iconName: 'Award' }
    ]
  }
];
