import { journeyStops } from '@/data/portfolio';
import { useReveal } from '@/hooks/useScroll';

export function Journey() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="journey" className="section journey-section">
      <div ref={ref} className={`journey-wrap ${visible ? 'revealed' : ''}`}>
        <p className="kicker">// career_roadmap</p>
        <h2 className="sec-title">The journey.</h2>
        <p className="sec-sub">From Odoo intern to software developer — each step added new systems, integrations, and responsibilities.</p>

        <div className="roadmap">
          <div className={`roadmap-line ${visible ? 'drawn' : ''}`} />

          {journeyStops.map((stop, i) => (
            <div
              key={`${stop.company}-${stop.dates}`}
              className="roadmap-stop"
              style={{ transitionDelay: `${i * 250}ms` }}
            >
              <div className={`roadmap-marker ${visible ? 'active' : ''}`}>
                <span className="marker-dot" />
              </div>
              <div className="roadmap-year">{stop.year}</div>
              <div className={`roadmap-card ${visible ? 'visible' : ''}`}>
                <div className="card-head">
                  <div>
                    <h3>{stop.role}</h3>
                    <p className="company">{stop.company}</p>
                  </div>
                  <span className="dates-badge">{stop.dates}</span>
                </div>
                <ul>
                  {stop.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="card-tech">
                  {stop.tech.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
