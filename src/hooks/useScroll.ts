import { useEffect, useRef, useState } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 120): string {
  const [active, setActive] = useState(sectionIds[0] ?? '');
  const idsKey = sectionIds.join(',');

  useEffect(() => {
    const ids = idsKey.split(',');
    const handler = () => {
      const scrollY = window.scrollY + offset;
      let current = ids[0] ?? '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, [idsKey, offset]);

  return active;
}

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

export function useCountUp(target: number, duration = 1500, start = false): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return value;
}

export function useTypedLines(lines: string[], speed = 45, startDelay = 600): { shown: string[]; done: boolean } {
  const [shown, setShown] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const linesKey = lines.join('\n');

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let cancelled = false;
    const resolvedLines = lines;

    setShown([]);
    setDone(false);

    const run = async () => {
      await new Promise((r) => { timeout = setTimeout(r, startDelay); });
      for (let i = 0; i < resolvedLines.length; i++) {
        if (cancelled) return;
        setShown((prev) => [...prev, resolvedLines[i]]);
        await new Promise((r) => { timeout = setTimeout(r, speed + resolvedLines[i].length * 8); });
      }
      if (!cancelled) setDone(true);
    };
    run();
    return () => { cancelled = true; clearTimeout(timeout); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [linesKey, speed, startDelay]);

  return { shown, done };
}
