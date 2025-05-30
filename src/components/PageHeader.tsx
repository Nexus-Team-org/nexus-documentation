import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
  gradient?: boolean;
  centered?: boolean;
  showPattern?: boolean;
}

export function PageHeader({
  title,
  description,
  children,
  gradient = false,
  centered = false,
  showPattern = true,
}: PageHeaderProps) {
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

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      {showPattern && (
        <motion.div 
          className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1.5 }}
        />
      )}
      
      {/* Background elements removed */}
      
      {/* Content */}
      <motion.div 
        className={`container mx-auto px-4 py-16 md:py-24 relative z-10 ${centered ? 'text-center' : ''}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-12" variants={itemVariants}>
          <motion.span 
            className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4 border border-primary/20 bg-glass"
            whileHover={{ scale: 1.05 }}
          >
            Documentation
          </motion.span>
          <motion.h1 
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 ${gradient ? 'text-gradient' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {description}
            </motion.p>
          )}
        </motion.div>
        
        {children && (
          <motion.div variants={itemVariants}>
            {children}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
