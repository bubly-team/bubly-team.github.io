import { motion } from "framer-motion";

export const PageLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Animated Bubbo-style loader */}
        <div className="relative">
          {/* Outer glow */}
          <div className="absolute inset-0 -m-4 bg-gradient-radial from-bubly-violet/30 via-bubly-pink/20 to-transparent blur-2xl animate-breathe" />
          
          {/* Main loader circle */}
          <motion.div
            className="relative w-16 h-16 rounded-full bg-gradient-to-br from-bubly-sky via-bubly-violet to-bubly-pink"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Inner highlight */}
            <div className="absolute inset-2 rounded-full bg-background/90 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-bubly"
                animate={{
                  scale: [1, 0.8, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
          
          {/* Orbiting dots */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-bubly-violet/60"
              style={{
                top: "50%",
                left: "50%",
              }}
              animate={{
                x: [0, Math.cos((i * 120 * Math.PI) / 180) * 30, 0],
                y: [0, Math.sin((i * 120 * Math.PI) / 180) * 30, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        {/* Loading text */}
        <motion.p
          className="text-sm text-muted-foreground font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
};

// Minimal top progress bar
export const TopProgressBar = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-gradient-bubly origin-left"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    />
  );
};

// Subtle shimmer overlay for page transitions
export const PageShimmer = () => {
  return (
    <motion.div
      className="fixed inset-0 z-40 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
};
