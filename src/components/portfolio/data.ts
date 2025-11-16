export const technologies = [{
  name: 'Java',
  icon: '☕',
  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  color: '#ED8B00',
  category: 'Backend'
}, {
  name: 'JavaScript',
  icon: '🟨',
  logo: 'https://cdn.simpleicons.org/javascript/F7DF1E',
  color: '#F7DF1E',
  category: 'Frontend'
}, {
  name: 'Python',
  icon: '🐍',
  logo: 'https://cdn.simpleicons.org/python/3776AB',
  color: '#3776AB',
  category: 'Backend'
}, {
  name: 'React',
  icon: '⚛️',
  logo: 'https://cdn.simpleicons.org/react/61DAFB',
  color: '#61DAFB',
  category: 'Frontend'
}, {
  name: 'TypeScript',
  icon: '📘',
  logo: 'https://cdn.simpleicons.org/typescript/3178C6',
  color: '#3178C6',
  category: 'Frontend'
}, {
  name: 'MongoDB',
  icon: '🍃',
  logo: 'https://cdn.simpleicons.org/mongodb/47A248',
  color: '#47A248',
  category: 'Database'
}, {
  name: 'AWS',
  icon: '☁️',
  logo: 'https://cdn.simpleicons.org/amazonaws/FF9900',
  color: '#FF9900',
  category: 'Tools'
}, {
  name: 'Express',
  icon: '🚂',
  logo: 'https://cdn.simpleicons.org/express/000000',
  color: '#000000',
  category: 'Backend'
}, {
  name: 'Node',
  icon: '🟢',
  logo: 'https://cdn.simpleicons.org/nodedotjs/339933',
  color: '#339933',
  category: 'Backend'
}, {
  name: 'HTML',
  icon: '🌐',
  logo: 'https://cdn.simpleicons.org/html5/E34F26',
  color: '#E34F26',
  category: 'Frontend'
}, {
  name: 'CSS',
  icon: '🎨',
  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  color: '#1572B6',
  category: 'Frontend'
}, {
  name: 'Tailwinds',
  icon: '💨',
  logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  color: '#06B6D4',
  category: 'Frontend'
}, {
  name: 'Next.js',
  icon: '▲',
  logo: 'https://cdn.simpleicons.org/nextdotjs/000000',
  color: '#000000',
  category: 'Frontend'
}, {
  name: 'PostgreSQL',
  icon: '🐘',
  logo: 'https://cdn.simpleicons.org/postgresql/4169E1',
  color: '#4169E1',
  category: 'Database'
}] as any[];

export const skillCategories = [{
  name: 'Frontend Development',
  icon: '🎨',
  color: '#8A4FFF',
  skills: technologies.filter(t => t.category === 'Frontend')
}, {
  name: 'Backend Development',
  icon: '⚙️',
  color: '#9D5FFF',
  skills: technologies.filter(t => t.category === 'Backend')
}, {
  name: 'Database & Storage',
  icon: '💾',
  color: '#C3BEF0',
  skills: technologies.filter(t => t.category === 'Database')
}, {
  name: 'Tools & DevOps',
  icon: '🛠️',
  color: '#8A4FFF',
  skills: technologies.filter(t => t.category === 'Tools')
}, {
  name: 'Testing & Quality',
  icon: '✓',
  color: '#9D5FFF',
  skills: technologies.filter(t => t.category === 'Testing')
}] as any[];

export const projects = [{
  title: 'Portfolio Website',
  description: 'Modern, responsive portfolio website built with React, TypeScript, and Vite. Features animated components, smooth scrolling, and a beautiful UI with Tailwind CSS.',
  tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
  link: 'https://github.com/Goobber33/Portfolio-V5'
}, {
  title: 'Quantum IQ - AI Platform',
  description: 'A state-of-the-art SaaS AI platform featuring conversation analysis, image/video generation, music composition, and code generation. Built with Next.js and integrated with Stripe for subscriptions.',
  tech: ['Next.js', 'React', 'TypeScript', 'Prisma', 'Stripe', 'Tailwind CSS'],
  link: 'https://github.com/Goobber33/Quantum-AI'
}, {
  title: 'Air Quality Dataset Analysis',
  description: 'Python data analysis project using Pandas to process and visualize large air quality datasets. Features chunk processing, data aggregation, SQLite integration, and interactive visualizations for environmental data analysis.',
  tech: ['Python', 'Pandas', 'SQLite', 'Matplotlib'],
  link: 'https://github.com/Goobber33/Pandas-Air-Quality-Dataset'
}] as any[];

export const education = [{
  institution: 'Arizona State University',
  degree: 'Bachelor of Science in Computer Science',
  period: 'Present',
  details: 'Barrett, The Honors College',
  color: '#8A4FFF'
}, {
  institution: 'University of Washington',
  degree: 'Full Stack Web Development Bootcamp',
  period: '2023',
  details: 'Intensive program covering modern web technologies',
  color: '#C3BEF0'
}] as any[];
