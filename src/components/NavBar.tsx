'use client';
import { useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-mintcream font-heading fixed top-0 left-0 z-50 w-full">
      {/* Hamburger Button */}
      <div className="flex items-center justify-end p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="text-slateblue hover:bg-periwinkle/20 focus:ring-periwinkle inline-flex h-10 w-10 items-center justify-center rounded-md p-2 transition focus:ring-2 focus:outline-none"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      {/* Centered horizontal menu when opened */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="font-heading flex flex-col items-center justify-center space-y-3 py-4 text-base font-bold">
          <li>
            <a
              href="/"
              className="text-slateblue hover:text-periwinkle transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="text-slateblue hover:text-periwinkle transition"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-slateblue hover:text-periwinkle transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
