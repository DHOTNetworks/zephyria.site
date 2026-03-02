'use client';

import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import LogoImg from "../../../public/logo.png";

export const SdkLayout: React.FC<{ children: React.ReactNode; headings: { id: string; text: string; level: number }[] }> = ({ children, headings }) => {
    const [activeId, setActiveId] = useState<string>('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-20% 0px -80% 0px' }
        );

        headings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [headings]);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveId(id);
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div className="min-h-screen bg-void-black text-white selection:bg-accent-cyan selection:text-black flex flex-col md:flex-row relative w-full overflow-hidden">
            {/* Network Background */}
            <div className="fixed inset-0 network-topology opacity-[0.03] z-0 pointer-events-none mix-blend-screen"></div>

            {/* Mobile Header */}
            <div className="md:hidden sticky top-0 z-50 w-full glass-panel border-b border-white/5 p-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-6 h-6 flex items-center justify-center overflow-hidden rounded border border-white/10 shadow-lg shadow-cyan-500/20 bg-white/5 relative">
                        <Image src={LogoImg} alt="Logo" fill className="object-cover" />
                    </div>
                    <span className="font-bold text-lg tracking-tight">ZEPHYRIA<span className="text-accent-cyan font-light ml-1">SDK</span></span>
                </Link>
                <button className="text-white/60 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Sidebar */}
            <aside className={`
        fixed inset-y-0 left-0 z-40 w-72 glass-panel border-r border-white/5
        transform transition-transform duration-300 ease-in-out md:translate-x-0 md:sticky md:top-0 md:h-screen
        flex flex-col bg-black/40
        ${isMobileMenuOpen ? 'translate-x-0 mt-[65px] md:mt-0' : '-translate-x-full'}
      `}>
                <div className="p-6 hidden md:flex items-center gap-3 border-b border-white/5">
                    <Link href="/" className="w-8 h-8 flex items-center justify-center overflow-hidden rounded-md border border-white/10 shadow-lg shadow-cyan-500/20 bg-white/5 transition-transform hover:scale-105 active:scale-95 relative">
                        <Image src={LogoImg} alt="Logo" fill className="object-cover" />
                    </Link>
                    <Link href="/" className="font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">
                        ZEPHYRIA<span className="text-accent-cyan font-light ml-1">SDK</span>
                    </Link>
                </div>

                <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 relative z-10" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium tracking-wider uppercase text-white/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_8px_var(--accent-cyan)]"></span>
                        Developer Guide
                    </div>
                    <nav className="space-y-1 relative pr-2">
                        {/* Timeline line */}
                        <div className="absolute left-[3px] top-2 bottom-2 w-[1px] bg-white/10" />

                        {headings.map((heading) => (
                            <a
                                key={heading.id}
                                href={`#${heading.id}`}
                                onClick={(e) => scrollToSection(e, heading.id)}
                                className={`
                  block py-1.5 pr-3 rounded-r-lg text-sm transition-all duration-300 truncate relative pl-6
                  ${heading.level === 3 ? 'text-xs text-white/40 hover:text-white/80' : 'font-medium text-white/70 hover:text-white'}
                  ${activeId === heading.id
                                        ? 'text-accent-cyan font-semibold bg-white/5'
                                        : ''}
                `}
                                title={heading.text}
                            >
                                {/* Timeline dot */}
                                <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-void-black transition-colors duration-300
                     ${activeId === heading.id ? 'bg-accent-cyan shadow-[0_0_8px_var(--accent-cyan)] scale-125' : 'bg-white/20'}
                     ${heading.level === 3 ? 'scale-75' : ''}
                  `} />
                                {heading.text}
                            </a>
                        ))}
                    </nav>
                </div>
            </aside>
            {/* Main Content Overlay for Mobile */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}

            {/* Main Content */}
            <main className="flex-1 min-w-0 flex justify-center relative z-10 selection:bg-accent-cyan selection:text-black">
                <div className="w-full max-w-4xl px-6 py-12 md:py-24 lg:px-16">
                    {children}
                </div>
            </main>
        </div>
    );
};
