import React from "react";
import { FaBullhorn, FaSearchDollar, FaAd, FaPalette } from 'react-icons/fa';

const cards = [
  { title: "Social Media Marketing", desc: "Engage your audience and build your brand on platforms like Instagram, LinkedIn, and more.", icon: <FaBullhorn size={36} /> },
  { title: "SEO & Content Marketing", desc: "Drive organic traffic and establish authority with our comprehensive SEO and content strategies.", icon: <FaSearchDollar size={36} /> },
  { title: "Paid Advertising", desc: "Maximize your ROI with targeted ad campaigns on Google, Meta, and other platforms.", icon: <FaAd size={36} /> },
  { title: "Branding & Design", desc: "Craft a memorable brand identity with our expert branding and design services.", icon: <FaPalette size={36} /> },
];

export default function Services() {
  return (
    <section id="services" className="py-28">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight">Our Services</h2>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          We offer a comprehensive suite of digital marketing services to help your business grow.
        </p>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((c) => (
            <div key={c.title} className="p-8 border border-gray-200 rounded-xl bg-white text-left hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-virmatric-blue mb-5">{c.icon}</div>
              <h3 className="text-xl font-semibold text-virmatric-dark">{c.title}</h3>
              <p className="mt-3 text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}