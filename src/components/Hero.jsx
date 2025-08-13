// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-white via-gray-50 to-gray-100 px-6 md:px-16">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
        Grow Your Brand with <span className="text-virmatric-primary">VirMatric</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
        Your all-in-one partner for digital marketing, brand growth, and online presence.
        We help your business stand out in the digital crowd.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href="#services"
          className="px-6 py-3 bg-virmatric-primary text-white rounded-lg hover:bg-virmatric-dark transition"
        >
          Explore Services
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-virmatric-primary text-virmatric-primary rounded-lg hover:bg-virmatric-primary hover:text-white transition"
        >
          Contact Us
        </a>
      </div>

      <div className="mt-12 max-w-4xl w-full">
        <img
          src="/images/hero-marketing.svg"
          alt="VirMatric Digital Marketing"
          className="w-full object-contain"
        />
      </div>
    </section>
  );
}
