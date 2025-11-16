import { 
  Github, 
  Linkedin, 
  Mail, 
  Briefcase, 
  Code, 
  Award,
  GraduationCap,
  User
} from 'lucide-react';
import type { SkillGroup, Project, Education, SocialLink, StatItem } from '../types/portfolio';

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL']
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'AWS', 'Vite', 'Webpack', 'Jest']
  },
  {
    category: 'Concepts',
    items: ['Full Stack Development', 'Responsive Design', 'Agile', 'CI/CD', 'Testing', 'Design Patterns']
  }
];

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with cart management, user authentication, and payment integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team features.',
    tech: ['TypeScript', 'Express', 'PostgreSQL', 'Socket.io'],
    link: '#'
  },
  {
    title: 'Weather Dashboard',
    description: 'Interactive weather application with data visualization and location-based forecasts.',
    tech: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
    link: '#'
  }
];

export const education: Education[] = [
  {
    institution: 'Arizona State University',
    degree: 'Bachelor of Science in Computer Science',
    period: 'Present',
    details: 'Barrett, The Honors College',
    color: '#8A4FFF'
  },
  {
    institution: 'University of Washington',
    degree: 'Full Stack Web Development Bootcamp',
    period: '2023',
    details: 'Intensive program covering modern web technologies',
    color: '#C3BEF0'
  }
];

export const socialLinks: SocialLink[] = [
  {
    icon: Github,
    href: 'https://github.com',
    label: 'GitHub'
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com',
    label: 'LinkedIn'
  },
  {
    icon: Mail,
    href: 'mailto:kyle@example.com',
    label: 'Email'
  }
];

export const stats: StatItem[] = [
  {
    label: 'Projects',
    value: '15+',
    icon: Briefcase
  },
  {
    label: 'Skills',
    value: '24+',
    icon: Code
  },
  {
    label: 'Certifications',
    value: '3',
    icon: Award
  }
];

export const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'] as const;
export type Section = typeof sections[number];

