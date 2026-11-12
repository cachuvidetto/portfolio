"use client";

import { motion } from "framer-motion";
import { HiAcademicCap, HiCode, HiBriefcase } from "react-icons/hi";
import { useLang } from "@/lib/LangContext";

export default function Experience() {
  const { t, dir } = useLang();

  const timeline = [
    {
      icon: HiAcademicCap,
      title: t.experience.mscTitle,
      org: t.experience.mscOrg,
      period: t.experience.mscPeriod,
      description: t.experience.mscDesc,
      type: "education" as const,
    },
    {
      icon: HiBriefcase,
      title: t.experience.devTitle,
      org: t.experience.devOrg,
      period: t.experience.devPeriod,
      description: t.experience.devDesc,
      type: "work" as const,
    },
    {
      icon: HiCode,
      title: t.experience.freelanceTitle,
      org: t.experience.freelanceOrg,
      period: t.experience.freelancePeriod,
      description: t.experience.freelanceDesc,
      type: "work" as const,
    },
  ];

  return (
    <section id="experience" className="section-container" dir={dir}>
      <div className="mb-16">
        <span className="text-[var(--color-text-muted)] font-mono text-xs uppercase tracking-[0.2em]">
          {t.experience.label}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mt-3">
          {t.experience.title1}
          <span className="accent-gradient">{t.experience.title2}</span>
        </h2>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div
          className="absolute top-0 bottom-0 w-px bg-[var(--color-border)] hidden md:block"
          style={{ [dir === "rtl" ? "right" : "left"]: "1.25rem" }}
        />

        <div className="space-y-6">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: dir === "rtl" ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="flex gap-6 group"
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all group-hover:scale-110 ${
                    item.type === "education"
                      ? "border-[var(--color-accent)]/30 bg-[var(--color-accent-dim)] text-[var(--color-accent)]"
                      : "border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] group-hover:border-[var(--color-accent)]/30"
                  }`}
                >
                  <item.icon className="text-lg" />
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 glass-card p-6 md:p-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <span className="text-xs text-[var(--color-accent)]">{item.org}</span>
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.12em] font-semibold px-3 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] bg-[var(--color-bg-card-hover)]">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
