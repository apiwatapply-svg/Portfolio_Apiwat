"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ExternalLink, Calendar, Code2, GitBranch, ShieldCheck, PackageCheck, Rocket, FileText, BriefcaseBusiness, Sparkles } from "lucide-react";
import ProjectModal from "./ProjectModal";
import Workflow3D from "@/components/Workflow3D";
import { Layers } from "lucide-react";
import FixedWingUAVModal from "./modals/FixedWingUAVModal";
import PIDControlModal from "./modals/PIDControlModal";
import ThermostatModal from "./modals/ThermostatModal";
import PLCDoorModal from "./modals/PLCDoorModal";
import StudentAttendanceModal from "./modals/StudentAttendanceModal";
import OnlineDocumentStorageModal from "./modals/OnlineDocumentStorageModal";
import CoffeeShopPosModal from "./modals/CoffeeShopPosModal";
import UnclonedEcommerceModal from "./modals/UnclonedEcommerceModal";
import FieldBookingSystemModal from "./modals/FieldBookingSystemModal";
import RestaurantPosModal from "./modals/RestaurantPosModal";
import BarbershopBookingModal from "./modals/BarbershopBookingModal";
import BookingMeetingRoomModal from "./modals/BookingMeetingRoomModal";
import MmsDashboardModal from "./modals/MmsDashboardModal";
import PredictiveMaintenanceModal from "./modals/PredictiveMaintenanceModal";
import AiDefectInspectionModal from "./modals/AiDefectInspectionModal";
import RosAutomationModal from "./modals/RosAutomationModal";
import SmartAgricultureModal from "./modals/SmartAgricultureModal";
import PingPongRobotModal from "./modals/PingPongRobotModal";

import { projects as rawProjects, type Project } from "@/lib/data";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

type ProjectTrack = "professional" | "hobby";

const projectTrackBySlug: Record<string, ProjectTrack> = {
  "ros-automation": "professional",
  "ai-defect-inspection": "professional",
  "mms-dashboard": "professional",
  "predictive-maintenance": "professional",
  "coffee-shop-pos": "hobby",
  "uncloned-ecommerce": "hobby",
  "booking-meeting-room": "hobby",
  "restaurant-pos": "hobby",
};

const getProjectTrack = (project: Project): ProjectTrack => projectTrackBySlug[project.slug] ?? "professional";

const projects = rawProjects.filter((project) => !project.hidden).sort((a, b) => {
  const yearDiff = parseInt(b.year) - parseInt(a.year);
  if (yearDiff !== 0) return yearDiff;
  const aPresent = a.duration.toLowerCase().includes("present");
  const bPresent = b.duration.toLowerCase().includes("present");
  if (aPresent && !bPresent) return -1;
  if (!aPresent && bPresent) return 1;
  return 0;
});

const themeMap = {
  blue: "text-blue-600 dark:text-blue-400",
  emerald: "text-emerald-600 dark:text-emerald-400",
  purple: "text-purple-600 dark:text-purple-400",
  orange: "text-orange-600 dark:text-orange-400",
};

type TimelineItem = {
  kind: "project" | "milestone";
  track: ProjectTrack;
  year: string;
  duration: string;
  title: string;
  description: string;
  tags: string[];
  theme: Project["theme"];
  project?: Project;
};

const careerMilestones: TimelineItem[] = [];

const projectTimelineItems: TimelineItem[] = projects.map((project) => ({
  kind: "project",
  track: getProjectTrack(project),
  year: project.year,
  duration: project.duration,
  title: project.title,
  description: project.description,
  tags: project.tags,
  theme: project.theme,
  project,
}));

const timelineItems = [...projectTimelineItems, ...careerMilestones].sort((a, b) => {
  const yearDiff = Number(b.year) - Number(a.year);
  if (yearDiff !== 0) return yearDiff;
  if (a.kind === b.kind) return 0;
  return a.kind === "milestone" ? -1 : 1;
});

const trackOptions = [
  { value: "all", label: "All", icon: Layers },
  { value: "professional", label: "Professional Work", icon: BriefcaseBusiness },
  { value: "hobby", label: "Hobby Projects", icon: Sparkles },
] as const;

type TrackFilter = typeof trackOptions[number]["value"];

const trackBadge = {
  professional: "Professional Work",
  hobby: "Hobby Project",
} satisfies Record<ProjectTrack, string>;

const devOpsWorkflowSteps = [
  {
    title: "Coding",
    detail: "Develop machine-side features, service scripts, and web modules with clear structure, environment separation, and local validation.",
    deliverable: "Ready-to-review code",
    icon: Code2,
    color: "bg-blue-600",
  },
  {
    title: "Git Workflow",
    detail: "Define repository structure, branch strategy, commit convention, pull request review, and merge policy.",
    deliverable: "Traceable repository workflow",
    icon: GitBranch,
    color: "bg-purple-600",
  },
  {
    title: "CI",
    detail: "Run dependency install, lint, type checks, tests, build validation, and artifact packaging before release.",
    deliverable: "Validated build artifact",
    icon: PackageCheck,
    color: "bg-emerald-600",
  },
  {
    title: "CD",
    detail: "Automate release steps, manage environment configuration, prepare rollback notes, and control deployment approvals.",
    deliverable: "Release automation",
    icon: ShieldCheck,
    color: "bg-orange-600",
  },
  {
    title: "Deploy",
    detail: "Deploy with PM2 for offline machine servers, Azure when cloud infrastructure is required, or Vercel for web applications.",
    deliverable: "PM2 offline / Azure / Vercel deployment",
    icon: Rocket,
    color: "bg-cyan-600",
  },
  {
    title: "Staging & Documentation",
    detail: "Validate staging and SIT results, then document deployment guides, operating procedures, and handover checklists.",
    deliverable: "Operation Manual",
    icon: FileText,
    color: "bg-slate-600",
  },
];

function DevOpsWorkflowSection() {
  return (
    <div className="bg-slate-950 text-white rounded-2xl p-6 md:p-10 shadow-sm overflow-hidden">
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-wider mb-4">
          Coding / Git / CI-CD / Deploy
        </div>
        <h3 className="text-2xl md:text-3xl font-black mb-4 flex items-center gap-3">
          <GitBranch className="text-blue-300" size={28} />
          DevOps Workflow for Machine-side Software
        </h3>
        <p className="text-slate-300 leading-relaxed text-lg">
          A practical delivery flow for factory applications: from coding and Git control to CI/CD automation, PM2 offline deployment, optional cloud deployment, staging validation, and operation manuals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {devOpsWorkflowSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
              }}
              className="border border-white/10 bg-white/[0.04] rounded-xl p-5"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className={`w-10 h-10 ${step.color} rounded-lg flex items-center justify-center shrink-0`}>
                  <Icon size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Step {index + 1}</div>
                  <h4 className="font-black text-white leading-tight">{step.title}</h4>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">{step.detail}</p>
              <div className="text-xs font-bold text-blue-200 bg-blue-500/10 border border-blue-400/20 rounded-lg px-3 py-2">
                Deliverable: {step.deliverable}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}


function WorkflowSection() {
  const [workflowView, setWorkflowView] = useState<"end-to-end" | "devops">("end-to-end");

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
      }}
      className="mt-8 space-y-8"
    >
      <div className="flex flex-wrap gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-1 w-fit">
        <button
          type="button"
          onClick={() => setWorkflowView("end-to-end")}
          className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
            workflowView === "end-to-end"
              ? "bg-blue-600 text-white"
              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          }`}
        >
          End-to-End Workflow
        </button>
        <button
          type="button"
          onClick={() => setWorkflowView("devops")}
          className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
            workflowView === "devops"
              ? "bg-blue-600 text-white"
              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          }`}
        >
          DevOps Workflow
        </button>
      </div>

      {workflowView === "end-to-end" && (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-10 shadow-sm">
        <div className="max-w-3xl mb-8">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4 flex items-center gap-3">
            <Layers className="text-blue-500" size={28} />
            My End-to-End Workflow
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
            This is my standard approach to building scalable software and automation systems. By following a structured End-to-End process, I ensure that every project is well-documented, systematically designed, thoroughly tested, and reliably maintained.
          </p>
        </div>

        {/* 3D Animation Section */}
        <div className="mb-12">
          <Workflow3D />
        </div>

        {/* Detailed Explanation */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700/50">
              <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">1</span>
                Requirement Gathering & Analysis
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Working with stakeholders to analyze technical feasibility and define the exact scope (Must-have vs Nice-to-have). Resulting in clear PRDs and User Stories.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700/50">
              <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs">2</span>
                System Architecture & Design
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Designing the blueprint before writing code. This involves UI/UX Wireframes, Database ER Diagrams, API Specifications, and choosing the right Tech Stack.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700/50">
              <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs">3</span>
                Development
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Writing clean, documented code for Frontend and Backend. Using Git for version control and peer code reviews before merging to the main branch.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700/50">
              <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs">4</span>
                Testing
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Executing Unit Tests, Integration Tests, and collaborating with QA for system testing. Ensuring User Acceptance Testing (UAT) is signed off before launch.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700/50">
              <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">5</span>
                Deployment
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Setting up Cloud Infrastructure and utilizing CI/CD pipelines to automatically build, test, and deploy applications to production with zero downtime.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700/50">
              <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-slate-500 text-white flex items-center justify-center text-xs">6</span>
                Maintenance & Monitoring
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Monitoring system health using APM tools, handling hotfixes, managing database backups, and keeping security patches up to date.
              </p>
            </div>
          </div>
        </div>
      </div>
      )}

      {workflowView === "devops" && <DevOpsWorkflowSection />}
    </motion.div>
  );
}

function FeaturedGrid({ items, onSelect }: { items: Project[], onSelect: (p: Project) => void }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
    >
      {items.map((project, index) => (
        <motion.div
          key={project.title + index}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
          }}
        >
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="h-full">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-shadow group flex flex-col h-full">
              <div className="h-48 overflow-hidden relative bg-slate-100 dark:bg-slate-800">
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {project.isFeatured && (
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">Featured</div>
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => onSelect(project)} className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/50 hover:bg-white hover:text-slate-900 transition-colors" aria-label={`View ${project.title}`}>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className={`text-xs font-semibold ${themeMap[project.theme]}`}>{project.duration}</span>
                  <span className="rounded-full border border-slate-200 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:border-slate-700 dark:text-slate-400">
                    {trackBadge[getProjectTrack(project)]}
                  </span>
                </div>
                <button onClick={() => onSelect(project)} className="text-left">
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">{project.title}</h3>
                </button>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold px-2 py-1 rounded border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>
      ))}
    </motion.div>
  );
}

function TimelineList({ items, onSelect }: { items: TimelineItem[], onSelect: (p: Project) => void }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
      }}
      className="relative mt-12 max-w-3xl mx-auto"
    >
      <motion.div initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 1, ease: "easeOut" }} className="absolute left-4 top-0 w-0.5 bg-slate-200 dark:bg-slate-800" />
      {items.map((item, idx) => {
        const showYearMarker = idx === 0 || item.year !== items[idx - 1].year;
        return (
          <div key={`${item.kind}-${item.title}-${idx}`}>
            {showYearMarker && (
              <div className="relative flex items-center mb-8 mt-12 w-full z-10">
                <div className="px-4 py-1.5 ml-10 rounded-full font-bold text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700">{item.year}</div>
              </div>
            )}
            <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }} className="relative flex items-center mb-8 w-full">
              <div className={`absolute left-[11px] w-2.5 h-2.5 rounded-full border-2 border-white dark:border-slate-900 z-10 ${item.kind === "milestone" ? "bg-emerald-500" : "bg-blue-500 dark:bg-slate-400"}`} />
              <div className="w-full pl-10">
                <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} scale={1.01} transitionSpeed={2000}>
                  <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm hover:shadow-lg transition-all group">
                    <div className="flex justify-between items-start mb-2">
                      {item.project ? (
                        <button onClick={() => onSelect(item.project as Project)} className="text-left">
                          <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors cursor-pointer">{item.title}</h3>
                        </button>
                      ) : (
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">{item.title}</h3>
                      )}
                      {item.project ? (
                        <button onClick={() => onSelect(item.project as Project)} className="text-slate-400 hover:text-blue-500 transition-colors" aria-label={`View ${item.title}`}>
                          <ExternalLink size={16} />
                        </button>
                      ) : (
                        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
                          Milestone
                        </span>
                      )}
                    </div>
                    <div className={`text-xs font-semibold mb-3 flex items-center gap-2 ${themeMap[item.theme]}`}>
                      <span>{item.duration}</span>
                      <span className="rounded-full border border-slate-200 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:border-slate-700 dark:text-slate-400">
                        {trackBadge[item.track]}
                      </span>
                    </div>
                    {item.kind === "milestone" && (
                      <p className="mb-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.description}</p>
                    )}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-semibold px-2 py-1 rounded border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Tilt>
              </div>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [tab, setTab] = useState<"workflow" | "all-grid" | "timeline">("workflow");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedTrack, setSelectedTrack] = useState<TrackFilter>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedTab = localStorage.getItem("portfolio-projects-tab");
    const savedYear = localStorage.getItem("portfolio-projects-year");
    const savedTrack = localStorage.getItem("portfolio-projects-track");
    if (savedTab && ["workflow", "all-grid", "timeline"].includes(savedTab)) {
      setTimeout(() => setTab(savedTab as "workflow" | "all-grid" | "timeline"), 0);
    }
    if (savedYear) setTimeout(() => setSelectedYear(savedYear), 0);
    if (savedTrack && ["all", "professional", "hobby"].includes(savedTrack)) {
      setTimeout(() => setSelectedTrack(savedTrack as TrackFilter), 0);
    }
    setTimeout(() => setIsMounted(true), 0);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("portfolio-projects-tab", tab);
      localStorage.setItem("portfolio-projects-year", selectedYear);
      localStorage.setItem("portfolio-projects-track", selectedTrack);
      }
  }, [tab, selectedYear, selectedTrack, isMounted]);

  const trackFilteredProjects = selectedTrack === "all"
    ? projects
    : projects.filter((project) => getProjectTrack(project) === selectedTrack);
  const trackFilteredTimelineItems = selectedTrack === "all"
    ? timelineItems
    : timelineItems.filter((item) => item.track === selectedTrack);

  // Sorted unique years from the selected professional/hobby track.
  const availableYears = useMemo(() => {
    return [...new Set(trackFilteredTimelineItems.map((item) => item.year))].sort((a, b) => Number(b) - Number(a));
  }, [trackFilteredTimelineItems]);
  const effectiveSelectedYear = selectedYear === "all" || availableYears.includes(selectedYear) ? selectedYear : "all";

  const handleTabChange = (newTab: "workflow" | "all-grid" | "timeline") => {
    setTab(newTab);
  };

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
  };

  const handleTrackChange = (track: TrackFilter) => {
    setSelectedTrack(track);
  };

  const baseProjects = trackFilteredProjects;
  const yearFiltered = tab !== "workflow"
    ? effectiveSelectedYear === "all" ? baseProjects : baseProjects.filter((p) => p.year === effectiveSelectedYear)
    : baseProjects;
  const timelineFiltered = effectiveSelectedYear === "all"
    ? trackFilteredTimelineItems
    : trackFilteredTimelineItems.filter((item) => item.year === effectiveSelectedYear);
  const activeCount = tab === "timeline" ? timelineFiltered.length : yearFiltered.length;
  const activeCountLabel = tab === "timeline" ? "item" : "project";

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Header row */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
        <div>
          <h2 className="text-3xl font-black mb-2 tracking-tight text-slate-900 dark:text-white">Projects & Workflow</h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium">Professional factory systems and hobby-built POS/business apps, organized by track and year.</p>
        </div>

        {/* Tab toggle */}
        <div className="flex bg-transparent border border-slate-200 dark:border-slate-700 p-1 rounded-lg">
          {(["workflow", "all-grid", "timeline"] as const).map((t) => (
            <button
              key={t}
              id={`tab-${t}`}
              onClick={() => handleTabChange(t)}
              className={`px-4 py-1.5 text-sm font-bold rounded-md transition-colors ${
                tab === t ? "bg-blue-600 text-white" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {t === "workflow" ? "My Workflow" : t === "all-grid" ? "All Projects" : "Timeline"}
            </button>
          ))}
        </div>
      </div>

      {/* Year Filter */}
      {tab !== "workflow" && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mb-6 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              <BriefcaseBusiness size={13} /> Track:
            </span>
            {trackOptions.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.value}
                  onClick={() => handleTrackChange(option.value)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-colors border ${
                    selectedTrack === option.value
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-blue-400 hover:text-blue-600"
                  }`}
                >
                  <Icon size={13} />
                  {option.label}
                </button>
              );
            })}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              <Calendar size={13} /> Filter by Year:
            </span>
            {["all", ...availableYears].map((year) => (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-colors border ${
                  effectiveSelectedYear === year
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-blue-400 hover:text-blue-600"
                }`}
              >
                {year === "all" ? "All Years" : year}
              </button>
            ))}
            <span className="text-xs text-slate-400 dark:text-slate-500 ml-1">
              - {activeCount} {activeCountLabel}{activeCount !== 1 ? "s" : ""}
            </span>
          </div>
        </motion.div>
      )}

      {/* Content area */}
      <div className="min-h-[600px] md:min-h-[800px] transition-all duration-300">
        {tab === "workflow" && <WorkflowSection />}
        {tab === "all-grid" && <FeaturedGrid items={yearFiltered} onSelect={setSelectedProject} />}
        {tab === "timeline" && <TimelineList items={timelineFiltered} onSelect={setSelectedProject} />}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        selectedProject.slug === "uav-drone" ? (
          <FixedWingUAVModal onClose={() => setSelectedProject(null)} />
        ) : selectedProject.slug === "pid-control" ? (
          <PIDControlModal onClose={() => setSelectedProject(null)} />
        ) : selectedProject.slug === "medical-thermostat" ? (
          <ThermostatModal onClose={() => setSelectedProject(null)} />
        ) : selectedProject.slug === "plc-door-system" ? (
          <PLCDoorModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.slug === "student-attendance" ? (
          <StudentAttendanceModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.slug === "online-document-storage" ? (
          <OnlineDocumentStorageModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.slug === "coffee-shop-pos" ? (
          <CoffeeShopPosModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.slug === "uncloned-ecommerce" ? (
          <UnclonedEcommerceModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.slug === "field-booking-system" ? (
          <FieldBookingSystemModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.slug === "restaurant-pos" ? (
          <RestaurantPosModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.slug === "barbershop-booking" ? (
          <BarbershopBookingModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.slug === "booking-meeting-room" ? (
          <BookingMeetingRoomModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.slug === "mms-dashboard" ? (
          <MmsDashboardModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.slug === "predictive-maintenance" ? (
          <PredictiveMaintenanceModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.slug === "ai-defect-inspection" ? (
          <AiDefectInspectionModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.slug === "ros-automation" ? (
          <RosAutomationModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.slug === "smart-agriculture" ? (
          <SmartAgricultureModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.slug === "ping-pong-robot" ? (
          <PingPongRobotModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )
      )}
    </motion.section>
  );
}
