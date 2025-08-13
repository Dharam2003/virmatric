import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-virmatric-dark/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-3xl font-bold gradient-text">
          VirMatric
        </a>

        <nav className="hidden md:flex items-center gap-8 text-lg">
          <a href="#about" className="hover:text-virmatric-blue transition-colors">About</a>
          <a href="#what-we-do" className="hover:text-virmatric-blue transition-colors">What We Do</a>
          <a href="#portfolio" className="hover:text-virmatric-blue transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-virmatric-blue transition-colors">Contact</a>
        </nav>

        <a href="#contact" className="hidden md:block bg-virmatric-blue text-white px-6 py-2 rounded-full font-semibold hover:bg-virmatric-blue-dark transition-all transform hover:scale-105">
          Get Started
        </a>

        <button className="md:hidden z-50" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 bg-virmatric-dark z-40 flex flex-col items-center justify-center gap-10 text-2xl">
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#what-we-do" onClick={() => setOpen(false)}>What We Do</a>
          <a href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}