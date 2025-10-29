'use client';
import NavBar from '@/components/NavBar';
import FooterSection from '@/components/Footer';
import Link from 'next/link';

export default function ResumePage() {
  const experiences = [
    {
      date: 'May 2024 – Present',
      title: 'Barista — Starbucks Coffee Company | Coeur d’Alene, ID',
      description:
        'Prepare handcrafted beverages and maintain consistency with Starbucks recipes and quality standards. Deliver friendly, efficient customer service while handling high-volume periods with teamwork. Support shift operations, cash handling, and store organization while collaborating with leadership to maintain safety and workflow.',
    },
    {
      date: 'Nov 2023 – June 2024',
      title: 'Managed Service Provider Field Technician — Intermax Networks | Coeur d’Alene, ID',
      description:
        'Provided efficient technical support to clients, resolving hardware, software, and network issues both remotely and on-site. Collaborated with team members and vendors to maintain uptime and contributed to documentation and process improvements.',
    },
    {
      date: 'April 2021 – Oct 2023',
      title: 'IT Help Desk — Northern Quest Casino | Airway Heights, WA',
      description:
        'Delivered timely and courteous support to internal staff, resolving system and network-related issues. Documented support requests in a centralized system to ensure transparency and improve department efficiency.',
    },
    {
      date: 'March 2017 – Nov 2020',
      title: 'Assistant Install Manager — Yesco | Salt Lake City, UT',
      description:
        'Supervised installation teams to ensure safety, quality, and timely project completion. Coordinated scheduling, logistics, and materials procurement while assisting in onboarding and training new installers.',
    },
    {
      date: 'July 2016 – March 2017',
      title: 'Shift Lead — AutoZone | Spokane Valley, WA',
      description:
        'Oversaw daily store operations including cash management, inventory, and customer service. Trained and guided team members to improve performance and ensure compliance with safety and operational procedures.',
    },
  ];

  const education = [
    {
      date: 'Expected Graduation: 2028',
      title: 'Bachelor of Science, Computer Science — Arizona State University (Barrett, The Honors College)',
      description:
        'Current GPA: 3.83 | Enrolled through the Starbucks College Achievement Plan. Coursework includes programming, data structures, and systems fundamentals.',
    },
    {
      date: 'Completed July 2023',
      title: 'Certificate in Full-Stack Web Development — University of Washington Coding Bootcamp',
      description:
        'Focused on JavaScript, React, Node.js, Express, and database integration through hands-on, project-based learning.',
    },
    {
      date: '2018 – 2019',
      title: 'Associate Coursework in Computer Science — North Idaho College',
      description: 'Completed foundational coursework in computer science and mathematics.',
    },
    {
      date: 'Graduated 2012',
      title: 'High School Diploma — Fallbrook High School | Fallbrook, CA',
      description: '',
    },
  ];

  return (
    <main className="animate-fadeIn bg-mintcream text-foreground font-body flex min-h-screen flex-col items-center justify-start px-4 pt-24 text-center sm:px-6">
      <NavBar />

      {/* Header */}
      <h1 className="text-slateblue font-heading text-4xl font-bold drop-shadow-sm sm:text-5xl">
        My Resume
      </h1>
      <p className="text-foreground/80 mt-4 max-w-2xl text-base leading-relaxed sm:text-lg">
        A look at my professional experience and education.
      </p>

      {/* Experience Timeline */}
      <h2 className="text-slateblue font-heading text-2xl font-semibold mt-12 mb-6">Experience</h2>
      <ol className="relative w-full max-w-3xl border-s border-slateblue/30">
        {experiences.map((item, index) => (
          <li key={index} className="mb-10 ms-4 text-left">
            <div className="absolute w-3 h-3 bg-slateblue rounded-full mt-1.5 -start-1.5 border border-white shadow-sm"></div>
            <time className="mb-1 text-sm font-medium text-slateblue">{item.date}</time>
            <h3 className="text-lg font-semibold text-slateblue">{item.title}</h3>
            <p className="mb-4 text-base font-normal text-foreground/80">{item.description}</p>
          </li>
        ))}
      </ol>

      {/* Education Timeline */}
      <h2 className="text-slateblue font-heading text-2xl font-semibold mt-12 mb-6">Education</h2>
      <ol className="relative w-full max-w-3xl border-s border-slateblue/30">
        {education.map((item, index) => (
          <li key={index} className="mb-10 ms-4 text-left">
            <div className="absolute w-3 h-3 bg-slateblue rounded-full mt-1.5 -start-1.5 border border-white shadow-sm"></div>
            <time className="mb-1 text-sm font-medium text-slateblue">{item.date}</time>
            <h3 className="text-lg font-semibold text-slateblue">{item.title}</h3>
            <p className="mb-4 text-base font-normal text-foreground/80">{item.description}</p>
          </li>
        ))}
      </ol>

      {/* Download Button */}
      <div className="mt-8 mb-16">
        <Link
          href="/Kyle_Parks_Starbucks_Shift_Lead_Resume_Final.pdf"
          target="_blank"
          className="bg-slateblue text-purewhite hover:bg-periwinkle inline-flex rounded-lg px-8 py-3 font-semibold shadow-md transition"
        >
          Download Full Resume (PDF)
        </Link>
        <div className="animate-fadeIn flex flex-col justify-center gap-4 sm:flex-row mt-12">
        <Link
          href="/"
          className="font-heading text-md bg-slateblue text-purewhite hover:bg-periwinkle mx-auto inline-flex rounded-lg px-8 py-3 font-semibold shadow-md transition sm:mx-0"
        >
          Back to Home
        </Link>
      </div>
      </div>

      <FooterSection />
    </main>
  );
}
