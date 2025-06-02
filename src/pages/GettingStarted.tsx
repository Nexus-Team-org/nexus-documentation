import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, CheckCircle, ArrowRight, Terminal, Package, Code, Zap, Check, FileCode, Cpu, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useState } from "react";

const steps = [
  {
    title: "Create your project",
    description: "Use our CLI tool to scaffold a new Nexus UI project with all dependencies pre-configured.",
    command: "npx create-nexus-init my-project",
    icon: Terminal,
    prompt: "$",
    username: "user",
    hostname: "terminal"
  },
  {
    title: "Navigate to your project",
    description: "Change into your project directory to start development.",
    command: "cd my-project",
    icon: FileCode,
    prompt: "$",
    username: "user",
    hostname: "terminal"
  },
  {
    title: "Start development server",
    description: "Launch the development server and start building your application.",
    command: "npm run dev",
    icon: Zap,
    prompt: "$",
    username: "user",
    hostname: "terminal"
  }
];

const features = [
  {
    title: "Developer Experience",
    items: [
      "Hot Module Replacement",
      "TypeScript Support",
      "ESLint & Prettier",
      "Jest & React Testing Library"
    ]
  },
  {
    title: "Built-in Features",
    items: [
      "Authentication Setup",
      "API Layer",
      "State Management",
      "Form Handling"
    ]
  }
];

const GettingStarted = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="w-full px-4 sm:px-6 py-12">
      <motion.div
        className="space-y-12 max-w-7xl mx-auto w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Developer-First <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Experience</span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to build production-ready applications with speed and confidence.
          </motion.p>
        </div>

        {/* Quick Start */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Quick Start</h2>
            <Badge variant="secondary" className="px-3 py-1 text-sm font-mono">
              v1.0.0
            </Badge>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-800">
                  <CardHeader className="pb-0">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-foreground font-bold text-sm border border-gray-200 dark:border-gray-700">
                        {index + 1}
                      </div>
                      <CardTitle className="text-lg flex items-center">
                        <step.icon className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-400" />
                        {step.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gray-800/50 rounded-lg" />
                      <div className="relative p-4 rounded-lg bg-black text-gray-200 font-mono text-sm border border-gray-800 overflow-hidden">
                        {/* Terminal header */}
                        <div className="flex items-center mb-3 pb-2 border-b border-gray-800">
                          <div className="flex space-x-1.5 mr-3">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <div className="text-xs text-gray-500">bash</div>
                        </div>
                        
                        {/* Terminal content */}
                        <div className="flex items-center">
                          <span className="text-gray-400 select-none">
                            {step.username}@<span className="text-gray-300">{step.hostname}</span>:~{step.prompt}
                          </span>
                          <code className="text-gray-100 ml-1">{step.command}</code>
                          <span className="inline-block w-2 h-5 bg-gray-400 ml-1 animate-pulse"></span>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 text-gray-500 hover:text-white ml-auto"
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(step.command, index);
                            }}
                          >
                            <AnimatePresence mode="wait">
                              {copiedIndex === index ? (
                                <motion.span
                                  key="check"
                                  initial={{ scale: 0.8, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  exit={{ scale: 0.8, opacity: 0 }}
                                  className="text-gray-300"
                                >
                                  <CheckCircle className="w-4 h-4" />
                                </motion.span>
                              ) : (
                                <motion.span
                                  key="copy"
                                  initial={{ scale: 0.8, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  exit={{ scale: 0.8, opacity: 0 }}
                                >
                                  <Copy className="w-4 h-4" />
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold">Why Developers Love Us</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
            {features.map((feature, index) => (
              <Card key={index} className="border-gray-200 dark:border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Cpu className="w-5 h-5 mr-2" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA - Monochrome Theme */}
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="relative px-8 py-16 sm:py-20">
            <div className="max-w-3xl mx-auto text-center space-y-8 w-full px-4">
              <div className="space-y-5">
                <Badge variant="outline" className="px-3 py-1 text-xs font-mono tracking-wider bg-black text-gray-300 border-gray-800">
                  JOIN OUR COMMUNITY
                </Badge>
                <h3 className="text-3xl md:text-5xl font-bold text-white">
                  Ready to build something <span className="text-gray-300">amazing</span>?
                </h3>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of developers in our Discord community. Get help, share projects, and stay updated.
                </p>
              </div>
              
              <div className="flex flex-col items-center gap-4 pt-2">
                <motion.div 
                  whileHover={{ y: -2 }} 
                  whileTap={{ scale: 0.98 }}
                  className="w-full max-w-xs"
                >
                  <a 
                    href={siteConfig.discord.inviteUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button 
                      size="lg" 
                      className="w-full h-14 bg-[#5865F2] hover:bg-[#4752c4] text-white transition-colors group"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Join Discord Community
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </motion.div>
                
                <div className="flex items-center space-x-4 pt-4">
                  <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                    Documentation
                  </a>
                  <span className="text-gray-700">•</span>
                  <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                    GitHub
                  </a>
                  <span className="text-gray-700">•</span>
                  <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                    Twitter
                  </a>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-900">
                <p className="text-xs text-gray-600">
                  Open source • MIT Licensed • No credit card required
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GettingStarted;