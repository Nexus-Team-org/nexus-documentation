import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Plus, Bug, Zap, Shield, GitBranch, GitCommit } from "lucide-react";
import { cn } from "@/lib/utils";

const releases = [
  {
    version: "v1.0.0",
    date: "January 1, 2025",
    status: "Latest",
    changes: [
      { type: "feature", icon: Plus, text: "Initial release of Nexus UI" },
      { type: "feature", icon: Plus, text: "Core component library with 25+ components" },
      { type: "feature", icon: Shield, text: "Full TypeScript support" },
      { type: "feature", icon: Zap, text: "Tailwind CSS integration" },
      { type: "feature", icon: Plus, text: "Professional black and white design system" }
    ]
  },
  {
    version: "v0.9.0",
    date: "January 15, 2025",
    status: "Beta",
    changes: [
      { type: "feature", icon: Plus, text: "Added Command component" },
      { type: "feature", icon: Plus, text: "Added Badge component variants" },
      { type: "fix", icon: Bug, text: "Fixed responsive design issues" },
      { type: "improvement", icon: Zap, text: "Improved component performance" }
    ]
  },
  {
    version: "v0.8.0",
    date: "January 1, 2025",
    status: "Beta",
    changes: [
      { type: "feature", icon: Plus, text: "Added Select component" },
      { type: "feature", icon: Plus, text: "Added Checkbox component" },
      { type: "feature", icon: Plus, text: "Added Switch component" },
      { type: "fix", icon: Bug, text: "Fixed accessibility issues" }
    ]
  }
];

const getChangeTypeColor = (type: string) => {
  switch (type) {
    case "feature":
      return "bg-black text-white";
    case "fix":
      return "bg-gray-100 text-gray-900 border border-gray-200";
    case "improvement":
      return "bg-gray-200 text-gray-900";
    default:
      return "bg-gray-100 text-gray-900";
  }
};

const getChangeIcon = (type: string) => {
  switch (type) {
    case "feature":
      return <Plus className="w-3 h-3" />;
    case "fix":
      return <Bug className="w-3 h-3" />;
    case "improvement":
      return <Zap className="w-3 h-3" />;
    default:
      return <Plus className="w-3 h-3" />;
  }
};

const Changelog = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16 lg:py-20 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      <motion.div
        className="space-y-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Badge variant="outline" className="border-gray-300 text-gray-600 font-medium tracking-wide">
              RELEASE NOTES
            </Badge>
          </motion.div>
          
          <motion.div className="space-y-2">
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Changelog
            </motion.h1>
            
            <motion.p
              className="text-lg text-gray-600 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              Track all changes, improvements, and new features in Nexus UI.
            </motion.p>
          </motion.div>
        </div>

        <div className="space-y-8">
          {releases.map((release, index) => (
            <motion.div
              key={release.version}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="relative"
            >
              <Card className="border border-gray-200 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                        {release.version}
                      </h2>
                      <Badge 
                        variant="outline" 
                        className={cn(
                          "px-2 py-1 text-xs font-medium",
                          release.status === "Latest" 
                            ? "bg-black text-white border-black" 
                            : "bg-gray-100 text-gray-800"
                        )}
                      >
                        {release.status}
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarDays className="w-4 h-4 mr-1.5" />
                      <span>{release.date}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {release.changes.map((change, changeIndex) => (
                      <div key={changeIndex} className="flex items-start space-x-3 group">
                        <div 
                          className={cn(
                            "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0",
                            getChangeTypeColor(change.type)
                          )}
                        >
                          {getChangeIcon(change.type)}
                        </div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                          {change.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Subscribe to Updates */}
        <motion.div
          className="bg-black text-white rounded-xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-2xl mx-auto space-y-4">
            <CalendarDays className="w-12 h-12 mx-auto" />
            <h3 className="text-2xl font-bold">Stay Updated</h3>
            <p className="text-gray-300">
              Get notified about new releases, features, and important updates to Nexus UI.
            </p>
            <div className="pt-2">
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                Coming Soon
              </Badge>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Changelog;