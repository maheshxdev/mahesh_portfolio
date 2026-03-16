import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#0a1120] border-t dark:border-slate-800 pt-16 pb-32 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand & Bio */}
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-black dark:text-white tracking-tighter">
              Mahesh<span className="text-blue-600">.dev</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
              Adaptable & Results-Driven IT Professional building digital
              experiences with precision and passion.
            </p>
            <div className="flex gap-4 mt-2">
              {/* GitHub */}
              <a
                href="https://github.com/maheshxdev"
                target="_blank"
                className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mahesh-darji-941a202b5"
                target="_blank"
                className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">
              Quick Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#projects"
                  className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  View Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  My Expertise
                </a>
              </li>
              <li>
                <a
                  href="#certs"
                  className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  Milestones
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          {/* Contact Info - Upgraded Version */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">
              Availability
            </h3>

            <div className="flex flex-col gap-5">
              {/* Live Status Indicator */}
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  Available for new projects
                </span>
              </div>

              {/* Big Direct Call-to-Action */}
              <a
                href="mailto:darjimaheshh05@gmail.com"
                className="group flex items-center justify-between w-full p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Drop a line
                  </span>
                  <span className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    darjimaheshh05@gmail.com
                  </span>
                </div>
                <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
