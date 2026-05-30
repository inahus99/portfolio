import { motion } from 'framer-motion';
import { Rocket, FileText, FolderCode, Shield, CheckCircle2 } from 'lucide-react';

function ArtisticCompass() {
    return (
        <div className="relative w-full h-full flex items-center justify-center select-none">
            <svg width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outermost dashed orbit */}
                <circle cx="210" cy="210" r="196" stroke="#1C1C1C" strokeWidth="0.5" strokeDasharray="2 11" opacity="0.18" />

                {/* Main bezel ring */}
                <circle cx="210" cy="210" r="178" stroke="#1C1C1C" strokeWidth="1" opacity="0.1" />

                {/* Tick marks */}
                {Array.from({ length: 60 }).map((_, i) => {
                    const angle = (i * Math.PI * 2) / 60;
                    const isMajor = i % 15 === 0;
                    const isMid = i % 5 === 0;
                    const r1 = isMajor ? 163 : isMid ? 168 : 172;
                    const r2 = 178;
                    return (
                        <line key={i}
                            x1={210 + r1 * Math.cos(angle)} y1={210 + r1 * Math.sin(angle)}
                            x2={210 + r2 * Math.cos(angle)} y2={210 + r2 * Math.sin(angle)}
                            stroke="#1C1C1C"
                            strokeWidth={isMajor ? 1.5 : 0.7}
                            opacity={isMajor ? 0.35 : 0.12}
                        />
                    );
                })}

                {/* Cross hairs */}
                <line x1="210" y1="32" x2="210" y2="388" stroke="#1C1C1C" strokeWidth="0.5" opacity="0.08" />
                <line x1="32" y1="210" x2="388" y2="210" stroke="#1C1C1C" strokeWidth="0.5" opacity="0.08" />

                {/* Equatorial ellipse — slowly rotating */}
                <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "210px 210px" }}
                >
                    <ellipse cx="210" cy="210" rx="140" ry="48" stroke="#B91C1C" strokeWidth="1.2" opacity="0.3" />
                </motion.g>

                {/* Counter-rotating ring */}
                <motion.g
                    animate={{ rotate: -360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "210px 210px" }}
                >
                    <ellipse cx="210" cy="210" rx="110" ry="38" stroke="#1C1C1C" strokeWidth="0.7" opacity="0.1" />
                    {/* Orbital dots on this ring */}
                    {[0, 120, 240].map((deg, i) => {
                        const rad = deg * Math.PI / 180;
                        return <circle key={i} cx={210 + 110 * Math.cos(rad)} cy={210 + 38 * Math.sin(rad)} r="3.5" fill="white" stroke="#B91C1C" strokeWidth="1" opacity="0.5" />;
                    })}
                </motion.g>

                {/* Meridian ellipse */}
                <ellipse cx="210" cy="210" rx="48" ry="140" stroke="#1C1C1C" strokeWidth="0.7" opacity="0.08" />

                {/* Mid dashed ring */}
                <circle cx="210" cy="210" r="105" stroke="#1C1C1C" strokeWidth="0.7" strokeDasharray="3 7" opacity="0.1" />

                {/* Inner accent ring */}
                <circle cx="210" cy="210" r="58" stroke="#B91C1C" strokeWidth="1.5" opacity="0.3" />

                {/* Cardinal arcs */}
                {[0, 90, 180, 270].map((deg, i) => {
                    const start = (deg - 20) * Math.PI / 180;
                    const end = (deg + 20) * Math.PI / 180;
                    const r = 80;
                    const x1 = 210 + r * Math.cos(start);
                    const y1 = 210 + r * Math.sin(start);
                    const x2 = 210 + r * Math.cos(end);
                    const y2 = 210 + r * Math.sin(end);
                    return (
                        <path key={i}
                            d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`}
                            stroke="#B91C1C" strokeWidth="2.5" fill="none" opacity="0.35"
                        />
                    );
                })}

                {/* Cardinal markers */}
                <circle cx="210" cy="32" r="4.5" fill="#B91C1C" opacity="0.65" />
                <circle cx="388" cy="210" r="3" fill="#1C1C1C" opacity="0.12" />
                <circle cx="210" cy="388" r="3" fill="#1C1C1C" opacity="0.12" />
                <circle cx="32" cy="210" r="3" fill="#1C1C1C" opacity="0.12" />

                {/* Slow-rotating quarter nodes */}
                <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "210px 210px" }}
                >
                    {[45, 135, 225, 315].map((deg, i) => {
                        const rad = deg * Math.PI / 180;
                        return (
                            <circle key={i}
                                cx={210 + 130 * Math.cos(rad)}
                                cy={210 + 130 * Math.sin(rad)}
                                r="4"
                                stroke="#1C1C1C" strokeWidth="1" fill="white" opacity="0.25"
                            />
                        );
                    })}
                </motion.g>

                {/* Center */}
                <circle cx="210" cy="210" r="12" stroke="#B91C1C" strokeWidth="1.2" fill="none" opacity="0.35" />
                <circle cx="210" cy="210" r="4" fill="#B91C1C" opacity="0.7" />
                <circle cx="210" cy="210" r="1.5" fill="white" />

                {/* Compass labels */}
                <text x="210" y="16" textAnchor="middle" fontSize="9" fill="#B91C1C" opacity="0.45" fontFamily="Inter, sans-serif" fontWeight="700">N</text>
                <text x="404" y="214" textAnchor="middle" fontSize="9" fill="#1C1C1C" opacity="0.2" fontFamily="Inter, sans-serif">E</text>
                <text x="210" y="408" textAnchor="middle" fontSize="9" fill="#1C1C1C" opacity="0.2" fontFamily="Inter, sans-serif">S</text>
                <text x="16" y="214" textAnchor="middle" fontSize="9" fill="#1C1C1C" opacity="0.2" fontFamily="Inter, sans-serif">W</text>
            </svg>
        </div>
    );
}

export default function Hero() {
    return (
        <section id="hero" className="aurora-wrap pt-[120px] pb-6 relative isolate min-h-[90vh] flex items-start">
            <div className="aurora" />

            <div className="relative z-10 w-full grid md:grid-cols-2 items-center pl-10 lg:pl-20 pr-6 gap-8">
                {/* LEFT */}
                <div className="w-full text-left">
                    {/* Section number */}
                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 mb-5"
                    >
                        <span className="text-[#B91C1C] font-bold text-[11px] tracking-widest uppercase">01</span>
                        <span className="h-px w-8 bg-[#B91C1C]/30" />
                        <span className="text-[#9CA3AF] text-[11px] font-medium tracking-widest uppercase">Introduction</span>
                    </motion.div>

                    {/* Open to work badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.05 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B91C1C]/20 bg-[#FEF2F2] text-[#B91C1C] text-xs font-semibold mb-6"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C] animate-pulse" />
                        Open to Work · Available Now
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.1 }}
                        className="text-6xl md:text-7xl font-bold leading-[1.05] text-[#1C1C1C] tracking-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Full-Stack<br />
                        <span className="text-[#B91C1C]">Software</span><br />
                        <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400 }}>Developer</span>
                    </motion.h1>

                    {/* Italic subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-3 text-lg text-[#1C1C1C]/45 italic"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Code that actually works.
                    </motion.p>

                    {/* Divider line */}
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 72 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-px bg-[#B91C1C]/35 mt-5"
                    />

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="mt-5 text-base text-[#6B7280] max-w-md leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Building real-time, scalable systems, from RESTful APIs and WebSocket backends
                        to polished React interfaces.
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-8 flex flex-wrap gap-3"
                    >
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 font-semibold rounded-full px-6 py-3 bg-[#1C1C1C] text-white text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/15"
                        >
                            <Rocket className="w-4 h-4" /> View Projects
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1ct2F3OmfD27qnJH3LYdjuj4HZFN4qnj7/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-semibold rounded-full px-6 py-3 border border-[#E5E7EB] bg-white text-[#1C1C1C] text-sm transition-all hover:-translate-y-0.5 hover:border-[#1C1C1C]/25 hover:shadow-md"
                        >
                            <FileText className="w-4 h-4" /> View Resume
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-8 flex flex-wrap gap-3"
                    >
                        {[
                            { icon: FolderCode, label: "10+ Projects", accent: true },
                            { icon: Shield, label: "LeetCode Knight", accent: false },
                            { icon: CheckCircle2, label: "4 Internships", accent: false },
                        ].map(({ icon: Icon, label, accent }) => (
                            <div key={label} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#E5E7EB]">
                                <Icon className={`w-4 h-4 ${accent ? 'text-[#B91C1C]' : 'text-[#6B7280]'}`} />
                                <span className="text-[#1C1C1C] text-sm font-medium">{label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* RIGHT — Artistic Compass */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.1, delay: 0.25, ease: "easeOut" }}
                    className="hidden md:flex h-[500px] relative items-center justify-center"
                >
                    <ArtisticCompass />
                </motion.div>
            </div>
        </section>
    );
}
