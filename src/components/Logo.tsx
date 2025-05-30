import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
  variant?: 'default' | 'minimal';
}

export const Logo = ({ size = 'md', withText = true, variant = 'default' }: LogoProps) => {
  const sizes = {
    sm: { logo: 24, text: 'text-lg' },
    md: { logo: 32, text: 'text-xl' },
    lg: { logo: 48, text: 'text-2xl' },
  };

  const logoVariants = {
    hover: {
      rotate: [0, -10, 10, -10, 0],
      scale: [1, 1.05, 1.05, 1.05, 1],
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const textVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };
  
  // Animated gradient colors for the logo
  const gradientAnimation = {
    initial: {
      backgroundPosition: '0% 50%',
    },
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: {
        duration: 10,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div 
      className="flex items-center gap-2 group"
      whileHover="hover"
    >
      <motion.div
        className="relative"
        variants={logoVariants}
      >
        {variant === 'default' && (
          <motion.div 
            className="absolute inset-0 bg-primary/30 rounded-full blur-xl transform scale-150"
            animate={{
              scale: [1.4, 1.6, 1.4],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        )}
        
        <motion.div 
          className={`relative flex items-center justify-center w-${sizes[size].logo / 8} h-${sizes[size].logo / 8} rounded-full overflow-hidden`}
          initial="initial"
          animate="animate"
          variants={gradientAnimation}
          style={{
            backgroundImage: 'var(--gradient-primary)',
            backgroundSize: '200% 200%'
          }}
        >
          <svg 
            width={sizes[size].logo * 0.7} 
            height={sizes[size].logo * 0.7} 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <motion.path 
              d="M12 2L4 7V17L12 22L20 17V7L12 2Z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.path 
              d="M12 22V12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            />
            <motion.path 
              d="M12 12L20 7" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
            />
            <motion.path 
              d="M12 12L4 7" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.9, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      </motion.div>
      
      {withText && (
        <motion.span 
          className={`font-bold text-gradient ${sizes[size].text}`}
          variants={textVariants}
          initial="initial"
          animate="animate"
          style={{
            backgroundSize: '200% auto'
          }}
        >
          Nexus
        </motion.span>
      )}
    </motion.div>
  );
};
