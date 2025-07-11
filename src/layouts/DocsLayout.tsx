
import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const DocsLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main 
        className="container mx-auto mt-7 px-4 sm:px-6 lg:px-8 py-8 flex-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
};

export default DocsLayout;