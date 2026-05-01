"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const themeMap = {
  blue: "text-blue-600 dark:text-blue-400",
  emerald: "text-emerald-600 dark:text-emerald-400",
  purple: "text-purple-600 dark:text-purple-400",
  orange: "text-orange-600 dark:text-orange-400",
};

function FeaturedGrid({ items }: { items: Project[] }) {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 }
        }
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
              {/* Image */}
          <div className="h-48 overflow-hidden relative bg-slate-100 dark:bg-slate-800">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {project.isFeatured && (
              <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-md">
                Featured
              </div>
            )}

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Link
                href={`/projects/${project.slug}`}
                className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/50 hover:bg-white hover:text-slate-900 transition-colors"
                aria-label={`View ${project.title}`}
              >
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            <div className={`text-xs font-semibold mb-2 ${themeMap[project.theme]}`}>
              {project.duration}
            </div>
            <Link href={`/projects/${project.slug}`}>
              <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                {project.title}
              </h3>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold px-2 py-1 rounded border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400"
                >
                  {tag}
                </span>
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

function TimelineList({ items }: { items: Project[] }) {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 }
        }
      }}
      className="relative mt-12 max-w-3xl mx-auto"
    >
      {/* Vertical line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute left-4 top-0 w-0.5 bg-slate-200 dark:bg-slate-800" 
      />

      {items.map((project, idx) => {
        const showYearMarker = idx === 0 || project.year !== items[idx - 1].year;

        return (
          <div key={`${project.title}-${idx}`}>
            {showYearMarker && (
              <div className="relative flex items-center mb-8 mt-12 w-full z-10">
                <div className="px-4 py-1.5 ml-10 rounded-full font-bold text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700">
                  {project.year}
                </div>
              </div>
            )}

            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
              }}
              className="relative flex items-center mb-8 w-full"
            >
              {/* Timeline dot */}
              <div className="absolute left-[11px] w-2.5 h-2.5 rounded-full bg-blue-500 dark:bg-slate-400 border-2 border-white dark:border-slate-900 z-10" />

              {/* Card */}
              <div className="w-full pl-10">
                <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} scale={1.01} transitionSpeed={2000}>
                  <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm hover:shadow-lg transition-all group">
                  <div className="flex justify-between items-start mb-2">
                    <Link href={`/projects/${project.slug}`}>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors cursor-pointer">
                        {project.title}
                      </h3>
                    </Link>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-slate-400 hover:text-blue-500 transition-colors"
                      aria-label={`View ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </Link>
                  </div>
                  <div className={`text-xs font-semibold mb-3 ${themeMap[project.theme]}`}>
                    {project.duration}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold px-2 py-1 rounded border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400"
                      >
                        {tag}
                      </span>
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
  
  const featured = projects.filter((p) => p.isFeatured);
  
  const handleTabChange = (newTab: "featured" | "all-grid" | "timeline") => {
    setTab(newTab);
    setCurrentPage(1); // รีเซ็ตหน้ากลับไปหน้าแรกเมื่อเปลี่ยน tab
  };

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      const offset = 100; // เผื่อความสูงของ Navbar
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const activeProjects = tab === "featured" ? featured : projects;
  const totalPages = Math.ceil(activeProjects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = activeProjects.slice(
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
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
        <div>
          <h2 className="text-3xl font-black mb-2 tracking-tight text-slate-900 dark:text-white">
            Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            Real-world solutions I&apos;ve built over time.
          </p>
        </div>

        {/* Tab toggle */}
        <div className="flex bg-transparent border border-slate-200 dark:border-slate-700 p-1 rounded-lg">
          <button
            id="tab-featured"
            onClick={() => handleTabChange("featured")}
            className={`px-4 py-1.5 text-sm font-bold rounded-md transition-colors ${
              tab === "featured"
                ? "bg-blue-600 text-white"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Featured
          </button>
          <button
            id="tab-all-grid"
            onClick={() => handleTabChange("all-grid")}
            className={`px-4 py-1.5 text-sm font-bold rounded-md transition-colors ${
              tab === "all-grid"
                ? "bg-blue-600 text-white"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            All Projects
          </button>
          <button
            id="tab-timeline"
            onClick={() => handleTabChange("timeline")}
            className={`px-4 py-1.5 text-sm font-bold rounded-md transition-colors ${
              tab === "timeline"
                ? "bg-blue-600 text-white"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Timeline
          </button>
        </div>
      </div>

      {/* Wrapper with min-height to prevent layout shift when changing pages */}
      <div className="min-h-[600px] md:min-h-[800px] transition-all duration-300">
        {(tab === "featured" || tab === "all-grid") && <FeaturedGrid items={paginatedProjects} />}
        {tab === "timeline" && <TimelineList items={paginatedProjects} />}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-16">
          <button
            onClick={() => {
              setCurrentPage((p) => Math.max(1, p - 1));
              scrollToProjects();
            }}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
          >
            Previous
          </button>
          
          <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
            Page {currentPage} of {totalPages}
          </div>
          
          <button
            onClick={() => {
              setCurrentPage((p) => Math.min(totalPages, p + 1));
              scrollToProjects();
            }}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
          >
            Next
          </button>
        </div>
      )}
    </motion.section>
  );
}
