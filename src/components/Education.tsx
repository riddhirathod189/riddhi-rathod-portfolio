import { GraduationCap } from 'lucide-react';
import { useCountUp, useReveal } from '@/hooks/useScroll';

export function Education() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const cgpa = useCountUp(9.27, 1800, visible);

  return (
    <section className="section education-section">
      <div ref={ref} className={`edu-wrap ${visible ? 'revealed' : ''}`}>
        <p className="kicker">// education</p>

        <div className="edu-timeline">
          <div className="edu-year">2022</div>
          <div className="edu-line" />
          <div className="edu-card">
            <div className="edu-icon"><GraduationCap size={22} /></div>
            <div className="edu-info">
              <h3>Bachelor of Engineering</h3>
              <p className="edu-degree">Computer Science &amp; Engineering</p>
              <p className="edu-school">L.J. Institute of Engineering &amp; Technology</p>
            </div>
            <div className="edu-cgpa">
              <span className="cgpa-label">CGPA</span>
              <strong className="cgpa-value">{cgpa.toFixed(2)}</strong>
            </div>
          </div>
          <div className="edu-line" />
          <div className="edu-year">2026</div>
        </div>
      </div>
    </section>
  );
}
