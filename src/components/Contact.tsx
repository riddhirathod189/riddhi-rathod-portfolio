import { ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useReveal } from '@/hooks/useScroll';

export function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="section contact-section">
      <div ref={ref} className={`contact-wrap ${visible ? 'revealed' : ''}`}>
        <h2 className="contact-headline">
          Let's work<br /><span className="contact-accent">together.</span>
        </h2>
        <p className="contact-sub">
          ERP systems <span className="dot-sep">·</span> Backend services <span className="dot-sep">·</span> API integrations <span className="dot-sep">·</span> AI automation
        </p>
        <p className="contact-desc">
          If you have a business problem that needs a real software system, I'd like to hear about it.
        </p>

        <a className="btn btn-primary contact-cta" href="mailto:rathodriddhip18@gmail.com">
          Start a conversation <ArrowUpRight size={17} />
        </a>

        <div className="contact-info">
          <a href="mailto:rathodriddhip18@gmail.com"><Mail size={16} /> rathodriddhip18@gmail.com</a>
          <a href="tel:+916353762207"><Mail size={16} /> +91 6353762207</a>
        </div>

        <div className="contact-socials">
          <a href="mailto:rathodriddhip18@gmail.com" aria-label="Email"><Mail size={18} /></a>
          <a href="https://www.linkedin.com/in/riddhi-rathod-5684a229" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="https://github.com/riddhirathod189" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
        </div>

        <a className="contact-resume" href="/Riddhi_Rathod_Resume.pdf" download="Riddhi_Rathod_Resume.pdf">
          <Download size={14} /> Download Resume
        </a>
      </div>
    </section>
  );
}
