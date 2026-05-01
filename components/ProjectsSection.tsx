"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { projects, type Project } from "@/lib/data";

const themeMap = {
  blue: "text-blue-600 dark:text-blue-400",
  emerald: "text-emerald-600 dark:text-emerald-400",
  purple: "text-purple-600 dark:text-purple-400",
  orange: "text-orange-600 dark:text-orange-400",
};

function FeaturedGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 mt-12">
      {items.map((project) => (
        <div
          key={project.title}
          className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full"
        >
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
              <a
                href={project.link ?? "#"}
                className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/50 hover:bg-white hover:text-slate-900 transition-colors"
                aria-label={`View ${project.title}`}
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            <div className={`text-xs font-semibold mb-2 ${themeMap[project.theme]}`}>
              {project.duration}
            </div>
            <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
              {project.title}
            </h3>
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
      ))}
    </div>
  );
}

function TimelineList({ items }: { items: Project[] }) {
  let currentYear: string | null = null;

  return (
    <div className="relative mt-12 max-w-3xl mx-auto animate-in fade-in duration-500">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800" />

      {items.map((project, idx) => {
        const showYearMarker = project.year !== currentYear;
        if (showYearMarker) currentYear = project.year;

        return (
          <div key={`${project.title}-${idx}`}>
            {showYearMarker && (
              <div className="relative flex items-center mb-8 mt-12 w-full z-10">
                <div className="px-4 py-1.5 ml-10 rounded-full font-bold text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700">
                  {project.year}
                </div>
              </div>
            )}

            <div className="relative flex items-center mb-8 w-full">
              {/* Timeline dot */}
              <div className="absolute left-[11px] w-2.5 h-2.5 rounded-full bg-blue-500 dark:bg-slate-400 border-2 border-white dark:border-slate-900 z-10" />

              {/* Card */}
              <div className="w-full pl-10">
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.link ?? "#"}
                      className="text-slate-400 hover:text-blue-500 transition-colors"
                      aria-label={`View ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ProjectsSection() {
  const [tab, setTab] = useState<"featured" | "all">("featured");
  const featured = projects.filter((p) => p.isFeatured);

  return (
    <section id="projects">
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
            onClick={() => setTab("featured")}
            className={`px-4 py-1.5 text-sm font-bold rounded-md transition-colors ${
              tab === "featured"
                ? "bg-blue-600 text-white"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Featured
          </button>
          <button
            id="tab-timeline"
            onClick={() => setTab("all")}
            className={`px-4 py-1.5 text-sm font-bold rounded-md transition-colors ${
              tab === "all"
                ? "bg-blue-600 text-white"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Timeline
          </button>
        </div>
      </div>

      {tab === "featured" && <FeaturedGrid items={featured} />}
      {tab === "all" && <TimelineList items={projects} />}
    </section>
  );
}
