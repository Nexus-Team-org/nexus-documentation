import { NavLink, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Moon, Sun, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Github, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <motion.nav
        className={cn(
          "transition-all duration-300 ease-out will-change-transform",
          isScrolled 
            ? "mx-4 mt-4 py-3 px-6 rounded-full shadow-2xl backdrop-blur-xl border border-border/20 dark:border-white/20 bg-background/80 dark:bg-background/80 max-w-max"
            : "w-full py-4 px-6 bg-background/80 dark:bg-background/80 border-b border-border/10 dark:border-white/10"
        )}
        initial={{ y: -20, opacity: 0 }}
        animate={{ 
          y: 0,
          opacity: 1,
          width: isScrolled ? 'auto' : '100%',
          maxWidth: isScrolled ? 'min(calc(100% - 2rem), 1280px)' : '100%',
          margin: isScrolled ? '1rem auto 0' : '0',
          borderRadius: isScrolled ? '9999px' : '0',
          boxShadow: isScrolled ? '0 15px 30px -10px rgba(0, 0, 0, 0.1), 0 10px 15px -5px rgba(0, 0, 0, 0.05)' : 'none',
          padding: isScrolled ? '0.75rem 1.5rem' : '1rem 1.5rem',
          scale: isScrolled ? 0.98 : 1,
          borderWidth: isScrolled ? '1px' : '0 0 1px 0',
        }}
        transition={{
          type: 'spring',
          stiffness: 600,
          damping: 30,
          mass: 0.5,
          opacity: { duration: 0.2 },
          borderRadius: { duration: 0.3 },
          boxShadow: { duration: 0.2 },
          default: { duration: 0.25 }
        }}
      >
      <div className="w-full transition-all duration-300">
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center justify-between w-full px-4">
            {/* Logo Section */}
            <motion.div
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.97, transition: { duration: 0.15 } }}
            >
              <NavLink
                to="/"
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                <motion.div 
                  className={cn(
                    "bg-foreground text-background rounded-lg flex items-center justify-center font-mono font-bold shadow-lg transition-all duration-300 will-change-transform",
                    isScrolled ? 'w-9 h-9 text-sm' : 'w-10 h-10 text-base'
                  )}
                  whileHover={{ rotate: 5, scale: 1.05, transition: { type: 'spring', stiffness: 500 } }}
                  whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                >
                  {siteConfig.logo}
                </motion.div>
                <AnimatePresence>
                  {isScrolled ? (
                    <motion.h1 
                      className="text-xl font-bold text-foreground whitespace-nowrap will-change-transform"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {siteConfig.name}
                    </motion.h1>
                  ) : (
                    <motion.div 
                      className="flex flex-col will-change-transform"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <h1 className="text-xl font-bold text-foreground">
                        {siteConfig.name}
                      </h1>
                      <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full border">
                        {siteConfig.version}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            </motion.div>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {siteConfig.navigation.main.map((item) => {
                const isActive = location.pathname === item.href;
                
                return (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "px-4 py-2 rounded-md transition-colors duration-200 font-medium text-sm",
                      isActive
                        ? "bg-accent text-accent-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                    )}
                  >
                    {item.title}
                  </NavLink>
                );
              })}
            </div>
          </div>
          
          {/* Desktop Actions - Show on large screens */}
          <div className="hidden lg:flex items-center space-x-3">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground hover:bg-foreground/5"
              onClick={() => window.open(siteConfig.discord.inviteUrl, '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Discord
            </Button>
          </div>

          {/* Mobile Menu Button - Show on mobile and tablet */}
          <div className="lg:hidden flex items-center">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="text-muted-foreground hover:text-foreground hover:bg-foreground/5 z-50"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 z-40"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              pointerEvents: 'auto'
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ 
                type: 'spring',
                stiffness: 400,
                damping: 30,
                duration: 0.2
              }}
              className="absolute top-[calc(100%+0.5rem)] left-4 right-4 bg-background rounded-xl shadow-2xl border border-border/20 overflow-hidden max-h-[80vh] 
              md:max-w-md md:left-auto md:right-4 md:top-[calc(100%+0.5rem)]
              lg:hidden"
            >
              <div className="p-4 space-y-2 overflow-y-auto max-h-[calc(80vh-60px)]">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-foreground">Menu</h3>
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 rounded-full hover:bg-accent/10"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                {/* Navigation Items - Show in menu on mobile, tablet, and iPad */}
                <div className="space-y-1">
                {siteConfig.navigation.main.map((item, index) => {
                  const isActive = location.pathname === item.href;
                  
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.02 * index, duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <NavLink
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                          isActive
                            ? "bg-accent/10 text-accent-foreground"
                            : "text-muted-foreground hover:bg-accent/5 hover:text-foreground"
                        )}
                      >
                        {item.title}
                      </NavLink>
                    </motion.div>
                  );
                })}
                </div>

              <motion.div 
                className="p-3 border-t border-border/20 sticky bottom-0 bg-background/95 backdrop-blur-sm z-10"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.05 + (siteConfig.navigation.main.length * 0.02),
                  duration: 0.2,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-foreground hover:bg-accent/10"
                  onClick={() => {
                    window.open(siteConfig.discord.inviteUrl, '_blank');
                    setMobileMenuOpen(false);
                  }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Join Discord
                </Button>
              </motion.div>
            </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      </div>
      </motion.nav>
    </div>
  );
};
