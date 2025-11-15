import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, GraduationCap, Code, Briefcase, User, ChevronDown } from 'lucide-react';
type KyleParksPortfolioProps = Record<string, never>;
const skills = [{
  category: 'Frontend',
  items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js'],
  mpid: "21c57a08-640f-432a-b6ae-fdf2168fcf13"
}, {
  category: 'Backend',
  items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL'],
  mpid: "f352ea28-18dd-46bb-a540-9d368a1c77da"
}, {
  category: 'Tools',
  items: ['Git', 'Docker', 'AWS', 'Vite', 'Webpack', 'Jest'],
  mpid: "c6dbdf2a-1601-48ee-ae12-0986c2fac762"
}, {
  category: 'Concepts',
  items: ['Full Stack Development', 'Responsive Design', 'Agile', 'CI/CD', 'Testing', 'Design Patterns'],
  mpid: "0f52794d-f712-4c71-ae0a-57112f41abcc"
}] as any[];
const projects = [{
  title: 'E-Commerce Platform',
  description: 'Full-stack e-commerce solution with cart management, user authentication, and payment integration.',
  tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  link: '#',
  mpid: "a19b2860-2646-4109-a15a-c4c6454a6008"
}, {
  title: 'Task Management App',
  description: 'Collaborative task management application with real-time updates and team features.',
  tech: ['TypeScript', 'Express', 'PostgreSQL', 'Socket.io'],
  link: '#',
  mpid: "be68b5de-bfe6-434e-a39f-7b0d0363c5ad"
}, {
  title: 'Weather Dashboard',
  description: 'Interactive weather application with data visualization and location-based forecasts.',
  tech: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
  link: '#',
  mpid: "b3a774c0-4217-4a73-b00c-44974cf079e7"
}] as any[];
const education = [{
  institution: 'Arizona State University',
  degree: 'Bachelor of Science in Computer Science',
  period: 'Present',
  details: 'Barrett, The Honors College',
  color: '#8A4FFF',
  mpid: "207ba319-5857-4d70-bc77-e7fe4f578fda"
}, {
  institution: 'University of Washington',
  degree: 'Full Stack Web Development Bootcamp',
  period: '2023',
  details: 'Intensive program covering modern web technologies',
  color: '#C3BEF0',
  mpid: "dd3b3825-0d99-414d-94db-0b764049167d"
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
  return <SortableContainer dndKitId="2b86092f-22c4-4321-969f-8203926aa194" containerType="regular" prevTag="div" className="min-h-screen w-full bg-white" data-magicpath-id="0" data-magicpath-path="KyleParksPortfolio.tsx">
      <SortableContainer dndKitId="6d3ee19e-05c9-4d35-9611-3b2fd335d6f3" containerType="regular" prevTag="motion.nav" className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#E5ECF4]" initial={{
      y: -100
    }} animate={{
      y: 0
    }} transition={{
      duration: 0.5
    }} data-magicpath-id="1" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="e07d741e-c5b3-46ef-9b64-5039fe379195" containerType="regular" prevTag="div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="2" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="533f6f31-0567-4e14-92a7-5418ed3bdc07" containerType="regular" prevTag="div" className="flex items-center justify-between h-16" data-magicpath-id="3" data-magicpath-path="KyleParksPortfolio.tsx">
            <motion.div data-magicpath-motion-tag="motion.div" className="text-2xl font-bold" whileHover={{
            scale: 1.05
          }} style={{
            color: '#8A4FFF'
          }} data-magicpath-id="4" data-magicpath-path="KyleParksPortfolio.tsx">
              KP
            </motion.div>

            <div className="hidden md:flex items-center space-x-8" data-magicpath-id="5" data-magicpath-path="KyleParksPortfolio.tsx">
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map(item => <SortableContainer dndKitId="54e3f9d7-2ea6-417e-8392-f0cdf97c7898" containerType="regular" prevTag="button" key={item} onClick={() => scrollToSection(item.toLowerCase())} className="relative text-gray-700 hover:text-[#8A4FFF] transition-colors duration-200 cursor-pointer" data-magicpath-id="6" data-magicpath-path="KyleParksPortfolio.tsx">
                  {item}
                  {activeSection === item.toLowerCase() && <motion.div data-magicpath-motion-tag="motion.div" layoutId="activeSection" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8A4FFF]" data-magicpath-id="7" data-magicpath-path="KyleParksPortfolio.tsx" />}
                </SortableContainer>)}
            </div>

            <SortableContainer dndKitId="847b43eb-2c48-498e-bbe6-6add9daf5d85" containerType="regular" prevTag="button" className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} data-magicpath-id="8" data-magicpath-path="KyleParksPortfolio.tsx">
              {mobileMenuOpen ? <X size={24} data-magicpath-id="9" data-magicpath-path="KyleParksPortfolio.tsx" /> : <Menu size={24} data-magicpath-id="10" data-magicpath-path="KyleParksPortfolio.tsx" />}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {mobileMenuOpen && <SortableContainer dndKitId="73ced2fd-3a4e-4403-9c81-e4b6c8d42a34" containerType="regular" prevTag="motion.div" initial={{
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

      <SortableContainer dndKitId="8361b13a-f4a7-4235-b7cd-6ea79d93b3c2" containerType="regular" prevTag="section" id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" data-magicpath-id="14" data-magicpath-path="KyleParksPortfolio.tsx">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFFFFA] via-white to-[#E5ECF4]" data-magicpath-id="15" data-magicpath-path="KyleParksPortfolio.tsx" />
        
        <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 opacity-30" animate={{
        background: ['radial-gradient(circle at 20% 50%, #8A4FFF 0%, transparent 50%)', 'radial-gradient(circle at 80% 50%, #C3BEF0 0%, transparent 50%)', 'radial-gradient(circle at 20% 50%, #8A4FFF 0%, transparent 50%)']
      }} transition={{
        duration: 10,
        repeat: Infinity
      }} data-magicpath-id="16" data-magicpath-path="KyleParksPortfolio.tsx" />

        <SortableContainer dndKitId="14503cb8-ee44-4c5d-b013-9a1337d96157" containerType="regular" prevTag="div" className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-magicpath-id="17" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="325c9f60-516e-4b0a-a20e-fa8874d2b92b" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="4ae76276-cb0d-4790-a19f-8e088de6a1df" containerType="regular" prevTag="div" className="flex items-center justify-center gap-4 mb-12" data-magicpath-id="22" data-magicpath-path="KyleParksPortfolio.tsx">
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
            <SortableContainer dndKitId="96bcce83-e944-43fd-a977-e4783656a168" containerType="regular" prevTag="motion.button" onClick={() => scrollToSection('about')} whileHover={{
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

      <SortableContainer dndKitId="6d84845a-a506-4f70-87c9-167ee7e22058" containerType="regular" prevTag="section" id="about" className="py-20 bg-white" data-magicpath-id="31" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="79c15fc2-2e76-4d69-984e-a816f9bd3065" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="32" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="2389e8b7-f46f-4e67-901b-d0cf8d255f37" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} data-magicpath-id="33" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="5caea8da-4b4c-4bd4-a5fa-eef53fb320b1" containerType="regular" prevTag="div" className="flex items-center gap-3 mb-12" data-magicpath-id="34" data-magicpath-path="KyleParksPortfolio.tsx">
              <User size={32} className="text-[#8A4FFF]" data-magicpath-id="35" data-magicpath-path="KyleParksPortfolio.tsx" />
              <h2 className="text-4xl font-bold text-gray-900" data-magicpath-id="36" data-magicpath-path="KyleParksPortfolio.tsx">About Me</h2>
            </SortableContainer>
            <SortableContainer dndKitId="0927108b-3634-4be3-856a-e77e92ccb918" containerType="regular" prevTag="div" className="grid md:grid-cols-2 gap-12 items-center" data-magicpath-id="37" data-magicpath-path="KyleParksPortfolio.tsx">
              <SortableContainer dndKitId="5c578b58-fdd0-489b-a963-0efdcb645d9a" containerType="regular" prevTag="div" data-magicpath-id="38" data-magicpath-path="KyleParksPortfolio.tsx">
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
              <SortableContainer dndKitId="7010e44c-6ed0-470b-b76d-806b34bd3208" containerType="regular" prevTag="div" className="relative" data-magicpath-id="42" data-magicpath-path="KyleParksPortfolio.tsx">
                <SortableContainer dndKitId="ca135a04-9a63-40a5-81d3-76c690870a32" containerType="regular" prevTag="div" className="w-full h-80 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0] p-1" data-magicpath-id="43" data-magicpath-path="KyleParksPortfolio.tsx">
                  <SortableContainer dndKitId="4beddac9-1b7a-4c4a-a4e4-d88ffa47ff1f" containerType="regular" prevTag="div" className="w-full h-full bg-white rounded-2xl flex items-center justify-center" data-magicpath-id="44" data-magicpath-path="KyleParksPortfolio.tsx">
                    <Code size={120} className="text-[#8A4FFF] opacity-20" data-magicpath-id="45" data-magicpath-path="KyleParksPortfolio.tsx" />
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="77e9406d-6ae8-4905-8da8-37d73b91e2a5" containerType="regular" prevTag="section" id="education" className="py-20 bg-[#EFFFFA]" data-magicpath-id="46" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="dfe7f645-a772-4628-873e-d5b54316b29c" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="47" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="56c359a8-3acb-4605-b041-99399a9846ab" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} data-magicpath-id="48" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="27ea950a-4a18-41bf-8da6-a13bba95a588" containerType="regular" prevTag="div" className="flex items-center gap-3 mb-12" data-magicpath-id="49" data-magicpath-path="KyleParksPortfolio.tsx">
              <GraduationCap size={32} className="text-[#8A4FFF]" data-magicpath-id="50" data-magicpath-path="KyleParksPortfolio.tsx" />
              <h2 className="text-4xl font-bold text-gray-900" data-magicpath-id="51" data-magicpath-path="KyleParksPortfolio.tsx">Education</h2>
            </SortableContainer>
            <SortableContainer dndKitId="cfc1c0f7-9519-441a-8847-dd55e062da86" containerType="collection" prevTag="div" className="space-y-8" data-magicpath-id="52" data-magicpath-path="KyleParksPortfolio.tsx">
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

      <SortableContainer dndKitId="82f76e56-cbfd-43aa-85c5-d5b28323b2f3" containerType="regular" prevTag="section" id="skills" className="py-20 bg-white" data-magicpath-id="58" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="9edb7e0e-e266-4a37-84ec-4ecc20bcaae7" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="59" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="6024482c-796a-4cfd-984c-3e472f6f47ed" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} data-magicpath-id="60" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="c074cb49-530d-475e-a6fb-2269c531192d" containerType="regular" prevTag="div" className="flex items-center gap-3 mb-12" data-magicpath-id="61" data-magicpath-path="KyleParksPortfolio.tsx">
              <Code size={32} className="text-[#8A4FFF]" data-magicpath-id="62" data-magicpath-path="KyleParksPortfolio.tsx" />
              <h2 className="text-4xl font-bold text-gray-900" data-magicpath-id="63" data-magicpath-path="KyleParksPortfolio.tsx">Skills</h2>
            </SortableContainer>
            <SortableContainer dndKitId="5bc56008-91f1-4ba0-94b3-9ce3f69b1a01" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="64" data-magicpath-path="KyleParksPortfolio.tsx">
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

      <SortableContainer dndKitId="a9df0864-ed4f-497b-929a-ead7f1d11461" containerType="regular" prevTag="section" id="projects" className="py-20 bg-[#E5ECF4]" data-magicpath-id="70" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="09375ee8-fb15-487e-8df5-0ceda9410c39" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="71" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="0c23f389-c6d3-4fcc-840a-c1326bbe44f5" containerType="regular" prevTag="motion.div" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} data-magicpath-id="72" data-magicpath-path="KyleParksPortfolio.tsx">
            <SortableContainer dndKitId="38e8d36b-2b51-4935-b2d4-583951901f5e" containerType="regular" prevTag="div" className="flex items-center gap-3 mb-12" data-magicpath-id="73" data-magicpath-path="KyleParksPortfolio.tsx">
              <Briefcase size={32} className="text-[#8A4FFF]" data-magicpath-id="74" data-magicpath-path="KyleParksPortfolio.tsx" />
              <h2 className="text-4xl font-bold text-gray-900" data-magicpath-id="75" data-magicpath-path="KyleParksPortfolio.tsx">Projects</h2>
            </SortableContainer>
            <SortableContainer dndKitId="7bda7275-aeac-4e0a-ae11-2c81f9a1c576" containerType="collection" prevTag="div" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-magicpath-id="76" data-magicpath-path="KyleParksPortfolio.tsx">
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
            
            <SortableContainer dndKitId="2435a6b1-87b1-4206-afbb-3054e35ec83d" containerType="regular" prevTag="motion.div" initial={{
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

      <SortableContainer dndKitId="a1d45176-7d79-41e3-a27e-3032df152c6c" containerType="regular" prevTag="section" id="contact" className="py-20 bg-gradient-to-br from-[#8A4FFF] to-[#C3BEF0]" data-magicpath-id="88" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="d4d6246c-2878-43cb-b9b1-52102d785dcb" containerType="regular" prevTag="div" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-magicpath-id="89" data-magicpath-path="KyleParksPortfolio.tsx">
          <SortableContainer dndKitId="119d658b-89f3-41ad-93b1-726fea28f8fe" containerType="regular" prevTag="motion.div" initial={{
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
            <SortableContainer dndKitId="d2aaf3f6-6fdf-4873-a8cd-2412dcbd1935" containerType="regular" prevTag="div" className="flex flex-col sm:flex-row items-center justify-center gap-4" data-magicpath-id="93" data-magicpath-path="KyleParksPortfolio.tsx">
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

      <SortableContainer dndKitId="f573fb14-8a87-4e63-8329-cff92ccafd54" containerType="regular" prevTag="footer" className="bg-white border-t border-[#E5ECF4] py-8" data-magicpath-id="98" data-magicpath-path="KyleParksPortfolio.tsx">
        <SortableContainer dndKitId="006e66f1-5125-485e-a55b-9d40ffc0e71c" containerType="regular" prevTag="div" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-magicpath-id="99" data-magicpath-path="KyleParksPortfolio.tsx">
          <p className="text-gray-600" data-magicpath-id="100" data-magicpath-path="KyleParksPortfolio.tsx">
            © 2024 Kyle Parks. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};