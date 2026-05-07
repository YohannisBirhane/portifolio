"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { lang } = useLanguage();
  const t = translations[lang].nav;

  // For mobile menu state
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 py-2 shadow-sm" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        <Link href="/" className="text-2xl font-extrabold text-blue-500 tracking-tight hover:scale-105 active:scale-95 transition-transform duration-300 inline-block">
          YohannisBirhane
        </Link>

        <div className="flex items-center gap-8 lg:gap-12">
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 lg:gap-8 font-medium items-center text-sm md:text-base"> 
            <Link href="/" className="relative group text-slate-800 dark:text-gray-200">
              <span className="group-hover:text-blue-500 transition-colors">{t.home || "Home"}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/#about" className="relative group text-slate-800 dark:text-gray-200">
              <span className="group-hover:text-blue-500 transition-colors">{t.about || "About"}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/#skills" className="relative group text-slate-800 dark:text-gray-200">
              <span className="group-hover:text-blue-500 transition-colors">Skills</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/#projects" className="relative group text-slate-800 dark:text-gray-200">
              <span className="group-hover:text-blue-500 transition-colors">{t.projects || "Projects"}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/#contact" className="relative group text-slate-800 dark:text-gray-200">
              <span className="group-hover:text-blue-500 transition-colors">{t.contact || "Contact"}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Global actions: Theme Toggle + CV + Mobile Menu */}
          <div className="flex items-center gap-4">
            <a href="/cv.pdf" target="_blank" className="hidden md:inline-block bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 text-white font-semibold py-2 px-5 rounded-lg transition-opacity shadow-lg shadow-blue-500/20">
              Download CV
            </a>

            <div className="hover:scale-110 active:scale-90 transition-transform">
              <ThemeToggle />
            </div>

            <button className="md:hidden p-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}
