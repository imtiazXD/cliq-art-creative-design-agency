import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export function Portfolio() {
  const projects = [
    {
      title: "Logo Design",
      category: "Logo Design & Brand Identity",
      image: "./Cliq Art/Logo.jpg",
      link: "https://www.behance.net/gallery/232063047/TOVI-Total-Video-Logo-Design-Brand-Identity",
      description: "A premium logo design and brand identity showcase for TOVI (Total Video), crafting a modern visual identity that embodies momentum, motion, and digital innovation."
    },
    {
      title: "Packaging & Print Design",
      category: "Packaging Design",
      image: "./Cliq Art/Packaging.jpg",
      link: "https://www.behance.net/gallery/234276519/Dried-Mango-Pouch-Packaging-Design",
      description: "An organic and vibrant pouch packaging design for Dried Mango, blending premium product illustration with contemporary typography to stand out on shelves."
    },
    {
      title: "Social Media Design",
      category: "Social Media Design",
      image: "./Cliq Art/SMP.jpg",
      link: "https://www.behance.net/gallery/228234979/Graphic-Design-Course-Social-Media-EdTech-Post-Design",
      description: "High-impact social media creative layouts designed for an EdTech brand, maximizing visual hierarchy and engagement to drive enrollments."
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white text-charcoal border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between text-left items-end mb-16 gap-6 relative">
          <div className="absolute top-0 right-0 text-[70px] sm:text-[100px] md:text-[150px] font-display font-black text-gray-50 uppercase leading-none select-none pointer-events-none -mt-6 sm:-mt-10 md:-mt-16">
            Work
          </div>
          <div className="flex flex-col items-start text-left relative z-10 w-full md:w-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-block px-3 py-1 border border-primary text-primary text-[10px] font-bold uppercase tracking-tighter w-fit mb-6 bg-white"
            >
              Selected Works
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.9]"
            >
              My Showcase
            </motion.h3>
          </div>
          <motion.a 
            href="https://www.behance.net/cliqart"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex text-[11px] font-bold uppercase tracking-widest text-charcoal hover:text-primary transition-colors items-center gap-2 pb-2 border-b border-gray-200 hover:border-primary relative z-10"
          >
            View All Projects <ArrowUpRight size={14} />
          </motion.a>
        </div>

        <div className="flex flex-col gap-16 md:gap-20 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center group`}
            >
              <div className={`w-full md:w-1/2 flex justify-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                <div className="relative overflow-hidden rounded-sm shadow-sm">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                      className="w-auto h-auto max-w-full max-h-[500px] object-contain grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>
              </div>

              <div className={`w-full md:w-1/2 flex flex-col ${index % 2 === 0 ? 'items-start text-left md:pl-8' : 'items-start md:items-end md:text-right md:pr-8'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-primary hidden md:block" />
                  <p className="text-primary text-[10px] font-bold uppercase tracking-widest">{project.category}</p>
                  <span className="w-8 h-px bg-primary md:hidden" />
                </div>
                
                <h4 className="text-3xl md:text-4xl lg:text-5xl font-display font-black uppercase tracking-tight text-charcoal mb-6 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h4>
                
                <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed mb-8 max-w-md">
                  {project.description}
                </p>
                
                <motion.a 
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                  className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-charcoal hover:text-primary transition-colors pb-1 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <span className="border-b border-charcoal/30 group-hover:border-primary transition-colors pb-1">View Case Study</span> 
                  <ArrowUpRight size={16} className={index % 2 !== 0 ? 'md:rotate-[-90deg]' : ''} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center md:hidden">
           <a 
            href="https://www.behance.net/cliqart"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 border border-gray-200 text-charcoal font-bold uppercase tracking-widest text-[11px] rounded-sm flex items-center gap-2 hover:bg-charcoal hover:text-white transition-colors w-full justify-center"
           >
             View All Projects <ArrowUpRight size={14} />
           </a>
        </div>
      </div>
    </section>
  );
}
