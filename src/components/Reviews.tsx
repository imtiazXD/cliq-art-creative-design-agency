import { motion, useScroll, useTransform } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useRef } from 'react';

export function Reviews() {
  const reviews = [
    { name: "Noor Uddin Khan", role: "CEO, Bongoshoili", review: "The team delivered a logo that perfectly represents our brand vision. Their ability to understand requirements and turn them into a strong visual identity was impressive.", rating: 5 },
    { name: "Aamir Shahzad", role: "Fiverr Seller", review: "Great experience working with them. They designed a clean and modern logo that truly improved my presentation. Very professional communication.", rating: 5 },
    { name: "Prio Sarkar", role: "Employee, Mototrack GPS", review: "They maintained a perfect balance between simplicity and professionalism. The final output was exactly what we needed for our growth.", rating: 5 },
    { name: "Daniel Carter", role: "Startup Founder", review: "Cliq Art Team has a strong sense of design and branding. They created a logo that not only looks great but also communicates our brand message clearly. The process was smooth, and they was very responsive throughout the project.", rating: 5 },
    { name: "Terri Bradley", role: "Marketing Consultant", review: "I really liked Cliq Art Team approach to design. They focuses on clarity and structure, which made a big difference in the final outcome. The branding feels premium and consistent across all platforms. Would definitely work with them again.", rating: 5 },
  ];

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section id="reviews" className="py-24 bg-[#0a0a0a] text-white overflow-hidden relative" ref={targetRef}>
      {/* Huge background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] md:text-[300px] font-display font-black text-white/[0.02] uppercase leading-none select-none pointer-events-none whitespace-nowrap">
        Praise
      </div>

      <div className="max-w-none px-4 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-end mb-12 md:mb-20">
          <div className="md:w-1/2 flex flex-col items-start text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-block px-3 py-1 border border-secondary text-secondary text-[10px] font-bold uppercase tracking-tighter w-fit mb-4 md:mb-6"
            >
              Testimonials
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter uppercase mb-2 md:mb-6 leading-[0.9]"
            >
              Client <span className="text-secondary">Stories</span>
            </motion.h3>
          </div>
          
          <div className="w-full md:w-1/2 flex gap-6 md:gap-8 justify-start md:justify-end pb-2 border-t border-gray-800 md:border-none pt-6 md:pt-0">
            <div>
              <p className="text-4xl md:text-6xl font-display font-black tracking-tighter text-white mb-2 leading-none">5.0</p>
              <div className="flex text-primary mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-[9px] uppercase tracking-widest font-bold text-gray-500">Average Rating</p>
            </div>
            <div className="w-px bg-gray-800" />
            <div>
              <p className="text-4xl md:text-6xl font-display font-black tracking-tighter text-white mb-2 leading-none">99%</p>
              <div className="h-[14px] mb-2"></div>
              <p className="text-[9px] uppercase tracking-widest font-bold text-gray-500">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Scrolling Strip */}
        <div className="-mx-4 sm:-mx-6 lg:-mx-8 pl-4 sm:pl-6 lg:pl-8 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory">
          <motion.div 
            style={{ x }} 
            className="flex gap-4 md:gap-6 w-max"
            // Use md:style to only apply the x transform on desktop, but framer motion doesn't support responsive style props easily without hooks.
            // We'll keep the transform but the native scroll will allow users to scroll the rest on mobile.
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="w-[85vw] sm:w-[320px] md:w-[450px] bg-[#111] border border-gray-800 p-6 md:p-10 flex flex-col justify-between shrink-0 relative hover:border-primary transition-colors duration-300 snap-center md:snap-align-none"
              >
                <Quote className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-800 w-8 h-8 md:w-12 md:h-12 opacity-50" />
                
                <div>
                  <div className="flex text-primary mb-4 md:mb-6">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-sm md:text-lg text-gray-300 font-medium leading-relaxed mb-8 md:mb-10 relative z-10">"{review.review}"</p>
                </div>
                
                <div className="flex items-center gap-3 md:gap-4 border-t border-gray-800 pt-4 md:pt-6">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-charcoal flex items-center justify-center font-display font-bold text-white text-xs md:text-sm shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display font-bold uppercase tracking-tight text-white text-xs md:text-sm">{review.name}</p>
                    <p className="text-[8px] md:text-[9px] uppercase tracking-widest font-bold text-gray-500 mt-0.5">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
