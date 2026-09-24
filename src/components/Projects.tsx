import { useState } from 'react';
import { ArrowUpRight, ChevronDown, X } from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';
import { useReveal } from '@/hooks/useScroll';

const iconMap: Record<string, string> = {
  database: '◧', check: '✓', arrow: '↓', screen: '▭', box: '▣',
  plug: '◈', cloud: '☁', brain: '◉', layers: '▥', server: '▤',
  zap: '⚡', search: '🔍', design: '✦', code: '</>', rocket: '▲',
};

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const [showContribution, setShowContribution] = useState(false);
  const { ref, visible } = useReveal<HTMLDivElement>();

  const openProject = (p: Project) => {
    setActive(p);
    setShowContribution(false);
  };

  return (
    <section id="projects" className="section projects-section">
      <div ref={ref} className={`projects-wrap ${visible ? 'revealed' : ''}`}>
        <p className="kicker">// project_case_studies</p>
        <h2 className="sec-title">Things I've built.</h2>
        <p className="sec-sub">Real systems, not tutorials. Each one solves a specific operational problem — click any project to explore the architecture.</p>

        <div className="proj-list">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="proj-item"
              style={{ transitionDelay: `${i * 80}ms` }}
              onClick={() => openProject(p)}
            >
              <div className="proj-item-num">0{i + 1}</div>
              <div className="proj-item-body">
                <div className="proj-tags">
                  <span className="proj-tag">{p.tag}</span>
                  <span className="proj-business">{p.businessLabel}</span>
                </div>
                <h3>{p.name}</h3>
                <p className="proj-pitch">{p.solution}</p>
                <div className="proj-flow-preview">
                  {p.flow.slice(0, 4).map((f, j) => (
                    <span key={f.label} className="flow-pill">
                      {f.label}
                      {j < Math.min(p.flow.length, 4) - 1 && <span className="flow-arrow-inline">→</span>}
                    </span>
                  ))}
                </div>
              </div>
              <button className="proj-open-btn" aria-label={`Open ${p.name}`}>
                <ArrowUpRight size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div className="case-backdrop" onClick={() => setActive(null)} role="presentation">
          <div className="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-title" onClick={(e) => e.stopPropagation()}>
            <button className="case-close" onClick={() => setActive(null)} aria-label="Close"><X size={20} /></button>

            <div className="case-tags">
              <span className="proj-tag">{active.tag}</span>
              <span className="proj-business dark">{active.businessLabel}</span>
            </div>
            <h2 id="case-title">{active.name}</h2>

            {/* Architecture flow diagram */}
            <div className="case-flow">
              <p className="case-flow-label">System Architecture</p>
              {active.flow.map((step, i) => (
                <div key={step.label} className="case-flow-node" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="case-flow-icon">{iconMap[step.icon] ?? '●'}</div>
                  <span>{step.label}</span>
                  {i < active.flow.length - 1 && <div className="case-flow-connector" />}
                </div>
              ))}
            </div>

            <div className="case-grid">
              <div className="case-block">
                <h4>The Problem</h4>
                <p>{active.problem}</p>
              </div>
              <div className="case-block">
                <h4>The Solution</h4>
                <p>{active.solution}</p>
              </div>
              <div className="case-block">
                <h4>Engineering Highlights</h4>
                <ul>
                  {active.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
              </div>
              <div className="case-block case-block-role">
                <h4>My Role</h4>
                <p>{active.role}</p>
              </div>
            </div>

            {/* Progressive disclosure: My Contribution */}
            <div className={`case-contribution ${showContribution ? 'expanded' : ''}`}>
              <button
                className="case-contribution-toggle"
                onClick={() => setShowContribution(!showContribution)}
                aria-expanded={showContribution}
              >
                <span>View my contribution</span>
                <ChevronDown size={16} className={`chevron ${showContribution ? 'rotated' : ''}`} />
              </button>
              <div className="case-contribution-body">
                <ul>
                  {active.contribution.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="case-stack">
              <span className="case-stack-label">Stack:</span>
              {active.stack.map((s) => <span key={s} className="case-stack-item">{s}</span>)}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
