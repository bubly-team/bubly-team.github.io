import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          {/* Background glow */}
          <div className="absolute inset-0 -m-1 bg-gradient-bubly rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
          
          {/* Button */}
          <div className="relative w-12 h-12 rounded-full bg-gradient-bubly flex items-center justify-center shadow-lg shadow-bubly-violet/25 transition-shadow duration-500 group-hover:shadow-xl group-hover:shadow-bubly-violet/40">
            <ArrowUp className="w-5 h-5 text-white transition-transform duration-300 group-hover:-translate-y-0.5" />
          </div>
          
          {/* Pulse ring on hover */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-bubly-violet/30"
            initial={{ scale: 1, opacity: 0 }}
            whileHover={{
              scale: [1, 1.5, 1.5],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
