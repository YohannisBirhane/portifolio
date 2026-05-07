"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div className="relative flex flex-col min-h-screen font-sans text-gray-900 dark:text-gray-50 transition-colors duration-300 overflow-hidden">
      {/* Dynamic Split Background completely transparent to reveal global cosmic bg */}
      <div className="absolute inset-0 flex pointer-events-none z-[-1] opacity-0">
        <div className="flex-1 bg-[#eeeffc] dark:bg-[#1a1b26] transition-colors duration-200"></div>
        <div className="flex-1 bg-white dark:bg-[#12121c] transition-colors duration-200"></div>
      </div>

      {/* 1. HERO SECTION */}
      <main className="flex flex-col lg:flex-row items-center justify-between relative z-10 w-full min-h-screen text-left py-20 px-10 xl:px-24 max-w-7xl mx-auto pt-32">
        
        {/* Left Content Block */}
        <div className="flex flex-col items-start justify-center space-y-6 max-w-2xl w-full lg:w-3/5 z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-800 dark:text-white leading-tight"
          >
            Hi, I'm <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-cyan-400">Yohannis Birhane</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium text-slate-700 dark:text-gray-300 mt-2"
          >
            Full Stack Developer | Software Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-xl leading-relaxed mt-6"
          >
            Motivated Software Engineering student and full-stack developer passionate about building efficient, scalable, and user-friendly web applications. Skilled in modern front-end and back-end technologies with strong foundations in data structures and algorithms.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <Link href="#projects" className="px-8 py-3 rounded-lg bg-linear-to-r from-blue-500 to-cyan-400 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/30">
              View My Projects
            </Link>
            <a href="/cv.pdf" target="_blank" className="px-8 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/40 text-slate-800 dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors backdrop-blur-md">
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex gap-4 mt-12"
          >
            <a href="https://github.com/YohannisBirhane?tab=repositories" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white transition-all hover:scale-105" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/yohannis-birhane-5456163a2/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] dark:hover:bg-[#0A66C2] dark:hover:text-white dark:hover:border-[#0A66C2] transition-all hover:scale-105" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" strokeWidth="0"/><circle cx="4" cy="4" r="2" strokeWidth="0"/></svg>
            </a>
            <a href="mailto:yohannesb139@gmail.com" className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-red-500 hover:text-white hover:border-red-500 dark:hover:bg-red-500 dark:hover:text-white dark:hover:border-red-500 transition-all hover:scale-105" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
          </motion.div>
        </div>

        {/* Right Image Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mt-20 lg:mt-0 w-full lg:w-2/5 flex justify-center lg:justify-end z-10"
        >
          {/* Animated decorative elements behind/around the image */}
          <motion.div 
            animate={{ y: [0, -15, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-10 -left-6 z-20 bg-white dark:bg-slate-800/80 p-3 rounded-full border border-gray-200 dark:border-gray-700 backdrop-blur-md shadow-lg"
          >
            🚀
          </motion.div>
          <motion.div 
            animate={{ y: [0, 15, 0] }} 
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute bottom-10 left-10 z-20 bg-white dark:bg-slate-800/80 p-4 rounded-full border border-gray-200 dark:border-gray-700 backdrop-blur-md shadow-lg"
          >
            💡
          </motion.div>

          {/* Main Image Container */}
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full p-2 bg-linear-to-tr from-green-500 via-emerald-400 to-transparent">
            <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-white dark:border-[#111222] bg-linear-to-b from-sky-300 to-green-500 dark:from-sky-900 dark:to-green-900 relative flex items-center justify-center">
              <Image 
                src="/images/profile2.png" 
                alt="Yohannis Birhane"
                fill
                priority
                className="object-cover object-top rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Abstract shapes mimicking the reference design */}
        <div className="absolute top-[20%] right-[5%] w-24 h-24 border border-slate-300 dark:border-slate-700/50 rounded-sm rotate-45 z-0 opacity-50"></div>
        <div className="absolute bottom-[20%] right-[25%] w-16 h-16 border border-slate-300 dark:border-slate-700/50 rounded-sm rotate-12 z-0 opacity-50"></div>
        <div className="absolute bottom-[30%] left-[45%] w-20 h-20 border border-slate-300 dark:border-slate-700/50 rounded-sm -rotate-12 z-0 opacity-50"></div>

      </main>

      {/* Dynamic Sections Placeholders */}
                        {/* ABOUT SECTION */}
      <section id="about" className="py-24 relative bg-transparent overflow-hidden scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6"
            >
              About <span className="text-blue-500">Me</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-700 dark:text-gray-300 leading-relaxed"
            >
              Learn more about my journey, skills, and goals as a full stack developer. My main focus is on building scalable, responsive, and user-friendly web applications using modern tools and frameworks such as React, Next.js, Node.js, and Tailwind CSS.
            </motion.p>
          </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Card 1: My Story */}
            <motion.div 
              className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 rounded-2xl p-10 relative overflow-hidden group shadow-lg"
            >
              <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-blue-500/40 to-purple-500/40 blur-md group-hover:h-2 transition-all"></div>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500"></div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">My Story</h3>
              
              <div className="space-y-4 text-slate-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                <p>
                  I'm <strong className="text-slate-900 dark:text-white font-bold">Yohannis Birhane</strong>, a <strong className="text-slate-900 dark:text-white font-bold">Software Engineering student</strong> based in <strong className="text-slate-900 dark:text-white font-bold">Debre Berhan, Ethiopia</strong>, passionate about solving problems through technology.
                </p>
                <p>
                  My main focus is on building scalable, responsive, and user-friendly web applications using modern tools and frameworks such as <strong className="text-slate-900 dark:text-white font-bold">React, Next.js, Node.js, and Tailwind CSS</strong>.
                </p>
                <p>
                  I love participating in hackathons, working on open-source projects, and continuously exploring new technologies that enhance web development and improve user experience.
                </p>
              </div>

              <div className="mt-8 flex justify-between text-sm md:text-base">
                <div>
                  <span className="text-blue-600 dark:text-blue-500 font-semibold mb-1 block">Email:</span>
                  <span className="text-slate-700 dark:text-gray-300">yohannesb139@gmail.com</span>
                </div>
                <div>
                  <span className="text-blue-600 dark:text-blue-500 font-semibold mb-1 block">Phone:</span>
                  <span className="text-slate-700 dark:text-gray-300">+251-931-034-560</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Interests & Goals */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 rounded-2xl p-10 relative overflow-hidden group shadow-lg"
            >
              <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-blue-500/40 to-purple-500/40 blur-md group-hover:h-2 transition-all"></div>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500"></div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Interests & Goals</h3>
              
              <ul className="space-y-4 text-slate-700 dark:text-gray-300 text-sm md:text-base">
                <li className="flex items-center gap-3">
                  <span className="text-blue-500 font-bold">✦</span>
                  Full Stack Web Development
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500 font-bold">✦</span>
                  Data Structures & Algorithms
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500 font-bold">✦</span>
                  Artificial Intelligence & Machine Learning
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500 font-bold">✦</span>
                  Team Collaboration & Agile Development
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500 font-bold">✦</span>
                  Cybersecurity
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500 font-bold">✦</span>
                  Problem Solving
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Abstract shapes referencing the design */}
        <div className="absolute left-[5%] top-[10%] w-32 h-32 border border-slate-300 dark:border-slate-700/30 rounded-sm rotate-12 z-0"></div>
        <div className="absolute right-[5%] bottom-[20%] w-40 h-40 border border-slate-300 dark:border-slate-700/30 rounded-sm -rotate-12 z-0"></div>
      </section>

            {/* SKILLS SECTION */}
      <section id="skills" className="py-24 relative bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6"
            >
              Technical <span className="text-blue-500">Skills</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-700 dark:text-gray-300"
            >
              Technologies and tools I use to design, develop, and deploy modern web applications.
            </motion.p>
          </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Category 1: Frontend Technologies */}
            <motion.div 
              className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 rounded-3xl p-10 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Frontend Technologies</h3>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                {[
                  { name: "HTML5", score: "95%", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" className="w-10 h-10" /> },
                  { name: "CSS3", score: "90%", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" className="w-10 h-10" /> },
                  { name: "JavaScript", score: "90%", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10" /> },
                  { name: "React", score: "85%", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="w-10 h-10" /> },
                  { name: "Next.js", score: "80%", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-10 h-10 dark:invert" /> },
                  { name: "Tailwind", score: "85%", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" className="w-10 h-10" /> }
                ].map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center group cursor-pointer">
                    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 flex items-center justify-center text-2xl mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="font-bold text-slate-800 dark:text-gray-200 text-sm mb-1">{skill.name}</span>
                    <span className="text-xs text-slate-500 dark:text-gray-400">{skill.score} Proficiency</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Category 2: Backend & Programming */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 rounded-3xl p-10 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Backend & Programming</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { name: "Node.js", score: "80%", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-10 h-10" /> },
                  { name: "Express.js", score: "75%", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express.js" className="w-10 h-10 dark:invert" /> },
                  { name: "PHP", score: "72%", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP" className="w-10 h-10" /> },
                  { name: "Java", score: "75%", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" className="w-10 h-10" /> },
                  { name: "Spring Boot", score: "70%", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Spring Boot" className="w-10 h-10" /> },
                  { name: "Laravel", score: "72%", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" alt="Laravel" className="w-10 h-10" /> },
                  { name: "Python", score: "80%", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="w-10 h-10" /> },
                  { name: "C++", score: "75%", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-10 h-10" /> }
                ].map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center group cursor-pointer">
                    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 flex items-center justify-center text-2xl mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300 font-bold text-slate-700 dark:text-white">
                      {skill.icon}
                    </div>
                    <span className="font-bold text-slate-800 dark:text-gray-200 text-sm mb-1">{skill.name}</span>
                    <span className="text-xs text-slate-500 dark:text-gray-400">{skill.score} Proficiency</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Category 3: Database Management */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 rounded-3xl p-10 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Database Management</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: "PostgreSQL", score: "80%", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-10 h-10" /> },
                  { name: "MySQL", score: "82%", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" className="w-10 h-10" /> },
                  { name: "MongoDB", score: "80%", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-10 h-10" /> }
                ].map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center group cursor-pointer">
                    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 flex items-center justify-center text-2xl mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="font-bold text-slate-800 dark:text-gray-200 text-sm mb-1">{skill.name}</span>
                    <span className="text-xs text-slate-500 dark:text-gray-400">{skill.score} Proficiency</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Category 4: Tools & Methodologies */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 rounded-3xl p-10 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Tools & Methodologies</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: "Git & GitHub", score: "85%", icon: "🐙" },
                  { name: "Agile", score: "75%", icon: "🔄" },
                  { name: "Jira", score: "78%", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" alt="Jira" className="w-10 h-10" /> },
                  { name: "VS Code", score: "90%", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VS Code" className="w-10 h-10" /> }
                ].map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center group cursor-pointer">
                    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 flex items-center justify-center text-2xl mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="font-bold text-slate-800 dark:text-gray-200 text-sm mb-1">{skill.name}</span>
                    <span className="text-xs text-slate-500 dark:text-gray-400">{skill.score} Proficiency</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section id="projects" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <div className="w-16 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* 2-Column Grid Layout matching the reference image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Project 1: Kids Learning Platform */}
            <div className="group cursor-pointer relative">
              <div className="w-full aspect-4/3 bg-gray-100 dark:bg-slate-800 rounded-lg overflow-hidden shadow-md flex items-center justify-center relative mb-6">
                <Image src="/images/kidslearning.png" alt="Kids Learning Platform" fill className="object-cover group-hover:scale-110 transition-transform duration-500 z-0" /> 
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/50 transition-colors duration-300 z-10"></div>
                
                {/* Hover Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <a href="https://ethiopisforkids.netlify.app/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-white text-indigo-600 font-bold rounded-full hover:bg-indigo-50 transition-colors shadow-lg">
                    Live Demo
                  </a>
                  <a href="https://github.com/YohannisBirhane/-updated-tectonic-project" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-gray-900 border border-gray-700 text-white font-bold rounded-full hover:bg-gray-800 transition-colors shadow-lg">
                    GitHub Code
                  </a>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Kids Learning Platform
              </h3>
            </div>

            {/* Project 2: Transportation Booking System */}
            <div className="group cursor-pointer relative">
              <div className="w-full aspect-4/3 bg-gray-100 dark:bg-slate-800 rounded-lg overflow-hidden shadow-md flex items-center justify-center relative mb-6">
                <Image src="/images/transportation.png" alt="Transportation Booking System" fill className="object-cover group-hover:scale-110 transition-transform duration-500 z-0" /> 
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/50 transition-colors duration-300 z-10"></div>
                
                {/* Hover Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <a href="https://winnergoo.netlify.app/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg">
                    Live Demo
                  </a>
                  <a href="https://github.com/YohannisBirhane?tab=repositories" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-gray-900 border border-gray-700 text-white font-bold rounded-full hover:bg-gray-800 transition-colors shadow-lg">
                    GitHub Code
                  </a>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Transportation Booking
              </h3>
            </div>

            {/* Project 3: Job Portal System */}
            <div className="group cursor-pointer relative">
              <div className="w-full aspect-4/3 bg-gray-100 dark:bg-slate-800 rounded-lg overflow-hidden shadow-md flex items-center justify-center relative mb-6">
                {/* Replace the emoji with an Image tag later. Example: 
                  <Image src="/images/project3.jpg" alt="Job Portal System" fill className="object-cover group-hover:scale-110 transition-transform duration-500 z-0" /> 
                */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/50 transition-colors duration-300 z-10"></div>
                <span className="text-8xl group-hover:scale-110 transition-transform duration-500 drop-shadow-lg z-0">💼</span>
                
                {/* Hover Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-white text-teal-600 font-bold rounded-full hover:bg-teal-50 transition-colors shadow-lg">
                    Live Demo
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-gray-900 border border-gray-700 text-white font-bold rounded-full hover:bg-gray-800 transition-colors shadow-lg">
                    GitHub Code
                  </a>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Job Portal System
              </h3>
            </div>

            {/* Project 4: DBUGG Portal */}
            <div className="group cursor-pointer relative">
              <div className="w-full aspect-4/3 bg-gray-100 dark:bg-slate-800 rounded-lg overflow-hidden shadow-md flex items-center justify-center relative mb-6">
                {/* Replace the emoji with an Image tag later. Example: 
                  <Image src="/images/project4.jpg" alt="DBUGG Portal" fill className="object-cover group-hover:scale-110 transition-transform duration-500 z-0" /> 
                */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/50 transition-colors duration-300 z-10"></div>
                <span className="text-8xl group-hover:scale-110 transition-transform duration-500 drop-shadow-lg z-0">🐛</span>
                
                {/* Hover Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-white text-red-600 font-bold rounded-full hover:bg-red-50 transition-colors shadow-lg">
                    Live Demo
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-gray-900 border border-gray-700 text-white font-bold rounded-full hover:bg-gray-800 transition-colors shadow-lg">
                    GitHub Code
                  </a>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                DBUGG Portal
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight inline-block relative border-b-4 border-blue-600 dark:border-blue-500 pb-2">
              Let's Connect
            </h2>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always open to discussing web development work or partnership opportunities.
            </p>
          </div>

          <div className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-md rounded-4xl p-8 md:p-12 shadow-lg border border-white/40 dark:border-slate-700/50 flex flex-col md:flex-row gap-12 lg:gap-20">
            {/* Contact Information Panel */}
            <div className="flex-1 space-y-8 flex flex-col justify-center">
              <div>
                <h3 className="text-3xl font-extrabold mb-8 text-gray-900 dark:text-white">Get in Touch</h3>
                
                <div className="space-y-6">
                  {/* Name */}
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-slate-700/50 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                      <span className="font-bold text-xl">Y</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Name</p>
                      <p className="text-lg font-bold text-gray-900 dark:text-white">Yohannis Birhane</p>
                    </div>
                  </div>

                  {/* Email */}
                  <a href="mailto:yohannesb139@gmail.com" className="flex items-center gap-4 group hover:bg-white/40 dark:hover:bg-slate-800/40 p-2 -ml-2 rounded-xl transition-colors">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-slate-700/50 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:rotate-6 transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Email</p>
                      <p className="text-lg font-bold text-gray-900 dark:text-white">yohannesb139@gmail.com</p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a href="tel:+251931034560" className="flex items-center gap-4 group hover:bg-white/40 dark:hover:bg-slate-800/40 p-2 -ml-2 rounded-xl transition-colors">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-slate-700/50 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:-rotate-6 transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Phone</p>
                      <p className="text-lg font-bold text-gray-900 dark:text-white">+251931034560</p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-slate-700/50 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Location</p>
                      <p className="text-lg font-bold text-gray-900 dark:text-white">Ethiopia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-gray-200 dark:border-slate-700/50">
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">Also available on</p>
                <div className="flex gap-4">
                  {/* GitHub */}
                  <a href="https://github.com/YohannisBirhane?tab=repositories" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-100 peer dark:bg-slate-700/50 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all hover:scale-110 shadow-sm">
                    <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a11.9 11.9 0 0 0-6 0C6.2 1.5 5.1 1.8 5.1 1.8a4.2 4.2 0 0 0-.1 3.2 4.6 4.6 0 0 0-1.3 3.2c0 5.77 3.35 6.79 6.5 7.17A4.8 4.8 0 0 0 9 18v4"/><path d="M9 20c-5 1.5-5-2.5-7-3"/></svg>
                  </a>
                  {/* LinkedIn */}
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-100 dark:bg-slate-700/50 rounded-full flex items-center justify-center text-[#0A66C2] dark:text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white dark:hover:bg-[#0A66C2] dark:hover:text-white transition-all hover:-translate-y-1 shadow-sm">
                    <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  {/* Telegram */}
                  <a href="https://t.me/+251931034560" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-100 dark:bg-slate-700/50 rounded-full flex items-center justify-center text-[#24A1DE] dark:text-[#24A1DE] hover:bg-[#24A1DE] hover:text-white dark:hover:bg-[#24A1DE] dark:hover:text-white transition-all hover:-translate-y-1 shadow-sm">
                    <Send size={22} className="-ml-0.5" />
                  </a>
                  {/* WhatsApp */}
                  <a href="https://wa.me/251931034560" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-100 dark:bg-slate-700/50 rounded-full flex items-center justify-center text-[#25D366] dark:text-[#25D366] hover:bg-[#25D366] hover:text-white dark:hover:bg-[#25D366] dark:hover:text-white transition-all hover:-translate-y-1 shadow-sm">
                    <MessageCircle size={22} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact Message Form */}
            <ContactForm />
          </div>
        </div>
      </section>

    </div>
  );
}






