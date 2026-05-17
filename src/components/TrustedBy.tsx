import { motion } from 'motion/react';

export function TrustedBy() {
  const logos = [
    { name: "Brand 1", id: 1 },
    { name: "Brand 2", id: 2 },
    { name: "Brand 3", id: 3 },
    { name: "Brand 4", id: 4 },
    { name: "Brand 5", id: 5 },
    { name: "Brand 6", id: 6 },
    { name: "Brand 7", id: 7 },
    { name: "Brand 8", id: 8 },
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-none px-4 md:px-12 lg:px-24 mb-10 text-center">
        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">Trusted By</h4>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex items-center gap-16 md:gap-24 whitespace-nowrap px-8"
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
           {/* Duplicate array mapping to make seamless loop */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
             <div key={index} className="text-xl md:text-2xl font-black font-display text-gray-300 uppercase tracking-widest shrink-0 select-none opacity-50 hover:opacity-100 transition-opacity">
               {logo.name}
             </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
