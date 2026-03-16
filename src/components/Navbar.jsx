import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [dark, setDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Expertise', href: '#skills' },
    { name: 'Milestones', href: '#certs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full top-0 z-[100] bg-white/70 dark:bg-[#0a1120]/70 backdrop-blur-xl border-b dark:border-slate-800 transition-all">
      <div className="w-full px-6 md:px-12 lg:px-20 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-black dark:text-white text-slate-900 tracking-tighter shrink-0 cursor-pointer">
          Mahesh<span className="text-blue-600">.dev</span>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-yellow-500 transition-colors uppercase tracking-[0.2em]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setDark(!dark)}
            className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-xl hover:scale-110 transition-all shadow-inner border border-transparent dark:border-slate-700"
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Mobile Toggle & Hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setDark(!dark)}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xl"
          >
            {dark ? '☀️' : '🌙'}
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[110] p-2 text-slate-900 dark:text-white"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
              <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Overlay - Pure Dark Glassy Look */}
      <div className={`fixed inset-0 h-screen w-screen z-[105] md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        
        {/* The Glass Backdrop */}
        <div className="absolute inset-0 bg-slate-900/90 dark:bg-[#0a1120]/95 backdrop-blur-2xl"></div>

        <div className="relative flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-3xl font-black text-white uppercase tracking-[0.3em] transition-all duration-500 transform ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 75}ms` }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;