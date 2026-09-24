import { profileData } from '@/data/portfolio';
import { useReveal } from '@/hooks/useScroll';

export function Profile() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section profile-section">
      <div ref={ref} className={`profile-wrap ${visible ? 'revealed' : ''}`}>
        <p className="kicker">// developer_profile.py</p>
        <div className="profile-grid">
          <div className="profile-code">
            <div className="code-block">
              <div className="code-line"><span className="ck-kw">class</span> <span className="ck-cls">Developer</span>:</div>
              <div className="code-line indent"><span className="ck-kw">def</span> <span className="ck-fn">__init__</span>(<span className="ck-var">self</span>):</div>
              <div className="code-line indent2">self.focus = [</div>
              <div className="code-line indent3"><span className="ck-str">"Python"</span>,</div>
              <div className="code-line indent3"><span className="ck-str">"Backend"</span>,</div>
              <div className="code-line indent3"><span className="ck-str">"Odoo"</span>,</div>
              <div className="code-line indent3"><span className="ck-str">"APIs"</span>,</div>
              <div className="code-line indent3"><span className="ck-str">"AI"</span>,</div>
              <div className="code-line indent3"><span className="ck-str">"Automation"</span></div>
              <div className="code-line indent2">]</div>
            </div>
          </div>
          <div className="profile-data">
            {profileData.map((item, i) => (
              <div
                key={item.label}
                className="profile-row"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="profile-label">{item.label}</span>
                <span className="profile-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="profile-blurb">
          I build and customize Odoo ERP systems, backend services, and AI-powered tools.
          Python runs through everything — from Django and FastAPI APIs to automation and data workflows.
          I like turning messy business requirements into clean, dependable software.
        </p>
      </div>
    </section>
  );
}
