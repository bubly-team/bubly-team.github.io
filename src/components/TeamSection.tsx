import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

// Import Bubbo character images
import bubboThinking from "@/assets/bubbo-thinking.png";
import bubboBusiness from "@/assets/bubbo-business.png";
import bubboVR from "@/assets/bubbo-vr.png";
import bubboArtist from "@/assets/bubbo-artist.png";

const teamMembers = [
    {
        id: "rebecca",
        name: "Rebecca",
        tag: "VISIONARY",
        role: "Product Owner",
        bubboImage: bubboThinking,
        bio: "Strategic mastermind who transforms user insights into groundbreaking features. She sees patterns others miss.",
        specialty: "Product Vision & Roadmap",
        achievements: ["100+ Features Shipped", "User-First Advocate", "Roadmap Architect"],
        color: "#f59e0b",
        accentColor: "#fbbf24",
        gradient: "from-amber-500 via-orange-500 to-yellow-500",
        stats: { Strategy: 95, Insight: 98, Leadership: 92 },
        github: null,
    },
    {
        id: "max",
        name: "Max",
        tag: "AUTOMATOR",
        role: "Project Manager",
        bubboImage: bubboBusiness,
        bio: "Master of deadlines and automation sorcery. If there's a repetitive task, he's already automated it yesterday.",
        specialty: "Sprint Orchestration",
        achievements: ["PMP® Certified", "Zero Delays Record", "Automation Expert"],
        color: "#8b5cf6",
        accentColor: "#a78bfa",
        gradient: "from-violet-500 via-purple-500 to-indigo-600",
        stats: { Agile: 96, Efficiency: 94, Automation: 98 },
        github: "https://github.com/wutiger555",
    },
    {
        id: "lulalabana",
        name: "Lulalabana",
        tag: "ARCHITECT",
        role: "Lead Developer",
        bubboImage: bubboVR,
        bio: "Code wizard who builds the impossible. From backend architecture to pixel-perfect frontends, nothing is out of reach.",
        specialty: "Full-Stack Engineering",
        achievements: ["System Architect", "Code Quality Guardian", "Performance Optimizer"],
        color: "#06b6d4",
        accentColor: "#22d3ee",
        gradient: "from-cyan-400 via-blue-500 to-teal-500",
        stats: { Coding: 99, Architecture: 95, Problem_Solving: 97 },
        github: "https://github.com/lulalabana",
    },
    {
        id: "finn",
        name: "Finn",
        tag: "ALCHEMIST",
        role: "UI/UX Designer",
        bubboImage: bubboArtist,
        bio: "Pixel perfectionist who transforms complex flows into intuitive journeys. Every design tells a story.",
        specialty: "Interface & Experience Design",
        achievements: ["Design System Creator", "UX Researcher", "Animation Master"],
        color: "#ec4899",
        accentColor: "#f472b6",
        gradient: "from-pink-500 via-rose-500 to-fuchsia-500",
        stats: { Design: 98, Creativity: 99, User_Empathy: 94 },
        github: "https://github.com/FinnHsu3002",
    },
];

// Esports-style Player Card
const PlayerCard = ({ member, index, isSelected, onSelect }: {
    member: typeof teamMembers[0];
    index: number;
    isSelected: boolean;
    onSelect: () => void;
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [12, -12]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-12, 12]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            className="relative cursor-pointer perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setIsHovered(true)}
            onClick={onSelect}
            initial={{ opacity: 0, y: 60, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15, type: "spring" }}
        >
            <motion.div
                className="relative h-[520px] w-full rounded-2xl overflow-hidden"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
            >
                {/* Card Base with Gradient Border */}
                <div
                    className="absolute inset-0 rounded-2xl p-[2px]"
                    style={{
                        background: isHovered
                            ? `linear-gradient(135deg, ${member.color}, ${member.accentColor}, ${member.color})`
                            : 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                    }}
                >
                    <div className="h-full w-full rounded-2xl bg-[#0a0a12] relative overflow-hidden">

                        {/* Animated Energy Background */}
                        <div className="absolute inset-0 overflow-hidden">
                            {/* Primary Glow */}
                            <motion.div
                                className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-[80px]"
                                style={{ backgroundColor: member.color }}
                                animate={{
                                    opacity: isHovered ? 0.4 : 0.15,
                                    scale: isHovered ? 1.2 : 1,
                                }}
                                transition={{ duration: 0.5 }}
                            />

                            {/* Scan Line Effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"
                                animate={{
                                    y: ['-100%', '200%'],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                    ease: "linear",
                                }}
                                style={{ height: '50%' }}
                            />

                            {/* Grid Pattern */}
                            <div
                                className="absolute inset-0 opacity-[0.03]"
                                style={{
                                    backgroundImage: `linear-gradient(${member.color}40 1px, transparent 1px), linear-gradient(90deg, ${member.color}40 1px, transparent 1px)`,
                                    backgroundSize: '30px 30px',
                                }}
                            />

                            {/* Energy Particles */}
                            {isHovered && [...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 rounded-full"
                                    style={{ backgroundColor: member.accentColor }}
                                    initial={{
                                        opacity: 0,
                                        x: Math.random() * 300,
                                        y: 400 + Math.random() * 100,
                                    }}
                                    animate={{
                                        opacity: [0, 1, 0],
                                        y: -100,
                                        x: Math.random() * 300,
                                    }}
                                    transition={{
                                        duration: 2 + Math.random(),
                                        repeat: Infinity,
                                        delay: Math.random() * 2,
                                    }}
                                />
                            ))}
                        </div>

                        {/* Top Bar - Tag & Role */}
                        <div className="absolute top-0 left-0 right-0 p-4 z-20 flex justify-between items-start">
                            <div>
                                <motion.span
                                    className="text-[10px] font-black tracking-[0.3em] block mb-1"
                                    style={{ color: member.accentColor }}
                                    animate={{ opacity: [0.7, 1, 0.7] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    [{member.tag}]
                                </motion.span>
                                <span className="text-[11px] font-bold text-white/60 uppercase tracking-widest">
                                    {member.role}
                                </span>
                            </div>

                            {/* GitHub Link */}
                            {member.github && (
                                <a
                                    href={member.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/20 flex items-center justify-center transition-all border border-white/10 hover:border-white/30"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                </a>
                            )}
                        </div>

                        {/* Character - Hero Display */}
                        <div className="absolute top-16 left-0 right-0 h-64 flex items-center justify-center z-10" style={{ transform: "translateZ(40px)" }}>
                            <motion.div
                                className="relative"
                                animate={{
                                    y: [0, -12, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.5,
                                }}
                            >
                                {/* Character Shadow */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/40 rounded-full blur-xl" />

                                {/* Character Glow Ring */}
                                <motion.div
                                    className="absolute inset-0 rounded-full"
                                    style={{
                                        background: `radial-gradient(circle, ${member.color}40 0%, transparent 70%)`,
                                    }}
                                    animate={isHovered ? { scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] } : {}}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />

                                <motion.img
                                    src={member.bubboImage}
                                    alt={member.name}
                                    className="w-52 h-52 object-contain relative z-10"
                                    style={{
                                        filter: `drop-shadow(0 0 30px ${member.color}60)`,
                                    }}
                                    animate={isHovered ? {
                                        scale: 1.12,
                                        filter: `drop-shadow(0 0 50px ${member.color}90)`,
                                    } : {
                                        scale: 1,
                                        filter: `drop-shadow(0 0 30px ${member.color}60)`,
                                    }}
                                    transition={{ duration: 0.4 }}
                                />
                            </motion.div>
                        </div>

                        {/* Player Info Panel */}
                        <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                            {/* Glass Panel */}
                            <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-4 relative overflow-hidden">
                                {/* Accent Line Top */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-[2px]"
                                    style={{ background: `linear-gradient(90deg, transparent, ${member.color}, transparent)` }}
                                />

                                {/* Name & Specialty */}
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h3 className="text-2xl font-black text-white tracking-tight">{member.name}</h3>
                                        <p className="text-xs font-medium text-white/50">{member.specialty}</p>
                                    </div>
                                </div>

                                {/* Stats HUD */}
                                <div className="space-y-2 mb-3">
                                    {Object.entries(member.stats).map(([key, value], i) => (
                                        <div key={key} className="flex items-center gap-2">
                                            <span className="text-[10px] font-bold text-white/40 w-24 uppercase tracking-wider">
                                                {key.replace('_', ' ')}
                                            </span>
                                            <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full rounded-full relative"
                                                    style={{
                                                        background: `linear-gradient(90deg, ${member.color}, ${member.accentColor})`,
                                                    }}
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${value}%` }}
                                                    transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                                                />
                                            </div>
                                            <span className="text-[10px] font-bold text-white/60 w-8 text-right">{value}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Achievement Badges */}
                                <div className="flex flex-wrap gap-1.5">
                                    {member.achievements.slice(0, 2).map((ach, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 rounded text-[9px] font-bold uppercase tracking-wide bg-white/5 border border-white/10 text-white/70"
                                        >
                                            {ach}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Holographic Shine */}
                        <motion.div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: `linear-gradient(105deg, transparent 40%, ${member.accentColor}20 45%, ${member.accentColor}40 50%, ${member.accentColor}20 55%, transparent 60%)`,
                            }}
                            animate={isHovered ? {
                                x: ['-100%', '200%'],
                            } : {}}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// Main Section
export const TeamSection = ({ className = "" }: { className?: string }) => {
    const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

    return (
        <section className={`py-24 md:py-36 overflow-hidden relative ${className}`} style={{ background: 'linear-gradient(180deg, #030305 0%, #0a0a12 50%, #030305 100%)' }}>
            {/* Epic Background Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Central Team Logo Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10">
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-violet-500 via-transparent to-cyan-500 blur-[120px]" />
                </div>

                {/* Perspective Grid */}
                <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(120, 100, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 100, 255, 0.3) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                        transform: 'perspective(500px) rotateX(60deg) translateY(100px) scale(2.5)',
                        transformOrigin: 'center top',
                    }}
                />

                {/* Floating Orbs */}
                <motion.div
                    className="absolute top-20 left-[10%] w-3 h-3 rounded-full bg-violet-400/60"
                    animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                    className="absolute top-40 right-[15%] w-2 h-2 rounded-full bg-cyan-400/60"
                    animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                    className="absolute bottom-40 left-[20%] w-2 h-2 rounded-full bg-pink-400/60"
                    animate={{ y: [0, -25, 0], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Live Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                            Team Roster • Active
                        </span>
                    </div>

                    {/* Title with Gradient */}
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
                        <span className="block">DEVELOPMENT</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
                            SQUAD
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        The elite team crafting the future of <span className="text-white font-medium">Bubly</span>.
                        <br className="hidden md:block" />
                        Strategy. Code. Design. Execution.
                    </p>
                </motion.div>

                {/* Player Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <PlayerCard
                            key={member.id}
                            member={member}
                            index={index}
                            isSelected={selectedMember?.id === member.id}
                            onSelect={() => setSelectedMember(member)}
                        />
                    ))}
                </div>

                {/* Team Stats Bar */}
                <motion.div
                    className="mt-16 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 p-6 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-sm">
                        {[
                            { label: "Team Synergy", value: "99%", icon: "🔥" },
                            { label: "Code Quality", value: "A+", icon: "⚡" },
                            { label: "Creativity", value: "∞", icon: "✨" },
                            { label: "Ship Speed", value: "FAST", icon: "🚀" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                className="text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 + i * 0.1 }}
                            >
                                <span className="text-2xl mb-1 block">{stat.icon}</span>
                                <span className="text-2xl md:text-3xl font-black text-white block">{stat.value}</span>
                                <span className="text-[10px] text-white/40 uppercase tracking-widest">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TeamSection;
