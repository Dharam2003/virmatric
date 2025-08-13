import React from "react";

const cards = [
  { title: "Social Media Marketing", desc: "Strategy, content & growth for Instagram, LinkedIn, and more." },
  { title: "SEO & Content", desc: "Keyword research, blogging, on-page and technical SEO." },
  { title: "Paid Advertising", desc: "Google & Meta ads focused on ROI." },
  { title: "Branding & Design", desc: "Logo, identity, and visuals that convert." },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Services</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="p-6 border rounded-lg">
              <div className="text-lg font-semibold">{c.title}</div>
              <p className="mt-2 text-gray-600 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
