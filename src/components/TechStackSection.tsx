'use client';
import Marquee from 'react-fast-marquee';
import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSalesforce,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiVuedotjs,
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';

export default function TechStackSection() {
  const techs = [
    { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <SiCss3 className="text-blue-500" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'Java', icon: <FaJava className="text-red-500" /> },
    { name: 'Python', icon: <SiPython className="text-yellow-500" /> },
    { name: 'AWS', icon: <FaAws className="text-orange-400" /> },
    { name: 'Salesforce', icon: <SiSalesforce className="text-blue-400" /> },
    { name: 'SQL', icon: <SiMysql className="text-sky-600" /> },
    { name: 'NoSQL', icon: <SiPostgresql className="text-indigo-600" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'React', icon: <SiReact className="text-blue-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
    { name: 'Vue.js', icon: <SiVuedotjs className="text-green-400" /> },
  ];

  return (
    <section className="animate-fadeIn bg-aliceblue mt-20 w-full max-w-3xl rounded-md px-2 py-8 text-center shadow-sm select-none sm:px-4">
      {/* Section Title */}
      <h3 className="text-slateblue font-heading mb-8 text-2xl font-bold sm:text-3xl">
        My Tech Stack
      </h3>

      {/* Marquee Section */}
      <div className="cursor-default overflow-hidden">
        <Marquee gradient={false} speed={35} pauseOnHover={false}>
          <div className="flex gap-8 px-4">
            {techs.map((tech) => (
              <div
                key={tech.name}
                className="flex scale-95 flex-col items-center justify-center rounded-md px-4 py-2 transition-none sm:scale-100"
              >
                <div className="mb-1 text-4xl">{tech.icon}</div>
                <p className="text-xs font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
