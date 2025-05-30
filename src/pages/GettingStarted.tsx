import { Terminal, Code, Package, Zap, Palette, LayoutGrid } from "lucide-react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { PageHeader } from '../components/PageHeader';

// @ts-ignore - Ignore window type error
declare const window: any;

export default function GettingStarted() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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
  const installCommand = `# Using npx (no installation needed)
npx create-nexus-init my-project

# After global installation
npm install -g create-nexus-init
create-nexus-init my-project`;

  const projectScripts = `# Start development server
npm run dev

# Build for production
npm run build

# Run ESLint to check code quality
npm run lint

# Preview production build
npm run preview`;

  return (
    <div className="min-h-screen bg-background">
      <motion.div 
        className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1.5 }}
      ></motion.div>
      <motion.div 
        className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      ></motion.div>
      <motion.div 
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.25, 0.2]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      ></motion.div>
      
      <motion.div 
        className="container mx-auto px-4 py-16 max-w-4xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-12 text-center" variants={itemVariants}>
          <motion.span 
            className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Documentation
          </motion.span>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Getting Started with <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Nexus UI</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Everything you need to start building beautiful interfaces with our component library
          </motion.p>
        </motion.div>
        
        <motion.section className="mb-12" variants={itemVariants}>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <Package className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">Installation</h2>
          </div>
          <motion.div 
            className="bg-card rounded-lg overflow-hidden mb-6 border border-border shadow-md"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="px-4 py-2 bg-card/80 text-foreground text-sm font-mono flex items-center border-b border-border">
              <Terminal className="w-4 h-4 mr-2 text-primary" />
              <span>Terminal</span>
            </div>
            <SyntaxHighlighter 
              language="bash" 
              style={vscDarkPlus}
              customStyle={{ margin: 0, borderRadius: '0 0 0.5rem 0.5rem', background: 'hsl(var(--card))' }}
            >
              {installCommand}
            </SyntaxHighlighter>
          </motion.div>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <Code className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">Project Structure</h2>
          </div>
          <motion.div 
            className="bg-card p-6 rounded-lg shadow-md border border-border"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <pre className="text-sm text-muted-foreground overflow-auto">
{`nexus-project/
├── src/
│   ├── assets/         # Static assets
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── providers/      # Context providers
│   ├── store/          # State management
│   ├── types/          # TypeScript type definitions
│   └── App.tsx         # Main application component
├── public/             # Public assets
├── .eslintrc.js        # ESLint configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration`}
            </pre>
          </motion.div>
        </motion.section>


        <motion.section className="mb-12" variants={itemVariants}>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <Terminal className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">Available Scripts</h2>
          </div>
          <motion.div 
            className="bg-card rounded-lg overflow-hidden mb-6 border border-border shadow-md"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="px-4 py-2 bg-card/80 text-foreground text-sm font-mono flex items-center border-b border-border">
              <Terminal className="w-4 h-4 mr-2 text-primary" />
              <span>Terminal</span>
            </div>
            <SyntaxHighlighter 
              language="bash" 
              style={vscDarkPlus}
              customStyle={{ margin: 0, borderRadius: '0 0 0.5rem 0.5rem', background: 'hsl(var(--card))' }}
            >
              {projectScripts}
            </SyntaxHighlighter>
          </motion.div>
        </motion.section>

        <motion.section variants={itemVariants}>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">Next Steps</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div 
              className="p-6 bg-card rounded-xl shadow-md border border-border"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium text-lg text-primary mb-2">Explore Components</h3>
              <p className="text-muted-foreground mb-4">Check out the pre-built UI components in the <code className="bg-muted px-1.5 py-0.5 rounded text-sm">src/components</code> directory.</p>
              <Button variant="outline" size="sm" className="w-full">View Components</Button>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-card rounded-xl shadow-md border border-border"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <LayoutGrid className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium text-lg text-primary mb-2">Add New Pages</h3>
              <p className="text-muted-foreground mb-4">Create new page components in the <code className="bg-muted px-1.5 py-0.5 rounded text-sm">src/pages</code> directory and update the routes.</p>
              <Button variant="outline" size="sm" className="w-full">Routing Guide</Button>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
