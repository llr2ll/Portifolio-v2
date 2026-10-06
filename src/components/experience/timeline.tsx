import { CSSProperties, ReactNode } from "react";

/** Wraps one node of a timeline: draws the dot and the connector to the next node. */
export function TimelineItem({
  color, next, delay = 0, head = false, children,
}: {
  color: string;      // accent of this node (dot + line start)
  next?: string;      // accent of the next node (line end)
  delay?: number;     // reveal delay (ms)
  head?: boolean;     // true for the intro node that sits above the cards
  children: ReactNode;
}) {
  const style = { "--c": color, "--next-c": next, transitionDelay: `${delay}ms` } as CSSProperties;
  return (
    <div className={`tl-item reveal${head ? " tl-item--head" : ""}`} style={style}>
      <span className="tl-dot" />
      {children}
    </div>
  );
}

export interface CardJob {
  company: string;
  role?: string[];
  period?: string[];
  place?: string[];
  team?: string[];
  bullets: string[][];
  result?: { link: string; label: string; text?: string[] };
}

/** One job / project card (works for both "Companies" and "Freelance"). */
export function JobCard({ job, lang }: { job: CardJob; lang: number }) {
  return (
    <article className="job card">
      <header className="job-head">
        <div>
          <h3 className="job-company">{job.company}</h3>
          {job.role && <p className="job-role">{job.role[lang]}</p>}
        </div>
        <div className="job-meta">
          {job.period && <span className="tag">{job.period[lang]}</span>}
          {job.place && <span className="tag">{job.place[lang]}</span>}
          {job.team && <span className="tag">{job.team[lang]}</span>}
        </div>
      </header>

      <ul className="bullets">
        {job.bullets[lang].map((b) => <li key={b}>{b}</li>)}
      </ul>

      {job.result && (
        <div className="job-result">
          <p><strong>{job.result.text && job.result.text[lang]}</strong></p>
          <a href={job.result.link} target="_blank" rel="noreferrer">{job.result.label}</a>
        </div>
      )}
    </article>
  );
}