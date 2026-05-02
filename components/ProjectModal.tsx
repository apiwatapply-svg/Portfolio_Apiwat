"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, BookOpen, Cpu, CheckCircle2, Layers, GitMerge, ArrowRight, ArrowDown, Lightbulb, AlertTriangle, ImageIcon, Presentation, Target, User, TrendingUp, GraduationCap, BarChart2, Workflow } from "lucide-react";
import { type Project } from "@/lib/data";
import AnimationFlow from "@/components/AnimationFlow";

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

export default function ProjectModal({ project, onClose }: Props) {
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
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
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
          className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-950 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Scrolling Content */}
          <div className="overflow-y-auto flex-1 custom-scrollbar">
            {/* Header Image */}
            <div className="relative h-64 sm:h-80 w-full bg-slate-100 dark:bg-slate-800">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/20`}>
                    {project.year}
                  </span>
                  {project.isFeatured && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500 text-white">
                      Featured
                    </span>
                  )}
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight mb-2">
                  {project.title}
                </h2>
                <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                  <Calendar size={14} />
                  <span>{project.duration}</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className={`text-xs font-bold px-3 py-1.5 rounded-full ${t.badge}`}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Tabs */}
              {(hasTechnicalData || hasPresentationData || hasVisualData) && (
                <div className="flex flex-wrap border-b border-slate-200 dark:border-slate-800 mb-8">
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
                  {hasPresentationData && (
                    <button
                      onClick={() => setActiveTab("presentation")}
                      className={`px-5 py-3 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
                        activeTab === "presentation"
                        ? t.activeTab
                        : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                      }`}
                    >
                      <Presentation size={16} /> Present Mode
                    </button>
                  )}
                </div>
              )}

              {/* TAB 1: OVERVIEW */}
              {((!hasTechnicalData && !hasPresentationData) || activeTab === "overview") && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-10"
                >
                  {/* Overview & Objective */}
                  <section className="space-y-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <BookOpen size={20} className={t.dot.replace('bg-', 'text-')} /> 
                      Overview & Objective
                    </h3>
                    <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        {project.description}
                      </p>
                      {d?.objective && (
                        <div className={`p-4 rounded-lg bg-white dark:bg-slate-900 border-l-4 ${t.border}`}>
                          <p className="text-sm font-semibold text-slate-900 dark:text-slate-200 mb-1">Target Objective:</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{d.objective}</p>
                        </div>
                      )}
                    </div>
                  </section>

                  {/* Methodology */}
                  {(d?.methodology || d?.features) && (
                    <section>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Layers size={20} className="text-purple-500" />
                        {d.methodology ? "Methodology & Development" : "Key Features"}
                      </h3>
                      <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
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
                          <div key={hw} className="flex flex-col justify-center items-center text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors">
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{hw}</span>
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
                          <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30">
                            <CheckCircle2 size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{r}</span>
                          </div>
                        ))}
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
                          <div key={i} className="relative h-40 w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 group">
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
                </motion.div>
              )}

              {/* TAB 3: PRESENTATION MODE — 7 sections */}
              {hasPresentationData && activeTab === "presentation" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* Section 1: Context & Problem */}
                  {(d?.context || d?.origin || d?.painPoint) && (
                    <section className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                      <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                        <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-black flex-shrink-0">1</span>
                        Context & Problem Statement
                      </h3>
                      <div className="space-y-3">
                        {d?.context && (
                          <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border-l-4 border-blue-400">
                            <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-1">What is this project?</p>
                            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{d.context}</p>
                          </div>
                        )}
                        {d?.origin && (
                          <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border-l-4 border-slate-300 dark:border-slate-600">
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Background</p>
                            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{d.origin}</p>
                          </div>
                        )}
                        {d?.painPoint && (
                          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/10 border-l-4 border-red-400">
                            <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Pain Point</p>
                            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{d.painPoint}</p>
                          </div>
                        )}
                      </div>
                    </section>
                  )}

                  {/* Section 2: Objectives */}
                  {d?.objective && (
                    <section className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                      <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                        <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-black flex-shrink-0">2</span>
                        <Target size={16} className="text-emerald-500" /> Objectives
                      </h3>
                      <div className={`p-4 rounded-lg border-l-4 ${t.border} bg-white dark:bg-slate-900`}>
                        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{d.objective}</p>
                      </div>
                    </section>
                  )}

                  {/* Section 3: Your Role */}
                  {(d?.yourRole || d?.keySkillsUsed) && (
                    <section className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                      <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                        <span className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs font-black flex-shrink-0">3</span>
                        <User size={16} className="text-purple-500" /> Your Role ⭐
                      </h3>
                      {d?.yourRole && (
                        <div className={`p-4 rounded-lg border-l-4 border-purple-400 bg-white dark:bg-slate-900 mb-4`}>
                          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{d.yourRole}</p>
                        </div>
                      )}
                      {d?.keySkillsUsed && (
                        <div className="flex flex-wrap gap-2">
                          {d.keySkillsUsed.map((skill) => (
                            <span key={skill} className={`text-xs font-bold px-3 py-1.5 rounded-full ${t.badge}`}>{skill}</span>
                          ))}
                        </div>
                      )}
                    </section>
                  )}

                  {/* Section 4: Methodology & Tools */}
                  {(d?.methodology || d?.hardware) && (
                    <section className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                      <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                        <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-black flex-shrink-0">4</span>
                        <Layers size={16} className="text-orange-500" /> Methodology & Tools
                      </h3>
                      {d?.methodology && (
                        <ol className="space-y-2 mb-4">
                          {d.methodology.map((item, i) => (
                            <li key={i} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                              <span className={`mt-0.5 w-5 h-5 rounded-full ${t.badge} flex-shrink-0 flex items-center justify-center text-[10px] font-black`}>{i + 1}</span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ol>
                      )}
                      {d?.hardware && (
                        <div className="flex flex-wrap gap-2">
                          {d.hardware.map((hw) => (
                            <span key={hw} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">{hw}</span>
                          ))}
                        </div>
                      )}
                    </section>
                  )}

                  {/* Section 5: Challenges & Solutions */}
                  {d?.challenges && d.challenges.length > 0 && (
                    <section className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                      <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                        <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-black flex-shrink-0">5</span>
                        <AlertTriangle size={16} className="text-red-500" /> Challenges & Solutions ⭐
                      </h3>
                      <div className="space-y-3">
                        {d.challenges.map((c, i) => (
                          <div key={i} className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800">
                            <div className="flex gap-3 p-4 border-l-4 border-red-400">
                              <p className="text-xs font-bold text-red-500 uppercase tracking-wider w-20 flex-shrink-0 pt-0.5">Challenge</p>
                              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{c.issue}</p>
                            </div>
                            <div className="flex gap-3 p-4 border-l-4 border-emerald-400 bg-emerald-50/50 dark:bg-emerald-900/10">
                              <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider w-20 flex-shrink-0 pt-0.5">Solution</p>
                              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{c.solution}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Section 6: Results & Impact */}
                  {d?.results && d.results.length > 0 && (
                    <section className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                      <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                        <span className="w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center text-xs font-black flex-shrink-0">6</span>
                        <TrendingUp size={16} className="text-teal-500" /> Results & Impact
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {d.results.map((r, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-teal-50 dark:bg-teal-900/10 border border-teal-100 dark:border-teal-900/30">
                            <CheckCircle2 size={16} className="text-teal-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{r}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Section 7: Lessons Learned & Next Steps */}
                  {(d?.lessonsLearned || d?.nextSteps) && (
                    <section className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                      <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                        <span className="w-6 h-6 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs font-black flex-shrink-0">7</span>
                        <GraduationCap size={16} className="text-indigo-500" /> Lessons Learned & Next Steps
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {d?.lessonsLearned && (
                          <div>
                            <p className="text-xs font-black text-indigo-500 uppercase tracking-wider mb-3">Lessons Learned</p>
                            <ul className="space-y-2">
                              {d.lessonsLearned.map((l, i) => (
                                <li key={i} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
                                  <Lightbulb size={14} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                                  <span className="leading-relaxed">{l}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {d?.nextSteps && (
                          <div>
                            <p className="text-xs font-black text-emerald-500 uppercase tracking-wider mb-3">Next Steps</p>
                            <ul className="space-y-2">
                              {d.nextSteps.map((s, i) => (
                                <li key={i} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
                                  <ArrowRight size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                                  <span className="leading-relaxed">{s}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
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
