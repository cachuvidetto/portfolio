"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX, HiSun, HiMoon } from "react-icons/hi";
import { useLang } from "@/lib/LangContext";
import { useTheme } from "@/lib/ThemeContext";

export default function Navbar() {
  const { t, locale, toggleLocale, dir } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
      dir={dir}
    >
      <div
        className={`w-full max-w-4xl flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "glass-card shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-xl overflow-hidden shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
            <img
              src="/logo.svg"
              alt="Alaa Zayood Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-base font-bold tracking-tight">Alaa</span>
            <span className="accent-gradient text-base font-bold">Zayood</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-lg transition-all duration-300 ${
                activeSection === link.href.replace("#", "")
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
              }`}
            >
              {link.name}
              {activeSection === link.href.replace("#", "") && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-lg bg-[var(--color-accent-dim)]"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Right Side: Theme + Lang Toggle + CTA */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"
            }
            className="p-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/30 transition-all flex items-center justify-center cursor-pointer"
            title={
              theme === "dark"
                ? "الوضع النهاري / Light Mode"
                : "الوضع الليلي / Dark Mode"
            }
          >
            {theme === "dark" ? (
              <HiSun className="text-base" />
            ) : (
              <HiMoon className="text-base" />
            )}
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLocale}
            className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/30 transition-all cursor-pointer"
          >
            {locale === "en" ? "عربي" : "EN"}
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[var(--color-accent)] hover:brightness-110 transition-all active:scale-95"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-black/30 animate-pulse" />
            {t.nav.available}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-2">
          {/* Theme Toggle Mobile */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-all"
          >
            {theme === "dark" ? (
              <HiSun className="text-sm" />
            ) : (
              <HiMoon className="text-sm" />
            )}
          </button>

          <button
            onClick={toggleLocale}
            className="px-2.5 py-1 rounded-lg text-[10px] font-bold border border-[var(--color-border)] text-[var(--color-text-muted)]"
          >
            {locale === "en" ? "عربي" : "EN"}
          </button>

          <button
            className="text-xl text-[var(--color-text-secondary)] p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="absolute top-20 left-4 right-4 glass-card p-4 flex flex-col gap-1 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)] hover:text-white transition-all"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
