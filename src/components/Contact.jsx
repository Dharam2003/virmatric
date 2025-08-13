import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <p className="mt-2 text-gray-600">Send a message or book a quick call — replace the form endpoint with your own (Formspree/Netlify).</p>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="mt-6 grid gap-3"
        >
          <input name="name" required className="p-3 border rounded" placeholder="Your name" />
          <input name="email" type="email" required className="p-3 border rounded" placeholder="Email address" />
          <input name="company" className="p-3 border rounded" placeholder="Company (optional)" />
          <textarea name="message" required className="p-3 border rounded h-32" placeholder="How can we help?"></textarea>

          <div className="flex gap-3">
            <button type="submit" className="bg-virmatric-blue text-white px-5 py-3 rounded">Send Message</button>
            <a href="mailto:hello@virmatric.com" className="px-5 py-3 border rounded">Or email us</a>
          </div>
        </form>

        <div className="mt-6 text-sm text-gray-600">
          <div>WhatsApp: <a href="https://wa.me/REPLACE_NUMBER" className="text-virmatric-blue">REPLACE_NUMBER</a></div>
          <div>Email: hello@virmatric.com</div>
        </div>
      </div>
    </section>
  );
}
