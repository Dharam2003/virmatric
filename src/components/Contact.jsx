import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold gradient-text">Get in Touch</h2>
        <p className="mt-6 text-xl text-gray-300">
          Ready to start your next project? We'd love to hear from you.
        </p>
        <div className="mt-12 bg-virmatric-dark-light p-8 rounded-2xl shadow-2xl">
          <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="grid gap-6">
            <input name="name" required className="p-4 bg-virmatric-dark rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-virmatric-blue" placeholder="Your Name" />
            <input name="email" type="email" required className="p-4 bg-virmatric-dark rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-virmatric-blue" placeholder="Your Email" />
            <textarea name="message" required className="p-4 bg-virmatric-dark rounded-lg text-white placeholder-gray-400 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-virmatric-blue" placeholder="Tell us about your project"></textarea>
            <button type="submit" className="w-full bg-virmatric-blue text-white py-4 rounded-lg font-bold text-lg hover:bg-virmatric-blue-dark transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}