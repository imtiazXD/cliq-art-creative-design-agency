import { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { About } from './components/About';
import { Reviews } from './components/Reviews';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      {loading && <Preloader />}
      {!loading && (
        <div className="relative min-h-screen flex flex-col font-sans">
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <Services />
            <WhyChooseUs />
            <Portfolio />
            <Process />
            <About />
            <Reviews />
            <CtaSection />
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      )}
    </>
  );
}
