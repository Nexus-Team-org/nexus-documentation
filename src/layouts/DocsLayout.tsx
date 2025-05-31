
import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";

export const DocsLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <motion.main 
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </motion.main>
    </div>
  );
};
