import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-gray-100 bg-white">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />
      
      <div className="max-w-none px-4 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left bg-white/50 backdrop-blur-[2px] p-4 sm:p-6 lg:p-0 lg:bg-transparent lg:backdrop-blur-none rounded-xl"
          >
            <div className="inline-block px-3 py-1 border border-secondary text-secondary text-[10px] font-bold uppercase tracking-tighter w-fit mb-6 shadow-sm bg-white">
              Brand Identity Specialists
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-display font-black text-charcoal leading-[0.95] tracking-tighter uppercase mb-6">
              Design that <span className="text-primary text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">speaks</span>. <br />
              Branding that <span className="text-secondary text-transparent bg-clip-text bg-gradient-to-br from-secondary to-charcoal">converts</span>.
            </h1>

            <p className="max-w-xl text-sm md:text-lg text-gray-500 font-medium leading-relaxed mb-8">
              We are a dedicated team of Brand Identity Specialists helping businesses create impactful and memorable visual legacies. Our mission is simple: to engineer brands that don’t just look premium but connect, communicate, and convert.
            </p>

            {/* Mobile Stats Grid */}
            <div className="grid grid-cols-2 gap-6 w-full lg:hidden mb-8 border-t border-b border-gray-100 py-6">
              <div>
                <div className="text-2xl font-black text-charcoal leading-none mb-1">150+</div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-black text-charcoal leading-none mb-1">2+ Years</div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Of Experience</div>
              </div>
              <div>
                <div className="text-2xl font-black text-charcoal leading-none mb-1">99%</div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-2xl font-black text-charcoal leading-none mb-1">Global</div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Worldwide Clients</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-charcoal text-white font-bold uppercase tracking-widest text-[11px] rounded-sm shadow-xl shadow-charcoal/20 flex items-center justify-center hover:scale-105 hover:bg-primary hover:shadow-primary/40 transition-all gap-2"
              >
                Start Your Project <ArrowRight size={14} />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-300 text-charcoal font-bold uppercase tracking-widest text-[11px] rounded-sm flex items-center justify-center hover:border-charcoal transition-all"
              >
                Let’s Talk
              </a>
            </div>
          </motion.div>

          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0 min-h-0 lg:min-h-[480px]">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
             
             <div className="relative w-full max-w-[340px] lg:max-w-[420px] aspect-[4/5] mx-auto bg-gray-100 rounded-sm overflow-hidden">
                <img
                  src="./Cliq Art/Image.jpg"
                  alt="Brand Design Portfolio"
                  className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                />

                {/* Left Floating Stat (Desktop only) */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="hidden lg:flex absolute top-12 -left-6 bg-white px-5 py-3 shadow-xl items-center gap-3 border-l-4 border-primary"
                >
                   <div>
                     <div className="text-xl font-black text-charcoal leading-none">150+</div>
                     <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mt-1">Projects Completed</div>
                   </div>
                </motion.div>

                {/* Right Floating Stat (Desktop only) */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="hidden lg:flex absolute top-48 -right-6 bg-white px-5 py-3 shadow-xl items-center gap-3 border-l-4 border-secondary"
                >
                   <div>
                     <div className="text-xl font-black text-charcoal leading-none">2+ Years</div>
                     <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mt-1">Of Experience</div>
                   </div>
                </motion.div>

                {/* Left Bottom Floating Stat (Desktop only) */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="hidden lg:flex absolute bottom-24 -left-6 bg-white px-5 py-3 shadow-xl items-center gap-3 border-l-4 border-primary"
                >
                   <div>
                     <div className="text-xl font-black text-charcoal leading-none">99%</div>
                     <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mt-1">Client Satisfaction</div>
                   </div>
                </motion.div>

                {/* Right Bottom Floating Stat (Desktop only) */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="hidden lg:flex absolute bottom-8 -right-6 bg-white px-5 py-3 shadow-xl items-center gap-3 border-l-4 border-charcoal"
                >
                   <div>
                     <div className="text-xl font-black text-charcoal leading-none">Global</div>
                     <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mt-1">Worldwide Clients</div>
                   </div>
                </motion.div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
