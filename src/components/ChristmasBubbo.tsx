import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Christmas Bubbo poses
import bubboXmasDeer from "@/assets/bubbo-xmas-deer.png";
import bubboXmasSanta from "@/assets/bubbo-xmas-santa.png";
import bubboXmasSocks from "@/assets/bubbo-xmas-socks.png";
import bubboXmasTree from "@/assets/bubbo-xmas-tree.png";
import bubboXmasGift from "@/assets/bubbo-xmas-gift.png";

const christmasBubbos = [
  { id: "santa", src: bubboXmasSanta, label: "聖誕老人 Bubbo" },
  { id: "deer", src: bubboXmasDeer, label: "麋鹿 Bubbo" },
  { id: "gift", src: bubboXmasGift, label: "送禮 Bubbo" },
  { id: "tree", src: bubboXmasTree, label: "聖誕樹 Bubbo" },
  { id: "socks", src: bubboXmasSocks, label: "聖誕襪 Bubbo" },
];

// Snowflake component
const Snowflake = ({ delay, duration, left }: { delay: number; duration: number; left: number }) => (
  <motion.div
    className="absolute text-white/60 pointer-events-none select-none"
    initial={{ y: -20, x: left, opacity: 0 }}
    animate={{ 
      y: "100vh", 
      opacity: [0, 1, 1, 0],
      rotate: [0, 360]
    }}
    transition={{ 
      duration, 
      delay, 
      repeat: Infinity,
      ease: "linear"
    }}
    style={{ left: `${left}%` }}
  >
    ❄
  </motion.div>
);

// Snowfall effect
export const Snowfall = () => {
  const snowflakes = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    delay: Math.random() * 10,
    duration: 8 + Math.random() * 8,
    left: Math.random() * 100,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((flake) => (
        <Snowflake key={flake.id} {...flake} />
      ))}
    </div>
  );
};

// Christmas Banner with rotating Bubbo
export const ChristmasBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % christmasBubbos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="fixed top-20 left-1/2 -translate-x-1/2 z-40 px-6 py-3 rounded-full glass border border-white/20 shadow-xl backdrop-blur-xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="flex items-center gap-4">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={christmasBubbos[currentIndex].src}
            alt="Christmas Bubbo"
            className="w-10 h-10 object-contain"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
        <span className="text-sm font-medium bg-gradient-to-r from-red-400 via-green-400 to-red-400 bg-clip-text text-transparent animate-pulse">
          🎄 Merry Christmas! 🎅
        </span>
      </div>
    </motion.div>
  );
};

// Interactive Christmas Bubbo Gallery
export const ChristmasBubboGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Main display */}
      <motion.div 
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="absolute inset-0 -m-8 bg-gradient-radial from-red-500/20 via-green-500/10 to-transparent blur-3xl animate-pulse" />
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedIndex}
            src={christmasBubbos[selectedIndex].src}
            alt={christmasBubbos[selectedIndex].label}
            className="w-48 h-48 object-contain relative z-10 drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
      </motion.div>

      {/* Selector dots */}
      <div className="flex gap-3">
        {christmasBubbos.map((bubbo, index) => (
          <motion.button
            key={bubbo.id}
            onClick={() => setSelectedIndex(index)}
            className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all ${
              index === selectedIndex 
                ? "border-red-400 shadow-lg shadow-red-400/30 scale-110" 
                : "border-white/20 opacity-60 hover:opacity-100"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={bubbo.src} alt={bubbo.label} className="w-full h-full object-contain p-1" />
          </motion.button>
        ))}
      </div>
      
      <motion.p 
        className="text-sm font-medium text-muted-foreground"
        key={selectedIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {christmasBubbos[selectedIndex].label}
      </motion.p>
    </div>
  );
};

// Hero Christmas Bubbo that follows cursor
export const ChristmasFollowBubbo = ({ size = "xl" }: { size?: "md" | "lg" | "xl" }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const sizeClasses = {
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-48 h-48",
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 50;
      const y = (e.clientY - window.innerHeight / 2) / 50;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-rotate through Christmas poses
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % christmasBubbos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="relative"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        rotateY: mousePosition.x * 2,
        rotateX: -mousePosition.y * 2,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {/* Christmas glow */}
      <div className="absolute inset-0 -m-8 bg-gradient-radial from-red-500/25 via-green-500/15 to-transparent blur-3xl animate-breathe" />
      
      {/* Sparkles */}
      <motion.div
        className="absolute -top-4 -right-4 text-2xl"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ⭐
      </motion.div>
      
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={christmasBubbos[currentIndex].src}
          alt="Christmas Bubbo"
          className={`${sizeClasses[size]} object-contain drop-shadow-[0_30px_60px_rgba(220,38,38,0.3)] transition-all duration-300`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>
    </motion.div>
  );
};
