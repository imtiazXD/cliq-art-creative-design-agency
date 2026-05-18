import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-gray-100' : 'bg-white/50 backdrop-blur-sm py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-none px-4 md:px-12 lg:px-24">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home" className="text-xl font-display font-black tracking-tighter uppercase text-charcoal flex items-center gap-2">
              <img src="./Cliq Art/Cliq-Art-logo.png" alt="Cliq Art Logo" className="h-16 w-auto object-contain" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 items-center text-[11px] font-bold uppercase tracking-widest">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-charcoal/80 hover:text-secondary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/+8801774216203"
                target="_blank"
                rel="noreferrer"
                className="hidden md:inline-flex items-center justify-center px-5 py-2.5 bg-charcoal text-white text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-primary transition-all"
              >
                Start a Project
              </a>
              <button
                className="md:hidden text-charcoal hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-white flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
          >
            <div className="flex justify-between items-center p-5 border-b border-gray-100">
              <img src="./Cliq Art/Cliq-Art-logo.png" alt="Cliq Art Logo" className="h-16 w-auto object-contain" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-charcoal hover:text-primary">
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-col p-6 gap-6 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-display font-semibold text-charcoal hover:text-primary"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6"
              >
                <a
                  href="https://wa.me/+8801774216203"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-semibold rounded-full bg-primary text-white shadow-lg"
                >
                  Start a Project
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
