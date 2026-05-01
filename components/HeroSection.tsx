"use client";

import Image from "next/image";
import { Briefcase, Download, Code2, Bot, Database } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section id="home" className="flex flex-col-reverse md:flex-row items-center gap-12 pt-10">
      {/* Left — Text */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 text-center md:text-left"
      >
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-semibold mb-6 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          {personalInfo.availability}
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 leading-[1.1] text-slate-900 dark:text-white">
          Hi, I&apos;m {personalInfo.name}. <br />
          <span className="text-blue-600 block min-h-[1.2em]">
            <TypeAnimation
              sequence={[
                "Developer Engineer",
                2000,
                "IoT Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mb-8 mx-auto md:mx-0">
          {personalInfo.bio}
        </p>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <a
            href="/Resume_Apiwat_Nonut.pdf"
            download="Resume_Apiwat_Nonut.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex justify-center items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors group"
          >
            Download Resume
            <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex justify-center items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Right — Avatar */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="relative w-48 h-64 md:w-60 md:h-80 shrink-0 group perspective-1000"
      >
        {/* Animated glowing ring */}
        <div 
          className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500 via-purple-500 to-emerald-500 opacity-30 dark:opacity-40 blur-2xl group-hover:opacity-60 transition-opacity duration-700 animate-spin" 
          style={{ animationDuration: '8s' }} 
        />

        {/* Shadow offset background */}
        <div className="absolute inset-0 rounded-3xl bg-slate-200 dark:bg-slate-800 transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500 ease-out" />

        {/* Profile Image */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-900 shadow-xl group-hover:scale-105 group-hover:-rotate-2 transition-all duration-500 ease-out z-10 bg-white dark:bg-slate-900">
          <Image
            src={personalInfo.avatar}
            alt={personalInfo.fullName}
            fill
            quality={100}
            unoptimized
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Experience badge */}
        <div className="absolute bottom-4 -left-6 bg-white dark:bg-slate-900 p-3 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2 z-20 group-hover:-translate-y-3 group-hover:scale-110 transition-all duration-500 ease-out delay-100 hover:!scale-110">
          <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg text-blue-600 dark:text-blue-400">
            <Briefcase size={20} className="animate-bounce" style={{ animationDuration: '2.5s' }} />
          </div>
          <div className="text-left">
            <div className="font-bold text-slate-900 dark:text-white leading-tight text-sm">
              {personalInfo.yearsOfExperience} Years
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Experience</div>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute -top-2 -right-2 bg-white dark:bg-slate-900 p-2.5 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
          <Code2 className="text-blue-500 w-5 h-5" />
        </div>
        
        <div className="absolute top-1/2 -right-6 bg-white dark:bg-slate-900 p-2.5 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 z-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
          <Bot className="text-purple-500 w-5 h-5" />
        </div>

        <div className="absolute -bottom-2 right-4 bg-white dark:bg-slate-900 p-2.5 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 z-20 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '2s' }}>
          <Database className="text-emerald-500 w-5 h-5" />
        </div>
      </motion.div>
    </section>
  );
}
