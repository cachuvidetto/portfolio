"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { translations, Locale } from "@/lib/translations";

type TranslationType = (typeof translations)[Locale];

interface LangContextType {
  locale: Locale;
  t: TranslationType;
  dir: "ltr" | "rtl";
  toggleLocale: () => void;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  const t = translations[locale];
  const dir = t.dir;

  return (
    <LangContext.Provider value={{ locale, t, dir, toggleLocale }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
