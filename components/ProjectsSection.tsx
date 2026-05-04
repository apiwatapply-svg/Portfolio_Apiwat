"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ExternalLink, Calendar } from "lucide-react";
import ProjectModal from "./ProjectModal";
import FixedWingUAVModal from "./modals/FixedWingUAVModal";
import PIDControlModal from "./modals/PIDControlModal";
import ThermostatModal from "./modals/ThermostatModal";
import PLCDoorModal from "./modals/PLCDoorModal";
import { projects as rawProjects, type Project } from "@/lib/data";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const projects = [...rawProjects].sort((a, b) => {
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
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-md">Featured</div>
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => onSelect(project)} className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/50 hover:bg-white hover:text-slate-900 transition-colors" aria-label={`View ${project.title}`}>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className={`text-xs font-semibold mb-2 ${themeMap[project.theme]}`}>{project.duration}</div>
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

function TimelineList({ items, onSelect }: { items: Project[], onSelect: (p: Project) => void }) {
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
      {items.map((project, idx) => {
        const showYearMarker = idx === 0 || project.year !== items[idx - 1].year;
        return (
          <div key={`${project.title}-${idx}`}>
            {showYearMarker && (
              <div className="relative flex items-center mb-8 mt-12 w-full z-10">
                <div className="px-4 py-1.5 ml-10 rounded-full font-bold text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700">{project.year}</div>
              </div>
            )}
            <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }} className="relative flex items-center mb-8 w-full">
              <div className="absolute left-[11px] w-2.5 h-2.5 rounded-full bg-blue-500 dark:bg-slate-400 border-2 border-white dark:border-slate-900 z-10" />
              <div className="w-full pl-10">
                <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} scale={1.01} transitionSpeed={2000}>
                  <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm hover:shadow-lg transition-all group">
                    <div className="flex justify-between items-start mb-2">
                      <button onClick={() => onSelect(project)} className="text-left">
                        <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors cursor-pointer">{project.title}</h3>
                      </button>
                      <button onClick={() => onSelect(project)} className="text-slate-400 hover:text-blue-500 transition-colors" aria-label={`View ${project.title}`}>
                        <ExternalLink size={16} />
                      </button>
                    </div>
                    <div className={`text-xs font-semibold mb-3 ${themeMap[project.theme]}`}>{project.duration}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
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

const PROJECTS_PER_PAGE = 6;

export default function ProjectsSection() {
  const [tab, setTab] = useState<"featured" | "all-grid" | "timeline">("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedTab = localStorage.getItem("portfolio-projects-tab");
    const savedYear = localStorage.getItem("portfolio-projects-year");
    const savedPage = localStorage.getItem("portfolio-projects-page");

    if (savedTab && ["featured", "all-grid", "timeline"].includes(savedTab)) {
      setTab(savedTab as "featured" | "all-grid" | "timeline");
    }
    if (savedYear) setSelectedYear(savedYear);
    if (savedPage) setCurrentPage(parseInt(savedPage, 10));
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("portfolio-projects-tab", tab);
      localStorage.setItem("portfolio-projects-year", selectedYear);
      localStorage.setItem("portfolio-projects-page", currentPage.toString());
    }
  }, [tab, selectedYear, currentPage, isMounted]);

  // Sorted unique years from all projects
  const availableYears = useMemo(() => {
    return [...new Set(projects.map((p) => p.year))].sort((a, b) => Number(b) - Number(a));
  }, []);

  const featured = projects.filter((p) => p.isFeatured).slice(0, 4);

  const handleTabChange = (newTab: "featured" | "all-grid" | "timeline") => {
    setTab(newTab);
    setCurrentPage(1);
    setSelectedYear("all");
  };

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    setCurrentPage(1);
  };

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const baseProjects = tab === "featured" ? featured : projects;
  const yearFiltered = (tab !== "featured" && selectedYear !== "all")
    ? baseProjects.filter((p) => p.year === selectedYear)
    : baseProjects;

  const totalPages = Math.ceil(yearFiltered.length / PROJECTS_PER_PAGE);
  const paginatedProjects = yearFiltered.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

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
          <h2 className="text-3xl font-black mb-2 tracking-tight text-slate-900 dark:text-white">Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium">Real-world solutions I&apos;ve built over time.</p>
        </div>

        {/* Tab toggle */}
        <div className="flex bg-transparent border border-slate-200 dark:border-slate-700 p-1 rounded-lg">
          {(["featured", "all-grid", "timeline"] as const).map((t) => (
            <button
              key={t}
              id={`tab-${t}`}
              onClick={() => handleTabChange(t)}
              className={`px-4 py-1.5 text-sm font-bold rounded-md transition-colors ${
                tab === t ? "bg-blue-600 text-white" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {t === "featured" ? "Featured" : t === "all-grid" ? "All Projects" : "Timeline"}
            </button>
          ))}
        </div>
      </div>

      {/* Year Filter — shown only for All Projects and Timeline */}
      {tab !== "featured" && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center gap-2 mb-6"
        >
          <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            <Calendar size={13} /> Filter by Year:
          </span>
          <button
            onClick={() => handleYearChange("all")}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-colors border ${
              selectedYear === "all"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-blue-400 hover:text-blue-600"
            }`}
          >
            All Years
          </button>
          {availableYears.map((year) => (
            <button
              key={year}
              onClick={() => handleYearChange(year)}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-colors border ${
                selectedYear === year
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              {year}
            </button>
          ))}
          {selectedYear !== "all" && (
            <span className="text-xs text-slate-400 dark:text-slate-500 ml-1">
              — {yearFiltered.length} project{yearFiltered.length !== 1 ? "s" : ""}
            </span>
          )}
        </motion.div>
      )}

      {/* Content area */}
      <div className="min-h-[600px] md:min-h-[800px] transition-all duration-300">
        {(tab === "featured" || tab === "all-grid") && <FeaturedGrid items={paginatedProjects} onSelect={setSelectedProject} />}
        {tab === "timeline" && <TimelineList items={paginatedProjects} onSelect={setSelectedProject} />}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-16 flex-wrap">
          <button
            onClick={() => { setCurrentPage((p) => Math.max(1, p - 1)); scrollToProjects(); }}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
          >
            ← Previous
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => { setCurrentPage(page); scrollToProjects(); }}
                className={`w-9 h-9 rounded-lg text-sm font-bold transition-colors border ${
                  currentPage === page
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-blue-400 hover:text-blue-600"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => { setCurrentPage((p) => Math.min(totalPages, p + 1)); scrollToProjects(); }}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
          >
            Next →
          </button>
        </div>
      )}

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
        ) : (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )
      )}
    </motion.section>
  );
}
