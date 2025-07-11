
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, Star, MessageCircle, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            {/* Logo Section */}
            <NavLink
              to="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="w-10 h-10 bg-foreground text-background rounded-lg flex items-center justify-center font-mono text-sm font-bold shadow-lg">
                {siteConfig.logo}
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-foreground">
                  {siteConfig.name}
                </h1>
                <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full border">
                  {siteConfig.version}
                </span>
              </div>
            </NavLink>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 ml-8">
              {siteConfig.navigation.main.map((item) => {
                const isActive = location.pathname === item.href;
                
                return (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => window.open(siteConfig.discord.inviteUrl, '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Discord
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {siteConfig.navigation.main.map((item) => {
                const isActive = location.pathname === item.href;
                
                return (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setMobileMenuOpen(false);
                    }}
                    className={cn(
                      "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                    )}
                  >
                    {item.title}
                  </NavLink>
                );
              })}
              <div className="pt-4 pb-2 border-t border-border mt-4">
                <div className="flex flex-col space-y-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start text-muted-foreground hover:text-foreground"
                    onClick={() => {
                      window.open(siteConfig.discord.inviteUrl, '_blank');
                      setMobileMenuOpen(false);
                    }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Join Discord
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
