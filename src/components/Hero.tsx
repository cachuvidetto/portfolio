"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { HiArrowDown, HiDownload } from "react-icons/hi";
import { useLang } from "@/lib/LangContext";

const stats = (t: ReturnType<typeof useLang>["t"]) => [
  { value: "19+", label: t.hero.stat1Label },
  { value: "3+", label: t.hero.stat2Label },
  { value: "MSc", label: t.hero.stat3Label },
];

export default function Hero() {
  const { t, dir } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const textX = useTransform(springX, [-0.5, 0.5], [15, -15]);
  const textY = useTransform(springY, [-0.5, 0.5], [15, -15]);
  const orbX = useTransform(springX, [-0.5, 0.5], [-40, 40]);
  const orbY = useTransform(springY, [-0.5, 0.5], [-40, 40]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      dir={dir}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-grid"
    >
      <motion.div
        style={{ x: orbX, y: orbY }}
        className="glow-orb w-[600px] h-[600px] bg-[var(--color-glow)] top-[-200px] left-[-200px]"
      />
      <motion.div
        style={{
          x: useTransform(orbX, (v) => -v),
          y: useTransform(orbY, (v) => -v),
        }}
        className="glow-orb w-[400px] h-[400px] bg-[rgba(34,211,238,0.06)] bottom-[-100px] right-[-100px]"
      />

      <div className="section-container text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span className="text-xs font-medium text-[var(--color-text-secondary)]">
              {t.hero.badge}
            </span>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-sm md:text-base text-[var(--color-accent)] font-semibold mb-5"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Title */}
        <motion.h1
          style={{ x: textX, y: textY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-[5.5rem] font-bold tracking-[-0.04em] leading-[0.95] mb-8"
        >
          <span className="text-gradient">{t.hero.title1}</span>
          <br />
          <span className="text-gradient">{t.hero.title2}</span>
          <span className="accent-gradient">{t.hero.title3}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-xl mx-auto text-base md:text-lg text-[var(--color-text-secondary)] font-normal leading-relaxed mb-12"
        >
          {t.hero.desc}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[var(--color-text-primary)] text-[var(--color-bg)] text-sm font-bold tracking-tight hover:opacity-90 shadow-md transition-all active:scale-[0.97]"
          >
            {t.hero.cta1}
            <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="/Cv.pdf"
            download="Alaa-Zayood-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold tracking-tight border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-card)] transition-all active:scale-[0.97]"
          >
            <HiDownload className="text-base" />
            {t.hero.cta2}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex justify-center gap-12 md:gap-20"
        >
          {stats(t).map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold tracking-tight">
                {stat.value}
              </div>
              <div className="text-[11px] uppercase tracking-[0.15em] text-[var(--color-text-secondary)] mt-1 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
            {t.hero.scroll}
          </span>
          <HiArrowDown className="text-sm text-[var(--color-text-muted)]" />
        </div>
      </motion.div>
    </section>
  );
}
