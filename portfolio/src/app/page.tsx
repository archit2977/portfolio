"use client";
import { useState } from "react";
import AnimatedBackground from "../components/AnimateBackground";
const Chevron = ({ open }: { open: boolean }) => (
  <svg
    className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

export default function Home() {
  const [open, setOpen] = useState([false, false, false]);
  const toggle = (idx: number) => {
    setOpen((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <>
      <AnimatedBackground />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="backdrop-blur-md bg-black/60 rounded-2xl shadow-2xl p-10 max-w-2xl w-full">
          <header className="mb-12 text-center">
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
              Hey, I'm <span className="text-blue-500">Archit Mallik</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-4">
              I Build <span className="text-blue-400">Robust Backends</span> & <span className="text-blue-400">APIs</span> that Power Modern Applications
            </h2>
          </header>

          <section className="mb-10">
            <h3 className="text-lg font-semibold text-blue-300 mb-4 flex items-center gap-2">
              {/* Briefcase Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7V6a3 3 0 016 0v1m-9 4h12M4 7h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2z" />
              </svg>
              Work Experience
            </h3>
            <div className="space-y-4">
              {/* Harness */}
              <div>
                <button
                  className="flex items-center justify-between w-full cursor-pointer px-2 py-3 rounded-lg hover:bg-blue-900/20 transition focus:outline-none"
                  onClick={() => toggle(0)}
                  aria-expanded={open[0]}
                >
                  <div className="text-left">
                    <h4 className="font-bold text-gray-100">Harness</h4>
                    <p className="text-gray-300">Software Engineer</p>
                    <p className="text-gray-400 text-sm">March 2024 - April 2025</p>
                  </div>
                  <span className="text-blue-400">
                    <Chevron open={open[0]} />
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${open[0] ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <ul className="list-disc list-inside text-gray-300 text-sm mt-1 pl-4 pr-2">
                    <li>Refactored pipeline YAML from V0 to V1, reducing size and improving efficiency.​</li>
                    <li>Developed modular frameworks for faster plugin creation and integration within the Harness Environment.</li>
                    <li>Built automation modules and reusable tests to ensure plugin stability and prevent regressions.</li>
                    <li>Owned end-to-end feature testing, including UI, API, and system validation through automated scripts and manual test cases.</li>
                  </ul>
                </div>
              </div>
              {/* ACE Cloud Business Management */}
              <div>
                <button
                  className="flex items-center justify-between w-full cursor-pointer px-2 py-3 rounded-lg hover:bg-blue-900/20 transition focus:outline-none"
                  onClick={() => toggle(1)}
                  aria-expanded={open[1]}
                >
                  <div className="text-left">
                    <h4 className="font-bold text-gray-100">ACE Cloud Business Management</h4>
                    <p className="text-gray-300">Software Engineer</p>
                    <p className="text-gray-400 text-sm">August 2023 - March 2024</p>
                  </div>
                  <span className="text-blue-400">
                    <Chevron open={open[1]} />
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${open[1] ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <ul className="list-disc list-inside text-gray-300 text-sm mt-1 pl-4 pr-2">
                    <li>Developed APIs and UI modules for invoicing and data transformation into PDFs with customization options.</li>
                    <li>Automated invoice rendering validation using Selenium, reducing manual verification effort by 60%.</li>
                  </ul>
                </div>
              </div>
              {/* Amazon */}
              <div>
                <button
                  className="flex items-center justify-between w-full cursor-pointer px-2 py-3 rounded-lg hover:bg-blue-900/20 transition focus:outline-none"
                  onClick={() => toggle(2)}
                  aria-expanded={open[2]}
                >
                  <div className="text-left">
                    <h4 className="font-bold text-gray-100">Amazon</h4>
                    <p className="text-gray-300">Software Engineer - Intern</p>
                    <p className="text-gray-400 text-sm">January 2023 - June 2023</p>
                  </div>
                  <span className="text-blue-400">
                    <Chevron open={open[2]} />
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${open[2] ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <ul className="list-disc list-inside text-gray-300 text-sm mt-1 pl-4 pr-2">
                    <li>
                      Developed a service that processed the user records to verify addresses
                      and provide suggestions for invalid addresses along with Google Maps
                      links for all the addresses. Improved the team efficiency by 90%.
                    </li>
                    <li>Developed a notification module that notifies the client whenever a configuration is created or updated.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-blue-300 mb-4">Contact Me</h3>
            <div className="flex items-center justify-between gap-4">
              <a
                href="mailto:mallikarchit@gmail.com"
                className="flex items-center text-blue-400 hover:underline gap-2"
              >
                {/* Email Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0V6a2 2 0 00-2-2H6a2 2 0 00-2 2v6" />
                </svg>
                mallikarchit@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/archit-mallik-7025981a7"
                className="flex items-center text-blue-400 hover:underline gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* LinkedIn Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
