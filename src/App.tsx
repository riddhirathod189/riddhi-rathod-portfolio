import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Profile } from '@/components/Profile';
import { TechEcosystem } from '@/components/TechEcosystem';
import { Journey } from '@/components/Journey';
import { Projects } from '@/components/Projects';
import { Capabilities } from '@/components/Capabilities';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      const target = e.target as HTMLElement;
      setHovering(
        target.closest('a, button, .eco-node, .proj-item, .cap-card, .skill, .flow-step') !== null,
      );
    };
    const onLeave = () => setVisible(false);
    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  if (window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <div
      className={`cursor-dot ${visible ? 'show' : ''} ${hovering ? 'hover' : ''}`}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    />
  );
}

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Capabilities />
        <Journey />
        <Projects />
        <TechEcosystem />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
