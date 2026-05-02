import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactFooter from "@/components/ContactFooter";

import CertificatesSection from "@/components/CertificatesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      {/* Background dot pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-40 z-0"
        style={{
          backgroundImage:
            "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />
      {/* Dark mode dot pattern — handled via CSS variable trick */}
      <style>{`
        .dark [aria-hidden="true"] {
          background-image: radial-gradient(#334155 1px, transparent 1px) !important;
        }
      `}</style>

      <Navbar />

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 space-y-16 md:space-y-24">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificatesSection />
      </main>

      <ContactFooter />
    </div>
  );
}
