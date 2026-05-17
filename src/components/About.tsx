import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-none px-4 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <motion.div 
            className="lg:w-1/2 relative mb-20 lg:mb-0"
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden bg-charcoal relative border border-gray-200">
              <img 
                src="/src/Cliq Art/PNG.png" 
                alt="Creative Agency" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
            </div>
            
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:-bottom-10 md:-right-10 w-[90%] md:w-auto bg-white p-5 md:p-8 rounded-sm shadow-2xl border border-gray-100 flex flex-col justify-between">
              <div className="flex items-center gap-4 mb-4">
                 <div className="text-4xl lg:text-5xl font-display font-black tracking-tighter uppercase text-primary leading-none">150+</div>
                 <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold leading-tight">Projects <br /> Completed</div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                 <div className="text-4xl lg:text-5xl font-display font-black tracking-tighter uppercase text-secondary leading-none">30+</div>
                 <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold leading-tight">Happy Clients <br /> & Growing</div>
              </div>
              <div className="pt-4 border-t border-gray-100">
                 <div className="text-xs text-charcoal font-bold">Worked Across Multiple Business Niches</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 flex flex-col items-start text-left pt-12 lg:pt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="inline-block px-3 py-1 border border-primary text-primary text-[10px] font-bold uppercase tracking-tighter w-fit mb-6">
              Who I Am
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tighter uppercase text-charcoal mb-8 leading-[0.9]">
              Clarity meets creativity.
            </h3>
            <p className="text-base text-gray-500 mb-6 font-medium leading-relaxed">
              We are a collective of creative minds specializing in Brand Identity Design. With over 2 years of experience in the industry, we’ve transitioned from individual freelancers to a cohesive agency to offer more robust and versatile design solutions.
            </p>
            <p className="text-base text-gray-500 mb-10 font-medium leading-relaxed">
              We believe that great design is at the intersection of clarity and creativity. Whether you are a startup or an established business, we focus on delivering visual identities that build trust and long-term brand value.
            </p>

            <div className="w-full pt-8 border-t border-gray-200">
              <h4 className="text-sm font-bold uppercase tracking-widest text-charcoal mb-6">Our Services</h4>
              <ul className="space-y-4">
                {['Logo Design', 'Brand Identity Design', 'Social Media Design'].map((service, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#f8f9fa] border border-gray-200 flex items-center justify-center text-primary shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-bold text-gray-600">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
