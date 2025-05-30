import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Github, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";

// @ts-ignore - Ignore window type error
declare const window: any;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    // Handle scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Getting Started", path: "/getting-started" },
    { name: "Components", path: "/components" },
    { name: "Discord", path: "https://discord.gg/9QUFBjuSXf", external: true },
  ];

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: "beforeChildren"
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    }
  };

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-glass shadow-md border-b border-border/50' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/" aria-label="Home">
              <Logo size="md" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center space-x-6 text-sm font-medium mr-4">
              {navItems.map((item) => (
                <motion.div 
                  key={item.path}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 500 }}
                  className="relative"
                >
                  {item.external ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative px-3 py-2 rounded-md transition-all duration-200 flex items-center gap-1 text-foreground/70 hover:text-foreground/90"
                    >
                      {item.name}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className={`relative px-3 py-2 rounded-md transition-all duration-200 ${
                        location.pathname === item.path
                          ? "text-primary font-medium"
                          : "text-foreground/70 hover:text-foreground/90"
                      }`}
                    >
                      {item.name}
                      {location.pathname === item.path && (
                        <motion.span 
                          layoutId="activeNavItem"
                          className="absolute left-0 bottom-0 w-full h-0.5 bg-primary"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex items-center space-x-2 border-l border-border pl-4 ml-2 h-8">
              <motion.div whileHover={{ rotate: 15, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-full w-9 h-9 p-0 hover:bg-primary/10 text-foreground hover:text-primary transition-colors"
                  onClick={() => window.open("https://github.com/yourusername/nexus", "_blank")}
                  aria-label="GitHub repository"
                >
                  <Github className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Button
              variant="ghost"
              size="sm"
              className="w-10 h-10 p-0 relative z-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="fixed inset-0 z-40 pt-16 pb-8 px-4 bg-background/95 backdrop-blur-lg md:hidden overflow-y-auto"
            onClick={() => setIsOpen(false)}
          >
            <div className="container mx-auto px-4">
              <motion.div 
                className="flex flex-col space-y-2 py-4"
                variants={mobileMenuVariants}
              >
                {navItems.map((item) => (
                  <motion.div key={item.path} variants={mobileItemVariants}>
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 text-lg rounded-lg transition-colors ${
                        location.pathname === item.path
                          ? 'bg-accent/50 text-primary font-medium'
                          : 'text-foreground/80 hover:bg-accent/30'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                  className="flex items-center justify-center space-x-4 pt-6"
                  variants={mobileItemVariants}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full h-10 px-4"
                    onClick={() => window.open("https://github.com/yourusername/nexus", "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
