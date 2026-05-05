"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, BookOpen, Layers, CheckCircle2, Cpu, Wifi, Monitor, User, Target, Lightbulb, ImageIcon } from "lucide-react";
import { type Project } from "@/lib/data";

type Props = {
  project: Project;
  onClose: () => void;
};

export default function StudentAttendanceModal({ project, onClose }: Props) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const d = project.details;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:p-6 pt-[80px]">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-5xl h-[calc(100vh-100px)] bg-white dark:bg-slate-950 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Fixed Header */}
          <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 z-30 relative shadow-sm">
            <div className="flex flex-col gap-1 pr-4">
              <h2 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white line-clamp-1">
                {project.title}
              </h2>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1"><Calendar size={14} /> {project.duration}</span>
                <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 font-bold uppercase text-[10px] tracking-wider">
                  Hardware Integration
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full transition-colors shrink-0"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Scrolling Content */}
          <div className="overflow-y-auto flex-1 custom-scrollbar bg-slate-50 dark:bg-slate-900/20">
            {/* Header Image */}
            <div className="relative h-48 sm:h-72 w-full bg-slate-900">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-60"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h1 className="text-2xl sm:text-4xl font-black text-white drop-shadow-lg leading-tight max-w-3xl">
                  Automating Roll Calls with NFC & RFID Technology
                </h1>
              </div>
            </div>

            <div className="p-4 sm:p-8">
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-bold px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                    {tag}
                  </span>
                ))}
              </div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
                {/* Context & Problem */}
                <section className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800">
                    <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <BookOpen size={20} className="text-blue-500" /> Background
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {d?.context}
                    </p>
                    <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500">
                      <p className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-1">Pain Point</p>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{d?.painPoint}</p>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800">
                    <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Target size={20} className="text-emerald-500" /> Objective & Role
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {d?.objective}
                    </p>
                    <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/10 border-l-4 border-purple-500">
                      <p className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-1 flex items-center gap-2"><User size={14}/> My Role</p>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{d?.yourRole}</p>
                    </div>
                  </div>
                </section>

                {/* Results & Lessons */}
                <section className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30">
                    <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-orange-500" /> Key Results
                    </h3>
                    <ul className="space-y-3">
                      {d?.results?.map((r, i) => (
                        <li key={i} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 size={16} className="text-orange-500 flex-shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30">
                    <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Lightbulb size={20} className="text-indigo-500" /> Lessons Learned
                    </h3>
                    <ul className="space-y-3">
                      {d?.lessonsLearned?.map((l, i) => (
                        <li key={i} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                          <span className="text-indigo-500 font-bold flex-shrink-0 mt-0.5">•</span>
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                {/* System Features */}
                <section>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <Layers size={22} className="text-purple-500" /> System Features
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {d?.features?.map((f, i) => {
                      const [title, desc] = f.split(': ');
                      return (
                        <div key={i} className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
                          <h4 className="font-bold text-slate-900 dark:text-white mb-2">{title || f}</h4>
                          {desc && <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* Hardware Integration */}
                <section>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <Cpu size={22} className="text-slate-500" /> Hardware Integration
                  </h3>
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-4 p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm flex-1 min-w-[250px]">
                      <div className="p-3 bg-blue-100 text-blue-600 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
                        <Wifi size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">RFID/NFC Reader</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Reads student cards for check-in</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm flex-1 min-w-[250px]">
                      <div className="p-3 bg-emerald-100 text-emerald-600 rounded-full dark:bg-emerald-900/30 dark:text-emerald-400">
                        <Monitor size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">LCD Display / Tablet</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Displays check-in confirmation</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* System Gallery */}
                <section>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                    <ImageIcon size={22} className="text-purple-500" /> System Interface
                  </h3>
                  <p className="text-sm text-slate-500 mb-6">Screenshots of the web application spanning Admin, Teacher, and Student portals.</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {d?.gallery?.map((img, i) => (
                      <div key={i} className="group relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white shadow-sm hover:shadow-lg transition-all h-48 sm:h-64">
                        <Image 
                          src={img} 
                          alt={`Student Attendance screenshot ${i + 1}`} 
                          fill 
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                          sizes="(max-width: 768px) 100vw, 50vw" 
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                      </div>
                    ))}
                  </div>
                </section>
              </motion.div>

              <div className="h-12"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
