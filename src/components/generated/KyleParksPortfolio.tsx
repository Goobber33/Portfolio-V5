import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, GraduationCap, Code, Briefcase, User, ChevronDown } from 'lucide-react';
type KyleParksPortfolioProps = Record<string, never>;
const skills = [{
  category: 'Frontend',
  items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js'],
  mpid: "82d0db18-899d-469c-9452-fcef7cdb5423"
}, {
  category: 'Backend',
  items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL'],
  mpid: "452cc7e6-ace9-4cb6-b3eb-e779cfd3f660"
}, {
  category: 'Tools',
  items: ['Git', 'Docker', 'AWS', 'Vite', 'Webpack', 'Jest'],
  mpid: "d0975a8a-d7a6-4481-aa6d-ec76851eb7e0"
}, {
  category: 'Concepts',
  items: ['Full Stack Development', 'Responsive Design', 'Agile', 'CI/CD', 'Testing', 'Design Patterns'],
  mpid: "15a59be3-f44c-4441-a302-d1d749239600"
}] as any[];
const projects = [{
  title: 'E-Commerce Platform',
  description: 'Full-stack e-commerce solution with cart management, user authentication, and payment integration.',
  tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  link: '#',
  mpid: "4602f814-7a7b-4bcc-92c9-501bb55fa8e5"
}, {
  title: 'Task Management App',
  description: 'Collaborative task management application with real-time updates and team features.',
  tech: ['TypeScript', 'Express', 'PostgreSQL', 'Socket.io'],
  link: '#',
  mpid: "25b20d2a-616a-4898-8b5c-9ce6139828f3"
}, {
  title: 'Weather Dashboard',
  description: 'Interactive weather application with data visualization and location-based forecasts.',
  tech: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
  link: '#',
  mpid: "6144358c-d7c5-4070-835e-2c80d23d8a07"
}] as any[];
const education = [{
  institution: 'Arizona State University',
  degree: 'Bachelor of Science in Computer Science',
  period: 'Present',
  details: 'Barrett, The Honors College',
  color: '#8A4FFF',
  mpid: "1efc0685-3a0f-4f65-9329-96b97f4b87b7"
}, {
  institution: 'University of Washington',
  degree: 'Full Stack Web Development Bootcamp',
  period: '2023',
  details: 'Intensive program covering modern web technologies',
  color: '#C3BEF0',
  mpid: "58381abf-3b5a-433f-a53b-ff6b2ee68d84"
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
  return <SortableContainer dndKitId="dfed7267-97b6-403b-bf3f-7855330d2994" containerType="regular" prevTag="div" className="min-h-screen w-full bg-white" data-magicpath-id="0" data-magicpath-path="KyleParksPortfolio.tsx">
      <SortableContainer dndKitId="919f8863-2db1-4f04-a090-ed4259840226" containerType="regular" prevTag="motion.nav" className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#E5ECF4]" initial={{
      y: -100
    }} animate={{
      y: 0
    }} transition={{
      duration: 0.5
    }} data-magicpath-id="1" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="ff3805ad-ef6e-404b-ad17-2ebe10311a6f" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="2" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="182f4076-d2c6-4fab-8725-db9ea70ce806" containerType="regular" prevTag="div" className="flex items-center justify-between h-16" data-magicpath-id="3" data-magicpath-path="KyleParksPortfolio.tsx">
            <motion.div data-magicpath-motion-tag="motion.div" className="text-2xl font-bold" whileHover={{
            scale: 1.05
          }} style={{
            color: '#8A4FFF'
          }} data-magicpath-id="4" data-magicpath-path="KyleParksPortfolio.tsx">
              KP
            </motion.div>

            <div className="hidden md:flex items-center space-x-8" data-magicpath-id="5" data-magicpath-path="KyleParksPortfolio.tsx">
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map(item => <SortableContainer dndKitId="23b220ba-f6e2-4c96-af37-95ac29545f68" containerType="regular" prevTag="button" key={item} onClick={() => scrollToSection(item.toLowerCase())} className="relative text-gray-700 hover:text-[#8A4FFF] transition-colors duration-200" data-magicpath-id="6" data-magicpath-path="KyleParksPortfolio.tsx">
                  {item}
                  {activeSection === item.toLowerCase() && <motion.div data-magicpath-motion-tag="motion.div" layoutId="activeSection" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8A4FFF]" data-magicpath-id="7" data-magicpath-path="KyleParksPortfolio.tsx" />}
                </SortableContainer>)}
            </div>

            <SortableContainer dndKitId="d6c82137-8dd8-47e9-9c27-8acef04c4fd1" containerType="regular" prevTag="button" className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} data-magicpath-id="8" data-magicpath-path="KyleParksPortfolio.tsx">
              {mobileMenuOpen ? <X size={24} data-magicpath-id="9" data-magicpath-path="KyleParksPortfolio.tsx" /> : <Menu size={24} data-magicpath-id="10" data-magicpath-path="KyleParksPortfolio.tsx" />}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {mobileMenuOpen && <SortableContainer dndKitId="da9c8a45-b2eb-46f8-9da6-3c303c182e37" containerType="regular" prevTag="motion.div" initial={{
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

      <SortableContainer dndKitId="6ec3de1d-796b-4f45-b8b9-d4ab96e10b56" containerType="regular" prevTag="section" id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" data-magicpath-id="14" data-magicpath-path="KyleParksPortfolio.tsx">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFFFFA] via-white to-[#E5ECF4]" data-magicpath-id="15" data-magicpath-path="KyleParksPortfolio.tsx" />
        
        <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 opacity-30" animate={{
        background: ['radial-gradient(circle at 20% 50%, #8A4FFF 0%, transparent 50%)', 'radial-gradient(circle at 80% 50%, #C3BEF0 0%, transparent 50%)', 'radial-gradient(circle at 20% 50%, #8A4FFF 0%, transparent 50%)']
      }} transition={{
        duration: 10,
        repeat: Infinity
      }} data-magicpath-id="16" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="38aef4d0-0122-44f4-87d4-7b62ec3dda55" containerType="regular" prevTag="div" className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-magicpath-id="17" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="8a140f56-2189-4b34-822a-ec27e6d1853e" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="87777731-e4da-4c44-bc7a-6ee4611c1868" containerType="regular" prevTag="div" className="flex items-center justify-center gap-4 mb-12" data-magicpath-id="22" data-magicpath-path="KyleParksPortfolio.tsx">
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
            <SortableContainer dndKitId="78c49664-b7d7-4763-95a2-310a3548d7ca" containerType="regular" prevTag="motion.button" onClick={() => scrollToSection('about')} whileHover={{
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

      <SortableContainer dndKitId="c608fc00-a1c4-4978-a583-f8fa32c09195" containerType="regular" prevTag="section" id="about" className="py-20 bg-white" data-magicpath-id="31" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="e069bfa5-1adc-429b-a7ed-b45eaad6413f" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="32" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="44ca92f9-75e0-4e45-bbdc-c4eb099a7b07" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} data-magicpath-id="33" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="4168f4dd-573a-435b-9bc2-973524f89395" containerType="regular" prevTag="div" className="flex items-center gap-3 mb-12" data-magicpath-id="34" data-magicpath-path="KyleParksPortfolio.tsx">
              <User size={32} className="text-[#8A4FFF]" data-magicpath-id="35" data-magicpath-path="KyleParksPortfolio.tsx" />
              <h2 className="text-4xl font-bold text-gray-900" data-magicpath-id="36" data-magicpath-path="KyleParksPortfolio.tsx">About Me</h2>
            </SortableContainer>
            <SortableContainer dndKitId="fcd3c77d-0fb0-46fe-982d-835219531f9f" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-12 items-center" data-magicpath-id="37" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="b888c564-f911-4265-8d14-a5a9e976bd13" containerType="regular" prevTag="div" data-magicpath-id="38" data-magicpath-path="KyleParksPortfolio.tsx">
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
              <SortableContainer dndKitId="b3c636f0-8f87-46ba-a7e8-1531dcabd8db" containerType="regular" prevTag="div" className="relative" data-magicpath-id="42" data-magicpath-path="KyleParksPortfolio.tsx">
                <SortableContainer dndKitId="96a5d1df-c373-49f9-8656-d358b5e98f35" containerType="regular" prevTag="div" className="w-full h-80 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] p-1" data-magicpath-id="43" data-magicpath-path="KyleParksPortfolio.tsx">
                  <SortableContainer dndKitId="1463a4e0-e30b-48fb-9eb5-88bdf8bb1fbe" containerType="regular" prevTag="div" className="w-full h-full bg-white rounded-2xl flex items-center justify-center" data-magicpath-id="44" data-magicpath-path="KyleParksPortfolio.tsx">
                    <Code size={120} className="text-[#8A4FFF] opacity-20" data-magicpath-id="45" data-magicpath-path="KyleParksPortfolio.tsx" />
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="75f98c0c-fb56-46d5-8d5f-286f275aaa73" containerType="regular" prevTag="section" id="education" className="py-20 bg-[#EFFFFA]" data-magicpath-id="46" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="97475b19-0d94-4710-ae27-76018833f557" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="47" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="bb41534e-8b95-4392-b918-da9c0ed52bf7" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} data-magicpath-id="48" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="1aae184f-f5c9-4cc4-a048-c59fa14069b7" containerType="regular" prevTag="div" className="flex items-center gap-3 mb-12" data-magicpath-id="49" data-magicpath-path="KyleParksPortfolio.tsx">
              <GraduationCap size={32} className="text-[#8A4FFF]" data-magicpath-id="50" data-magicpath-path="KyleParksPortfolio.tsx" />
              <h2 className="text-4xl font-bold text-gray-900" data-magicpath-id="51" data-magicpath-path="KyleParksPortfolio.tsx">Education</h2>
            </SortableContainer>
            <SortableContainer dndKitId="7933d91e-9de8-47bd-b24c-f353eea9c073" containerType="collection" prevTag="div" className="space-y-8" data-magicpath-id="52" data-magicpath-path="KyleParksPortfolio.tsx">
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

      <SortableContainer dndKitId="b02d252b-3d50-4141-9cc9-3793bbae3e6d" containerType="regular" prevTag="section" id="skills" className="py-20 bg-white" data-magicpath-id="58" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="64bae383-8157-4ab6-af96-f70eb9dc86ee" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="59" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="1f5c07e9-3ad4-4f32-acb7-395c1b734240" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} data-magicpath-id="60" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="77217527-0ef2-4c15-9143-795548e8f242" containerType="regular" prevTag="div" className="flex items-center gap-3 mb-12" data-magicpath-id="61" data-magicpath-path="KyleParksPortfolio.tsx">
              <Code size={32} className="text-[#8A4FFF]" data-magicpath-id="62" data-magicpath-path="KyleParksPortfolio.tsx" />
              <h2 className="text-4xl font-bold text-gray-900" data-magicpath-id="63" data-magicpath-path="KyleParksPortfolio.tsx">Skills</h2>
            </SortableContainer>
            <SortableContainer dndKitId="3e1ec6c2-8281-4cfc-94a7-dc6e781beb90" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="64" data-magicpath-path="KyleParksPortfolio.tsx">
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

      <SortableContainer dndKitId="fb06e8c2-60f6-4ee5-af52-2b8d7e034dac" containerType="regular" prevTag="section" id="projects" className="py-20 bg-[#E5ECF4]" data-magicpath-id="70" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="e9f0b71b-00d9-4e54-bb3d-9c8492e3b016" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="71" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="cf60deb9-003d-4958-b8e9-34adb9cfd92e" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} data-magicpath-id="72" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="f04a3bce-b694-44a2-be2a-e2b3628d8590" containerType="regular" prevTag="div" className="flex items-center gap-3 mb-12" data-magicpath-id="73" data-magicpath-path="KyleParksPortfolio.tsx">
              <Briefcase size={32} className="text-[#8A4FFF]" data-magicpath-id="74" data-magicpath-path="KyleParksPortfolio.tsx" />
              <h2 className="text-4xl font-bold text-gray-900" data-magicpath-id="75" data-magicpath-path="KyleParksPortfolio.tsx">Projects</h2>
            </SortableContainer>
            <SortableContainer dndKitId="fa78f053-2a07-4828-95ad-dfe09b2547e0" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-magicpath-id="76" data-magicpath-path="KyleParksPortfolio.tsx">
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
            
            <SortableContainer dndKitId="b613ef16-c4d5-4d77-af73-7929c19e1bcf" containerType="regular" prevTag="motion.div" initial={{
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

      <SortableContainer dndKitId="5311a9d1-2382-4220-8958-e1509709d38c" containerType="regular" prevTag="section" id="contact" className="py-20 bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0]" data-magicpath-id="88" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="879ebceb-5205-482d-b26e-834975199d5e" containerType="regular" prevTag="div" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-magicpath-id="89" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="1b665e7b-d96a-4ecd-bb34-00063a773d6b" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="d5e1f842-f8dd-4ceb-bc51-e2520321daba" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-4" data-magicpath-id="93" data-magicpath-path="KyleParksPortfolio.tsx">
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

      <SortableContainer dndKitId="81ced9cf-b30b-476a-b22c-c4d56b711cb0" containerType="regular" prevTag="footer" className="bg-white border-t border-[#E5ECF4] py-8" data-magicpath-id="98" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="3319d0e7-a11b-4f05-a81f-92cf739b0e13" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-magicpath-id="99" data-magicpath-path="KyleParksPortfolio.tsx">
          <p className="text-gray-600" data-magicpath-id="100" data-magicpath-path="KyleParksPortfolio.tsx">
            © 2024 Kyle Parks. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};