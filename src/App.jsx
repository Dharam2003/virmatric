import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatWeDo from "./components/WhatWeDo";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}