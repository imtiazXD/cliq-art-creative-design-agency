import { motion } from 'motion/react';
import { Facebook, Linkedin, MapPin, Mail, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer id="contact" className="bg-[#1A1A1A] text-white pt-12 md:pt-24 pb-8 border-t-8 border-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-none px-4 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-8 mb-10 md:mb-20">
          
          <div className="lg:col-span-5 border-b md:border-b-0 md:border-r border-[#333] pb-8 md:pb-0 md:pr-12">
            <h3 className="text-3xl md:text-5xl font-display font-black tracking-tighter uppercase text-white mb-4 md:mb-6 leading-tight">
              Let’s Start a <br className="hidden md:block" />
              <span className="text-primary">Conversation</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-400 font-medium mb-6 md:mb-8 max-w-sm">
              We’re always looking to collaborate on interesting projects with great people. Reach out and let's craft something memorable.
            </p>
            <div className="flex gap-4">
               <a href="https://www.facebook.com/share/1B2JiJTeLt/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-sm bg-[#333] flex items-center justify-center text-white hover:bg-[#1877F2] transition-colors shadow-sm">
                 <Facebook size={16} />
               </a>
               <a href="https://www.behance.net/cliqart" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-sm bg-[#333] flex items-center justify-center text-white hover:bg-[#1769ff] transition-colors shadow-sm">
                 <span className="font-bold text-xs uppercase tracking-tighter">Bē</span>
               </a>
               <a href="https://www.linkedin.com/in/cliqart" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-sm bg-[#333] flex items-center justify-center text-white hover:bg-[#0a66c2] transition-colors shadow-sm">
                 <Linkedin size={16} />
               </a>
            </div>
          </div>

          <div className="lg:col-span-3 lg:px-8">
            <h4 className="text-sm font-bold uppercase tracking-tight mb-6 md:mb-8 text-gray-500">Quick Links</h4>
            <ul className="space-y-3 md:space-y-4">
              {['Home', 'Services', 'Portfolio', 'Process', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-[11px] font-bold uppercase tracking-widest text-gray-300 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-2 h-px bg-primary/50" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-tight mb-6 md:mb-8 text-gray-500">Contact Info</h4>
            <div className="space-y-4 md:space-y-6">
              <a href="mailto:cliqart01@gmail.com" className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-[#222] border border-[#333] rounded-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-[9px] text-gray-500 uppercase font-bold tracking-widest mb-1">Email Us</p>
                  <p className="text-xs md:text-sm font-bold tracking-tight text-gray-300 group-hover:text-white transition-colors">
                    cliqart01@gmail.com
                  </p>
                </div>
              </a>
              
              <a href="https://wa.me/+8801774216203" target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-[#222] border border-[#333] rounded-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <MessageCircle size={16} />
                </div>
                <div>
                  <p className="text-[9px] text-gray-500 uppercase font-bold tracking-widest mb-1">WhatsApp</p>
                  <p className="text-xs md:text-sm font-bold tracking-tight text-gray-300 group-hover:text-white transition-colors">
                    +880 1774 216203
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#222] border border-[#333] rounded-sm flex items-center justify-center text-primary shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[9px] text-gray-500 uppercase font-bold tracking-widest mb-1">Location</p>
                  <p className="text-xs md:text-sm font-bold tracking-tight text-gray-300">
                    Sylhet, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#333] flex flex-col justify-center items-center gap-4">
          <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500 text-center">
            © {currentYear} Cliq Art - All Rights Reserved.
          </p>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[10px] uppercase font-bold tracking-widest text-gray-600 text-center mt-[-4px]"
          >
             Design and developed by <motion.span 
               animate={{ color: ['#4b5563', '#ff4e00', '#4b5563'] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             >Imtiaz Ahmed</motion.span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
