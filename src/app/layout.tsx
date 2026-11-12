import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alaa Zayood | Full Stack Developer · Odoo ERP Specialist · MSc Web Science",
  description:
    "Professional Portfolio of Alaa Zayood — Senior Full Stack & ERP Solutions Engineer with a Master's degree in Web Science. Specializing in Odoo ERP implementation, systems analysis, Node.js, React, Flutter, and enterprise systems.",
  keywords: [
    "Alaa Zayood",
    "Full Stack Developer",
    "Odoo ERP",
    "Systems Analysis",
    "ERP Implementation",
    "Web Science",
    "Node.js",
    "React",
    "Python",
    "Flutter",
    "Portfolio",
  ],
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
