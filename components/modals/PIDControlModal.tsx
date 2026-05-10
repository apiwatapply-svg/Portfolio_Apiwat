"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, BookOpen, Cpu, CheckCircle2, Target, Activity, Settings, Lightbulb, Video } from "lucide-react";

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
export default function PIDControlModal({ onClose }: { onClose: () => void }) {
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
                PID Control System Designer
              </h2>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 font-bold uppercase text-[10px] tracking-wider">
                  Educational Simulation
                </span>
                <span>Sep 2018 - Oct 2018</span>
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
            <div className="relative h-64 sm:h-[400px] w-full bg-slate-100 dark:bg-slate-800">
              <Image
                src="/projects/PID_Control_System_Designer/cover.png"
                alt="PID Control System Cover"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6 sm:p-8">
                <h1 className="text-white text-xl sm:text-3xl font-black drop-shadow-lg leading-tight max-w-3xl">
                  Modeling and PID Control System Design with MATLAB/Simulink
                </h1>
              </div>
            </div>

            <div className="p-4 sm:p-8 space-y-10 sm:space-y-12">
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {["MATLAB", "Simulink", "PID Control", "Control Systems", "Simulation"].map((tag) => (
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
                      Create and develop a simulation tool to be used as a teaching aid in a <strong className="font-bold">Control Systems</strong> course. It focuses on helping students visualize and concretely understand the working principles of a PID (Proportional-Integral-Derivative) control system through hands-on experimentation with MATLAB and Simulink.
                    </p>
                  </div>
                  
                  <div className="p-5 rounded-xl bg-orange-50 dark:bg-orange-900/10 border-l-4 border-orange-500 shadow-sm">
                    <p className="text-xs font-black text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-2 flex items-center gap-2"><Activity size={14}/> Problem Solved</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      Control system theory is often complex and difficult to grasp when learned solely through mathematical equations. This simulation tool allows students to experiment with tuning Kp, Ki, Kd values and observe the System Response interactively. It makes understanding the impact of each parameter clear and safe, without risking damage to real hardware from instability.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION: Key Features */}
              <section className="space-y-6">
                <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <CheckCircle2 size={22} className="text-emerald-500" /> Key Features & Analysis
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-5 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm">
                    <h5 className="font-black text-sm text-slate-800 dark:text-slate-200 mb-2">Mathematical Modeling</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Creating Block Diagrams in Simulink to simulate the structure of a Plant (the system or hardware to be controlled) and connecting it to a PID Controller.
                    </p>
                  </div>

                  <div className="p-5 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm">
                    <h5 className="font-black text-sm text-slate-800 dark:text-slate-200 mb-2">Step Response Analysis</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Graphing the system&apos;s response to a Setpoint to analyze and improve performance metrics such as Rise time, Settling time, Overshoot, and Steady-state error.
                    </p>
                  </div>

                  <div className="p-5 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm">
                    <h5 className="font-black text-sm text-slate-800 dark:text-slate-200 mb-2">Parameter Tuning (Kp, Ki, Kd)</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Testing and tuning Proportional, Integral, and Derivative values to find the best balance for the specific system&apos;s operation.
                    </p>
                  </div>

                  <div className="p-5 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm">
                    <h5 className="font-black text-sm text-slate-800 dark:text-slate-200 mb-2">Root Locus Analysis</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Analyzing system stability and operating boundaries by checking the positions of Poles and Zeros.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION: System Workflow */}
              <section className="space-y-6">
                <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <Settings size={22} className="text-indigo-500" /> System Workflow (PID Flow)
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  The operation of the Feedback Control Loop in this project follows these steps:
                </p>

                <div className="bg-white dark:bg-slate-900 p-5 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mb-6">
                  <div className="relative w-full h-48 sm:h-80 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 mb-6">
                    <Image 
                      src="/projects/PID_Control_System_Designer/PID.png" 
                      alt="PID Flow Diagram" 
                      fill 
                      className="object-contain p-2"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 flex items-center justify-center font-black">1</div>
                      <div>
                        <h5 className="font-bold text-sm text-slate-900 dark:text-white">Setpoint</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Defining the desired angle or speed target for the motor to achieve.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 flex items-center justify-center font-black">2</div>
                      <div>
                        <h5 className="font-bold text-sm text-slate-900 dark:text-white">Error Calculation</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">The system subtracts the current position (Feedback) from the Setpoint to find the Error value.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 flex items-center justify-center font-black">3</div>
                      <div>
                        <h5 className="font-bold text-sm text-slate-900 dark:text-white">PID Controller</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Processes the Error through 3 mathematical components:</p>
                        <ul className="list-disc list-inside text-sm text-slate-500 space-y-1 ml-2">
                          <li><strong className="text-slate-700 dark:text-slate-300">Proportional (P):</strong> Responds to the current size of the Error.</li>
                          <li><strong className="text-slate-700 dark:text-slate-300">Integral (I):</strong> Eliminates past accumulated error (Steady-state error).</li>
                          <li><strong className="text-slate-700 dark:text-slate-300">Derivative (D):</strong> Predicts future error trends to dampen oscillations (Overshoot).</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 flex items-center justify-center font-black">4</div>
                      <div>
                        <h5 className="font-bold text-sm text-slate-900 dark:text-white">Control Signal</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">The calculated signal from the PID is sent as PWM (Pulse Width Modulation) to the Motor Drive.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 flex items-center justify-center font-black">5</div>
                      <div>
                        <h5 className="font-bold text-sm text-slate-900 dark:text-white">Plant & Feedback</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">The motor (Plant) rotates to the new position, and the Potentiometer (Sensor) reads the angle and sends it back to recalculate the Error until the system is stable.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION: Hardware Components */}
              <section className="space-y-6">
                <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <Cpu size={22} className="text-slate-600 dark:text-slate-300" /> Hardware Components
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  <strong className="text-slate-900 dark:text-white">Motor Control Experimental Kit (Plant Model):</strong> Real hardware built for students to compare Simulation results with actual physical behavior. It consists of:
                </p>

                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
                    <ImageSlider images={[
                      "/projects/PID_Control_System_Designer/p1.jpg",
                      "/projects/PID_Control_System_Designer/p2.jpg"
                    ]} />
                  </div>
                  <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Microcontroller</p>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Arduino Board</p>
                      <p className="text-xs text-slate-500 mt-1">Main controller for data transmission and command processing.</p>
                    </div>
                    <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Actuator Driver</p>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Motor Drive</p>
                      <p className="text-xs text-slate-500 mt-1">Receives PWM from Arduino to control motor speed and direction.</p>
                    </div>
                    <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">The Plant</p>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">DC Motor</p>
                      <p className="text-xs text-slate-500 mt-1">The physical system whose position/speed we want to control.</p>
                    </div>
                    <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Feedback Sensor</p>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Potentiometer</p>
                      <p className="text-xs text-slate-500 mt-1">Reads the motor&apos;s angle/position and feeds it back into the system.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION: Lessons Learned */}
              <section className="space-y-6">
                <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <Lightbulb size={22} className="text-amber-500" /> Lessons Learned
                </h3>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                  <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex gap-3">
                      <span className="text-amber-500 mt-1 flex-shrink-0"><CheckCircle2 size={16} /></span> 
                      <span><strong className="text-slate-900 dark:text-white">System Dynamics:</strong> Understood system response and the impact of tuning P (sensitivity), I (eliminating steady-state error), and D (damping oscillations) on overall stability.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-amber-500 mt-1 flex-shrink-0"><CheckCircle2 size={16} /></span> 
                      <span><strong className="text-slate-900 dark:text-white">Simulation-First Approach:</strong> Realized the critical importance of mathematical simulation before building real hardware. This saves time, reduces costs, and prevents potential damage to equipment.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-amber-500 mt-1 flex-shrink-0"><CheckCircle2 size={16} /></span> 
                      <span><strong className="text-slate-900 dark:text-white">Tool Mastery:</strong> Developed proficiency in industry-standard engineering software like MATLAB and Simulink for Root Locus analysis and practical control theory applications.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION: Video & Gallery */}
              <section className="space-y-6">
                <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <Video size={22} className="text-purple-500" /> Demonstration & Gallery
                </h3>
                
                <div className="bg-black rounded-xl overflow-hidden shadow-lg border border-slate-800">
                  <video controls src="/projects/PID_Control_System_Designer/PID.mp4" className="w-full aspect-video object-contain">
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                  {[
                    "p2.jpg", "p3.jpg", "p4.png"
                  ].map((img, i) => (
                    <div key={i} className="relative h-32 sm:h-40 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 group shadow-sm">
                      <div className="relative w-full h-full">
                        <Image
                          src={`/projects/PID_Control_System_Designer/${img}`}
                          alt={`Gallery ${i+1}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                  ))}                </div>
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
