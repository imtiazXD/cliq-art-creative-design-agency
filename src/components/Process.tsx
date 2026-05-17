import { motion } from 'motion/react';
import { Search, PenTool, MonitorPlay, MessageSquare, Zap } from 'lucide-react';

export function Process() {
  const steps = [
    {
      title: "Research & Discovery",
      desc: "Understanding your brand, audience, and goals.",
      icon: <Search className="text-charcoal" size={24} />
    },
    {
      title: "Concept Development",
      desc: "Creating unique and strategic design directions.",
      icon: <PenTool className="text-charcoal" size={24} />
    },
    {
      title: "Design Execution",
      desc: "Bringing the best concept to life with precision.",
      icon: <MonitorPlay className="text-charcoal" size={24} />
    },
    {
      title: "Revisions & Feedback",
      desc: "Refining based on your feedback.",
      icon: <MessageSquare className="text-charcoal" size={24} />
    },
    {
      title: "Final Delivery",
      desc: "Delivering all final files ready for use.",
      icon: <Zap className="text-charcoal" size={24} />
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#F8F9FA] text-charcoal relative overflow-hidden border-b border-gray-200">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.02)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="max-w-none px-4 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="flex flex-col items-start text-left w-full md:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-block px-3 py-1 border border-secondary text-secondary text-[10px] font-bold uppercase tracking-tighter w-fit mb-6 bg-white"
            >
              How We Work
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.9]"
            >
              Our Design <br />
              <span className="text-primary">Process</span>
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:w-1/3 text-xs md:text-sm font-medium text-gray-500 uppercase tracking-widest text-left md:text-right"
          >
            A simple, structured process to ensure quality and clarity in every project.
          </motion.p>
        </div>

        <div className="relative mt-24">
          {/* Central Line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 z-0" />
          
          <div className="grid grid-cols-2 gap-4 md:flex md:flex-col md:gap-24 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center md:gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} ${index === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
              >
                <div className={`w-full md:w-1/2 flex h-full ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  <div className="bg-white p-5 md:p-12 rounded-sm border border-gray-200 shadow-sm md:max-w-[500px] w-full group hover:-translate-y-2 hover:shadow-xl hover:border-primary transition-all duration-500 relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute -right-2 -bottom-4 md:-right-10 md:-bottom-10 text-[60px] md:text-[120px] font-display font-black text-gray-50 group-hover:text-primary/5 transition-colors duration-500 select-none pointer-events-none leading-none">
                      0{index + 1}
                    </div>
                    
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-[#F8F9FA] border border-gray-100 rounded-full flex items-center justify-center mb-4 md:mb-8 relative z-10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {/* Icon wrapper to handle color inheritance */}
                      <div className="group-hover:text-white group-hover:[&>svg]:text-white transition-colors scale-75 md:scale-100 flex items-center justify-center">
                         {step.icon}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xs sm:text-sm md:text-2xl font-display font-black uppercase tracking-tight text-charcoal mb-2 md:mb-4 relative z-10 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h4>
                      
                      <p className="text-[10px] sm:text-xs md:text-base text-gray-500 leading-relaxed font-medium relative z-10">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Center Node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-[#F8F9FA] rounded-full border-[6px] border-[#F8F9FA] items-center justify-center z-20 shadow-sm">
                  <div className="w-full h-full bg-charcoal rounded-full flex items-center justify-center text-white text-sm font-bold font-display">
                    {index + 1}
                  </div>
                </div>
                
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
