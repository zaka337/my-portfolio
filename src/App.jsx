// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import SideDotsNav from './components/SideDotsNav';
import Hero from './components/hero.jsx';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer.jsx';

function App() {
  return (
    // Outer container for the entire app.
    // Added 'scrollBehavior: "smooth"' for smooth scrolling to sections.
    // Also ensuring it takes full height to allow scrolling.
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', scrollBehavior: 'smooth' }}>
      <Navbar />
      <SideDotsNav />

      {/* Main content area. flexGrow: 1 ensures it takes available space, pushing footer down. */}
      <main style={{ flexGrow: 1 }}>
        {/*
          --- IMPORTANT: Section IDs for Navigation ---
          Each major section needs an 'id' that matches the 'href' in your Navbar.
          I've wrapped your components in <section> tags and given them the IDs.
        */}

        {/* Hero Section - Target for 'ZAKA.DEV' logo link */}
        <section id="hero">
          <Hero />
        </section>

        {/* Home Section - Target for 'Home' link in Navbar */}
        {/* If your 'Home' component is meant to be the same as 'Hero',
            you might want to remove one or adjust the IDs accordingly.
            For now, assuming they are distinct scroll targets. */}
        <section id="home">
          <Home />
        </section>

        {/* About Section - Target for 'About' link in Navbar */}
        <section id="about">
          <About />
        </section>

        {/* Projects Section - Target for 'Projects' link in Navbar */}
        <section id="projects">
          <Projects />
        </section>

        {/* Contact Section - Target for 'Contact' link in Navbar */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;