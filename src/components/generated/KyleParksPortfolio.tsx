import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, GraduationCap, Code, Briefcase, User, ChevronDown } from 'lucide-react';
type KyleParksPortfolioProps = Record<string, never>;
const skills = [{
  category: 'Frontend',
  items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js'],
  mpid: "63d66da2-83f6-4556-90ab-e30c036f7c3d"
}, {
  category: 'Backend',
  items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL'],
  mpid: "61c51ece-db32-41a5-9b10-a2ebd301849a"
}, {
  category: 'Tools',
  items: ['Git', 'Docker', 'AWS', 'Vite', 'Webpack', 'Jest'],
  mpid: "837c3804-5005-45d5-b233-ca7461eca6c1"
}, {
  category: 'Concepts',
  items: ['Full Stack Development', 'Responsive Design', 'Agile', 'CI/CD', 'Testing', 'Design Patterns'],
  mpid: "1a087eef-87f9-40fb-b5a4-9de9f1cda5ef"
}] as any[];
const projects = [{
  title: 'E-Commerce Platform',
  description: 'Full-stack e-commerce solution with cart management, user authentication, and payment integration.',
  tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  link: '#',
  mpid: "1e8382b9-f686-421e-a16f-f9a40635e37c"
}, {
  title: 'Task Management App',
  description: 'Collaborative task management application with real-time updates and team features.',
  tech: ['TypeScript', 'Express', 'PostgreSQL', 'Socket.io'],
  link: '#',
  mpid: "92e8c06c-5851-4c06-bfff-3cbe5b97d37f"
}, {
  title: 'Weather Dashboard',
  description: 'Interactive weather application with data visualization and location-based forecasts.',
  tech: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
  link: '#',
  mpid: "4f5dbe63-d334-4480-b2df-1ecbab65d606"
}] as any[];
const education = [{
  institution: 'Arizona State University',
  degree: 'Bachelor of Science in Computer Science',
  period: 'Present',
  details: 'Barrett, The Honors College',
  color: '#8A4FFF',
  mpid: "c9792ac7-4340-4649-a668-246740a96f6b"
}, {
  institution: 'University of Washington',
  degree: 'Full Stack Web Development Bootcamp',
  period: '2023',
  details: 'Intensive program covering modern web technologies',
  color: '#C3BEF0',
  mpid: "ad793dc9-6cd9-4185-bf4c-2a178cdc5008"
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
  return <SortableContainer dndKitId="eed6b7fd-9c87-4f4d-8fcf-301eecb6a0fb" containerType="regular" prevTag="div" className="min-h-screen w-full bg-white" data-magicpath-id="0" data-magicpath-path="KyleParksPortfolio.tsx">
      <SortableContainer dndKitId="2641271e-26ba-4465-8762-b58b6e68c16d" containerType="regular" prevTag="motion.nav" className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#E5ECF4]" initial={{
      y: -100
    }} animate={{
      y: 0
    }} transition={{
      duration: 0.5
    }} data-magicpath-id="1" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="fbb80d85-dd57-4989-b6f9-014bf9cd2d27" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="2" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="54263f1e-1308-4d5a-8d65-d8366c838b6f" containerType="regular" prevTag="div" className="flex items-center justify-between h-16" data-magicpath-id="3" data-magicpath-path="KyleParksPortfolio.tsx">
            <motion.div data-magicpath-motion-tag="motion.div" className="text-2xl font-bold" whileHover={{
            scale: 1.05
          }} style={{
            color: '#8A4FFF'
          }} data-magicpath-id="4" data-magicpath-path="KyleParksPortfolio.tsx">
              KP
            </motion.div>

            <div className="hidden md:flex items-center space-x-8" data-magicpath-id="5" data-magicpath-path="KyleParksPortfolio.tsx">
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map(item => <SortableContainer dndKitId="a067d41a-5f7a-46f9-a3d5-2100d2cb74d0" containerType="regular" prevTag="button" key={item} onClick={() => scrollToSection(item.toLowerCase())} className="relative text-gray-700 hover:text-[#8A4FFF] transition-colors duration-200" data-magicpath-id="6" data-magicpath-path="KyleParksPortfolio.tsx">
                  {item}
                  {activeSection === item.toLowerCase() && <motion.div data-magicpath-motion-tag="motion.div" layoutId="activeSection" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8A4FFF]" data-magicpath-id="7" data-magicpath-path="KyleParksPortfolio.tsx" />}
                </SortableContainer>)}
            </div>

            <SortableContainer dndKitId="7cd2ecff-f3c3-4bf1-9738-627ecdaf83fd" containerType="regular" prevTag="button" className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} data-magicpath-id="8" data-magicpath-path="KyleParksPortfolio.tsx">
              {mobileMenuOpen ? <X size={24} data-magicpath-id="9" data-magicpath-path="KyleParksPortfolio.tsx" /> : <Menu size={24} data-magicpath-id="10" data-magicpath-path="KyleParksPortfolio.tsx" />}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {mobileMenuOpen && <SortableContainer dndKitId="c17d1e2d-de37-481d-a7ee-0bb569547dc6" containerType="regular" prevTag="motion.div" initial={{
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

      <SortableContainer dndKitId="6bde7035-02e4-440f-a872-b2b714562e99" containerType="regular" prevTag="section" id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" data-magicpath-id="14" data-magicpath-path="KyleParksPortfolio.tsx">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFFFFA] via-white to-[#E5ECF4]" data-magicpath-id="15" data-magicpath-path="KyleParksPortfolio.tsx" />
        
        <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 opacity-30" animate={{
        background: ['radial-gradient(circle at 20% 50%, #8A4FFF 0%, transparent 50%)', 'radial-gradient(circle at 80% 50%, #C3BEF0 0%, transparent 50%)', 'radial-gradient(circle at 20% 50%, #8A4FFF 0%, transparent 50%)']
      }} transition={{
        duration: 10,
        repeat: Infinity
      }} data-magicpath-id="16" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="3952ef91-3266-4166-9f25-3f5b5e67c3df" containerType="regular" prevTag="div" className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-magicpath-id="17" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="200a1f5a-c30a-4bb9-b09d-43eee3ddf6e4" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="bca13856-ac70-4361-ab5d-c0e8b774f90b" containerType="regular" prevTag="div" className="flex items-center justify-center gap-4 mb-12" data-magicpath-id="22" data-magicpath-path="KyleParksPortfolio.tsx">
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
            <SortableContainer dndKitId="df894ca1-0c35-45b6-b6e0-04897b75960b" containerType="regular" prevTag="motion.button" onClick={() => scrollToSection('about')} whileHover={{
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

      <SortableContainer dndKitId="2a3b931a-c2f3-4b4f-a49f-d85a69334a7a" containerType="regular" prevTag="section" id="about" className="py-20 bg-white" data-magicpath-id="31" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="78cb9b85-0b16-496b-9471-db186a746b71" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="32" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="9d230c95-af67-4d56-a322-70047bc67734" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} data-magicpath-id="33" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="5a83eb03-a85c-4908-bd49-0bd1153d35a0" containerType="regular" prevTag="div" className="flex items-center gap-3 mb-12" data-magicpath-id="34" data-magicpath-path="KyleParksPortfolio.tsx">
              <User size={32} className="text-[#8A4FFF]" data-magicpath-id="35" data-magicpath-path="KyleParksPortfolio.tsx" />
              <h2 className="text-4xl font-bold text-gray-900" data-magicpath-id="36" data-magicpath-path="KyleParksPortfolio.tsx">About Me</h2>
            </SortableContainer>
            <SortableContainer dndKitId="ec6dec5c-b2b8-4406-8501-434b54af1854" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-12 items-center" data-magicpath-id="37" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="0babfa1a-8775-45c3-8084-23426ad0bca8" containerType="regular" prevTag="div" data-magicpath-id="38" data-magicpath-path="KyleParksPortfolio.tsx">
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
              <SortableContainer dndKitId="45c20a27-610b-44dc-b2fd-8cd52d6c61c9" containerType="regular" prevTag="div" className="relative" data-magicpath-id="42" data-magicpath-path="KyleParksPortfolio.tsx">
                <SortableContainer dndKitId="dc3175d6-30b9-44b8-bf36-d4322fada7cf" containerType="regular" prevTag="div" className="w-full h-80 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] p-1" data-magicpath-id="43" data-magicpath-path="KyleParksPortfolio.tsx">
                  <SortableContainer dndKitId="4d45661a-76e5-4291-a6b1-22c2e34481d6" containerType="regular" prevTag="div" className="w-full h-full bg-white rounded-2xl flex items-center justify-center" data-magicpath-id="44" data-magicpath-path="KyleParksPortfolio.tsx">
                    <Code size={120} className="text-[#8A4FFF] opacity-20" data-magicpath-id="45" data-magicpath-path="KyleParksPortfolio.tsx" />
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="2f50a19c-64c7-4e7f-b8bf-70ede1fdaf0d" containerType="regular" prevTag="section" id="education" className="py-20 bg-[#EFFFFA]" data-magicpath-id="46" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="6f6297db-cbd7-44e1-853f-9c8fba7757ff" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="47" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="22f6c98e-1cf8-4905-89af-dd51cfd5cf31" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} data-magicpath-id="48" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="fcf54718-8d14-4674-be1f-2c68c86d2c60" containerType="regular" prevTag="div" className="flex items-center gap-3 mb-12" data-magicpath-id="49" data-magicpath-path="KyleParksPortfolio.tsx">
              <GraduationCap size={32} className="text-[#8A4FFF]" data-magicpath-id="50" data-magicpath-path="KyleParksPortfolio.tsx" />
              <h2 className="text-4xl font-bold text-gray-900" data-magicpath-id="51" data-magicpath-path="KyleParksPortfolio.tsx">Education</h2>
            </SortableContainer>
            <SortableContainer dndKitId="a2b2ca4f-5f04-403d-a48c-ef7326ac5ced" containerType="collection" prevTag="div" className="space-y-8" data-magicpath-id="52" data-magicpath-path="KyleParksPortfolio.tsx">
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2" data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="institution:string" data-magicpath-id="54" data-magicpath-path="KyleParksPortfolio.tsx">{edu.institution}</h3>
                  <p className="text-lg mb-2" style={{
                color: edu.color
              }} data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="degree:string" data-magicpath-id="55" data-magicpath-path="KyleParksPortfolio.tsx">{edu.degree}</p>
                  <p className="text-gray-600 mb-2" data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="period:string" data-magicpath-id="56" data-magicpath-path="KyleParksPortfolio.tsx">{edu.period}</p>
                  <p className="text-gray-700" data-magicpath-uuid={(edu as any)["mpid"] ?? "unsafe"} data-magicpath-field="details:string" data-magicpath-id="57" data-magicpath-path="KyleParksPortfolio.tsx">{edu.details}</p>
                </motion.div>)}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="71abccc1-a2cd-446d-8734-6cb21d8c8898" containerType="regular" prevTag="section" id="skills" className="py-20 bg-white" data-magicpath-id="58" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="32002d95-750f-4fd8-9547-b59171018fe8" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="59" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="31657228-527c-4387-89a8-d3f6e3ba1975" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} data-magicpath-id="60" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="20614c8f-70f4-43f1-a176-a75cba403972" containerType="regular" prevTag="div" className="flex items-center gap-3 mb-12" data-magicpath-id="61" data-magicpath-path="KyleParksPortfolio.tsx">
              <Code size={32} className="text-[#8A4FFF]" data-magicpath-id="62" data-magicpath-path="KyleParksPortfolio.tsx" />
              <h2 className="text-4xl font-bold text-gray-900" data-magicpath-id="63" data-magicpath-path="KyleParksPortfolio.tsx">Skills</h2>
            </SortableContainer>
            <SortableContainer dndKitId="a25e9bbc-44ea-4e38-a482-962927dba196" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="64" data-magicpath-path="KyleParksPortfolio.tsx">
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
              }} data-magicpath-uuid={(skillGroup as any)["mpid"] ?? "unsafe"} data-magicpath-field="category:string" data-magicpath-id="66" data-magicpath-path="KyleParksPortfolio.tsx">
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

      <SortableContainer dndKitId="45e24083-6d7b-40ce-9198-880c6252c2a6" containerType="regular" prevTag="section" id="projects" className="py-20 bg-[#E5ECF4]" data-magicpath-id="70" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="03874a7b-977b-468c-8d97-e8dc5e49cd74" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="71" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="c6a0a4a4-7384-4d19-9589-83c91e0b986b" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} data-magicpath-id="72" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="264713d9-e0be-4573-9f37-c931e2526fb5" containerType="regular" prevTag="div" className="flex items-center gap-3 mb-12" data-magicpath-id="73" data-magicpath-path="KyleParksPortfolio.tsx">
              <Briefcase size={32} className="text-[#8A4FFF]" data-magicpath-id="74" data-magicpath-path="KyleParksPortfolio.tsx" />
              <h2 className="text-4xl font-bold text-gray-900" data-magicpath-id="75" data-magicpath-path="KyleParksPortfolio.tsx">Projects</h2>
            </SortableContainer>
            <SortableContainer dndKitId="1ee8bacb-d3ce-44f4-bef2-589285e2628d" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-magicpath-id="76" data-magicpath-path="KyleParksPortfolio.tsx">
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="78" data-magicpath-path="KyleParksPortfolio.tsx">{project.title}</h3>
                  <p className="text-gray-600 mb-4" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:string" data-magicpath-id="79" data-magicpath-path="KyleParksPortfolio.tsx">{project.description}</p>
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
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="44e2d4b9-73ef-41ee-ba3d-309472b9e63e" containerType="regular" prevTag="section" id="contact" className="py-20 bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0]" data-magicpath-id="84" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="fa091abd-7b12-4449-8dba-ffcc07f05b12" containerType="regular" prevTag="div" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-magicpath-id="85" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="62fcc944-f379-4e37-ae02-6eaff65eabb3" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} data-magicpath-id="86" data-magicpath-path="KyleParksPortfolio.tsx">
            <h2 className="text-4xl font-bold text-white mb-6" data-magicpath-id="87" data-magicpath-path="KyleParksPortfolio.tsx">Let's Work Together</h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto" data-magicpath-id="88" data-magicpath-path="KyleParksPortfolio.tsx">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Feel free to reach out!
            </p>
            <SortableContainer dndKitId="b5e115f3-fb79-4c7f-a4ef-bc31c7481b9e" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-4" data-magicpath-id="89" data-magicpath-path="KyleParksPortfolio.tsx">
              <motion.a data-magicpath-motion-tag="motion.a" href="mailto:kyle@example.com" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="px-8 py-4 bg-white text-[#8A4FFF] rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center gap-2" data-magicpath-id="90" data-magicpath-path="KyleParksPortfolio.tsx">
                <Mail size={20} data-magicpath-id="91" data-magicpath-path="KyleParksPortfolio.tsx" />
                Send Email
              </motion.a>
              <motion.a data-magicpath-motion-tag="motion.a" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-200 flex items-center gap-2 border border-white/30" data-magicpath-id="92" data-magicpath-path="KyleParksPortfolio.tsx">
                <Linkedin size={20} data-magicpath-id="93" data-magicpath-path="KyleParksPortfolio.tsx" />
                Connect on LinkedIn
              </motion.a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="c4dee7ff-1da5-46e4-82ac-6943abe06313" containerType="regular" prevTag="footer" className="bg-white border-t border-[#E5ECF4] py-8" data-magicpath-id="94" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="988f7c9a-f01d-4e92-9d7f-bb9c5a6b534d" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-magicpath-id="95" data-magicpath-path="KyleParksPortfolio.tsx">
          <p className="text-gray-600" data-magicpath-id="96" data-magicpath-path="KyleParksPortfolio.tsx">
            © 2024 Kyle Parks. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};