import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-virmatric-dark to-black opacity-80 z-10" />
      <video autoPlay loop muted className="absolute z-0 w-auto min-w-full min-h-full max-w-none">
        <source src="https://vdigtech.com/wp-content/uploads/2023/11/21575899-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-20 text-center px-6 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
          We Build <span className="gradient-text">Digital Experiences</span> That Drive Results
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
          We are a full-service digital agency that helps businesses succeed online. From web design to digital marketing, we've got you covered.
        </p>
        <a href="#contact" className="mt-10 inline-block bg-virmatric-blue text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-virmatric-blue-dark transition-all transform hover:scale-105 shadow-2xl">
          Let's Build Together
        </a>
      </div>
    </section>
  );
}