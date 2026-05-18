import { motion } from 'motion/react';
import { Mail, MessageCircle } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden border-b border-gray-100">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] opacity-50 pointer-events-none" />

      <div className="max-w-none px-4 md:px-12 lg:px-24 text-center relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="inline-block px-3 py-1 border border-primary text-primary text-[10px] font-bold uppercase tracking-tighter w-fit mb-6 shadow-sm">
            Next Step
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase text-charcoal mb-6 leading-[0.9]">
            Let’s Build Your <br />
            <span className="text-primary text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">Brand’s Future Together</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business into a high-end brand? Let’s collaborate to create something truly impactful.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-charcoal text-white font-bold uppercase tracking-widest text-[11px] rounded-sm shadow-xl shadow-charcoal/20 flex items-center justify-center hover:scale-105 transition-all hover:bg-primary hover:shadow-primary/40 gap-2"
            >
              Start Your Project
            </a>
            <a
              href="mailto:cliqart01@gmail.com"
              className="w-full sm:w-auto px-8 py-4 border border-gray-300 bg-white text-charcoal font-bold uppercase tracking-widest text-[11px] rounded-sm hover:border-charcoal transition-all items-center justify-center shadow-sm flex gap-2"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
