import { ArrowUpRight, Download } from 'lucide-react';
import { heroTerminal, heroPositioning, quickFacts, heroCapabilities } from '@/data/portfolio';
import { useTypedLines } from '@/hooks/useScroll';

const terminalLines = heroTerminal.map((l) => l.text);

export function Hero() {
  const { shown, done } = useTypedLines(terminalLines);

  return (
    <section id="home" className="hero">
      <div className="hero-grid" />
      <div className="hero-left">
        <p className="hero-avail"><span className="pulse" /> Available for work</p>
        <h1 className="hero-name">Riddhi<br />Rathod</h1>
        <p className="hero-title">Software Developer</p>
        <p className="hero-tagline">
          Python <span className="dot-sep">·</span> Odoo <span className="dot-sep">·</span> Backend
          <span className="dot-sep">·</span> APIs <span className="dot-sep">·</span> AI <span className="dot-sep">·</span> Automation
        </p>
        <p className="hero-positioning">{heroPositioning}</p>
        <div className="hero-facts">
          {quickFacts.map((f) => (
            <span key={f.label} className="hero-fact">
              <strong>{f.label}</strong>
              <small>{f.hint}</small>
            </span>
          ))}
        </div>
        <div className="hero-btns">
          <a className="btn btn-primary" href="#projects">
            Explore projects <ArrowUpRight size={16} />
          </a>
          <a className="btn btn-ghost" href="/Riddhi_Rathod_Resume.pdf" download="Riddhi_Rathod_Resume.pdf">
            <Download size={15} /> Resume
          </a>
          <a className="btn btn-link" href="#contact">
            Let's connect <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="terminal">
          <div className="term-bar">
            <span className="term-dot red" />
            <span className="term-dot yellow" />
            <span className="term-dot green" />
            <span className="term-label">riddhi@portfolio: ~ — zsh</span>
          </div>
          <div className="term-body">
            {shown.map((line, i) => {
              const original = heroTerminal[i];
              const isCommand = i === 0;
              const isInfo = original?.status === 'info' && !isCommand;
              return (
                <div key={i} className={`term-line ${isCommand ? 'cmd' : isInfo ? 'info' : 'ok'}`}>
                  {isCommand ? '$ ' : isInfo ? '' : '[\u2713] '}
                  {line}
                </div>
              );
            })}
            {!done && <span className="term-cursor" />}
            {done && <div className="term-line info term-ready">&gt; ready_ <span className="term-cursor" /></div>}
          </div>
        </div>
        <div className="hero-nodes">
          {heroCapabilities.map((cap) => (
            <a key={cap.label} className="hero-chip" href={cap.href}>
              {cap.label}
            </a>
          ))}
        </div>
      </div>

      <div className="scroll-indicator">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
