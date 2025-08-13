import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full py-4 bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <a href="#" className="text-virmatric-dark font-extrabold text-xl md:text-2xl">
          Vir<span className="text-virmatric-blue">Matric</span>
        </a>

        <nav className="hidden md:flex gap-6 items-center">
          <a href="#about" className="hover:text-virmatric-blue">About</a>
          <a href="#services" className="hover:text-virmatric-blue">Services</a>
          <a href="#portfolio" className="hover:text-virmatric-blue">Portfolio</a>
          <a href="#contact" className="hover:text-virmatric-blue">Contact</a>
          <a
            href="https://wa.me/REPLACE_NUMBER?text=Hi%20VirMatric%2C%20I%27d%20like%20a%20free%20consultation"
            className="ml-4 bg-virmatric-blue text-white px-4 py-2 rounded"
          >
            Book a Free Consultation
          </a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {!open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col gap-3 p-4 max-w-6xl mx-auto">
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#services" onClick={() => setOpen(false)}>Services</a>
            <a href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <a
              href="https://wa.me/REPLACE_NUMBER?text=Hi%20VirMatric%2C%20I%27d%20like%20a%20free%20consultation"
              className="mt-2 bg-virmatric-blue text-white px-4 py-2 rounded inline-block text-center"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
