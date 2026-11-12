import { useEffect, useState } from "react";
import { CLIENT, NAV } from "../data/packageContent";

export function ScrollNav() {
  type SectionId = (typeof NAV)[number]["id"];
  const [active, setActive] = useState<SectionId>(NAV[0].id);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sectionEls = NAV.map((item) => document.getElementById(item.id)).filter(
      Boolean,
    ) as HTMLElement[];

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (doc.scrollTop / max) * 100 : 0);

      const marker = window.scrollY + window.innerHeight * 0.32;
      let current: SectionId = NAV[0].id;
      for (const el of sectionEls) {
        const hit = NAV.find((item) => item.id === el.id);
        if (hit && el.offsetTop <= marker) current = hit.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="scroll-nav-wrap">
      <nav className="scroll-nav" aria-label="Package sections">
        <div className="scroll-nav__track" aria-hidden="true">
          <span className="scroll-nav__progress" style={{ width: `${progress}%` }} />
        </div>
        <div className="scroll-nav__inner">
          <a className="scroll-nav__brand" href="#purpose">
            <img src={CLIENT.factorialLogoPath} alt="Factorial" />
            <span className="scroll-nav__client">{CLIENT.name}</span>
          </a>
          <div className="scroll-nav__links">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={active === item.id ? "is-active" : undefined}
                aria-current={active === item.id ? "true" : undefined}
              >
                <span className="scroll-nav__dot" aria-hidden="true" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
