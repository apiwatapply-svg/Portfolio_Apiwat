# Smart Factory Operations Platform - Benefit Notes

## Purpose

This document stores the benefit calculation agreed for the Smart Factory Operations Platform modal.

Use the wording as an estimated operational impact, not as an official production audit number.

Recommended wording:

> Estimated operational impact

## Basis

The benefit estimate is calculated from the system scale found from the project data:

| Basis | Value |
|---|---:|
| Areas | 4 |
| Machine types | 14 |
| Machines | 100 |
| MMS history rows | 73,200 |
| Labor-time estimate | 180 THB/hour |
| Working days/month | 22 days |

## Conservative Estimate - First Calculation

This first calculation covers the main manual coordination workflows, but does not include every feature yet.

### Before / After

| Area | Before | After | Saving |
|---|---:|---:|---:|
| Follow-up job status | 15 min/case | 3 min/case | 12 min/case |
| Maintenance history lookup | 20 min/case | 3 min/case | 17 min/case |
| QC / Production reject communication | 10 min/round | 2 min/round | 8 min/round |
| PM checklist/report | 40 min/round | 8 min/round | 32 min/round |
| Tooling stock check | 10 min/item | 2 min/item | 8 min/item |
| Deploy update | 150 min/release | 15 min/release | 135 min/release |

### Daily Estimate

Assumed daily usage:

| Activity | Volume/day | Saving |
|---|---:|---:|
| Job follow-up | 10 cases | 120 min/day |
| Maintenance history lookup | 5 cases | 85 min/day |
| Reject / confirm communication | 4 rounds | 32 min/day |
| PM checklist/report | 1 round | 32 min/day |
| Tooling stock check | 8 items | 64 min/day |
| Total | - | 333 min/day |

Total conservative saving:

- 333 min/day
- 5.5 hours/day

### People Workload

Do not write that the system reduces headcount.

Recommended English wording:

> Reduced manual coordination workload by approximately 1 person per shift, or 50-70% of routine follow-up work.

Recommended Thai wording:

> ลดภาระงานประสานงานซ้ำ ๆ ได้ประมาณ 1 คนต่อกะ หรือประมาณ 50-70% ของงานตามสถานะ/รวบรวมข้อมูลแบบ manual

### Labor-Time Cost Saving

Using 180 THB/hour:

| Period | Saving |
|---|---:|
| Per day | 5.5 hr x 180 = 990 THB/day |
| Per month, 22 workdays | 21,780 THB/month |
| Per year | 261,360 THB/year |

### Deployment Saving

| Deployment | Saving |
|---|---:|
| Manual deploy saving | 135 min/release |
| Cost at 180 THB/hour | 405 THB/release |
| If 24 releases/year | 9,720 THB/year |

### Conservative Modal Copy

English:

> Estimated impact: reduced manual coordination by 5.5 hours/day, equivalent to 1 person per shift of routine follow-up workload, saving approximately 21,780 THB/month or 261,360 THB/year in labor-time cost. Deployment workflow improved from 150 minutes/release to 15 minutes/release, reducing release effort by 90%.

Thai interview version:

> จาก flow ที่วัดแบบ conservative estimate ระบบช่วยลดเวลาตามงานและรวบรวมข้อมูลจากเดิมประมาณ 333 นาทีต่อวัน หรือ 5.5 ชั่วโมงต่อวัน เทียบเท่าภาระงานประสานงานประมาณ 1 คนต่อกะ ถ้าคิดค่าแรงเฉลี่ย 180 บาทต่อชั่วโมง จะประหยัดต้นทุนเวลาได้ประมาณ 21,780 บาทต่อเดือน หรือประมาณ 261,360 บาทต่อปี และ flow deploy จากเดิมที่ต้อง copy ลงเครื่องทีละเครื่องประมาณ 150 นาทีต่อ release เหลือประมาณ 15 นาที ลด effort ไปประมาณ 90% ครับ.

## Scale Clarification

The conservative estimate above is calculated from:

- 100 machines
- 4 areas
- 14 machine types
- 73,200 MMS history rows

Recommended modal wording:

> Estimated from a 100-machine operation across 4 areas and 14 machine types: reduced manual coordination by approximately 5.5 hours/day, equivalent to 1 person per shift, saving around 21,780 THB/month or 261,360 THB/year in labor-time cost.

Thai:

> ประมาณการจากระบบขนาด 100 เครื่อง ครอบคลุม 4 Areas และ 14 Machine Types ช่วยลดเวลาประสานงาน manual ได้ประมาณ 5.5 ชั่วโมงต่อวัน หรือเทียบเท่างานประสานงานประมาณ 1 คนต่อกะ คิดเป็นต้นทุนเวลาประมาณ 21,780 บาทต่อเดือน หรือ 261,360 บาทต่อปี.

## Full Core Feature Estimate

The 5.5 hours/day estimate covers the main workflow features, but it does not include every feature.

To cover all core features in the modal, use this full estimate.

### Features Included

| Feature | Saving |
|---|---:|
| MMS monitoring/report | 60 min/day |
| Job Request flow | 120 min/day |
| Maintenance history lookup | 85 min/day |
| QC / Production reject communication | 32 min/day |
| Preventive Maintenance | 32 min/day |
| Tooling Store | 64 min/day |
| Admin master data | 20 min/day |
| Total | 413 min/day |

### Full Estimate Result

| Metric | Value |
|---|---:|
| Time saving/day | 413 min/day |
| Time saving/day | 6.9 hours/day |
| Workload reduction | 1-1.5 people per shift of routine coordination workload |
| Labor-time saving/day | 1,242 THB/day |
| Labor-time saving/month | 27,324 THB/month |
| Labor-time saving/year | 327,888 THB/year |
| Deployment effort reduction | 90% |
| Deploy before | 150 min/release |
| Deploy after | 15 min/release |

### Recommended Modal Copy for All Core Features

Use this version in the modal when explaining the overall benefit:

> Estimated from all core features across a 100-machine operation: reduced manual work by approximately 6.9 hours/day, equivalent to 1-1.5 people per shift of routine coordination workload, saving around 27,324 THB/month or 327,888 THB/year in labor-time cost. Deployment effort was reduced by 90%, from 150 minutes/release to 15 minutes/release.

## Notes for Modal Writing

- Use the full core feature estimate for the final Smart Factory Operations Platform modal.
- Do not write that the system reduces headcount.
- Use "workload reduction" or "routine coordination workload reduction".
- Use "estimated operational impact" to keep the claim credible.
- The estimate is based on a 100-machine operation, 4 areas, and 14 machine types.
- Deployment benefit should be shown separately because it is per release, not per day.
