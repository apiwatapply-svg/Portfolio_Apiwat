"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { certificates } from "@/lib/data";

export default function CertificatesSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  
  // Carousel states
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const N = certificates.length;

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % N);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + N) % N);
  };

  // Lightbox navigation
  const handleLightboxNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % N);
    }
  };

  const handleLightboxPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + N) % N);
    }
  };

  // Get up to 3 visible items for the carousel grid
  const getVisibleCerts = () => {
    if (N === 0) return [];
    if (N === 1) return [certificates[0]];
    if (N === 2) return [certificates[currentIndex], certificates[(currentIndex + 1) % N]];
    return [
      certificates[currentIndex],
      certificates[(currentIndex + 1) % N],
      certificates[(currentIndex + 2) % N]
    ];
  };

  const visibleCerts = getVisibleCerts();

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, type: "spring" as const, bounce: 0.3 }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3 }
    })
  };

  return (
    <section id="certificates" className="relative z-10 w-full scroll-mt-24">
      {/* Section Header */}
      <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <div className="p-3 rounded-2xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
            <Award size={28} />
          </div>
          <div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">Certificates & Awards</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-1">Recognitions and professional certifications</p>
          </div>
        </motion.div>

        {/* Carousel Controls */}
        {N > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="self-center sm:self-auto flex items-center justify-center gap-4 bg-white dark:bg-slate-900 p-2 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-orange-500 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="font-bold text-sm text-slate-700 dark:text-slate-300 w-12 text-center select-none">
              {currentIndex + 1} / {N}
            </div>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-orange-500 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        )}
      </div>

      {/* Grid Carousel Layout */}
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout" custom={direction}>
            {visibleCerts.map((cert, idx) => (
              <motion.div
                key={`${cert.id}-${currentIndex}`} // Force re-render for animation on index change
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className={`group relative cursor-pointer
                  ${idx === 1 ? "hidden sm:block" : ""} 
                  ${idx === 2 ? "hidden md:block" : ""}
                `}
                onClick={() => setSelectedIndex(certificates.findIndex(c => c.id === cert.id))}
              >
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 aspect-[4/3] shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex flex-col justify-end p-6">
                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <ZoomIn size={24} className="text-white mb-2" />
                      <h3 className="text-white font-bold text-lg drop-shadow-md leading-tight">{cert.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[110]"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={24} />
            </motion.button>
            
            {/* Previous Button */}
            <button
              className="absolute left-4 sm:left-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/30 transition-colors z-[110]"
              onClick={handleLightboxPrev}
            >
              <ChevronLeft size={32} />
            </button>

            {/* Next Button */}
            <button
              className="absolute right-4 sm:right-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/30 transition-colors z-[110]"
              onClick={handleLightboxNext}
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full h-[80vh] aspect-[4/3] rounded-lg flex flex-col items-center justify-center px-16 sm:px-24"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={certificates[selectedIndex].image}
                  alt={certificates[selectedIndex].title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <h3 className="text-white text-xl font-bold mt-6 text-center absolute bottom-0 bg-black/60 px-6 py-2 rounded-full">
                {certificates[selectedIndex].title}
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
