"use client";

import Image from "next/image";
import LogoImg from "../../public/logo.png";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SceneCanvas from "@/components/canvas/SceneCanvas";
import { Section1, Section2, Section3, Section4, Section5 } from "@/components/ui/Sections";
import { useScrollStore } from "@/store/useScrollStore";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const setProgress = useScrollStore((state) => state.setProgress);
  const setCurrentSection = useScrollStore((state) => state.setCurrentSection);

  useEffect(() => {
    if (!containerRef.current) return;

    // Master ScrollTrigger to track overall progress mapping to 3D animations
    const masterScroll = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        setProgress(self.progress);
      },
    });

    // Text Sections fade in/out naturally as they scroll into view
    const sections = gsap.utils.toArray<HTMLElement>(".scroll-section");

    sections.forEach((section, index) => {
      // Fade IN as it enters the middle of the screen
      gsap.fromTo(section,
        { opacity: 0.1 },
        {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "top 25%",
            scrub: true,
            onEnter: () => setCurrentSection(index),
            onEnterBack: () => setCurrentSection(index),
          }
        }
      );

      // Fade OUT as it leaves the top of the screen
      gsap.to(section, {
        opacity: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "bottom 75%",
          end: "bottom 25%",
          scrub: true,
        }
      });
    });

    return () => {
      masterScroll.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [setProgress, setCurrentSection]);

  return (
    <main ref={containerRef} className="relative w-full bg-void-black text-white selection:bg-accent-cyan selection:text-black">
      {/* 3D Canvas Fixed Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SceneCanvas />
      </div>

      {/* Global Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center glass-panel border-b border-white/5 transition-opacity duration-300">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center overflow-hidden rounded-md border border-white/10 shadow-lg shadow-cyan-500/20 bg-white/5">
            <Image src={LogoImg} alt="Zephyria Icon" className="w-full h-full object-cover" priority />
          </div>
          <span className="text-lg font-bold tracking-tight">ZEPHYRIA</span>
        </div>
        <button className="p-2 hidden md:block">
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
      </nav>

      {/* Scrollable Content Layers - Natural DOM Flow */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <section className="scroll-section w-full min-h-screen flex items-center justify-center relative">
          <Section1 />
        </section>

        <section className="scroll-section w-full min-h-screen flex items-center justify-center relative">
          <Section2 />
        </section>

        <section className="scroll-section w-full min-h-screen flex items-center justify-center relative">
          <Section3 />
        </section>

        <section className="scroll-section w-full min-h-screen flex items-center justify-center relative">
          <Section4 />
        </section>

        <section className="scroll-section w-full min-h-screen flex items-center justify-center relative z-20">
          <Section5 />
        </section>
      </div>
    </main>
  );
}
