"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ExternalLink, Calendar } from "lucide-react";
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
import FieldBookingSystemModal from "./modals/FieldBookingSystemModal";
import MaterialRequisitionModal from "./modals/MaterialRequisitionModal";
import RestaurantPosModal from "./modals/RestaurantPosModal";
import BarbershopBookingModal from "./modals/BarbershopBookingModal";
import N8nAutomationModal from "./modals/N8nAutomationModal";
import AutoSettingMachineModal from "./modals/AutoSettingMachineModal";
import BookingMeetingRoomModal from "./modals/BookingMeetingRoomModal";
import AbnormalDefectDetectionModal from "./modals/AbnormalDefectDetectionModal";
import OilRecordingPaperlessModal from "./modals/OilRecordingPaperlessModal";
import MmsDashboardModal from "./modals/MmsDashboardModal";
import PredictiveMaintenanceModal from "./modals/PredictiveMaintenanceModal";
import AiDefectInspectionModal from "./modals/AiDefectInspectionModal";
import RosAutomationModal from "./modals/RosAutomationModal";
import SmartAgricultureModal from "./modals/SmartAgricultureModal";
import PingPongRobotModal from "./modals/PingPongRobotModal";

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


function WorkflowSection() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
      }}
      className="mt-8 space-y-12"
    >
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
                {Number(project.year) >= 2023 && Number(project.year) <= 2026 && (
                  <div className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md shadow-sm">Upcoming</div>
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
                    <div className={`text-xs font-semibold mb-3 flex items-center gap-2 ${themeMap[project.theme]}`}>
                      <span>{project.duration}</span>
                      {Number(project.year) >= 2023 && Number(project.year) <= 2026 && (
                        <span className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wider">Upcoming</span>
                      )}
                    </div>
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

export default function ProjectsSection() {
  const [tab, setTab] = useState<"workflow" | "all-grid" | "timeline">("workflow");
  const [selectedYear, setSelectedYear] = useState<string>(projects[0]?.year || new Date().getFullYear().toString());
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedTab = localStorage.getItem("portfolio-projects-tab");
    const savedYear = localStorage.getItem("portfolio-projects-year");
    if (savedTab && ["workflow", "all-grid", "timeline"].includes(savedTab)) {
      setTimeout(() => setTab(savedTab as "workflow" | "all-grid" | "timeline"), 0);
    }
    if (savedYear && savedYear !== "all") setTimeout(() => setSelectedYear(savedYear), 0);
    setTimeout(() => setIsMounted(true), 0);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("portfolio-projects-tab", tab);
      localStorage.setItem("portfolio-projects-year", selectedYear);
      }
  }, [tab, selectedYear, isMounted]);

  // Sorted unique years from all projects
  const availableYears = useMemo(() => {
    return [...new Set(projects.map((p) => p.year))].sort((a, b) => Number(b) - Number(a));
  }, []);

  const handleTabChange = (newTab: "workflow" | "all-grid" | "timeline") => {
    setTab(newTab);
  };

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
  };

  const baseProjects = projects;
  const yearFiltered = tab !== "workflow"
    ? baseProjects.filter((p) => p.year === selectedYear)
    : baseProjects;

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
          <p className="text-slate-600 dark:text-slate-400 font-medium">How I work, and the real-world solutions I&apos;ve built over time.</p>
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
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center gap-2 mb-6"
        >
          <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            <Calendar size={13} /> Filter by Year:
          </span>
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
          <span className="text-xs text-slate-400 dark:text-slate-500 ml-1">
            — {yearFiltered.length} project{yearFiltered.length !== 1 ? "s" : ""}
          </span>
        </motion.div>
      )}

      {/* Content area */}
      <div className="min-h-[600px] md:min-h-[800px] transition-all duration-300">
        {tab === "workflow" && <WorkflowSection />}
        {tab === "all-grid" && <FeaturedGrid items={yearFiltered} onSelect={setSelectedProject} />}
        {tab === "timeline" && <TimelineList items={yearFiltered} onSelect={setSelectedProject} />}
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
        ) : selectedProject.slug === "field-booking-system" ? (
          <FieldBookingSystemModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.slug === "material-requisition" ? (
          <MaterialRequisitionModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.slug === "restaurant-pos" ? (
          <RestaurantPosModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.slug === "barbershop-booking" ? (
          <BarbershopBookingModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.slug === "n8n-automation" ? (
          <N8nAutomationModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.slug === "auto-setting-machine" ? (
          <AutoSettingMachineModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.slug === "booking-meeting-room" ? (
          <BookingMeetingRoomModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.slug === "abnormal-defect-detection" ? (
          <AbnormalDefectDetectionModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        ) : selectedProject.slug === "oil-recording-paperless" ? (
          <OilRecordingPaperlessModal project={selectedProject} onClose={() => setSelectedProject(null)} />
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
