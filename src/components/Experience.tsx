import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        role: "MTS Intern",
        company: "Fencio.dev",
        period: "Jan 2026 – Present",
        location: "Bengaluru, India",
        highlights: [
            "Built an LLM-driven multi-agent system for automated data ingestion across 55+ feeds, cutting onboarding time by 80%.",
            "Engineered a Threat Testing framework covering Data Leakage, Supply Chain, and RBAC attack scenarios across proxy sandboxes.",
            "Shipped a React + FastAPI observability platform that cut debugging time by 66%.",
        ],
        skills: ["PyMuPDF", "Playwright", "FastAPI", "React", "Multi-agent LLM"],
        current: true,
    },
    {
        role: "Software Developer",
        company: "Adnoxy",
        period: "Nov 2025 – Jan 2026",
        location: "Gurugram, India",
        highlights: [
            "Designed a hot/warm/cold storage layer with Redis and Cloudflare R2, reducing read latency by 40%.",
            "Built a geo-intelligence caching layer on OpenStreetMap that cut location query latency by ~300ms per request.",
            "Automated PDF-to-structured-JSON ingestion via Gemini/Ollama, cutting manual onboarding effort by 3×.",
        ],
        skills: ["Redis", "Cloudflare R2", "Gemini", "Ollama", "Node.js"],
        current: false,
    },
    {
        role: "Software Developer Intern",
        company: "NavaJuni News",
        period: "Oct 2025 – Jan 2026",
        location: "Gandhinagar, India",
        highlights: [
            "Architected a regional news backend from scratch — 30+ REST APIs and 20+ table schema delivering 100+ daily articles across 20+ RSS feeds.",
            "Built the full content pipeline: RSS ingestion, deduplication, categorisation, and feed ranking.",
            "Shipped a 3-tier role-based admin panel (Super Admin / Admin / Moderator) replacing all manual workflows.",
        ],
        skills: ["Node.js", "PostgreSQL", "RSS", "React Native"],
        current: false,
    },
    {
        role: "Node.js Developer Intern",
        company: "ShareWheelz LLP",
        period: "Jul 2025 – Sep 2025",
        location: "Remote, India",
        highlights: [
            "Built RESTful APIs for user onboarding and ride creation flows with OAuth auth and JWT session management.",
            "Integrated Socket.io for low-latency real-time messaging between matched riders.",
        ],
        skills: ["Express.js", "PostgreSQL", "Socket.io", "OAuth"],
        current: false,
    }
];

export default function Experience() {
    return (
        <section id="experience" className="relative">
            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <div className="section-label">02 Experience</div>
                <h2 className="text-3xl font-bold text-[#1C1C1C] flex items-center gap-3 mb-2">
                    <Briefcase className="w-7 h-7 text-[#B91C1C]" />
                    Work Experience
                </h2>
                <div className="underline-bling" />
            </motion.div>

            <div className="relative max-w-3xl mx-auto">
                {/* Timeline line */}
                <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[#B91C1C]/30 via-[#E5E7EB] to-transparent rounded-full" />

                <div className="space-y-10">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -16, y: 16 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="relative pl-12 group"
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 top-2 w-10 h-10 flex items-center justify-center z-10">
                                <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 group-hover:scale-125 ${
                                    exp.current
                                        ? 'bg-[#B91C1C] border-[#B91C1C] shadow-[0_0_12px_rgba(185,28,28,0.4)]'
                                        : 'bg-white border-[#D1D5DB] group-hover:border-[#B91C1C]'
                                }`} />
                            </div>

                            {/* Card */}
                            <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 md:p-8 hover:border-[#B91C1C]/25 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 hover:-translate-y-0.5">
                                <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2 mb-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-[#1C1C1C] group-hover:text-[#B91C1C] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                                            {exp.role}
                                        </h3>
                                        <p className="text-[#6B7280] text-sm mt-0.5 font-medium">@ {exp.company}</p>
                                        <p className="text-[#C4C4C4] text-xs mt-0.5">{exp.location}</p>
                                    </div>
                                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full w-fit shrink-0 ${
                                        exp.current
                                            ? 'bg-[#FEF2F2] border border-[#B91C1C]/20 text-[#B91C1C]'
                                            : 'bg-[#F9FAFB] border border-[#E5E7EB] text-[#6B7280]'
                                    }`}>
                                        {exp.period}
                                    </span>
                                </div>

                                <ul className="mb-5 space-y-2">
                                    {exp.highlights.map((point, idx) => (
                                        <li key={idx} className="flex gap-2.5 items-start text-sm text-[#6B7280] leading-relaxed">
                                            <span className="text-[#B91C1C]/50 mt-1.5 shrink-0">›</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill, i) => (
                                        <span key={i} className="text-[11px] px-2.5 py-1 rounded-full border border-[#E5E7EB] bg-[#FAF9F7] text-[#6B7280]">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
