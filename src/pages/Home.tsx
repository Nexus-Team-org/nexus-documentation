import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Github, Zap, Code, Palette, LayoutGrid, Star, MessageSquare, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Logo } from "../components/Logo";
import { PageHeader } from "../components/PageHeader";
import { Card, CardContent } from "../components/ui/card";

// @ts-ignore - Ignore window type error
declare const window: any;

const features = [
  {
    title: 'Type Safe',
    description: 'Full TypeScript support with strict type checking and great IDE integration.',
    icon: Code
  },
  {
    title: 'Customizable',
    description: 'Easily customize components to match your brand with theming support.',
    icon: Palette
  },
  {
    title: 'Accessible',
    description: 'Built with accessibility in mind, following WAI-ARIA standards.',
    icon: LayoutGrid
  },
  {
    title: 'Modern Design',
    description: 'Beautiful, responsive components with dark mode support out of the box.',
    icon: Star
  }
];

export default function Home() {
  const navigate = useNavigate();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Global background elements that span the entire page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute inset-0 bg-grid-pattern opacity-[0.05]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div 
          className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-gradient-accent opacity-30 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            rotate: [0, 15, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-[35rem] h-[35rem] bg-gradient-primary opacity-30 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.25, 0.2],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[20rem] h-[20rem] bg-cyan-500/20 rounded-full blur-[80px]"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
      </div>
      
      {/* Hero Section with PageHeader */}
      <PageHeader
        title="Build beautiful interfaces with Nexus"
        description="A modern component library for building stunning, accessible web applications with React and TypeScript."
        gradient={true}
        centered={true}
        showPattern={false}
      >
        <div className="flex flex-col items-center">
          <motion.div 
            className="flex justify-center mb-10"
            variants={itemVariants}
          >
            <Logo size="lg" />
          </motion.div>
          
          <motion.div 
            className="inline-flex items-center gap-2 bg-glass border border-primary/20 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6"
            variants={itemVariants}
            animate={{ 
              boxShadow: ["0 0 0 rgba(0, 0, 0, 0)", "0 0 12px rgba(var(--purple-600), 0.5)", "0 0 0 rgba(0, 0, 0, 0)"]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.span 
              className="inline-block w-2 h-2 rounded-full bg-primary"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            ></motion.span>
            v1.0.0 - Now Live!
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-4"
            variants={itemVariants}
          >
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 shadow-glow-sm hover:shadow-glow-md transition-all duration-300"
                onClick={() => navigate('/getting-started')}
              >
                <Zap className="mr-2 h-4 w-4" />
                Get Started
              </Button>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/20 bg-glass hover:bg-primary/5"
                onClick={() => window.open('https://github.com/yourusername/nexus', '_blank')}
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </PageHeader>

      {/* Features Section */}
      <div className="py-16 md:py-24 relative z-10">
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.span 
              className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Powerful Features
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Why Choose Nexus UI?
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Everything you need to build modern web applications
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="group"
                variants={itemVariants}
              >
                <Card className="h-full glass-card hover:shadow-lg transition-all duration-300 border border-primary/10 hover:border-primary/30 hover:translate-y-[-5px]">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Discord Community Section - Enhanced Design */}
      <div className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto glass-card p-8 md:p-12 rounded-2xl shadow-xl border border-primary/20 overflow-hidden backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
              {/* Left side - Content */}
              <div className="md:w-2/5">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                      Join Our Community
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-foreground mb-4 leading-tight">
                    Connect with <span className="text-gradient">Nexus</span> Developers
                  </h2>
                  
                  <p className="text-muted-foreground mb-8 text-lg">
                    Join our thriving Discord community to get help, share your projects, and connect with other developers building with Nexus UI.
                  </p>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-block"
                  >
                    <Button 
                      size="lg"
                      className="bg-gradient-primary hover:opacity-90 shadow-glow-sm hover:shadow-glow-md transition-all duration-300 px-6"
                      onClick={() => window.open('https://discord.gg/9QUFBjuSXf', '_blank')}
                    >
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Join Discord
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Right side - Discord UI */}
              <div className="md:w-3/5">
                <motion.div 
                  className="rounded-xl overflow-hidden border border-primary/30 shadow-xl bg-card/70 backdrop-blur-md"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.3)" }}
                >
                  {/* Discord window header */}
                  <div className="p-4 bg-primary/20 border-b border-primary/30 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex space-x-2 mr-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-primary/40 flex items-center justify-center">
                          <MessageSquare className="h-3 w-3 text-white" />
                        </div>
                        <div className="text-sm font-medium text-foreground">Nexus Discord</div>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded">discord.gg/nexus</div>
                  </div>
                  
                  {/* Discord content */}
                  <div className="flex">
                    {/* Server sidebar */}
                    <div className="w-16 bg-primary/30 p-3 hidden md:block">
                      <div className="space-y-3">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">N</div>
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors cursor-pointer">C</div>
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors cursor-pointer">D</div>
                      </div>
                    </div>
                    
                    {/* Channel sidebar */}
                    <div className="w-48 bg-primary/10 p-3 hidden lg:block">
                      <div className="mb-4">
                        <h3 className="text-xs font-semibold text-muted-foreground mb-2 uppercase">Channels</h3>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-foreground bg-primary/20 rounded p-1 px-2">
                            <span className="text-primary">#</span> general
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground rounded p-1 px-2 hover:bg-primary/10 transition-colors cursor-pointer">
                            <span className="text-primary">#</span> help
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground rounded p-1 px-2 hover:bg-primary/10 transition-colors cursor-pointer">
                            <span className="text-primary">#</span> showcase
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold text-muted-foreground mb-2 uppercase">Voice</h3>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground rounded p-1 px-2 hover:bg-primary/10 transition-colors cursor-pointer">
                            <span className="text-primary">🔊</span> Lounge
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Main chat area */}
                    <div className="flex-1 p-4">
                      <div className="flex items-center mb-6">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mr-3 text-primary font-bold">
                          #
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">general</h4>
                          <p className="text-xs text-muted-foreground">1,234 members online • 5 typing</p>
                        </div>
                      </div>
                      
                      {/* Messages */}
                      <div className="space-y-4 mb-4">
                        <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/20 transition-colors">
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold text-xs mr-3">NU</div>
                            <div className="flex items-baseline gap-2">
                              <p className="text-sm font-medium text-foreground">NexusUser123</p>
                              <p className="text-xs text-muted-foreground">Just now</p>
                            </div>
                          </div>
                          <p className="text-sm text-foreground">Just launched my new project with Nexus UI! Check it out! 🚀</p>
                          <div className="mt-2 flex gap-2">
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">🔗 nexus-project.vercel.app</span>
                          </div>
                        </div>
                        
                        <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/20 transition-colors">
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center text-white font-semibold text-xs mr-3">DE</div>
                            <div className="flex items-baseline gap-2">
                              <p className="text-sm font-medium text-foreground">DevExpert</p>
                              <p className="text-xs text-muted-foreground">5 minutes ago</p>
                            </div>
                          </div>
                          <p className="text-sm text-foreground">The new dark purple theme looks amazing! Great work team! 💜</p>
                          <div className="mt-2 flex gap-1">
                            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full flex items-center gap-1">
                              <span>❤️</span> 12
                            </span>
                            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full flex items-center gap-1">
                              <span>🚀</span> 5
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Message input */}
                      <div className="relative">
                        <input 
                          type="text" 
                          className="w-full bg-primary/5 border border-primary/20 rounded-lg py-2 px-4 pr-10 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30" 
                          placeholder="Message #general..."
                          disabled
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80 transition-colors" disabled>
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-2xl shadow-xl border border-primary/20 relative overflow-hidden backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ready to Build Something Amazing?
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get started with Nexus UI today and create beautiful, accessible web applications in minutes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg"
                className="bg-gradient-primary hover:opacity-90 shadow-glow-sm hover:shadow-glow-md transition-all duration-300 px-8"
                onClick={() => navigate('/getting-started')}
              >
                <Zap className="mr-2 h-5 w-5" />
                Get Started Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
