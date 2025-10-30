import { Github, Linkedin, FileText } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="mt-auto w-full pb-8 sm:pb-4"> {/* 👈 Added more bottom padding for mobile */}
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center gap-4 p-4 text-center">
        <span className="text-sm text-gray-500 dark:text-gray-400">© 2025 Kyle Parks</span>

        <div className="flex justify-center gap-4 sm:gap-5">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kyle-parks-b0a74017b"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slateblue hover:bg-periwinkle group relative flex h-12 w-12 items-center justify-center rounded-full text-white shadow-md transition-all duration-300 hover:scale-110 sm:h-12 sm:w-12"
          >
            <Linkedin className="h-6 w-6" />
            <span className="bg-slateblue absolute -top-8 rounded-md px-2 py-1 text-xs text-white opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100 sm:-top-10">
              LinkedIn
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Goobber33"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slateblue hover:bg-periwinkle group relative flex h-12 w-12 items-center justify-center rounded-full text-white shadow-md transition-all duration-300 hover:scale-110 sm:h-12 sm:w-12"
          >
            <Github className="h-6 w-6" />
            <span className="bg-slateblue absolute -top-8 rounded-md px-2 py-1 text-xs text-white opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100 sm:-top-10">
              GitHub
            </span>
          </a>

          {/* Resume */}
          <a
            href="/resume"
            rel="noopener noreferrer"
            className="bg-slateblue hover:bg-periwinkle group relative flex h-12 w-12 items-center justify-center rounded-full text-white shadow-md transition-all duration-300 hover:scale-110 sm:h-12 sm:w-12"
          >
            <FileText className="h-6 w-6" />
            <span className="bg-slateblue absolute -top-8 rounded-md px-2 py-1 text-xs text-white opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100 sm:-top-10">
              Resume
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
