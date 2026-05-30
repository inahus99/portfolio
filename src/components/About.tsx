import { motion } from 'framer-motion';
import { Cookie, Activity, FileText, Zap, Share2, Server, Code2 } from 'lucide-react';

const highlights = [
    {
        icon: Cookie,
        iconColor: "text-[#B91C1C]",
        title: "ComplyScan",
        subtitle: "Automated GDPR & CCPA compliance auditor",
        url: "https://complyscan.netlify.app",
        desc: "A headless browser-powered scanner that crawls websites to detect cookie violations, hidden trackers, and consent gaps in real time.",
        bullets: [
            "Uses Puppeteer to deeply analyse consent banners, 3P scripts, and cookie lifetimes",
            "Streams live scan results to the client over Socket.io for real-time UX",
            "Generates structured GDPR-ready compliance reports per domain"
        ]
    },
    {
        icon: Activity,
        iconColor: "text-[#1C1C1C]",
        title: "Third-Eye",
        subtitle: "Real-time uptime & monitoring platform",
        url: "https://third-eye-mu.vercel.app/",
        desc: "A production-grade monitoring dashboard that pings services, tracks latency, and surfaces instant alerts with live WebSocket telemetry.",
        bullets: [
            "Engineered distributed health-check queues for low-latency endpoint monitoring",
            "Built animated real-time dashboards with Framer Motion and live status panels",
            "Deployed on Railway with a Node.js + Express + MongoDB backend"
        ]
    },
    {
        icon: FileText,
        iconColor: "text-[#B91C1C]",
        title: "ClauseWise",
        subtitle: "AI-powered legal document analyser",
        url: "https://clause-wise.vercel.app/",
        desc: "Upload any PDF contract and get instant semantic clause extraction, risk identification, and plain-language summaries via the Gemini API.",
        bullets: [
            "Multi-page PDF parsing pipeline using Multer and server-side text extraction",
            "Deep clause classification and semantic summarisation using Gemini API",
            "Clean React UI with drag-and-drop upload and structured clause breakdown"
        ]
    },
    {
        icon: Share2,
        iconColor: "text-[#1C1C1C]",
        title: "CRDT Collaborative Editor",
        subtitle: "Zero-conflict real-time document editing",
        url: "https://github.com/inahus99/CRDT-collaborative-editor",
        desc: "A collaborative rich-text editor built on Conflict-free Replicated Data Types, enabling multiple users to co-edit with zero merge conflicts.",
        bullets: [
            "Implemented Yjs CRDT data model for conflict-free distributed state convergence",
            "Full duplex sync over WebSockets with presence awareness for live cursors",
            "Handles offline edits with automatic reconciliation on reconnect"
        ]
    },
    {
        icon: Server,
        iconColor: "text-[#B91C1C]",
        title: "RediCore KV Store",
        subtitle: "Redis-inspired key-value engine from scratch",
        url: "https://github.com/inahus99/RediCore",
        desc: "A custom in-memory key-value store implementing the RESP wire protocol over raw TCP sockets with AOF persistence and TTL expiry.",
        bullets: [
            "Full RESP protocol parser for Redis-compatible client interoperability",
            "Append-Only File persistence for crash-safe durable storage",
            "Supports SET, GET, DEL, EXPIRE, TTL with eviction policies"
        ]
    },
    {
        icon: Zap,
        iconColor: "text-[#1C1C1C]",
        title: "Curations",
        subtitle: "Personal knowledge vault, installable PWA",
        url: "https://curations-vert.vercel.app/",
        desc: "A beautifully minimal progressive web app to capture and organise notes, images, links, and code snippets. Works fully offline.",
        bullets: [
            "Offline-first PWA with service worker caching for zero-dependency usage",
            "Markdown editor with live preview for structured note-taking",
            "Supabase-backed cloud sync with per-user data isolation"
        ]
    }
];

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.08 } })
};

export default function About() {
    return (
        <section id="about" className="relative">
            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="section-label">01 About</div>
                <h2 className="text-3xl font-bold text-[#1C1C1C] mb-2">About Me</h2>
                <div className="underline-bling mb-10" />
            </motion.div>

            {/* Bio card */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="bg-white border border-[#E5E7EB] rounded-2xl p-10 md:p-12 mb-10"
            >
                <p className="text-[#1C1C1C] leading-[1.85] mb-5 text-[1.05rem]">
                    I build backend systems that move real numbers. At Fencio.dev I engineered an LLM-driven
                    multi-agent system that cut data-source onboarding by <span className="font-semibold">80%</span> and eliminated
                    100% of false-positive DB writes across 55+ feeds. At Adnoxy, a hot/warm/cold Redis
                    and Cloudflare R2 storage layer reduced read latency by <span className="font-semibold">40%</span> and brought egress costs to near-zero.
                </p>
                <p className="text-[#9CA3AF] leading-[1.85] mb-10 text-sm">
                    I've shipped threat-testing frameworks, geo-intelligence caching layers, schema validation engines,
                    and a regional news platform delivering 100+ daily articles across 20+ RSS feeds.
                    Currently MTS Intern at Fencio.dev, Bengaluru.
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "TypeScript", "PostgreSQL", "Redis", "Socket.io", "React Native", "PyMuPDF", "Playwright", "Gemini API", "Ollama", "FastAPI"].map(s => (
                        <span key={s} className="text-xs px-3 py-1 rounded-full border border-[#E5E7EB] text-[#9CA3AF]">
                            {s}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Project highlights */}
            <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-4 h-4 text-[#B91C1C]" />
                <span className="text-xs font-bold text-[#B91C1C] uppercase tracking-widest">Things I've Built</span>
                <div className="flex-1 h-px bg-[#E5E7EB]" />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
                {highlights.map((h, i) => (
                    <motion.a
                        href={h.url}
                        target="_blank"
                        rel="noreferrer"
                        key={h.title}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="block rounded-xl border border-[#E5E7EB] bg-white p-5 hover:border-[#B91C1C]/25 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                    >
                        <h3 className="text-base font-semibold text-[#1C1C1C] flex items-center gap-2 mb-0.5">
                            <h.icon className={`w-4 h-4 ${h.iconColor}`} />
                            {h.title}
                        </h3>
                        <p className="text-xs text-[#9CA3AF] mb-2 font-medium">{h.subtitle}</p>
                        <p className="text-[#6B7280] text-sm mb-3 leading-relaxed">{h.desc}</p>
                        <ul className="space-y-1.5">
                            {h.bullets.map((b, j) => (
                                <li key={j} className="text-[#9CA3AF] text-xs flex items-start gap-2">
                                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#B91C1C]/40 shrink-0" />
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
