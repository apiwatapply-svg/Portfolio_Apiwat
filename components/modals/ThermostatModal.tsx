"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpen, Cpu, CheckCircle2, Target, Activity, Settings, Lightbulb, User, Stethoscope, Droplets, Snowflake, Repeat } from "lucide-react";

// ---------------------------------------------------------
// Main Modal Component
// ---------------------------------------------------------
export default function ThermostatModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "unset"; };
  }, []);

  // 3D Animation Variants for Workflow Steps
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const card3DVariants = {
    hidden: { opacity: 0, rotateX: 60, y: 50 },
    show: { 
      opacity: 1, 
      rotateX: 0, 
      y: 0,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
  };

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
                Thermostat for Brain Injury Patients
              </h2>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 font-bold uppercase text-[10px] tracking-wider">
                  Medical Device
                </span>
                <span>Jun 2018 - Aug 2018</span>
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
          <div className="overflow-y-auto flex-1 custom-scrollbar pb-10 perspective-1000">
            {/* Cover Image */}
            <div className="relative h-64 sm:h-[400px] w-full bg-slate-100 dark:bg-slate-800">
              <Image
                src="/projects/Thermostat_for_Brain_Injury_Patients/cover.jpg"
                alt="Thermostat for Brain Injury Patients Cover"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6 sm:p-8">
                <h1 className="text-white text-xl sm:text-3xl font-black drop-shadow-lg leading-tight max-w-3xl">
                  Temperature Control Device for Stroke & Brain Injury Patients
                </h1>
              </div>
            </div>

            <div className="p-4 sm:p-8 space-y-10 sm:space-y-12">
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {["Embedded Systems", "Sensors", "Medical Device", "Hardware Design", "PID Control", "Peltier"].map((tag) => (
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
                  <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 shadow-sm flex flex-col">
                    <p className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-2"><Target size={14}/> Goal</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      Collaborated with the <strong className="font-bold">Faculty of Nursing, Khon Kaen University</strong> to develop a medical temperature control device. The primary objective is to accurately regulate and reduce the body temperature of brain injury and stroke patients suffering from high fever.
                    </p>
                  </div>
                  
                  <div className="p-5 rounded-xl bg-rose-50 dark:bg-rose-900/10 border-l-4 border-rose-500 shadow-sm flex flex-col">
                    <p className="text-xs font-black text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-2"><User size={14}/> Target Audience</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      Specifically designed for <strong className="font-bold">bedridden stroke patients</strong> who are unable to assist themselves. These patients require strict, continuous, and highly accurate brain temperature monitoring and control to prevent further neurological damage.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION: 3D System Workflow */}
              <section className="space-y-6">
                <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <Settings size={22} className="text-indigo-500" /> System Workflow
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                  The system integrates continuous cooling with precise sensor feedback. Here is the operational loop:
                </p>

                {/* 3D Animated Flow Container */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  style={{ perspective: 1200 }}
                >
                  
                  {/* Step 1 */}
                  <motion.div 
                    variants={card3DVariants}
                    className="relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl flex flex-col items-center text-center transform-gpu"
                    style={{ transformStyle: "preserve-3d" }}
                    whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  >
                    <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center text-blue-500 dark:text-blue-400 mb-4 shadow-inner" style={{ transform: "translateZ(30px)" }}>
                      <Stethoscope size={28} />
                    </div>
                    <h4 className="font-black text-slate-800 dark:text-slate-200 mb-2" style={{ transform: "translateZ(20px)" }}>1. Cooling Helmet</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400" style={{ transform: "translateZ(10px)" }}>
                      The patient wears a specialized helmet embedded with small water tubes routing around the head to transfer cold efficiently.
                    </p>
                  </motion.div>

                  {/* Step 2 */}
                  <motion.div 
                    variants={card3DVariants}
                    className="relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl flex flex-col items-center text-center transform-gpu"
                    style={{ transformStyle: "preserve-3d" }}
                    whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  >
                    <div className="w-14 h-14 bg-cyan-100 dark:bg-cyan-900/40 rounded-full flex items-center justify-center text-cyan-500 dark:text-cyan-400 mb-4 shadow-inner" style={{ transform: "translateZ(30px)" }}>
                      <Snowflake size={28} />
                    </div>
                    <h4 className="font-black text-slate-800 dark:text-slate-200 mb-2" style={{ transform: "translateZ(20px)" }}>2. Cooling Process</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400" style={{ transform: "translateZ(10px)" }}>
                      Water is pumped through a <strong className="font-semibold">Peltier Thermoelectric Cooler</strong>, strictly reducing the temperature to the set point.
                    </p>
                  </motion.div>

                  {/* Step 3 */}
                  <motion.div 
                    variants={card3DVariants}
                    className="relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl flex flex-col items-center text-center transform-gpu"
                    style={{ transformStyle: "preserve-3d" }}
                    whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  >
                    <div className="w-14 h-14 bg-teal-100 dark:bg-teal-900/40 rounded-full flex items-center justify-center text-teal-500 dark:text-teal-400 mb-4 shadow-inner" style={{ transform: "translateZ(30px)" }}>
                      <Repeat size={28} />
                    </div>
                    <h4 className="font-black text-slate-800 dark:text-slate-200 mb-2" style={{ transform: "translateZ(20px)" }}>3. Circulation</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400" style={{ transform: "translateZ(10px)" }}>
                      Cooled water continuously circulates into the helmet to absorb heat, then loops back to the Peltier to maintain constant cooling.
                    </p>
                  </motion.div>

                  {/* Step 4 */}
                  <motion.div 
                    variants={card3DVariants}
                    className="relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl flex flex-col items-center text-center transform-gpu"
                    style={{ transformStyle: "preserve-3d" }}
                    whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  >
                    <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center text-purple-500 dark:text-purple-400 mb-4 shadow-inner" style={{ transform: "translateZ(30px)" }}>
                      <Activity size={28} />
                    </div>
                    <h4 className="font-black text-slate-800 dark:text-slate-200 mb-2" style={{ transform: "translateZ(20px)" }}>4. PID Control</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400" style={{ transform: "translateZ(10px)" }}>
                      Temperature sensors feed data back to the Microcontroller. The PID algorithm adjusts the Peltier to prevent over-cooling.
                    </p>
                  </motion.div>

                </motion.div>
              </section>

              {/* SECTION: Hardware Components */}
              <section className="space-y-6">
                <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <Cpu size={22} className="text-slate-600 dark:text-slate-300" /> Hardware Components
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {/* Item 1 */}
                  <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm flex flex-col items-center text-center group">
                    <div className="relative w-20 h-20 mb-3 rounded-lg overflow-hidden border border-slate-100 dark:border-slate-800">
                      <Image src="/projects/Thermostat_for_Brain_Injury_Patients/peltier.jpg" alt="Peltier" fill className="object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <h5 className="font-bold text-xs text-slate-800 dark:text-slate-200">Peltier (TEC1-12706)</h5>
                    <p className="text-[10px] text-slate-500 mt-1">Thermoelectric Cooler</p>
                  </div>
                  {/* Item 2 */}
                  <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm flex flex-col items-center text-center group">
                    <div className="relative w-20 h-20 mb-3 rounded-lg overflow-hidden border border-slate-100 dark:border-slate-800">
                      <Image src="/projects/Thermostat_for_Brain_Injury_Patients/pump.jpg" alt="Water Pump" fill className="object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <h5 className="font-bold text-xs text-slate-800 dark:text-slate-200">Water Pump</h5>
                    <p className="text-[10px] text-slate-500 mt-1">Closed-loop circulation</p>
                  </div>
                  {/* Item 3 */}
                  <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm flex flex-col items-center text-center group">
                    <div className="relative w-20 h-20 mb-3 rounded-lg overflow-hidden border border-slate-100 dark:border-slate-800">
                      <Image src="/projects/Thermostat_for_Brain_Injury_Patients/ds18b20.jpg" alt="Sensor" fill className="object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <h5 className="font-bold text-xs text-slate-800 dark:text-slate-200">DS18B20 Sensor</h5>
                    <p className="text-[10px] text-slate-500 mt-1">High-accuracy temperature</p>
                  </div>
                  {/* Item 4 */}
                  <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm flex flex-col items-center text-center group">
                    <div className="relative w-20 h-20 mb-3 rounded-lg overflow-hidden border border-slate-100 dark:border-slate-800">
                      <Image src="/projects/Thermostat_for_Brain_Injury_Patients/arduino.jpg" alt="Arduino" fill className="object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <h5 className="font-bold text-xs text-slate-800 dark:text-slate-200">Microcontroller</h5>
                    <p className="text-[10px] text-slate-500 mt-1">PID Logic & Relay control</p>
                  </div>
                </div>

                {/* Additional Component Note */}
                <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900 shadow-sm mt-4">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-white">Cooling Helmet & Tubes:</strong> Custom-fitted headgear embedded with water circulation tubes, acting as the primary heat-exchange interface with the patient.
                  </p>
                </div>
              </section>

              {/* SECTION: Methodology & Results */}
              <section className="space-y-6">
                <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <CheckCircle2 size={22} className="text-emerald-500" /> Methodology & Impact
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Methodology */}
                  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">Project Execution</h4>
                    <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                      <li className="flex gap-2">
                        <span className="text-blue-500 mt-0.5">•</span> 
                        <span>Analyzed medical requirements deeply with nursing specialists to ensure clinical viability.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-500 mt-0.5">•</span> 
                        <span>Designed a robust closed-loop temperature control circuit and water circulation system.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-500 mt-0.5">•</span> 
                        <span>Conducted rigorous testing for accuracy and strict safety compliance for bedridden care.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="bg-emerald-50 dark:bg-emerald-900/10 p-5 rounded-xl border border-emerald-100 dark:border-emerald-900/30 shadow-sm">
                    <h4 className="font-bold text-emerald-800 dark:text-emerald-400 mb-4 border-b border-emerald-200 dark:border-emerald-800/50 pb-2">Results & Impact</h4>
                    <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                      <li className="flex gap-3">
                        <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-emerald-900 dark:text-emerald-300 block mb-1">High Precision Control</strong>
                          Successfully maintained the target temperature with an accuracy of <strong className="font-bold text-emerald-600 dark:text-emerald-400">±0.5°C</strong>, ensuring safe medical application.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-emerald-900 dark:text-emerald-300 block mb-1">Safety Integration</strong>
                          Integrated a reliable safety alarm system that immediately alerts staff if temperatures fall out of the configured bounds.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Hardware Prototype Image */}
              <section className="space-y-4">
                 <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-center p-4">
                  <Image 
                    src="/projects/Thermostat_for_Brain_Injury_Patients/Hardware.png" 
                    alt="Hardware Setup" 
                    fill 
                    className="object-contain p-4"
                  />
                </div>
                <p className="text-center text-xs text-slate-500">Hardware Prototype Setup</p>
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
