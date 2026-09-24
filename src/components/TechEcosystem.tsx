import { useState } from 'react';
import { techNodes, techRelationships } from '@/data/portfolio';
import { useReveal } from '@/hooks/useScroll';

export function TechEcosystem() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [activeFlow, setActiveFlow] = useState<number | null>(null);
  const [flowHover, setFlowHover] = useState<string | null>(null);
  const { ref, visible } = useReveal<HTMLDivElement>();
  const center = techNodes.find((n) => n.id === 'python')!;
  const ring1 = techNodes.filter((n) => n.ring === 1);
  const ring2 = techNodes.filter((n) => n.ring === 2);
  const hoveredNode = hovered ? techNodes.find((n) => n.id === hovered) : null;

  const nodeStyle = (angle: number, ring: number) => {
    const radius = ring === 1 ? 130 : 235;
    const rad = (angle - 90) * (Math.PI / 180);
    const x = Math.round(Math.cos(rad) * radius);
    const y = Math.round(Math.sin(rad) * radius);
    return {
      '--node-x': `${x}px`,
      '--node-y': `${y}px`,
    } as React.CSSProperties;
  };

  return (
    <section id="stack" className="section section-dark">
      <div ref={ref} className={`stack-wrap ${visible ? 'revealed' : ''}`}>
        <p className="kicker light">// tech_ecosystem</p>
        <h2 className="sec-title light">My developer stack.</h2>
        <p className="sec-sub light">Python sits at the center — everything else connects to it. Hover any node to explore how I use each technology.</p>

        <div className="ecosystem-container">
          <div className="ecosystem-stage-wrap">
            <div className="ecosystem-stage">
              {/* Connection lines & orbit rings */}
              <svg className="ecosystem-lines" width="520" height="520" viewBox="-260 -260 520 520">
                <circle cx={0} cy={0} r={130} className="eco-orbit-ring ring-1" />
                <circle cx={0} cy={0} r={235} className="eco-orbit-ring ring-2" />
                {ring1.map((n) => {
                  const rad = (n.angle - 90) * (Math.PI / 180);
                  const x = Math.cos(rad) * 130;
                  const y = Math.sin(rad) * 130;
                  return (
                    <line
                      key={`l1-${n.id}`}
                      x1={0} y1={0} x2={x} y2={y}
                      className={`eco-line ${hovered === n.id ? 'active' : ''} ${hovered !== null && hovered !== n.id ? 'dimmed' : ''}`}
                    />
                  );
                })}
                {ring2.map((n) => {
                  const rad = (n.angle - 90) * (Math.PI / 180);
                  const x = Math.cos(rad) * 235;
                  const y = Math.sin(rad) * 235;
                  return (
                    <line
                      key={`l2-${n.id}`}
                      x1={0} y1={0} x2={x} y2={y}
                      className={`eco-line far ${hovered === n.id ? 'active' : ''} ${hovered !== null && hovered !== n.id ? 'dimmed' : ''}`}
                    />
                  );
                })}
              </svg>

              {/* Center node */}
              <div
                className={`eco-node center-node ${hovered !== null ? 'dimmed' : ''}`}
                style={{ '--node-x': '0px', '--node-y': '0px' } as React.CSSProperties}
                onClick={() => setHovered(null)}
                role="button"
                tabIndex={0}
              >
                <center.icon size={22} />
                <span>{center.label}</span>
              </div>

              {/* Ring 1 nodes */}
              {ring1.map((n) => (
                <div
                  key={n.id}
                  className={`eco-node ring1 ${hovered === n.id ? 'hovered' : ''} ${hovered !== null && hovered !== n.id ? 'dimmed' : ''}`}
                  style={nodeStyle(n.angle, 1)}
                  onMouseEnter={() => setHovered(n.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setHovered((prev) => (prev === n.id ? null : n.id))}
                  role="button"
                  tabIndex={0}
                >
                  <n.icon size={16} />
                  <span>{n.label}</span>
                </div>
              ))}

              {/* Ring 2 nodes */}
              {ring2.map((n) => (
                <div
                  key={n.id}
                  className={`eco-node ring2 ${hovered === n.id ? 'hovered' : ''} ${hovered !== null && hovered !== n.id ? 'dimmed' : ''}`}
                  style={nodeStyle(n.angle, 2)}
                  onMouseEnter={() => setHovered(n.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setHovered((prev) => (prev === n.id ? null : n.id))}
                  role="button"
                  tabIndex={0}
                >
                  <n.icon size={14} />
                  <span>{n.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile quick-select chips */}
          <div className="eco-mobile-chips" aria-label="Explore technologies">
            <button
              type="button"
              className={`eco-chip-btn ${hovered === null ? 'active' : ''}`}
              onClick={() => setHovered(null)}
            >
              <center.icon size={13} />
              <span>{center.label}</span>
            </button>
            {techNodes.filter((n) => n.id !== 'python').map((n) => (
              <button
                key={`chip-${n.id}`}
                type="button"
                className={`eco-chip-btn ${hovered === n.id ? 'active' : ''}`}
                onClick={() => setHovered((prev) => (prev === n.id ? null : n.id))}
              >
                <n.icon size={13} />
                <span>{n.label}</span>
              </button>
            ))}
          </div>

          {/* Hover / tap panel */}
          <div className="eco-panel">
            {hoveredNode ? (
              <>
                <div className="eco-panel-head">
                  <hoveredNode.icon size={18} />
                  <h4>{hoveredNode.label}</h4>
                </div>
                <p>{hoveredNode.desc}</p>
                <p className="eco-panel-hint">
                  <span className="hint-desktop">Hover any node to explore →</span>
                  <span className="hint-mobile">Tap to deselect · Tap another to explore</span>
                </p>
              </>
            ) : (
              <>
                <div className="eco-panel-head">
                  <center.icon size={18} />
                  <h4>Python</h4>
                </div>
                <p>{center.desc}</p>
                <p className="eco-panel-hint">
                  <span className="hint-desktop">Hover any node to explore →</span>
                  <span className="hint-mobile">Tap any node or chip to explore →</span>
                </p>
              </>
            )}
          </div>
        </div>

        {/* Relationship flows */}
        <div className="flows">
          <p className="kicker light" style={{ marginBottom: '14px' }}>// how I use them together</p>
          <p className="sec-sub light" style={{ marginBottom: '28px' }}>Each flow shows a business problem moving through technology to a working result.</p>
          <div className="flows-grid">
            {techRelationships.map((rel, i) => (
              <div
                key={i}
                className={`flow-chain ${activeFlow === i ? 'active' : ''}`}
                style={{ transitionDelay: `${i * 120}ms` }}
                onMouseEnter={() => setActiveFlow(i)}
                onMouseLeave={() => setActiveFlow(null)}
                onClick={() => setActiveFlow(activeFlow === i ? null : i)}
              >
                <p className="flow-title">{rel.title}</p>
                <div className="flow-start-label">START</div>
                {rel.flow.map((step, j) => (
                  <div key={step} className="flow-step-wrap">
                    <span
                      className={`flow-step ${j === 0 ? 'origin' : j === rel.flow.length - 1 ? 'dest' : ''} ${flowHover === step ? 'highlighted' : ''}`}
                      onMouseEnter={() => setFlowHover(step)}
                      onMouseLeave={() => setFlowHover(null)}
                      onClick={(e) => {
                        e.stopPropagation();
                        setFlowHover(flowHover === step ? null : step);
                      }}
                    >
                      {step}
                    </span>
                    {j < rel.flow.length - 1 && <span className="flow-arrow" />}
                  </div>
                ))}
                <div className="flow-end-label">RESULT</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
