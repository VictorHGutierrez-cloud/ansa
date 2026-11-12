export const CLIENT = {
  name: "ANSA McAL",
  legalName: "ANSA McAL Group",
  market: "Caribbean",
  employees: "~6,000",
  companies: "48 operating companies",
  factorialLogoPath: `${import.meta.env.BASE_URL}factorial-logo.png`,
};

export const NAV = [
  { id: "purpose", label: "Purpose" },
  { id: "scope", label: "Scope" },
  { id: "architecture", label: "Architecture" },
  { id: "phases", label: "Phases" },
  { id: "calendar", label: "Calendar" },
  { id: "security", label: "Security" },
  { id: "investment", label: "Investment" },
] as const;

export const IN_SCOPE = [
  "ITAM / inventory, including network hardware as accessories",
  "MDM: macOS, Windows, iOS corporate enrolment",
  "Android BYOD Work Profile + company-owned staged provisioning",
  "Joiner / Mover / Leaver automation from SAP SuccessFactors",
  "Procurement and equipment catalogue",
  "SaaS and licence visibility",
  "Asset-related ticketing and remote assistance",
  "Approvals, reporting, audit trail, asset governance",
];

export const OUT_OF_SCOPE = [
  "Payroll and core HR record-keeping",
  "ITIL incident, problem, SLA timers, change, and CMDB impact modelling (stays in SysAid)",
  "Network redesign and non-IT facility assets",
  "Android corporate Zero-Touch (no committed date)",
  "Native employee buyback with Finance payment",
  "Signature capture and acceptable-use acknowledgement",
];

export const DECISIONS = [
  {
    id: "AD-01",
    decision: "SAP SuccessFactors is the only system of record for people data.",
    why: "HR events drive asset actions. No second employee database.",
  },
  {
    id: "AD-02",
    decision: "Factorial IT is the system of record for asset operations.",
    why: "One place for ITAM, MDM, procurement, SaaS, and evidence.",
  },
  {
    id: "AD-03",
    decision: "Permissions follow Central, Regional, and Local IT, plus HR, Finance, and InfoSec.",
    why: "Matches how ANSA operates. Least privilege by company and region.",
  },
  {
    id: "AD-04",
    decision: "Native configuration only. No custom code.",
    why: "Lower cost to run, and a cleaner handover to business-as-usual.",
  },
  {
    id: "AD-05",
    decision: "Rollout by cohort and geography. No big-bang cutover.",
    why: "Risk stays contained. A cohort can roll back on its own.",
  },
  {
    id: "AD-06",
    decision: "Two policies: Equipment (who gets what) and Purchasing (who authorises spend).",
    why: "Entitlement and spend approval stay separate.",
  },
  {
    id: "AD-07",
    decision: "POC on macOS, Windows, iOS, and Android is a hard gate before production go-live.",
    why: "All in-scope device paths are proven before the first live cohort.",
  },
  {
    id: "AD-08",
    decision: "Android Phase 1 is Work Profile plus company-owned wipe from the console. Zero-Touch is out.",
    why: "Scope matches what the platform can deliver. No invented Android date.",
  },
];

export const OS_MATRIX = [
  {
    os: "macOS",
    enrol: "In scope",
    jml: "In scope",
    offboard: "Lock and wipe",
  },
  {
    os: "Windows",
    enrol: "In scope",
    jml: "In scope",
    offboard: "Lock and wipe",
  },
  {
    os: "iOS",
    enrol: "In scope",
    jml: "In scope",
    offboard: "Lock and wipe",
  },
  {
    os: "Android",
    enrol: "BYOD Work Profile + company-owned staged setup. Zero-Touch out.",
    jml: "Partial — no Zero-Touch",
    offboard: "Company-owned: remote wipe. BYOD: disenroll only.",
  },
];

export const PHASES = [
  {
    phase: "0 — Planning",
    when: "TQ0 (early)",
    objective: "Charter, steering, risks, communications. Lock the Android BYOD boundary.",
    exit: "Charter signed",
  },
  {
    phase: "1 — Discovery",
    when: "TQ0",
    objective: "Nine workshops. Signed inputs. Split corporate vs BYOD Android.",
    exit: "Workshop outputs signed",
  },
  {
    phase: "2 — Design + configure",
    when: "TQ0",
    objective: "Blueprint, roles, catalogue, workflows, MDM paths including Android Work Profile.",
    exit: "Design approved",
  },
  {
    phase: "3 — SuccessFactors + POC",
    when: "TQ0 → TQ+1",
    objective: "Employee sync and joiner/mover/leaver events in staging. Prove all four OS paths.",
    exit: "POC criteria met",
  },
  {
    phase: "Gate",
    when: "End of TQ0",
    objective: "Steering signs the POC.",
    exit: "Mandatory before go-live",
  },
  {
    phase: "4 — Go-live",
    when: "Start of TQ+1",
    objective: "Production for the POC cohort (~500 people / ~1,000 devices).",
    exit: "POC cohort live",
  },
  {
    phase: "5 — Rollouts",
    when: "TQ+1 → TQ+2",
    objective: "Add cohorts by geography until ~10,000 devices.",
    exit: "Scale target reached",
  },
  {
    phase: "6 — Hypercare",
    when: "After TQ+2",
    objective: "Stabilise, hand over the runbook, retire the SysAid asset module per cohort.",
    exit: "Operational acceptance",
  },
];

export const WORKSHOPS = [
  ["1", "Asset governance", "Lifecycle states, mandatory fields, evidence, local disposal vendors"],
  ["2", "Procurement & catalogue", "Equipment Policy, Purchasing Policy, country catalogues"],
  ["3", "Joiner / Mover / Leaver", "Event-to-automation map"],
  ["4", "Security & compliance", "MDM baseline, access matrix, retention"],
  ["5", "Identity & SSO", "Identity provider, single sign-on, SCIM"],
  ["6", "MDM operations", "Device groups; macOS, Windows, iOS; Android via Microsoft 365"],
  ["7", "SaaS & licences", "Register, approval, and reclamation rules"],
  ["8", "Reporting", "KPI list and dashboards"],
  ["9", "SuccessFactors", "Field map, event contract, error handling"],
];

export const QUARTERS = [
  {
    quarter: "TQ0",
    commercial: "Platform USD 0",
    focus:
      "Kick-off, planning, discovery, configuration, SuccessFactors integration, POC in progress. Professional Services invoice USD 5,000 at kick-off.",
  },
  {
    quarter: "TQ0 exit",
    commercial: "Platform USD 0",
    focus: "POC review. Steering sign-off. Go-live readiness.",
  },
  {
    quarter: "TQ+1",
    commercial: "First platform invoice",
    focus: "Official go-live. POC cohort live. Rollout A — Trinidad. Rollout B — Barbados and Guyana.",
  },
  {
    quarter: "TQ+2",
    commercial: "Billable",
    focus: "Rollouts C–D. Progress toward ~10,000 devices. Hypercare starts at the exit.",
  },
  {
    quarter: "TQ+3+",
    commercial: "Billable",
    focus: "Steady state. SysAid asset module retired per cohort. Quarterly true-up.",
  },
];

export const GATES = [
  {
    gate: "POC",
    entry: "Design approved. Sample fleet on macOS, Windows, iOS, and Android BYOD.",
    boundary: "No go-live without Steering POC sign-off.",
  },
  {
    gate: "Go-live",
    entry: "POC signed. MDM baseline signed. SuccessFactors sync stable.",
    boundary: "SysAid stays in shadow mode. Joiner/mover/leaver kill-switch.",
  },
  {
    gate: "Rollout A",
    entry: "Go-live exit met.",
    boundary: "A company can revert to SysAid.",
  },
  {
    gate: "Rollouts B–D",
    entry: "Previous cohort exit met.",
    boundary: "Go / no-go per cohort. Quarterly true-up matches cost to devices.",
  },
];

export const RACI = [
  ["Programme approval", "CIO", "PMO", "CISO, Finance, HR, Procurement"],
  ["SuccessFactors integration", "PMO", "Solution architect + HR", "InfoSec, Central IT"],
  ["MDM baseline", "CISO", "Solution architect + Central IT", "Regional IT"],
  ["Rollout execution", "PMO", "Central / Regional / Local IT", "HR, InfoSec, Procurement"],
  ["Business as usual", "CIO", "Central / Regional / Local IT", "HR, InfoSec, Finance, Procurement"],
];

export const DELIVERABLES = [
  ["D01", "This package / statement of work", "0", "CIO"],
  ["D02", "Project charter and governance", "0", "Steering"],
  ["D03", "Communication plan", "0", "PMO"],
  ["D04", "Discovery workshop outputs", "1", "Working group"],
  ["D05–D06", "Equipment Policy and Purchasing Policy", "1–2", "CIO / CFO delegate"],
  ["D07–D09", "Solution design, SF integration, security baseline", "2–3", "Steering / HR / CISO"],
  ["D10–D11", "Target operating model and configuration runbook", "2–3", "CIO / Central IT"],
  ["D12", "POC sign-off pack", "3", "Steering"],
  ["D13–D14", "Test, rollout, and hypercare packs", "4–6", "Business leads / Steering / CIO"],
  ["D15", "Live risk register and RACI", "0–6", "Steering"],
];

export const PLATFORM_INCLUDES = [
  "ITAM / inventory",
  "MDM for macOS, Windows, iOS, Android BYOD, and company-owned wipe",
  "Asset tickets and remote assistance",
  "Joiner / mover / leaver automations",
  "Procurement and catalogue",
  "SaaS visibility",
  "Approvals and audit trail",
];

export const PS_INCLUDES = [
  "Phases 0–3 (POC scope)",
  "Nine discovery workshops",
  "SuccessFactors integration design and build support",
  "POC validation and go-live readiness",
  "Rollout runbooks and a training foundation",
];

export const CASH = [
  ["TQ0 kick-off", "USD 0", "USD 5,000", "USD 5,000"],
  ["Rest of TQ0", "USD 0", "—", "USD 0"],
  ["TQ+1 (example: 1,000 devices)", "~USD 6,000 / month", "—", "~USD 6,000 / month"],
  ["TQ+1 → TQ+2", "USD 6 × enrolled devices", "—", "Quarterly true-up"],
  ["TQ+3+", "USD 6 × enrolled devices", "—", "Quarterly true-up"],
];
