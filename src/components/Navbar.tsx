import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F7]/90 backdrop-blur-sm border-b border-[#E5E7EB]"
        >
            <div className="container mx-auto max-w-5xl px-6 py-4">
                <div className="flex justify-between items-center">
                    <a
                        href="#"
                        className="text-xl font-bold tracking-wide text-[#1C1C1C]"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Suhani Tyagi
                    </a>

                    <nav className="hidden md:flex items-center gap-7">
                        {[
                            { num: "01", label: "About", href: "#about" },
                            { num: "02", label: "Experience", href: "#experience" },
                            { num: "03", label: "Projects", href: "#projects" },
                            { num: "04", label: "Skills", href: "#skills" },
                        ].map(({ num, label, href }) => (
                            <a
                                key={href}
                                href={href}
                                className="flex items-center gap-1.5 text-sm text-[#6B7280] hover:text-[#1C1C1C] transition-colors"
                            >
                                <span className="text-[#B91C1C] text-[11px] font-bold">{num}</span>
                                <span className="font-medium">{label}</span>
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <a href="https://github.com/inahus99" target="_blank" rel="noreferrer" className="text-[#9CA3AF] hover:text-[#1C1C1C] transition-colors">
                            <Github className="w-4 h-4" />
                        </a>
                        <a href="https://www.linkedin.com/in/suhani-tyagi-63059b259" target="_blank" rel="noreferrer" className="text-[#9CA3AF] hover:text-[#1C1C1C] transition-colors">
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-[#9CA3AF] hover:text-[#1C1C1C] transition-colors">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href="mailto:suhani05tyagi@gmail.com" className="text-[#9CA3AF] hover:text-[#1C1C1C] transition-colors">
                            <Mail className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </motion.header>
    );
}
