"use client";

import { LangProvider, useLang } from "@/lib/LangContext";
import { ThemeProvider } from "@/lib/ThemeContext";
import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

function PortfolioContent() {
  const { dir } = useLang();

  return (
    <div dir={dir} className="transition-all duration-300">
      <CursorGlow />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      {/* Background Glow Orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-[var(--color-glow)] bottom-[30%] left-[-200px]" />
      <div className="glow-orb w-[400px] h-[400px] bg-[rgba(34,211,238,0.04)] top-[60%] right-[-150px]" />
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <LangProvider>
        <PortfolioContent />
      </LangProvider>
    </ThemeProvider>
  );
}
