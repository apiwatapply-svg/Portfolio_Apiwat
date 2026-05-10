"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, AlertTriangle, ArrowRight, Play, Pause, RotateCcw } from "lucide-react";

export type FlowStep = {
  id: string;
  label: string;
  detail?: string;
  icon?: string;        // emoji
  type: "action" | "decision" | "success" | "error" | "warning" | "process";
  /** For decision nodes: branches shown side-by-side */
  branches?: {
    condition: string;
    steps: FlowStep[];
    type: "success" | "error" | "warning";
  }[];
};

type Props = {
  title?: string;
  steps: FlowStep[];
  themeColor?: string; // tailwind color e.g. "blue" | "purple" | "emerald"
  autoPlay?: boolean;
};

const typeStyle: Record<FlowStep["type"], string> = {
  action:   "bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200",
  process:  "bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700 text-blue-800 dark:text-blue-200",
  decision: "bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-200",
  success:  "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-400 dark:border-emerald-600 text-emerald-800 dark:text-emerald-200",
  error:    "bg-red-50 dark:bg-red-900/20 border-red-400 dark:border-red-600 text-red-800 dark:text-red-200",
  warning:  "bg-orange-50 dark:bg-orange-900/20 border-orange-400 dark:border-orange-600 text-orange-800 dark:text-orange-200",
};

const typeIcon: Record<FlowStep["type"], React.ReactNode> = {
  action:   null,
  process:  null,
  decision: <AlertTriangle size={14} className="text-amber-500" />,
  success:  <CheckCircle2 size={14} className="text-emerald-500" />,
  error:    <XCircle size={14} className="text-red-500" />,
  warning:  <AlertTriangle size={14} className="text-orange-500" />,
};

function StepNode({ step, visible }: { step: FlowStep; visible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex flex-col items-center"
    >
      <div className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 text-sm font-semibold shadow-sm max-w-[200px] text-center ${typeStyle[step.type]}`}>
        {step.icon && <span className="text-xl leading-none">{step.icon}</span>}
        {typeIcon[step.type]}
        <div>
          <div className="leading-tight">{step.label}</div>
          {step.detail && <div className="text-xs font-normal opacity-70 mt-0.5 leading-tight">{step.detail}</div>}
        </div>
      </div>
    </motion.div>
  );
}

function Connector({ visible }: { visible: boolean }) {
  return (
    <motion.div
      initial={{ scaleY: 0, opacity: 0 }}
      animate={visible ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
      style={{ originY: 0 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col items-center my-1"
    >
      <div className="w-0.5 h-5 bg-slate-300 dark:bg-slate-600" />
      <ArrowRight size={12} className="text-slate-400 rotate-90 -mt-1" />
    </motion.div>
  );
}

export default function AnimationFlow({ title, steps, autoPlay = true }: Props) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [playing, setPlaying] = useState(autoPlay);

  // Count total nodes including branch nodes
  const totalNodes = steps.reduce((acc, s) => {
    if (s.branches) {
      const branchNodes = s.branches.reduce((a, b) => a + b.steps.length, 0);
      return acc + 1 + branchNodes;
    }
    return acc + 1;
  }, 0);

  useEffect(() => {
    if (!playing) return;
    if (visibleCount >= totalNodes) return;

    const timer = setTimeout(() => {
      setVisibleCount((v) => v + 1);
    }, 600);
    return () => clearTimeout(timer);
  }, [playing, visibleCount, totalNodes]);

  const reset = () => { setVisibleCount(0); setPlaying(true); };
  const toggle = () => setPlaying((p) => !p);

  let nodeIndex = 0;

  return (
    <div className="w-full">
      {/* Controls */}
      <div className="flex items-center gap-3 mb-5">
        {title && <h4 className="text-sm font-black text-slate-700 dark:text-slate-300 flex-1">{title}</h4>}
        <button
          onClick={toggle}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 transition-colors"
        >
          {playing ? <Pause size={12} /> : <Play size={12} />}
          {playing ? "Pause" : "Play"}
        </button>
        <button
          onClick={reset}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 transition-colors"
        >
          <RotateCcw size={12} /> Replay
        </button>
      </div>

      {/* Flow */}
      <div className="flex flex-col items-center overflow-x-auto pb-2">
        {steps.map((step, si) => {
          const currentNode = nodeIndex++;
          const stepVisible = visibleCount > currentNode;

          if (!step.branches) {
            return (
              <div key={step.id} className="flex flex-col items-center">
                {si > 0 && <Connector visible={stepVisible} />}
                <StepNode step={step} visible={stepVisible} />
              </div>
            );
          }

          // Decision node with branches
          return (
            <div key={step.id} className="flex flex-col items-center w-full">
              <Connector visible={stepVisible} />
              <StepNode step={step} visible={stepVisible} />

              {/* Branch row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={stepVisible ? { opacity: 1 } : { opacity: 0 }}
                className="flex items-start justify-center gap-4 mt-2 w-full flex-wrap"
              >
                {step.branches.map((branch) => {
                  const branchColor = branch.type === "success"
                    ? "text-emerald-500 border-emerald-300"
                    : branch.type === "error"
                    ? "text-red-500 border-red-300"
                    : "text-orange-500 border-orange-300";

                  return (
                    <div key={branch.condition} className="flex flex-col items-center">
                      {/* Condition label */}
                      <div className={`text-xs font-bold px-2 py-0.5 rounded-full border ${branchColor} mb-1`}>
                        {branch.condition}
                      </div>
                      {/* Branch steps */}
                      {branch.steps.map((bs, bsi) => {
                        const branchNode = nodeIndex++;
                        const branchVisible = visibleCount > branchNode;
                        return (
                          <div key={bs.id} className="flex flex-col items-center">
                            {bsi > 0 && <Connector visible={branchVisible} />}
                            <StepNode step={bs} visible={branchVisible} />
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-500 rounded-full"
          animate={{ width: `${(visibleCount / totalNodes) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}
