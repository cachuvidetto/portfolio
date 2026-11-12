"use client";

import { motion } from "framer-motion";
import {
  HiServer, HiDatabase, HiDeviceMobile, HiCog,
  HiExternalLink, HiShieldCheck, HiLightningBolt,
  HiChartBar, HiCube, HiPlay,
} from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { useLang } from "@/lib/LangContext";

export default function Projects() {
  const { t, dir } = useLang();

  const viaticaFeatures = [
    { icon: HiServer, title: t.projects.feat1, desc: t.projects.feat1Desc },
    { icon: HiShieldCheck, title: t.projects.feat2, desc: t.projects.feat2Desc },
    { icon: HiDatabase, title: t.projects.feat3, desc: t.projects.feat3Desc },
    { icon: HiDeviceMobile, title: t.projects.feat4, desc: t.projects.feat4Desc },
    { icon: HiChartBar, title: t.projects.feat5, desc: t.projects.feat5Desc },
    { icon: HiCog, title: t.projects.feat6, desc: t.projects.feat6Desc },
  ];

  const otherProjects = [
    {
      title: t.projects.menuTitle,
      subtitle: t.projects.menuSub,
      desc: t.projects.menuDesc,
      tags: ["React", "Vite", "Tailwind CSS", "Vercel"],
      icon: HiLightningBolt,
      demoUrl: "https://menu-app-three-ecru.vercel.app/",
      githubUrl: "https://github.com/cachuvidetto/menu-app",
      badge: "Vercel Live",
    },
    {
      title: t.projects.daratiaTitle,
      subtitle: t.projects.daratiaSub,
      desc: t.projects.daratiaDesc,
      tags: ["React", "Vercel", "Tailwind CSS", "Corporate"],
      icon: HiCube,
      demoUrl: "https://daratia.vercel.app/",
      githubUrl: "https://github.com/cachuvidetto/daratia-website",
      badge: "Vercel Live",
    },
    {
      title: t.projects.sanadTitle,
      subtitle: t.projects.sanadSub,
      desc: t.projects.sanadDesc,
      tags: ["Flutter", "Dart", "Appwrite", "Mobile App", "BaaS"],
      icon: HiDeviceMobile,
      demoUrl: undefined,
      githubUrl: "https://github.com/cachuvidetto/sanad-mobile-app",
      badge: "Mobile App",
    },
    {
      title: t.projects.bikeTitle,
      subtitle: t.projects.bikeSub,
      desc: t.projects.bikeDesc,
      tags: ["Python", "PyQt5", "SQLite", "Desktop ERP", "Inventory"],
      icon: HiServer,
      demoUrl: undefined,
      videoUrl: "https://youtu.be/n5d-QqQrZGw",
      githubUrl: "https://github.com/cachuvidetto/bike_shop_manager",
      badge: "Desktop App",
    },
    {
      title: t.projects.ezarTitle,
      subtitle: t.projects.ezarSub,
      desc: t.projects.ezarDesc,
      tags: ["Web", "Corporate", "Frontend", "UI/UX"],
      icon: HiChartBar,
      demoUrl: undefined,
      githubUrl: "https://github.com/cachuvidetto/ezar_group_website",
      badge: "Corporate Web",
    },
  ];

  return (
    <section id="projects" className="section-container" dir={dir}>
      <div className="mb-16">
        <span className="text-[var(--color-text-muted)] font-mono text-xs uppercase tracking-[0.2em]">
          {t.projects.label}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mt-3">
          {t.projects.title1}{" "}
          <span className="accent-gradient">{t.projects.title2}</span>
        </h2>
      </div>

      {/* ═══ VIATICA (FEATURED) ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <div className="glass-card glow-teal p-6 sm:p-8 md:p-10 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] bg-[var(--color-accent-dim)] text-[var(--color-accent)] mb-3">
                {t.projects.featured}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                {t.projects.viaticaTitle}
              </h3>
              <p className="text-[var(--color-text-secondary)] font-medium text-sm mt-1">
                {t.projects.viaticaSub}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://viatica-enterprise.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[var(--color-accent)] text-black hover:brightness-110 shadow-sm transition-all"
              >
                <HiExternalLink className="text-sm" />
                {t.projects.liveDemo}
              </a>

              <a
                href="https://youtu.be/5O5SCzk0-lo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all bg-[var(--color-bg-card)]"
              >
                <HiPlay className="text-sm text-red-500" />
                {t.projects.watchVideo}
              </a>

              <a
                href="https://github.com/cachuvidetto/viaitica-project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-hover)] transition-all bg-[var(--color-bg-card)]"
              >
                <SiGithub className="text-sm" />
                {t.projects.source}
              </a>
            </div>
          </div>

          <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-3xl text-sm md:text-base mb-8">
            {t.projects.viaticaDesc}
          </p>

          {/* Embedded YouTube Demo Video */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[var(--color-border)] bg-black/50 shadow-inner">
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/5O5SCzk0-lo"
              title="Viatica ERP Ecosystem Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* Architecture Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {viaticaFeatures.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="group glass-card p-6"
            >
              <feat.icon className="text-2xl text-[var(--color-accent)] mb-3 transition-transform group-hover:scale-110" />
              <h4 className="text-sm font-bold mb-1.5">{feat.title}</h4>
              <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-6">
          {[
            "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT",
            "Flutter", "Dart", "Dio", "React", "TypeScript",
            "Tailwind CSS", "Firebase", "REST API", "Vercel"
          ].map((tech) => (
            <span key={tech} className="tag-pill">{tech}</span>
          ))}
        </div>
      </motion.div>

      {/* ═══ MORE PRODUCTION PROJECTS ═══ */}
      <div className="mb-8">
        <h3 className="text-xl font-bold tracking-tight text-[var(--color-text-primary)]">
          {t.projects.otherTitle}
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {otherProjects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="glass-card p-7 flex flex-col justify-between group hover:border-[var(--color-border-hover)]"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <project.icon className="text-3xl text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--color-accent-dim)] text-[var(--color-accent)]">
                  {project.badge}
                </span>
              </div>

              <h4 className="text-xl font-bold tracking-tight text-[var(--color-text-primary)]">
                {project.title}
              </h4>
              <span className="text-xs font-medium text-[var(--color-accent)] block mt-0.5">
                {project.subtitle}
              </span>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mt-3 mb-6">
                {project.desc}
              </p>
            </div>

            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-[var(--color-border)]">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[var(--color-accent)] text-black hover:brightness-110 transition-all shadow-sm"
                  >
                    <HiExternalLink className="text-sm" />
                    {t.projects.liveDemo}
                  </a>
                )}
                {project.videoUrl && (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all bg-[var(--color-bg-card)] shadow-sm"
                  >
                    <HiPlay className="text-sm text-red-500" />
                    {t.projects.watchVideo}
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-hover)] transition-all bg-[var(--color-bg-card)]"
                  >
                    <SiGithub className="text-sm" />
                    {t.projects.source}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
