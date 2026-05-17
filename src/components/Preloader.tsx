import { motion } from 'motion/react';

export function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-8 h-8 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-8 h-8 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '150ms' }} />
        </motion.div>
        <motion.h1
          className="mt-6 text-2xl font-display font-bold tracking-wider text-charcoal"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          CLIQ <span className="text-secondary">ART</span>
        </motion.h1>
      </div>
    </motion.div>
  );
}
