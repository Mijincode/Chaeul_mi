import React, { useState } from "react";
import "./styles/JourneyMap.css";
const Mood = ({ score = 3 }) => {
  const dots = [1, 2, 3, 4, 5];
  return (
    <div className="jm-mood" aria-label={`Emotion ${score} out of 5`}>
      {dots.map((d) => (
        <span key={d} className={`jm-dot ${d <= score ? "is-filled" : ""}`} />
      ))}
    </div>
  );
};

const data = {
  before: [
    {
      stage: "Discover",
      actions: "Sees IG post / Google result; lands on site.",
      feelings: 3,
      painOrImprove: "Limited clarity on services; IG DMs carry most info.",
      touchpoints: "Instagram, Google",
      kpi: "Landing CTR / bounce",
    },
    {
      stage: "Browse",
      actions: "Scans gallery for 'natural' results.",
      feelings: 3,
      painOrImprove:
        "Mixed content; harder to find category-specific examples.",
      touchpoints: "Website gallery",
      kpi: "Gallery time / exits",
    },
    {
      stage: "Book (Calendar)",
      actions: "Attempts to pick a date & book.",
      feelings: 2,
      painOrImprove: "Commitment anxiety; no chat to ask questions → no-shows.",
      touchpoints: "Booking widget",
      kpi: "No-show rate",
    },
    {
      stage: "Pre-visit",
      actions: "Receives generic prep info.",
      feelings: 3,
      painOrImprove: "Unanswered questions; reassurance needed.",
      touchpoints: "Email / DM",
      kpi: "Pre-visit queries",
    },
    {
      stage: "Procedure",
      actions: "Consults in person; treatment.",
      feelings: 4,
      painOrImprove: "Trust built late in the journey.",
      touchpoints: "Studio",
      kpi: "Satisfaction",
    },
    {
      stage: "Aftercare",
      actions: "Healing; asks follow-ups.",
      feelings: 3,
      painOrImprove: "Needs quick answers & guidance.",
      touchpoints: "DM",
      kpi: "Follow-up issues",
    },
  ],
  after: [
    {
      stage: "Discover",
      actions: "Sees IG/Google; lands on service-led homepage.",
      feelings: 4,
      painOrImprove: "Clear value prop; KR/EN ready; fast path to examples.",
      touchpoints: "Instagram, Google, Website",
      kpi: "Landing CTR",
    },
    {
      stage: "Browse by need",
      actions: "Opens Brows/Lips/Eyeliner; reviews before/after.",
      feelings: 4,
      painOrImprove: "Category galleries emphasise ‘after’ for confidence.",
      touchpoints: "Website",
      kpi: "Per-category engagement",
    },
    {
      stage: "Consult (Kakao)",
      actions: "Taps ‘Kakao 상담’; asks questions 1:1.",
      feelings: 5,
      painOrImprove: "Warm, low-risk entry; triage fit & set expectations.",
      touchpoints: "KakaoTalk",
      kpi: "Consult → booking rate",
    },
    {
      stage: "Pre-visit",
      actions: "Receives tailored prep via Kakao saved replies.",
      feelings: 4,
      painOrImprove: "Checklist & reassurance reduce uncertainty.",
      touchpoints: "KakaoTalk",
      kpi: "Pre-visit queries ↓",
    },
    {
      stage: "Procedure",
      actions: "Arrives confident; aligned on outcome.",
      feelings: 5,
      painOrImprove: "Trust moved earlier in the journey.",
      touchpoints: "Studio",
      kpi: "CSAT",
    },
    {
      stage: "Aftercare",
      actions: "Gets quick check-ins & KR/EN aftercare card.",
      feelings: 4,
      painOrImprove: "Fewer issues; faster recovery confidence.",
      touchpoints: "KakaoTalk, PDF card",
      kpi: "Aftercare issues ↓",
    },
  ],
  metrics: [
    {
      label: "No-shows",
      before: "15 / 25",
      after: "6 / 28",
      note: "≈ –60% (client-reported)",
    },
    { label: "Avg. session", before: "1m 05s", after: "1m 44s" },
    { label: "Enquiries", before: "—", after: "↑ Kakao consult DMs" },
  ],
};

export default function JourneyMap({ defaultView = "after" }) {
  const [view, setView] = useState(defaultView); // "before" | "after"
  const rows = data[view];

  return (
    <section className="journey-map">
      <header className="jm-header">
        <h3 className="jm-title">Customer Journey — Chaeul Beauty</h3>
        <div className="jm-toggle" role="tablist" aria-label="Journey view">
          <button
            role="tab"
            aria-selected={view === "before"}
            className={`jm-tab ${view === "before" ? "is-active" : ""}`}
            onClick={() => setView("before")}
          >
            Before (Booking-first)
          </button>
          <button
            role="tab"
            aria-selected={view === "after"}
            className={`jm-tab ${view === "after" ? "is-active" : ""}`}
            onClick={() => setView("after")}
          >
            After (Consult-first)
          </button>
        </div>
      </header>

      <div className="jm-grid" role="table" aria-label={`Journey (${view})`}>
        {/* Column headers */}
        <div className="jm-col-head" role="row">
          {rows.map((c, i) => (
            <div className="jm-col-title" role="columnheader" key={i}>
              <div className="jm-stage">{c.stage}</div>
              <Mood score={c.feelings} />
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="jm-row" role="row">
          {rows.map((c, i) => (
            <div className="jm-cell" role="cell" key={i}>
              <strong className="jm-label">Customer actions</strong>
              <p>{c.actions}</p>
            </div>
          ))}
        </div>

        {/* Pain / Improvement */}
        <div className="jm-row" role="row">
          {rows.map((c, i) => (
            <div className="jm-cell" role="cell" key={i}>
              <strong className="jm-label">
                {view === "before" ? "Pain points" : "Improvements"}
              </strong>
              <p>{c.painOrImprove}</p>
            </div>
          ))}
        </div>

        {/* Touchpoints */}
        <div className="jm-row" role="row">
          {rows.map((c, i) => (
            <div className="jm-cell" role="cell" key={i}>
              <strong className="jm-label">Touchpoints</strong>
              <p>{c.touchpoints}</p>
            </div>
          ))}
        </div>

        {/* KPIs */}
        <div className="jm-row" role="row">
          {rows.map((c, i) => (
            <div className="jm-cell" role="cell" key={i}>
              <strong className="jm-label">KPI</strong>
              <p>{c.kpi}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="jm-metrics" aria-label="Before/After summary">
        <h4>Outcome snapshot</h4>
        <ul>
          {data.metrics.map((m) => (
            <li key={m.label}>
              <strong>{m.label}:</strong> {m.before} → {m.after}
              {m.note ? ` — ${m.note}` : ""}
            </li>
          ))}
        </ul>
        <p className="jm-footnote">
          Notes: small sample; partly client-reported; directional evidence.
        </p>
      </div>
    </section>
  );
}
