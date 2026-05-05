"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, BookOpen, Layers, CheckCircle2, Cpu, Crosshair, Target, Activity, Move3D, Eye, User, Lightbulb } from "lucide-react";
import { type Project } from "@/lib/data";

type Props = {
  project: Project;
  onClose: () => void;
};

export default function PingPongRobotModal({ project, onClose }: Props) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const d = project.details;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:p-6 pt-[80px]">
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
          className="relative w-full max-w-5xl h-[calc(100vh-100px)] bg-white dark:bg-slate-950 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Fixed Header */}
          <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 z-30 relative shadow-sm">
            <div className="flex flex-col gap-1 pr-4">
              <h2 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white line-clamp-1">
                {project.title}
              </h2>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1"><Calendar size={14} /> {project.duration}</span>
                <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 font-bold uppercase text-[10px] tracking-wider">
                  Control Systems & Robotics
                </span>
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
          <div className="overflow-y-auto flex-1 custom-scrollbar bg-slate-50 dark:bg-slate-900/20">
            {/* Custom Dual-Image Header */}
            <div className="relative h-64 sm:h-80 w-full bg-slate-900 flex">
              <div className="relative w-1/2 h-full">
                <Image
                  src="/projects/ping-pong-robot/p003_img01.jpeg"
                  alt="Ping Pong Robot Setup 1"
                  fill
                  className="object-cover opacity-70"
                  sizes="(max-width: 1024px) 50vw, 512px"
                />
              </div>
              <div className="relative w-1/2 h-full border-l-4 border-slate-900">
                <Image
                  src="/projects/ping-pong-robot/p003_img02.jpeg"
                  alt="Ping Pong Robot Setup 2"
                  fill
                  className="object-cover opacity-70"
                  sizes="(max-width: 1024px) 50vw, 512px"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <h1 className="text-3xl sm:text-5xl font-black text-white drop-shadow-lg leading-tight max-w-3xl mb-2">
                  Automated Ping Pong Robot Arm
                </h1>
                <p className="text-slate-200 text-sm sm:text-base font-medium max-w-2xl drop-shadow-md">
                  Real-time Computer Vision and precise PID Position Control utilizing NI myRIO.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-8">
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-bold px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/50">
                    {tag}
                  </span>
                ))}
              </div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
                
                {/* Project Overview */}
                <section className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800">
                    <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <BookOpen size={20} className="text-blue-500" /> Background
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {d?.context}
                    </p>
                    <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500">
                      <p className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-1">The Challenge</p>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{d?.painPoint}</p>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800">
                    <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Target size={20} className="text-emerald-500" /> Objective & Role
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {d?.objective}
                    </p>
                    <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/10 border-l-4 border-purple-500">
                      <p className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-1 flex items-center gap-2"><User size={14}/> My Role</p>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{d?.yourRole}</p>
                    </div>
                  </div>
                </section>

                {/* Core Focus: Position Control */}
                <section>
                  <div className="mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                      <Crosshair size={28} className="text-purple-600" /> 
                      Focus: PID Position Control
                    </h3>
                    <p className="text-slate-500 mt-2 text-sm">
                      To enable the robot to return the ping pong ball in time, precise Position Control of all 4 motor axes is the core of this project.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-6">
                      <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                          <Cpu size={18} className="text-blue-500" /> Inverse Kinematics
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          Once the Computer Vision system calculates the target X, Y, Z coordinates of the ball's landing point, these coordinates are converted into Joint Angles for each axis via Inverse Kinematics equations.
                        </p>
                      </div>

                      <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                          <Activity size={18} className="text-orange-500" /> Closed-loop PID Control
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          Each DC motor is equipped with an Encoder to continuously send feedback signals to the NI myRIO. The system uses a PID Controller (Proportional-Integral-Derivative) to calculate the error and adjust the power (PWM), driving the motor axes to their target positions (Set-points) as quickly and accurately as possible without excessive overshoot.
                        </p>
                      </div>

                      <div className="p-5 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-200 dark:border-emerald-800/50">
                        <h4 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">Position Control Response Time</h4>
                        <p className="text-sm text-emerald-700 dark:text-emerald-400 leading-relaxed">
                          After tuning the Kp, Ki, and Kd values, the robot achieved a total system Time Delay of just 0.35 seconds, allowing it to move and intercept the ping pong ball in a timely manner.
                        </p>
                      </div>
                    </div>

                    {/* Position Control Graph Image */}
                    <div className="flex flex-col gap-3">
                      <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md bg-white">
                        <Image 
                          src="/projects/ping-pong-robot/p007_img01.jpeg" 
                          alt="PID Position Control Graph Results" 
                          fill 
                          className="object-contain p-2 hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <p className="text-xs text-center text-slate-500 font-medium">
                        Experimental results graph of the Position Control Response.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Computer Vision & Prediction */}
                <section>
                  <div className="mb-6 border-b border-slate-200 dark:border-slate-800 pb-4 mt-8">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                      <Eye size={28} className="text-blue-600" /> 
                      Computer Vision & Trajectory Prediction
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Prediction Graph Image */}
                    <div className="flex flex-col gap-3 order-2 md:order-1">
                      <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md bg-white">
                        <Image 
                          src="/projects/ping-pong-robot/p012_img02.png" 
                          alt="Trajectory Prediction Results" 
                          fill 
                          className="object-contain p-2 hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <p className="text-xs text-center text-slate-500 font-medium">
                        Linear Prediction results for the ping pong ball's trajectory.
                      </p>
                    </div>

                    <div className="space-y-6 order-1 md:order-2">
                      <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                          <Eye size={18} className="text-blue-500" /> Color Blob Tracking
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          LabVIEW processes images from a USB camera in real-time at 30 FPS, utilizing Color Thresholding techniques to detect the ping pong ball's color and extract its (X, Y) coordinates.
                        </p>
                      </div>

                      <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                          <Move3D size={18} className="text-purple-500" /> Linear Trajectory Prediction
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          Since the system uses a single camera (2D), a Prediction Algorithm was developed based on the X,Y coordinates of the ping pong ball from 2 consecutive frames. This creates a linear equation to calculate the intersection point on the Z-plane where the paddle will strike.
                        </p>
                        <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-xs text-slate-600 dark:text-slate-400 font-mono">
                          Prediction Error: ~3.82 - 5.3 cm
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* System Architecture Flow */}
                <section className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white mt-12">
                  <h3 className="text-xl font-black mb-6 flex items-center gap-2 text-white">
                    <Layers size={22} className="text-blue-400" /> System Architecture
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                      <h4 className="font-bold text-blue-300 mb-2">1. Vision (PC)</h4>
                      <p className="text-xs text-slate-300 leading-relaxed mb-3">USB Camera captures 30FPS frames. LabVIEW processes Color Thresholds to find X,Y.</p>
                      <div className="text-[10px] font-mono text-slate-400 px-2 py-1 bg-slate-900 rounded">Output: [X, Y]</div>
                    </div>
                    <div className="flex sm:hidden justify-center text-slate-600">↓</div>
                    <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 relative">
                      <div className="hidden sm:block absolute -left-4 top-1/2 -translate-y-1/2 text-slate-600">→</div>
                      <h4 className="font-bold text-purple-300 mb-2">2. Processing (PC)</h4>
                      <p className="text-xs text-slate-300 leading-relaxed mb-3">Linear Prediction calculates future Z point. Inverse Kinematics converts X,Y,Z to Joint Angles.</p>
                      <div className="text-[10px] font-mono text-slate-400 px-2 py-1 bg-slate-900 rounded">Output: [θ1, θ2, θ3, θ4] via TCP/IP</div>
                    </div>
                    <div className="flex sm:hidden justify-center text-slate-600">↓</div>
                    <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 relative">
                      <div className="hidden sm:block absolute -left-4 top-1/2 -translate-y-1/2 text-slate-600">→</div>
                      <h4 className="font-bold text-orange-300 mb-2">3. Control (NI myRIO)</h4>
                      <p className="text-xs text-slate-300 leading-relaxed mb-3">Receives target angles. Executes high-speed PID loops using encoder feedback to drive DC motors.</p>
                      <div className="text-[10px] font-mono text-slate-400 px-2 py-1 bg-slate-900 rounded">Output: PWM (Motor Drive)</div>
                    </div>
                  </div>
                </section>

                {/* Lessons & Metrics */}
                <section className="grid sm:grid-cols-2 gap-6 mt-8">
                  <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-emerald-500" /> Key Metrics
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {d?.metrics?.map((m, i) => (
                        <div key={i} className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg text-center">
                          <div className="text-2xl font-black text-slate-900 dark:text-white">{m.value}</div>
                          <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500">{m.label} ({m.unit})</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30">
                    <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Lightbulb size={20} className="text-indigo-500" /> Lessons Learned
                    </h3>
                    <ul className="space-y-3">
                      {d?.lessonsLearned?.map((l, i) => (
                        <li key={i} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                          <span className="text-indigo-500 font-bold flex-shrink-0 mt-0.5">•</span>
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

              </motion.div>

              <div className="h-12"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
