'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  const [isActive, setIsActive] = useState(false);
  const handleTap = () => setIsActive((prev) => !prev);

  return (
    <section className="animate-fadeIn w-full max-w-3xl space-y-6 px-4 text-center sm:px-6 -mt-6 sm:-mt-10">
      {/* Intro line */}
      <p className="font-mono text-sm tracking-widest text-periwinkle sm:text-base">
        Hi, my name is
      </p>

      {/* Name */}
      <h1 className="text-slateblue font-heading text-5xl font-extrabold tracking-tight drop-shadow-sm sm:text-6xl md:text-7xl">
        Kyle Parks<span className="text-periwinkle">.</span>
      </h1>

      {/* Headline / Goal */}
      <h2 className="text-slateblue/90 font-heading text-2xl font-semibold sm:text-3xl md:text-4xl">
        I’m a <span className="text-periwinkle">Software Engineer</span> passionate about
        building meaningful and reliable software.
      </h2>

      {/* Description */}
      <p className="text-foreground/80 font-body mx-auto max-w-2xl text-base leading-relaxed sm:text-lg">
        I’m currently studying Computer Science at Arizona State University and am a proud member of
        Barrett, The Honors College. I graduated from the University of Washington’s Full Stack Web
        Development Bootcamp and worked in IT for four years before pursuing my degree. My goal is
        to engineer software that improves lives and pushes technology forward.
      </p>

      {/* Profile image with hover/tap frame */}
      <div className="mt-10 mb-6 flex justify-center">
        <div
          className={`group relative ${isActive ? 'hovered' : ''}`}
          onClick={handleTap}
        >
          {/* Hidden background frame */}
          <div
            className={`border-slateblue absolute inset-0 translate-x-2 translate-y-2 scale-95 rounded-md border-2 
            opacity-0 transition-all duration-300 ease-out 
            group-hover:translate-x-3 group-hover:translate-y-3 group-hover:scale-100 group-hover:opacity-100
            ${isActive ? 'translate-x-3 translate-y-3 scale-100 opacity-100' : ''}`}
          ></div>

          {/* Image container */}
          <div
            className={`border-slateblue relative h-56 w-56 cursor-pointer overflow-hidden rounded-md border-1 grayscale 
            filter transition-all duration-300 ease-out 
            group-hover:-translate-x-2 group-hover:-translate-y-2 hover:grayscale-0 
            sm:h-64 sm:w-64 md:h-72 md:w-72
            ${isActive ? '-translate-x-2 -translate-y-2 grayscale-0' : ''}`}
          >
            <Image
              src="/profile.JPEG"
              alt="Kyle Parks portrait"
              width={288}
              height={288}
              className="object-cover rounded-md"
              priority
            />
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <Link
          href="/projects"
          className="font-heading bg-slateblue text-purewhite hover:bg-periwinkle mx-auto inline-flex rounded-lg px-8 py-3 font-semibold shadow-md transition sm:mx-0"
        >
          View Projects
        </Link>
      </div>
    </section>
  );
}
