import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Bug, Zap, GitBranch, Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const releases = [
  {
    version: "v1.0.0",
    date: "2025-01-01",
    title: "The Genesis",
    description: "The first stable release of Nexus Design System, featuring a comprehensive set of 30+ components, full dark mode support, and a brand new documentation site.",
    changes: [
      { type: "feature", text: "Initial release with 30+ components" },
      { type: "feature", text: "Full dark mode support" },
      { type: "feature", text: "New documentation site" },
      { type: "improvement", text: "Improved accessibility for all components" },
    ],
  },
  {
    version: "v0.9.0",
    date: "2024-11-15",
    title: "The Foundation",
    description: "This release focused on laying a solid foundation for the design system, with a focus on performance, stability, and developer experience.",
    changes: [
      { type: "feature", text: "Added 10 new components" },
      { type: "fix", text: "Fixed a critical bug in the Button component" },
      { type: "improvement", text: "Improved performance of all components" },
    ],
  },
  {
    version: "v0.8.0",
    date: "2024-10-01",
    title: "The Beginning",
    description: "The first public beta of Nexus Design System, featuring a limited set of components and a basic documentation site.",
    changes: [
      { type: "feature", text: "Initial public beta release" },
      { type: "feature", text: "Added 5 new components" },
      { type: "fix", text: "Fixed a bug in the Input component" },
    ],
  },
];

const changeMeta = {
  feature: { icon: Check, className: "bg-green-500/10 text-green-500", label: "Feature" },
  fix: { icon: Bug, className: "bg-red-500/10 text-red-500", label: "Fix" },
  improvement: { icon: Zap, className: "bg-blue-500/10 text-blue-500", label: "Improvement" },
};

const Changelog = () => {
  return (
    <div className="bg-background text-foreground">
      <header className="py-16 md:py-24 lg:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="dark:border-gray-700">What's New</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mt-4">
            Changelog
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
            Stay up-to-date with the latest features, improvements, and bug fixes for Nexus Design System.
          </p>
        </motion.div>
      </header>

      <main className="container max-w-5xl mx-auto px-4 py-12">
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-px bg-border h-full hidden md:block" aria-hidden="true" />
          {releases.map((release, index) => (
            <motion.div
              key={release.version}
              className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={cn("md:text-right", index % 2 === 0 ? "md:order-1" : "md:order-2")}>
                <div className="inline-block bg-card p-4 rounded-lg border dark:border-gray-800">
                  <div className="flex items-center gap-3">
                    <GitBranch className="w-5 h-5 text-muted-foreground" />
                    <h3 className="text-2xl font-bold">{release.title}</h3>
                  </div>
                  <p className="text-muted-foreground mt-2">{release.description}</p>
                </div>
              </div>
              <div className={cn("relative", index % 2 === 0 ? "md:order-2" : "md:order-1")}>
                <Card className="w-full border dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="default">{release.version}</Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={release.date}>{new Date(release.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {release.changes.map((change, changeIndex) => {
                        const meta = changeMeta[change.type as keyof typeof changeMeta];
                        const Icon = meta.icon;
                        return (
                          <li key={changeIndex} className="flex items-start gap-3">
                            <div className={cn("w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0", meta.className)}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-foreground/90">{change.text}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="py-16 md:py-24 lg:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Stay in the Loop</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">
            Subscribe to our newsletter to get the latest updates and news about Nexus Design System.
          </p>
          <div className="mt-8">
            <Button size="lg">
              Subscribe Now <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </footer>
    </div>
  );
};

export default Changelog;