import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { ArrowLeft, ExternalLink, Calendar, Tag, BookOpen, Cpu, CheckCircle2, Layers } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

const themeMap = {
  blue: { badge: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300", dot: "bg-blue-500" },
  emerald: { badge: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300", dot: "bg-emerald-500" },
  purple: { badge: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300", dot: "bg-purple-500" },
  orange: { badge: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300", dot: "bg-orange-500" },
};

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const t = themeMap[project.theme];
  const d = project.details;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero Banner */}
      <div
        className="relative h-72 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 h-full flex flex-col justify-end pb-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold mb-4 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span key={tag} className={`text-xs font-bold px-3 py-1 rounded-full ${t.badge}`}>
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-2xl md:text-4xl font-black text-white leading-tight">{project.title}</h1>
          <div className="flex items-center gap-2 mt-2 text-white/70 text-sm">
            <Calendar size={14} />
            <span>{project.duration}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">

        {/* Overview */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <BookOpen size={20} className="text-blue-500" /> Overview
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{project.description}</p>
          {d?.objective && (
            <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Objective</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{d.objective}</p>
            </div>
          )}
        </section>

        {/* Methodology / Features */}
        {(d?.methodology || d?.features) && (
          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Layers size={20} className="text-purple-500" />
              {d.methodology ? "Methodology / Process" : "Key Features"}
            </h2>
            <ol className="space-y-3">
              {(d.methodology ?? d.features ?? []).map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <span className={`mt-1 w-5 h-5 rounded-full ${t.dot} flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold`}>
                    {d.methodology ? i + 1 : "✓"}
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Hardware */}
        {d?.hardware && (
          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Cpu size={20} className="text-emerald-500" /> Hardware & Tools
            </h2>
            <div className="flex flex-wrap gap-2">
              {d.hardware.map((hw) => (
                <span key={hw.name} className="text-sm font-semibold px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  {hw.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Results */}
        {d?.results && (
          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <CheckCircle2 size={20} className="text-orange-500" /> Results & Outcomes
            </h2>
            <ul className="space-y-3">
              {d.results.map((r, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Tech Stack */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Tag size={20} className="text-slate-500" /> Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className={`text-sm font-bold px-3 py-1.5 rounded-full ${t.badge}`}>
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Publication */}
        {d?.publication && (
          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <ExternalLink size={20} className="text-blue-500" /> Published Research
            </h2>
            <a
              href={d.publication}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold"
            >
              <ExternalLink size={14} /> View Publication
            </a>
          </section>
        )}

        {/* Back Button */}
        <div className="text-center pt-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft size={18} /> Back to All Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
