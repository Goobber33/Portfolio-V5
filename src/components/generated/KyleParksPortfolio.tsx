import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, GraduationCap, Code, Briefcase, User, ChevronDown } from 'lucide-react';
type KyleParksPortfolioProps = Record<string, never>;
const skills = [{
  category: 'Frontend',
  items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js'],
  mpid: "417d1cfb-5283-49a1-924a-46a3b65c91ab"
}, {
  category: 'Backend',
  items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL'],
  mpid: "82554f6f-6e87-4ec5-abaa-0d20197a0650"
}, {
  category: 'Tools',
  items: ['Git', 'Docker', 'AWS', 'Vite', 'Webpack', 'Jest'],
  mpid: "0fad208f-1ce4-4e90-b8be-f1cdb712d8c5"
}, {
  category: 'Concepts',
  items: ['Full Stack Development', 'Responsive Design', 'Agile', 'CI/CD', 'Testing', 'Design Patterns'],
  mpid: "06175347-7c0c-4ee2-99b9-169eb6a2f6d2"
}] as any[];
const projects = [{
  title: 'E-Commerce Platform',
  description: 'Full-stack e-commerce solution with cart management, user authentication, and payment integration.',
  tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  link: '#',
  mpid: "f53e4c53-ee54-4098-87f1-0ad56b7badde"
}, {
  title: 'Task Management App',
  description: 'Collaborative task management application with real-time updates and team features.',
  tech: ['TypeScript', 'Express', 'PostgreSQL', 'Socket.io'],
  link: '#',
  mpid: "c6a5ad7a-8857-4f66-8b4b-86d6b4d2c36a"
}, {
  title: 'Weather Dashboard',
  description: 'Interactive weather application with data visualization and location-based forecasts.',
  tech: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
  link: '#',
  mpid: "69b67aa3-88e9-4823-bfda-0ca0e6d0aa8e"
}] as any[];
const education = [{
  institution: 'Arizona State University',
  degree: 'Bachelor of Science in Computer Science',
  period: 'Present',
  details: 'Barrett, The Honors College',
  color: '#8A4FFF',
  mpid: "4a441a79-fca3-47aa-b37c-1a1132ba030a"
}, {
  institution: 'University of Washington',
  degree: 'Full Stack Web Development Bootcamp',
  period: '2023',
  details: 'Intensive program covering modern web technologies',
  color: '#C3BEF0',
  mpid: "877b8fe7-db76-4bca-8b36-136f20ffb50b"
}] as any[];

// @component: KyleParksPortfolio
export const KyleParksPortfolio = (props: KyleParksPortfolioProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const {
    scrollYProgress
  } = useScroll();
  const backgroundColor = useTransform(scrollYProgress, [0, 1], ['#FFFFFF', '#EFFFFA']);
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  // @return
  return <SortableContainer dndKitId="fddd8111-8c1a-40a7-8bf0-cb72ea042d8f" containerType="regular" prevTag="div" className="min-h-screen w-full bg-white" data-magicpath-id="0" data-magicpath-path="KyleParksPortfolio.tsx">
      <SortableContainer dndKitId="e2523f55-77b1-4fca-b7c1-0c212c65fe09" containerType="regular" prevTag="motion.nav" className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#E5ECF4]" initial={{
      y: -100
    }} animate={{
      y: 0
    }} transition={{
      duration: 0.5
    }} data-magicpath-id="1" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="dfe32c24-e8a9-4923-aaf4-974c27ea832c" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="2" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="6ea0e9e6-10bc-44bd-8f44-5dab032eaf1d" containerType="regular" prevTag="div" className="flex items-center justify-between h-16" data-magicpath-id="3" data-magicpath-path="KyleParksPortfolio.tsx">
            <motion.div data-magicpath-motion-tag="motion.div" className="text-2xl font-bold" whileHover={{
            scale: 1.05
          }} style={{
            color: '#8A4FFF'
          }} data-magicpath-id="4" data-magicpath-path="KyleParksPortfolio.tsx">
              KP
            </motion.div>

            <div className="hidden md:flex items-center space-x-8" data-magicpath-id="5" data-magicpath-path="KyleParksPortfolio.tsx">
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map(item => <SortableContainer dndKitId="438b90c7-5462-4603-a6fb-d4a827009fff" containerType="regular" prevTag="button" key={item} onClick={() => scrollToSection(item.toLowerCase())} className="relative text-gray-700 hover:text-[#8A4FFF] transition-colors duration-200 cursor-pointer" data-magicpath-id="6" data-magicpath-path="KyleParksPortfolio.tsx">
                  {item}
                  {activeSection === item.toLowerCase() && <motion.div data-magicpath-motion-tag="motion.div" layoutId="activeSection" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8A4FFF]" data-magicpath-id="7" data-magicpath-path="KyleParksPortfolio.tsx" />}
                </SortableContainer>)}
            </div>

            <SortableContainer dndKitId="3ea91ae8-c9a4-40e0-b158-3dcd4001cfaa" containerType="regular" prevTag="button" className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} data-magicpath-id="8" data-magicpath-path="KyleParksPortfolio.tsx">
              {mobileMenuOpen ? <X size={24} data-magicpath-id="9" data-magicpath-path="KyleParksPortfolio.tsx" /> : <Menu size={24} data-magicpath-id="10" data-magicpath-path="KyleParksPortfolio.tsx" />}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {mobileMenuOpen && <SortableContainer dndKitId="2bb10458-ad5d-4621-9f73-f3b71d51afef" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden border-t border-[#E5ECF4] bg-white" data-magicpath-id="11" data-magicpath-path="KyleParksPortfolio.tsx">
            <div className="px-4 py-4 space-y-3" data-magicpath-id="12" data-magicpath-path="KyleParksPortfolio.tsx">
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map(item => <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-[#EFFFFA] hover:text-[#8A4FFF] rounded-lg transition-colors duration-200" data-magicpath-id="13" data-magicpath-path="KyleParksPortfolio.tsx">
                  {item}
                </button>)}
            </div>
          </SortableContainer>}
      </SortableContainer>

      <SortableContainer dndKitId="9c66cb05-9f35-4f8b-b35e-7a5b905519ac" containerType="regular" prevTag="section" id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" data-magicpath-id="14" data-magicpath-path="KyleParksPortfolio.tsx">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFFFFA] via-white to-[#E5ECF4]" data-magicpath-id="15" data-magicpath-path="KyleParksPortfolio.tsx" />
        
        <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 opacity-30" animate={{
        background: ['radial-gradient(circle at 20% 50%, #8A4FFF 0%, transparent 50%)', 'radial-gradient(circle at 80% 50%, #C3BEF0 0%, transparent 50%)', 'radial-gradient(circle at 20% 50%, #8A4FFF 0%, transparent 50%)']
      }} transition={{
        duration: 10,
        repeat: Infinity
      }} data-magicpath-id="16" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="c4a2b51b-7b41-419b-92c4-6a8c2e4dd801" containerType="regular" prevTag="div" className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-magicpath-id="17" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="b0fa4771-6a82-4952-b589-390845b7be6d" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} data-magicpath-id="18" data-magicpath-path="KyleParksPortfolio.tsx">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-gray-900" data-magicpath-id="19" data-magicpath-path="KyleParksPortfolio.tsx">
              Kyle Parks
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl mb-6" style={{
            color: '#8A4FFF'
          }} data-magicpath-id="20" data-magicpath-path="KyleParksPortfolio.tsx">
              Software Engineer
            </p>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto" data-magicpath-id="21" data-magicpath-path="KyleParksPortfolio.tsx">
              Computer Science student at Arizona State University, Barrett Honors College. 
              Passionate about building elegant solutions to complex problems.
            </p>
            <SortableContainer dndKitId="af07e938-67fb-4427-9aac-c5bb43a5d3ac" containerType="regular" prevTag="div" className="flex items-center justify-center gap-4 mb-12" data-magicpath-id="22" data-magicpath-path="KyleParksPortfolio.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="https://github.com" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.1,
              rotate: 5
            }} whileTap={{
              scale: 0.95
            }} className="p-3 rounded-full bg-white border border-[#E5ECF4] hover:border-[#8A4FFF] transition-colors duration-200" data-magicpath-id="23" data-magicpath-path="KyleParksPortfolio.tsx">
                <Github size={24} className="text-gray-700" data-magicpath-id="24" data-magicpath-path="KyleParksPortfolio.tsx" />
              </motion.a>
              <motion.a data-magicpath-motion-tag="motion.a" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.1,
              rotate: -5
            }} whileTap={{
              scale: 0.95
            }} className="p-3 rounded-full bg-white border border-[#E5ECF4] hover:border-[#8A4FFF] transition-colors duration-200" data-magicpath-id="25" data-magicpath-path="KyleParksPortfolio.tsx">
                <Linkedin size={24} className="text-gray-700" data-magicpath-id="26" data-magicpath-path="KyleParksPortfolio.tsx" />
              </motion.a>
              <motion.a data-magicpath-motion-tag="motion.a" href="mailto:kyle@example.com" whileHover={{
              scale: 1.1,
              rotate: 5
            }} whileTap={{
              scale: 0.95
            }} className="p-3 rounded-full bg-white border border-[#E5ECF4] hover:border-[#8A4FFF] transition-colors duration-200" data-magicpath-id="27" data-magicpath-path="KyleParksPortfolio.tsx">
                <Mail size={24} className="text-gray-700" data-magicpath-id="28" data-magicpath-path="KyleParksPortfolio.tsx" />
              </motion.a>
            </SortableContainer>
            <SortableContainer dndKitId="78dc96fc-1d27-43bd-8586-ff0c8b5bee6e" containerType="regular" prevTag="motion.button" onClick={() => scrollToSection('about')} whileHover={{
            y: 5
          }} animate={{
            y: [0, 10, 0]
          }} transition={{
            duration: 2,
            repeat: Infinity
          }} className="text-[#8A4FFF]" data-magicpath-id="29" data-magicpath-path="KyleParksPortfolio.tsx">
              <ChevronDown size={32} data-magicpath-id="30" data-magicpath-path="KyleParksPortfolio.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="d8bab988-bc5a-4f8b-9318-4ee9310d9a1a" containerType="regular" prevTag="section" id="about" className="py-20 bg-white" data-magicpath-id="31" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="174d2e0d-f94f-4681-b1a5-bc1957bf28fc" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="32" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="27a2fbff-8a79-4593-929f-7853e1e86880" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} data-magicpath-id="33" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="05874894-18a8-4cf7-b46f-372a2ccaa61a" containerType="regular" prevTag="div" className="flex items-center gap-3 mb-12" data-magicpath-id="34" data-magicpath-path="KyleParksPortfolio.tsx">
              <User size={32} className="text-[#8A4FFF]" data-magicpath-id="35" data-magicpath-path="KyleParksPortfolio.tsx" />
              <h2 className="text-4xl font-bold text-gray-900" data-magicpath-id="36" data-magicpath-path="KyleParksPortfolio.tsx">About Me</h2>
            </SortableContainer>
            <SortableContainer dndKitId="047372c7-2194-4f7d-ad69-6998248933dc" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-12 items-center" data-magicpath-id="37" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="ac8649a1-0cfa-4b70-aa74-4ceef6c2e98a" containerType="regular" prevTag="div" data-magicpath-id="38" data-magicpath-path="KyleParksPortfolio.tsx">
                <p className="text-lg text-gray-600 mb-6" data-magicpath-id="39" data-magicpath-path="KyleParksPortfolio.tsx">
                  I'm a dedicated Computer Science student at Arizona State University, 
                  where I'm part of the prestigious Barrett Honors College. My journey in 
                  software development began with the University of Washington's intensive 
                  Full Stack Web Development bootcamp in 2023.
                </p>
                <p className="text-lg text-gray-600 mb-6" data-magicpath-id="40" data-magicpath-path="KyleParksPortfolio.tsx">
                  I'm passionate about creating efficient, user-friendly applications and 
                  constantly expanding my technical expertise. My approach combines academic 
                  rigor with practical, hands-on experience in modern web technologies.
                </p>
                <p className="text-lg text-gray-600" data-magicpath-id="41" data-magicpath-path="KyleParksPortfolio.tsx">
                  When I'm not coding, I enjoy exploring new technologies, contributing to 
                  open-source projects, and collaborating with fellow developers to solve 
                  challenging problems.
                </p>
              </SortableContainer>
              <SortableContainer dndKitId="4133fa45-fdd9-41bb-bfc7-70a75785468a" containerType="regular" prevTag="div" className="relative" data-magicpath-id="42" data-magicpath-path="KyleParksPortfolio.tsx">
                <SortableContainer dndKitId="f6610dd3-38c4-4953-9650-867ae650e0a0" containerType="regular" prevTag="div" className="w-full h-80 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] p-1" data-magicpath-id="43" data-magicpath-path="KyleParksPortfolio.tsx">
                  <SortableContainer dndKitId="de316883-550c-41cd-95e9-de6f1b619195" containerType="regular" prevTag="div" className="w-full h-full bg-white rounded-2xl overflow-hidden" data-magicpath-id="44" data-magicpath-path="KyleParksPortfolio.tsx">
                    <img src="https://static.magicpath.ai/user-images/cd5c6bf5-ac42-4c8a-bf48-d26c5e4eda8e.png" alt="Kyle Parks" className="w-full h-full object-cover" data-magicpath-id="45" data-magicpath-path="KyleParksPortfolio.tsx" />
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="8275d3ed-9199-4ccf-8c51-266f8d22d4d7" containerType="regular" prevTag="section" id="education" className="py-20 bg-[#EFFFFA]" data-magicpath-id="46" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="368357b2-166a-4cf2-97d4-ec7ad396891a" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="47" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="f4578ad8-4140-4ab2-ae43-23531194f3f0" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} data-magicpath-id="48" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="af417823-e1f5-4a4c-b89c-4fdead74cac9" containerType="regular" prevTag="div" className="flex items-center gap-3 mb-12" data-magicpath-id="49" data-magicpath-path="KyleParksPortfolio.tsx">
              <GraduationCap size={32} className="text-[#8A4FFF]" data-magicpath-id="50" data-magicpath-path="KyleParksPortfolio.tsx" />
              <h2 className="text-4xl font-bold text-gray-900" data-magicpath-id="51" data-magicpath-path="KyleParksPortfolio.tsx">Education</h2>
            </SortableContainer>
            <SortableContainer dndKitId="4e35a572-cfd5-457b-8694-430e17b2f251" containerType="collection" prevTag="div" className="space-y-8" data-magicpath-id="52" data-magicpath-path="KyleParksPortfolio.tsx">
              {education.map((edu, index) => <motion.div data-magicpath-motion-tag="motion.div" key={index} initial={{
              opacity: 0,
              x: -50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.2
            }} viewport={{
              once: true
            }} className="bg-white rounded-xl p-8 border-l-4 hover:shadow-lg transition-shadow duration-300" style={{
              borderColor: edu.color
            }} data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-id="53" data-magicpath-path="KyleParksPortfolio.tsx">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2" data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="institution:unknown" data-magicpath-id="54" data-magicpath-path="KyleParksPortfolio.tsx">{edu.institution}</h3>
                  <p className="text-lg mb-2" style={{
                color: edu.color
              }} data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="degree:unknown" data-magicpath-id="55" data-magicpath-path="KyleParksPortfolio.tsx">{edu.degree}</p>
                  <p className="text-gray-600 mb-2" data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="period:unknown" data-magicpath-id="56" data-magicpath-path="KyleParksPortfolio.tsx">{edu.period}</p>
                  <p className="text-gray-700" data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="details:unknown" data-magicpath-id="57" data-magicpath-path="KyleParksPortfolio.tsx">{edu.details}</p>
                </motion.div>)}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="ef54670a-07b8-49e9-8dc6-82de4bb4d1c0" containerType="regular" prevTag="section" id="skills" className="py-20 bg-white" data-magicpath-id="58" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="ff0d0405-a0ca-4d8c-b5aa-529738bd2d5d" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="59" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="f61e09cb-40ee-482a-bd75-cbd4cf27b19d" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} data-magicpath-id="60" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="d213aec8-d2e4-454e-8606-208124a0aab9" containerType="regular" prevTag="div" className="flex items-center gap-3 mb-12" data-magicpath-id="61" data-magicpath-path="KyleParksPortfolio.tsx">
              <Code size={32} className="text-[#8A4FFF]" data-magicpath-id="62" data-magicpath-path="KyleParksPortfolio.tsx" />
              <h2 className="text-4xl font-bold text-gray-900" data-magicpath-id="63" data-magicpath-path="KyleParksPortfolio.tsx">Skills</h2>
            </SortableContainer>
            <SortableContainer dndKitId="71159613-7bac-491c-a86b-581368cbc481" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="64" data-magicpath-path="KyleParksPortfolio.tsx">
              {skills.map((skillGroup, groupIndex) => <motion.div data-magicpath-motion-tag="motion.div" key={groupIndex} initial={{
              opacity: 0,
              y: 50
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: groupIndex * 0.1
            }} viewport={{
              once: true
            }} className="bg-gradient-to-br from-[#EFFFFA] to-[#E5ECF4] rounded-xl p-6 hover:shadow-lg transition-shadow duration-300" data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-id="65" data-magicpath-path="KyleParksPortfolio.tsx">
                  <h3 className="text-xl font-bold mb-4" style={{
                color: '#8A4FFF'
              }} data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-field="category:unknown" data-magicpath-id="66" data-magicpath-path="KyleParksPortfolio.tsx">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2" data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-id="67" data-magicpath-path="KyleParksPortfolio.tsx">
                    {skillGroup.items.map((skill, skillIndex) => <li key={skillIndex} className="text-gray-700 flex items-center gap-2" data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-id="68" data-magicpath-path="KyleParksPortfolio.tsx">
                        <span className="w-2 h-2 rounded-full bg-[#8A4FFF]" data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-id="69" data-magicpath-path="KyleParksPortfolio.tsx" />
                        {skill}
                      </li>)}
                  </ul>
                </motion.div>)}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="42f1c7d8-557b-42b8-9dea-c3089db189f7" containerType="regular" prevTag="section" id="projects" className="py-20 bg-[#E5ECF4]" data-magicpath-id="70" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="7b3a2357-1307-43c1-8e6b-3a4d122fedef" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="71" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="a71d51a7-b375-4fae-ad30-4484ebfc3877" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} data-magicpath-id="72" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="b8521a2e-c9ba-4927-8f29-a1148985fbf2" containerType="regular" prevTag="div" className="flex items-center gap-3 mb-12" data-magicpath-id="73" data-magicpath-path="KyleParksPortfolio.tsx">
              <Briefcase size={32} className="text-[#8A4FFF]" data-magicpath-id="74" data-magicpath-path="KyleParksPortfolio.tsx" />
              <h2 className="text-4xl font-bold text-gray-900" data-magicpath-id="75" data-magicpath-path="KyleParksPortfolio.tsx">Projects</h2>
            </SortableContainer>
            <SortableContainer dndKitId="f5c64499-9924-46ae-8656-ac28737ba32c" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-magicpath-id="76" data-magicpath-path="KyleParksPortfolio.tsx">
              {projects.map((project, index) => <motion.div data-magicpath-motion-tag="motion.div" key={index} initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} whileHover={{
              y: -10
            }} className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="77" data-magicpath-path="KyleParksPortfolio.tsx">
                  <h3 className="text-xl font-bold text-gray-900 mb-3" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="78" data-magicpath-path="KyleParksPortfolio.tsx">{project.title}</h3>
                  <p className="text-gray-600 mb-4" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="79" data-magicpath-path="KyleParksPortfolio.tsx">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="80" data-magicpath-path="KyleParksPortfolio.tsx">
                    {project.tech.map((tech, techIndex) => <span key={techIndex} className="px-3 py-1 bg-[#EFFFFA] text-[#8A4FFF] rounded-full text-sm" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="81" data-magicpath-path="KyleParksPortfolio.tsx">
                        {tech}
                      </span>)}
                  </div>
                  <a href={project.link} className="inline-flex items-center gap-2 text-[#8A4FFF] hover:text-[#C3BEF0] transition-colors duration-200" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="82" data-magicpath-path="KyleParksPortfolio.tsx">
                    View Project <ExternalLink size={16} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-id="83" data-magicpath-path="KyleParksPortfolio.tsx" />
                  </a>
                </motion.div>)}
            </SortableContainer>
            
            <SortableContainer dndKitId="0708fc92-4d55-4a81-b4d2-ac412125c5f0" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} viewport={{
            once: true
          }} className="flex justify-center mt-12" data-magicpath-id="84" data-magicpath-path="KyleParksPortfolio.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="https://github.com/kyleparks" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.05,
              y: -2
            }} whileTap={{
              scale: 0.98
            }} className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#8A4FFF] rounded-xl font-semibold hover:shadow-xl transition-all duration-300 border-2 border-[#8A4FFF] hover:bg-[#8A4FFF] hover:text-white group" data-magicpath-id="85" data-magicpath-path="KyleParksPortfolio.tsx">
                <Github size={24} className="transition-transform duration-300 group-hover:rotate-12" data-magicpath-id="86" data-magicpath-path="KyleParksPortfolio.tsx" />
                View More Projects
                <ExternalLink size={20} className="transition-transform duration-300 group-hover:translate-x-1" data-magicpath-id="87" data-magicpath-path="KyleParksPortfolio.tsx" />
              </motion.a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="5f605b89-383f-426c-8263-5676c52cf945" containerType="regular" prevTag="section" id="contact" className="py-20 bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0]" data-magicpath-id="88" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="1502975b-285d-4abd-b6a0-fca377b0918a" containerType="regular" prevTag="div" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-magicpath-id="89" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="e9c1ad69-3cd4-4304-b0b3-d7935be2e03c" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} data-magicpath-id="90" data-magicpath-path="KyleParksPortfolio.tsx">
            <h2 className="text-4xl font-bold text-white mb-6" data-magicpath-id="91" data-magicpath-path="KyleParksPortfolio.tsx">Let's Work Together</h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto" data-magicpath-id="92" data-magicpath-path="KyleParksPortfolio.tsx">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Feel free to reach out!
            </p>
            <SortableContainer dndKitId="d68934fa-05ec-4b71-afab-cb777f6ea975" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-4" data-magicpath-id="93" data-magicpath-path="KyleParksPortfolio.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="mailto:kyle@example.com" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="px-8 py-4 bg-white text-[#8A4FFF] rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center gap-2" data-magicpath-id="94" data-magicpath-path="KyleParksPortfolio.tsx">
                <Mail size={20} data-magicpath-id="95" data-magicpath-path="KyleParksPortfolio.tsx" />
                Send Email
              </motion.a>
              <motion.a data-magicpath-motion-tag="motion.a" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-200 flex items-center gap-2 border border-white/30" data-magicpath-id="96" data-magicpath-path="KyleParksPortfolio.tsx">
                <Linkedin size={20} data-magicpath-id="97" data-magicpath-path="KyleParksPortfolio.tsx" />
                Connect on LinkedIn
              </motion.a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="b457ef8e-4204-4bf6-ab77-550a4172199e" containerType="regular" prevTag="footer" className="bg-white border-t border-[#E5ECF4] py-8" data-magicpath-id="98" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="f6a52123-2576-4755-9959-9af319775efc" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-magicpath-id="99" data-magicpath-path="KyleParksPortfolio.tsx">
          <p className="text-gray-600" data-magicpath-id="100" data-magicpath-path="KyleParksPortfolio.tsx">
            © 2024 Kyle Parks. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};