
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Plus, Bug, Zap, Shield } from "lucide-react";

const releases = [
  {
    version: "v1.0.0",
    date: "January 1, 2024",
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
    date: "December 15, 2023",
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
    date: "December 1, 2023",
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
      return "bg-foreground text-background";
    case "fix":
      return "bg-muted text-foreground";
    case "improvement":
      return "bg-accent text-foreground";
    default:
      return "bg-muted text-foreground";
  }
};

const Changelog = () => {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Badge variant="outline" className="border-border text-foreground">
            Release Notes
          </Badge>
        </motion.div>
        
        <motion.h1
          className="text-4xl font-bold text-foreground"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Changelog
        </motion.h1>
        
        <motion.p
          className="text-xl text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Track all changes, improvements, and new features in Nexus UI.
        </motion.p>
      </div>

      <div className="space-y-6">
        {releases.map((release, index) => (
          <motion.div
            key={release.version}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          >
            <Card className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-foreground">{release.version}</span>
                    <Badge 
                      className={release.status === "Latest" ? "bg-foreground text-background" : "bg-muted text-foreground"}
                    >
                      {release.status}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <CalendarDays className="w-4 h-4" />
                    <span className="text-sm">{release.date}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {release.changes.map((change, changeIndex) => (
                    <div key={changeIndex} className="flex items-start space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${getChangeTypeColor(change.type)}`}>
                        <change.icon className="w-3 h-3" />
                      </div>
                      <span className="text-muted-foreground">{change.text}</span>
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
        className="bg-foreground text-background rounded-xl p-8 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="space-y-4 max-w-2xl mx-auto">
          <CalendarDays className="w-12 h-12 mx-auto text-background" />
          <h3 className="text-2xl font-bold">Stay Updated</h3>
          <p className="text-background/80">
            Get notified about new releases, features, and important updates to Nexus UI.
          </p>
          <div className="flex gap-3 justify-center">
            <Badge variant="secondary" className="bg-background/10 text-background border-background/20">
              Coming Soon
            </Badge>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Changelog;
