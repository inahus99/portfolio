import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Github, Activity, Cookie, Zap, Brain, Share2, Server, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
    {
        title: "Third-Eye",
        tag: "Monitoring",
        icon: Activity,
        image: "https://i.ibb.co/nsfry7dK/Screenshot-2025-08-24-140447.png",
        description: "Real-time system monitoring dashboard with live websocket telemetry, metric visualisation, and instant alerting for production systems.",
        tech: ["React", "Socket.io", "Express", "MongoDB", "Framer Motion"],
        demo: "https://third-eye-mu.vercel.app/",
        github: "https://github.com/inahus99/ThirdEye"
    },
    {
        title: "ComplyScan",
        tag: "Privacy",
        icon: Cookie,
        image: "https://i.ibb.co/Q7j61vBg/Screenshot-2025-08-24-141041.png",
        description: "Automated GDPR & CCPA cookie compliance scanner that headlessly audits websites and generates detailed privacy reports in seconds.",
        tech: ["React", "Express", "Socket.io", "Puppeteer", "Mantine UI"],
        demo: "https://complyscan.netlify.app",
        github: "https://github.com/inahus99/ComplyScan"
    },
    {
        title: "Curations",
        tag: "PWA",
        icon: Zap,
        image: "https://i.ibb.co/BH9kkpT9/Screenshot-2025-07-31-203129.png",
        description: "A centralised personal vault to save notes, images, links & code snippets. Fully offline capable and installable as a Progressive Web App.",
        tech: ["React", "Markdown", "Supabase", "JavaScript"],
        demo: "https://curations-vert.vercel.app/",
        github: "https://github.com/inahus99/Curations"
    },
    {
        title: "ClauseWise",
        tag: "AI",
        icon: Brain,
        image: "https://i.ibb.co/tF0XCGc/Screenshot-2025-07-30-173648.png",
        description: "Upload any legal PDF and get instant AI-powered clause extraction, risk identification, and plain-language summaries via the Gemini API.",
        tech: ["React", "Tailwind CSS", "Multer", "Gemini API"],
        demo: "https://clause-wise.vercel.app/",
        github: "https://github.com/inahus99/clauseWise"
    },
    {
        title: "CRDT Editor",
        tag: "Real-time",
        icon: Share2,
        image: "https://i.ibb.co/1Jf8VvLs/Screenshot-2025-10-03-180627.png",
        description: "Collaborative rich-text editor using Conflict-free Replicated Data Types for zero-conflict, multi-user real-time synchronisation over WebSockets.",
        tech: ["React", "Node.js", "WebSockets", "Yjs"],
        demo: "",
        github: "https://github.com/inahus99/CRDT-collaborative-editor"
    },
    {
        title: "RediCore KV Store",
        tag: "Database",
        icon: Server,
        image: "https://i.ibb.co/69HxRyR/Screenshot-2025-10-08-195905.png",
        description: "A lightweight Redis-inspired key-value store implemented from scratch over TCP using the RESP protocol, with AOF persistence and TTL support.",
        tech: ["Node.js", "TCP", "RESP", "AOF", "TTL"],
        demo: "",
        github: "https://github.com/inahus99/RediCore"
    }
];

const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0, scale: 0.98 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0, scale: 0.98 })
};

export default function Projects() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);

    const goTo = useCallback((idx: number, dir: number) => {
        setDirection(dir);
        setCurrent(idx);
    }, []);

    const prev = () => goTo((current - 1 + projects.length) % projects.length, -1);
    const next = useCallback(() => goTo((current + 1) % projects.length, 1), [current, goTo]);

    useEffect(() => {
        const timer = setTimeout(next, 4500);
        return () => clearTimeout(timer);
    }, [next]);

    const project = projects[current];

    return (
        <section id="projects" className="relative">
            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-10"
            >
                <div className="section-label">03 Projects</div>
                <h2 className="text-3xl font-bold text-[#1C1C1C] mb-2">Featured Projects</h2>
                <div className="underline-bling" />
            </motion.div>

            <div className="relative">
                {/* Card */}
                <div className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="flex flex-col md:flex-row"
                        >
                            {/* Image */}
                            <div className="relative md:w-[45%] h-64 md:h-auto overflow-hidden bg-[#F9FAFB] shrink-0 border-r border-[#E5E7EB]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent md:hidden" />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-between p-8 md:p-10">
                                {/* Tag */}
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#B91C1C]/20 bg-[#FEF2F2] mb-4">
                                        <project.icon className="w-3.5 h-3.5 text-[#B91C1C]" />
                                        <span className="text-xs font-semibold text-[#B91C1C] uppercase tracking-wider">{project.tag}</span>
                                    </div>

                                    <h3
                                        className="text-3xl md:text-4xl font-bold text-[#1C1C1C] tracking-tight mb-3 leading-tight"
                                        style={{ fontFamily: "'Playfair Display', serif" }}
                                    >
                                        {project.title}
                                    </h3>

                                    <p className="text-[#6B7280] text-sm leading-relaxed mb-7">{project.description}</p>
                                </div>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-2 mb-7">
                                    {project.tech.map((t, idx) => (
                                        <span key={idx} className="text-xs font-medium px-3 py-1.5 rounded-full border border-[#E5E7EB] bg-[#FAF9F7] text-[#6B7280]">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-3">
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-semibold rounded-full px-6 py-2.5 bg-[#1C1C1C] text-white transition-all hover:-translate-y-0.5 hover:shadow-md"
                                        >
                                            <Rocket className="w-4 h-4" /> Live Demo
                                        </a>
                                    )}
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-semibold rounded-full px-6 py-2.5 border border-[#E5E7EB] bg-white text-[#1C1C1C] transition-all hover:border-[#1C1C1C]/25 hover:-translate-y-0.5 hover:shadow-sm"
                                    >
                                        <Github className="w-4 h-4" /> GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation row */}
                <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center gap-2">
                        {projects.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goTo(idx, idx > current ? 1 : -1)}
                                className={`rounded-full transition-all duration-300 ${
                                    idx === current
                                        ? 'w-6 h-2 bg-[#B91C1C]'
                                        : 'w-2 h-2 bg-[#D1D5DB] hover:bg-[#9CA3AF]'
                                }`}
                            />
                        ))}
                    </div>

                    <div className="flex items-center gap-2.5">
                        <button
                            onClick={prev}
                            className="w-9 h-9 rounded-full border border-[#E5E7EB] bg-white text-[#6B7280] flex items-center justify-center transition-all hover:border-[#1C1C1C]/20 hover:text-[#1C1C1C] hover:-translate-y-0.5"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={next}
                            className="w-9 h-9 rounded-full border border-[#E5E7EB] bg-white text-[#6B7280] flex items-center justify-center transition-all hover:border-[#1C1C1C]/20 hover:text-[#1C1C1C] hover:-translate-y-0.5"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <p className="text-center text-xs text-[#D1D5DB] mt-3">{current + 1} / {projects.length}</p>
            </div>
        </section>
    );
}
