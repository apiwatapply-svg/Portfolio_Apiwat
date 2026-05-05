"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, BookOpen, Cpu, CheckCircle2, Layers, GitMerge, ArrowRight, ArrowDown, Lightbulb, AlertTriangle, ImageIcon, Presentation, Target, User, TrendingUp, GraduationCap, BarChart2, Workflow, Camera, Server, Activity, Wifi, Bot, Cloud, Code } from "lucide-react";
import { type Project } from "@/lib/data";
import AnimationFlow from "@/components/AnimationFlow";

const getHardwareIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case "Camera": return <Camera size={24} className={className} />;
    case "Server": return <Server size={24} className={className} />;
    case "Activity": return <Activity size={24} className={className} />;
    case "Wifi": return <Wifi size={24} className={className} />;
    case "Bot": return <Bot size={24} className={className} />;
    case "Cloud": return <Cloud size={24} className={className} />;
    case "Code": return <Code size={24} className={className} />;
    case "Layers": return <Layers size={24} className={className} />;
    case "Lightbulb": return <Lightbulb size={24} className={className} />;
    default: return <Cpu size={24} className={className} />;
  }
};

const themeMap = {
  blue: { badge: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300", dot: "bg-blue-500", border: "border-blue-200 dark:border-blue-800", activeTab: "text-blue-600 border-blue-600" },
  emerald: { badge: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300", dot: "bg-emerald-500", border: "border-emerald-200 dark:border-emerald-800", activeTab: "text-emerald-600 border-emerald-600" },
  purple: { badge: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300", dot: "bg-purple-500", border: "border-purple-200 dark:border-purple-800", activeTab: "text-purple-600 border-purple-600" },
  orange: { badge: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300", dot: "bg-orange-500", border: "border-orange-200 dark:border-orange-800", activeTab: "text-orange-600 border-orange-600" },
};

type Props = {
  project: Project;
  onClose: () => void;
};

export default function CoffeeShopPosModal({ project, onClose }: Props) {
  const [activeTab, setActiveTab] = useState<"overview" | "technical" | "presentation" | "visuals">("overview");

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const t = themeMap[project.theme];
  const d = project.details;

  const hasTechnicalData = d?.workflow?.length || d?.technicalHighlights?.length || d?.challenges?.length;
  const hasPresentationData = d?.context || d?.yourRole;
  const hasVisualData = d?.metrics?.length || d?.userFlow?.length || d?.programFlow?.length;

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
                {project.isFeatured && (
                  <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-bold uppercase text-[10px] tracking-wider">
                    Featured
                  </span>
                )}
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
          <div className="overflow-y-auto flex-1 custom-scrollbar">
            {/* Header Image */}
            <div className="relative h-48 sm:h-72 w-full bg-slate-100 dark:bg-slate-800">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div className="p-4 sm:p-8">
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className={`text-xs font-bold px-3 py-1.5 rounded-full ${t.badge}`}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Tabs (Sticky) */}
              {(hasTechnicalData || hasVisualData) && (
                <div className="sticky top-0 z-20 flex flex-wrap border-b border-slate-200 dark:border-slate-800 mb-8 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md pt-2 -mx-4 px-4 sm:-mx-8 sm:px-8">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`px-5 py-3 text-sm font-bold border-b-2 transition-colors ${
                      activeTab === "overview"
                      ? t.activeTab
                      : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                    }`}
                  >
                    Overview & Results
                  </button>
                  {hasTechnicalData && (
                    <button
                      onClick={() => setActiveTab("technical")}
                      className={`px-5 py-3 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
                        activeTab === "technical"
                        ? t.activeTab
                        : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                      }`}
                    >
                      <GitMerge size={16} /> Technical Details
                    </button>
                  )}
                  {hasVisualData && (
                    <button
                      onClick={() => setActiveTab("visuals")}
                      className={`px-5 py-3 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
                        activeTab === "visuals"
                        ? t.activeTab
                        : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                      }`}
                    >
                      <BarChart2 size={16} /> Visuals & Flow
                    </button>
                  )}
                </div>
              )}

              {/* TAB 1: OVERVIEW & RESULTS */}
              {activeTab === "overview" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-10"
                >
                  {/* Top Video Player */}
                  {d?.videoUrl && (
                    <section className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-black aspect-video relative">
                      <video 
                        src={d.videoUrl} 
                        controls 
                        autoPlay 
                        muted 
                        loop 
                        className="absolute inset-0 w-full h-full object-contain"
                      />
                    </section>
                  )}

                  {/* Context & Problem / Basic Overview */}
                  <section className="space-y-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <BookOpen size={20} className={t.dot.replace('bg-', 'text-')} /> 
                      Project Overview
                    </h3>
                    
                    {d?.context || d?.origin || d?.painPoint ? (
                      <div className="space-y-3">
                        {d?.context && (
                          <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border-l-4 border-blue-400 shadow-sm">
                            <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-1">What is this project?</p>
                            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{d.context}</p>
                          </div>
                        )}
                        {d?.origin && (
                          <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border-l-4 border-slate-300 dark:border-slate-600 shadow-sm">
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Background</p>
                            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{d.origin}</p>
                          </div>
                        )}
                        {d?.painPoint && (
                          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/10 border-l-4 border-red-400 shadow-sm">
                            <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Pain Point</p>
                            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{d.painPoint}</p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                          {project.description}
                        </p>
                      </div>
                    )}
                  </section>

                  {/* Objective & Role */}
                  {(d?.objective || d?.yourRole) && (
                    <section className="space-y-6">
                      {d?.objective && (
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <Target size={20} className="text-emerald-500" /> Objectives
                          </h3>
                          <div className={`p-4 rounded-lg border-l-4 ${t.border} bg-white dark:bg-slate-900 shadow-sm`}>
                            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">{d.objective}</p>
                          </div>
                        </div>
                      )}
                      
                      {d?.yourRole && (
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <User size={20} className="text-purple-500" /> My Role
                          </h3>
                          <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{d.yourRole}</p>
                            {d?.keySkillsUsed && (
                              <div className="mt-3 flex flex-wrap gap-2">
                                {d.keySkillsUsed.map((skill, i) => (
                                  <span key={i} className={`px-2 py-1 rounded text-xs font-bold ${t.badge}`}>{skill}</span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </section>
                  )}

                {/* Methodology & Challenges */}
                {(d?.methodology || d?.features || d?.challenges) && (
                  <section>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Layers size={20} className="text-purple-500" />
                      {d.methodology ? "Methodology & Development" : "Key Features"}
                    </h3>
                    
                    <div className="space-y-4">
                      {(d.methodology || d.features) && (
                        <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                          <ol className="space-y-4">
                            {(d.methodology ?? d.features ?? []).map((item, i) => (
                              <li key={i} className="flex gap-4">
                                <span className={`mt-0.5 w-6 h-6 rounded-full ${t.badge} flex-shrink-0 flex items-center justify-center text-[11px] font-bold`}>
                                  {d.methodology ? i + 1 : "✓"}
                                </span>
                                <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-0.5">{item}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                      
                      {d?.challenges && d.challenges.length > 0 && (
                        <div className="p-5 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30">
                          <p className="text-xs font-black text-red-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <AlertTriangle size={14} /> Challenges & Solutions
                          </p>
                          <div className="space-y-4">
                            {d.challenges.map((ch, i) => (
                              <div key={i} className="text-sm bg-white dark:bg-slate-900 p-4 rounded-lg border border-red-100 dark:border-red-900/20 shadow-sm">
                                <p className="font-bold text-slate-800 dark:text-slate-200 mb-2">Problem: <span className="font-normal text-slate-600 dark:text-slate-400">{ch.issue}</span></p>
                                <p className="font-bold text-emerald-600 dark:text-emerald-400">Solution: <span className="font-normal text-slate-600 dark:text-slate-400">{ch.solution}</span></p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </section>
                )}

                  {/* Hardware Components */}
                  {d?.hardware && (
                    <section>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Cpu size={20} className="text-emerald-500" /> 
                        Hardware Components
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {d.hardware.map((hw) => (
                          <div key={hw.name} className="flex flex-col justify-center items-center text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors gap-2">
                            {getHardwareIcon(hw.icon, "text-slate-400 dark:text-slate-500")}
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{hw.name}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Key Results */}
                  {d?.results && (
                    <section>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <CheckCircle2 size={20} className="text-orange-500" /> 
                        Key Results & Impact
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {d.results.map((r, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 shadow-sm">
                            <CheckCircle2 size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{r}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Visual Evidence (Graphs & Images) */}
                  {d?.visualEvidence && d.visualEvidence.length > 0 && (
                    <section>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <BarChart2 size={20} className="text-blue-500" /> 
                        Performance & Visual Proof
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {d.visualEvidence.map((ev, i) => (
                          <div key={i} className="flex flex-col rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm group">
                            <div className="relative w-full h-40 sm:h-48 bg-slate-100 dark:bg-slate-800">
                              <Image 
                                src={ev.url} 
                                alt={ev.caption} 
                                fill 
                                className="object-cover group-hover:scale-105 transition-transform duration-500" 
                                sizes="(max-width: 768px) 100vw, 33vw" 
                              />
                            </div>
                            <div className="p-3 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 text-center">{ev.caption}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
                  
                  {/* Lessons Learned & Next Steps */}
                  {(d?.lessonsLearned || d?.nextSteps) && (
                    <section className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                      <div className="grid sm:grid-cols-2 gap-6">
                        {d?.lessonsLearned && (
                          <div>
                            <p className="text-xs font-black text-indigo-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                              <Lightbulb size={14} /> Lessons Learned
                            </p>
                            <ul className="space-y-3">
                              {d.lessonsLearned.map((l, i) => (
                                <li key={i} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
                                  <span className="text-indigo-400 mt-0.5 flex-shrink-0">•</span> <span className="leading-relaxed">{l}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {d?.nextSteps && (
                          <div>
                            <p className="text-xs font-black text-emerald-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                              <ArrowRight size={14} /> Next Steps
                            </p>
                            <ul className="space-y-3">
                              {d.nextSteps.map((s, i) => (
                                <li key={i} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
                                  <span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span> <span className="leading-relaxed">{s}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </section>
                  )}

                  {/* Media Gallery */}
                  {d?.gallery && d.gallery.length > 0 && (
                    <section>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <ImageIcon size={20} className="text-blue-500" /> 
                        Project Gallery
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {d.gallery.map((img, i) => (
                          <div key={i} className="relative h-40 w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 group shadow-sm">
                            <Image src={img} alt={`Gallery image ${i+1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="300px" />
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
                </motion.div>
              )}

              {/* TAB 2: TECHNICAL DETAILS */}
              {hasTechnicalData && activeTab === "technical" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-10"
                >
                  {/* System Workflow */}
                  {d?.workflow && d.workflow.length > 0 && (
                    <section>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <GitMerge size={20} className="text-blue-500" /> 
                        System Workflow
                      </h3>
                      <div className="hidden sm:flex items-center justify-between w-full p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                        {d.workflow.map((step, idx) => (
                          <div key={idx} className="flex items-center flex-1">
                            <div className="relative flex flex-col items-center text-center px-2 flex-1">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold mb-2 shadow-sm ${t.dot}`}>
                                {idx + 1}
                              </div>
                              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 leading-tight">
                                {step}
                              </span>
                            </div>
                            {idx < d.workflow!.length - 1 && (
                              <div className="flex-shrink-0 text-slate-300 dark:text-slate-700">
                                <ArrowRight size={20} />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      {/* Mobile version workflow */}
                      <div className="flex sm:hidden flex-col items-center space-y-2 p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                        {d.workflow.map((step, idx) => (
                          <div key={idx} className="flex flex-col items-center">
                            <div className="flex items-center gap-3 w-full max-w-[250px] p-3 rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                              <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold ${t.dot}`}>
                                {idx + 1}
                              </div>
                              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{step}</span>
                            </div>
                            {idx < d.workflow!.length - 1 && (
                              <div className="text-slate-300 dark:text-slate-700 py-1">
                                <ArrowDown size={16} />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Technical Highlights */}
                  {d?.technicalHighlights && (
                    <section>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Lightbulb size={20} className="text-purple-500" /> 
                        Engineering & Technical Highlights
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {d.technicalHighlights.map((hl, i) => (
                          <div key={i} className={`p-5 rounded-xl border ${t.border} bg-white dark:bg-slate-900 shadow-sm`}>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-2">{hl.title}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{hl.description}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Challenges & Solutions */}
                  {d?.challenges && (
                    <section>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <AlertTriangle size={20} className="text-red-500" /> 
                        Challenges & Solutions
                      </h3>
                      <div className="space-y-4">
                        {d.challenges.map((chal, i) => (
                          <div key={i} className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                            <div className="flex gap-3 mb-3">
                              <div className="w-1.5 h-full min-h-[40px] bg-red-400 rounded-full flex-shrink-0"></div>
                              <div>
                                <span className="text-xs font-bold text-red-500 uppercase tracking-wider block mb-1">Challenge</span>
                                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{chal.issue}</p>
                              </div>
                            </div>
                            <div className="flex gap-3 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                              <div className="w-1.5 h-full min-h-[40px] bg-emerald-400 rounded-full flex-shrink-0"></div>
                              <div>
                                <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider block mb-1">Solution</span>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{chal.solution}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
                </motion.div>
              )}
              {/* TAB 4: VISUALS & FLOW */}
              {hasVisualData && activeTab === "visuals" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  {/* Metrics Cards */}
                  {d?.metrics && d.metrics.length > 0 && (
                    <section>
                      <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                        <BarChart2 size={18} className="text-blue-500" /> Key Metrics
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {d.metrics.map((m, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.08 }}
                            className={`p-4 rounded-xl border ${t.border} bg-white dark:bg-slate-900 text-center shadow-sm`}
                          >
                            {m.icon && <div className="text-2xl mb-1">{m.icon}</div>}
                            <div className="text-xl font-black text-slate-900 dark:text-white leading-none">
                              {m.value}
                              {m.unit && <span className="text-sm font-semibold ml-1 opacity-60">{m.unit}</span>}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">{m.label}</div>
                          </motion.div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* User Flow Animation */}
                  {d?.userFlow && d.userFlow.length > 0 && (
                    <section className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                      <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                        <User size={18} className="text-purple-500" /> User Workflow Animation
                        <span className="text-xs font-normal text-slate-400">(Click Replay to watch again)</span>
                      </h3>
                      <AnimationFlow
                        title="User Steps — Step by Step"
                        steps={d.userFlow}
                        autoPlay
                      />
                    </section>
                  )}

                  {/* Program Flow Animation */}
                  {d?.programFlow && d.programFlow.length > 0 && (
                    <section className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                      <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                        <Workflow size={18} className="text-orange-500" /> Program Flow Animation
                        <span className="text-xs font-normal text-slate-400">(Click Replay to watch again)</span>
                      </h3>
                      <AnimationFlow
                        title="Internal Processing Sequence"
                        steps={d.programFlow}
                        autoPlay
                      />
                    </section>
                  )}

                  {/* Hardware Connection Diagram */}
                  {d?.hardware && d.hardware.length > 0 && (
                    <section className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                      <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                        <Cpu size={18} className="text-indigo-500" /> Hardware Connection Diagram
                      </h3>
                      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 p-8 bg-white dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
                        {d.hardware.map((hw, i) => (
                          <div key={i} className="flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                              className="px-6 py-5 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-center shadow-sm flex flex-col items-center gap-2 w-36 sm:w-40"
                            >
                              <div className="p-3 rounded-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm mb-1">
                                {getHardwareIcon(hw.icon, t.activeTab.split(' ')[0])}
                              </div>
                              <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 leading-tight">{hw.name}</h4>
                              <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 leading-tight">{hw.description}</p>
                            </motion.div>
                            {i < d.hardware!.length - 1 && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: (i * 0.1) + 0.1 }}
                                className="text-slate-300 dark:text-slate-600 my-2 sm:my-0"
                              >
                                <ArrowRight size={24} className="hidden sm:block" />
                                <ArrowDown size={24} className="block sm:hidden" />
                              </motion.div>
                            )}
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
                </motion.div>
              )}



              {/* Bottom padding for scrolling */}
              <div className="h-4"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
