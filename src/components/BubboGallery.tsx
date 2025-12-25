import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Import all Bubbo variants
import bubboCool from "@/assets/bubbo-cool.png";
import bubboMusic from "@/assets/bubbo-music.png";
import bubboVr from "@/assets/bubbo-vr.png";
import bubboSprout from "@/assets/bubbo-sprout.png";
import bubboCurious from "@/assets/bubbo-curious.png";
import bubboSport from "@/assets/bubbo-sport.png";
import bubboArtist from "@/assets/bubbo-artist.png";
import bubboBusiness from "@/assets/bubbo-business.png";
import bubboProfessor from "@/assets/bubbo-professor.png";

// Christmas Bubbos
import bubboXmasSanta from "@/assets/bubbo-xmas-santa.png";
import bubboXmasDeer from "@/assets/bubbo-xmas-deer.png";
import bubboXmasGift from "@/assets/bubbo-xmas-gift.png";
import bubboXmasTree from "@/assets/bubbo-xmas-tree.png";
import bubboXmasSocks from "@/assets/bubbo-xmas-socks.png";

const bubboVariants = [
  { id: "cool", image: bubboCool, label: "Cool", trait: "Always stylish" },
  { id: "music", image: bubboMusic, label: "Groovy", trait: "Rhythm lover" },
  { id: "vr", image: bubboVr, label: "Techy", trait: "Future explorer" },
  { id: "sprout", image: bubboSprout, label: "Fresh", trait: "Full of life" },
  { id: "curious", image: bubboCurious, label: "Curious", trait: "Wonder seeker" },
  { id: "sport", image: bubboSport, label: "Active", trait: "Health champion" },
  { id: "artist", image: bubboArtist, label: "Creative", trait: "Imagination unlimited" },
  { id: "business", image: bubboBusiness, label: "Pro", trait: "Always reliable" },
  { id: "professor", image: bubboProfessor, label: "Wise", trait: "Knowledge keeper" },
  // Christmas special
  { id: "xmas-santa", image: bubboXmasSanta, label: "Santa", trait: "Holiday spirit", special: true },
  { id: "xmas-deer", image: bubboXmasDeer, label: "Reindeer", trait: "Jingle bells", special: true },
  { id: "xmas-gift", image: bubboXmasGift, label: "Gifter", trait: "Giving joy", special: true },
  { id: "xmas-tree", image: bubboXmasTree, label: "Festive", trait: "Party ready", special: true },
  { id: "xmas-socks", image: bubboXmasSocks, label: "Cozy", trait: "Warm wishes", special: true },
];

export const BubboGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto rotate when not hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % bubboVariants.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="relative">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-radial from-bubly-violet/8 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground/60 mb-4">
            Meet Your Companion
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">
            Find Your <span className="gradient-text">Bubbo</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-base leading-relaxed">
            Every personality deserves a perfect companion. 
            Choose the one that resonates with you.
          </p>
        </div>

        {/* Main showcase */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Orbital display */}
          <div className="relative flex justify-center items-center min-h-[400px] md:min-h-[500px]">
            
            {/* Center featured Bubbo */}
            <div className="relative z-10">
              {/* Soft ambient glow */}
              <div className="absolute inset-0 -m-12 bg-gradient-to-br from-bubly-sky/15 via-bubly-violet/10 to-bubly-pink/15 rounded-full blur-3xl animate-breathe" />
              
              {/* Featured Bubbo */}
              <div className="relative w-44 h-44 md:w-56 md:h-56">
                {bubboVariants.map((variant, index) => (
                  <img
                    key={variant.id}
                    src={variant.image}
                    alt={variant.label}
                    className={cn(
                      "absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-out",
                      "drop-shadow-[0_20px_50px_rgba(167,139,250,0.25)]",
                      index === activeIndex 
                        ? "opacity-100 scale-100 animate-float-gentle" 
                        : "opacity-0 scale-95 blur-sm"
                    )}
                  />
                ))}
              </div>

              {/* Label below */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center w-48">
                <p className="text-xl font-semibold text-foreground tracking-wide transition-all duration-500">
                  {bubboVariants[activeIndex].label}
                </p>
                <p className="text-sm text-muted-foreground/70 mt-1 italic">
                  {bubboVariants[activeIndex].trait}
                </p>
              </div>
            </div>

            {/* Orbiting Bubbos */}
            <div className="absolute inset-0 flex items-center justify-center">
              {bubboVariants.map((variant, index) => {
                const angle = (index / bubboVariants.length) * 360 - 90;
                const radius = 180; // px from center
                const radiusMd = 220;
                
                return (
                  <button
                    key={variant.id}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "absolute transition-all duration-500 ease-out",
                      "hover:scale-125 focus:outline-none focus:scale-125",
                      index === activeIndex ? "opacity-0 scale-0" : "opacity-100"
                    )}
                    style={{
                      transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
                    }}
                  >
                    <div className="hidden md:block" style={{
                      transform: `rotate(${angle}deg) translateX(${radiusMd - radius}px) rotate(-${angle}deg)`,
                    }}>
                      <img
                        src={variant.image}
                        alt={variant.label}
                        className={cn(
                          "w-14 h-14 md:w-16 md:h-16 object-contain transition-all duration-500",
                          "opacity-40 hover:opacity-90",
                          "drop-shadow-[0_8px_20px_rgba(167,139,250,0.15)]",
                          "hover:drop-shadow-[0_12px_30px_rgba(167,139,250,0.3)]"
                        )}
                      />
                    </div>
                    <div className="md:hidden">
                      <img
                        src={variant.image}
                        alt={variant.label}
                        className={cn(
                          "w-12 h-12 object-contain transition-all duration-500",
                          "opacity-40 hover:opacity-90",
                          "drop-shadow-[0_8px_20px_rgba(167,139,250,0.15)]"
                        )}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center gap-2 mt-20">
            {bubboVariants.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "h-0.5 rounded-full transition-all duration-500",
                  index === activeIndex 
                    ? "w-8 bg-gradient-to-r from-bubly-sky via-bubly-violet to-bubly-pink" 
                    : "w-2 bg-muted-foreground/20 hover:bg-muted-foreground/40"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Floating Bubbos for decoration - more subtle
export const FloatingBubbos = () => {
  const decorBubbos = [
    { image: bubboCool, delay: 0, position: "top-24 left-[8%]", size: "w-10 h-10", opacity: "opacity-[0.08]" },
    { image: bubboMusic, delay: 2.5, position: "top-36 right-[12%]", size: "w-8 h-8", opacity: "opacity-[0.06]" },
    { image: bubboSprout, delay: 4, position: "bottom-40 left-[15%]", size: "w-12 h-12", opacity: "opacity-[0.07]" },
    { image: bubboArtist, delay: 1.5, position: "bottom-28 right-[8%]", size: "w-9 h-9", opacity: "opacity-[0.05]" },
  ];

  return (
    <>
      {decorBubbos.map((bubbo, index) => (
        <div
          key={index}
          className={cn(
            "absolute pointer-events-none transition-opacity duration-1000",
            bubbo.position,
            bubbo.size,
            bubbo.opacity
          )}
        >
          <img
            src={bubbo.image}
            alt=""
            className="w-full h-full object-contain animate-float-gentle blur-[0.5px]"
            style={{ animationDelay: `${bubbo.delay}s` }}
          />
        </div>
      ))}
    </>
  );
};
