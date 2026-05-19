export const sample = {
  "repoName": "foxhen-email-journey-planner",
  "title": "Email Journey Planner",
  "subtitle": "Lifecycle sequence design sample",
  "serviceLine": "Email marketing workflow",
  "heroTitle": "Plan an email journey from trigger to conversion.",
  "heroCopy": "A fictional lifecycle planner that maps segments, triggers, email timing, copy goals, QA checks, and performance assumptions.",
  "primaryAction": "Map journey",
  "secondaryAction": "Review QA",
  "repositoryUrl": "https://github.com/foxandhenllc/foxhen-email-journey-planner",
  "liveDemoUrl": "https://foxhen-email-journey-planner.vercel.app",
  "theme": {
    "accent": "#6e2c49",
    "accent2": "#75c7b1",
    "ink": "#160711",
    "soft": "#faedf4",
    "warm": "#e6fff8",
    "surface": "#fffaf4",
    "muted": "#5c667a",
    "border": "rgba(7, 18, 31, 0.12)"
  },
  "metrics": [
    {
      "label": "Emails mapped",
      "value": "8",
      "note": "welcome + winback"
    },
    {
      "label": "Segment fit",
      "value": "92%",
      "note": "+18 pts"
    },
    {
      "label": "QA checks",
      "value": "24",
      "note": "ready"
    }
  ],
  "stages": [
    {
      "label": "Audience",
      "detail": "Define segment, trigger, intent, and business outcome.",
      "status": "ready",
      "owner": "Marketing",
      "index": 1
    },
    {
      "label": "Sequence",
      "detail": "Map timing, subject role, CTA, and dependency for each email.",
      "status": "active",
      "owner": "Studio",
      "index": 2
    },
    {
      "label": "QA",
      "detail": "Check suppression, mobile rendering, links, and measurement assumptions.",
      "status": "waiting",
      "owner": "Owner",
      "index": 3
    },
    {
      "label": "Launch",
      "detail": "Package copy notes and build checklist for implementation.",
      "status": "queued",
      "owner": "Ops",
      "index": 4
    }
  ],
  "workItems": [
    {
      "title": "Welcome 1",
      "detail": "Clarify first promise and CTA",
      "status": "ready"
    },
    {
      "title": "Welcome 2",
      "detail": "Add product education proof",
      "status": "active"
    },
    {
      "title": "Winback",
      "detail": "Waiting on offer decision",
      "status": "waiting"
    },
    {
      "title": "Launch QA",
      "detail": "Queued after copy review",
      "status": "queued"
    }
  ],
  "deliverables": [
    {
      "title": "Journey map",
      "detail": "Trigger, delay, goal, and CTA for each message."
    },
    {
      "title": "QA checklist",
      "detail": "Deliverability, links, rendering, and analytics prep."
    },
    {
      "title": "Copy outline",
      "detail": "Message intent and reusable draft structure."
    }
  ],
  "timeline": [
    {
      "time": "0-2 hrs",
      "detail": "Audit goal and audience"
    },
    {
      "time": "2-12 hrs",
      "detail": "Map journey and copy framework"
    },
    {
      "time": "12-24 hrs",
      "detail": "QA notes and launch handoff"
    }
  ],
  "proof": [
    "Leverages Chris's AWeber product and email background.",
    "Fits paid technical marketing and lifecycle ops work.",
    "No real subscriber data is used."
  ]
} as const;

export type StageStatus = "ready" | "active" | "waiting" | "queued";
export type DemoStage = (typeof sample.stages)[number];
export type WorkItem = (typeof sample.workItems)[number];
