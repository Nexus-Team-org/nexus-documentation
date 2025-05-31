
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, CheckCircle, ArrowRight, Terminal, Package } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    title: "Create your project",
    description: "Use our CLI tool to scaffold a new Nexus UI project with all dependencies pre-configured.",
    command: "npx create-nexus-init my-project",
    icon: Terminal
  },
  {
    title: "Navigate to your project",
    description: "Change into your project directory to start development.",
    command: "cd my-project",
    icon: Package
  },
  {
    title: "Start development server",
    description: "Launch the development server and start building your application.",
    command: "npm run dev",
    icon: ArrowRight
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
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Badge variant="outline" className="border-border text-foreground">
            Quick Start Guide
          </Badge>
        </motion.div>
        
        <motion.h1
          className="text-4xl font-bold text-foreground"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Getting Started
        </motion.h1>
        
        <motion.p
          className="text-xl text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Get up and running with Nexus UI in minutes. Our CLI tool provides everything you need to start building modern React applications.
        </motion.p>
      </div>

      {/* Prerequisites */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center">
              <Package className="w-5 h-5 mr-2" />
              Prerequisites
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <ul className="space-y-2">
              <li>• Node.js v16 or newer</li>
              <li>• npm v7 or newer (or yarn/pnpm equivalent)</li>
              <li>• Basic knowledge of React and TypeScript</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Installation Steps */}
      <div className="space-y-6">
        <motion.h2
          className="text-2xl font-bold text-foreground"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Quick Installation
        </motion.h2>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300 border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-foreground font-bold text-sm">
                      {index + 1}
                    </div>
                    <step.icon className="w-5 h-5 text-foreground" />
                    <CardTitle className="text-lg text-foreground">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{step.description}</p>
                  
                  <div className="bg-foreground rounded-lg p-4 flex items-center justify-between">
                    <code className="text-background text-sm font-mono">
                      {step.command}
                    </code>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-background hover:text-foreground hover:bg-background/20"
                      onClick={() => copyToClipboard(step.command, index)}
                    >
                      {copiedIndex === index ? (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* What's Included */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <h2 className="text-2xl font-bold text-foreground">What's Included</h2>
        
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Complete Development Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Core Technologies</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• React 19.1.0 with hooks</li>
                  <li>• TypeScript 5.8.3 for type safety</li>
                  <li>• Vite 6.3.5 for fast development</li>
                  <li>• React Router 7.6.1 for routing</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">UI & Styling</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Tailwind CSS 4.1.8</li>
                  <li>• shadcn/ui components</li>
                  <li>• Lucide React icons</li>
                  <li>• Framer Motion animations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Next Steps */}
      <motion.div
        className="bg-foreground text-background rounded-xl p-6 border border-border"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold">Ready to build something amazing?</h3>
          <p className="text-background/80">
            Now that you have Nexus UI set up, explore our components and examples to start building.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-background text-foreground hover:bg-background/90">
              Explore Components
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" className="border-background/20 text-foreground hover:bg-background/10">
              View Examples
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GettingStarted;
