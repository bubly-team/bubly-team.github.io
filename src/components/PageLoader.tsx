import { motion } from "framer-motion";
import bubboLoading from "@/assets/bubbo-loading.png";

export const PageLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Bubbo Loading Animation */}
        <div className="relative">
          {/* Ambient glow rings */}
          <motion.div
            className="absolute inset-0 -m-8 rounded-full bg-gradient-radial from-bubly-violet/30 via-bubly-pink/15 to-transparent blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Outer orbit ring */}
          <motion.div
            className="absolute inset-0 -m-6 rounded-full border border-bubly-violet/20"
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Orbiting dot */}
            <motion.div
              className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-bubly-violet/60"
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          
          {/* Inner orbit ring */}
          <motion.div
            className="absolute inset-0 -m-3 rounded-full border border-bubly-pink/15"
            animate={{ rotate: -360 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Bubbo image with breathing animation */}
          <motion.div
            className="relative"
            animate={{
              y: [0, -8, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.img
              src={bubboLoading}
              alt="Loading..."
              className="w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-[0_10px_30px_rgba(167,139,250,0.4)]"
              animate={{
                filter: [
                  "drop-shadow(0 10px 30px rgba(167,139,250,0.4))",
                  "drop-shadow(0 15px 40px rgba(167,139,250,0.6))",
                  "drop-shadow(0 10px 30px rgba(167,139,250,0.4))",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          
          {/* Floating Z's animation */}
          <div className="absolute -top-2 -right-2">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="absolute text-bubly-violet/60 font-bold"
                style={{
                  fontSize: `${10 + i * 4}px`,
                  right: `${i * 8}px`,
                  top: `${i * -10}px`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [10, -10, -20],
                  x: [0, 5, 10],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeOut",
                }}
              >
                z
              </motion.span>
            ))}
          </div>
          
          {/* Sparkle particles */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-bubly-sky"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        {/* Loading text with gradient */}
        <motion.div
          className="flex items-center gap-1"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm font-medium gradient-text">Loading</span>
          <motion.span className="flex gap-0.5">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-1 h-1 rounded-full bg-bubly-violet"
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.span>
        </motion.div>
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
