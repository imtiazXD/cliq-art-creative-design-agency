import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down a bit
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="https://wa.me/+8801774216203"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
          
          {/* Ping animation behind */}
          <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
