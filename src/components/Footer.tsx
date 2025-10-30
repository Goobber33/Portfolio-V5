import { Github, Linkedin, FileText } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="mt-auto w-full pb-[calc(env(safe-area-inset-bottom)+0.5rem)] sm:pb-1">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center gap-4 p-2 text-center">
        <span className="text-sm text-gray-500 dark:text-gray-400">© 2025 Kyle Parks</span>

        <div className="flex justify-center gap-4 sm:gap-5">
          <a
            href="https://www.linkedin.com/in/kyle-parks-b0a74017b"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slateblue hover:bg-periwinkle group relative flex h-12 w-12 items-center justify-center rounded-full text-white shadow-md transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
            <span className="bg-slateblue absolute -top-8 rounded-md px-2 py-1 text-xs text-white opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100">
              LinkedIn
            </span>
          </a>

          <a
            href="https://github.com/Goobber33"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slateblue hover:bg-periwinkle group relative flex h-12 w-12 items-center justify-center rounded-full text-white shadow-md transition-all duration-300 hover:scale-110"
          >
            <Github className="h-6 w-6" />
            <span className="bg-slateblue absolute -top-8 rounded-md px-2 py-1 text-xs text-white opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100">
              GitHub
            </span>
          </a>

          <a
            href="/resume"
            rel="noopener noreferrer"
            className="bg-slateblue hover:bg-periwinkle group relative flex h-12 w-12 items-center justify-center rounded-full text-white shadow-md transition-all duration-300 hover:scale-110"
          >
            <FileText className="h-6 w-6" />
            <span className="bg-slateblue absolute -top-8 rounded-md px-2 py-1 text-xs text-white opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100">
              Resume
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
