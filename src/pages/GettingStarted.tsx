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
    description: "Use our CLI tool to scaffold a new Okami UI project with all dependencies pre-configured.",
    command: "okami new my-app",
    icon: Terminal,
    prompt: "$",
    username: "user",
    hostname: "terminal"
  },
  {
    title: "Navigate to your project",
    description: "Change into your project directory to start development.",
    command: "cd my-app",
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
    <div className="w-full">
      <motion.div
        className="space-y-24 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center space-y-6 pt-24 pb-16">
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Developer-First <span className="bg-gradient-to-br from-foreground via-muted-foreground to-muted bg-clip-text text-transparent">Experience</span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            Everything you need to build production-ready applications with speed and confidence.
          </motion.p>
        </div>

        {/* Quick Start */}
        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div
            className="text-center"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
          >
            <h2 className="text-4xl font-bold tracking-tight">Quick Start</h2>
            <p className="text-muted-foreground mt-2">Get up and running in minutes.</p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="grid md:grid-cols-2 gap-8 items-center my-16"
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
              >
                <div className={`text-left ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <Badge variant="outline" className="mb-3">{`Step ${index + 1}`}</Badge>
                  <h3 className="text-3xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </div>
                <div className={`relative group ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <div className="relative rounded-lg text-muted-foreground font-mono text-sm border overflow-hidden">
                    {/* Terminal header */}
                    <div className="flex items-center px-4 py-2 border-b">
                      <div className="flex space-x-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="ml-4 text-xs">bash</div>
                    </div>
                    
                    {/* Terminal content */}
                    <div className="relative p-4">
                      <pre><code className="text-sm">{step.command}</code></pre>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="absolute top-1/2 right-2 -translate-y-1/2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => copyToClipboard(step.command, index)}
                      >
                        <AnimatePresence mode="wait">
                          {copiedIndex === index ? (
                            <motion.span key="check" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}>
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            </motion.span>
                          ) : (
                            <motion.span key="copy" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}>
                              <Copy className="w-4 h-4" />
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          className="space-y-12 py-24 border-y"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div
            className="text-center max-w-3xl mx-auto"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
          >
            <h2 className="text-4xl font-bold tracking-tight">Why Developers Love Us</h2>
            <p className="text-muted-foreground mt-2 text-lg">A toolkit designed for productivity and joy.</p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
              >
                <Card className="p-8 border-2 h-full transition-all duration-300 hover:border-primary">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="flex items-center text-2xl font-bold">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Cpu className="w-6 h-6 text-primary" />
                      </div>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-4">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="py-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center">
            <motion.h3
              className="text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Ready to build something amazing?
            </motion.h3>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Join our community of developers and start your journey with Okami today.
            </motion.p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <a
                href={siteConfig.discord.inviteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="h-12 px-8"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Join Discord Community
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GettingStarted;
