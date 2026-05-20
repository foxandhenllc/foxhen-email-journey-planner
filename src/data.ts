export type ItemStatus = "backlog" | "active" | "blocked" | "ready" | "done";

export type WorkItem = {
  id: string;
  title: string;
  category: string;
  owner: string;
  status: ItemStatus;
  priority: number;
  effort: number;
  friction: number;
  value: number;
  due: string;
  notes: string;
};

export type QualityCheck = {
  id: string;
  label: string;
  passed: boolean;
  weight: number;
};

export const sample: {
  repoName: string;
  title: string;
  subtitle: string;
  serviceLine: string;
  description: string;
  repositoryUrl: string;
  liveDemoUrl: string;
  theme: { accent: string; accent2: string; ink: string; soft: string; warm: string };
  items: WorkItem[];
  checks: QualityCheck[];
  deliverables: string[];
} = {
  "repoName": "foxhen-email-journey-planner",
  "title": "Email Journey Planner",
  "subtitle": "lifecycle journey",
  "serviceLine": "Email marketing workflow",
  "description": "Plan lifecycle email sequences with segments, triggers, timing, QA, and launch handoff.",
  "repositoryUrl": "https://github.com/foxandhenllc/foxhen-email-journey-planner",
  "liveDemoUrl": "https://foxhen-email-journey-planner.vercel.app",
  "theme": {
    "accent": "#6e2c49",
    "accent2": "#75c7b1",
    "ink": "#160711",
    "soft": "#faedf4",
    "warm": "#e6fff8"
  },
  "items": [
    {
      "id": "ema-1",
      "title": "Welcome 1",
      "category": "Intake",
      "owner": "Chris",
      "status": "active",
      "priority": 5,
      "effort": 2,
      "friction": 1,
      "value": 5,
      "due": "Today",
      "notes": "Sample lifecycle journey work item for email marketing workflow."
    },
    {
      "id": "ema-2",
      "title": "Welcome 2",
      "category": "Build",
      "owner": "Fox & Hen",
      "status": "backlog",
      "priority": 4,
      "effort": 4,
      "friction": 2,
      "value": 4,
      "due": "24h",
      "notes": "Sample lifecycle journey work item for email marketing workflow."
    },
    {
      "id": "ema-3",
      "title": "Trial nudge",
      "category": "Review",
      "owner": "Buyer",
      "status": "blocked",
      "priority": 3,
      "effort": 3,
      "friction": 4,
      "value": 4,
      "due": "48h",
      "notes": "Sample lifecycle journey work item for email marketing workflow."
    },
    {
      "id": "ema-4",
      "title": "Winback",
      "category": "Export",
      "owner": "Automation",
      "status": "ready",
      "priority": 4,
      "effort": 2,
      "friction": 2,
      "value": 3,
      "due": "This week",
      "notes": "Sample lifecycle journey work item for email marketing workflow."
    },
    {
      "id": "ema-5",
      "title": "Launch QA",
      "category": "Intake",
      "owner": "QA",
      "status": "backlog",
      "priority": 2,
      "effort": 1,
      "friction": 1,
      "value": 3,
      "due": "Waiting",
      "notes": "Sample lifecycle journey work item for email marketing workflow."
    },
    {
      "id": "ema-6",
      "title": "Copy outline",
      "category": "Build",
      "owner": "Chris",
      "status": "done",
      "priority": 5,
      "effort": 5,
      "friction": 3,
      "value": 5,
      "due": "Next pass",
      "notes": "Sample lifecycle journey work item for email marketing workflow."
    }
  ],
  "checks": [
    {
      "id": "payer",
      "label": "Payer or owner is clear",
      "passed": true,
      "weight": 18
    },
    {
      "id": "deliverable",
      "label": "Deliverable has acceptance criteria",
      "passed": true,
      "weight": 18
    },
    {
      "id": "friction",
      "label": "Account/access friction is documented",
      "passed": false,
      "weight": 14
    },
    {
      "id": "handoff",
      "label": "Handoff package is generated",
      "passed": false,
      "weight": 16
    },
    {
      "id": "reuse",
      "label": "Repeatable pipeline note exists",
      "passed": true,
      "weight": 12
    }
  ],
  "deliverables": [
    "Ranked board",
    "Editable item inspector",
    "Readiness checklist",
    "Exportable handoff report"
  ]
};
