import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Terminal, Package, Code, Zap, Check, FileCode, Cpu, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

const features = [
  {
    title: "Project Generation",
    description: "Instantly bootstrap a fully-typed Okami project complete with routing, state, and tests — all in one go.",
    icon: Package,
  },
  {
    title: "Component Generation",
    description: "Craft production-ready React components with decorators, stories, and tests in seconds.",
    icon: Code,
  },
  {
    title: "Service Generation",
    description: "Spin up injectable services that plug straight into the built-in DI container.",
    icon: Cpu,
  },
  {
    title: "Page Generation",
    description: "Generate lazy-loaded pages wired into React Router, complete with SEO metadata.",
    icon: FileCode,
  },
  {
    title: "Redux Integration",
    description: "Scaffold RTK Query-powered slices, endpoints, and typed hooks with a single command.",
    icon: Zap,
  },
  {
    title: "TypeScript Ready",
    description: "Every snippet ships with strict typings and IntelliSense support.",
    icon: Check,
  }
];

const commands = [
  {
    title: "Create a New Project",
    description: "Scaffold a brand-new Okami workspace in seconds.",
    command: "nexus new my-app",
    prompt: "$",
    details: [
      "Creates the project directory and installs dependencies.",
      "Sets up Vite, React Router, Redux Toolkit, Jest, and ESLint out of the box.",
      "Pass --template <name> to use a custom starter template.",
    ],
  },
  {
    title: "Start Development Server",
    description: "Spin up the Vite-powered dev server with hot-reload.",
    command: "cd my-app && npm run dev",
    prompt: "$",
    details: [
      "Runs on http://localhost:5173 by default.",
      "Reloads instantly on file changes, preserving component state.",
      "Use --port to override the default port.",
    ],
  },
  {
    title: "Generate a New Page",
    description: "Add a typed, route-aware page and stubbed tests.",
    command: "nexus create-page PageName",
    prompt: "$",
    details: [
      "Creates PageName.tsx under src/pages and registers the route in router config.",
      "Generates a Jest + React Testing Library test file.",
      "Adds lazy-loading and suspense boundary automatically.",
    ],
  },
  {
    title: "Generate a Redux Slice",
    description: "Create a fully-typed slice wired with RTK Query endpoints.",
    command: "nexus create-redux featureName --with-api",
    prompt: "$",
    details: [
      "Generates slice, selectors, and types under src/features/featureName.",
      "If --with-api is supplied, also scaffolds an api.ts with RTK Query endpoints.",
      "Automatically adds the slice reducer to the root store.",
    ],
  },
  {
    title: "Upgrade the CLI",
    description: "Stay on the bleeding edge with the latest release.",
    command: "npm i -g @nexus-dev/cli@latest",
    prompt: "$",
    details: [
      "Fetches the latest published version from npm and installs globally.",
      "Use npm info @nexus-dev/cli version to check the current latest version.",
    ],
  },
];

const CliPage = () => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
    // --- Helpers & state ---
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  type SidebarItem = { id: string; label: string };
  type SidebarSection = { title: string; items: SidebarItem[] };

  const sidebarSections: SidebarSection[] = [
    {
      title: "Getting Started",
      items: [
        { id: "introduction", label: "Overview" },
        { id: "installation", label: "Installation" },
      ],
    },
    {
      title: "CLI Usage",
      items: [
        { id: "commands", label: "Basic Commands" },
        { id: "features", label: "Feature Generators" },
      ],
    },
    {
      title: "Reference",
      items: [{ id: "file-structure", label: "File Structure" }],
    },
    {
      title: "Advanced Guides",
      items: [
        { id: "advanced-generators", label: "Advanced Generators" },
        { id: "ci", label: "CI / CD" },
      ],
    },
    {
      title: "Support",
      items: [
        { id: "troubleshooting", label: "Troubleshooting" },
        { id: "faq", label: "FAQ" },
      ],
    },
  ];

  const tocItems = sidebarSections.flatMap((s) => s.items) as { id: string; label: string }[];
  const [activeId, setActiveId] = useState<string>("introduction");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId((entry.target as HTMLElement).id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full lg:pl-64">
      {/* Local Side Navigation */}
      <nav className="hidden lg:block fixed top-28 left-8 z-20 w-56">
        <div className="rounded-lg border p-4 space-y-6 bg-card shadow-lg">
          {sidebarSections.map((section) => (
            <div key={section.title} className="space-y-2">
              <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground px-2">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                      className={`block text-sm px-2 py-1.5 rounded transition-colors ${
                        activeId === item.id
                          ? "font-medium text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>

      <motion.div
        className="space-y-32 w-full max-w-5xl mx-auto px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div id="introduction" className="text-center space-y-8 pt-32 pb-16">
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Okami <span className="text-muted-foreground">CLI</span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            Turbo-charge your Okami workflow with lightning-fast scaffolding and ergonomic generators.
          </motion.p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            <Badge variant="outline" className="px-3 py-1">
              {siteConfig.version}
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              MIT License
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              Node ≥ 18
            </Badge>
          </div>

          {/* Call-to-action */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center pt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Button size="lg" className="px-6" onClick={() => scrollToSection("installation")}>
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-6"
              onClick={() => scrollToSection("commands")}
            >
              View Commands
            </Button>
          </motion.div>
        </div>

        {/* Features */}
        <span id="features"></span>
        <div className="space-y-12">
          <h2 className="text-3xl font-bold tracking-tight text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full border hover:shadow-sm transition-shadow">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-md border">
                        <feature.icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg font-medium">{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Installation */}
        <span id="installation"></span>
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Installation</h2>
            <p className="text-muted-foreground text-lg">
              Install the Okami CLI globally (requires Node.js ≥ 18) to get started
            </p>
          </div>
          <Card className="border">
            <CardContent className="p-6">
              <div className="relative group">
                <pre className="bg-muted/10 p-4 rounded-md overflow-x-auto border">
                  <code className="text-sm font-mono">
                    <span className="text-muted-foreground">$ </span>npm install -g @nexus-dev/cli
                  </code>
                </pre>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-3 top-3 h-8 w-8 p-0"
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
        <span id="commands"></span>
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Commands</h2>
            <p className="text-muted-foreground text-lg">
              Essential commands to scaffold and manage your Okami projects
            </p>
          </div>
          <div className="space-y-8">
            {commands.map((cmd, index) => (
              <motion.div
                key={cmd.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="space-y-3"
              >
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">{cmd.title}</h3>
                  <p className="text-muted-foreground">{cmd.description}</p>
                </div>
                {cmd.details && (
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1.5">
                    {cmd.details.map((d) => (
                      <li key={d} className="text-sm">{d}</li>
                    ))}
                  </ul>
                )}
                <div className="relative group">
                  <pre className="bg-muted/10 p-4 rounded-md overflow-x-auto border">
                    <code className="text-sm font-mono">
                      <span className="text-muted-foreground">{cmd.prompt} </span>{cmd.command}
                    </code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-3 top-3 h-8 w-8 p-0"
                    onClick={() => copyToClipboard(cmd.command)}
                  >
                    {copiedCommand === cmd.command ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* File Structure */}
        <span id="file-structure"></span>
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">File Structure</h2>
            <p className="text-muted-foreground text-lg">
              Generated Redux slice structure with RTK Query
            </p>
          </div>
          <Card className="border">
            <CardContent className="p-6">
              <div className="bg-muted/10 p-6 rounded-md border font-mono text-sm">
                <div className="text-muted-foreground">src/</div>
                <div className="ml-4">
                  <div className="text-muted-foreground">└── features/</div>
                  <div className="ml-4">
                    <div className="text-muted-foreground">└── featureName/</div>
                    <div className="ml-4 space-y-1">
                      <div>├── featureNameSlice.ts  <span className="text-muted-foreground"># Redux slice</span></div>
                      <div>├── types.ts            <span className="text-muted-foreground"># TypeScript types</span></div>
                      <div>├── selectors.ts        <span className="text-muted-foreground"># Selectors</span></div>
                      <div>├── api.ts              <span className="text-muted-foreground"># RTK Query API</span></div>
                      <div>└── index.ts            <span className="text-muted-foreground"># Barrel exports</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Advanced Generators */}
        <span id="advanced-generators"></span>
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Advanced Generators</h2>
            <p className="text-muted-foreground text-lg">
              Fine-tune scaffolding to your exact specifications
            </p>
          </div>
          <div className="space-y-4">
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Custom Schematics</strong> – point to your own JSON/JS config for limitless customization
              </li>
              <li>
                <strong>Chained Commands</strong> – generate components, tests, and stories in a single pass
              </li>
              <li>
                <strong>Event Hooks</strong> – auto-run formatting, linting, or git staging after generation
              </li>
            </ul>
          </div>
        </div>

        {/* CI/CD */}
        <span id="ci"></span>
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">CI/CD</h2>
            <p className="text-muted-foreground text-lg">
              Automate builds, tests, and deployments of your Okami apps
            </p>
          </div>
          <Card className="border">
            <CardHeader>
              <CardTitle>GitHub Actions Example</CardTitle>
              <CardDescription>Build, test, and publish on every push to <code>main</code></CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted/10 p-4 rounded-md overflow-x-auto text-sm font-mono border">
                {`name: CI
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 20
      - run: npm ci
      - run: npm run test -- --coverage
      - run: npm run build`}
              </pre>
            </CardContent>
          </Card>
        </div>

        {/* Troubleshooting */}
        <span id="troubleshooting"></span>
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Troubleshooting</h2>
            <p className="text-muted-foreground text-lg">
              Solutions to common issues
            </p>
          </div>
          <div className="space-y-4">
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Node version errors</strong> – ensure Node 18+. Upgrade with <code>nvm install 18</code>
              </li>
              <li>
                <strong>Permission denied</strong> – use a Node version manager or set a user-local npm prefix
              </li>
              <li>
                <strong>Command not found</strong> – verify your <code>$PATH</code> includes npm global bin
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <span id="faq"></span>
        <div className="space-y-12 pb-24">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">FAQ</h2>
            <p className="text-muted-foreground text-lg">
              Common questions about the Okami CLI
            </p>
          </div>
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="font-medium text-lg">Is the CLI open source?</h3>
              <p className="text-muted-foreground">
                Yes, licensed under MIT — contributions welcome!
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="font-medium text-lg">Does it run on Windows?</h3>
              <p className="text-muted-foreground">
                Absolutely — the CLI is cross-platform and continuously tested on Windows, macOS, and Linux.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CliPage;