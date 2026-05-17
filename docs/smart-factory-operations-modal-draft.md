# Smart Factory Operations Platform Modal Draft

Status: draft content only. Do not move this into the modal until each section is reviewed.

## Goal

Build the modal as an interview story for a real factory operations platform.

The story should explain that this project connects:

- Machine data from PLC / IoT / collector / MSSQL
- MMS dashboard and machine status reporting
- Job Request workflow between Production, Maintenance, QC, and Production confirmation
- Preventive Maintenance
- Tooling Store
- Admin master data and role scope
- Socket.IO / realtime platform integration
- Git and CI/CD deployment workflow
- Next step toward Big Data and AI

Important wording rule:

- Do not say the data is simulated.
- Do not say the content is generated for display.
- Use words like "captured evidence", "actual workflow", "machine data flow", "operation evidence", and "verified E2E flow".

## Recommended Story Order

1. Opening: what the platform is
2. Factory problem: why the platform was needed
3. Machine data foundation: PLC to MSSQL
4. Platform integration: MSSQL, API, Socket.IO, modules
5. Feature-by-feature explanation
6. Main E2E story: Job Request from Production to Completed
7. Business benefit numbers
8. Project working process: requirements to deploy
9. Development workflow
10. Problems and solutions
11. Next step: Big Data and AI
12. Screenshot evidence gallery

## Section 1: Opening

Purpose:
Explain the project in one simple sentence before showing details.

Draft English copy:

> Smart Factory Operations Platform is a real factory operations system that connects machine data, maintenance workflow, QC inspection, preventive maintenance, tooling inventory, and admin master data into one traceable platform.

Supporting points:

- Not only a dashboard
- Connects machine-side data and department workflow
- Uses shared status and shared history
- Designed for interview explanation: easy to understand, not too technical at the start

## Section 2: Factory Problem

Purpose:
Explain the old working method and why the system matters.

Draft English copy:

> Before this platform, Production, Maintenance, QC, PM, and Tooling worked with separate information. Job status was followed by walking, phone calls, chat messages, paper forms, or spreadsheets. This made ownership unclear, response slower, and history difficult to trace.

Pain points:

- Production issues were not connected to Maintenance and QC in one flow
- Job ownership was unclear after handover
- QC rejection and Production rejection could be lost in chat
- PM checklist/report work used paper or spreadsheet style work
- Tooling stock needed manual checking
- Deployment was difficult because code had to be copied through Drive and installed machine by machine

## Section 3: Machine Data Foundation

Purpose:
Show IoT and Arduino capability and explain where machine data comes from.

Flow:

```text
PLC -> IoT Box / Arduino Link -> PC Collector -> Switching Hub -> MSSQL Server -> Backend API -> Web Dashboard / Socket.IO
```

Numbers to show:

- 4 Areas
- 14 Machine Types
- 100 Machines
- 73,200 MMS History Rows

Draft English copy:

> Machine data starts from PLC-side signals and passes through an IoT Box, PC Collector, and factory network before being stored in MSSQL Server. This gives the platform a trusted data foundation before the data is used by dashboards, job requests, preventive maintenance, tooling, and future AI analysis.

Recommended visual:

- `iot-machine-data-flow.png`

## Section 4: Platform Architecture and Socket.IO

Purpose:
Explain how features are connected instead of isolated.

Flow:

```text
Admin Master Data -> MSSQL Server -> Backend API -> Socket.IO -> MMS / Job Request / PM / Tooling
```

Draft English copy:

> MSSQL is the source of truth for machine master data, job requests, PM records, tooling movement, calibration, and reports. Backend APIs apply business rules, while Socket.IO helps operation screens receive status updates faster when ownership changes.

Explain simply:

- Admin creates common master data
- MMS reads machine and history data
- Job Request uses machine, area, type, and user data
- PM maps checklists to machines
- Tooling tracks stock, tools, borrow/return, and calibration
- Socket.IO supports realtime operation updates

Recommended visual:

- `socket-platform-flow.svg`

## Section 5: Feature-by-Feature Content

This section should be written as separate feature cards or sections, not one long mixed explanation.

### 5.1 Machine Data and IoT Collection

What it does:
Collects machine-side signals and sends them into the platform database.

Flow:

```text
PLC -> IoT Box / Arduino Link -> PC Collector -> Switching Hub -> MSSQL Server
```

Evidence / scale:

- 4 Areas
- 14 Machine Types
- 100 Machines
- 73,200 MMS History Rows

Interview point:
This shows ability to connect software with factory devices and Arduino/IoT-style hardware.

### 5.2 MMS Dashboard

What it does:
Shows machine operation status, dashboard summary, machine layout, graph report, table report, and export screen.

Flow:

```text
MSSQL machine history -> Backend API -> MMS dashboard -> reports / event panel
```

Screenshots to use:

- `mms-overview-live-dashboard.png`
- `mms-machine-layout.png`
- `mms-got-event-run.png`
- `mms-table-report-export.png`

Benefit:

- 60 min/day saved from machine checking and report preparation

### 5.3 Job Request: Production, Maintenance, QC

What it does:
Controls the full repair workflow and keeps ownership/history visible.

Flow:

```text
Production Create Request
-> Maintenance Accept
-> Maintenance Repair
-> QC Inspection
-> Production Confirm
-> Completed
```

Reject loops:

```text
QC Reject -> Maintenance Rework
Production Reject -> QC Recheck
```

Screenshots to use:

- `job-production-create-request.png`
- `job-maintenance-accept.png`
- `job-qc-reject-maintenance.png`
- `job-production-reject-qc.png`
- `job-production-complete.png`
- `job-completed-history.png`

Benefit:

- Job follow-up: 120 min/day saved
- Maintenance history lookup: 85 min/day saved
- Reject/confirm communication: 32 min/day saved
- Total Job Request related saving: 237 min/day

### 5.4 Preventive Maintenance

What it does:
Turns maintenance work into planned inspection with checklist and OK/NG records.

Flow:

```text
PM Type -> Checklist -> Machine Mapping -> PM Plan -> Inspection -> OK / NG Report
```

Screenshots to use:

- `pm-dashboard.png`
- `pm-checklist-modal.png`
- `pm-inspection-ok.png`
- `pm-ng-report.png`

Benefit:

- 32 min/day saved from checklist/report preparation

### 5.5 Tooling Store

What it does:
Controls spare parts, tools, borrow/return, overdue, calibration, movement history, and stock validation.

Flow:

```text
Master Data -> Stock In / Stock Out -> Balance -> Borrow / Return -> Overdue -> Calibration -> Reports
```

Screenshots to use:

- `tooling-stock-balance.png`
- `tooling-borrow-issue.png`
- `tooling-calibration-expired.png`
- `tooling-insufficient-stock-error.png`

Benefit:

- 64 min/day saved from stock checking
- Prevents stock-out quantity from exceeding available balance

### 5.6 Admin Master Data and Roles

What it does:
Keeps shared data consistent across every module.

Data controlled:

- Department
- Area
- Machine Type
- Machine No
- Employee
- User
- Role scope

Screenshots to use:

- `admin-machine-master.png`
- `admin-user-role.png`
- `admin-delete-confirm.png`

Benefit:

- 20 min/day saved from repeated data entry and mismatched master data

### 5.7 Socket.IO and Cross-Module Integration

What it does:
Helps operation screens update faster when status or ownership changes.

Flow:

```text
MSSQL -> API business rules -> Socket.IO event -> operation screen update
```

Interview point:
This shows that the modules are connected through the platform layer, not just separate pages.

### 5.8 Deployment and Working Process

What it does:
Explains how the project is built and delivered in the factory environment.

Old deployment:

```text
Copy code -> Drive -> install each machine one by one
```

New deployment:

```text
Git -> CI/CD -> controlled release
```

Benefit:

- Before: 150 min/release
- After: 15 min/release
- Saving: 135 min/release
- Deployment effort cut: 90%

## Section 6: Benefit Summary

Use as estimated operational impact.

Basis:

- 100 machines
- 4 areas
- 14 machine types
- 180 THB/hour labor-time estimate
- 22 workdays/month

Daily feature savings:

| Feature | Saving |
|---|---:|
| MMS monitoring/report | 60 min/day |
| Job status follow-up | 120 min/day |
| Maintenance history lookup | 85 min/day |
| QC / Production reject communication | 32 min/day |
| Preventive Maintenance | 32 min/day |
| Tooling Store | 64 min/day |
| Admin master data | 20 min/day |
| Total | 413 min/day |

Headline numbers:

- 413 min/day
- 6.9 hours/day
- 1 to 1.5 people per shift of routine coordination workload
- 1,242 THB/day
- 27,324 THB/month
- 327,888 THB/year
- 90% deployment effort reduction

Wording rule:
Use "workload reduction", not "headcount reduction".

## Section 7: Project Workflow

Purpose:
Show how the work was handled from requirements to deployment.

Flow:

```text
Observe Shopfloor
-> Interview Production / QC / Maintenance
-> Map Current Workflow
-> Design DB / API / Status Flow
-> Build Prototype
-> Test with Real Users
-> Capture E2E Evidence
-> Deploy via Git CI/CD
-> Collect Feedback
```

Key story:

- Requirement gathering was hard because Production was busy
- Solution: observe real work first
- Summarize workflow and pain points clearly
- Then meet Production, QC, and MM with focused questions

Recommended visual:

- `project-lifecycle-flow.svg`

## Section 8: Development Workflow

Flow:

```text
Git Branch
-> Frontend UI
-> Backend API
-> MSSQL Schema / Queries
-> Socket.IO Events
-> Manual + E2E Test
-> Screenshot Evidence
-> CI/CD
-> Release to Factory PC / Server
```

Recommended visual:

- `development-workflow-flow.svg`

## Section 9: Problems and Solutions

### Problem 1: Deployment was hard

Problem:
At the beginning, deployment required copying code to Drive and installing it machine by machine.

Impact:

- Hard to control version
- Slow update
- Difficult rollback
- Easy to have different versions on different PCs

Solution:
Use Git and CI/CD.

Result:
Deployment changed from 150 min/release to 15 min/release.

### Problem 2: Requirements were hard to collect

Problem:
Production had a lot of work and limited time for IoT/system requirement meetings.

Solution:

- Observe the shopfloor directly
- Understand the real work first
- Summarize the current workflow and pain points
- Meet Production, QC, and Maintenance with focused questions

Result:
Requirements became clearer and meetings took less time.

### Problem 3: Job flow was not linear

Problem:
QC can reject back to Maintenance, and Production can reject back to QC.

Solution:
Use a status-driven workflow with action history.

Result:
Every rejection and handover stays traceable.

### Problem 4: Stock validation

Problem:
Users can create stock movement that exceeds available balance if validation is weak.

Solution:
Validate stock movement in API before writing transaction to MSSQL.

Result:
The API rejects over-issue and prevents inventory mismatch.

## Section 10: Next Step

Title:
Big Data and AI for Smart Factory

Draft English copy:

> The next step is to collect long-term machine history as Big Data and use AI to support anomaly detection, downtime prediction, predictive maintenance, spare-part demand forecasting, and maintenance priority recommendation.

Flow:

```text
Machine History
-> Big Data Storage
-> Feature Engineering
-> AI Model
-> Maintenance / Production Recommendation
```

## Final Interview Script Draft

> This project started from a real factory problem: each department had useful information, but the information was separated. Production had machine problems, Maintenance had repair action, QC had pass/reject decisions, PM had checklists, and Tooling had stock and calibration data.
>
> I designed the platform to connect machine-side data and department workflows into one traceable system. Machine data flows from PLC to IoT Box, PC Collector, Switching Hub, and MSSQL Server. From there, the platform serves MMS dashboards, Job Request, Preventive Maintenance, Tooling Store, and Admin master data.
>
> The main operational flow is Job Request. Production creates a request, Maintenance accepts and repairs it, QC inspects it, and Production confirms it. The system also supports QC rejection back to Maintenance and Production rejection back to QC, with full action history.
>
> The project also includes PM checklist and OK/NG inspection, Tooling stock and calibration, shared Admin master data, and Socket.IO-style realtime updates. From a 100-machine operation, the estimated workload saving is 6.9 hours per day, or about 27,324 THB per month in labor-time cost.
>
> The hardest parts were requirement gathering and deployment. Production had limited time, so I studied the shopfloor first and summarized the workflow before meeting Production, QC, and Maintenance. Deployment was first done by copying code through Drive, so I moved the workflow toward Git and CI/CD to control version and reduce release effort.
>
> The next step is to collect long-term machine history as Big Data and apply AI for anomaly detection, downtime prediction, predictive maintenance, and spare-part forecasting.

## Asset List

Main flow and diagrams:

- `/projects/smart-factory-operations/iot-machine-data-flow.png`
- `/projects/smart-factory-operations/socket-platform-flow.svg`
- `/projects/smart-factory-operations/mms-feature-flow.svg`
- `/projects/smart-factory-operations/pm-feature-flow.svg`
- `/projects/smart-factory-operations/tooling-feature-flow.svg`
- `/projects/smart-factory-operations/project-lifecycle-flow.svg`
- `/projects/smart-factory-operations/development-workflow-flow.svg`

MMS:

- `/projects/smart-factory-operations/mms-overview-live-dashboard.png`
- `/projects/smart-factory-operations/mms-machine-layout.png`
- `/projects/smart-factory-operations/mms-got-event-run.png`
- `/projects/smart-factory-operations/mms-table-report-export.png`

Job Request:

- `/projects/smart-factory-operations/job-production-create-request.png`
- `/projects/smart-factory-operations/job-maintenance-accept.png`
- `/projects/smart-factory-operations/job-qc-reject-maintenance.png`
- `/projects/smart-factory-operations/job-production-reject-qc.png`
- `/projects/smart-factory-operations/job-production-complete.png`
- `/projects/smart-factory-operations/job-completed-history.png`

Preventive Maintenance:

- `/projects/smart-factory-operations/pm-dashboard.png`
- `/projects/smart-factory-operations/pm-checklist-modal.png`
- `/projects/smart-factory-operations/pm-inspection-ok.png`
- `/projects/smart-factory-operations/pm-ng-report.png`

Tooling:

- `/projects/smart-factory-operations/tooling-stock-balance.png`
- `/projects/smart-factory-operations/tooling-borrow-issue.png`
- `/projects/smart-factory-operations/tooling-calibration-expired.png`
- `/projects/smart-factory-operations/tooling-insufficient-stock-error.png`

Admin:

- `/projects/smart-factory-operations/admin-machine-master.png`
- `/projects/smart-factory-operations/admin-user-role.png`
- `/projects/smart-factory-operations/admin-delete-confirm.png`
