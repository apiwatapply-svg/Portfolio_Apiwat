"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, BookOpen, Cpu, Layers, CheckCircle2, Target, User, Activity, Settings, Award, Lightbulb, ArrowRight, ArrowDown } from "lucide-react";

// ---------------------------------------------------------
// Helper: Image Slider Component for multiple images
// ---------------------------------------------------------
const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-64 sm:h-96 group rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
      <div className="w-full h-full relative">
        <Image 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`} 
          fill 
          className="object-contain" 
          sizes="(max-width: 1024px) 100vw, 800px"
        />
      </div>
      
      {images.length > 1 && (
        <>
          <div 
            className="absolute top-[50%] -translate-y-[50%] left-2 sm:left-4 text-2xl rounded-full p-2 bg-slate-900/40 hover:bg-slate-900/70 text-white cursor-pointer backdrop-blur-sm transition-all z-10" 
            onClick={prevSlide}
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </div>
          <div 
            className="absolute top-[50%] -translate-y-[50%] right-2 sm:right-4 text-2xl rounded-full p-2 bg-slate-900/40 hover:bg-slate-900/70 text-white cursor-pointer backdrop-blur-sm transition-all z-10" 
            onClick={nextSlide}
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </div>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
            {images.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => setCurrentIndex(slideIndex)}
                className={`h-1.5 sm:h-2 rounded-full cursor-pointer transition-all shadow-sm ${
                  currentIndex === slideIndex ? "bg-blue-500 w-4 sm:w-6" : "bg-white/60 w-1.5 sm:w-2 hover:bg-white"
                }`}
              ></div>
            ))}
          </div>
          <div className="absolute top-3 right-3 bg-slate-900/60 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-md z-10">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
};

// ---------------------------------------------------------
// Main Modal Component
// ---------------------------------------------------------
export default function FixedWingUAVModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "unset"; };
  }, []);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6 sm:pt-[80px]">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-5xl h-[90vh] sm:h-[calc(100vh-100px)] bg-white dark:bg-slate-950 rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md z-30 shadow-sm">
            <div className="flex flex-col gap-1 pr-4">
              <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white line-clamp-1">
                Fixed-Wing UAV Control System
              </h2>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 font-bold uppercase text-[10px] tracking-wider">
                  Master&apos;s Thesis
                </span>
                <span>2020 - 2021</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full transition-colors shrink-0"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Scrolling Content */}
          <div className="overflow-y-auto flex-1 custom-scrollbar pb-10">
            {/* Cover Image */}
            <div className="relative h-48 sm:h-72 w-full bg-slate-100 dark:bg-slate-800">
              <Image
                src="/projects/uav-drone-thesis/Cover.png"
                alt="UAV Control System Cover"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-6 sm:p-8">
                <h1 className="text-white text-xl sm:text-3xl font-black drop-shadow-lg leading-tight max-w-3xl">
                  Mathematical Modeling & Control System Design of Fixed-Wing UAV using Metaheuristics
                </h1>
              </div>
            </div>

            <div className="p-4 sm:p-8 space-y-10 sm:space-y-12">
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {["MATLAB", "Python", "PID Control", "Raspberry Pi", "Arduino", "System Identification", "Meta-Heuristics"].map((tag) => (
                  <span key={tag} className="text-xs font-bold px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>

              {/* SECTION: Overview */}
              <section className="space-y-6">
                <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <BookOpen size={22} className="text-blue-500" /> Overview & Objective
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 shadow-sm">
                    <p className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-2"><Target size={14}/> Goal</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      Develop an autonomous Flight Control System (Autopilot) for a Fixed-Wing UAV to automatically maintain flight stability and accurately track predetermined flight paths via Waypoints.
                    </p>
                  </div>
                  
                  <div className="p-5 rounded-xl bg-orange-50 dark:bg-orange-900/10 border-l-4 border-orange-500 shadow-sm">
                    <p className="text-xs font-black text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-2 flex items-center gap-2"><Activity size={14}/> Problem</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      Traditional UAV control design requires experts to manually compute mathematical models — a slow, error-prone process that is highly difficult to reuse for new aircraft prototypes.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 shadow-sm">
                  <p className="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2"><Lightbulb size={14}/> The Solution</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    Applied 13 Meta-Heuristic Optimization algorithms (such as L-SHADE, CMAES) to perform System Identification. This algorithm-driven approach automatically derives the aircraft&apos;s Aerodynamic Stability parameters to precisely design a PID Controller, completely replacing manual tuning.
                  </p>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-sm">
                  <User size={24} className="text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">My Role</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Sole researcher and control systems engineer. Responsible for experiment design, real flight data collection, MATLAB/Python coding for system identification & optimization, real flight testing, and final thesis writing.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION: System Architecture */}
              <section className="space-y-6">
                <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <Layers size={22} className="text-purple-500" /> System Architecture
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  The architecture is divided into two primary control loops operating simultaneously:
                </p>

                {/* Flow Diagram */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4 p-4 sm:p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                  
                  {/* Ground Station */}
                  <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm w-full lg:w-1/4 border border-slate-100 dark:border-slate-700 relative z-10">
                    <div className="font-black text-sm mb-1 text-slate-800 dark:text-slate-200">Ground Station / GUI</div>
                    <div className="text-[11px] text-slate-500">Sends desired Waypoint</div>
                    <div className="mt-3 text-[10px] bg-slate-100 dark:bg-slate-700 py-1 px-2 rounded text-slate-600 dark:text-slate-300 font-mono">Latitude, Longitude</div>
                  </div>
                  
                  <ArrowRight size={20} className="hidden lg:block text-slate-400 flex-shrink-0" />
                  <ArrowDown size={20} className="block lg:hidden text-slate-400" />

                  {/* Outer Loop */}
                  <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md border-t-4 border-blue-500 w-full lg:w-1/4 relative z-10">
                    <div className="font-black text-sm mb-1 text-blue-700 dark:text-blue-400">Outer Loop</div>
                    <div className="text-[11px] text-slate-500 font-medium">Guidance Navigation Control</div>
                    <div className="mt-3 text-[10px] bg-blue-50 dark:bg-blue-900/30 py-1 px-2 rounded text-blue-700 dark:text-blue-300 font-mono">Altitude, Speed, Heading</div>
                  </div>

                  <ArrowRight size={20} className="hidden lg:block text-slate-400 flex-shrink-0" />
                  <ArrowDown size={20} className="block lg:hidden text-slate-400" />

                  {/* Inner Loop */}
                  <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md border-t-4 border-emerald-500 w-full lg:w-1/4 relative z-10">
                    <div className="font-black text-sm mb-1 text-emerald-700 dark:text-emerald-400">Inner Loop</div>
                    <div className="text-[11px] text-slate-500 font-medium">Stability (PID Controller)</div>
                    <div className="mt-3 text-[10px] bg-emerald-50 dark:bg-emerald-900/30 py-1 px-2 rounded text-emerald-700 dark:text-emerald-300 font-mono">Elevator, Aileron, Throttle</div>
                  </div>

                  <ArrowRight size={20} className="hidden lg:block text-slate-400 flex-shrink-0" />
                  <ArrowDown size={20} className="block lg:hidden text-slate-400" />

                  {/* UAV Plant */}
                  <div className="p-4 bg-slate-800 dark:bg-slate-950 rounded-lg shadow-sm w-full lg:w-1/4 border border-slate-700">
                    <div className="font-black text-sm mb-1 text-white">UAV Plant</div>
                    <div className="text-[11px] text-slate-400">Aircraft Dynamics & Actuators</div>
                    <div className="mt-3 text-[10px] bg-slate-700/50 py-1 px-2 rounded text-slate-300 font-mono">Sensors Feedback</div>
                  </div>
                  
                </div>
              </section>

              {/* SECTION: Hardware */}
              <section className="space-y-6">
                <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <Cpu size={22} className="text-slate-600 dark:text-slate-300" /> Hardware Components
                </h3>
                
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
                    <div className="relative h-48 w-full bg-slate-100 dark:bg-slate-800">
                      <Image 
                        src="/projects/uav-drone-thesis/p051_img01.jpeg" 
                        alt="Hardware Setup" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Main Controller</p>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Raspberry Pi 3 Model B+</p>
                      <p className="text-xs text-slate-500 mt-1">Runs processing logic via MATLAB/Simulink</p>
                    </div>
                    <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Microcontroller</p>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Arduino Mega 2560</p>
                      <p className="text-xs text-slate-500 mt-1">Reads sensors & sends PWM to Servos</p>
                    </div>
                    <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 sm:col-span-2">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Sensors & Modules</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-700">MS5611 (Altitude)</span>
                        <span className="text-xs bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-700">BNO080 (IMU/Tilt)</span>
                        <span className="text-xs bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-700">GPS Module</span>
                        <span className="text-xs bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-700">Air Speed Sensor</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION: Methodology & Flows */}
              <section className="space-y-8">
                <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <Settings size={22} className="text-indigo-500" /> Methodology & Execution Flows
                </h3>

                {/* Flow 1 */}
                <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-8 space-y-6">
                  <h4 className="text-lg font-black text-slate-800 dark:text-slate-200 flex items-center gap-3">
                    <span className="bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-black shadow-md">1</span>
                    System Identification (Mathematical Modeling)
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 pl-11">
                    The first step involves capturing real flight behavior and using algorithms to generate an accurate mathematical model representing the UAV.
                  </p>
                  
                  <div className="space-y-8 mt-6 pl-0 sm:pl-11">
                    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                      <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-2">A. Flight Test & Data Collection</h5>
                      <p className="text-sm text-slate-500 mb-4">Applied disturbance signals (Step, Sine wave) to the aircraft via remote control and recorded the aircraft&apos;s dynamic response.</p>
                      <ImageSlider images={[
                        "/projects/uav-drone-thesis/p054_img01.jpeg",
                        "/projects/uav-drone-thesis/p068_img01.jpeg"
                      ]} />
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                      <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-2">B. Algorithm Processing (Meta-Heuristics)</h5>
                      <p className="text-sm text-slate-500 mb-4">Processed the collected data using L-SHADE and CMAES algorithms to calculate Aerodynamic Stability (State Space Model matrices).</p>
                      
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                          <p className="text-xs font-bold text-center text-slate-600 dark:text-slate-300 mb-3">Elevator Response Analysis</p>
                          <ImageSlider images={[
                            "/projects/uav-drone-thesis/p089_img01.jpeg",
                            "/projects/uav-drone-thesis/p090_img01.jpeg",
                            "/projects/uav-drone-thesis/p091_img01.jpeg",
                            "/projects/uav-drone-thesis/p092_img01.jpeg",
                            "/projects/uav-drone-thesis/p094_img01.jpeg"
                          ]} />
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                          <p className="text-xs font-bold text-center text-slate-600 dark:text-slate-300 mb-3">Aileron Response Analysis</p>
                          <ImageSlider images={[
                            "/projects/uav-drone-thesis/p097_img01.jpeg",
                            "/projects/uav-drone-thesis/p098_img01.jpeg",
                            "/projects/uav-drone-thesis/p099_img01.jpeg",
                            "/projects/uav-drone-thesis/p100_img01.jpeg",
                            "/projects/uav-drone-thesis/p102_img01.jpeg"
                          ]} />
                        </div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                      <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-2">C. Accuracy Verification</h5>
                      <p className="text-sm text-slate-500 mb-4">Compared mathematical model simulation outputs against real aircraft flight data to confirm reliability (achieved 87-98% accuracy).</p>
                      <ImageSlider images={[
                        "/projects/uav-drone-thesis/p146_img01.jpeg",
                        "/projects/uav-drone-thesis/p146_img02.jpeg",
                        "/projects/uav-drone-thesis/p147_img01.jpeg",
                        "/projects/uav-drone-thesis/p147_img02.jpeg"
                      ]} />
                    </div>
                  </div>
                </div>

                {/* Flow 2 */}
                <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-8 space-y-6">
                  <h4 className="text-lg font-black text-slate-800 dark:text-slate-200 flex items-center gap-3">
                    <span className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-black shadow-md">2</span>
                    PID Controller Design
                  </h4>
                  <div className="pl-0 sm:pl-11 space-y-6">
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-3 bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                      <li className="flex gap-3"><span className="text-emerald-500 mt-0.5">•</span> <span>Utilized the generated State Space Model to design the PID Controller.</span></li>
                      <li className="flex gap-3"><span className="text-emerald-500 mt-0.5">•</span> <span>Deployed Meta-Heuristics (L-SHADE) to autonomously tune PID parameters (<code className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded text-xs font-mono text-emerald-600 dark:text-emerald-400">Kp, Ki, Kd, Tf</code>).</span></li>
                      <li className="flex gap-3"><span className="text-emerald-500 mt-0.5">•</span> <span>Optimized for best time response, minimizing Overshoot and Settling time.</span></li>
                    </ul>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                      <ImageSlider images={[
                        "/projects/uav-drone-thesis/p137_img01.jpeg",
                        "/projects/uav-drone-thesis/p138_img01.jpeg",
                        "/projects/uav-drone-thesis/p141_img01.jpeg",
                        "/projects/uav-drone-thesis/p143_img01.jpeg",
                        "/projects/uav-drone-thesis/p144_img01.jpeg"
                      ]} />
                    </div>
                  </div>
                </div>

                {/* Flow 3 */}
                <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-8 space-y-6">
                  <h4 className="text-lg font-black text-slate-800 dark:text-slate-200 flex items-center gap-3">
                    <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-black shadow-md">3</span>
                    Flight Test Evaluation (Real World)
                  </h4>
                  <div className="pl-0 sm:pl-11 space-y-6">
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-3 bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                      <li className="flex gap-3"><span className="text-orange-500 mt-0.5">•</span> <span>Uploaded optimized PID Controller code to Raspberry Pi onboard.</span></li>
                      <li className="flex gap-3"><span className="text-orange-500 mt-0.5">•</span> <span>Executed autonomous flight tests to evaluate Reference Tracking Performance.</span></li>
                      <li className="flex gap-3"><span className="text-orange-500 mt-0.5">•</span> <span>Analyzed the correlation between Simulation behavior and actual flight dynamics.</span></li>
                    </ul>
                    
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border-4 border-slate-900 shadow-2xl">
                      <video 
                        controls 
                        src="/projects/uav-drone-thesis/Fly_test.mov" 
                        className="absolute inset-0 w-full h-full object-contain"
                        poster="/projects/uav-drone-thesis/p030_img01.png"
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION: Key Results */}
              <section className="space-y-6">
                <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <Award size={22} className="text-amber-500" /> Key Results & Impact
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-5 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm flex gap-4">
                    <CheckCircle2 size={24} className="text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-black text-sm text-slate-800 dark:text-slate-200 mb-2">High Model Accuracy</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        L-SHADE and CMAES produced mathematical models extremely close to real flight dynamics with an <span className="font-bold text-emerald-600 dark:text-emerald-400">87–98% accuracy rate</span>.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm flex gap-4">
                    <CheckCircle2 size={24} className="text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-black text-sm text-slate-800 dark:text-slate-200 mb-2">Longitudinal Control (Pitch)</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Rapid setpoint tracking performance: Rise time ~0.15s, Settling time ~4.99s, and Overshoot at only 11.1%.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm flex gap-4">
                    <CheckCircle2 size={24} className="text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-black text-sm text-slate-800 dark:text-slate-200 mb-2">Lateral Control (Roll)</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Accurate direction changes despite wind disturbances: Rise time ~0.52s, Settling time ~3.15s, and Overshoot at just 5.0%.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 border-2 border-amber-200 dark:border-amber-900/50 rounded-xl bg-amber-50 dark:bg-amber-900/10 shadow-sm flex gap-4">
                    <CheckCircle2 size={24} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-black text-sm text-amber-900 dark:text-amber-300 mb-2">Academic Success & Low Error</h5>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        Real flight error was <span className="font-bold text-red-500">&lt; 10%</span> compared to simulations. Thesis achieved <span className="font-bold underline decoration-amber-400 decoration-2">&quot;Excellent&quot;</span> evaluation and was published in an <span className="italic font-medium">ISI Indexed International Journal</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Bottom Spacer */}
              <div className="h-8"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
