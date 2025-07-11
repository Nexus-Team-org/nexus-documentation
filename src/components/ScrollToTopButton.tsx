import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Floating scroll-to-top button with smooth animations and visual feedback.
 * Appears after scrolling down 300px and provides a smooth scroll to top.
 */
export const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setIsClicked(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Reset click state after animation completes
    setTimeout(() => setIsClicked(false), 1000);
  };

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        >
          <motion.button
            type="button"
            onClick={handleClick}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className={[
              "group relative flex items-center justify-center",
              "h-14 w-14 rounded-full shadow-2xl",
              "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground",
              "focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/50",
              "transition-all duration-300 transform-gpu"
            ].join(" ")}
            aria-label="Scroll to top"
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: isHovered ? 1.05 : 1,
              boxShadow: isHovered 
                ? "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          >
            {/* Background glow effect on hover */}
            <motion.span 
              className="absolute inset-0 rounded-full bg-primary/30"
              animate={{
                scale: isHovered ? 1.2 : 1,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Main button content */}
            <motion.div
              className="flex items-center justify-center"
              animate={{
                y: isHovered ? -2 : 0,
                scale: isClicked ? 0.9 : 1,
              }}
              transition={{
                y: { 
                  repeat: isHovered ? Infinity : 0,
                  repeatType: "reverse",
                  duration: 0.8,
                  ease: "easeInOut"
                },
                scale: { type: "spring", stiffness: 500, damping: 15 }
              }}
            >
              <ArrowUp className={`w-5 h-5 transition-transform ${isHovered ? 'transform -translate-y-0.5' : ''}`} />
            </motion.div>
            
            {/* Ripple effect on click */}
            {isClicked && (
              <motion.span
                className="absolute inset-0 rounded-full bg-white/20"
                initial={{ scale: 0.5, opacity: 0.8 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            )}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
