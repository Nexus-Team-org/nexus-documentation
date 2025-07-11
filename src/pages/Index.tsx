import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import DiscordServerStatus from "@/components/DiscordServerStatus";
import { ArrowRight, Zap, Shield, Palette, Code, Download, Star, Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { useState } from "react";

const iconMap = {
  Zap,
  Shield,
  Palette,
  Code
};

const CopyButton = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <button 
      className="p-1.5 rounded-md hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
      onClick={handleCopy}
      aria-label="Copy to clipboard"
    >
      {isCopied ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </button>
  );
};

const Index = () => {
  return (
    <div className="relative">
      
      <div className="relative max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="relative">
          <motion.div
            className="text-center space-y-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Version badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Badge 
                variant="secondary" 
                className="px-4 py-1.5 text-sm font-medium bg-background/80 backdrop-blur-sm border border-border/30 shadow-sm hover:bg-background/90 transition-all duration-300 hover:shadow-md"
              >
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Now available in v1.0.0
              </Badge>
            </motion.div>
            
            {/* Main heading */}
            <div className="space-y-8">
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight pt-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  {siteConfig.logo} {siteConfig.name}
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {siteConfig.description}
              </motion.p>
            </div>

            {/* Installation Command */}
            <motion.div
              className="mt-12 bg-background/90 dark:bg-background/90 border border-black/10 dark:border-white/10 rounded-xl max-w-2xl mx-auto group overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -2, transition: { duration: 0.15 } }}
            >
              {/* Header */}
              <div className="px-4 pt-3 pb-2 border-b border-black/5 dark:border-white/5 bg-gradient-to-b from-black/5 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/90"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/90"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/90"></div>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground/80 font-mono">Terminal</span>
                  <div className="w-6"></div> {/* Spacer for balance */}
                </div>
              </div>
              
              {/* Command */}
              <div className="p-4 bg-background/50 dark:bg-background/50">
                <div className="flex items-center group-has-[:focus-visible]:ring-2 group-has-[:focus-visible]:ring-ring/50 rounded-md transition-all duration-200 bg-background/80 dark:bg-background/80 border border-black/5 dark:border-white/5 overflow-hidden">
                  <code className="text-sm font-mono text-foreground/90 dark:text-foreground/90 select-all px-4 py-2.5 flex-1">
                    $ npm install -g @nexus-dev/cli
                  </code>
                  <div className="px-2 border-l border-black/5 dark:border-white/5 h-full flex items-center">
                    <CopyButton text="npm install -g @nexus-dev/cli" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Get Started Button */}
            <motion.div
              className="flex justify-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link to="/getting-started" className="w-full sm:w-auto group">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto h-12 px-8 text-base font-medium group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </Button>
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div 
              className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-muted-foreground text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  <div className="w-7 h-7 rounded-full bg-primary/10 border-2 border-background shadow-sm">
                    <img 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=1" 
                      alt="User" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-primary/20 border-2 border-background shadow-sm">
                    <img 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=2" 
                      alt="User" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-primary/30 border-2 border-background flex items-center justify-center shadow-sm">
                    <span className="text-xs font-medium text-primary">+42</span>
                  </div>
                </div>
                <span className="text-foreground/80">Trusted by developers</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-border/50"></div>
              <div className="flex items-center bg-muted/50 px-3 py-1.5 rounded-full border border-border/20">
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1.5 text-yellow-500 fill-yellow-500" />
                  <span className="font-medium text-foreground/90">4.9</span>
                  <span className="text-muted-foreground ml-1">/5</span>
                </div>
                <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">+42 reviews</span>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>

      {/* Stats */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {siteConfig.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {/* Animated background highlight */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              {/* Stat value */}
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-3">
                {stat.value}
              </div>
              
              {/* Stat label */}
              <div className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.section>
      </div>

      {/* Features */}
      <div className="relative py-16 md:py-20">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 px-3 py-1 text-sm font-medium bg-background/50 backdrop-blur-sm">
              Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Why Choose {siteConfig.name}?
            </h2>
            <p className="text-lg text-muted-foreground">
              Built with modern technologies and best practices to help you create amazing user experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {siteConfig.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              
              return (
                <motion.div
                  key={feature.title}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <Card className="h-full border border-border/30 hover:border-primary/20 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    
                    <CardHeader className="pb-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-border/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                          <IconComponent className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-semibold text-foreground">
                            {feature.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Community */}
      <section className="relative py-24 mb-32">
        <div className="container relative px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-foreground/5 border border-border/20 mb-6">
                  <span className="relative flex h-2.5 w-2.5 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-sm font-medium text-foreground/90">Join Our Developer Community</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                  <span className="text-foreground">{siteConfig.logo} {siteConfig.name}</span>
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8">
                  Connect with fellow developers, get help, share projects, and stay updated with the latest in web development. Our community is growing every day!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={siteConfig.discord.inviteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-background bg-foreground hover:bg-foreground/90 rounded-lg transition-all duration-300 hover:shadow-lg"
                  >
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.08.08 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.08.08 0 0 0-.041-.1 13.1 13.1 0 0 1-1.872-.892.08.08 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.07.07 0 0 1 .077-.01c3.928 1.8 8.18 1.8 12.061 0a.07.07 0 0 1 .078.01c.12.098.246.198.373.292a.08.08 0 0 1-.006.127 12.6 12.6 0 0 1-1.873.892.08.08 0 0 0-.04.1c.36.698.772 1.362 1.225 1.993a.08.08 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.08.08 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.95-2.419 2.157-2.419 1.21 0 2.175 1.09 2.157 2.42 0 1.333-.95 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.95-2.419 2.157-2.419 1.21 0 2.175 1.09 2.157 2.42 0 1.333-.95 2.418-2.157 2.418z" />
                    </svg>
                    Join Discord Community
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-foreground/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative z-10 bg-card border rounded-xl p-6 shadow-lg">
                  <DiscordServerStatus />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        className="relative overflow-hidden bg-foreground text-background rounded-3xl p-8 lg:p-16 text-center mx-4 my-16 lg:my-24 border border-border/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative z-10 space-y-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-background/10 text-background/90 mb-6 border border-background/20 rounded-full">
              Get Started
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Ready to level up your
            <span className="block mt-2">
              development journey?
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-background/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Join {siteConfig.name} today and be part of a growing community of developers building the next generation of web applications.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/getting-started" className="group">
              <Button 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-base font-medium rounded-lg hover:shadow-md transition-all duration-300"
              >
                <span className="flex items-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            {/* Global styles */}
            <style dangerouslySetInnerHTML={{
              __html: `
                @keyframes gradient-shift {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
                @keyframes shine {
                  to {
                    left: 200%;
                  }
                }
              `
            }} />
          </motion.div>
          
          <motion.div 
            className="pt-4 text-sm text-background/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Trusted by developers at leading companies
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
