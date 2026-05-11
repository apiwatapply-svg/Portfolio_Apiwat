"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, BookOpen, Cpu, CheckCircle2, Layers, GitMerge, ArrowRight, ArrowDown, Lightbulb, AlertTriangle, ImageIcon, Target, User, BarChart2, Workflow, Camera, Server, Activity, Wifi, Bot, Cloud, Code, ExternalLink, KeyRound, Video, FileText, Download } from "lucide-react";
import { type Project } from "@/lib/data";
import AnimationFlow from "@/components/AnimationFlow";
import MmsDiagramAnimation from "@/components/MmsDiagramAnimation";

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

export default function GenericProjectModal({ project, onClose }: Props) {
  const [activeTab, setActiveTab] = useState<"overview" | "technical" | "presentation" | "visuals">("overview");
  const [activeCaseStudyPage, setActiveCaseStudyPage] = useState<"scope" | "jobProcess">("scope");
  const [previewImage, setPreviewImage] = useState<{ src: string; alt: string } | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const t = themeMap[project.theme];
  const d = project.details;
  const hasCaseStudyPages = Boolean(d?.caseStudyPages);
  const isMmsDashboard = project.title === "Smart Factory MMS Dashboard";

  const hasTechnicalData = d?.workflow?.length || d?.technicalHighlights?.length || d?.challenges?.length;
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
            <button
              type="button"
              onClick={() => setPreviewImage({ src: project.image, alt: project.title })}
              className="relative h-48 sm:h-72 w-full bg-slate-100 dark:bg-slate-800 block focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={`View full image: ${project.title}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </button>

            <div className="p-4 sm:p-8">
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className={`text-xs font-bold px-3 py-1.5 rounded-full ${t.badge}`}>
                    {tag}
                  </span>
                ))}
              </div>

              {(project.githubUrl || d?.demoCredentials?.length) && (
                <div className="mb-8 grid gap-3 sm:grid-cols-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 px-4 py-3 text-sm font-bold text-slate-800 dark:text-slate-100 hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Code size={18} />
                        GitHub Repository
                      </span>
                      <ExternalLink size={16} className="text-slate-400" />
                    </a>
                  )}

                  {d?.demoCredentials && d.demoCredentials.length > 0 && (
                    <div className="rounded-xl border border-amber-200 dark:border-amber-900/40 bg-amber-50 dark:bg-amber-900/10 px-4 py-3">
                      <div className="mb-2 flex items-center gap-2 text-sm font-black text-amber-700 dark:text-amber-300">
                        <KeyRound size={16} />
                        Demo Access
                      </div>
                      <div className="space-y-1">
                        {d.demoCredentials.map((credential) => (
                          <div key={credential.email} className="text-xs text-slate-700 dark:text-slate-300">
                            <span className="font-bold">{credential.role}:</span> {credential.email} / {credential.password}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {d?.caseStudyPages && (
                <section className="mb-8">
                  <div className="mb-6 grid grid-cols-2 gap-2 rounded-xl border border-slate-200 bg-slate-50 p-1 dark:border-slate-800 dark:bg-slate-900/50">
                    {[
                      { id: "scope" as const, label: d.caseStudyPages.labels?.scope ?? "Scope of work", icon: Target },
                      { id: "jobProcess" as const, label: d.caseStudyPages.labels?.jobProcess ?? "Job Process", icon: Workflow },
                    ].map((page) => {
                      const Icon = page.icon;
                      const isActive = activeCaseStudyPage === page.id;
                      return (
                        <button
                          key={page.id}
                          type="button"
                          onClick={() => setActiveCaseStudyPage(page.id)}
                          className={`flex items-center justify-center gap-2 rounded-lg px-3 py-3 text-sm font-black transition-colors ${
                            isActive
                              ? "bg-white text-slate-950 shadow-sm dark:bg-slate-800 dark:text-white"
                              : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100"
                          }`}
                        >
                          <Icon size={17} />
                          {page.label}
                        </button>
                      );
                    })}
                  </div>

                  {activeCaseStudyPage === "scope" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-8"
                    >
                      {d.caseStudyPages.scope.metrics && (
                        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                          {d.caseStudyPages.scope.metrics.map((metric, i) => (
                            <motion.div
                              key={metric.label}
                              initial={{ opacity: 0, y: 12 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.08 }}
                              className={`rounded-xl border ${t.border} bg-white p-4 text-center shadow-sm dark:bg-slate-900`}
                            >
                              <div className="text-2xl font-black text-slate-950 dark:text-white">
                                {metric.value}
                                {metric.unit && <span className="ml-1 text-sm text-slate-500">{metric.unit}</span>}
                              </div>
                              <div className="mt-1 text-xs font-bold text-slate-500 dark:text-slate-400">{metric.label}</div>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {d.caseStudyPages.scope.story && (
                        <section className="rounded-xl border border-blue-100 bg-blue-50 p-5 dark:border-blue-900/40 dark:bg-blue-900/10">
                          <h3 className="mb-3 flex items-center gap-2 text-base font-black text-slate-900 dark:text-white">
                            <BookOpen size={18} className="text-blue-500" />
                            Interview Story
                          </h3>
                          <p className="text-xl font-black leading-snug text-slate-950 dark:text-white">
                            {d.caseStudyPages.scope.story.headline}
                          </p>
                          <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                            {d.caseStudyPages.scope.story.pitch}
                          </p>
                          <div className="mt-4 grid gap-3 md:grid-cols-3">
                            {d.caseStudyPages.scope.story.points.map((point) => (
                              <div key={point} className="rounded-lg border border-blue-100 bg-white p-4 text-sm font-semibold leading-relaxed text-slate-700 shadow-sm dark:border-blue-900/40 dark:bg-slate-900 dark:text-slate-300">
                                {point}
                              </div>
                            ))}
                          </div>
                        </section>
                      )}

                      {d.caseStudyPages.scope.beforeAfter && (
                        <section className="rounded-xl border border-emerald-100 bg-white p-5 shadow-sm dark:border-emerald-900/40 dark:bg-slate-900">
                          <h3 className="mb-3 flex items-center gap-2 text-base font-black text-slate-900 dark:text-white">
                            <BarChart2 size={18} className="text-emerald-500" />
                            Before / After Impact
                          </h3>
                          <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                            {d.caseStudyPages.scope.beforeAfter.summary}
                          </p>
                          <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
                            <div className="hidden grid-cols-[1.25fr_1fr_1fr_1.2fr] bg-slate-100 text-xs font-black uppercase tracking-wider text-slate-500 dark:bg-slate-800 dark:text-slate-400 md:grid">
                              <div className="p-3">Work</div>
                              <div className="p-3">Before</div>
                              <div className="p-3">After</div>
                              <div className="p-3">Benefit</div>
                            </div>
                            <div className="divide-y divide-slate-200 dark:divide-slate-800">
                              {d.caseStudyPages.scope.beforeAfter.items.map((item) => (
                                <div key={item.task} className="grid gap-2 p-4 text-sm md:grid-cols-[1.25fr_1fr_1fr_1.2fr] md:gap-0 md:p-0">
                                  <div className="font-bold text-slate-900 dark:text-white md:p-3">{item.task}</div>
                                  <div className="text-slate-600 dark:text-slate-300 md:p-3"><span className="font-bold md:hidden">Before: </span>{item.before}</div>
                                  <div className="text-emerald-600 dark:text-emerald-300 md:p-3"><span className="font-bold md:hidden">After: </span>{item.after}</div>
                                  <div className="font-semibold text-slate-700 dark:text-slate-300 md:p-3"><span className="font-bold md:hidden">Benefit: </span>{item.impact}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </section>
                      )}

                      {d.caseStudyPages.scope.visuals?.map((item, i) => {
                        const visualContent = isMmsDashboard ? (
                          <MmsDiagramAnimation title={item.title} />
                        ) : (
                          <div className="relative min-h-72 bg-slate-100 dark:bg-slate-800">
                            <Image src={item.url} alt={item.title} fill className="object-contain p-2" sizes="(max-width: 1024px) 100vw, 55vw" />
                          </div>
                        );

                        if (isMmsDashboard) {
                          return (
                            <div
                              key={item.url}
                              className={`grid w-full overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm dark:border-slate-800 dark:bg-slate-900 ${
                                i % 2 === 0 ? "lg:grid-cols-[1.45fr_1fr]" : "lg:grid-cols-[1fr_1.45fr]"
                              }`}
                            >
                              <div className={i % 2 === 0 ? "" : "lg:order-2"}>{visualContent}</div>
                              <div className="flex flex-col justify-center gap-3 p-5 sm:p-6">
                                <span className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${t.badge}`}>Scope {i + 1}</span>
                                <p className="text-xl font-black text-slate-900 dark:text-white">{item.title}</p>
                                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.caption}</p>
                              </div>
                            </div>
                          );
                        }

                        return (
                          <button
                            key={item.url}
                            type="button"
                            onClick={() => setPreviewImage({ src: item.url, alt: item.title })}
                            className={`grid w-full overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm transition hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-800 dark:bg-slate-900 ${
                              i % 2 === 0 ? "lg:grid-cols-[1.45fr_1fr]" : "lg:grid-cols-[1fr_1.45fr]"
                            }`}
                          >
                            <div className={i % 2 === 0 ? "" : "lg:order-2"}>{visualContent}</div>
                            <div className="flex flex-col justify-center gap-3 p-5 sm:p-6">
                              <span className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${t.badge}`}>Scope {i + 1}</span>
                              <p className="text-xl font-black text-slate-900 dark:text-white">{item.title}</p>
                              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.caption}</p>
                            </div>
                          </button>
                        );
                      })}

                      {d.caseStudyPages.scope.screenshots && (
                        <section>
                          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
                            <ImageIcon size={20} className="text-purple-500" />
                            Program Pages
                          </h3>
                          <div className="grid gap-4 lg:grid-cols-2">
                            {d.caseStudyPages.scope.screenshots.map((shot) => (
                              <button
                                key={shot.url}
                                type="button"
                                onClick={() => setPreviewImage({ src: shot.url, alt: shot.title })}
                                className="overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:border-slate-800 dark:bg-slate-900"
                              >
                                <div className="relative h-64 bg-slate-100 dark:bg-slate-800">
                                  <Image src={shot.url} alt={shot.title} fill className="object-contain p-2" sizes="(max-width: 1024px) 100vw, 50vw" />
                                </div>
                                <div className="border-t border-slate-200 p-4 dark:border-slate-800">
                                  <p className="font-black text-slate-900 dark:text-white">{shot.title}</p>
                                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{shot.caption}</p>
                                </div>
                              </button>
                            ))}
                          </div>
                        </section>
                      )}

                      {d.caseStudyPages.scope.userFlow && (
                        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/50">
                          <h3 className="mb-4 flex items-center gap-2 text-base font-black text-slate-900 dark:text-white">
                            <User size={18} className="text-purple-500" />
                            User Flow Animation
                          </h3>
                          <AnimationFlow title="How the web helps solve production visibility" steps={d.caseStudyPages.scope.userFlow} autoPlay />
                        </section>
                      )}

                      {d.caseStudyPages.scope.benefits && (
                        <section>
                          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
                            <CheckCircle2 size={20} className="text-emerald-500" />
                            Benefits
                          </h3>
                          <div className="grid gap-3 sm:grid-cols-3">
                            {d.caseStudyPages.scope.benefits.map((benefit) => (
                              <div key={benefit} className="rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-sm font-semibold leading-relaxed text-slate-700 dark:border-emerald-900/40 dark:bg-emerald-900/10 dark:text-slate-300">
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </section>
                      )}

                      {d.caseStudyPages.scope.skillGroups && (
                        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
                            <Cpu size={20} className="text-blue-500" />
                            Skills Used
                          </h3>
                          <div className="grid gap-4 md:grid-cols-2">
                            {d.caseStudyPages.scope.skillGroups.map((group) => (
                              <div key={group.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/50">
                                <p className="mb-3 text-sm font-black text-slate-900 dark:text-white">{group.title}</p>
                                <div className="flex flex-wrap gap-2">
                                  {group.items.map((item) => (
                                    <span key={item} className={`rounded-full px-3 py-1 text-xs font-bold ${t.badge}`}>{item}</span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </section>
                      )}

                      {d.caseStudyPages.scope.lessons && (
                        <section className="rounded-xl border border-indigo-100 bg-indigo-50 p-5 dark:border-indigo-900/40 dark:bg-indigo-900/10">
                          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
                            <Lightbulb size={20} className="text-indigo-500" />
                            Lessons Learned
                          </h3>
                          <div className="grid gap-3 md:grid-cols-2">
                            {d.caseStudyPages.scope.lessons.map((lesson) => (
                              <div key={lesson} className="rounded-lg border border-indigo-100 bg-white p-4 text-sm font-semibold leading-relaxed text-slate-700 shadow-sm dark:border-indigo-900/40 dark:bg-slate-900 dark:text-slate-300">
                                {lesson}
                              </div>
                            ))}
                          </div>
                        </section>
                      )}
                    </motion.div>
                  )}

                  {activeCaseStudyPage === "jobProcess" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-8"
                    >
                      {d.caseStudyPages.jobProcess.techStack && (
                        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                          <h3 className="mb-3 flex items-center gap-2 text-base font-black text-slate-900 dark:text-white">
                            <Server size={18} className="text-cyan-500" />
                            Tech Strategy
                          </h3>
                          <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                            {d.caseStudyPages.jobProcess.techStack.summary}
                          </p>
                          <div className="grid gap-3 md:grid-cols-2">
                            {d.caseStudyPages.jobProcess.techStack.layers.map((layer) => (
                              <div key={layer.layer} className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/50">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="text-sm font-black text-slate-900 dark:text-white">{layer.layer}</span>
                                  <span className={`rounded-full px-2 py-1 text-[11px] font-bold ${t.badge}`}>{layer.tech}</span>
                                </div>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{layer.reason}</p>
                              </div>
                            ))}
                          </div>
                        </section>
                      )}

                      {d.caseStudyPages.jobProcess.projectFlow && (
                        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/50">
                          <h3 className="mb-4 flex items-center gap-2 text-base font-black text-slate-900 dark:text-white">
                            <Workflow size={18} className="text-blue-500" />
                            Project Flow Animation
                          </h3>
                          <AnimationFlow title={d.caseStudyPages.jobProcess.projectFlowTitle ?? "Requirements to maintenance"} steps={d.caseStudyPages.jobProcess.projectFlow} autoPlay />
                        </section>
                      )}

                      {d.caseStudyPages.jobProcess.developmentFlow && (
                        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/50">
                          <h3 className="mb-4 flex items-center gap-2 text-base font-black text-slate-900 dark:text-white">
                            <GitMerge size={18} className="text-orange-500" />
                            Development Flow Animation
                          </h3>
                          <AnimationFlow title="Coding, Git workflow, CI/CD, PM2 deploy" steps={d.caseStudyPages.jobProcess.developmentFlow} autoPlay />
                        </section>
                      )}

                      {d.caseStudyPages.jobProcess.visuals?.map((item, i) => {
                        const visualContent = isMmsDashboard ? (
                          <MmsDiagramAnimation title={item.title} />
                        ) : (
                          <div className="relative min-h-72 bg-slate-100 dark:bg-slate-800">
                            <Image src={item.url} alt={item.title} fill className="object-contain p-2" sizes="(max-width: 1024px) 100vw, 55vw" />
                          </div>
                        );

                        if (isMmsDashboard) {
                          return (
                            <div
                              key={item.url}
                              className={`grid w-full overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm dark:border-slate-800 dark:bg-slate-900 ${
                                i % 2 === 0 ? "lg:grid-cols-[1.45fr_1fr]" : "lg:grid-cols-[1fr_1.45fr]"
                              }`}
                            >
                              <div className={i % 2 === 0 ? "" : "lg:order-2"}>{visualContent}</div>
                              <div className="flex flex-col justify-center gap-3 p-5 sm:p-6">
                                <span className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${t.badge}`}>Process {i + 1}</span>
                                <p className="text-xl font-black text-slate-900 dark:text-white">{item.title}</p>
                                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.caption}</p>
                              </div>
                            </div>
                          );
                        }

                        return (
                          <button
                            key={item.url}
                            type="button"
                            onClick={() => setPreviewImage({ src: item.url, alt: item.title })}
                            className={`grid w-full overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm transition hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-800 dark:bg-slate-900 ${
                              i % 2 === 0 ? "lg:grid-cols-[1.45fr_1fr]" : "lg:grid-cols-[1fr_1.45fr]"
                            }`}
                          >
                            <div className={i % 2 === 0 ? "" : "lg:order-2"}>{visualContent}</div>
                            <div className="flex flex-col justify-center gap-3 p-5 sm:p-6">
                              <span className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${t.badge}`}>Process {i + 1}</span>
                              <p className="text-xl font-black text-slate-900 dark:text-white">{item.title}</p>
                              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.caption}</p>
                            </div>
                          </button>
                        );
                      })}

                      {d.caseStudyPages.jobProcess.screenshots && (
                        <section>
                          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
                            <ImageIcon size={20} className="text-purple-500" />
                            Program Pages
                          </h3>
                          <div className="grid gap-4 lg:grid-cols-2">
                            {d.caseStudyPages.jobProcess.screenshots.map((shot) => (
                              <button
                                key={shot.url}
                                type="button"
                                onClick={() => setPreviewImage({ src: shot.url, alt: shot.title })}
                                className="overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:border-slate-800 dark:bg-slate-900"
                              >
                                <div className="relative h-64 bg-slate-100 dark:bg-slate-800">
                                  <Image src={shot.url} alt={shot.title} fill className="object-contain p-2" sizes="(max-width: 1024px) 100vw, 50vw" />
                                </div>
                                <div className="border-t border-slate-200 p-4 dark:border-slate-800">
                                  <p className="font-black text-slate-900 dark:text-white">{shot.title}</p>
                                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{shot.caption}</p>
                                </div>
                              </button>
                            ))}
                          </div>
                        </section>
                      )}

                      {d.caseStudyPages.jobProcess.challenges && (
                        <section>
                          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
                            <AlertTriangle size={20} className="text-red-500" />
                            Problems & Solutions
                          </h3>
                          <div className="space-y-4">
                            {d.caseStudyPages.jobProcess.challenges.map((challenge) => (
                              <div key={challenge.issue} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                                <p className="text-sm font-bold text-red-500">Problem</p>
                                <p className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{challenge.issue}</p>
                                <p className="mt-4 text-sm font-bold text-emerald-500">Solution</p>
                                <p className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{challenge.solution}</p>
                              </div>
                            ))}
                          </div>
                        </section>
                      )}
                    </motion.div>
                  )}
                </section>
              )}

              {!hasCaseStudyPages && d?.documents && d.documents.length > 0 && (
                <section className="mb-8">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <FileText size={20} className="text-blue-500" />
                    Project Documents
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {d.documents.map((doc) => (
                      <a
                        key={doc.url}
                        href={doc.url}
                        download
                        className="flex items-start justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left transition-colors hover:border-blue-300 hover:bg-blue-50 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-blue-900/70 dark:hover:bg-blue-950/20"
                      >
                        <span>
                          <span className="block text-sm font-black text-slate-900 dark:text-white">{doc.title}</span>
                          <span className="mt-1 block text-xs leading-relaxed text-slate-500 dark:text-slate-400">{doc.description}</span>
                        </span>
                        <Download size={17} className="mt-0.5 shrink-0 text-slate-400" />
                      </a>
                    ))}
                  </div>
                </section>
              )}

              {/* Tabs (Sticky) */}
              {!hasCaseStudyPages && (hasTechnicalData || hasVisualData) && (
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
              {!hasCaseStudyPages && activeTab === "overview" && (
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

                  {d?.videos && d.videos.length > 0 && (
                    <section>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Video size={20} className="text-emerald-500" />
                        Operation Videos
                      </h3>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {d.videos.map((video, i) => (
                          <div
                            key={video.url}
                            className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-black shadow-sm"
                          >
                            <video
                              src={video.url}
                              controls
                              preload={i === 0 ? "metadata" : "none"}
                              className="aspect-video w-full object-contain"
                            />
                            <div className="border-t border-slate-200 dark:border-slate-800 bg-white px-4 py-3 dark:bg-slate-900">
                              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">{video.caption}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {d?.imageStory && d.imageStory.length > 0 && (
                    <section>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <ImageIcon size={20} className="text-purple-500" />
                        Visual Walkthrough
                      </h3>
                      <div className="space-y-5">
                        {d.imageStory.map((item, i) => (
                          <button
                            key={item.url}
                            type="button"
                            onClick={() => setPreviewImage({ src: item.url, alt: item.title })}
                            className={`grid w-full overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm transition hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:border-slate-800 dark:bg-slate-900 ${
                              i % 2 === 0 ? "lg:grid-cols-[1.45fr_1fr]" : "lg:grid-cols-[1fr_1.45fr]"
                            }`}
                            aria-label={`View full image: ${item.title}`}
                          >
                            <div className={`relative min-h-72 bg-slate-100 dark:bg-slate-800 ${i % 2 === 0 ? "" : "lg:order-2"}`}>
                              <Image
                                src={item.url}
                                alt={item.title}
                                fill
                                className="object-contain p-2"
                                sizes="(max-width: 1024px) 100vw, 55vw"
                              />
                            </div>
                            <div className="flex flex-col justify-center gap-3 p-5 sm:p-6">
                              <span className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${t.badge}`}>
                                Image {i + 1}
                              </span>
                              <p className="text-xl font-black text-slate-900 dark:text-white">{item.title}</p>
                              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.caption}</p>
                            </div>
                          </button>
                        ))}
                      </div>
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
                                  {d.methodology ? i + 1 : <CheckCircle2 size={14} />}
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
                          <button
                            key={i}
                            type="button"
                            onClick={() => setPreviewImage({ src: ev.url, alt: ev.caption })}
                            className="flex flex-col text-left rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm group focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label={`View full image: ${ev.caption}`}
                          >
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
                          </button>
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
                                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-400 flex-shrink-0" aria-hidden="true" />
                                  <span className="leading-relaxed">{l}</span>
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
                                  <ArrowRight size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                                  <span className="leading-relaxed">{s}</span>
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
                          <button
                            key={i}
                            type="button"
                            onClick={() => setPreviewImage({ src: img, alt: `${project.title} gallery image ${i + 1}` })}
                            className="relative h-40 w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 group shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label={`View full gallery image ${i + 1}`}
                          >
                            <Image src={img} alt={`Gallery image ${i+1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="300px" />
                          </button>
                        ))}
                      </div>
                    </section>
                  )}
                </motion.div>
              )}

              {/* TAB 2: TECHNICAL DETAILS */}
              {!hasCaseStudyPages && hasTechnicalData && activeTab === "technical" && (
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
              {!hasCaseStudyPages && hasVisualData && activeTab === "visuals" && (
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
                        title="User Steps - Step by Step"
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

        <AnimatePresence>
          {previewImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[130] flex items-center justify-center bg-slate-950/90 p-4 sm:p-8"
              onClick={() => setPreviewImage(null)}
            >
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
                aria-label="Close full image preview"
              >
                <X size={22} />
              </button>
              <motion.div
                initial={{ scale: 0.96, y: 12 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.96, y: 12 }}
                className="relative h-full w-full max-w-6xl"
                onClick={(event) => event.stopPropagation()}
              >
                <Image
                  src={previewImage.src}
                  alt={previewImage.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
}

