
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Places from '../components/Places';
import Hotels from '../components/Hotels';
import Transportation from '../components/Transportation';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-amber-50">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Places />
      <Hotels />
      <Transportation />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
