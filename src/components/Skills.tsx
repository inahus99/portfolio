import { motion } from 'framer-motion';
import { Code2, Braces, Cloud, Layers, Blocks, Box, Share2, Bot, Database, HardDrive, Shield, KeyRound, Globe, Mail, GitBranch, Terminal, Network, Workflow, DatabaseZap, Lock, MonitorPlay, BrainCircuit } from 'lucide-react';

const skills = [
    { name: "JavaScript", icon: Braces, type: "Core" },
    { name: "React", icon: Code2, type: "Core" },
    { name: "Node.js", icon: ServerIcon, type: "Core" },
    { name: "Express.js", icon: Cloud, type: "Core" },
    { name: "WebSockets", icon: Network, type: "Core" },

    { name: "Mantine UI", icon: Layers, type: "UI" },
    { name: "Chakra UI", icon: Blocks, type: "UI" },
    { name: "Tailwind CSS", icon: Box, type: "UI" },
    { name: "Framer Motion", icon: MonitorPlay, type: "UI" },

    { name: "Socket.io", icon: Share2, type: "Realtime" },
    { name: "Puppeteer", icon: Bot, type: "Automation" },
    { name: "n8n", icon: Workflow, type: "Automation" },
    { name: "Gemini API", icon: BrainCircuit, type: "AI" },

    { name: "MongoDB", icon: Database, type: "Database" },
    { name: "Supabase", icon: DatabaseZap, type: "Database" },
    { name: "Redis", icon: HardDrive, type: "Cache" },

    { name: "Helmet", icon: Shield, type: "Security" },
    { name: "CyberSec", icon: KeyRound, type: "Security" },
    { name: "OAuth", icon: Lock, type: "Security" },

    { name: "DNS/TLD", icon: Globe, type: "Network" },
    { name: "Resend", icon: Mail, type: "Service" },
    { name: "Git", icon: GitBranch, type: "Tools" },
    { name: "Terminal", icon: Terminal, type: "Tools" }
];

function ServerIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
            <line x1="6" y1="6" x2="6.01" y2="6" />
            <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
    );
}

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.04 } }
};

const item = {
    hidden: { opacity: 0, scale: 0.85, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 120 } }
};

export default function Skills() {
    return (
        <section id="skills" className="relative pb-16">
            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-10"
            >
                <div className="section-label">04 Skills</div>
                <h2 className="text-3xl font-bold text-[#1C1C1C] mb-2">Skills & Technologies</h2>
                <div className="underline-bling" />
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        className="skill-pill"
                    >
                        <skill.icon className="w-5 h-5 text-[#B91C1C]" />
                        <span className="font-medium text-sm text-[#1C1C1C]">{skill.name}</span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
