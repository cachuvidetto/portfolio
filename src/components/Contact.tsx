"use client";

import { motion } from "framer-motion";
import { HiMail, HiArrowRight } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { useLang } from "@/lib/LangContext";

const socials = [
  { icon: SiGithub, label: "GitHub", href: "https://github.com/alaaazayoud-debug" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/alaa-zayood-b41316352" },
  { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/963966262458" },
  { icon: HiMail, label: "Email", href: "mailto:alaazayood@gmail.com" },
];

export default function Contact() {
  const { t, dir } = useLang();

  return (
    <section id="contact" className="section-container" dir={dir}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative glass-card glow-teal p-10 md:p-16 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-dim)] via-transparent to-transparent opacity-50 pointer-events-none" />

        <div className="relative z-10">
          <span className="text-[var(--color-text-muted)] font-mono text-xs uppercase tracking-[0.2em] block mb-4">
            {t.contact.label}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.03em] mb-4">
            {t.contact.title1}
            <br />
            <span className="accent-gradient">{t.contact.title2}</span>
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-md mx-auto text-sm md:text-base mb-10">
            {t.contact.desc}
          </p>

          <a
            href="mailto:alaazayood@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--color-text-primary)] text-[var(--color-bg)] text-sm font-bold tracking-tight hover:opacity-90 shadow-lg transition-all active:scale-[0.97] mb-10"
          >
            {t.contact.cta}
            <HiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
          </a>

          <div className="flex justify-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-11 h-11 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/30 transition-all"
              >
                <social.icon className="text-lg" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="text-center mt-16 pb-8">
        <div className="text-[11px] text-[var(--color-text-muted)] font-mono tracking-[0.1em]">
          © {new Date().getFullYear()} — {t.contact.footer}{" "}
          <span className="text-[var(--color-text-secondary)]">Alaa</span>
        </div>
      </div>
    </section>
  );
}
