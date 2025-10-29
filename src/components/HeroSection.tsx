import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="animate-fadeIn mt-4 w-full max-w-3xl space-y-6 px-2 text-center sm:px-4">
      {/* Name */}
      <h1 className="text-slateblue font-heading text-5xl font-extrabold tracking-tight drop-shadow-sm sm:text-6xl md:text-7xl">
        Kyle Parks
      </h1>

      {/* Title */}
      <h2 className="text-foreground/90 font-heading text-xl font-medium sm:text-2xl">
        Software Engineer
      </h2>

      {/* Description */}
      <p className="text-foreground/80 font-body mx-auto max-w-2xl text-base leading-relaxed sm:text-lg">
        I’m a Computer Science student at Arizona State University and a member of Barrett, The
        Honors College. I graduated from the University of Washington’s Full Stack Web Development
        Bootcamp and worked in IT for four years before pursuing my degree. My goal is to become a
        software engineer and build reliable, meaningful software that makes a real impact.
      </p>

      {/* Profile image with hidden hover frame */}
      <div className="mt-12 mb-6 flex justify-center">
        <div className="group relative">
          {/* Hidden background frame */}
          <div className="border-slateblue absolute inset-0 translate-x-2 translate-y-2 scale-95 rounded-md border-2 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-3 group-hover:translate-y-3 group-hover:scale-100 group-hover:opacity-100"></div>

          {/* Image */}
          <div className="border-slateblue relative h-56 w-56 cursor-pointer overflow-hidden rounded-md border-1 grayscale filter transition-all duration-300 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2 hover:grayscale-0 sm:h-64 sm:w-64 md:h-72 md:w-72">
            <img
              src="/profile.jpeg"
              alt="Kyle Parks portrait"
              className="absolute inset-0 w-full object-cover"
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
