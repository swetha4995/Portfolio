
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'speed-breaker',
    title: 'Smart Retractable Speed Breaker System',
    description: 'An automated traffic management system using GPS-based ambulance detection to ensure zero-delay emergency response.',
    problem: 'Emergency vehicles often face delays at speed breakers and traffic signals, costing critical time.',
    solution: 'Integrated GPS modules with Arduino to detect approaching ambulances and retract speed breakers dynamically.',
    impact: 'IEEE Xplore indexed research; presented at 6th International Conference ICESCS-2025.',
    tags: ['IoT', 'Arduino', 'GPS Integration', 'C++'],
    image: 'https://picsum.photos/seed/speed/800/600',
    links: { github: '#' }
  },
  {
    id: 'ai-chatbot',
    title: 'AI Personalized Chatbot',
    description: 'Context-aware conversational agent focusing on user personalization and modern UI/UX principles.',
    problem: 'Generic chatbots often lack context and feel robotic, leading to poor user engagement.',
    solution: 'Built a deep-learning-based NLP engine with a React frontend for fluid interaction.',
    impact: 'Improved user retention by providing personalized responses based on history.',
    tags: ['AI/ML', 'React', 'Node.js', 'NLP'],
    image: 'https://picsum.photos/seed/chatbot/800/600',
    links: { demo: '#' }
  },
  {
    id: 'alcohol-detection',
    title: 'Alcohol Detection & Engine Locking',
    description: 'IoT-based vehicle safety system integrated with real-time location tracking.',
    problem: 'Drunk driving is a major cause of road accidents globally.',
    solution: 'Used MQ-3 sensors to detect alcohol levels and automatically lock the engine while sending GPS alerts to family.',
    impact: 'A critical safety prototype designed for sustainable automotive integration.',
    tags: ['IoT', 'Sensors', 'GPS', 'Embedded C'],
    image: 'https://picsum.photos/seed/safety/800/600',
    links: { github: '#' }
  },
  {
    id: 'weather-app',
    title: 'Precision Weather Prediction',
    description: 'Responsive web application providing hyper-local real-time weather updates.',
    problem: 'Existing weather apps are often cluttered and slow on low-bandwidth devices.',
    solution: 'Optimized API fetching and state management to deliver instant updates in a minimalist UI.',
    impact: 'Successfully served real-time data to multiple concurrent users with high precision.',
    tags: ['Web', 'JavaScript', 'API', 'UI/UX'],
    image: 'https://picsum.photos/seed/weather/800/600',
    links: { github: '#', demo: '#' }
  }
];

export const SKILLS: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    icon: 'layout'
  },
  {
    category: 'Backend',
    items: ['Node.js', 'REST APIs', 'Express', 'Python'],
    icon: 'server'
  },
  {
    category: 'IoT & Embedded',
    items: ['Arduino', 'Raspberry Pi', 'GPS Integration', 'Sensors'],
    icon: 'cpu'
  },
  {
    category: 'AI / ML',
    items: ['Computer Vision', 'NLP', 'Deep Learning', 'Data Analysis'],
    icon: 'brain'
  }
];

export const EXPERIENCES = [
  {
    title: 'Tech Associate Intern',
    company: 'Inaiyam Innovations',
    period: 'Oct 2024 – Jan 2025',
    details: 'Focused on technical and system-level problem solving in a hybrid environment.'
  },
  {
    title: 'IoT Research Intern',
    company: 'AmyPo Technologies',
    period: '2024 – 2025',
    details: 'Worked on real-time IoT and software development projects, enhancing debugging skills.'
  }
];
