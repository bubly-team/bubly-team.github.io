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

const bubboVariants = [
  { id: "cool", image: bubboCool, label: "酷酷 Bubbo", description: "隨時保持帥氣" },
  { id: "music", image: bubboMusic, label: "音樂 Bubbo", description: "跟著節奏搖擺" },
  { id: "vr", image: bubboVr, label: "科技 Bubbo", description: "探索未來世界" },
  { id: "sprout", image: bubboSprout, label: "萌芽 Bubbo", description: "充滿生機活力" },
  { id: "curious", image: bubboCurious, label: "好奇 Bubbo", description: "對一切感興趣" },
  { id: "sport", image: bubboSport, label: "運動 Bubbo", description: "熱愛健康生活" },
  { id: "artist", image: bubboArtist, label: "藝術 Bubbo", description: "創意無限大" },
  { id: "business", image: bubboBusiness, label: "商務 Bubbo", description: "專業又可靠" },
  { id: "professor", image: bubboProfessor, label: "教授 Bubbo", description: "智慧的象徵" },
];

export const BubboGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto rotate when not hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % bubboVariants.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="relative py-16">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-bubly-violet/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-4 tracking-wide uppercase animate-fade-in">
            Meet The Bubbos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            每個人都有專屬的 <span className="gradient-text">Bubbo</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            選擇最適合你的 Bubbo 夥伴，讓它陪伴你維繫每一份珍貴的關係
          </p>
        </div>

        {/* Main showcase */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Center featured Bubbo */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              {/* Animated glow rings */}
              <div className="absolute inset-0 -m-8 rounded-full bg-gradient-to-br from-bubly-sky/20 via-bubly-violet/20 to-bubly-pink/20 blur-3xl animate-breathe" />
              <div className="absolute inset-0 -m-16 rounded-full border border-bubly-violet/10 animate-spin-slow" style={{ animationDuration: "20s" }} />
              <div className="absolute inset-0 -m-24 rounded-full border border-bubly-sky/5 animate-spin-slow" style={{ animationDuration: "30s", animationDirection: "reverse" }} />
              
              {/* Featured Bubbo */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 transition-all duration-700">
                {bubboVariants.map((variant, index) => (
                  <img
                    key={variant.id}
                    src={variant.image}
                    alt={variant.label}
                    className={cn(
                      "absolute inset-0 w-full h-full object-contain transition-all duration-700 drop-shadow-[0_20px_40px_rgba(167,139,250,0.3)]",
                      index === activeIndex 
                        ? "opacity-100 scale-100 animate-float-gentle" 
                        : "opacity-0 scale-90"
                    )}
                  />
                ))}
              </div>

              {/* Label */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center">
                <p className="font-semibold text-lg gradient-text transition-all duration-500">
                  {bubboVariants[activeIndex].label}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {bubboVariants[activeIndex].description}
                </p>
              </div>
            </div>
          </div>

          {/* Bubbo selector carousel */}
          <div className="flex justify-center gap-3 md:gap-4 flex-wrap mt-16">
            {bubboVariants.map((variant, index) => (
              <button
                key={variant.id}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "relative w-16 h-16 md:w-20 md:h-20 rounded-2xl transition-all duration-500 group",
                  "hover:scale-110 hover:-translate-y-1",
                  index === activeIndex 
                    ? "scale-105 ring-2 ring-primary ring-offset-2 ring-offset-background shadow-lg shadow-primary/20" 
                    : "glass hover:bg-white/20"
                )}
              >
                <img
                  src={variant.image}
                  alt={variant.label}
                  className={cn(
                    "w-full h-full object-contain p-1 transition-all duration-500",
                    index === activeIndex ? "animate-wiggle" : "group-hover:scale-105"
                  )}
                />
                {/* Active indicator dot */}
                {index === activeIndex && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Floating Bubbos for decoration
export const FloatingBubbos = () => {
  const decorBubbos = [
    { image: bubboCool, delay: 0, position: "top-20 left-[10%]", size: "w-12 h-12" },
    { image: bubboMusic, delay: 2, position: "top-40 right-[15%]", size: "w-10 h-10" },
    { image: bubboSprout, delay: 4, position: "bottom-32 left-[20%]", size: "w-14 h-14" },
    { image: bubboArtist, delay: 1, position: "bottom-20 right-[10%]", size: "w-11 h-11" },
  ];

  return (
    <>
      {decorBubbos.map((bubbo, index) => (
        <div
          key={index}
          className={cn(
            "absolute pointer-events-none opacity-20 hover:opacity-40 transition-opacity duration-500",
            bubbo.position,
            bubbo.size
          )}
          style={{ animationDelay: `${bubbo.delay}s` }}
        >
          <img
            src={bubbo.image}
            alt=""
            className="w-full h-full object-contain animate-float-gentle"
            style={{ animationDelay: `${bubbo.delay}s` }}
          />
        </div>
      ))}
    </>
  );
};
