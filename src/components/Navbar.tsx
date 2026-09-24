import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useScrollSpy } from '@/hooks/useScroll';

const navItems = ['Home', 'About', 'Build', 'Journey', 'Projects', 'Stack', 'Contact'];
const navIds = navItems.map((n) => n.toLowerCase());

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(navIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`hdr ${scrolled ? 'scrolled' : ''}`}>
      <a className="logo" href="#home" onClick={() => setOpen(false)}>
        <span className="logo-bracket">&gt;_</span> riddhi
      </a>
      <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav className={`nav ${open ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={active === item.toLowerCase() ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            {item}
            {active === item.toLowerCase() && <span className="nav-dot" />}
          </a>
        ))}
      </nav>
    </header>
  );
}
