import { Briefcase, GraduationCap } from "lucide-react";
import { experience, education } from "@/lib/data";

const expColorMap = {
  blue: "text-blue-600 dark:text-blue-400",
  emerald: "text-emerald-600 dark:text-emerald-400",
  orange: "text-orange-600 dark:text-orange-400",
};

export default function ExperienceSection() {
  return (
    <div id="experience" className="grid grid-cols-1 lg:grid-cols-2 gap-16 scroll-mt-24">
      {/* Education */}
      <section>
        <h2 className="text-2xl font-black mb-8 flex items-center gap-3 text-slate-900 dark:text-white">
          <GraduationCap size={24} className="text-purple-500" />
          Education
        </h2>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <div className="text-xs font-bold mb-2 text-purple-500 dark:text-purple-400">
                {edu.period}
              </div>
              <h3 className="text-md font-bold mb-1 text-slate-900 dark:text-white">
                {edu.degree}
              </h3>
              <div className="text-sm font-semibold mb-3 text-slate-500 dark:text-slate-400">
                {edu.university}
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{edu.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-2xl font-black mb-8 flex items-center gap-3 text-slate-900 dark:text-white">
          <Briefcase size={24} className="text-blue-500" />
          Experience
        </h2>

        <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-800 pl-6 ml-3">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-white dark:bg-slate-950 border-2 border-slate-300 dark:border-slate-600" />
              <div className={`text-xs font-bold mb-1 ${expColorMap[exp.color]}`}>
                {exp.period}
              </div>
              <h3 className="text-lg font-bold mb-1 text-slate-900 dark:text-white">
                {exp.role}
              </h3>
              <div className="text-sm font-semibold mb-3 text-slate-500 dark:text-slate-400">
                {exp.company}
              </div>
              <ul className="space-y-2">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex gap-2"
                  >
                    <span className="shrink-0 text-slate-400">-</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
