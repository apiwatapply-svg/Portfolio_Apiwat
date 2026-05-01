import Image from "next/image";
import { Briefcase, ArrowRight } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function HeroSection() {
  return (
    <section id="home" className="flex flex-col-reverse md:flex-row items-center gap-12 pt-10">
      {/* Left — Text */}
      <div className="flex-1 text-center md:text-left">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-semibold mb-6 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          {personalInfo.availability}
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 leading-[1.1] text-slate-900 dark:text-white">
          Hi, I&apos;m {personalInfo.name}. <br />
          <span className="text-blue-600">{personalInfo.role}</span>
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mb-8 mx-auto md:mx-0">
          {personalInfo.bio}
        </p>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="inline-flex justify-center items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors group"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex justify-center items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right — Avatar */}
      <div className="relative w-48 h-48 md:w-80 md:h-80 shrink-0">
        {/* Shadow offset background */}
        <div className="absolute inset-0 rounded-full bg-slate-200 dark:bg-slate-800 transform translate-x-4 translate-y-4" />

        <Image
          src={personalInfo.avatar}
          alt={personalInfo.fullName}
          fill
          sizes="(max-width: 768px) 192px, 320px"
          priority
          className="relative object-cover rounded-full border-4 border-white dark:border-slate-900 shadow-md"
        />

        {/* Experience badge */}
        <div className="absolute bottom-4 -left-4 bg-white dark:bg-slate-900 p-3 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 flex items-center gap-2">
          <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg text-blue-600 dark:text-blue-400">
            <Briefcase size={20} />
          </div>
          <div className="text-left">
            <div className="font-bold text-slate-900 dark:text-white leading-tight text-sm">
              {personalInfo.yearsOfExperience} Years
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
