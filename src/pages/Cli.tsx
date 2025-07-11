import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Terminal, Package, Code, Zap, Check, FileCode, Cpu, MessageCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

const features = [
  {
    title: "Project Generation",
    description: "Create new Okami projects with a single command",
    icon: Package,
  },
  {
    title: "Component Generation",
    description: "Quickly generate components with decorators",
    icon: Code,
  },
  {
    title: "Service Generation",
    description: "Create injectable services with the DI container",
    icon: Cpu,
  },
  {
    title: "Page Generation",
    description: "Generate page components with routing setup",
    icon: FileCode,
  },
  {
    title: "Redux Integration",
    description: "Generate Redux slices with RTK Query support",
    icon: Zap,
  },
  {
    title: "TypeScript Ready",
    description: "Full TypeScript support out of the box",
    icon: Check,
  }
];

const commands = [
  {
    title: "Create a New Project",
    description: "Scaffold a new Okami application",
    command: "nexus new my-app",
    prompt: "$",
  },
  {
    title: "Start Development Server",
    description: "Launch the development environment",
    command: "cd my-app && npm run dev",
    prompt: "$",
  },
  {
    title: "Generate a New Page",
    description: "Create a new page with routing setup",
    command: "nexus create-page PageName",
    prompt: "$",
  },
  {
    title: "Generate a Redux Slice",
    description: "Create a new Redux slice with RTK Query",
    command: "nexus create-redux featureName --with-api",
    prompt: "$",
  },
];

const CliPage = () => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(null), 2000);
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
            Okami <span className="bg-gradient-to-br from-foreground via-muted-foreground to-muted bg-clip-text text-transparent">CLI</span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            The official command-line interface for Okami, a modern framework that brings Angular-like features to React.
          </motion.p>
        </div>

        {/* Features */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-primary/20 transition-colors duration-200">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <feature.icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="pt-2">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Installation */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Installation</CardTitle>
              <CardDescription>
                Install the Okami CLI globally to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative group">
                <pre className="bg-muted/50 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">
                    <span className="text-muted-foreground">$ </span>npm install -g @nexus-dev/cli
                  </code>
                </pre>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-2 h-8 w-8 p-0"
                  onClick={() => copyToClipboard("npm install -g @nexus-dev/cli")}
                >
                  {copiedCommand === "npm install -g @nexus-dev/cli" ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Commands */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Commands</h2>
          <div className="space-y-4">
            {commands.map((cmd, index) => (
              <motion.div
                key={cmd.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{cmd.title}</CardTitle>
                        <CardDescription>{cmd.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="relative group">
                      <pre className="bg-muted/50 p-4 rounded-lg overflow-x-auto">
                        <code className="text-sm">
                          <span className="text-muted-foreground">{cmd.prompt} </span>{cmd.command}
                        </code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-2 h-8 w-8 p-0"
                        onClick={() => copyToClipboard(cmd.command)}
                      >
                        {copiedCommand === cmd.command ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* File Structure */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">File Structure</CardTitle>
              <CardDescription>
                Generated Redux slice structure with RTK Query
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-6 rounded-lg font-mono text-sm">
                <div className="text-muted-foreground">src/</div>
                <div className="ml-4">
                  <div className="text-muted-foreground">└── features/</div>
                  <div className="ml-4">
                    <div className="text-muted-foreground">└── featureName/</div>
                    <div className="ml-4">
                      <div>├── featureNameSlice.ts  <span className="text-muted-foreground"># Redux slice with actions & reducers</span></div>
                      <div>├── types.ts            <span className="text-muted-foreground"># TypeScript type definitions</span></div>
                      <div>├── selectors.ts        <span className="text-muted-foreground"># Selector functions</span></div>
                      <div>├── api.ts              <span className="text-muted-foreground"># RTK Query API</span></div>
                      <div>└── index.ts            <span className="text-muted-foreground"># Barrel file for clean exports</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default CliPage;
