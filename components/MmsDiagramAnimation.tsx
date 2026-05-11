"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, BarChart3, CheckCircle2, Code2, Database, FileText, GitBranch, HardDrive, MonitorDot, Network, Server, ShieldCheck, Wrench } from "lucide-react";

type DiagramKind = "before-after" | "user-flow" | "project-process" | "er-structure" | "devops";

type Props = {
  title: string;
};

const nodeStyle = "relative z-10 min-w-0 rounded-lg border bg-slate-950/70 px-3 py-2 shadow-lg shadow-slate-950/30 backdrop-blur";
const labelStyle = "min-w-0 break-words text-[11px] font-black leading-tight text-white sm:text-xs";
const detailStyle = "mt-1 text-[9px] leading-tight text-slate-300 sm:text-[10px]";

function resolveKind(title: string): DiagramKind {
  const normalized = title.toLowerCase();
  if (normalized.includes("old method") || normalized.includes("before")) return "before-after";
  if (normalized.includes("user flow")) return "user-flow";
  if (normalized.includes("work process") || normalized.includes("project work")) return "project-process";
  if (normalized.includes("er diagram")) return "er-structure";
  return "devops";
}

function FlowLine({ delay = 0, vertical = false }: { delay?: number; vertical?: boolean }) {
  return (
    <div className={`relative overflow-hidden ${vertical ? "h-10 w-px" : "h-px flex-1"} bg-cyan-400/30`}>
      <motion.div
        className={`absolute rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)] ${vertical ? "left-[-2px] h-3 w-1" : "top-[-2px] h-1 w-10"}`}
        animate={vertical ? { y: ["-20%", "120%"] } : { x: ["-20%", "120%"] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay }}
      />
    </div>
  );
}

function DiagramNode({
  label,
  detail,
  tone,
  icon,
  delay = 0,
}: {
  label: string;
  detail: string;
  tone: "cyan" | "green" | "amber" | "violet" | "red" | "slate";
  icon: ReactNode;
  delay?: number;
}) {
  const colors = {
    cyan: "border-cyan-400/80",
    green: "border-emerald-400/80",
    amber: "border-amber-400/80",
    violet: "border-violet-400/80",
    red: "border-red-400/80",
    slate: "border-slate-400/80",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, delay }}
      className={`${nodeStyle} ${colors[tone]}`}
    >
      <div className="flex min-w-0 items-center gap-2">
        <span className="shrink-0 text-cyan-300">{icon}</span>
        <span className={labelStyle}>{label}</span>
      </div>
      <p className={detailStyle}>{detail}</p>
    </motion.div>
  );
}

function AnimatedShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-72 overflow-hidden bg-slate-950 p-5 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_90%,rgba(20,184,166,0.24),transparent_30%),radial-gradient(circle_at_82%_10%,rgba(14,165,233,0.24),transparent_28%)]" />
      <motion.div
        className="absolute inset-x-0 top-1/2 h-px bg-cyan-400/20"
        animate={{ opacity: [0.2, 0.75, 0.2] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      />
      {children}
    </div>
  );
}

function BeforeAfterDiagram() {
  return (
    <AnimatedShell>
      <div className="relative z-10 grid h-full gap-5 md:grid-cols-[1fr_auto_1fr]">
        <div className="rounded-xl border border-red-400/70 p-4">
          <p className="mb-4 text-sm font-black">Before</p>
          <div className="space-y-3">
            <DiagramNode label="Manual Logs" detail="Operator records machine values" tone="red" icon={<FileText size={14} />} />
            <DiagramNode label="Spreadsheet Summary" detail="Manual consolidation" tone="red" icon={<BarChart3 size={14} />} delay={0.1} />
            <DiagramNode label="Late Response" detail="Loss found after delay" tone="red" icon={<AlertTriangle size={14} />} delay={0.2} />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <motion.div
            className="rounded-full border border-cyan-300/60 px-3 py-2 text-xs font-black text-cyan-100"
            animate={{ scale: [1, 1.08, 1], boxShadow: ["0 0 0 rgba(34,211,238,0)", "0 0 24px rgba(34,211,238,0.45)", "0 0 0 rgba(34,211,238,0)"] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            MMS
          </motion.div>
        </div>
        <div className="rounded-xl border border-emerald-400/70 p-4">
          <p className="mb-4 text-sm font-black">After</p>
          <div className="space-y-3">
            <DiagramNode label="Realtime Capture" detail="Machine data flows to server" tone="green" icon={<Network size={14} />} delay={0.25} />
            <DiagramNode label="Dashboard & Reports" detail="OEE, output, NG, downtime" tone="green" icon={<MonitorDot size={14} />} delay={0.35} />
            <DiagramNode label="Faster Decision" detail="Same-shift response" tone="green" icon={<CheckCircle2 size={14} />} delay={0.45} />
          </div>
        </div>
      </div>
    </AnimatedShell>
  );
}

function UserFlowDiagram() {
  const steps = [
    ["Open dashboard", "Factory overview", "cyan", <MonitorDot size={14} />],
    ["Filter", "Area, type, machine", "green", <Network size={14} />],
    ["Compare", "Target vs actual", "amber", <BarChart3 size={14} />],
    ["Drill down", "Daily / machine detail", "violet", <Database size={14} />],
    ["Take action", "Production response", "red", <CheckCircle2 size={14} />],
  ] as const;

  return (
    <AnimatedShell>
      <div className="relative z-10 flex h-full flex-col justify-center gap-6">
        <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
          {steps.map(([label, detail, tone, icon], index) => (
            <div key={label} className="flex flex-1 flex-col gap-3 md:flex-row md:items-center">
              <DiagramNode label={label} detail={detail} tone={tone} icon={icon} delay={index * 0.08} />
              {index < steps.length - 1 && <FlowLine delay={index * 0.15} />}
            </div>
          ))}
        </div>
        <motion.div
          className="rounded-xl border border-cyan-400/30 bg-slate-950/70 p-4 text-center text-xs font-bold text-slate-200"
          animate={{ borderColor: ["rgba(34,211,238,0.25)", "rgba(34,211,238,0.85)", "rgba(34,211,238,0.25)"] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        >
          {"Decision loop: detect abnormal machine -> identify area/type loss -> act in same shift -> review next report"}
        </motion.div>
      </div>
    </AnimatedShell>
  );
}

function ProjectProcessDiagram() {
  const steps = [
    ["Requirements", "PRD and scope", "cyan", <FileText size={14} />],
    ["Tech Design", "ER / API / stack", "green", <Database size={14} />],
    ["Mock UI", "Dashboard/report UX", "amber", <MonitorDot size={14} />],
    ["Development", "Frontend and backend", "violet", <Code2 size={14} />],
    ["Testing", "Unit test and build", "red", <ShieldCheck size={14} />],
    ["Deploy", "PM2 customer server", "cyan", <Server size={14} />],
  ] as const;

  return (
    <AnimatedShell>
      <div className="relative z-10 flex h-full flex-col justify-center gap-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          {steps.map(([label, detail, tone, icon], index) => (
            <div key={label} className="flex flex-1 flex-col gap-3 md:flex-row md:items-center">
              <DiagramNode label={label} detail={detail} tone={tone} icon={icon} delay={index * 0.07} />
              {index < steps.length - 1 && <FlowLine delay={index * 0.12} />}
            </div>
          ))}
        </div>
        <div className="mx-auto flex w-full max-w-xs flex-col items-center">
          <FlowLine vertical delay={0.2} />
          <DiagramNode label="Maintenance" detail="Monitor logs, tune data, improve reports" tone="green" icon={<Wrench size={14} />} delay={0.45} />
        </div>
      </div>
    </AnimatedShell>
  );
}

function ErStructureDiagram() {
  const tables = [
    ["tb_output_target", "target per hour", "green"],
    ["tb_output_actual", "actual output", "violet"],
    ["tb_oee", "A / P / Q / OEE", "amber"],
    ["tb_MCStatus", "machine status", "green"],
    ["tb_MCAlarm", "alarm history", "violet"],
    ["tb_machine_ng", "NG history", "amber"],
  ] as const;
  const lineTargets = [9, 25, 41, 57, 73, 89];

  return (
    <AnimatedShell>
      <div className="relative z-10 min-h-[360px]">
        <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <marker id="mms-er-arrow" markerHeight="4" markerWidth="5" orient="auto" refX="4" refY="2">
              <path d="M0,0 L5,2 L0,4 Z" fill="rgba(34,211,238,0.8)" />
            </marker>
          </defs>
          {lineTargets.map((targetY, index) => (
            <motion.path
              key={`master-${targetY}`}
              d={`M 28 50 C 34 50, 30 ${targetY}, 36 ${targetY}`}
              fill="none"
              stroke="rgba(34,211,238,0.42)"
              strokeWidth="0.45"
              markerEnd="url(#mms-er-arrow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1], opacity: [0.25, 0.85, 0.45] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.12 }}
            />
          ))}
          {lineTargets.map((targetY, index) => (
            <motion.path
              key={`report-${targetY}`}
              d={`M 64 ${targetY} C 72 ${targetY}, 68 50, 76 50`}
              fill="none"
              stroke="rgba(16,185,129,0.38)"
              strokeWidth="0.45"
              markerEnd="url(#mms-er-arrow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1], opacity: [0.2, 0.75, 0.4] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: 0.45 + index * 0.12 }}
            />
          ))}
        </svg>

        <div className="absolute left-0 top-1/2 z-10 w-[30%] -translate-y-1/2">
          <DiagramNode label="tbm_machine" detail="area, type, machine name" tone="cyan" icon={<HardDrive size={14} />} />
        </div>

        <div className="absolute left-[36%] top-0 z-10 grid w-[30%] gap-2">
          {tables.map(([label, detail, tone], index) => (
            <div key={label} className="relative">
              <DiagramNode
                label={label}
                detail={detail}
                tone={tone}
                icon={<Database size={14} />}
                delay={index * 0.07}
              />
            </div>
          ))}
        </div>

        <div className="absolute right-0 top-1/2 z-10 w-[24%] -translate-y-1/2">
          <DiagramNode label="Report API" detail="daily / machine reports" tone="cyan" icon={<Server size={14} />} delay={0.5} />
        </div>

        <motion.div
          className="pointer-events-none absolute inset-x-10 top-1/2 z-0 h-px bg-cyan-300/20"
          animate={{ opacity: [0.25, 0.9, 0.25] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        />
      </div>
    </AnimatedShell>
  );
}

function DevopsDiagram() {
  const steps = [
    ["Coding", "Local feature work", "cyan", <Code2 size={14} />],
    ["Feature branch", "Small focused commits", "green", <GitBranch size={14} />],
    ["Pull request", "Review before merge", "amber", <GitBranch size={14} />],
    ["CI", "Unit test + build", "violet", <ShieldCheck size={14} />],
    ["CD", "Release package", "red", <Server size={14} />],
    ["PM2", "Run on server", "cyan", <MonitorDot size={14} />],
  ] as const;

  return (
    <AnimatedShell>
      <div className="relative z-10 flex h-full flex-col justify-center gap-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          {steps.map(([label, detail, tone, icon], index) => (
            <div key={label} className="flex flex-1 flex-col gap-3 md:flex-row md:items-center">
              <DiagramNode label={label} detail={detail} tone={tone} icon={icon} delay={index * 0.08} />
              {index < steps.length - 1 && <FlowLine delay={index * 0.12} />}
            </div>
          ))}
        </div>
        <motion.div
          className="mx-auto max-w-xl rounded-xl border border-slate-500/50 bg-slate-950/80 px-4 py-3 text-center text-xs font-bold text-slate-200"
          animate={{ boxShadow: ["0 0 0 rgba(14,165,233,0)", "0 0 24px rgba(14,165,233,0.24)", "0 0 0 rgba(14,165,233,0)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Main rule: main branch stays deployable; CI must pass before production release
        </motion.div>
      </div>
    </AnimatedShell>
  );
}

export default function MmsDiagramAnimation({ title }: Props) {
  const kind = resolveKind(title);

  if (kind === "before-after") return <BeforeAfterDiagram />;
  if (kind === "user-flow") return <UserFlowDiagram />;
  if (kind === "project-process") return <ProjectProcessDiagram />;
  if (kind === "er-structure") return <ErStructureDiagram />;
  return <DevopsDiagram />;
}
