"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cpu, CheckCircle2, Target, Activity, Settings, AlertTriangle, Shield, Clock, Key, DoorOpen, Lock, Check } from "lucide-react";
import { type Project } from "@/lib/data";

type Props = {
  project: Project;
  onClose: () => void;
};

const keypadButtonTimings = Array.from({ length: 9 }, (_, i) => ({
  delay: (i % 3) * 0.12 + Math.floor(i / 3) * 0.08,
  repeatDelay: 0.35 + (i % 4) * 0.08,
}));

export default function PLCDoorModal({ onClose }: Props) {
  const [activeStep, setActiveStep] = useState(0);
  const [cycle, setCycle] = useState<'success' | 'fail'>('success');
  const [isAuto, setIsAuto] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    let interval: NodeJS.Timeout;
    
    if (isAuto) {
      interval = setInterval(() => {
        setActiveStep((prev) => {
          if (prev === 3) {
            setCycle(c => c === 'success' ? 'fail' : 'success');
            return 0;
          }
          return prev + 1;
        });
      }, 2500);
    }
    
    return () => {
      document.body.style.overflow = "unset";
      if (interval) clearInterval(interval);
    };
  }, [isAuto]);

  const steps = [
    { icon: Key, title: "1. Keyboard Input", desc: "Enter 4-digit code", status: 'default' as const },
    { icon: Cpu, title: "2. PLC Logic", desc: "PLC Processing", status: 'default' as const },
    cycle === 'success'
      ? { icon: Activity, title: "3. Pneumatic", desc: "Valve Actuating", status: 'success' as const }
      : { icon: AlertTriangle, title: "3. Invalid Code", desc: "Error Alert", status: 'error' as const },
    cycle === 'success'
      ? { icon: DoorOpen, title: "4. Door Opens", desc: "Access Granted", status: 'success' as const }
      : { icon: Lock, title: "4. System Lock", desc: "Auto-lock / Alarm", status: 'error' as const }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6 sm:pt-[80px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
        />

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
                Warehouse Door System (PLC)
              </h2>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 font-bold uppercase text-[10px] tracking-wider">
                  Industrial Automation
                </span>
                <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 font-bold uppercase text-[10px] tracking-wider">
                  Summer Internship Project
                </span>
                <span>Mar 2018 - May 2018</span>
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

          <div className="overflow-y-auto flex-1 custom-scrollbar pb-10 perspective-1000">
            {/* Cover Image */}
            <div className="relative h-64 sm:h-[400px] w-full bg-slate-100 dark:bg-slate-800">
              <Image 
                src="/projects/Warehouse_Door_System_(PLC)/cover.png" 
                alt="PLC Door System" 
                fill 
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6 sm:p-8">
                <h1 className="text-white text-xl sm:text-3xl font-black drop-shadow-lg leading-tight max-w-3xl">
                  Automated Security Door Control System using Mitsubishi PLC
                </h1>
              </div>
            </div>

            <div className="p-4 sm:p-8 space-y-10 sm:space-y-12">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {["Mitsubishi PLC", "Pneumatic System", "Ladder Logic", "Industrial Automation"].map(tag => (
                  <span key={tag} className="text-xs font-bold px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
              {/* System Workflow Section */}
              <section>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <Activity size={20} className="text-orange-500" /> System Workflow
                  </h3>
                  
                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    {/* Manual Toggle */}
                    <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                      <button 
                        onClick={() => { setCycle('success'); setIsAuto(false); setActiveStep(0); }}
                        className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-md transition-colors ${cycle === 'success' ? 'bg-emerald-500 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                      >
                        Valid Code
                      </button>
                      <button 
                        onClick={() => { setCycle('fail'); setIsAuto(false); setActiveStep(0); }}
                        className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-md transition-colors ${cycle === 'fail' ? 'bg-red-500 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                      >
                        Invalid Code
                      </button>
                    </div>

                    {/* Progress Dots */}
                    <div className="flex gap-1 hidden sm:flex">
                      {steps.map((_, i) => (
                        <div key={i} className={`w-4 h-1 rounded-full transition-colors duration-500 ${
                          i === activeStep 
                            ? (cycle === 'success' && i >= 2 ? 'bg-emerald-500' : cycle === 'fail' && i >= 2 ? 'bg-red-500' : 'bg-orange-500') 
                            : "bg-slate-200 dark:bg-slate-800"
                        }`} />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6" style={{ perspective: "1000px" }}>
                  {/* Step 1: Keyboard Input Cartoon */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20, rotateX: -20 }}
                    animate={{ opacity: activeStep === 0 ? 1 : 0.4, y: 0, rotateX: 0, scale: activeStep === 0 ? 1.05 : 1, z: activeStep === 0 ? 20 : 0 }}
                    className={`relative p-4 rounded-xl border-2 transition-all duration-500 shadow-lg flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 ${activeStep === 0 ? (cycle === 'success' ? 'border-orange-500 shadow-orange-500/20 bg-white dark:bg-slate-800' : 'border-red-500 shadow-red-500/20 bg-white dark:bg-slate-800') : 'border-slate-200 dark:border-slate-800'}`}
                  >
                    <motion.div animate={{ scale: activeStep === 0 ? [1, 1.05, 1] : 1 }} transition={{ duration: 1.5, repeat: Infinity }} className="relative w-20 h-24 mb-3 bg-white dark:bg-slate-800 rounded-xl shadow border-b-4 border-slate-200 dark:border-slate-700 flex flex-col p-2 items-center justify-center">
                      <div className="w-14 h-4 mb-2 rounded bg-slate-900 flex items-center justify-center overflow-hidden border border-slate-600">
                        <motion.div 
                          className="flex gap-1"
                          animate={activeStep === 0 ? { opacity: [0, 1, 1, 1, 0] } : { opacity: 0 }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                          <div className={`w-1.5 h-1.5 rounded-full ${cycle === 'success' ? 'bg-slate-300' : 'bg-red-500 shadow-[0_0_5px_#ef4444]'}`} />
                        </motion.div>
                      </div>
                      <div className="flex flex-wrap gap-1 justify-center w-16">
                      {keypadButtonTimings.map((timing, i) => (
                        <motion.div key={i} animate={activeStep === 0 ? { y: [0, 2, 0], backgroundColor: ["#f8fafc", "#e2e8f0", "#f8fafc"] } : {}} transition={{ duration: 0.3, repeat: Infinity, delay: timing.delay, repeatDelay: timing.repeatDelay }} className="w-4 h-4 bg-slate-100 dark:bg-slate-700 rounded border-b border-slate-300 dark:border-slate-600" />
                      ))}
                      </div>
                    </motion.div>
                    <h4 className={`text-sm font-bold mb-1 ${activeStep === 0 ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>1. Keyboard Input</h4>
                    <p className="text-[10px] text-slate-500 text-center">Enter 4-digit code</p>
                    {activeStep === 0 && <motion.div layoutId="glow" className={`absolute inset-0 rounded-xl -z-10 blur-xl ${cycle === 'success' ? 'bg-orange-500/10' : 'bg-red-500/10'}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} />}
                  </motion.div>

                  {/* Step 2: PLC Logic Cartoon */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20, rotateX: -20 }}
                    animate={{ opacity: activeStep === 1 ? 1 : 0.4, y: 0, rotateX: 0, scale: activeStep === 1 ? 1.05 : 1, z: activeStep === 1 ? 20 : 0 }}
                    className={`relative p-4 rounded-xl border-2 transition-all duration-500 shadow-lg flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 ${activeStep === 1 ? (cycle === 'success' ? 'border-orange-500 shadow-orange-500/20 bg-white dark:bg-slate-800' : 'border-red-500 shadow-red-500/20 bg-white dark:bg-slate-800') : 'border-slate-200 dark:border-slate-800'}`}
                  >
                    <motion.div className="relative w-16 h-24 mb-3 bg-slate-800 dark:bg-slate-950 rounded-lg shadow-xl border-2 border-slate-700 p-2 flex flex-col">
                      <div className="flex gap-1 mb-2 justify-center">
                        <motion.div animate={activeStep === 1 && cycle === 'fail' ? { opacity: [0.3, 1, 0.3], boxShadow: ["0 0 0px #ef4444", "0 0 8px #ef4444", "0 0 0px #ef4444"] } : { opacity: 0.3 }} transition={{ duration: 0.5, repeat: Infinity }} className="w-2 h-2 rounded-full bg-red-500" />
                        <motion.div animate={activeStep === 1 ? { opacity: [0.3, 1, 0.3] } : { opacity: 0.3 }} transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }} className="w-2 h-2 rounded-full bg-yellow-500" />
                        <motion.div animate={activeStep === 1 && cycle === 'success' ? { opacity: [0.3, 1, 0.3], boxShadow: ["0 0 0px #10b981", "0 0 8px #10b981", "0 0 0px #10b981"] } : { opacity: 0.3 }} transition={{ duration: 0.5, repeat: Infinity, delay: 0.4 }} className="w-2 h-2 rounded-full bg-emerald-500" />
                      </div>
                      <div className="flex-1 bg-slate-900 rounded border border-slate-600 overflow-hidden relative">
                        {activeStep === 1 && <motion.div animate={{ top: ["-10%", "110%"] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className={`absolute left-0 right-0 h-1 ${cycle === 'success' ? 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]' : 'bg-red-500 shadow-[0_0_8px_#ef4444]'}`} />}
                      </div>
                      <div className="mt-2 flex justify-between gap-1">
                        {[...Array(3)].map((_, i) => <div key={i} className="w-2 h-2 bg-slate-500 rounded-sm" />)}
                      </div>
                    </motion.div>
                    <h4 className={`text-sm font-bold mb-1 ${activeStep === 1 ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>2. PLC Logic</h4>
                    <p className="text-[10px] text-slate-500 text-center">Processing...</p>
                  </motion.div>

                  {/* Step 3: Pneumatic Cartoon */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20, rotateX: -20 }}
                    animate={{ opacity: activeStep === 2 ? 1 : 0.4, y: 0, rotateX: 0, scale: activeStep === 2 ? 1.05 : 1, z: activeStep === 2 ? 20 : 0 }}
                    className={`relative p-4 rounded-xl border-2 transition-all duration-500 shadow-lg flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 ${activeStep === 2 ? (cycle === 'success' ? 'border-emerald-500 shadow-emerald-500/20 bg-white dark:bg-slate-800' : 'border-red-500 shadow-red-500/20 bg-white dark:bg-slate-800') : 'border-slate-200 dark:border-slate-800'}`}
                  >
                    <div className="relative w-24 h-16 mb-4 flex items-center justify-center mt-3">
                      <div className={`w-14 h-8 rounded-md shadow-inner border-2 z-10 relative flex items-center ${activeStep === 2 && cycle === 'fail' ? 'bg-red-500 border-red-700' : 'bg-blue-500 border-blue-700'}`}>
                        <div className="absolute -left-2 w-2 h-5 bg-slate-400 rounded-l border-y border-l border-slate-500" />
                      </div>
                      <motion.div animate={activeStep === 2 && cycle === 'success' ? { x: [0, 30, 0] } : { x: 0 }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="h-3 bg-slate-200 border-y border-r border-slate-400 w-12 -ml-2 z-0 rounded-r flex justify-end items-center" />
                      {activeStep === 2 && cycle === 'success' && (
                        <motion.div animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.5, 0.5] }} transition={{ duration: 0.8, repeat: Infinity }} className="absolute top-0 right-4 w-2 h-2 bg-white rounded-full blur-[1px]" />
                      )}
                      {activeStep === 2 && cycle === 'fail' && (
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5, repeat: Infinity }} className="absolute -top-4 -right-2">
                          <AlertTriangle size={24} className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                        </motion.div>
                      )}
                    </div>
                    <h4 className={`text-sm font-bold mb-1 ${activeStep === 2 ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>3. {cycle === 'success' ? 'Pneumatic' : 'Invalid Code'}</h4>
                    <p className="text-[10px] text-slate-500 text-center">{cycle === 'success' ? 'Valve Actuating' : 'Error Alert'}</p>
                  </motion.div>

                  {/* Step 4: Door Cartoon */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20, rotateX: -20 }}
                    animate={{ opacity: activeStep === 3 ? 1 : 0.4, y: 0, rotateX: 0, scale: activeStep === 3 ? 1.05 : 1, z: activeStep === 3 ? 20 : 0 }}
                    className={`relative p-4 rounded-xl border-2 transition-all duration-500 shadow-lg flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 ${activeStep === 3 ? (cycle === 'success' ? 'border-emerald-500 shadow-emerald-500/20 bg-white dark:bg-slate-800' : 'border-red-500 shadow-red-500/20 bg-white dark:bg-slate-800') : 'border-slate-200 dark:border-slate-800'}`}
                  >
                    <div className="relative w-20 h-24 mb-3 border-4 border-slate-700 bg-slate-900 rounded-t-lg flex items-end justify-center overflow-hidden">
                      <motion.div 
                        animate={activeStep === 3 && cycle === 'success' ? { height: ["100%", "10%", "100%"] } : { height: "100%" }} 
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
                        className="w-full bg-slate-400 border-b-4 border-slate-500 origin-top flex flex-col"
                      >
                         <div className="w-full h-2 bg-slate-300 border-b border-slate-400 opacity-50" />
                         <div className="w-full h-2 mt-2 bg-slate-300 border-b border-slate-400 opacity-50" />
                      </motion.div>
                      {activeStep === 3 && cycle === 'fail' && (
                        <motion.div animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.1, 1] }} transition={{ duration: 0.8, repeat: Infinity }} className="absolute inset-0 bg-red-500/30 flex items-center justify-center">
                          <Lock size={32} className="text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                        </motion.div>
                      )}
                    </div>
                    <h4 className={`text-sm font-bold mb-1 ${activeStep === 3 ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>4. {cycle === 'success' ? 'Door Opens' : 'System Lock'}</h4>
                    <p className="text-[10px] text-slate-500 text-center">{cycle === 'success' ? 'Access Granted' : 'Auto-lock / Alarm'}</p>
                  </motion.div>
                </div>
              </section>

              {/* Text Content Sections */}
              <div className="grid sm:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="space-y-8">
                  <section className="space-y-4">
                    <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                      <Target size={20} className="text-blue-500" /> Overview & Objective
                    </h3>
                    <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 space-y-4">
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Developed an automated warehouse door control system utilizing a <strong>Mitsubishi PLC</strong> and pneumatics, secured by a 4-digit password.
                      </p>
                      
                      <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-3">
                        <div className="flex gap-3 items-start">
                          <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500 mt-0.5">
                            <Check size={14} />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900 dark:text-white mb-1">Goal</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Design a highly secure, fast-response automated access control system.</p>
                          </div>
                        </div>

                        <div className="flex gap-3 items-start">
                          <div className="p-1.5 rounded-lg bg-red-500/10 text-red-500 mt-0.5">
                            <AlertTriangle size={14} />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900 dark:text-white mb-1">Pain Point</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Previous doors lacked security, risking unauthorized entry, material loss, and safety hazards.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                      <Settings size={20} className="text-slate-500" /> Key Features
                    </h3>
                    <div className="grid gap-3">
                      {[
                        { icon: Shield, title: "Security", desc: "Supports 4 distinct password sets (4 digits each)" },
                        { icon: Clock, title: "Timeout", desc: "10-second automatic reset if idle" },
                        { icon: Lock, title: "Auto-Lock", desc: "Lockout after 3 consecutive failed attempts" },
                        { icon: Activity, title: "Alerts", desc: "Visual/Audible alarm system on failure" }
                      ].map((f, i) => (
                        <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                          <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500">
                            <f.icon size={16} />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900 dark:text-white">{f.title}</p>
                            <p className="text-[10px] text-slate-500">{f.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  <section className="space-y-4">
                    <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                      <Cpu size={20} className="text-purple-500" /> Methodology
                    </h3>
                    <div className="p-6 rounded-2xl bg-purple-500/[0.03] border border-purple-500/10 space-y-4">
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Served as the Lead Engineer to design the entire <strong>Ladder Logic</strong> on a <strong>Mitsubishi PLC</strong>, integrating Security, Timeout, Auto-lock, and Alert systems with real pneumatic hardware.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Ladder Logic", "Mitsubishi GX Works", "Pneumatics", "Safety Circuits"].map(s => (
                          <span key={s} className="px-2 py-1 rounded-md bg-purple-500/10 text-purple-600 text-[10px] font-bold">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-orange-500" /> Results
                    </h3>
                    <div className="p-5 rounded-2xl bg-orange-500/5 border border-orange-500/10 space-y-3">
                      <ul className="space-y-2">
                        {[
                          "System fully met all operational requirements",
                          "Successfully tested and deployed at NHK Spring facility",
                          "Reduced unauthorized access risk by 100%"
                        ].map((res, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check size={16} className="text-orange-500 shrink-0 mt-0.5" />
                            <span className="text-xs text-slate-600 dark:text-slate-400">{res}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex gap-4">
                        <div className="flex-1 p-3 rounded-xl bg-white dark:bg-slate-800 text-center border border-slate-100 dark:border-slate-700">
                          <p className="text-xl font-black text-blue-500">&lt;1s</p>
                          <p className="text-[10px] font-bold text-slate-500 uppercase">Response Time</p>
                        </div>
                         <div className="flex-1 p-3 rounded-xl bg-white dark:bg-slate-800 text-center border border-slate-100 dark:border-slate-700">
                          <p className="text-xl font-black text-emerald-500">100%</p>
                          <p className="text-[10px] font-bold text-slate-500 uppercase">Security Goal</p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              {/* Hardware Gallery */}
              <section>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <Settings size={20} className="text-slate-500" /> System Hardware
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Keyboard Input */}
                  <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <div className="absolute inset-0 p-4">
                      <div className="relative w-full h-full">
                        <Image 
                          src="/projects/Warehouse_Door_System_(PLC)/Keypad.png" 
                          alt="Keyboard Input" 
                          fill 
                          sizes="(max-width: 640px) 100vw, 33vw" 
                          className="object-contain transition-transform group-hover:scale-105" 
                        />
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4 text-center">
                      <h4 className="text-sm font-bold text-white">Keyboard Input</h4>
                      <p className="text-[10px] text-slate-300 mt-0.5">4-Digit Entry Module</p>
                    </div>
                  </div>

                  {/* PLC */}
                  <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <div className="absolute inset-0 p-4">
                      <div className="relative w-full h-full">
                        <Image 
                          src="/projects/Warehouse_Door_System_(PLC)/PLC.png" 
                          alt="Mitsubishi PLC" 
                          fill 
                          sizes="(max-width: 640px) 100vw, 33vw" 
                          className="object-contain transition-transform group-hover:scale-105" 
                        />
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4 text-center">
                      <h4 className="text-sm font-bold text-white">Mitsubishi PLC</h4>
                      <p className="text-[10px] text-slate-300 mt-0.5">Logic Controller</p>
                    </div>
                  </div>

                  {/* Pneumatic Actuator */}
                  <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <div className="absolute inset-0 p-4">
                      <div className="relative w-full h-full">
                        <Image 
                          src="/projects/Warehouse_Door_System_(PLC)/Pneumatic.png" 
                          alt="Pneumatic Actuator" 
                          fill 
                          sizes="(max-width: 640px) 100vw, 33vw" 
                          className="object-contain transition-transform group-hover:scale-105" 
                        />
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4 text-center">
                      <h4 className="text-sm font-bold text-white">Pneumatic Actuator</h4>
                      <p className="text-[10px] text-slate-300 mt-0.5">Air Cylinder & Solenoid</p>
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

