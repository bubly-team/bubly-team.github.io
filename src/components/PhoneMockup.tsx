import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PhoneMockupProps {
  children?: ReactNode;
  image?: string;
  className?: string;
}

export const PhoneMockup = ({ children, image, className }: PhoneMockupProps) => {
  return (
    <div className={cn("relative", className)}>
      {/* Phone frame */}
      <div className="relative mx-auto w-[280px] h-[580px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
        {/* Inner bezel */}
        <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20" />
          
          {/* Screen content */}
          <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
            {image ? (
              <img 
                src={image} 
                alt="App screenshot" 
                className="w-full h-full object-cover object-top"
              />
            ) : (
              children
            )}
          </div>
        </div>
        
        {/* Side button */}
        <div className="absolute -right-1 top-32 w-1 h-12 bg-gray-700 rounded-r-sm" />
        <div className="absolute -left-1 top-24 w-1 h-8 bg-gray-700 rounded-l-sm" />
        <div className="absolute -left-1 top-36 w-1 h-12 bg-gray-700 rounded-l-sm" />
      </div>
    </div>
  );
};
