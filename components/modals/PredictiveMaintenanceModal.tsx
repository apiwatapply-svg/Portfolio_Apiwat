"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  BellRing,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Cpu,
  Database,
  FileSpreadsheet,
  Factory,
  Gauge,
  ListChecks,
  Mail,
  MonitorDot,
  Network,
  RadioTower,
  RotateCcw,
  Search,
  Server,
  Settings,
  ShieldCheck,
  Store,
  Volume2,
  Trash2,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { type ComponentType } from "react";
import { type Project } from "@/lib/data";

type Props = {
  project: Project;
  onClose: () => void;
};

type LightboxImage = {
  src: string;
  title: string;
  detail?: string;
  points?: string[];
  userSee?: { title: string; detail: string }[];
  guide?: "mms-machine-card";
};

const tabs = [
  "Over All",
  "Admin mode",
  "MMS Dashboard",
  "Toolling & Store",
  "Job Request",
  "Preventive Maintenance",
  "Summary",
];

const activeTabStorageKey = "smartFactoryOperations.activeTab";

function normalizeStoredTab(value: string | null) {
  const tab = value === "Sumarize" ? "Summary" : value;
  return tab && tabs.includes(tab) ? tab : tabs[0];
}

function getInitialActiveTab() {
  if (typeof window === "undefined") return tabs[0];
  try {
    return normalizeStoredTab(window.localStorage.getItem(activeTabStorageKey));
  } catch {
    return tabs[0];
  }
}

const scopeMetrics = [
  { value: "100", label: "Machines" },
  { value: "14", label: "Machine Types" },
  { value: "4", label: "Areas" },
];

const benefitMetrics = [
  { value: "1,025.5 min", label: "Saved / Day" },
  { value: "17.1 hr", label: "Manual Work Reduced / Day" },
  { value: "2.1", label: "Person-Shift Workload / Day" },
  { value: "1,748 THB", label: "Saved / Day" },
  { value: "38,456 THB", label: "Saved / Month" },
  { value: "461,475 THB", label: "Saved / Year" },
];

const platformModules = [
  {
    title: "Admin mode",
    detail: "Shared master data for users, machines, departments, areas, roles, and permissions.",
    tab: "Admin mode",
    icon: Settings,
  },
  {
    title: "MMS Dashboard",
    detail: "Machine and history data for realtime factory visibility.",
    tab: "MMS Dashboard",
    icon: MonitorDot,
  },
  {
    title: "Toolling & Store",
    detail: "Stock, tools, borrow/return, calibration, movement history, and Predictive Tooling Usage.",
    tab: "Toolling & Store",
    icon: Store,
  },
  {
    title: "Job Request",
    detail: "Production, Maintenance, and QC in one status-driven repair workflow.",
    tab: "Job Request",
    icon: Wrench,
  },
  {
    title: "Preventive Maintenance",
    detail: "PM checklist and inspection records mapped to machines.",
    tab: "Preventive Maintenance",
    icon: ClipboardCheck,
  },
  {
    title: "Predictive Maintenance",
    detail: "Upcoming module. Current scope only includes Predictive Tooling Usage inside Toolling & Store.",
    tab: "Toolling & Store",
    icon: Activity,
    status: "Upcoming",
  },
];

const overallNextSteps = [
  {
    title: "Email Alert",
    label: "Alert",
    detail:
      "Send email notifications when the platform detects work or machine conditions that need attention.",
    icon: BellRing,
    points: [
      "Machine alarm, abnormal status, or downtime over target",
      "Job Request waiting for Maintenance, QC, or Production confirmation",
      "Rejected repair job returned for rework",
      "PM due soon, overdue PM, or missing inspection record",
      "Low stock, stock-out, or suggested reorder from Predictive Usage",
    ],
  },
  {
    title: "Predictive Usage",
    label: "Tooling & Store",
    detail:
      "Use stock balance, issue history, stock-out history, and PM part usage to forecast tool and spare-part demand before shortage happens.",
    icon: BarChart3,
    points: ["30-day usage forecast", "Stockout ETA", "Reorder ETA", "Suggested buy quantity"],
  },
  {
    title: "Predictive MM",
    label: "Predictive Maintenance",
    detail:
      "Use long-term machine history, downtime, alarm, and repair records to predict maintenance risk and recommend priority before breakdown.",
    icon: Activity,
    points: ["Machine risk score", "Downtime prediction", "Maintenance priority", "Repair history pattern"],
  },
];

const overallImages = [
  {
    src: "/projects/smart-factory-operations/socket-platform-flow.svg",
    title: "Platform Integration Flow",
    caption: "Admin master data, MSSQL, backend API, Socket.IO, and feature modules connected as one platform.",
  },
  {
    src: "/projects/smart-factory-operations/iot-machine-data-flow.png",
    title: "Machine Data Flow",
    caption:
      "Area 1 uses Modbus TCP through IoT Box / Arduino Link to PC Gateway by MQTT. Areas 2-4 use PC Gateway with MC Protocol.",
  },
  {
    src: "/projects/smart-factory-operations/gateway-workspace-selector.png",
    title: "System Gateway",
    caption: "Main entry point that separates PM, Predictive Maintenance, Toolling & Store, Job Request, MMS Dashboard, and Admin mode.",
  },
];

const adminDataFlow = [
  { label: "Admin Login", icon: Settings },
  { label: "Role / Scope Check", icon: ClipboardCheck },
  { label: "Master Data CRUD", icon: Database },
  { label: "MSSQL Server", icon: Server },
  { label: "Shared API", icon: Network },
  { label: "MMS / Job / PM / Tooling", icon: Factory },
];

const masterDataItems = [
  {
    title: "Users",
    detail: "Login account and employee identity.",
    icon: Users,
  },
  {
    title: "Roles",
    detail: "Admin, Production, Maintenance, QC, PM, and Tooling access.",
    icon: ShieldCheck,
  },
  {
    title: "Departments",
    detail: "Owner group used for responsibility and handover.",
    icon: Factory,
  },
  {
    title: "Areas",
    detail: "Factory area used to group machines and reports.",
    icon: Network,
  },
  {
    title: "Machine Types",
    detail: "Machine category used by MMS, PM, and Job Request.",
    icon: Cpu,
  },
  {
    title: "Machines",
    detail: "Machine number, line, area, and status reference.",
    icon: MonitorDot,
  },
  {
    title: "Permissions",
    detail: "Feature scope and action control for each role.",
    icon: Settings,
  },
  {
    title: "Shared Records",
    detail: "Common source for history, checklist, stock, and workflow.",
    icon: Database,
  },
];

const adminImages = [
  {
    src: "/projects/smart-factory-operations/admin-machine-master.png",
    title: "Machine Master",
    caption: "Machine, area, type, and machine number data used across the platform.",
  },
  {
    src: "/projects/smart-factory-operations/admin-user-role.png",
    title: "User and Role",
    caption: "Role and scope control for feature access.",
  },
  {
    src: "/projects/smart-factory-operations/admin-delete-confirm.png",
    title: "Delete Confirmation",
    caption: "Confirmation step for safer master data changes.",
  },
];

const summaryImpactMetrics = [
  { value: "1,025.5 min", label: "Reduced Manual Work / Day" },
  { value: "17.1 hr", label: "Workload Reduction / Day" },
  { value: "2.1", label: "People-Shift Routine Workload" },
  { value: "1,748 THB", label: "Labor-Time Saving / Day" },
  { value: "38,456 THB", label: "Labor-Time Saving / Month" },
  { value: "461,475 THB", label: "Labor-Time Saving / Year" },
];

const productionRiskMetrics = [
  { value: "1.22 min/pc", label: "Average Cycle Time" },
  { value: "44.73 THB/pc", label: "Average Value" },
  { value: "841 pcs", label: "Risk Reduced / Day" },
  { value: "37,604 THB", label: "Value Protected / Day" },
  { value: "18,495 pcs", label: "Risk Reduced / Month" },
  { value: "827,296 THB", label: "Value Protected / Month" },
  { value: "221,944 pcs", label: "Risk Reduced / Year" },
  { value: "9.93M THB", label: "Value Protected / Year" },
];

const summaryFeatureContributions = [
  {
    title: "MMS Dashboard",
    detail: "Machine visibility, status monitoring, graph/table reports, and export evidence from the same data foundation.",
    icon: MonitorDot,
  },
  {
    title: "Job Request",
    detail: "Production, Maintenance, QC, and Production confirmation work from one status-driven repair timeline.",
    icon: Wrench,
  },
  {
    title: "Preventive Maintenance",
    detail: "PM Type, checklist criteria, machine mapping, calendar plan, inspection, OK/NG result, and email reminder.",
    icon: ClipboardCheck,
  },
  {
    title: "Tooling & Store",
    detail: "Stock, borrow/return, calibration, movement history, and API validation for reliable inventory control.",
    icon: Store,
  },
  {
    title: "Admin Master Data",
    detail: "Shared departments, areas, machines, employees, users, roles, and permission scope across every module.",
    icon: Settings,
  },
  {
    title: "Socket.IO Integration",
    detail: "Realtime operation updates and alert logic when status, ownership, or actionable work changes.",
    icon: RadioTower,
  },
];

const summaryProblems = [
  {
    problem: "Requirements were hard to collect",
    detail: "Production had limited time for IoT and system requirement meetings.",
    solution: "Observed the shopfloor first, mapped real workflow, then met each team with focused questions.",
    result: "Requirements became clearer and meetings took less time.",
  },
  {
    problem: "Job flow was not linear",
    detail: "QC can reject back to Maintenance, and Production can reject back to QC.",
    solution: "Used a status-driven workflow with action history, handover, and reject loops.",
    result: "Every rejection and handover stays traceable.",
  },
  {
    problem: "Stock validation needed control",
    detail: "Weak validation can let users issue more stock than available.",
    solution: "Validate stock movement in the API before writing the transaction to MSSQL.",
    result: "The system prevents inventory mismatch before it reaches the database.",
  },
];

const summaryPlatformFlow = [
  { label: "PLC / IoT Data", icon: Cpu },
  { label: "MSSQL Source", icon: Database },
  { label: "Backend API", icon: Server },
  { label: "Socket.IO", icon: RadioTower },
  { label: "Operation Modules", icon: Factory },
];

const summaryAiFlow = [
  { label: "Machine History", icon: Database },
  { label: "Big Data Storage", icon: Server },
  { label: "Feature Engineering", icon: Settings },
  { label: "AI Model", icon: Activity },
  { label: "Maintenance Recommendation", icon: Wrench },
];

const summaryInterviewStory = [
  "This project started from a real factory problem: each department had useful information, but the information was separated.",
  "I designed the platform to connect machine-side data and department workflows into one traceable system using MSSQL, backend APIs, Socket.IO, and shared master data.",
  "The main operational flow is Job Request: Production creates a request, Maintenance repairs it, QC inspects it, and Production confirms it, with rejection loops kept in the same history.",
  "The platform also includes Preventive Maintenance, Tooling Store, Admin master data, realtime updates, and an estimated workload reduction of 17.1 hours/day across a 100-machine operation.",
  "The next step is to collect long-term machine history as Big Data and apply AI for anomaly detection, downtime prediction, predictive maintenance, and spare-part forecasting.",
];

const mmsSlides = [
  {
    title: "Dashboard Overview",
    src: "/projects/smart-factory-operations/mms-overview-full-data.png",
    icon: Gauge,
    summary:
      "Realtime control-room overview showing factory health, machine status, active jobs, output performance, and the area that needs attention first.",
    detail:
      "This screen gives the control room a real-time factory overview for the 07:00-07:00 working day. Users can quickly see factory health, machine status, active repair jobs, output performance, and which area needs attention first.",
    points: [
      "Overall machine condition: Running, Alarm, Stopped, and Active Job.",
      "Production result: Output OK, NG Rate, and OEE Average.",
      "Machine filtering by Area, Machine Type, Machine No, MMS Status, and Job Status.",
      "Machine/job status colors such as RUN, ALARM, STOP, MM REPAIR, QC, PLAN STOP, and CLEANING.",
      "Factory layout grouped by area and machine type.",
      "Each machine card shows machine no, current status, job context, Job PIC, output, OK, NG, OEE, and PM state.",
      "Users do not need to walk machine by machine; they can monitor from the dashboard and know which machine is running, stopped, in alarm, or waiting for job follow-up.",
    ],
    userSee: [
      { title: "Machine status", detail: "Running / Alarm / Stopped / Filtered" },
      { title: "Job status", detail: "Active jobs / Repair / QC follow-up" },
      { title: "Production result", detail: "Output OK / NG rate / OEE avg" },
      { title: "Area layout", detail: "Line / type / machine status map" },
      { title: "Machine card", detail: "Status / PIC / OUT / OK / NG / OEE / PM" },
      { title: "Action focus", detail: "Machines needing attention first" },
    ],
    guide: "mms-machine-card" as const,
  },
  {
    title: "Overall Working",
    src: "/projects/smart-factory-operations/mms-overall-working-full-data.png",
    icon: Factory,
    detail:
      "Summarizes machine working status across areas and machine types so supervisors can compare the whole factory from one view.",
    userSee: [
      { title: "Selected scope", detail: "Area / Type / Machine / Date" },
      { title: "Machine summary", detail: "Operator / Status / OEE" },
      { title: "Output gap", detail: "Actual / Target / Accum" },
      { title: "CT gap", detail: "CT actual / CT target" },
      { title: "Availability gap", detail: "Actual / Target availability" },
      { title: "Priority machines", detail: "Machines needing support first" },
    ],
  },
  {
    title: "Machine Working - Status",
    src: "/projects/smart-factory-operations/mms-machine-status-full-data.png",
    icon: Activity,
    detail:
      "Drills into each machine with status timeline, latest event, and working history for troubleshooting and follow-up.",
    userSee: [
      { title: "Selected machine", detail: "Area / Type / Machine / Date" },
      { title: "Current status", detail: "MMS status / Date-time" },
      { title: "Production result", detail: "Output / Target / OK / NG / Total" },
      { title: "OEE metrics", detail: "OEE / Achieve / A / P / Q" },
      { title: "Status timeline", detail: "07:00-07:00 status duration" },
      { title: "Downtime cause", detail: "Lost time by status %" },
    ],
  },
  {
    title: "Machine Working - Output",
    src: "/projects/smart-factory-operations/mms-machine-output-full-data.png",
    icon: BarChart3,
    detail:
      "Separates machine output data from status events so users can review OK/NG quantity, production result, and output history clearly.",
    userSee: [
      { title: "Selected machine", detail: "Area / Type / Machine / Date" },
      { title: "Production result", detail: "Output / Target / OK / NG / OEE" },
      { title: "Output monitor", detail: "Actual / Target / Accum gap" },
      { title: "CT monitor", detail: "CT actual / CT target" },
      { title: "Availability monitor", detail: "Availability actual / target" },
      { title: "Loss focus", detail: "Output / CT / Availability issue" },
    ],
  },
  {
    title: "Graph Report",
    src: "/projects/smart-factory-operations/mms-graph-report-full-data.png",
    icon: BarChart3,
    detail:
      "Visualizes machine performance, status trend, and historical comparison to support daily review and improvement discussion.",
    userSee: [
      { title: "Report scope", detail: "Area / Type / Machine / Period / Month" },
      { title: "Output trend", detail: "Actual / Target / Accum gap" },
      { title: "CT & availability", detail: "CT / Availability actual vs target" },
      { title: "OEE trend", detail: "OEE / Availability / Performance / Quality" },
      { title: "Quality trend", detail: "NG qty / Over reject" },
      { title: "Export evidence", detail: "Excel report for review" },
    ],
  },
  {
    title: "Table Report",
    src: "/projects/smart-factory-operations/mms-table-report-full-data.png",
    icon: FileSpreadsheet,
    detail:
      "Provides searchable history and export support for daily review, troubleshooting, and production meeting evidence.",
    userSee: [
      { title: "Report scope", detail: "Area / Type / Machine / Period / Month" },
      { title: "Machine identity", detail: "MC no / Model / Area" },
      { title: "Daily result", detail: "Metrics by date" },
      { title: "Monthly total", detail: "Total value by metric" },
      { title: "Output & quality", detail: "Target / Output / NG / Reject" },
      { title: "OEE detail", detail: "OEE / A / P / Q / CT" },
    ],
  },
  {
    title: "MMS Simulation - GOT Panel",
    src: "/projects/smart-factory-operations/mms-simulation-got-full-data.png",
    icon: RadioTower,
    detail:
      "Shows the PLC / GOT machine panel used to control machine status, maintenance actions, QC state, production state, output, model, and socket update.",
    userSee: [
      { title: "Machine context", detail: "MC status / Machine / Type / Area" },
      { title: "Maintenance action", detail: "MM Repair / MM Preventive" },
      { title: "QC action", detail: "QC status update" },
      { title: "Production action", detail: "Cleaning status update" },
      { title: "Status scenario", detail: "RUN / WAIT PART / PLAN STOP / STOP" },
      { title: "Output input", detail: "OK / NG / CT / Model" },
      { title: "Socket update", detail: "Realtime dashboard update" },
    ],
  },
];

const mmsPainPoints = [
  "Machine status was checked by walking to the line or waiting for verbal updates.",
  "Production, Maintenance, and QC saw job progress in separate places, so current ownership was not always clear.",
  "Daily machine reports required manual checking, filtering, and summary preparation.",
  "History lookup by machine, area, type, or job status took time during troubleshooting.",
];

const mmsBenefits = [
  { label: "Scope", value: "100 machines | 14 types | 4 areas" },
  { label: "Before", value: "Manual checking/reporting: 1.5 min/machine = 150 min/day" },
  { label: "After", value: "Dashboard scan/filter/export: 0.5 min/machine = 50 min/day" },
  { label: "Saving", value: "1 min/machine x 100 machines = 100 min/day" },
  { label: "Cost", value: "100 / 60 x 102.27 = 170.45 THB/day" },
  { label: "Month / Year", value: "3,750 THB/month | 45,000 THB/year" },
];

const mmsFeatureFlow = [
  { label: "PLC / Machine Signal", icon: Cpu },
  { label: "IoT Box / PC Gateway", icon: MonitorDot },
  { label: "MSSQL Server", icon: Database },
  { label: "Backend API", icon: Server },
  { label: "MMS Dashboard", icon: Gauge },
  { label: "Socket.IO Update", icon: RadioTower },
];

const mmsJobConnectionFlow = [
  { label: "Production creates request", icon: Factory },
  { label: "Maintenance updates repair status", icon: Wrench },
  { label: "QC confirms or rejects", icon: ClipboardCheck },
  { label: "Job status saved", icon: Database },
  { label: "MMS shows active job on machine view", icon: MonitorDot },
];

const toolingSlides = [
  {
    title: "Dashboard",
    src: "/projects/smart-factory-operations/tooling-dashboard-real-20260528.png",
    icon: Store,
    detail:
      "Shows the main entry point for inventory control, master data, tool borrowing, spare part stock, calibration, history, and reports.",
    userSee: [
      { title: "Tool status", detail: "Total / Available / Borrowed / Repair" },
      { title: "Stock risk", detail: "Low stock items" },
      { title: "Borrow risk", detail: "Overdue borrow count" },
      { title: "Calibration risk", detail: "Due soon / Expired" },
      { title: "Stock movement", detail: "Stock in / Stock out by day" },
      { title: "Availability mix", detail: "Available / Borrowed / Repair" },
    ],
  },
  {
    title: "Master Data",
    src: "/projects/smart-factory-operations/tooling-master-data-real-20260528.png",
    icon: Database,
    detail:
      "Controls item code, item name, current stock, min/max stock, unit, location, status, and item image in one master record screen.",
    userSee: [
      { title: "Item identity", detail: "Code / Name / Image" },
      { title: "Stock control", detail: "Current / Min / Max" },
      { title: "Unit control", detail: "PCS / unit type" },
      { title: "Location control", detail: "Store / Shelf / Cabinet" },
      { title: "Stock status", detail: "Normal / Low / Over" },
      { title: "Master image", detail: "Item photo preview" },
    ],
  },
  {
    title: "Tool Borrowing",
    src: "/projects/smart-factory-operations/tooling-tool-borrowing-real-20260528.png",
    icon: Wrench,
    detail:
      "Shows tool cards, borrow/issue, return tool, overdue borrow, borrower status, and real tool photos for traceability.",
    userSee: [
      { title: "Tool count", detail: "Total / Available / Borrowed" },
      { title: "Tool risk", detail: "Unavailable / Overdue" },
      { title: "Tool condition", detail: "Available / Repair / Lost" },
      { title: "Borrower status", detail: "Ready / Out / Late" },
      { title: "Search scope", detail: "Tool / Serial / Borrower" },
      { title: "Tool photo", detail: "Real tool image" },
    ],
  },
  {
    title: "Spare Part Stock",
    src: "/projects/smart-factory-operations/tooling-spare-part-stock-real-20260528.png",
    icon: Store,
    detail:
      "Shows stock-in, stock-out, stock balance, low stock, out-of-stock, location filter, and real spare part photos.",
    userSee: [
      { title: "Stock movement", detail: "Stock In / Stock Out / Balance" },
      { title: "Stock status", detail: "Normal / Low / Out / Over" },
      { title: "Stock level", detail: "Current / Min / Max" },
      { title: "Stock gap", detail: "Need to min / Space to max" },
      { title: "Location", detail: "Store / Cabinet / Shelf" },
      { title: "Receive / issue", detail: "Receive / Issue action" },
    ],
  },
  {
    title: "Calibration",
    src: "/projects/smart-factory-operations/tooling-calibration-real-20260528.png",
    icon: ClipboardCheck,
    detail:
      "Tracks calibration list, due soon, expired tools, last calibration date, next calibration date, owner, and remark.",
    userSee: [
      { title: "Calibration status", detail: "Normal / Due Soon / Expired" },
      { title: "Tool identity", detail: "Tool code / Serial number" },
      { title: "Schedule", detail: "Last / Every days / Next" },
      { title: "Owner", detail: "Tooling Store / QC Room" },
      { title: "Calibrate action", detail: "Update calibration date" },
      { title: "Expired risk", detail: "Blocked tool before use" },
    ],
  },
  {
    title: "History",
    src: "/projects/smart-factory-operations/tooling-history-real-20260528.png",
    icon: Clock,
    detail:
      "Provides traceability for item movement, stock changes, borrow/return activity, and historical investigation.",
    userSee: [
      { title: "Movement type", detail: "Stock In / Stock Out / Borrow" },
      { title: "Movement date", detail: "Transaction date-time" },
      { title: "Item identity", detail: "Code / Name / Photo" },
      { title: "Quantity change", detail: "Plus / Minus quantity" },
      { title: "Reference", detail: "SIN / JOB / ISS document" },
      { title: "User trace", detail: "Transaction owner" },
    ],
  },
  {
    title: "Predictive Usage",
    src: "/projects/smart-factory-operations/tooling-predictive-usage-real-20260528.png",
    icon: Activity,
    detail:
      "Shows predictive analysis with current stock, minimum stock, 7-day and 30-day forecast, confidence, trend, and reorder timing.",
    userSee: [
      { title: "Stock risk", detail: "Current / Minimum stock" },
      { title: "Forecast demand", detail: "7D / 30D forecast" },
      { title: "Confidence", detail: "Prediction confidence %" },
      { title: "Usage trend", detail: "Actual usage / Regression" },
      { title: "Stockout ETA", detail: "Days until stockout" },
      { title: "Reorder timing", detail: "Reorder ETA / Order qty" },
    ],
  },
  {
    title: "Reports",
    src: "/projects/smart-factory-operations/tooling-reports-real-20260528.png",
    icon: FileSpreadsheet,
    detail:
      "Shows report list, report type, generated date, rows, export type, and Excel export action for tooling evidence.",
    userSee: [
      { title: "Report list", detail: "Tool / Spare / Low stock / Movement" },
      { title: "Report type", detail: "Master / Stock / Movement" },
      { title: "Generated date", detail: "Last generated date" },
      { title: "Rows count", detail: "Report data size" },
      { title: "Export type", detail: "Excel output" },
      { title: "Actions", detail: "Edit / Delete / Export" },
    ],
  },
];

const toolingPainPoints = [
  "Stock checking depended on asking people or opening separate files, so availability was not clear before repair work.",
  "Borrowed tools were difficult to trace because owner, due date, return status, and history were not centralized.",
  "Low stock, stock out, and overdue items were found late, causing waiting time for Maintenance.",
  "Calibration status and movement history were hard to search when preparing audit or troubleshooting evidence.",
];

const toolingBenefits = [
  { label: "Scope", value: "Tool, spare part, borrow/return, stock movement, calibration, and history" },
  { label: "Before", value: "Manual stock check: 3 min/item" },
  { label: "After", value: "System lookup and transaction view: 2 min/item" },
  { label: "Saving", value: "8 items/day x 1 min saved = 8 min/day" },
  { label: "Cost", value: "8 / 60 x 102.27 = 13.64 THB/day" },
  { label: "Month / Year", value: "300 THB/month | 3,600 THB/year" },
];

const toolingFeatureFlow = [
  { label: "Maintenance Need", icon: Wrench },
  { label: "Search Tool / Spare Part", icon: Search },
  { label: "Check Stock / Status", icon: Store },
  { label: "Borrow / Return / Stock In-Out", icon: RotateCcw },
  { label: "MSSQL Transaction History", icon: Database },
  { label: "Report / Movement View", icon: BarChart3 },
];

const predictiveToolingFlow = [
  { label: "Stock Balance", icon: Store },
  { label: "Stock Out / PM Part Usage", icon: FileSpreadsheet },
  { label: "Upcoming PM Demand", icon: CalendarDays },
  { label: "Usage Forecast", icon: Activity },
  { label: "Reorder Suggestion", icon: BarChart3 },
];

const predictiveToolingCards = [
  {
    label: "Data Sources",
    value: "Stock balance, stock-out history, PM part usage, and upcoming PM plans",
  },
  {
    label: "Shortage Risk",
    value: "Flags high or critical items before Maintenance waits for missing parts",
  },
  {
    label: "Reorder Timing",
    value: "Shows stockout ETA, reorder ETA, and lead-time urgency",
  },
  {
    label: "Suggested Buy Qty",
    value: "Calculates order quantity from current stock, target stock, and forecast demand",
  },
];

const toolingConnectionFlow = [
  { label: "Admin Master Data", icon: Settings },
  { label: "Tooling Stock", icon: Store },
  { label: "Predictive Tooling Usage", icon: Activity },
  { label: "Job Request Repair Need", icon: Wrench },
  { label: "PM Tool / Spare Part Check", icon: ClipboardCheck },
  { label: "History and Reports", icon: Clock },
];

const pmSlides = [
  {
    title: "Preventive Dashboard",
    src: "/projects/smart-factory-operations/pm-dashboard-collapsed.png",
    icon: Gauge,
    detail:
      "Summarizes total PM plans, due today, overdue, completed, and NG results so Maintenance can see current factory readiness quickly.",
    userSee: [
      { title: "PM plan count", detail: "Total active PM plans" },
      { title: "Due today", detail: "Machines needing inspection today" },
      { title: "Overdue PM", detail: "PM work requiring follow-up" },
      { title: "Completed PM", detail: "Finished inspections in cycle" },
      { title: "NG result", detail: "Abnormal findings from inspection" },
      { title: "PM health mix", detail: "Completed / Due / Overdue / NG" },
    ],
  },
  {
    title: "PM Calendar View",
    src: "/projects/smart-factory-operations/pm-plan-calendar.png",
    icon: CalendarDays,
    detail:
      "Calendar view shows PM work by date, planned events, selected day detail, and action buttons for the next inspection step.",
    userSee: [
      { title: "PM schedule", detail: "Planned PM by calendar date" },
      { title: "Selected day", detail: "PM list for chosen date" },
      { title: "Due work", detail: "Machines waiting for inspection" },
      { title: "PM status", detail: "Due / Completed / Overdue / NG" },
      { title: "Inspection action", detail: "Open next PM inspection" },
      { title: "Planning view", detail: "Upcoming workload by day" },
    ],
  },
  {
    title: "PM Type Master",
    src: "/projects/smart-factory-operations/pm-setup-types.png",
    icon: ClipboardCheck,
    detail:
      "Users can create PM Type templates with default frequency, advance notification days, and checklist count for repeated inspection work.",
    userSee: [
      { title: "PM type list", detail: "Inspection templates by type" },
      { title: "Frequency", detail: "Daily / Weekly / Monthly cycle" },
      { title: "Advance notice", detail: "Reminder days before due date" },
      { title: "Checklist count", detail: "Number of inspection topics" },
      { title: "Template control", detail: "Add / Edit PM type" },
      { title: "Standard work", detail: "Reusable PM inspection format" },
    ],
  },
  {
    title: "Machine Mapping",
    src: "/projects/smart-factory-operations/pm-machine-mapping.png",
    icon: Network,
    detail:
      "One machine can be mapped to multiple PM Types, such as daily machine check, weekly lubrication, and monthly safety check.",
    userSee: [
      { title: "Machine list", detail: "Machines assigned to PM" },
      { title: "PM type mapping", detail: "PM templates linked to machine" },
      { title: "Multiple PM", detail: "More than one PM per machine" },
      { title: "Next due date", detail: "Upcoming inspection date" },
      { title: "Responsible area", detail: "Machine / area PM scope" },
      { title: "Mapping control", detail: "Add / Edit machine PM setup" },
    ],
  },
  {
    title: "Checklist Builder",
    src: "/projects/smart-factory-operations/pm-checklist-builder.png",
    icon: ListChecks,
    detail:
      "Users define their own checklist topics and input criteria, including OK/NG, number, dropdown, text, image, required fields, and min/max rules.",
    userSee: [
      { title: "Checklist topics", detail: "Inspection items by PM type" },
      { title: "Input type", detail: "OK/NG / Number / Text / Dropdown" },
      { title: "Required field", detail: "Mandatory inspection answer" },
      { title: "Min / Max rule", detail: "Numeric control limit" },
      { title: "Image evidence", detail: "Photo field for inspection proof" },
      { title: "Checklist control", detail: "Add / Edit inspection item" },
    ],
  },
  {
    title: "Inspection Form",
    src: "/projects/smart-factory-operations/pm-inspection-form.png",
    icon: ClipboardCheck,
    detail:
      "The inspection form is generated from the selected PM Type checklist, then stores OK/NG judgement, remarks, checker, parts used, and final submission.",
    userSee: [
      { title: "Machine context", detail: "Machine / PM type / Due date" },
      { title: "Checklist answer", detail: "Value / Dropdown / OK-NG input" },
      { title: "Auto result", detail: "Overall OK / NG judgement" },
      { title: "Item judgement", detail: "OK / NG / NA per checklist item" },
      { title: "Inspection remark", detail: "Finding and follow-up note" },
      { title: "Parts used", detail: "Spare part / Used qty / Return qty" },
      { title: "Submit result", detail: "Save PM inspection history" },
    ],
  },
  {
    title: "History / Report",
    src: "/projects/smart-factory-operations/pm-history-report.png",
    icon: FileSpreadsheet,
    detail:
      "History and report view keeps PM results searchable by date, machine, PM Type, and result, with export support for follow-up evidence.",
    userSee: [
      { title: "PM history", detail: "Completed inspection records" },
      { title: "Search scope", detail: "Date / Machine / PM type / Result" },
      { title: "Inspection result", detail: "OK / NG / Overdue evidence" },
      { title: "Checker trace", detail: "Who completed the PM" },
      { title: "Follow-up proof", detail: "Remark / image / result detail" },
      { title: "Export report", detail: "Excel evidence for audit" },
    ],
  },
  {
    title: "Email Reminder",
    src: "/projects/smart-factory-operations/pm-email-reminder.png",
    icon: Mail,
    detail:
      "Advance notification days can be used to send email reminders before the PM due date so teams know which machine needs action.",
    userSee: [
      { title: "Due reminder", detail: "PM coming soon notification" },
      { title: "Overdue alert", detail: "PM missed due date" },
      { title: "NG alert", detail: "Abnormal inspection result" },
      { title: "Machine target", detail: "Machine needing PM action" },
      { title: "Receiver list", detail: "Maintenance owner / related team" },
      { title: "Action link", detail: "Open PM record from email" },
    ],
  },
];

const pmPainPoints = [
  "PM topics were difficult to standardize when each machine or team used a different paper form or spreadsheet.",
  "Users needed a flexible way to define their own inspection items instead of hardcoding every PM checklist in the system.",
  "A machine can need more than one PM schedule, so the system needed machine-to-multiple-PM-Type mapping.",
  "Upcoming PM work was hard to see by date or area when users only had manual lists and separate history files.",
];

const pmBenefits = [
  { label: "Scope", value: "PM Type, checklist, machine mapping, plan, calendar, inspection, report, reminder" },
  { label: "Before", value: "35 min/PM record for manual record entry" },
  { label: "After", value: "30 min/PM record with digital record entry" },
  { label: "Saving", value: "7.5 records/week x 5 min saved / 5 days = 7.5 min/day" },
  { label: "Cost", value: "7.5 / 60 x 102.27 = 12.78 THB/day" },
  { label: "Month / Year", value: "281.25 THB/month | 3,375 THB/year" },
];

const pmCapabilityItems = [
  {
    title: "User-defined PM Type",
    detail: "Users create the PM Type and checklist topics themselves, so each machine group can have a practical inspection template.",
    icon: ListChecks,
  },
  {
    title: "Map PM Type to machine",
    detail: "A machine can use multiple PM Types with different frequency and next due date, such as daily, weekly, and monthly checks.",
    icon: Network,
  },
  {
    title: "Calendar and machine mapping",
    detail: "PM Plan supports list and calendar views, while machine mapping shows which PM Types are assigned to each machine.",
    icon: CalendarDays,
  },
  {
    title: "Email due reminder",
    detail: "Advance notify days give the system a clear rule for sending due-date reminders before PM work is missed.",
    icon: Mail,
  },
];

const pmFeatureFlow = [
  { label: "Create PM Type", icon: ClipboardCheck },
  { label: "Build Checklist", icon: ListChecks },
  { label: "Map to Machine", icon: Network },
  { label: "Generate PM Plan", icon: CalendarDays },
  { label: "Email Reminder", icon: Mail },
  { label: "Inspection Result", icon: CheckCircle2 },
  { label: "History / Report", icon: FileSpreadsheet },
];

const pmConnectionFlow = [
  { label: "Admin Machine Master", icon: Settings },
  { label: "PM Type Setup", icon: ClipboardCheck },
  { label: "Machine Mapping", icon: Network },
  { label: "Calendar / Layout", icon: CalendarDays },
  { label: "OK / NG Report", icon: BarChart3 },
];

const jobSlides = [
  {
    title: "Job Request Dashboard",
    src: "/projects/smart-factory-operations/job-dashboard-full.png",
    icon: BarChart3,
    detail:
      "Shows total request, WAIT MM, MM REPAIR, WAIT QC, QC INSPECTION, WAIT PROD CONFIRM, PROD CONFIRMING, completed jobs, filters, and bottleneck view.",
  },
  {
    title: "Production Create Request Modal",
    src: "/projects/smart-factory-operations/job-e2e-production-create-request.png",
    icon: Factory,
    detail:
      "Production creates a repair request with machine, area, machine type, priority, problem list, description, attachment, and initial status WAIT_MM.",
  },
  {
    title: "Maintenance Repair Modal",
    src: "/projects/smart-factory-operations/job-e2e-maintenance-repair-result-send-to-qc.png",
    icon: Wrench,
    detail:
      "Maintenance accepts the job, records causes, corrective actions, issued spare parts, repair detail, and sends the job to QC, Production Confirm, or Completed.",
  },
  {
    title: "QC Inspection Modal",
    src: "/projects/smart-factory-operations/job-e2e-qc-pass-to-production.png",
    icon: ClipboardCheck,
    detail:
      "QC checks the repaired machine, records inspection detail, accepts the repair, or rejects it back to Maintenance when the condition is still NG.",
  },
  {
    title: "Production Confirm Modal",
    src: "/projects/smart-factory-operations/job-e2e-production-accept-confirm.png",
    icon: CheckCircle2,
    detail:
      "Production confirms the repaired machine. If the machine condition is accepted, the job is completed. If rejected, the job returns to QC.",
  },
  {
    title: "Handover Job Modal",
    src: "/projects/smart-factory-operations/job-handover-action-modal-full.png",
    icon: RotateCcw,
    detail:
      "Handover transfers unfinished repair work to the next owner with reason, shift, pending items, and handover note.",
  },
  {
    title: "New Handover Modal",
    src: "/projects/smart-factory-operations/job-handover-new-modal-full.png",
    icon: Users,
    detail:
      "Supports shift change and unfinished work transfer so the next technician can continue from the same repair history.",
  },
];

const jobPainPoints = [
  "Repair status was followed by walking, phone calls, chat messages, and manual checking between Production, Maintenance, and QC.",
  "After handover or rejection, ownership became unclear because each department tracked the job from a different view.",
  "QC reject and Production reject were difficult to trace because the returned path and reason were not always visible in one timeline.",
  "MMS could show machine condition, but active repair ownership and job context needed to be connected with the repair workflow.",
];

const jobBenefits = [
  { label: "Job follow-up / Production confirm-check", value: "75 avg cases/day x 12 min saved = 900 min/day" },
  { label: "History lookup", value: "5 cases/day x 2 min saved = 10 min/day" },
  { label: "Total", value: "900 + 10 = 910 min/day" },
  { label: "Cost", value: "910 / 60 x 102.27 = 1,551.14 THB/day" },
  { label: "Month / Year", value: "34,125 THB/month | 409,500 THB/year" },
];

const jobSoundItems = [
  "Socket.IO sends job events to the responsible section room: production, maintenance, qc, or handover.",
  "Each section has a different Web Audio alert pattern so users can recognize the target workflow quickly.",
  "Alert sound loops while the SweetAlert notification is open and stops when the user closes or opens the job.",
  "Pending jobs also trigger alert logic when a user opens the section and there is actionable work waiting.",
];

const mmsRealtimeUpdates = [
  {
    label: "Machine match",
    value: "machine_no links the active repair job to the correct MMS machine card.",
  },
  {
    label: "Active job",
    value: "job_no and status show the current repair workflow state for each machine.",
  },
  {
    label: "Current owner",
    value: "owner updates after accept, repair action, QC action, production confirm, or handover.",
  },
  {
    label: "Progress by team",
    value: "prod_progress, mm_progress, and qc_progress show each department action and latest result.",
  },
  {
    label: "Latest timestamp",
    value: "updated_at shows the newest action time so the dashboard reflects the latest condition.",
  },
  {
    label: "Socket.IO event",
    value: "new job, accepted job, send to QC, reject, handover, and completed events update related users in realtime.",
  },
];

const lightboxGalleries: LightboxImage[][] = [
  overallImages.map((image) => ({ src: image.src, title: image.title, detail: image.caption })),
  adminImages.map((image) => ({ src: image.src, title: image.title, detail: image.caption })),
  mmsSlides.map((slide) => ({
    src: slide.src,
    title: slide.title,
    detail: slide.detail,
    points: "points" in slide ? slide.points : undefined,
    userSee: "userSee" in slide ? slide.userSee : undefined,
    guide: "guide" in slide ? slide.guide : undefined,
  })),
  toolingSlides.map((slide) => ({
    src: slide.src,
    title: slide.title,
    detail: slide.detail,
    userSee: "userSee" in slide ? slide.userSee : undefined,
  })),
  pmSlides.map((slide) => ({
    src: slide.src,
    title: slide.title,
    detail: slide.detail,
    userSee: "userSee" in slide ? slide.userSee : undefined,
  })),
  jobSlides.map((slide) => ({ src: slide.src, title: slide.title, detail: slide.detail })),
  [
    {
      src: "/projects/smart-factory-operations/project-lifecycle-flow.svg",
      title: "Project Lifecycle Flow",
      detail: "Observe shopfloor, interview users, map workflow, design DB/API/status flow, test E2E, and deploy with feedback.",
    },
    {
      src: "/projects/smart-factory-operations/development-workflow-flow.svg",
      title: "Development Workflow Flow",
      detail: "Git branch, frontend, backend API, MSSQL queries, Socket.IO events, E2E testing, CI/CD, and controlled release.",
    },
  ],
];

function resolveLightboxGallery(image: LightboxImage) {
  const normalized = {
    ...image,
    detail: image.detail ?? "Detailed project evidence image.",
  };

  for (const gallery of lightboxGalleries) {
    const index = gallery.findIndex((item) => item.src === image.src);
    if (index >= 0) {
      return { gallery, index };
    }
  }

  return { gallery: [normalized], index: 0 };
}

const benefitCalculations = [
  {
    feature: "MMS monitoring/report",
    before: "1.5 min/machine manual check",
    after: "0.5 min/machine dashboard scan",
    calculation: "100 machines x 1 min saved",
    saving: "100 min/day",
  },
  {
    feature: "Job follow-up / Production confirm-check",
    before: "20 min/job manual follow-up and production confirm-check",
    after: "8 min/job status-driven workflow with owner history",
    calculation: "75 avg cases/day x 12 min saved",
    saving: "900 min/day",
  },
  {
    feature: "Maintenance history lookup",
    before: "5 min/case manual search",
    after: "3 min/case system lookup",
    calculation: "5 cases/day x 2 min saved",
    saving: "10 min/day",
  },
  {
    feature: "Preventive Maintenance",
    before: "35 min/PM record manual record entry",
    after: "30 min/PM record digital record entry",
    calculation: "7.5 records/week x 5 min saved / 5 days",
    saving: "7.5 min/day",
  },
  {
    feature: "Tooling stock check",
    before: "3 min/item manual stock check",
    after: "2 min/item system lookup",
    calculation: "8 items/day x 1 min saved",
    saving: "8 min/day",
  },
];

const projectWorkingFlow = [
  { step: "Requirement & Analysis", detail: "Shopfloor Study, Workflow Summary, pain points, handover rules, and user scope" },
  { step: "System Architecture", detail: "Frontend: Next.js | Backend: Node.js/Express | Database: MSSQL | Realtime: Socket.IO" },
  { step: "Development", detail: "Build MMS Dashboard, Job Request, Preventive Maintenance, Toolling & Store, and Admin mode" },
  { step: "Testing", detail: "Unit test, Integration test, E2E test, and UAT with real users" },
  { step: "Deployment", detail: "CI/CD with GitLab workflow and deployment to PM2 on the factory server" },
  { step: "Maintenance & Monitoring", detail: "Support daily use, check PM2 process and logs, fix issues, and improve production workflow" },
];

const machineAreaSources = [
  {
    area: "Area 1",
    areaName: "Line A",
    machineCount: "30 machines",
    typeSummary: "4 types: Conveyor 10, Filling 8, Control Panel 6, Robot Arm 6",
    machine: "Machine + PLC",
    receiver: "IoT Box / Arduino Link",
    receiverNote: "1 box per 1 machine",
    gateway: "PC Gateway",
    gatewayNote: "MQTT relay",
    links: ["Modbus TCP", "MQTT"],
    accent: "cyan",
  },
  {
    area: "Area 2",
    areaName: "Line B",
    machineCount: "30 machines",
    typeSummary: "4 types: Pump 8, Mixer 8, Packing Machine 7, Labeler 7",
    machine: "Machine + PLC",
    receiver: "PC Gateway",
    receiverNote: "1 gateway per 1 area",
    gateway: null,
    gatewayNote: null,
    links: ["MC Protocol"],
    accent: "amber",
  },
  {
    area: "Area 3",
    areaName: "Packing",
    machineCount: "20 machines",
    typeSummary: "3 types: Sealer 8, Cartoner 6, Weigher 6",
    machine: "Machine + PLC",
    receiver: "PC Gateway",
    receiverNote: "1 gateway per 1 area",
    gateway: null,
    gatewayNote: null,
    links: ["MC Protocol"],
    accent: "amber",
  },
  {
    area: "Area 4",
    areaName: "Utility",
    machineCount: "20 machines",
    typeSummary: "3 types: Compressor 7, Chiller 7, Boiler 6",
    machine: "Machine + PLC",
    receiver: "PC Gateway",
    receiverNote: "1 gateway per 1 area",
    gateway: null,
    gatewayNote: null,
    links: ["MC Protocol"],
    accent: "amber",
  },
];

const machinePipeline = [
  { label: "Switching Hub", detail: "Factory LAN", icon: Network },
  { label: "MSSQL Server", detail: "Microsoft SQL Server", icon: Database },
  { label: "Backend API", detail: "Node.js / Express", icon: Server },
];

const machineBackendOutputs = [
  { label: "Web Dashboard / Socket.IO", detail: "Realtime monitoring", icon: Factory },
  { label: "Email Alert", detail: "Alert notification", icon: Mail },
];

const machineLegend = [
  { term: "PLC", meaning: "Programmable Logic Controller" },
  { term: "IoT", meaning: "Internet of Things" },
  { term: "Modbus TCP", meaning: "Modbus Transmission Control Protocol" },
  { term: "MC Protocol", meaning: "Mitsubishi Communication Protocol" },
  { term: "MQTT", meaning: "Message Queuing Telemetry Transport" },
  { term: "PC Gateway", meaning: "Personal Computer Gateway" },
  { term: "MSSQL", meaning: "Microsoft SQL Server" },
  { term: "API", meaning: "Application Programming Interface" },
  { term: "Socket.IO", meaning: "Realtime bidirectional communication library" },
];

function AnimatedHorizontalFlow({
  title,
  steps,
}: {
  title: string;
  steps: { label: string; icon: ComponentType<{ size?: number; className?: string }> }[];
}) {
  return (
    <div className="rounded-2xl border border-cyan-500/30 bg-slate-950 p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-lg font-black text-white">{title}</h3>
      </div>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        {steps.map((step, index) => (
          <div key={step.label} className="flex flex-col gap-3 lg:flex-1 lg:flex-row lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="relative min-h-[96px] rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-3 py-3 text-center text-xs font-black text-cyan-50 shadow-[0_0_25px_rgba(34,211,238,0.12)]"
            >
              <step.icon size={24} className="mx-auto mb-2 text-cyan-200" />
              <motion.span
                className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-cyan-300"
                animate={{ opacity: [0.35, 1, 0.35], scale: [0.9, 1.25, 0.9] }}
                transition={{ duration: 1.6, repeat: Infinity, delay: index * 0.12 }}
              />
              {step.label}
            </motion.div>
            {index < steps.length - 1 && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: index * 0.08 + 0.12, duration: 0.35 }}
                className="h-8 w-px origin-top self-center bg-cyan-400/60 lg:h-px lg:w-8 lg:origin-left"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function MmsMachineCardGuide() {
  const callouts = [
    { label: "Machine no", value: "SEA-P-004" },
    { label: "MMS status", value: "MM" },
    { label: "Job status", value: "MM REPAIR" },
    { label: "Job PIC", value: "MM-006 Anan S." },
    { label: "PM state", value: "LATE 8D" },
    { label: "Production result", value: "Output, OK, NG, OEE" },
  ];

  return (
    <div className="mt-6 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-4">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">Machine Card Reading Guide</p>
      <div className="mt-4 grid gap-4">
        <div className="relative mx-auto w-full max-w-[190px] rounded-2xl border-2 border-cyan-300/70 bg-slate-950 p-2 shadow-lg shadow-cyan-950/30">
          <Image
            src="/projects/smart-factory-operations/mms-machine-card-sea-p-004.png"
            alt="SEA-P-004 machine card"
            width={178}
            height={116}
            className="h-auto w-full rounded-xl"
          />
        </div>

        <div className="grid gap-2">
          {callouts.map((item) => (
            <div key={item.label} className="rounded-xl border border-cyan-400/20 bg-slate-950/60 p-3">
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-cyan-300">{item.label}</p>
              <p className="mt-1 text-sm font-black text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MachineDataFlowDiagram() {
  return (
    <section className="rounded-2xl border border-cyan-500/30 bg-slate-950 p-5 shadow-sm">
      <div className="mb-5 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">Machine Data Flow</p>
          <h3 className="mt-1 text-lg font-black text-white">4 area machine sources merge into one platform flow</h3>
          <p className="mt-2 max-w-3xl text-sm font-semibold leading-relaxed text-slate-300">
            Each machine has its own PLC. Area 1 uses IoT Box / Arduino Link per machine, then sends data to PC Gateway
            by MQTT. Areas 2-4 use one PC Gateway per area to read PLC data directly by MC Protocol.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center sm:min-w-[360px]">
          {[
            { value: "100", label: "Machines" },
            { value: "14", label: "Machine Types" },
            { value: "4", label: "Areas" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3 py-2">
              <p className="text-xl font-black text-white">{item.value}</p>
              <p className="text-[10px] font-black uppercase tracking-[0.12em] text-cyan-200">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-4 lg:items-start">
        {machineAreaSources.map((source, index) => {
          const isCyan = source.accent === "cyan";
          return (
            <motion.div
              key={source.area}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className={`self-start rounded-2xl border p-4 ${
                isCyan
                  ? "border-cyan-400/40 bg-cyan-400/10"
                  : "border-amber-400/40 bg-amber-400/10"
              }`}
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <p className="text-base font-black text-white">{source.area}</p>
                  <p className="mt-0.5 text-xs font-bold text-slate-300">
                    {source.areaName} | {source.machineCount}
                  </p>
                </div>
                <span
                  className={`rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em] ${
                    isCyan ? "bg-cyan-300 text-slate-950" : "bg-amber-300 text-slate-950"
                  }`}
                >
                  Source
                </span>
              </div>
              <div className="mb-3 rounded-lg border border-white/10 bg-slate-950/50 px-3 py-2">
                <p className="mt-1 text-[11px] font-semibold leading-relaxed text-slate-300">
                  {source.typeSummary}
                </p>
              </div>

              <div className="flex min-h-[76px] items-center gap-3 rounded-xl border border-white/10 bg-slate-950/70 p-3 text-left">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${isCyan ? "bg-cyan-400/10 text-cyan-200" : "bg-amber-400/10 text-amber-200"}`}>
                  <Cpu size={22} />
                </div>
                <div>
                  <p className="text-sm font-black text-white">{source.machine}</p>
                  <p className="mt-1 text-[11px] font-semibold leading-snug text-slate-300">Each machine has its own PLC</p>
                </div>
              </div>

              <div className="flex flex-col items-center py-2">
                <div className={`h-4 w-px ${isCyan ? "bg-cyan-300/70" : "bg-amber-300/70"}`} />
                <span
                  className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.1em] ${
                    isCyan
                      ? "border-cyan-300/50 bg-cyan-300/10 text-cyan-100"
                      : "border-amber-300/50 bg-amber-300/10 text-amber-100"
                  }`}
                >
                  {source.links[0]}
                </span>
                <div className={`h-4 w-px ${isCyan ? "bg-cyan-300/70" : "bg-amber-300/70"}`} />
              </div>

              <div className="flex min-h-[76px] items-center gap-3 rounded-xl border border-white/10 bg-slate-950/70 p-3 text-left">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${source.receiver.includes("IoT") ? "bg-cyan-400/10 text-cyan-200" : "bg-amber-400/10 text-amber-200"}`}>
                  {source.receiver.includes("IoT") ? <RadioTower size={22} /> : <MonitorDot size={22} />}
                </div>
                <div>
                  <p className="text-sm font-black text-white">{source.receiver}</p>
                  <p className="mt-1 text-[11px] font-semibold leading-snug text-slate-300">{source.receiverNote}</p>
                </div>
              </div>

              {source.gateway && (
                <>
                  <div className="flex flex-col items-center py-2">
                    <div className="h-4 w-px bg-cyan-300/70" />
                    <span className="rounded-full border border-cyan-300/50 bg-cyan-300/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.1em] text-cyan-100">
                      {source.links[1]}
                    </span>
                    <div className="h-4 w-px bg-cyan-300/70" />
                  </div>
                  <div className="flex min-h-[76px] items-center gap-3 rounded-xl border border-white/10 bg-slate-950/70 p-3 text-left">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-200">
                      <MonitorDot size={22} />
                    </div>
                    <div>
                      <p className="text-sm font-black text-white">{source.gateway}</p>
                      <p className="mt-1 text-[11px] font-semibold leading-snug text-slate-300">{source.gatewayNote}</p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="my-5 flex flex-col items-center gap-2">
        <div className="grid w-full grid-cols-4 gap-4">
          {machineAreaSources.map((source) => (
            <div key={`${source.area}-merge-line`} className="mx-auto h-8 w-px bg-cyan-400/50" />
          ))}
        </div>
        <div className="h-px w-full bg-cyan-400/40" />
        <div className="h-8 w-px bg-cyan-400/50" />
      </div>

      <div className="mb-5 flex items-center gap-3">
        <div className="h-px flex-1 bg-cyan-400/40" />
        <div className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-100">
          Merge all 4 area streams to Switching Hub
        </div>
        <div className="h-px flex-1 bg-cyan-400/40" />
      </div>

      <div className="grid gap-3 lg:grid-cols-4">
        {machinePipeline.map((step, index) => (
          <div key={step.label} className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 + 0.1 }}
              className="relative min-h-[104px] flex-1 rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-4 text-center shadow-[0_0_25px_rgba(34,211,238,0.12)]"
            >
              <step.icon size={24} className="mx-auto mb-2 text-cyan-200" />
              <p className="text-sm font-black text-white">{step.label}</p>
              <p className="mt-1 text-xs font-semibold leading-relaxed text-slate-300">{step.detail}</p>
              <motion.span
                className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-cyan-300"
                animate={{ opacity: [0.35, 1, 0.35], scale: [0.9, 1.25, 0.9] }}
                transition={{ duration: 1.6, repeat: Infinity, delay: index * 0.12 }}
              />
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: index * 0.08 + 0.22, duration: 0.35 }}
              className="h-8 w-px origin-top self-center bg-cyan-400/60 lg:h-px lg:w-8 lg:origin-left"
            />
          </div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: machinePipeline.length * 0.08 + 0.1 }}
          className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 p-3 shadow-[0_0_25px_rgba(34,211,238,0.12)]"
        >
          <p className="mb-2 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-100">
            Backend outputs / next step
          </p>
          <div className="grid gap-2">
            {machineBackendOutputs.map((output, index) => (
              <div key={output.label} className="rounded-lg border border-slate-800 bg-slate-950/70 px-3 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-300/40 bg-cyan-300/10 text-cyan-100">
                    <output.icon size={18} />
                  </div>
                  <div className="min-w-0">
                    {index === 1 && (
                      <span className="mb-1 inline-flex rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.12em] text-amber-200">
                        Next step
                      </span>
                    )}
                    <p className="text-sm font-black leading-tight text-white">{output.label}</p>
                    <p className="mt-0.5 text-xs font-semibold leading-snug text-slate-300">{output.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/50 px-3 py-2">
        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">Abbreviation Legend</p>
        <div className="flex flex-wrap gap-1.5">
          {machineLegend.map((item) => (
            <div key={item.term} className="rounded-md border border-slate-800 bg-slate-950/70 px-2 py-1">
              <p className="text-[10px] font-semibold leading-relaxed text-slate-400">
                <span className="font-black text-cyan-200">{item.term}</span> = {item.meaning}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlowCard({ title, subtitle, steps }: { title: string; subtitle: string; steps: { step: string; detail: string }[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-5">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-500">{subtitle}</p>
        <h3 className="mt-1 text-lg font-black text-slate-950 dark:text-white">{title}</h3>
      </div>
      <div className="space-y-3">
        {steps.map((item, index) => (
          <div key={`${item.step}-${index}`} className="grid grid-cols-[34px_1fr] gap-3">
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-xs font-black text-white"
              >
                {index + 1}
              </motion.div>
              {index < steps.length - 1 && <div className="mt-2 h-8 w-px bg-orange-200 dark:bg-orange-900/60" />}
            </div>
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 + 0.04 }}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-950/40"
            >
              <p className="text-sm font-black text-slate-950 dark:text-white">{item.step}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{item.detail}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LoopBackLabel({
  target,
  color = "amber",
}: {
  target: string;
  color?: "amber" | "orange";
}) {
  const colorClass =
    color === "orange"
      ? "border-orange-400/40 bg-orange-400/10 text-orange-100"
      : "border-amber-400/40 bg-amber-400/10 text-amber-100";

  return (
    <div className={`mt-3 rounded-xl border px-3 py-2 text-xs font-black uppercase tracking-[0.12em] ${colorClass}`}>
      <div className="flex items-center gap-2">
        <span className="text-base leading-none">&uarr;</span>
        <span>Loop back to {target}</span>
      </div>
    </div>
  );
}

function FlowScreenPreview({
  image,
  openLightbox,
  compact = false,
}: {
  image: LightboxImage;
  openLightbox: (image: LightboxImage) => void;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => openLightbox(image)}
      className={`relative w-full cursor-zoom-in overflow-hidden rounded-xl border border-white/10 bg-white text-left shadow-sm outline-none transition hover:border-cyan-300/70 focus-visible:ring-2 focus-visible:ring-cyan-300 ${
        compact ? "h-full min-h-[180px]" : "mt-3 h-44 sm:h-52"
      }`}
      aria-label={`Open ${image.title} image`}
    >
      <Image
        src={image.src}
        alt={image.title}
        fill
        className="object-contain p-1.5"
        sizes="(max-width: 768px) 100vw, 360px"
      />
      <span className="absolute bottom-2 left-2 rounded-full bg-slate-950/80 px-2 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-white">
        Web screen
      </span>
    </button>
  );
}

function FlowStepCard({
  eyebrow,
  title,
  detail,
  points,
  image,
  openLightbox,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  detail: string;
  points: string[];
  image: LightboxImage;
  openLightbox: (image: LightboxImage) => void;
  reverse?: boolean;
}) {
  return (
    <div className="grid gap-4 rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
      <div className={`flex flex-col justify-center text-left ${reverse ? "lg:order-2" : ""}`}>
        <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">{eyebrow}</p>
        <h4 className="mt-1 text-lg font-black text-white">{title}</h4>
        <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-200">{detail}</p>
        <div className="mt-4 grid gap-2">
          {points.map((point, index) => (
            <div
              key={point}
              className="grid grid-cols-[28px_1fr] gap-2 rounded-xl border border-cyan-400/20 bg-slate-950/40 p-2.5"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400/15 text-xs font-black text-cyan-100">
                {index + 1}
              </span>
              <p className="text-xs font-semibold leading-relaxed text-slate-200">{point}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={reverse ? "lg:order-1" : ""}>
        <FlowScreenPreview image={image} openLightbox={openLightbox} compact />
      </div>
    </div>
  );
}

function FlowWideScreenPreview({
  image,
  openLightbox,
}: {
  image: LightboxImage;
  openLightbox: (image: LightboxImage) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => openLightbox(image)}
      className="relative aspect-[16/10] w-full cursor-zoom-in overflow-hidden rounded-xl border border-teal-300/30 bg-white text-left shadow-sm outline-none transition hover:border-teal-200 focus-visible:ring-2 focus-visible:ring-teal-300"
      aria-label={`Open ${image.title} image`}
    >
      <Image
        src={image.src}
        alt={image.title}
        fill
        className="object-contain p-1"
        sizes="(max-width: 1024px) 100vw, 520px"
      />
      <span className="absolute bottom-3 left-3 rounded-full bg-slate-950/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-white">
        Full web screen
      </span>
    </button>
  );
}

function FlowDecisionBranches({
  options,
  openLightbox,
  lineClassName = "bg-cyan-300/70",
}: {
  options: {
    label: string;
    title: string;
    detail: string;
    className: string;
    labelClassName: string;
    image?: LightboxImage;
    loopBackTo?: string;
    loopColor?: "amber" | "orange";
  }[];
  openLightbox: (image: LightboxImage) => void;
  lineClassName?: string;
}) {
  return (
    <div className="relative mt-5 pt-8">
      <div className={`absolute left-1/2 top-0 hidden h-4 w-px -translate-x-1/2 md:block ${lineClassName}`} />
      <div className={`absolute left-1/4 right-1/4 top-4 hidden h-px md:block ${lineClassName}`} />
      <div className={`absolute left-1/4 top-4 hidden h-4 w-px -translate-x-1/2 md:block ${lineClassName}`} />
      <div className={`absolute left-3/4 top-4 hidden h-4 w-px -translate-x-1/2 md:block ${lineClassName}`} />

      <div className="grid gap-3 md:grid-cols-2">
        {options.map((option) => (
          <div key={option.label} className={`relative rounded-xl p-3 ${option.className}`}>
            <span
              className={`mb-2 inline-flex rounded-full border px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] ${option.labelClassName}`}
            >
              {option.label}
            </span>
            <p className="font-black">{option.title}</p>
            <p className="mt-1 text-sm font-semibold leading-relaxed text-slate-200">{option.detail}</p>
            {option.image && <FlowScreenPreview image={option.image} openLightbox={openLightbox} />}
            {option.loopBackTo && <LoopBackLabel target={option.loopBackTo} color={option.loopColor} />}
          </div>
        ))}
      </div>
    </div>
  );
}

function JobRequestFlowDiagram({ openLightbox }: { openLightbox: (image: LightboxImage) => void }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-cyan-300/40 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-5 shadow-sm">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">Job Request Flow Diagram</p>
          <h3 className="mt-1 text-lg font-black text-white">Repair workflow, handover decision, reject loops, and MMS context</h3>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs font-black text-slate-100 sm:grid-cols-4">
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-2">Main Flow</span>
          <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-2">Handover</span>
          <span className="rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-2">Reject Loop</span>
          <span className="rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-2">MMS Context</span>
        </div>
      </div>

      <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/60 p-4">
        <div className="mx-auto max-w-5xl space-y-3">
          <FlowStepCard
            eyebrow="Step 1"
            title="Production Create Job"
            detail="CREATE_JOB creates a repair request, sets status to WAIT_MM, emits new_job_request, and alerts the Maintenance room."
            points={[
              "Production selects machine, problem detail, priority, request detail, and related owner information.",
              "The job starts as WAIT_MM so Maintenance can see new work immediately.",
              "Socket.IO sends new_job_request and the alert sound to the Maintenance room.",
            ]}
            image={{
              src: "/projects/smart-factory-operations/job-e2e-production-create-request.png",
              title: "Production Create Job Screen",
            }}
            openLightbox={openLightbox}
          />

          <div className="flex justify-center text-2xl font-black text-cyan-300">↓</div>

          <FlowStepCard
            eyebrow="Step 2"
            title="Maintenance Accept / Repair"
            detail="Maintenance accepts ownership, changes WAIT_MM to MM_REPAIR, records repair detail, and continues from the same job timeline."
            points={[
              "Maintenance PIC accepts the job and becomes the current owner for repair follow-up.",
              "Repair detail, cause, action, spare usage, and repair note are saved into the job history.",
              "The same screen can continue to QC, Production Confirm, Completed, or Handover depending on the case.",
            ]}
            image={{
              src: "/projects/smart-factory-operations/job-e2e-maintenance-repair-result-send-to-qc.png",
              title: "Maintenance Repair Result Screen",
            }}
            openLightbox={openLightbox}
            reverse
          />

          <div className="flex justify-center text-2xl font-black text-amber-300">↓</div>

          <div className="rounded-2xl border border-amber-400/40 bg-amber-400/10 p-4">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-amber-300">Decision A: Shift Handover</p>
            <h4 className="mt-1 text-lg font-black text-white">End of shift?</h4>
            <FlowDecisionBranches
              openLightbox={openLightbox}
              lineClassName="bg-amber-300/70"
              options={[
                {
                  label: "No",
                  title: "Continue repair",
                  detail: "Continue repair flow with the same owner.",
                  className: "border border-cyan-400/20 bg-slate-950/50 text-cyan-200",
                  labelClassName: "border-cyan-400/30 bg-cyan-400/10 text-cyan-100",
                  image: {
                    src: "/projects/smart-factory-operations/job-e2e-maintenance-repair-result-send-to-qc.png",
                    title: "Continue Repair Screen",
                  },
                },
                {
                  label: "Yes",
                  title: "Check owner change",
                  detail: "Check whether the job must change owner before the next shift continues.",
                  className: "border border-amber-400/30 bg-amber-400/10 text-amber-200",
                  labelClassName: "border-amber-400/30 bg-amber-400/10 text-amber-100",
                  image: {
                    src: "/projects/smart-factory-operations/job-handover-action-modal-full.png",
                    title: "Handover Check Screen",
                  },
                },
              ]}
            />
          </div>

          <div className="flex justify-center text-2xl font-black text-amber-300">↓</div>

          <div className="rounded-2xl border border-amber-400/40 bg-amber-400/10 p-4">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-amber-300">Decision B: Owner Change</p>
            <h4 className="mt-1 text-lg font-black text-white">Need to change owner?</h4>
            <FlowDecisionBranches
              openLightbox={openLightbox}
              lineClassName="bg-amber-300/70"
              options={[
                {
                  label: "No",
                  title: "Same owner continues",
                  detail: "Same owner continues. Status does not change.",
                  className: "border border-cyan-400/20 bg-slate-950/50 text-cyan-200",
                  labelClassName: "border-cyan-400/30 bg-cyan-400/10 text-cyan-100",
                  image: {
                    src: "/projects/smart-factory-operations/job-e2e-maintenance-repair-result-send-to-qc.png",
                    title: "Same Owner Continues Screen",
                  },
                },
                {
                  label: "Yes",
                  title: "Save handover",
                  detail: "Save HANDOVER_JOB with reason, shift, pending item, note, same status, and new owner.",
                  className: "border border-amber-400/30 bg-amber-400/10 text-amber-200",
                  labelClassName: "border-amber-400/30 bg-amber-400/10 text-amber-100",
                  image: {
                    src: "/projects/smart-factory-operations/job-handover-new-modal-full.png",
                    title: "Save Handover Screen",
                  },
                  loopBackTo: "Maintenance Accept / Repair",
                  loopColor: "amber",
                },
              ]}
            />
            <p className="mt-3 rounded-xl border border-amber-400/20 bg-slate-950/50 p-3 text-sm font-black text-amber-100">
              &uarr; Handover loop: after saving handover, the next owner returns to Maintenance Accept / Repair and
              continues the same job.
            </p>
          </div>

          <div className="flex justify-center text-2xl font-black text-cyan-300">↓</div>

          <div className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-4">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">Decision C: Repair Result</p>
            <h4 className="mt-1 text-lg font-black text-white">Send to QC or Production Confirm?</h4>
            <FlowDecisionBranches
              openLightbox={openLightbox}
              options={[
                {
                  label: "Yes",
                  title: "Need QC",
                  detail: "Send job_wait_qc and move status to WAIT_QC / QC_INSPECTION.",
                  className: "border border-cyan-400/30 bg-slate-950/50 text-cyan-200",
                  labelClassName: "border-cyan-400/30 bg-cyan-400/10 text-cyan-100",
                  image: {
                    src: "/projects/smart-factory-operations/job-e2e-maintenance-repair-result-send-to-qc.png",
                    title: "Send Job to QC Screen",
                  },
                },
                {
                  label: "No",
                  title: "QC not required",
                  detail: "Send directly to WAIT_PROD_CONFIRM for Production confirmation.",
                  className: "border border-cyan-400/30 bg-slate-950/50 text-cyan-200",
                  labelClassName: "border-cyan-400/30 bg-cyan-400/10 text-cyan-100",
                  image: {
                    src: "/projects/smart-factory-operations/job-production-action-modal-full.png",
                    title: "Production Confirm Screen",
                  },
                },
              ]}
            />
          </div>

          <div className="flex justify-center text-2xl font-black text-cyan-300">↓</div>

          <div className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-4">
            <FlowStepCard
              eyebrow="Step 3"
              title="QC Inspection"
              detail="QC checks the repaired condition and records inspection result."
              points={[
                "QC opens the active job from WAIT_QC / QC_INSPECTION and reviews the repair history.",
                "Inspection result, judgement, and reason are recorded before sending the job forward.",
                "If the condition is still NG, QC rejects the job back to Maintenance with traceable reason.",
              ]}
              image={{
                src: "/projects/smart-factory-operations/job-e2e-qc-pass-to-production.png",
                title: "QC Inspection Screen",
              }}
              openLightbox={openLightbox}
            />
            <FlowDecisionBranches
              openLightbox={openLightbox}
              options={[
                {
                  label: "No",
                  title: "Reject Loop 1: QC Reject",
                  detail:
                    "QC_INSPECTION returns to MM_REPAIR when the repaired condition is still NG. Event: job_rejected_by_qc.",
                  className: "border border-orange-400/40 bg-orange-400/10 text-orange-200",
                  labelClassName: "border-orange-400/30 bg-orange-400/10 text-orange-100",
                  image: {
                    src: "/projects/smart-factory-operations/job-e2e-qc-reject-to-maintenance.png",
                    title: "QC Reject to Maintenance Screen",
                  },
                  loopBackTo: "Maintenance Accept / Repair",
                  loopColor: "orange",
                },
                {
                  label: "Yes",
                  title: "Pass",
                  detail: "QC pass sends the job to WAIT_PROD_CONFIRM for Production confirmation.",
                  className: "border border-cyan-400/30 bg-slate-950/50 text-cyan-200",
                  labelClassName: "border-cyan-400/30 bg-cyan-400/10 text-cyan-100",
                  image: {
                    src: "/projects/smart-factory-operations/job-e2e-qc-pass-to-production.png",
                    title: "QC Pass Screen",
                  },
                },
              ]}
            />
          </div>

          <div className="flex justify-center text-2xl font-black text-cyan-300">↓</div>

          <div className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-4">
            <FlowStepCard
              eyebrow="Step 4"
              title="Production Confirm"
              detail="Production verifies the machine after repair and confirms whether the result is accepted for operation."
              points={[
                "Production checks the repaired machine before accepting the job as ready for operation.",
                "If the result is not accepted, the job returns to QC so the reject path stays visible.",
                "If accepted, the job becomes COMPLETED and the final timeline is stored as maintenance history.",
            ]}
            image={{
              src: "/projects/smart-factory-operations/job-e2e-production-accept-confirm.png",
              title: "Production Confirmation Screen",
            }}
              openLightbox={openLightbox}
              reverse
            />
            <FlowDecisionBranches
              openLightbox={openLightbox}
              options={[
                {
                  label: "No",
                  title: "Reject Loop 2: Production Reject",
                  detail:
                    "PROD_CONFIRMING returns to WAIT_QC when Production does not accept the result. Event: job_rejected_by_production.",
                  className: "border border-orange-400/40 bg-orange-400/10 text-orange-200",
                  labelClassName: "border-orange-400/30 bg-orange-400/10 text-orange-100",
                  image: {
                    src: "/projects/smart-factory-operations/job-e2e-production-reject-to-qc.png",
                    title: "Production Reject to QC Screen",
                  },
                  loopBackTo: "QC Inspection",
                  loopColor: "orange",
                },
                {
                  label: "Yes",
                  title: "Confirm",
                  detail: "Job becomes COMPLETED and is stored in the repair history timeline.",
                  className: "border border-emerald-400/40 bg-emerald-400/10 text-emerald-200",
                  labelClassName: "border-emerald-400/30 bg-emerald-400/10 text-emerald-100",
                  image: {
                    src: "/projects/smart-factory-operations/job-e2e-production-complete.png",
                    title: "Production Complete Screen",
                  },
                },
              ]}
            />
          </div>

          <div className="flex justify-center text-2xl font-black text-teal-300">↓</div>

          <div className="rounded-2xl border border-teal-400/40 bg-teal-400/10 p-4">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-teal-300">
              MMS Realtime Job Context
            </p>
            <h4 className="mt-1 text-lg font-black text-white">Machine status + repair ownership in one view</h4>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-200">
              MMS Dashboard reads the active job by machine and updates the machine card, job overlay, and job status
              filter when Job Request changes.
            </p>
            <div className="mt-4 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="flex flex-col gap-3">
                <FlowWideScreenPreview
                  image={{
                    src: "/projects/smart-factory-operations/mms-overview-full-data.png",
                    title: "MMS Dashboard Active Job Context Screen",
                  }}
                  openLightbox={openLightbox}
                />

                <div className="rounded-xl border border-cyan-400/20 bg-slate-950/50 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">Realtime Data Flow</p>
                  <div className="mt-3 space-y-1.5 text-sm font-black text-slate-100">
                    {[
                      "Job Request action",
                      "Update MSSQL",
                      "Socket.IO event",
                      "MMS reads active job",
                      "Dashboard updates",
                    ].map((step, index, steps) => (
                      <div key={step}>
                        <div className="flex min-h-[38px] items-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 leading-snug">
                          <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400/20 text-xs text-cyan-100">
                            {index + 1}
                          </span>
                          {step}
                        </div>
                        {index < steps.length - 1 && (
                          <div className="pl-5 text-lg leading-none text-cyan-300">↓</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="rounded-xl border border-teal-300/30 bg-slate-950/50 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-teal-300">
                    Realtime Updates Sent to MMS
                  </p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {mmsRealtimeUpdates.map((item) => (
                      <div key={item.label} className="rounded-lg border border-teal-400/20 bg-teal-400/10 p-3">
                        <p className="text-sm font-black text-teal-100">{item.label}</p>
                        <p className="mt-1 text-xs font-semibold leading-relaxed text-slate-200">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function JobRequestReadableFlowDiagram({ openLightbox }: { openLightbox: (image: LightboxImage) => void }) {
  const mainFlow = [
    {
      eyebrow: "Step 1",
      title: "Production creates repair request",
      detail: "Production opens a job for a machine problem. The job starts as WAIT_MM and Maintenance receives the work.",
      points: [
        "Select machine, problem, priority, request detail, and attachment.",
        "Status becomes WAIT_MM so Maintenance can see new work.",
        "The job number becomes the shared reference for every team.",
      ],
      image: {
        src: "/projects/smart-factory-operations/job-e2e-production-create-request.png",
        title: "Production Create Job Screen",
      },
    },
    {
      eyebrow: "Step 2",
      title: "Maintenance accepts and repairs",
      detail: "Maintenance takes ownership, changes the job to MM_REPAIR, records the repair action, and decides the next route.",
      points: [
        "Maintenance PIC accepts the job and becomes the current owner.",
        "Cause, action, repair detail, and spare usage are saved in history.",
        "After repair, the job can go to QC, Production confirm, or complete if no further check is needed.",
      ],
      image: {
        src: "/projects/smart-factory-operations/job-e2e-maintenance-repair-result-send-to-qc.png",
        title: "Maintenance Repair Result Screen",
      },
    },
    {
      eyebrow: "Step 3",
      title: "QC inspects repair result",
      detail: "QC checks the repaired condition when QC verification is required. The result is recorded before the job moves forward.",
      points: [
        "QC reviews the repair history and machine condition.",
        "If the repair is accepted, the job moves to Production confirmation.",
        "If the repair is rejected, the job returns to Maintenance with a visible reason.",
      ],
      image: {
        src: "/projects/smart-factory-operations/job-e2e-qc-pass-to-production.png",
        title: "QC Inspection Screen",
      },
    },
    {
      eyebrow: "Step 4",
      title: "Production confirms and closes",
      detail: "Production confirms that the machine can return to operation. Accepted jobs become completed repair history.",
      points: [
        "Production checks the repaired machine from the user side.",
        "Accepted result closes the job as COMPLETED.",
        "Rejected result returns to QC so the reason and owner remain traceable.",
      ],
      image: {
        src: "/projects/smart-factory-operations/job-e2e-production-accept-confirm.png",
        title: "Production Confirmation Screen",
      },
    },
  ];

  const rejectLoops = [
    {
      title: "QC rejects to Maintenance",
      detail: "If QC finds the repair is still NG, the job goes back to Maintenance repair with reject reason and history.",
      image: {
        src: "/projects/smart-factory-operations/job-e2e-qc-reject-to-maintenance.png",
        title: "QC Reject to Maintenance Screen",
      },
      loopBackTo: "Maintenance accepts and repairs",
    },
    {
      title: "Production rejects to QC",
      detail: "If Production does not accept the final condition, the job goes back to QC for recheck before returning to repair if needed.",
      image: {
        src: "/projects/smart-factory-operations/job-e2e-production-reject-to-qc.png",
        title: "Production Reject to QC Screen",
      },
      loopBackTo: "QC inspects repair result",
    },
  ];

  const handoverFlow = [
    {
      title: "Unfinished repair work",
      detail: "The job is still active, but the current owner cannot finish it in the same shift.",
    },
    {
      title: "Open handover action",
      detail: "The current owner records why the job must be handed over and what is still pending.",
      image: {
        src: "/projects/smart-factory-operations/job-handover-action-modal-full.png",
        title: "Handover Action Screen",
      },
    },
    {
      title: "Assign next owner",
      detail: "Select the next owner or next shift, add pending items, and save the handover note.",
      image: {
        src: "/projects/smart-factory-operations/job-handover-new-modal-full.png",
        title: "New Handover Screen",
      },
    },
    {
      title: "Next owner continues same job",
      detail: "The job keeps the same job number and status, but the current owner changes. The next owner continues from the same repair history.",
    },
  ];

  return (
    <section className="overflow-hidden rounded-2xl border border-cyan-300/40 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-5 shadow-sm">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">Job Request Flow</p>
          <h3 className="mt-1 text-lg font-black text-white">Repair ownership flow with reject loops and separate handover flow</h3>
          <p className="mt-2 max-w-3xl text-sm font-semibold leading-relaxed text-slate-300">
            The main flow explains how Production, Maintenance, and QC close a repair job. Handover is separated because
            it does not close the job; it only transfers unfinished work to the next owner.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs font-black text-slate-100 sm:grid-cols-3">
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-2">Main Flow</span>
          <span className="rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-2">Reject Loop</span>
          <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-2">Handover Flow</span>
        </div>
      </div>

      <div className="space-y-5">
        <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/60 p-4">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">Main Repair Flow</p>
          <h4 className="mt-1 text-lg font-black text-white">From request to completed repair history</h4>
          <div className="mt-4 space-y-3">
            {mainFlow.map((step, index) => (
              <div key={step.title}>
                <FlowStepCard
                  eyebrow={step.eyebrow}
                  title={step.title}
                  detail={step.detail}
                  points={step.points}
                  image={step.image}
                  openLightbox={openLightbox}
                  reverse={index % 2 === 1}
                />
                {index < mainFlow.length - 1 && (
                  <div className="flex justify-center py-1 text-2xl font-black text-cyan-300">&darr;</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-orange-400/30 bg-orange-400/10 p-4">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-300">Reject Loop</p>
          <h4 className="mt-1 text-lg font-black text-white">Rejected work returns to the responsible step</h4>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {rejectLoops.map((loop) => (
              <div key={loop.title} className="rounded-2xl border border-orange-400/30 bg-slate-950/50 p-4">
                <h5 className="text-base font-black text-white">{loop.title}</h5>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-200">{loop.detail}</p>
                <FlowScreenPreview image={loop.image} openLightbox={openLightbox} />
                <LoopBackLabel target={loop.loopBackTo} color="orange" />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-4">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-amber-300">Separate Handover Flow</p>
          <h4 className="mt-1 text-lg font-black text-white">Shift handover changes owner, not the repair process</h4>
          <div className="mt-4 grid gap-3 lg:grid-cols-4">
            {handoverFlow.map((step, index) => (
              <div key={step.title} className="relative rounded-2xl border border-amber-400/25 bg-slate-950/55 p-4">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400/20 text-xs font-black text-amber-100">
                  {index + 1}
                </span>
                <h5 className="mt-3 text-base font-black text-white">{step.title}</h5>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-200">{step.detail}</p>
                {step.image && <FlowScreenPreview image={step.image} openLightbox={openLightbox} />}
                {index < handoverFlow.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-2xl font-black text-amber-300 lg:block">
                    &rarr;
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 rounded-xl border border-amber-400/20 bg-slate-950/50 p-3 text-sm font-black text-amber-100">
            Handover keeps the same repair job traceable: same job number, same machine, same history, new current owner.
          </p>
        </div>

        <div className="rounded-2xl border border-teal-400/30 bg-teal-400/10 p-4">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-teal-300">MMS Realtime Context</p>
          <h4 className="mt-1 text-lg font-black text-white">Machine card shows active repair context</h4>
          <div className="mt-4 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <FlowWideScreenPreview
              image={{
                src: "/projects/smart-factory-operations/mms-overview-full-data.png",
                title: "MMS Dashboard Active Job Context Screen",
              }}
              openLightbox={openLightbox}
            />
            <div className="grid gap-2 sm:grid-cols-2">
              {mmsRealtimeUpdates.map((item) => (
                <div key={item.label} className="rounded-lg border border-teal-400/20 bg-slate-950/50 p-3">
                  <p className="text-sm font-black text-teal-100">{item.label}</p>
                  <p className="mt-1 text-xs font-semibold leading-relaxed text-slate-200">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PredictiveMaintenanceModal({ project, onClose }: Props) {
  const [activeTab, setActiveTab] = useState(getInitialActiveTab);
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null);
  const [lightboxGallery, setLightboxGallery] = useState<LightboxImage[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [mmsSlideIndex, setMmsSlideIndex] = useState(0);
  const [toolingSlideIndex, setToolingSlideIndex] = useState(0);
  const [pmSlideIndex, setPmSlideIndex] = useState(0);
  const [jobSlideIndex, setJobSlideIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    try {
      window.localStorage.setItem(activeTabStorageKey, tab);
    } catch {
      // Keep tab switching usable if localStorage is unavailable.
    }
  };

  const openLightbox = (image: LightboxImage) => {
    const { gallery, index } = resolveLightboxGallery(image);
    setLightboxGallery(gallery);
    setLightboxIndex(index);
    setLightboxImage(gallery[index] ?? image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxGallery([]);
    setLightboxIndex(0);
  };

  const showLightboxImage = (direction: -1 | 1) => {
    if (lightboxGallery.length <= 1) return;
    const nextIndex = (lightboxIndex + direction + lightboxGallery.length) % lightboxGallery.length;
    setLightboxIndex(nextIndex);
    setLightboxImage(lightboxGallery[nextIndex]);
  };

  useEffect(() => {
    if (!lightboxImage) return;

    const handleLightboxKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTypingTarget =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.tagName === "SELECT" ||
        target?.isContentEditable;

      if (isTypingTarget) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showLightboxImage(-1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showLightboxImage(1);
      }

      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleLightboxKeyDown);
    return () => window.removeEventListener("keydown", handleLightboxKeyDown);
  }, [lightboxImage, lightboxGallery, lightboxIndex]);

  const activeMmsSlide = mmsSlides[mmsSlideIndex];
  const activeMmsSlideSummary = "summary" in activeMmsSlide ? activeMmsSlide.summary : activeMmsSlide.detail;
  const activeToolingSlide = toolingSlides[toolingSlideIndex];
  const activePmSlide = pmSlides[pmSlideIndex];
  const activeJobSlide = jobSlides[jobSlideIndex];
  const activeLightboxImage = lightboxGallery[lightboxIndex] ?? lightboxImage;
  const canNavigateLightbox = lightboxGallery.length > 1;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 pt-[80px] sm:p-6">
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
          className="relative flex h-[calc(100vh-100px)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-950"
        >
          <div className="relative z-30 flex shrink-0 items-center justify-between border-b border-slate-200 bg-white px-6 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <div className="min-w-0 pr-4">
              <h2 className="truncate text-lg font-black text-slate-900 dark:text-white sm:text-2xl">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="shrink-0 rounded-full bg-slate-100 p-2 text-slate-600 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <div className="relative h-80 w-full overflow-hidden bg-slate-950 text-left">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-30"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/35" />
              <div className="absolute inset-0 flex flex-col justify-center px-5 sm:px-10">
                <div className="max-w-2xl">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    Highlight Project
                  </p>
                  <h2 className="mt-2 max-w-xl text-2xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                    Smart Factory Operation Platform
                  </h2>
                  <p className="mt-3 max-w-xl text-xs font-bold leading-relaxed text-slate-300 sm:text-sm">
                    Connects machine data, repair workflow, QC confirmation, PM, tooling, and admin master data into
                    one traceable real-time platform for a 100-machine operation scope.
                  </p>
                  <div className="mt-4 grid max-w-xl grid-cols-2 gap-2 sm:grid-cols-4">
                    {[
                      { value: "100", label: "Machines" },
                      { value: "1,025.5 min", label: "Saved / Day" },
                      { value: "17.1 hr", label: "Reduced / Day" },
                      { value: "38,456 THB", label: "Saved / Month" },
                    ].map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-xl border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-center backdrop-blur"
                      >
                        <p className="text-base font-black text-white sm:text-xl">{metric.value}</p>
                        <p className="mt-0.5 text-[9px] font-black uppercase tracking-wide text-cyan-200">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-8">
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-orange-100 px-3 py-1.5 text-xs font-bold text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="sticky top-0 z-20 -mx-4 mb-8 border-b border-slate-200 bg-white/95 px-4 pt-2 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95 sm:-mx-8 sm:px-8">
                <div className="grid grid-cols-2 gap-2 pb-2 sm:grid-cols-3 lg:grid-cols-7">
                  {tabs.map((tab) => {
                    const isActive = activeTab === tab;
                    return (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => handleTabChange(tab)}
                        className={`min-w-0 rounded-xl border px-2 py-2 text-center text-[11px] font-black leading-tight transition-colors xl:text-xs ${
                          isActive
                            ? "border-orange-500 bg-orange-500 text-white shadow-sm"
                            : "border-slate-200 bg-white text-slate-600 hover:border-orange-300 hover:text-orange-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-orange-700"
                        }`}
                      >
                        {tab}
                      </button>
                    );
                  })}
                </div>
              </div>

              {activeTab === "Over All" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-10"
                >
                  <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-white shadow-sm">
                    <div className="grid gap-6 p-5 lg:grid-cols-[1.1fr_0.9fr] lg:p-7">
                      <div>
                        <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-cyan-300">Over All</p>
                        <h3 className="text-3xl font-black leading-tight">
                          Smart Factory Operation Platform
                        </h3>
                        <p className="mt-4 text-sm leading-relaxed text-slate-300">
                          A real maintenance management system that connects machine data, repair workflow, QC confirmation,
                          preventive maintenance, predictive tooling usage, tooling inventory, and admin master data into one traceable real-time
                          platform for a 100-machine operation scope. Machine-side data, shared status, shared history,
                          MSSQL Server, backend APIs, and Socket.IO updates help teams work from the same source of truth.
                        </p>
                        <div className="mt-5 grid grid-cols-3 gap-3">
                          {scopeMetrics.map((metric) => (
                            <motion.div
                              key={metric.label}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-3 text-center"
                            >
                              <div className="text-2xl font-black text-white">{metric.value}</div>
                              <div className="mt-1 text-[10px] font-black uppercase tracking-wide text-cyan-200">{metric.label}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {benefitMetrics.slice(0, 4).map((metric, index) => (
                          <motion.div
                            key={`${metric.label}-${metric.value}`}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.08 }}
                            className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-center"
                          >
                            <div className="text-xl font-black text-white">{metric.value}</div>
                            <div className="mt-1 text-[10px] font-black uppercase tracking-wide text-emerald-200">{metric.label}</div>
                          </motion.div>
                        ))}
                        <div className="col-span-2 rounded-xl border border-orange-400/30 bg-orange-400/10 p-4 text-center">
                          <div className="text-lg font-black text-white">38,456 THB/month | 461,475 THB/year</div>
                          <div className="mt-1 text-[10px] font-black uppercase tracking-wide text-orange-200">
                            Labor-time cost saving from all core features
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                      <button
                        type="button"
                        onClick={() =>
                          openLightbox({
                            src: "/projects/smart-factory-operations/old-working-process-flow.svg",
                            title: "Old Working Process Flow",
                          })
                        }
                        className="relative aspect-video w-full cursor-zoom-in overflow-hidden rounded-xl border border-slate-200 bg-slate-100 text-left outline-none transition hover:border-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-slate-800 dark:bg-slate-950"
                        aria-label="Open Old Working Process Flow image"
                      >
                        <Image
                          src="/projects/smart-factory-operations/old-working-process-flow.svg"
                          alt="Old working process flow before Smart Factory Operation Platform"
                          fill
                          className="object-contain"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                      </button>
                      <div>
                        <h3 className="mb-3 text-lg font-black text-slate-950 dark:text-white">Old Working Problem</h3>
                        <ul className="space-y-2 text-sm font-semibold leading-relaxed text-slate-700 dark:text-slate-300">
                          <li className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                            <span>
                              Production, Maintenance, QC, PM, and Tooling worked with separated data, so teams had to
                              walk, call, use chat, paper notes, or spreadsheets to follow work status.
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                            <span>Repair ownership and machine condition were difficult to confirm from one source.</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                            <span>Ownership became unclear after handover between departments.</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                            <span>Response was slower, and maintenance history was difficult to trace.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <FlowCard
                    title="Project Working Flow"
                    subtitle="End-to-end workflow"
                    steps={projectWorkingFlow}
                  />

                  <MachineDataFlowDiagram />

                  <section className="rounded-2xl border border-orange-300 bg-gradient-to-br from-orange-50 via-white to-cyan-50 p-5 shadow-sm dark:border-orange-900/50 dark:from-orange-950/20 dark:via-slate-900 dark:to-cyan-950/20">
                    <div className="mb-5">
                      <h3 className="text-lg font-black text-slate-950 dark:text-white">Platform Module Connection</h3>
                    </div>
                    <div className="grid gap-3 md:grid-cols-2">
                      {platformModules.map((module, index) => {
                        const Icon = module.icon;
                        const isUpcoming = module.status === "Upcoming";
                        return (
                          <button
                            key={module.title}
                            type="button"
                            onClick={() => handleTabChange(module.tab)}
                            className={`group relative overflow-hidden rounded-xl border p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-orange-400 hover:shadow-md ${
                              isUpcoming
                                ? "border-orange-300 bg-orange-50 dark:border-orange-600 dark:bg-orange-950/20"
                                : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950/70 dark:hover:border-orange-600"
                            }`}
                          >
                            <div className="absolute inset-y-0 left-0 w-1 bg-orange-500 opacity-70" />
                            <div className="flex items-start gap-3">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-700 transition group-hover:bg-orange-500 group-hover:text-white dark:bg-orange-900/30 dark:text-orange-300">
                                <Icon size={19} />
                              </div>
                              <div>
                                <div className="mb-1 flex items-center gap-2">
                                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-950 text-[10px] font-black text-white dark:bg-slate-800">
                                    {index + 1}
                                  </span>
                                  <p className="text-sm font-black text-slate-950 dark:text-white">{module.title}</p>
                                  {isUpcoming && (
                                    <span className="rounded-full border border-orange-300 bg-orange-100 px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.1em] text-orange-700 dark:border-orange-700 dark:bg-orange-950 dark:text-orange-200">
                                      Upcoming
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs font-semibold leading-relaxed text-slate-600 dark:text-slate-300">{module.detail}</p>
                                <p className="mt-2 text-[10px] font-black uppercase tracking-wide text-orange-600 opacity-80 dark:text-orange-300">
                                  Open {module.tab}
                                </p>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </section>

                  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-500">Benefit Calculation</p>
                        <h3 className="mt-1 text-lg font-black text-slate-950 dark:text-white">
                          Estimated operational impact from all core features
                        </h3>
                      </div>
                      <div className="rounded-xl bg-emerald-50 px-4 py-2 text-xs font-black text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300">
                        Basis: 100 machines | 14 types | 4 areas | 102.27 THB/hr (from 18,000 THB/month salary) | 22 days/month | 8 hr/day
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
                      <div className="hidden grid-cols-[1fr_1.05fr_1.05fr_1.05fr_0.65fr] bg-slate-100 px-4 py-3 text-xs font-black uppercase tracking-wide text-slate-500 dark:bg-slate-950 dark:text-slate-400 lg:grid">
                        <span>Feature</span>
                        <span>Before</span>
                        <span>After</span>
                        <span>Calculation</span>
                        <span className="text-right">Saving</span>
                      </div>
                      {benefitCalculations.map((item) => (
                        <div
                          key={item.feature}
                          className="grid gap-3 border-t border-slate-200 px-4 py-3 text-sm dark:border-slate-800 lg:grid-cols-[1fr_1.05fr_1.05fr_1.05fr_0.65fr]"
                        >
                          <div>
                            <p className="mb-1 text-[10px] font-black uppercase tracking-wide text-slate-400 lg:hidden">
                              Feature
                            </p>
                            <span className="font-semibold text-slate-700 dark:text-slate-300">{item.feature}</span>
                          </div>
                          <div>
                            <p className="mb-1 text-[10px] font-black uppercase tracking-wide text-slate-400 lg:hidden">
                              Before
                            </p>
                            <span className="text-xs font-bold leading-relaxed text-slate-500 dark:text-slate-400">
                              {item.before}
                            </span>
                          </div>
                          <div>
                            <p className="mb-1 text-[10px] font-black uppercase tracking-wide text-slate-400 lg:hidden">
                              After
                            </p>
                            <span className="text-xs font-bold leading-relaxed text-emerald-700 dark:text-emerald-300">
                              {item.after}
                            </span>
                          </div>
                          <div>
                            <p className="mb-1 text-[10px] font-black uppercase tracking-wide text-slate-400 lg:hidden">
                              Calculation
                            </p>
                            <span className="font-mono text-xs font-bold leading-relaxed text-slate-500 dark:text-slate-400">
                              {item.calculation}
                            </span>
                          </div>
                          <div>
                            <p className="mb-1 text-[10px] font-black uppercase tracking-wide text-slate-400 lg:hidden">
                              Saving
                            </p>
                            <span className="font-black text-orange-600 dark:text-orange-300 lg:block lg:text-right">
                              {item.saving}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 grid gap-3 md:grid-cols-3">
                      <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-950/50">
                        <p className="text-xs font-black uppercase text-slate-500">Total time</p>
                        <p className="mt-1 text-sm font-black text-slate-950 dark:text-white">
                          100 + 900 + 10 + 7.5 + 8 = 1,025.5 min/day
                        </p>
                      </div>
                      <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-950/50">
                        <p className="text-xs font-black uppercase text-slate-500">Cost saving</p>
                        <p className="mt-1 text-sm font-black text-slate-950 dark:text-white">
                          18,000 / 22 / 8 = 102.27 THB/hr; 1,025.5 / 60 = 17.09 hr/day; x 102.27 = 1,748.01 THB/day
                        </p>
                      </div>
                      <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-950/50">
                        <p className="text-xs font-black uppercase text-slate-500">Month / year</p>
                        <p className="mt-1 text-sm font-black text-slate-950 dark:text-white">
                          1,748.01 x 22 = 38,456 THB/month; x 12 = 461,475 THB/year
                        </p>
                      </div>
                    </div>
                  </section>

                  <section className="rounded-2xl border border-cyan-200 bg-white p-5 shadow-sm dark:border-cyan-900/50 dark:bg-slate-900">
                    <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-500">Way 2</p>
                        <h3 className="mt-1 text-lg font-black text-slate-950 dark:text-white">
                          Production-loss risk reduction from the same saved time
                        </h3>
                      </div>
                      <div className="rounded-xl bg-cyan-50 px-4 py-2 text-xs font-black leading-relaxed text-cyan-700 dark:bg-cyan-950/30 dark:text-cyan-300">
                        Cycle time: 480 min/day / 393.5 pcs/man/day = 1.22 min/pc
                      </div>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {productionRiskMetrics.map((metric) => (
                        <div
                          key={`${metric.label}-${metric.value}`}
                          className="rounded-xl border border-cyan-100 bg-cyan-50 p-4 text-center dark:border-cyan-900/50 dark:bg-cyan-950/20"
                        >
                          <p className="text-xl font-black text-slate-950 dark:text-white">{metric.value}</p>
                          <p className="mt-1 text-xs font-black uppercase tracking-wide text-slate-500 dark:text-slate-400">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 grid gap-3 md:grid-cols-3">
                      <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-950/50">
                        <p className="text-xs font-black uppercase text-slate-500">Per day</p>
                        <p className="mt-1 text-sm font-black leading-relaxed text-slate-950 dark:text-white">
                          1,025.5 min/day / 1.22 min/pc = 841 pcs/day; x 44.73 = 37,604 THB/day
                        </p>
                      </div>
                      <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-950/50">
                        <p className="text-xs font-black uppercase text-slate-500">Per month</p>
                        <p className="mt-1 text-sm font-black leading-relaxed text-slate-950 dark:text-white">
                          841 pcs/day x 22 = 18,495 pcs/month; value protected ~= 827,296 THB/month
                        </p>
                      </div>
                      <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-950/50">
                        <p className="text-xs font-black uppercase text-slate-500">Per year</p>
                        <p className="mt-1 text-sm font-black leading-relaxed text-slate-950 dark:text-white">
                          18,495 pcs/month x 12 = 221,944 pcs/year; value protected ~= 9.93M THB/year
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 rounded-xl border border-orange-200 bg-orange-50 p-4 text-sm font-bold leading-relaxed text-orange-800 dark:border-orange-900/50 dark:bg-orange-950/20 dark:text-orange-200">
                      This is equivalent production value protected, not guaranteed additional sales.
                    </p>
                  </section>

                  <section className="rounded-2xl border border-cyan-300 bg-white p-5 shadow-sm dark:border-cyan-900/50 dark:bg-slate-900">
                    <div className="mb-5">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-500">Next Step</p>
                      <h3 className="mt-1 text-lg font-black text-slate-950 dark:text-white">
                        Extend current platform data into alert and prediction
                      </h3>
                      <p className="mt-2 max-w-3xl text-sm font-semibold leading-relaxed text-slate-600 dark:text-slate-300">
                        After connecting MMS Dashboard, Toolling & Store, Job Request, and PM records in one platform,
                        the next step is to use the same data for email notification, Predictive Usage, and Predictive MM.
                      </p>
                    </div>
                    <div className="grid gap-3 lg:grid-cols-3">
                      {overallNextSteps.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={item.title}
                            className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60"
                          >
                            <div className="mb-3 flex items-start gap-3">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 dark:bg-cyan-950/50 dark:text-cyan-200">
                                <Icon size={19} />
                              </div>
                              <div>
                                <div className="mb-1 flex flex-wrap items-center gap-2">
                                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-600 text-[10px] font-black text-white">
                                    {index + 1}
                                  </span>
                                  <p className="text-sm font-black text-slate-950 dark:text-white">{item.title}</p>
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-[0.12em] text-cyan-600 dark:text-cyan-300">
                                  {item.label}
                                </p>
                              </div>
                            </div>
                            <p className="text-xs font-semibold leading-relaxed text-slate-600 dark:text-slate-300">
                              {item.detail}
                            </p>
                            <ul className="mt-4 space-y-2">
                              {item.points.map((point) => (
                                <li key={point} className="flex gap-2 text-xs font-bold leading-relaxed text-slate-600 dark:text-slate-300">
                                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </section>

                  <section>
                    <h3 className="mb-4 text-lg font-black text-slate-950 dark:text-white">Overview Evidence</h3>
                    <div className="grid gap-4 lg:grid-cols-3">
                      {overallImages.map((image) => (
                        <figure
                          key={image.src}
                          className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
                        >
                          <button
                            type="button"
                            onClick={() => openLightbox({ src: image.src, title: image.title })}
                            className="relative aspect-video w-full cursor-zoom-in bg-slate-100 text-left outline-none transition hover:bg-slate-200 focus-visible:ring-2 focus-visible:ring-cyan-400 dark:bg-slate-800 dark:hover:bg-slate-700"
                            aria-label={`Open ${image.title} image`}
                          >
                            <Image
                              src={image.src}
                              alt={image.title}
                              fill
                              className="object-contain p-2"
                              sizes="(max-width: 1024px) 100vw, 33vw"
                            />
                          </button>
                          <figcaption className="border-t border-slate-200 p-4 dark:border-slate-800">
                            <p className="text-sm font-black text-slate-900 dark:text-white">{image.title}</p>
                            <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                              {image.caption}
                            </p>
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </section>
                </motion.div>
              )}

              {activeTab === "Admin mode" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <section className="overflow-hidden rounded-2xl border border-violet-300 bg-gradient-to-br from-violet-50 via-white to-orange-50 p-5 shadow-sm dark:border-violet-900/50 dark:from-violet-950/20 dark:via-slate-900 dark:to-orange-950/20">
                    <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-violet-500">
                      Admin mode
                    </p>
                    <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                      Central Master Data and Permission Control
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      Admin mode is the control layer for master data and permission scope. It keeps users, machines,
                      departments, areas, roles, and access rules consistent across MMS Dashboard, Job Request,
                      Preventive Maintenance, and Toolling & Store.
                    </p>
                  </section>

                  <AnimatedHorizontalFlow title="Admin Data Flow" steps={adminDataFlow} />

                  <section>
                    <div className="rounded-2xl border border-cyan-300/50 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-5 shadow-sm">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                            Admin Master Data
                          </p>
                          <h3 className="mt-1 text-lg font-black text-white">What Admin Mode Controls</h3>
                        </div>
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/50 bg-cyan-400/10 text-cyan-200">
                          <Server size={22} />
                        </div>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                        {masterDataItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <div
                              key={item.title}
                              className="min-h-[128px] rounded-xl border border-cyan-400/20 bg-white/[0.04] p-3 shadow-[0_0_18px_rgba(34,211,238,0.08)]"
                            >
                              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-200">
                                <Icon size={20} />
                              </div>
                              <p className="text-sm font-black text-white">{item.title}</p>
                              <p className="mt-1 text-xs font-semibold leading-relaxed text-cyan-50/75">
                                {item.detail}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="mb-4 text-lg font-black text-slate-950 dark:text-white">Admin Evidence</h3>
                    <div className="grid gap-4 lg:grid-cols-3">
                      {adminImages.map((image) => (
                        <figure
                          key={image.src}
                          className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
                        >
                          <button
                            type="button"
                            onClick={() => openLightbox({ src: image.src, title: image.title })}
                            className="relative aspect-video w-full cursor-zoom-in bg-slate-100 text-left outline-none transition hover:bg-slate-200 focus-visible:ring-2 focus-visible:ring-cyan-400 dark:bg-slate-800 dark:hover:bg-slate-700"
                            aria-label={`Open ${image.title} image`}
                          >
                            <Image
                              src={image.src}
                              alt={image.title}
                              fill
                              className="object-contain p-2"
                              sizes="(max-width: 1024px) 100vw, 33vw"
                            />
                          </button>
                          <figcaption className="border-t border-slate-200 p-4 dark:border-slate-800">
                            <p className="text-sm font-black text-slate-900 dark:text-white">{image.title}</p>
                            <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                              {image.caption}
                            </p>
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </section>
                </motion.div>
              )}

              {activeTab === "MMS Dashboard" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <section className="overflow-hidden rounded-2xl border border-cyan-300 bg-gradient-to-br from-cyan-50 via-white to-slate-50 p-5 shadow-sm dark:border-cyan-900/50 dark:from-cyan-950/20 dark:via-slate-900 dark:to-slate-950">
                    <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-500">
                      MMS Dashboard
                    </p>
                    <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                      Realtime Machine Visibility and Job Status Monitoring
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      MMS Dashboard is the operation view for machine status, production output, OEE, active job state,
                      layout visibility, and historical reports. It connects machine data with Job Request workflow so
                      Production, Maintenance, and QC can see the same machine condition and repair progress in one place.
                    </p>
                  </section>

                  <section className="grid items-stretch gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                          <Search size={24} />
                        </div>
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-500">
                            Pain Point
                          </p>
                          <h3 className="text-lg font-black text-slate-950 dark:text-white">
                            Before MMS Dashboard
                          </h3>
                        </div>
                      </div>
                      <div className="grid gap-3">
                        {mmsPainPoints.map((item, index) => (
                          <div
                            key={item}
                            className="flex min-h-[68px] gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950/50"
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-black text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                              {index + 1}
                            </span>
                            <p className="text-sm font-semibold leading-relaxed text-slate-700 dark:text-slate-300">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex h-full flex-col rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm dark:border-emerald-900/50 dark:bg-slate-900">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                          <Clock size={24} />
                        </div>
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-500">
                            MMS Benefit
                          </p>
                          <h3 className="text-lg font-black text-slate-950 dark:text-white">
                            100 min/day from monitoring and reporting
                          </h3>
                        </div>
                      </div>
                      <div className="grid flex-1 gap-3 sm:grid-cols-2">
                        {mmsBenefits.map((item) => (
                          <div
                            key={item.label}
                            className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 dark:border-emerald-900/50 dark:bg-emerald-950/20"
                          >
                            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-300">
                              {item.label}
                            </p>
                            <p className="mt-1 text-sm font-black leading-relaxed text-emerald-950 dark:text-emerald-100">
                              {item.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="flex flex-col justify-between gap-3 border-b border-slate-200 p-5 dark:border-slate-800 sm:flex-row sm:items-center">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-500">
                          Feature View
                        </p>
                        <h3 className="mt-1 text-lg font-black text-slate-950 dark:text-white">
                          Slide through MMS Dashboard features
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setMmsSlideIndex((mmsSlideIndex - 1 + mmsSlides.length) % mmsSlides.length)}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
                          aria-label="Previous MMS slide"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <span className="min-w-16 text-center text-xs font-black text-slate-500 dark:text-slate-400">
                          {mmsSlideIndex + 1} / {mmsSlides.length}
                        </span>
                        <button
                          type="button"
                          onClick={() => setMmsSlideIndex((mmsSlideIndex + 1) % mmsSlides.length)}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
                          aria-label="Next MMS slide"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>

                    <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                      <button
                        type="button"
                        onClick={() => openLightbox({ src: activeMmsSlide.src, title: activeMmsSlide.title })}
                        className="relative aspect-video min-h-[280px] cursor-zoom-in bg-slate-100 text-left outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:bg-slate-950 lg:aspect-auto"
                        aria-label={`Open ${activeMmsSlide.title} image`}
                      >
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeMmsSlide.src}
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -24 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={activeMmsSlide.src}
                              alt={activeMmsSlide.title}
                              fill
                              className="object-contain p-3"
                              sizes="(max-width: 1024px) 100vw, 60vw"
                            />
                          </motion.div>
                        </AnimatePresence>
                      </button>

                      <div className="flex flex-col justify-between border-t border-slate-200 p-5 dark:border-slate-800 lg:border-l lg:border-t-0">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeMmsSlide.title}
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 16 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                          >
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
                              <activeMmsSlide.icon size={28} />
                            </div>
                            <h3 className="text-xl font-black text-slate-950 dark:text-white">
                              {activeMmsSlide.title}
                            </h3>
                            <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-700 dark:text-slate-300">
                              {activeMmsSlideSummary}
                            </p>
                          </motion.div>
                        </AnimatePresence>
                        <div className="mt-5 flex gap-2">
                          {mmsSlides.map((slide, index) => (
                            <button
                              type="button"
                              key={slide.title}
                              onClick={() => setMmsSlideIndex(index)}
                              className={`h-2.5 flex-1 rounded-full transition ${
                                index === mmsSlideIndex ? "bg-cyan-500" : "bg-slate-200 dark:bg-slate-700"
                              }`}
                              aria-label={`Go to ${slide.title}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  <AnimatedHorizontalFlow title="MMS Data Flow" steps={mmsFeatureFlow} />
                  <AnimatedHorizontalFlow title="Job Request to MMS Dashboard Connection" steps={mmsJobConnectionFlow} />

                  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
                        <BarChart3 size={22} />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-slate-950 dark:text-white">
                          Operational Value
                        </h3>
                        <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-700 dark:text-slate-300">
                          MMS Dashboard is designed to connect machine visibility with the maintenance workflow. The
                          team can monitor current machine condition, active job ownership, and historical records in
                          one place, reducing manual follow-up and improving response speed across Production,
                          Maintenance, and QC.
                        </p>
                      </div>
                    </div>
                  </section>
                </motion.div>
              )}

              {activeTab === "Toolling & Store" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <section className="overflow-hidden rounded-2xl border border-amber-300 bg-gradient-to-br from-amber-50 via-white to-slate-50 p-5 shadow-sm dark:border-amber-900/50 dark:from-amber-950/20 dark:via-slate-900 dark:to-slate-950">
                    <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-amber-600">
                      Toolling & Store
                    </p>
                    <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                      Tool, Spare Part, Calibration, and Movement Control
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      Toolling & Store is the inventory control layer for Maintenance and Tooling operation. It manages
                      stock balance, tool issue and return, stock in/out movement, overdue borrow, calibration schedule,
                      item master data, and traceable transaction history.
                    </p>
                  </section>

                  <section className="grid items-stretch gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                          <AlertTriangle size={24} />
                        </div>
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-500">
                            Pain Point
                          </p>
                          <h3 className="text-lg font-black text-slate-950 dark:text-white">
                            Before Toolling & Store
                          </h3>
                        </div>
                      </div>
                      <div className="grid gap-3">
                        {toolingPainPoints.map((item, index) => (
                          <div
                            key={item}
                            className="flex min-h-[68px] gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950/50"
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-black text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                              {index + 1}
                            </span>
                            <p className="text-sm font-semibold leading-relaxed text-slate-700 dark:text-slate-300">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex h-full flex-col rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm dark:border-emerald-900/50 dark:bg-slate-900">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                          <Clock size={24} />
                        </div>
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-500">
                            Tooling Benefit
                          </p>
                          <h3 className="text-lg font-black text-slate-950 dark:text-white">
                            8 min/day from faster stock and tool traceability
                          </h3>
                        </div>
                      </div>
                      <div className="grid flex-1 gap-3 sm:grid-cols-2">
                        {toolingBenefits.map((item) => (
                          <div
                            key={item.label}
                            className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 dark:border-emerald-900/50 dark:bg-emerald-950/20"
                          >
                            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-300">
                              {item.label}
                            </p>
                            <p className="mt-1 text-sm font-black leading-relaxed text-emerald-950 dark:text-emerald-100">
                              {item.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="flex flex-col justify-between gap-3 border-b border-slate-200 p-5 dark:border-slate-800 sm:flex-row sm:items-center">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-amber-500">
                          Feature View
                        </p>
                        <h3 className="mt-1 text-lg font-black text-slate-950 dark:text-white">
                          Slide through Toolling & Store working screens
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            setToolingSlideIndex((toolingSlideIndex - 1 + toolingSlides.length) % toolingSlides.length)
                          }
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-amber-400 hover:text-amber-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
                          aria-label="Previous Tooling slide"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <span className="min-w-16 text-center text-xs font-black text-slate-500 dark:text-slate-400">
                          {toolingSlideIndex + 1} / {toolingSlides.length}
                        </span>
                        <button
                          type="button"
                          onClick={() => setToolingSlideIndex((toolingSlideIndex + 1) % toolingSlides.length)}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-amber-400 hover:text-amber-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
                          aria-label="Next Tooling slide"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>

                    <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                      <button
                        type="button"
                        onClick={() => openLightbox({ src: activeToolingSlide.src, title: activeToolingSlide.title })}
                        className="relative aspect-video min-h-[280px] cursor-zoom-in bg-slate-100 text-left outline-none focus-visible:ring-2 focus-visible:ring-amber-400 dark:bg-slate-950 lg:aspect-auto"
                        aria-label={`Open ${activeToolingSlide.title} image`}
                      >
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeToolingSlide.src}
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -24 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={activeToolingSlide.src}
                              alt={activeToolingSlide.title}
                              fill
                              className="object-contain p-3"
                              sizes="(max-width: 1024px) 100vw, 60vw"
                            />
                          </motion.div>
                        </AnimatePresence>
                      </button>

                      <div className="flex flex-col justify-between border-t border-slate-200 p-5 dark:border-slate-800 lg:border-l lg:border-t-0">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeToolingSlide.title}
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 16 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                          >
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                              <activeToolingSlide.icon size={28} />
                            </div>
                            <h3 className="text-xl font-black text-slate-950 dark:text-white">
                              {activeToolingSlide.title}
                            </h3>
                            <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-700 dark:text-slate-300">
                              {activeToolingSlide.detail}
                            </p>
                          </motion.div>
                        </AnimatePresence>
                        <div className="mt-5 flex gap-2">
                          {toolingSlides.map((slide, index) => (
                            <button
                              type="button"
                              key={slide.title}
                              onClick={() => setToolingSlideIndex(index)}
                              className={`h-2.5 flex-1 rounded-full transition ${
                                index === toolingSlideIndex ? "bg-amber-500" : "bg-slate-200 dark:bg-slate-700"
                              }`}
                              aria-label={`Go to ${slide.title}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  <AnimatedHorizontalFlow title="Toolling & Store Workflow" steps={toolingFeatureFlow} />
                  <AnimatedHorizontalFlow title="Tooling Connection With Platform Modules" steps={toolingConnectionFlow} />

                  <section className="rounded-2xl border border-cyan-200 bg-white p-5 shadow-sm dark:border-cyan-900/50 dark:bg-slate-900">
                    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-500">
                          Predictive Tooling Usage
                        </p>
                        <h3 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">
                          Forecast spare part usage before stock becomes a repair blocker
                        </h3>
                        <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-700 dark:text-slate-300">
                          This capability extends Toolling & Store from record keeping into planning. The dashboard
                          highlights shortage risk, reorder-soon items, 30-day forecast quantity, confidence level, and
                          suggested buy quantity. The analysis view explains the result with actual usage, regression
                          trend, forecast stock line, calculation cards, and reason text.
                        </p>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {predictiveToolingCards.map((item) => (
                          <div
                            key={item.label}
                            className="rounded-xl border border-cyan-100 bg-cyan-50 p-4 dark:border-cyan-900/50 dark:bg-cyan-950/20"
                          >
                            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-cyan-700 dark:text-cyan-300">
                              {item.label}
                            </p>
                            <p className="mt-2 text-sm font-black leading-relaxed text-slate-950 dark:text-white">
                              {item.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-5">
                      <AnimatedHorizontalFlow title="Predictive Tooling Usage Flow" steps={predictiveToolingFlow} />
                    </div>
                    <div className="mt-4 rounded-xl border border-dashed border-cyan-200 bg-cyan-50 p-4 dark:border-cyan-900/50 dark:bg-cyan-950/20">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
                        View Analysis
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-700 dark:text-slate-300">
                        View Analysis opens the item-level calculation: current stock, minimum stock, 7-day and 30-day
                        forecast, confidence, actual usage bars, regression line, forecast stock projection, stockout
                        ETA, reorder ETA, and calculation reasons.
                      </p>
                    </div>
                  </section>

                  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                        <Store size={22} />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-slate-950 dark:text-white">
                          Operational Value
                        </h3>
                        <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-700 dark:text-slate-300">
                          Toolling & Store reduces manual stock checking and improves traceability of tool movement,
                          borrow/return status, calibration, and spare part availability. This helps Maintenance reduce
                          waiting time before repair and keeps inventory information reliable for daily operation.
                        </p>
                      </div>
                    </div>
                  </section>
                </motion.div>
              )}

              {activeTab === "Preventive Maintenance" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <section className="overflow-hidden rounded-2xl border border-emerald-300 bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-5 shadow-sm dark:border-emerald-900/50 dark:from-emerald-950/20 dark:via-slate-900 dark:to-slate-950">
                    <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-600">
                      Preventive Maintenance
                    </p>
                    <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                      PM Type, Checklist, Calendar, and Machine Mapping
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      Preventive Maintenance turns routine machine care into a configurable inspection workflow. Users
                      create PM Type templates, define checklist topics, map those PM Types to machines, see the plan in
                      calendar view, receive due-date reminders, and store OK/NG inspection history.
                    </p>
                  </section>

                  <section className="grid items-stretch gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                          <AlertTriangle size={24} />
                        </div>
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-500">
                            Pain Point
                          </p>
                          <h3 className="text-lg font-black text-slate-950 dark:text-white">
                            Before Preventive Maintenance
                          </h3>
                        </div>
                      </div>
                      <div className="grid gap-3">
                        {pmPainPoints.map((item, index) => (
                          <div
                            key={item}
                            className="flex min-h-[68px] gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950/50"
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-black text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                              {index + 1}
                            </span>
                            <p className="text-sm font-semibold leading-relaxed text-slate-700 dark:text-slate-300">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex h-full flex-col rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm dark:border-emerald-900/50 dark:bg-slate-900">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                          <Clock size={24} />
                        </div>
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-500">
                            PM Benefit
                          </p>
                          <h3 className="text-lg font-black text-slate-950 dark:text-white">
                            7.5 min/day aligned with the overall impact summary
                          </h3>
                        </div>
                      </div>
                      <div className="grid flex-1 gap-3 sm:grid-cols-2">
                        {pmBenefits.map((item) => (
                          <div
                            key={item.label}
                            className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 dark:border-emerald-900/50 dark:bg-emerald-950/20"
                          >
                            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-300">
                              {item.label}
                            </p>
                            <p className="mt-1 text-sm font-black leading-relaxed text-emerald-950 dark:text-emerald-100">
                              {item.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="flex flex-col justify-between gap-3 border-b border-slate-200 p-5 dark:border-slate-800 sm:flex-row sm:items-center">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-500">
                          Feature View
                        </p>
                        <h3 className="mt-1 text-lg font-black text-slate-950 dark:text-white">
                          Slide through PM dashboard, calendar, mapping, inspection, and reminder screens
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setPmSlideIndex((pmSlideIndex - 1 + pmSlides.length) % pmSlides.length)}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
                          aria-label="Previous Preventive Maintenance slide"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <span className="min-w-16 text-center text-xs font-black text-slate-500 dark:text-slate-400">
                          {pmSlideIndex + 1} / {pmSlides.length}
                        </span>
                        <button
                          type="button"
                          onClick={() => setPmSlideIndex((pmSlideIndex + 1) % pmSlides.length)}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
                          aria-label="Next Preventive Maintenance slide"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>

                    <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                      <button
                        type="button"
                        onClick={() => openLightbox({ src: activePmSlide.src, title: activePmSlide.title })}
                        className="relative aspect-video min-h-[280px] cursor-zoom-in bg-slate-100 text-left outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 dark:bg-slate-950 lg:aspect-auto"
                        aria-label={`Open ${activePmSlide.title} image`}
                      >
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activePmSlide.src}
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -24 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={activePmSlide.src}
                              alt={activePmSlide.title}
                              fill
                              className="object-contain p-3"
                              sizes="(max-width: 1024px) 100vw, 60vw"
                            />
                          </motion.div>
                        </AnimatePresence>
                      </button>

                      <div className="flex flex-col justify-between border-t border-slate-200 p-5 dark:border-slate-800 lg:border-l lg:border-t-0">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activePmSlide.title}
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 16 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                          >
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                              <activePmSlide.icon size={28} />
                            </div>
                            <h3 className="text-xl font-black text-slate-950 dark:text-white">
                              {activePmSlide.title}
                            </h3>
                            <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-700 dark:text-slate-300">
                              {activePmSlide.detail}
                            </p>
                          </motion.div>
                        </AnimatePresence>
                        <div className="mt-5 flex gap-2">
                          {pmSlides.map((slide, index) => (
                            <button
                              type="button"
                              key={slide.title}
                              onClick={() => setPmSlideIndex(index)}
                              className={`h-2.5 flex-1 rounded-full transition ${
                                index === pmSlideIndex ? "bg-emerald-500" : "bg-slate-200 dark:bg-slate-700"
                              }`}
                              aria-label={`Go to ${slide.title}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="grid gap-4 md:grid-cols-2">
                    {pmCapabilityItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.title}
                          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                        >
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                            <Icon size={24} />
                          </div>
                          <h3 className="text-lg font-black text-slate-950 dark:text-white">{item.title}</h3>
                          <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-700 dark:text-slate-300">
                            {item.detail}
                          </p>
                        </div>
                      );
                    })}
                  </section>

                  <AnimatedHorizontalFlow title="Preventive Maintenance Workflow" steps={pmFeatureFlow} />
                  <AnimatedHorizontalFlow title="Preventive Connection With Platform Modules" steps={pmConnectionFlow} />

                  <section className="overflow-hidden rounded-2xl border border-emerald-200 bg-white shadow-sm dark:border-emerald-900/50 dark:bg-slate-900">
                    <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                      <div className="flex flex-col justify-center border-b border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900/50 dark:bg-emerald-950/20 lg:border-b-0 lg:border-r">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-sm dark:bg-slate-900 dark:text-emerald-300">
                          <Mail size={28} />
                        </div>
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-300">
                          Email Notification
                        </p>
                        <h3 className="mt-2 text-2xl font-black leading-tight text-slate-950 dark:text-white">
                          Advance reminder before the PM due date
                        </h3>
                        <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-700 dark:text-slate-300">
                          PM Type and machine mapping include advance notification days. This gives the system a clear
                          rule to remind the responsible maintenance team before the planned inspection becomes overdue.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          openLightbox({
                            src: "/projects/smart-factory-operations/pm-email-reminder.png",
                            title: "Preventive Maintenance Email Reminder",
                          })
                        }
                        className="relative aspect-video min-h-[260px] cursor-zoom-in bg-slate-100 text-left outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 dark:bg-slate-950"
                        aria-label="Open Preventive Maintenance Email Reminder image"
                      >
                        <Image
                          src="/projects/smart-factory-operations/pm-email-reminder.png"
                          alt="Preventive Maintenance Email Reminder"
                          fill
                          className="object-contain p-3"
                          sizes="(max-width: 1024px) 100vw, 55vw"
                        />
                      </button>
                    </div>
                  </section>

                  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                        <ClipboardCheck size={22} />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-slate-950 dark:text-white">
                          Operational Value
                        </h3>
                        <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-700 dark:text-slate-300">
                          Preventive Maintenance makes planned work configurable instead of fixed. Users can create PM
                          Type templates, define their own checklist criteria, map one or more PM Types to each machine,
                          review upcoming work on a calendar, receive reminders before due dates, and keep OK/NG
                          history ready for reports.
                        </p>
                      </div>
                    </div>
                  </section>
                </motion.div>
              )}

              {activeTab === "Summary" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <section className="overflow-hidden rounded-2xl border border-cyan-300 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-5 text-white shadow-sm">
                    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                      <div>
                        <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                          Summary
                        </p>
                        <h3 className="text-3xl font-black leading-tight">
                          Smart Factory Operation Platform Summary
                        </h3>
                        <p className="mt-4 text-sm font-semibold leading-relaxed text-slate-300">
                          A connected factory operations platform that brings machine data, MMS monitoring, Job
                          Request, Preventive Maintenance, Tooling Store, Admin master data, and Socket.IO realtime
                          updates into one traceable workflow.
                        </p>
                        <div className="mt-5 grid gap-3 sm:grid-cols-3">
                          {scopeMetrics.map((metric) => (
                            <div
                              key={metric.label}
                              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-3 text-center"
                            >
                              <div className="text-2xl font-black">{metric.value}</div>
                              <div className="mt-1 text-[10px] font-black uppercase tracking-wide text-cyan-200">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-300">
                          Estimated operational impact
                        </p>
                        <div className="mt-3 grid grid-cols-2 gap-3">
                          {summaryImpactMetrics.slice(0, 4).map((metric) => (
                            <div
                              key={metric.label}
                              className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-3 text-center"
                            >
                              <div className="text-lg font-black">{metric.value}</div>
                              <div className="mt-1 text-[10px] font-black uppercase tracking-wide text-emerald-200">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  <AnimatedHorizontalFlow title="Connected Platform Flow" steps={summaryPlatformFlow} />

                  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-500">
                          Operational Impact
                        </p>
                        <h3 className="mt-1 text-lg font-black text-slate-950 dark:text-white">
                          Full core-feature estimate for a 100-machine operation
                        </h3>
                      </div>
                      <div className="rounded-xl bg-emerald-50 px-4 py-2 text-xs font-black text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300">
                        102.27 THB/hour (from 18,000 THB/month salary) | 22 workdays/month
                      </div>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {summaryImpactMetrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/50"
                        >
                          <p className="text-xl font-black text-slate-950 dark:text-white">{metric.value}</p>
                          <p className="mt-1 text-xs font-black uppercase tracking-wide text-slate-500 dark:text-slate-400">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 rounded-xl border border-orange-200 bg-orange-50 p-4 text-sm font-bold leading-relaxed text-orange-800 dark:border-orange-900/50 dark:bg-orange-950/20 dark:text-orange-200">
                      Use this as workload reduction, not headcount reduction: the platform reduces routine manual
                      coordination by about 17.1 hours/day, equivalent to 2.1 people-shift workload per day.
                    </p>
                  </section>

                  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="mb-5">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-500">
                        Feature Contribution
                      </p>
                      <h3 className="mt-1 text-lg font-black text-slate-950 dark:text-white">
                        What each module contributes to the overall platform
                      </h3>
                    </div>
                    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                      {summaryFeatureContributions.map((item) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={item.title}
                            className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/50"
                          >
                            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
                              <Icon size={22} />
                            </div>
                            <p className="text-sm font-black text-slate-950 dark:text-white">{item.title}</p>
                            <p className="mt-2 text-xs font-semibold leading-relaxed text-slate-600 dark:text-slate-300">
                              {item.detail}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </section>

                  <section className="grid gap-4 lg:grid-cols-2">
                    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                      <button
                        type="button"
                        onClick={() =>
                          openLightbox({
                            src: "/projects/smart-factory-operations/project-lifecycle-flow.svg",
                            title: "Project Lifecycle Flow",
                          })
                        }
                        className="relative aspect-video w-full cursor-zoom-in bg-slate-100 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:bg-slate-950"
                        aria-label="Open Project Lifecycle Flow image"
                      >
                        <Image
                          src="/projects/smart-factory-operations/project-lifecycle-flow.svg"
                          alt="Project lifecycle flow"
                          fill
                          className="object-contain p-3"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </button>
                      <figcaption className="border-t border-slate-200 p-4 dark:border-slate-800">
                        <p className="text-sm font-black text-slate-950 dark:text-white">Project Workflow</p>
                        <p className="mt-1 text-xs font-semibold leading-relaxed text-slate-500 dark:text-slate-400">
                          Observe shopfloor, interview users, map workflow, design DB/API/status flow, test E2E, and
                          deploy with feedback.
                        </p>
                      </figcaption>
                    </figure>

                    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                      <button
                        type="button"
                        onClick={() =>
                          openLightbox({
                            src: "/projects/smart-factory-operations/development-workflow-flow.svg",
                            title: "Development Workflow Flow",
                          })
                        }
                        className="relative aspect-video w-full cursor-zoom-in bg-slate-100 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:bg-slate-950"
                        aria-label="Open Development Workflow Flow image"
                      >
                        <Image
                          src="/projects/smart-factory-operations/development-workflow-flow.svg"
                          alt="Development workflow flow"
                          fill
                          className="object-contain p-3"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </button>
                      <figcaption className="border-t border-slate-200 p-4 dark:border-slate-800">
                        <p className="text-sm font-black text-slate-950 dark:text-white">Development Workflow</p>
                        <p className="mt-1 text-xs font-semibold leading-relaxed text-slate-500 dark:text-slate-400">
                          Git branch, frontend, backend API, MSSQL queries, Socket.IO events, E2E testing, CI/CD, and
                          controlled release.
                        </p>
                      </figcaption>
                    </figure>
                  </section>

                  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="mb-5">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-500">
                        Problems and Solutions
                      </p>
                      <h3 className="mt-1 text-lg font-black text-slate-950 dark:text-white">
                        The hard parts of turning the system into real operations
                      </h3>
                    </div>
                    <div className="grid gap-3 lg:grid-cols-2">
                      {summaryProblems.map((item, index) => (
                        <div
                          key={item.problem}
                          className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/50"
                        >
                          <div className="mb-3 flex items-center gap-3">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-black text-white">
                              {index + 1}
                            </span>
                            <p className="text-sm font-black text-slate-950 dark:text-white">{item.problem}</p>
                          </div>
                          <p className="text-xs font-semibold leading-relaxed text-slate-500 dark:text-slate-400">
                            {item.detail}
                          </p>
                          <p className="mt-3 text-xs font-bold leading-relaxed text-emerald-700 dark:text-emerald-300">
                            Solution: {item.solution}
                          </p>
                          <p className="mt-1 text-xs font-bold leading-relaxed text-cyan-700 dark:text-cyan-300">
                            Result: {item.result}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="space-y-4">
                    <div className="rounded-2xl border border-cyan-500/30 bg-slate-950 p-5 text-white shadow-sm">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                        Next Step
                      </p>
                      <h3 className="mt-1 text-lg font-black">Big Data and AI for Smart Factory</h3>
                      <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-300">
                        The next step is to collect long-term machine history and use AI to support anomaly detection,
                        downtime prediction, predictive maintenance, spare-part demand forecasting, and maintenance
                        priority recommendation.
                      </p>
                      <div className="mt-5 rounded-2xl border border-cyan-400/25 bg-slate-950/70 p-5">
                        <h4 className="mb-4 text-base font-black text-white">AI Readiness Flow</h4>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                          {summaryAiFlow.map((step, index) => {
                            const Icon = step.icon;
                            return (
                              <div
                                key={step.label}
                                className="relative min-h-[120px] rounded-xl border border-cyan-400/35 bg-cyan-400/10 p-3 text-center shadow-[0_0_22px_rgba(34,211,238,0.10)]"
                              >
                                <span className="absolute right-2 top-2 text-[10px] font-black text-cyan-300/70">
                                  {index + 1}
                                </span>
                                <Icon size={24} className="mx-auto mb-3 text-cyan-200" />
                                <p className="text-xs font-black leading-relaxed text-cyan-50">{step.label}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                        Interview Story
                      </p>
                      <h3 className="mt-1 text-lg font-black text-slate-950 dark:text-white">
                        Short explanation to close the case study
                      </h3>
                      <div className="mt-4 space-y-3">
                        {summaryInterviewStory.map((item, index) => (
                          <p
                            key={item}
                            className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-semibold leading-relaxed text-slate-700 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-300"
                          >
                            <span className="mr-2 text-xs font-black text-orange-500">{index + 1}.</span>
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </section>
                </motion.div>
              )}

              {activeTab === "Job Request" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <section className="overflow-hidden rounded-2xl border border-sky-300 bg-gradient-to-br from-sky-50 via-white to-slate-50 p-5 shadow-sm dark:border-sky-900/50 dark:from-sky-950/20 dark:via-slate-900 dark:to-slate-950">
                    <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-sky-600">
                      Job Request
                    </p>
                    <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                      Realtime Repair Workflow for Production, Maintenance, and QC
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      Job Request controls repair ownership from Production request to Maintenance repair, QC
                      inspection, Production confirmation, handover, completed history, realtime notification, and MMS
                      dashboard context for active machine jobs.
                    </p>
                  </section>

                  <section className="grid items-stretch gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                          <AlertTriangle size={24} />
                        </div>
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-500">
                            Pain Point
                          </p>
                          <h3 className="text-lg font-black text-slate-950 dark:text-white">
                            Before Job Request
                          </h3>
                        </div>
                      </div>
                      <div className="grid gap-3">
                        {jobPainPoints.map((item, index) => (
                          <div
                            key={item}
                            className="flex min-h-[68px] gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950/50"
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-black text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                              {index + 1}
                            </span>
                            <p className="text-sm font-semibold leading-relaxed text-slate-700 dark:text-slate-300">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex h-full flex-col rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm dark:border-emerald-900/50 dark:bg-slate-900">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                          <Clock size={24} />
                        </div>
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-500">
                            Job Request Benefit
                          </p>
                          <h3 className="text-lg font-black text-slate-950 dark:text-white">
                            910 min/day from follow-up, production confirm-check, and history lookup workflow control
                          </h3>
                        </div>
                      </div>
                      <div className="grid flex-1 gap-3 sm:grid-cols-2">
                        {jobBenefits.map((item) => (
                          <div
                            key={item.label}
                            className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 dark:border-emerald-900/50 dark:bg-emerald-950/20"
                          >
                            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-300">
                              {item.label}
                            </p>
                            <p className="mt-1 text-sm font-black leading-relaxed text-emerald-950 dark:text-emerald-100">
                              {item.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="flex flex-col justify-between gap-3 border-b border-slate-200 p-5 dark:border-slate-800 sm:flex-row sm:items-center">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-sky-500">
                          Feature View
                        </p>
                        <h3 className="mt-1 text-lg font-black text-slate-950 dark:text-white">
                          Slide through Job Request working screens
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setJobSlideIndex((jobSlideIndex - 1 + jobSlides.length) % jobSlides.length)}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-sky-400 hover:text-sky-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
                          aria-label="Previous Job Request slide"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <span className="min-w-16 text-center text-xs font-black text-slate-500 dark:text-slate-400">
                          {jobSlideIndex + 1} / {jobSlides.length}
                        </span>
                        <button
                          type="button"
                          onClick={() => setJobSlideIndex((jobSlideIndex + 1) % jobSlides.length)}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-sky-400 hover:text-sky-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
                          aria-label="Next Job Request slide"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>

                    <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                      <button
                        type="button"
                        onClick={() => openLightbox({ src: activeJobSlide.src, title: activeJobSlide.title })}
                        className="relative aspect-video min-h-[280px] cursor-zoom-in bg-slate-100 text-left outline-none focus-visible:ring-2 focus-visible:ring-sky-400 dark:bg-slate-950 lg:aspect-auto"
                        aria-label={`Open ${activeJobSlide.title} image`}
                      >
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeJobSlide.src}
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -24 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={activeJobSlide.src}
                              alt={activeJobSlide.title}
                              fill
                              className="object-contain p-3"
                              sizes="(max-width: 1024px) 100vw, 60vw"
                            />
                          </motion.div>
                        </AnimatePresence>
                      </button>

                      <div className="flex flex-col justify-between border-t border-slate-200 p-5 dark:border-slate-800 lg:border-l lg:border-t-0">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeJobSlide.title}
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 16 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                          >
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
                              <activeJobSlide.icon size={28} />
                            </div>
                            <h3 className="text-xl font-black text-slate-950 dark:text-white">
                              {activeJobSlide.title}
                            </h3>
                            <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-700 dark:text-slate-300">
                              {activeJobSlide.detail}
                            </p>
                          </motion.div>
                        </AnimatePresence>
                        <div className="mt-5 flex gap-2">
                          {jobSlides.map((slide, index) => (
                            <button
                              type="button"
                              key={slide.title}
                              onClick={() => setJobSlideIndex(index)}
                              className={`h-2.5 flex-1 rounded-full transition ${
                                index === jobSlideIndex ? "bg-sky-500" : "bg-slate-200 dark:bg-slate-700"
                              }`}
                              aria-label={`Go to ${slide.title}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  <JobRequestReadableFlowDiagram openLightbox={openLightbox} />

                  <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                      <div className="flex min-h-[320px] flex-col justify-between border-b border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/40 lg:border-b-0 lg:border-r">
                        <div>
                          <div className="mb-5 flex items-start justify-between gap-4">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
                              <Volume2 size={28} />
                            </div>
                            <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-emerald-700 dark:border-emerald-400/25 dark:bg-emerald-400/10 dark:text-emerald-300">
                              Live trigger
                            </div>
                          </div>
                          <p className="text-xs font-black uppercase tracking-[0.16em] text-sky-500">
                            Realtime Sound Alert
                          </p>
                          <h3 className="mt-2 max-w-md text-2xl font-black leading-tight text-slate-950 dark:text-white">
                            Audio notification for actionable jobs
                          </h3>
                          <p className="mt-3 max-w-md text-sm font-semibold leading-relaxed text-slate-600 dark:text-slate-300">
                            Socket.IO routes each job event to the right team, then Web Audio makes the work noticeable
                            until someone accepts, closes, or opens the job.
                          </p>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-2">
                          {["Production", "Maintenance", "QC", "Handover"].map((room) => (
                            <div
                              key={room}
                              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-800 dark:bg-slate-900"
                            >
                              <RadioTower className="shrink-0 text-sky-600 dark:text-sky-300" size={16} />
                              <span className="min-w-0 truncate text-xs font-black text-slate-700 dark:text-slate-200">
                                {room}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                          <div>
                            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                              Alert Workflow
                            </p>
                            <h4 className="mt-1 text-base font-black text-slate-950 dark:text-white">
                              From realtime event to user action
                            </h4>
                          </div>
                          <div className="flex items-center gap-2 text-xs font-black text-sky-600 dark:text-sky-300">
                            <BellRing size={16} />
                            Web Audio loop
                          </div>
                        </div>

                        <div className="grid gap-3">
                          {jobSoundItems.map((item, index) => (
                            <div
                              key={item}
                              className="group flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-sky-300 hover:bg-sky-50 dark:border-slate-800 dark:bg-slate-950/50 dark:hover:border-sky-500/50 dark:hover:bg-sky-950/20"
                            >
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-black text-sky-700 ring-4 ring-white dark:bg-sky-900/40 dark:text-sky-200 dark:ring-slate-900">
                                {index + 1}
                              </div>
                              <div className="min-w-0">
                                <p className="text-sm font-bold leading-relaxed text-slate-700 dark:text-slate-300">
                                  {item}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
                        <Wrench size={22} />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-slate-950 dark:text-white">
                          Operational Value
                        </h3>
                        <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-700 dark:text-slate-300">
                          Job Request keeps Production, Maintenance, and QC working from the same repair timeline. It
                          reduces manual follow-up, keeps reject loops visible, supports shift handover, triggers
                          realtime sound alerts for actionable work, and sends active job context to MMS Dashboard for
                          machine-level visibility.
                        </p>
                      </div>
                    </div>
                  </section>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {activeLightboxImage && (
            <motion.div
              key="smart-factory-image-lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[140] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md sm:p-8"
            >
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute inset-0 cursor-zoom-out"
                aria-label="Close enlarged image"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 10 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="relative z-10 flex h-full max-h-[86vh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-cyan-400/30 bg-slate-950 shadow-2xl"
              >
                <div className="flex shrink-0 items-center justify-between gap-4 border-b border-cyan-400/20 px-4 py-3">
                  <div className="min-w-0">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-cyan-300">Feature View</p>
                    <p className="min-w-0 truncate text-sm font-black text-white sm:text-base">
                      {activeLightboxImage.title}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    {canNavigateLightbox && (
                      <>
                        <button
                          type="button"
                          onClick={() => showLightboxImage(-1)}
                          className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <span className="min-w-12 text-center text-xs font-black text-slate-300">
                          {lightboxIndex + 1} / {lightboxGallery.length}
                        </span>
                        <button
                          type="button"
                          onClick={() => showLightboxImage(1)}
                          className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                          aria-label="Next image"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </>
                    )}
                    <button
                      type="button"
                      onClick={closeLightbox}
                      className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                      aria-label="Close enlarged image"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>
                <div className="grid min-h-0 flex-1 lg:grid-cols-[minmax(0,1.45fr)_360px]">
                  <div className="relative min-h-[260px] bg-slate-950">
                    <Image
                      src={activeLightboxImage.src}
                      alt={activeLightboxImage.title}
                      fill
                      className="object-contain p-3"
                      sizes="(max-width: 1024px) 100vw, 70vw"
                    />
                  </div>
                  <aside className="min-h-0 overflow-y-auto border-t border-cyan-400/20 bg-slate-900/70 p-5 lg:border-l lg:border-t-0">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">Description</p>
                    <p className="mt-4 text-sm font-semibold leading-relaxed text-slate-300">
                      {activeLightboxImage.detail}
                    </p>
                    {activeLightboxImage.userSee && activeLightboxImage.userSee.length > 0 && (
                      <div className="mt-5">
                        <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                          What users see from this page
                        </p>
                        <div className="grid gap-2">
                          {activeLightboxImage.userSee.map((item) => (
                            <div key={item.title} className="rounded-xl border border-cyan-400/20 bg-slate-950/60 p-3">
                              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-cyan-300">
                                {item.title}
                              </p>
                              <p className="mt-1 text-sm font-semibold leading-relaxed text-slate-300">
                                {item.detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {!activeLightboxImage.userSee && activeLightboxImage.points && activeLightboxImage.points.length > 0 && (
                      <ul className="mt-4 space-y-2 text-sm font-semibold leading-relaxed text-slate-300">
                        {activeLightboxImage.points.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {activeLightboxImage.guide === "mms-machine-card" && <MmsMachineCardGuide />}

                    {canNavigateLightbox && (
                      <div className="mt-8">
                        <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                          Slide navigation
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => showLightboxImage(-1)}
                            className="flex items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-xs font-black text-cyan-100 transition hover:bg-cyan-400/20"
                          >
                            <ChevronLeft size={16} />
                            Previous
                          </button>
                          <button
                            type="button"
                            onClick={() => showLightboxImage(1)}
                            className="flex items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-xs font-black text-cyan-100 transition hover:bg-cyan-400/20"
                          >
                            Next
                            <ChevronRight size={16} />
                          </button>
                        </div>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {lightboxGallery.map((item, index) => (
                            <button
                              key={`${item.src}-${index}`}
                              type="button"
                              onClick={() => {
                                setLightboxIndex(index);
                                setLightboxImage(item);
                              }}
                              className={`h-2.5 rounded-full transition ${
                                index === lightboxIndex ? "w-8 bg-cyan-300" : "w-2.5 bg-slate-600 hover:bg-slate-400"
                              }`}
                              aria-label={`Open image ${index + 1}: ${item.title}`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </aside>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
}
