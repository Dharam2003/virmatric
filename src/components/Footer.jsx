import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-16 bg-virmatric-dark-light border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold gradient-text">VirMatric</h2>
        <div className="mt-8 flex justify-center gap-8">
          <a href="#" className="text-gray-400 hover:text-virmatric-blue transition-colors"><FaLinkedin size={28} /></a>
          <a href="#" className="text-gray-400 hover:text-virmatric-blue transition-colors"><FaInstagram size={28} /></a>
          <a href="#" className="text-gray-400 hover:text-virmatric-blue transition-colors"><FaTwitter size={28} /></a>
        </div>
        <p className="mt-8 text-gray-500">
          © {new Date().getFullYear()} VirMatric. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}