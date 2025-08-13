import React from "react";

const items = [
  { id: 1, title: "Campaign A", img: "https://via.placeholder.com/600x400?text=Portfolio+1" },
  { id: 2, title: "Campaign B", img: "https://via.placeholder.com/600x400?text=Portfolio+2" },
  { id: 3, title: "Branding C", img: "https://via.placeholder.com/600x400?text=Portfolio+3" },
  { id: 4, title: "SEO D", img: "https://via.placeholder.com/600x400?text=Portfolio+4" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Portfolio</h2>
        <p className="mt-2 text-gray-600">A few selected projects & mockups — replace with your own.</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <div key={it.id} className="rounded overflow-hidden shadow-sm">
              <img src={it.img} alt={it.title} className="w-full h-40 object-cover" />
              <div className="p-3 bg-white">
                <div className="font-semibold">{it.title}</div>
                <div className="text-sm text-gray-500">Short summary or result</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
