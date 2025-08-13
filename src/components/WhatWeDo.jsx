import React from 'react';
import { FaBullhorn, FaSearchDollar, FaAd, FaPalette } from 'react-icons/fa';

const services = [
  { title: "Social Media Marketing", desc: "Engage your audience and build your brand.", icon: <FaBullhorn size={40} /> },
  { title: "SEO & Content Marketing", desc: "Drive organic traffic and establish authority.", icon: <FaSearchDollar size={40} /> },
  { title: "Paid Advertising", desc: "Maximize your ROI with targeted ad campaigns.", icon: <FaAd size={40} /> },
  { title: "Branding & Design", desc: "Craft a memorable brand identity.", icon: <FaPalette size={40} /> },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-28 bg-virmatric-dark-light">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold gradient-text">What We Do</h2>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
          We offer a comprehensive suite of services to help you achieve your digital marketing goals.
        </p>
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-virmatric-dark p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-virmatric-blue/20">
              <div className="text-virmatric-blue mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              <p className="mt-4 text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}