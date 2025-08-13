import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-28 bg-virmatric-dark-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold gradient-text">About VirMatric</h2>
            <p className="mt-6 text-xl text-gray-300">
              We are a passionate team of digital experts dedicated to helping businesses thrive in the online world. Our mission is to deliver innovative and results-driven digital marketing solutions that exceed our clients' expectations.
            </p>
            <p className="mt-4 text-xl text-gray-300">
              We believe in building long-term partnerships with our clients, based on transparency, collaboration, and a shared commitment to success.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Team Member 1" className="rounded-2xl shadow-lg" />
            <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Team Member 2" className="rounded-2xl shadow-lg mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
}