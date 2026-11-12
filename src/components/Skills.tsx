"use client";

import { motion } from "framer-motion";
import {
  SiOdoo, SiPython, SiPostgresql,
  SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs,
  SiExpress, SiTypescript, SiMongodb, SiFlutter,
  SiDart, SiFirebase, SiGit, SiDocker,
} from "react-icons/si";
import { useLang } from "@/lib/LangContext";
import { useTheme } from "@/lib/ThemeContext";

const skills = [
  { name: "Odoo ERP", icon: SiOdoo, color: "#875a7b" },
  { name: "Python", icon: SiPython, color: "#3776ab" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "React", icon: SiReact, color: "#0ea5e9" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#22c55e" },
  { name: "Express", icon: SiExpress, color: "#a1a1aa" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06b6d4" },
  { name: "MongoDB", icon: SiMongodb, color: "#16a34a" },
  { name: "Flutter", icon: SiFlutter, color: "#0284c7" },
  { name: "Dart", icon: SiDart, color: "#0175c2" },
  { name: "Firebase", icon: SiFirebase, color: "#f59e0b" },
  { name: "Docker", icon: SiDocker, color: "#2496ed" },
  { name: "Git", icon: SiGit, color: "#f05032" },
];

export default function Skills() {
  const { t, dir } = useLang();
  const { isDark } = useTheme();

  const getIconColor = (name: string, defaultColor: string) => {
    if (name === "Next.js") return isDark ? "#ffffff" : "#09090b";
    if (name === "Express") return isDark ? "#d4d4d8" : "#27272a";
    return defaultColor;
  };

  return (
    <section id="skills" className="section-container" dir={dir}>
      <div className="mb-16">
        <span className="text-[var(--color-text-muted)] font-mono text-xs uppercase tracking-[0.2em]">
          {t.skills.label}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mt-3">
          {t.skills.title1}{" "}
          <span className="accent-gradient">{t.skills.title2}</span>
        </h2>
        <p className="text-[var(--color-text-secondary)] mt-4 max-w-2xl text-base md:text-lg leading-relaxed">
          {t.skills.desc}
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }}
            className="group relative flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:bg-[var(--color-bg-card-hover)] hover:border-[var(--color-border-hover)] shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)`
              }}
            />
            <skill.icon
              className="text-4xl transition-transform duration-300 group-hover:scale-110"
              style={{ color: getIconColor(skill.name, skill.color) }}
            />
            <span className="text-xs font-bold tracking-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
