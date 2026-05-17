import { motion } from 'motion/react';
import { Target, Award, Users } from 'lucide-react';

export function WhyChooseUs() {
  const benefits = [
    {
      id: "01",
      title: "Strategy-Driven Design",
      desc: "We don’t just create visuals; we build comprehensive brand identity systems rooted in market strategy.",
      icon: <Target size={20} className="text-primary" />
    },
    {
      id: "02",
      title: "Premium Aesthetic & Execution",
      desc: "Specializing in minimal, modern, and high-end design that instantly elevates your professional presence.",
      icon: <Award size={20} className="text-secondary" />
    },
    {
      id: "03",
      title: "Collaborative Workflow",
      desc: "With a team-based approach, you get diverse creative perspectives, seamless communication, and faster delivery.",
      icon: <Users size={20} className="text-primary" />
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#F8F9FA] border-y border-gray-200">
      <div className="max-w-none px-4 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-5/12 flex flex-col items-start text-left lg:sticky lg:top-24 h-fit">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-block px-3 py-1 border border-secondary text-secondary text-[10px] font-bold uppercase tracking-tighter w-fit mb-6 bg-white"
            >
              Why Choose Cliq Art
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tighter uppercase text-charcoal mb-6 leading-[0.9]"
            >
              WHY PARTNER <br className="hidden lg:block"/> WITH <span className="text-primary">US?</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-base md:text-lg text-gray-500 font-medium leading-relaxed mb-8"
            >
              Partnering with us means getting more than just a design. You get a dedicated team committed to making your brand succeed in the competitive market through strategic thinking and precision execution.
            </motion.p>
          </div>

          <div className="lg:w-7/12 flex flex-col pt-8 lg:pt-0">
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="flex gap-6 pb-12 mb-12 border-b border-gray-300 last:border-b-0 last:pb-0 last:mb-0 group cursor-default"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="text-xs font-bold text-gray-400 group-hover:text-primary transition-colors mb-4">{item.id}</div>
                  <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-sm">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-display font-black uppercase tracking-tight mb-3 text-charcoal group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium md:pr-12">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
