import React from 'react';
import { Project, Experience } from './types';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Layout, 
  BrainCircuit,
  Palette,
  Terminal
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Sebastian Canadinha-DeLima",
  title: "UI Designer & Frontend Developer",
  bio: "Focused on modular interfaces and design systems. I translate visual concepts into production-ready code using Tailwind CSS and React.",
  location: "Waterloo, ON, Canada",
  email: "sebastiancd722@gmail.com",
  socials: [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, url: 'https://github.com/sebastiancd722' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/sebastian-canadinha-delima/' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, url: 'mailto:sebastiancd722@gmail.com' },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'arc-profile',
    title: 'ARC Profile: UI Section Development',
    description: 'A library of modular website sections focusing on clean spacing and responsive hierarchy. Implemented with HTML and Tailwind CSS.',
    tags: ['HTML', 'Tailwind CSS', 'Responsive Design'],
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
    category: 'Web',
    bullets: [
      'Development of reusable UI sections for the ARC platform',
      'Standardization of spacing and typography systems',
      'Cross browser compatibility testing and refinement',
      'Integration of modular styles into existing frontend workflows'
    ],
    contributions: [
      'Authored production ready HTML and CSS components',
      'Optimized asset loading for high resolution display',
      'Collaborated on visual design system requirements'
    ],
    notes: 'This project focused on establishing a robust foundation for scalable web layouts.'
  },
  {
    id: 'nova-portfolio',
    title: 'Nova Portfolio',
    description: 'A personal portfolio featuring a modular component architecture and a custom assistant interface.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
    category: 'Web',
    github: 'https://github.com/sebastiancd722',
    bullets: [
      'Architected modular React component library',
      'Implemented custom Gemini API integration for career context',
      'Designed dark mode first visual identity',
      'Configured automated deployment workflows'
    ],
    contributions: [
      'Full stack implementation of assistant interface',
      'Technical design of responsive grid systems',
      'State management for interactive UI elements'
    ],
    notes: 'A personal project designed to explore modern frontend frameworks and AI integrations.'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'exp1',
    role: 'UI Section Designer',
    company: 'ARC Profile',
    period: 'Project Duration',
    description: [
      'Built modular UI sections using HTML and Tailwind CSS.',
      'Focused on design consistency and responsive layouts.',
      'Delivered code integrated into the production product.'
    ]
  }
];

export const GROUPED_SKILLS = {
  "Frontend": ["HTML", "CSS", "Tailwind CSS", "React", "TypeScript"],
  "Design": ["UI Layout", "Visual Hierarchy", "Typography", "Component Design"],
  "Tools": ["Vite", "Git", "Figma", "VS Code"],
};

export const CATEGORY_ICONS = {
  Web: <Layout className="w-4 h-4" />,
  AI: <BrainCircuit className="w-4 h-4" />,
  Design: <Palette className="w-4 h-4" />,
  Mobile: <Terminal className="w-4 h-4" />
};