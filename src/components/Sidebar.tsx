
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Download, 
  Puzzle, 
  Code, 
  History,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    title: "Overview",
    href: "/",
    icon: BookOpen,
  },
  {
    title: "Getting Started",
    href: "/getting-started",
    icon: Download,
  },
  {
    title: "Installation",
    href: "/installation",
    icon: Download,
  },
  {
    title: "Components",
    href: "/components",
    icon: Puzzle,
  },
  {
    title: "Examples",
    href: "/examples",
    icon: Code,
  },
  {
    title: "Changelog",
    href: "/changelog",
    icon: History,
  },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <motion.aside 
      className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-72 bg-white border-r border-slate-200 overflow-y-auto"
      initial={{ x: -288 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="p-6">
        <div className="space-y-2">
          {navigationItems.map((item, index) => {
            const isActive = location.pathname === item.href;
            
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <NavLink
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group",
                    isActive 
                      ? "bg-purple-50 text-purple-700 shadow-sm border border-purple-200" 
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <item.icon className={cn(
                    "w-5 h-5 transition-colors",
                    isActive ? "text-purple-600" : "text-slate-400 group-hover:text-slate-600"
                  )} />
                  <span className="font-medium">{item.title}</span>
                  {isActive && (
                    <motion.div
                      className="ml-auto"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="w-4 h-4 text-purple-600" />
                    </motion.div>
                  )}
                </NavLink>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.aside>
  );
};
