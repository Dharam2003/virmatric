import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-50 mt-8">
      <div className="max-w-6xl mx-auto px-4 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
        <div>© {new Date().getFullYear()} VirMatric. All rights reserved.</div>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-virmatric-blue">LinkedIn</a>
          <a href="#" className="hover:text-virmatric-blue">Instagram</a>
          <a href="#" className="hover:text-virmatric-blue">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
