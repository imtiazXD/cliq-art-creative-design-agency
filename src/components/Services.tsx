import { motion } from 'motion/react';
import { PenTool, Layers, LayoutGrid, MonitorSmartphone, PackageOpen } from 'lucide-react';

export function Services() {
  const services = [
    {
      id: "01",
      title: "Logo Design",
      description: "Unique, memorable, and timeless logos that capture your brand's essence.",
      icon: <PenTool className="text-white" size={24} />,
    },
    {
      id: "02",
      title: "Brand Identity",
      description: "Complete visual identities including color palettes, typography, and guidelines.",
      icon: <Layers className="text-white" size={24} />,
    },
    {
      id: "03",
      title: "Social Media Design",
      description: "Engaging and on-brand graphics for all your social platforms.",
      icon: <LayoutGrid className="text-white" size={24} />,
    },
    {
      id: "04",
      title: "Print & Packaging",
      description: "High-quality print collateral and packaging designs that stand out.",
      icon: <PackageOpen className="text-white" size={24} />,
    },
    {
      id: "05",
      title: "UI/UX Design",
      description: "Intuitive and beautiful digital experiences for web and mobile.",
      icon: <MonitorSmartphone className="text-white" size={24} />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-10 text-[150px] md:text-[200px] font-display font-black text-gray-50 uppercase leading-none select-none pointer-events-none -mt-4 -z-10">
        Skills
      </div>
      
      <div className="max-w-none px-4 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="flex flex-col items-start w-full md:w-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-block px-3 py-1 border border-primary text-primary text-[10px] font-bold uppercase tracking-tighter w-fit mb-6"
            >
              Our Expertise
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.9]"
            >
              Core Services
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:w-1/3 text-xs md:text-sm font-medium text-gray-500 uppercase tracking-widest text-left md:text-right"
          >
            Capabilities that drive real business growth and build lasting brand memories.
          </motion.p>
        </div>

        <div className="flex flex-col border-t-2 border-charcoal">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group flex flex-col md:flex-row md:items-center py-6 md:py-12 border-b border-gray-200 hover:border-charcoal transition-colors relative cursor-pointer"
            >
              {/* Hover Background Accent */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 -z-10" />

              <div className="flex flex-row justify-between items-center w-full md:w-1/2 mb-3 md:mb-0 pr-4">
                <div className="flex flex-col md:flex-row md:items-center w-full">
                  <div className="w-full md:w-1/3 mb-1 md:mb-0">
                    <span className="text-xs md:text-sm font-bold text-gray-400 group-hover:text-primary transition-colors">{service.id}</span>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tight text-charcoal group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                {/* Mobile Icon */}
                <div className="md:hidden flex justify-end shrink-0">
                  <div className="w-12 h-12 rounded-full bg-charcoal group-hover:bg-primary transition-colors flex items-center justify-center -rotate-45 group-hover:rotate-0 duration-300">
                    <div className="scale-75">{service.icon}</div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-2/6 mb-2 md:mb-0 pr-4 md:pr-8">
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>

              {/* Desktop Icon */}
              <div className="hidden md:flex w-full md:w-1/6 justify-end">
                <div className="w-16 h-16 rounded-full bg-charcoal group-hover:bg-primary transition-colors flex items-center justify-center -rotate-45 group-hover:rotate-0 duration-300">
                  {service.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
