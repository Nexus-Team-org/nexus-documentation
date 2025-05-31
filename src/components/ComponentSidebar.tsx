
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  MousePointer2,
  Square,
  Type,
  Calendar,
  ToggleLeft,
  CheckSquare,
  List,
  Settings,
  BarChart3,
  Layout,
  Palette,
  Search,
  Zap,
  Shield,
  Code
} from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";

const iconMap = {
  MousePointer2,
  Square,
  Type,
  Calendar,
  ToggleLeft,
  CheckSquare,
  List,
  Settings,
  BarChart3,
  Layout,
  Palette,
  Search,
  Zap,
  Shield,
  Code
};

export const ComponentSidebar = () => {
  const location = useLocation();

  return (
    <motion.aside 
      className="w-80 bg-card border-r border-border overflow-y-auto"
      initial={{ x: -320 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-2">Components</h2>
          <p className="text-sm text-muted-foreground">
            Professional UI components built with React and TypeScript
          </p>
        </div>
        
        <div className="space-y-2">
          {siteConfig.navigation.components.map((item, index) => {
            const isActive = location.pathname === item.href;
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <NavLink
                  to={item.href}
                  className={cn(
                    "group flex items-start space-x-3 px-4 py-4 rounded-lg transition-all duration-200 border",
                    isActive 
                      ? "bg-accent text-accent-foreground border-border shadow-sm" 
                      : "text-muted-foreground hover:bg-accent/50 hover:text-foreground border-transparent hover:border-border"
                  )}
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <IconComponent className={cn(
                      "w-5 h-5 transition-colors",
                      isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                    )} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">{item.title}</span>
                      <Badge 
                        variant={item.status === "ready" ? "default" : "secondary"}
                        className={cn(
                          "text-xs",
                          item.status === "ready" 
                            ? "bg-foreground text-background" 
                            : "bg-muted text-muted-foreground"
                        )}
                      >
                        {item.status === "ready" ? "Ready" : "Soon"}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </NavLink>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.aside>
  );
};
