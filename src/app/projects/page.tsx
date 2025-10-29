'use client';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import FooterSection from '@/components/Footer';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Air Quality Data Dashboard',
      description:
        'An interactive data visualization tool built with React, Python, and Pandas. It analyzes and displays real-time air quality metrics for cities worldwide.',
      link: '#',
    },
    {
      title: 'Portfolio Website',
      description:
        'This personal site — designed with Next.js, TypeScript, and Tailwind CSS — showcases my skills, projects, and experience as a software engineer.',
      link: '#',
    },
    {
      title: 'Black Hole Image Simulator',
      description:
        'A fun astronomy-inspired project that simulates what a black hole would look like in visible light, built with Python and Matplotlib.',
      link: '#',
    },
    {
      title: 'GitHub Repositories',
      description:
        'Explore all my public repositories, where I share projects, experiments, and ongoing development work covering web, Python, and data-driven software.',
      link: 'https://github.com/Goobber33?tab=repositories',
    },
  ];

  return (
    <main className="bg-mintcream text-foreground font-sans flex min-h-screen flex-col items-center justify-start px-4 pt-24 text-center sm:px-6">
      <NavBar />
      {/* Page Title */}
      <h1 className="animate-fadeIn text-slateblue font-heading text-4xl font-bold drop-shadow-sm sm:text-5xl">
        My Projects
      </h1>
      <p className="animate-fadeIn text-foreground/80 mt-4 max-w-2xl text-base leading-relaxed sm:text-lg">
        Here are some of the projects I’ve built that highlight my experience in software
        engineering, web development, and data analysis.
      </p>

      {/* Project Cards */}
      <div className="animate-fadeIn mt-12 grid w-full max-w-4xl gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.link}
            target={project.link.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="block rounded-lg border border-slateblue bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-periwinkle/10 hover:shadow-md"
          >
            <h2 className="mb-2 font-heading text-xl font-bold tracking-tight text-slateblue sm:text-2xl">
              {project.title}
            </h2>
            <p className="font-body text-sm text-foreground/80 leading-relaxed sm:text-base">
              {project.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Back Button */}
      <div className="animate-fadeIn flex flex-col justify-center gap-4 sm:flex-row mt-12">
        <Link
          href="/"
          className="font-heading text-md bg-slateblue text-purewhite hover:bg-periwinkle mx-auto inline-flex rounded-lg px-8 py-3 font-semibold shadow-md transition sm:mx-0"
        >
          Back to Home
        </Link>
      </div>
      <FooterSection />
    </main>
  );
}
