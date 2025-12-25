import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
}

export const PhoneMockup = ({ children, className }: PhoneMockupProps) => {
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
            {children}
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

// App screen mockups
export const ContactsScreen = () => (
  <div className="h-full pt-12 pb-4 px-4 bg-gradient-to-b from-background to-muted/30">
    {/* Status bar placeholder */}
    <div className="flex justify-between items-center px-2 mb-6 text-xs text-muted-foreground">
      <span>9:41</span>
      <div className="flex gap-1">
        <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
        <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
        <div className="w-6 h-3 bg-green-500 rounded-sm" />
      </div>
    </div>
    
    {/* Header */}
    <div className="mb-6">
      <h2 className="text-xl font-bold gradient-text mb-1">My Contacts</h2>
      <p className="text-xs text-muted-foreground">12 connections</p>
    </div>
    
    {/* Search bar */}
    <div className="mb-4 px-3 py-2 bg-muted/50 rounded-xl flex items-center gap-2">
      <div className="w-4 h-4 rounded-full bg-muted-foreground/30" />
      <span className="text-xs text-muted-foreground">Search contacts...</span>
    </div>
    
    {/* Contact groups */}
    <div className="space-y-3">
      <div className="flex gap-2">
        <span className="px-3 py-1 bg-bubly-sky/20 text-bubly-sky text-xs rounded-full">Family</span>
        <span className="px-3 py-1 bg-bubly-violet/20 text-bubly-violet text-xs rounded-full">Friends</span>
        <span className="px-3 py-1 bg-bubly-pink/20 text-bubly-pink text-xs rounded-full">Work</span>
      </div>
    </div>
    
    {/* Contact list */}
    <div className="mt-4 space-y-2">
      {[
        { name: "Sarah Chen", tag: "Family", color: "bg-bubly-sky" },
        { name: "Mike Johnson", tag: "Friend", color: "bg-bubly-violet" },
        { name: "Emma Davis", tag: "Work", color: "bg-bubly-pink" },
        { name: "David Kim", tag: "Friend", color: "bg-bubly-violet" },
      ].map((contact, i) => (
        <div key={i} className="flex items-center gap-3 p-3 bg-card/80 rounded-xl border border-border/50">
          <div className={`w-10 h-10 rounded-full ${contact.color}/30 flex items-center justify-center text-sm font-medium`}>
            {contact.name[0]}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">{contact.name}</p>
            <p className="text-xs text-muted-foreground">{contact.tag}</p>
          </div>
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
      ))}
    </div>
  </div>
);

export const GreetingScreen = () => (
  <div className="h-full pt-12 pb-4 px-4 bg-gradient-to-b from-background to-muted/30">
    {/* Status bar */}
    <div className="flex justify-between items-center px-2 mb-6 text-xs text-muted-foreground">
      <span>9:41</span>
      <div className="flex gap-1">
        <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
        <div className="w-6 h-3 bg-green-500 rounded-sm" />
      </div>
    </div>
    
    {/* Header */}
    <div className="mb-6">
      <h2 className="text-xl font-bold gradient-text mb-1">AI Greetings</h2>
      <p className="text-xs text-muted-foreground">Generate personalized messages</p>
    </div>
    
    {/* Recipient */}
    <div className="mb-4 p-3 bg-card/80 rounded-xl border border-border/50">
      <p className="text-xs text-muted-foreground mb-1">Sending to</p>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-bubly-sky/30 flex items-center justify-center text-xs font-medium">S</div>
        <span className="text-sm font-medium">Sarah Chen</span>
      </div>
    </div>
    
    {/* Occasion selector */}
    <div className="mb-4">
      <p className="text-xs text-muted-foreground mb-2">Occasion</p>
      <div className="flex gap-2 flex-wrap">
        <span className="px-3 py-1.5 bg-gradient-bubly text-white text-xs rounded-full">Birthday 🎂</span>
        <span className="px-3 py-1.5 bg-muted text-muted-foreground text-xs rounded-full">Holiday</span>
        <span className="px-3 py-1.5 bg-muted text-muted-foreground text-xs rounded-full">Thank you</span>
      </div>
    </div>
    
    {/* Generated message */}
    <div className="p-4 bg-gradient-to-br from-bubly-sky/10 via-bubly-violet/10 to-bubly-pink/10 rounded-2xl border border-white/20">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">✨</span>
        <span className="text-xs font-medium text-primary">AI Generated</span>
      </div>
      <p className="text-sm leading-relaxed">
        "Happy Birthday, Sarah! 🎉 Wishing you a day filled with joy, laughter, and all the love you deserve. May this year bring you closer to your dreams!"
      </p>
      <div className="mt-4 flex gap-2">
        <button className="flex-1 py-2 bg-gradient-bubly text-white text-xs font-medium rounded-xl">
          Copy
        </button>
        <button className="flex-1 py-2 bg-muted text-muted-foreground text-xs font-medium rounded-xl">
          Regenerate
        </button>
      </div>
    </div>
  </div>
);

export const RemindersScreen = () => (
  <div className="h-full pt-12 pb-4 px-4 bg-gradient-to-b from-background to-muted/30">
    {/* Status bar */}
    <div className="flex justify-between items-center px-2 mb-6 text-xs text-muted-foreground">
      <span>9:41</span>
      <div className="flex gap-1">
        <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
        <div className="w-6 h-3 bg-green-500 rounded-sm" />
      </div>
    </div>
    
    {/* Header */}
    <div className="mb-6">
      <h2 className="text-xl font-bold gradient-text mb-1">Reminders</h2>
      <p className="text-xs text-muted-foreground">Upcoming moments</p>
    </div>
    
    {/* Today section */}
    <div className="mb-4">
      <p className="text-xs font-medium text-primary mb-3">Today</p>
      <div className="p-4 bg-gradient-to-r from-bubly-pink/20 to-bubly-violet/20 rounded-2xl border border-bubly-pink/30">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-bubly-pink/30 flex items-center justify-center text-lg">
            🎂
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Sarah's Birthday</p>
            <p className="text-xs text-muted-foreground">Send her a special message!</p>
          </div>
        </div>
        <button className="mt-3 w-full py-2 bg-gradient-bubly text-white text-xs font-medium rounded-xl">
          Create Greeting
        </button>
      </div>
    </div>
    
    {/* Upcoming */}
    <div>
      <p className="text-xs font-medium text-muted-foreground mb-3">This Week</p>
      <div className="space-y-2">
        {[
          { icon: "💼", title: "Mike's Work Anniversary", date: "Dec 28" },
          { icon: "🎄", title: "Christmas Greetings", date: "Dec 25" },
          { icon: "🎊", title: "New Year's Eve", date: "Dec 31" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 p-3 bg-card/80 rounded-xl border border-border/50">
            <span className="text-lg">{item.icon}</span>
            <div className="flex-1">
              <p className="text-sm font-medium">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
