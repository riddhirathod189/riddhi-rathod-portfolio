import { useState } from 'react';
import { capabilities, engineeringSteps } from '@/data/portfolio';
import { useReveal } from '@/hooks/useScroll';

const stepIcons: Record<string, string> = {
  search: '🔍', design: '✦', code: '</>', plug: '◈', check: '✓', rocket: '▲',
};

export function Capabilities() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="build" className="section section-dark capabilities-section">
      <div ref={ref} className={`caps-wrap ${visible ? 'revealed' : ''}`}>
        <p className="kicker light">// what_i_build</p>
        <h2 className="sec-title light">Engineering capabilities.</h2>
        <p className="sec-sub light">From business requirements to production systems — these are the problems I solve.</p>

        <div className="caps-grid">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className="cap-card"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="cap-icon"><cap.icon size={20} /></div>
              <h3>{cap.title}</h3>
              <p>{cap.desc}</p>
              <div className="cap-tech">
                {cap.tech.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering mindset workflow */}
        <div className="mindset">
          <p className="kicker light" style={{ marginBottom: '14px' }}>// how I approach development</p>
          <p className="mindset-sub">Every project follows the same disciplined process — from understanding the problem to shipping the system.</p>
          <div className="mindset-chain">
            {engineeringSteps.map((step, i) => (
              <div
                key={step.label}
                className={`mindset-step ${activeStep === i ? 'active' : ''}`}
                style={{ transitionDelay: `${i * 150}ms` }}
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
                onClick={() => setActiveStep(activeStep === i ? null : i)}
              >
                <div className="mindset-icon">{stepIcons[step.icon] ?? '●'}</div>
                <span className="mindset-label">{step.label}</span>
                {i < engineeringSteps.length - 1 && <div className={`mindset-connector ${activeStep === i ? 'active' : ''}`} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
