
import { Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.header 
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <h1 className="text-xl font-bold text-slate-900">Nexus UI</h1>
          <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded-full">v1.0.0</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden md:flex items-center space-x-2">
            <Star className="w-4 h-4" />
            <span>Star on GitHub</span>
          </Button>
          <Button variant="ghost" size="sm">
            <Github className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </motion.header>
  );
};
