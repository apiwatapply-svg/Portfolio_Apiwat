"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardList, LayoutTemplate, Terminal, TestTube, Rocket, Activity } from 'lucide-react';

const workflowSteps = [
  {
    id: 1,
    title: "Requirement & Analysis",
    concept: "Define 'What' & 'Why'",
    docs: "PRD, SRS, User Stories",
    color: "bg-blue-500",
    textColor: "text-blue-500",
    borderColor: "border-blue-500",
    lightBg: "bg-blue-50 dark:bg-blue-500/10",
    shadow: "shadow-blue-500/20",
    icon: ClipboardList,
  },
  {
    id: 2,
    title: "System Architecture",
    concept: "Design the Blueprint",
    docs: "ER Diagram, API Spec, UI Mockup",
    color: "bg-purple-500",
    textColor: "text-purple-500",
    borderColor: "border-purple-500",
    lightBg: "bg-purple-50 dark:bg-purple-500/10",
    shadow: "shadow-purple-500/20",
    icon: LayoutTemplate,
  },
  {
    id: 3,
    title: "Development",
    concept: "Write Code & Build",
    docs: "Source Code, README, Tech Docs",
    color: "bg-orange-500",
    textColor: "text-orange-500",
    borderColor: "border-orange-500",
    lightBg: "bg-orange-50 dark:bg-orange-500/10",
    shadow: "shadow-orange-500/20",
    icon: Terminal,
  },
  {
    id: 4,
    title: "Testing",
    concept: "Find Bugs & Verify",
    docs: "Test Plan, Bug Report, UAT Sign-off",
    color: "bg-red-500",
    textColor: "text-red-500",
    borderColor: "border-red-500",
    lightBg: "bg-red-50 dark:bg-red-500/10",
    shadow: "shadow-red-500/20",
    icon: TestTube,
  },
  {
    id: 5,
    title: "Deployment",
    concept: "Go Live to Production",
    docs: "Release Notes, CI/CD",
    color: "bg-emerald-500",
    textColor: "text-emerald-500",
    borderColor: "border-emerald-500",
    lightBg: "bg-emerald-50 dark:bg-emerald-500/10",
    shadow: "shadow-emerald-500/20",
    icon: Rocket,
  },
  {
    id: 6,
    title: "Maintenance & Monitoring",
    concept: "Monitor & Hotfix",
    docs: "Incident Report, SLA",
    color: "bg-slate-500",
    textColor: "text-slate-500",
    borderColor: "border-slate-500",
    lightBg: "bg-slate-50 dark:bg-slate-500/10",
    shadow: "shadow-slate-500/20",
    icon: Activity,
  },
];

export default function WorkflowAnimation() {
  const [activeStep, setActiveStep] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % workflowSteps.length) + 1);
    }, 4000); // 4 seconds per step

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div 
      className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 md:p-10 relative overflow-visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-6 left-6 md:top-8 md:left-10 z-10 pointer-events-none">
        <h3 className="font-black text-slate-900 dark:text-white text-lg md:text-xl flex items-center gap-2 drop-shadow-sm">
          End-to-End Workflow
        </h3>
        <p className="text-xs md:text-sm text-slate-500 font-medium mt-1 bg-white/80 dark:bg-slate-800/80 px-3 py-1 rounded-full inline-block backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-sm">
          Auto-playing • Hover to pause • Click to explore
        </p>
      </div>

      <div className="mt-20 md:mt-28 flex flex-col md:flex-row items-start md:items-center justify-between relative max-w-6xl mx-auto min-h-[500px] md:min-h-[350px]">
        {/* Connecting Background Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-8 right-8 h-1 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0 rounded-full" />
        
        {/* Animated Progress Line (Desktop) */}
        <motion.div 
          className="hidden md:block absolute top-12 left-8 h-1 bg-blue-500 -translate-y-1/2 z-0 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${((activeStep - 1) / (workflowSteps.length - 1)) * 100}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Connecting Background Line (Mobile) */}
        <div className="md:hidden absolute top-8 bottom-8 left-12 w-1 bg-slate-200 dark:bg-slate-800 z-0 rounded-full" />

        {/* Animated Progress Line (Mobile) */}
        <motion.div 
          className="md:hidden absolute top-8 left-12 w-1 bg-blue-500 z-0 rounded-full"
          initial={{ height: "0%" }}
          animate={{ height: `${((activeStep - 1) / (workflowSteps.length - 1)) * 100}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        <div className="flex flex-col md:flex-row w-full justify-between gap-12 md:gap-0 z-10 relative">
          {workflowSteps.map((step) => {
            const isActive = activeStep === step.id;
            const isPast = activeStep > step.id;
            const Icon = step.icon;

            return (
              <div 
                key={step.id}
                className="flex flex-row md:flex-col items-center md:items-center gap-6 md:gap-8 group cursor-pointer relative w-full md:w-auto"
                onClick={() => setActiveStep(step.id)}
              >
                {/* Node Button */}
                <motion.div 
                  initial={false}
                  animate={{ 
                    scale: isActive ? 1.15 : 1,
                    y: isActive ? -8 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center border-[3px] transition-colors duration-300 shadow-lg z-10 relative bg-white dark:bg-slate-950 ${
                    isActive ? step.borderColor : isPast ? step.borderColor : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                  } ${isActive ? step.shadow : ''}`}
                >
                  <div className={`w-full h-full rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    isActive ? step.lightBg : isPast ? step.lightBg : 'bg-slate-50 dark:bg-slate-800/50 group-hover:bg-slate-100 dark:group-hover:bg-slate-800'
                  }`}>
                    <Icon className={`w-8 h-8 md:w-10 md:h-10 transition-colors duration-300 ${
                      isActive ? step.textColor : isPast ? step.textColor : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-500 dark:group-hover:text-slate-400'
                    }`} />
                  </div>
                  
                  {/* Step Number Badge */}
                  <motion.div 
                    initial={false}
                    animate={{ scale: isActive ? 1.1 : 1 }}
                    className={`absolute -top-3 -right-3 md:-top-4 md:-right-4 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold text-white shadow-md border-2 border-white dark:border-slate-900 transition-colors duration-300 ${
                      isActive || isPast ? step.color : "bg-slate-300 dark:bg-slate-600 text-slate-500 dark:text-slate-300"
                    }`}
                  >
                    {step.id}
                  </motion.div>
                </motion.div>

                {/* Info Card (Static on Mobile side, Popup on Desktop) */}
                
                {/* Desktop Popup */}
                <div className="hidden md:block absolute top-32 w-48 text-center pointer-events-none">
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className={`bg-white dark:bg-slate-900 border-2 p-4 rounded-xl shadow-2xl ${step.borderColor}`}
                      >
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1 leading-tight">{step.title}</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 font-semibold mb-3 leading-tight">{step.concept}</p>
                        
                        <div className="bg-slate-50 dark:bg-slate-800/80 p-2 rounded-lg border border-slate-100 dark:border-slate-700/50 text-left">
                          <span className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold block mb-1">Deliverables:</span>
                          <span className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-tight">{step.docs}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Inline Info */}
                <div className="md:hidden flex-1 pl-4">
                  <div className={`transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-40 grayscale'}`}>
                    <h4 className={`font-bold text-base mb-1 ${isActive ? step.textColor : 'text-slate-700 dark:text-slate-300'}`}>
                      {step.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-medium mb-2">{step.concept}</p>
                    
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className={`bg-white dark:bg-slate-900 border-l-4 p-3 rounded-r-lg shadow-sm ${step.borderColor}`}
                      >
                        <span className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold block mb-1">Deliverables:</span>
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{step.docs}</span>
                      </motion.div>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
