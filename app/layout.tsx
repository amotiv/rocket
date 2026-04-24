import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "RocketSolutions | Enterprise AI Solutions & Web Development",
  description: "Modernize your operations with RocketSolutions. We build high-performance web infrastructure and integrate intelligent AI agents to maximize efficiency.",
  keywords: "AI Agents, Web Infrastructure, B2B Automation, High Performance Websites, Next.js, AI Transformation",
  openGraph: {
    title: "RocketSolutions | The Future of B2B Operations",
    description: "Modernize your operations with RocketSolutions. We build high-performance web infrastructure and integrate intelligent AI agents.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-slate-900 text-slate-50 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1 w-full relative pt-20">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
