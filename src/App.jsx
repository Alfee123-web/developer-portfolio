import React, { useEffect, useRef, useState } from "react";

/**
 * Alfee Khan — Portfolio
 * Palette: Navy / Slate / Teal / Mist (+ Amber accent)
 * Display: Space Grotesk · Body: Inter · Labels: JetBrains Mono
 * Signature: an animated waveform trace in the hero, reading as a signal/data trace.
 */

const PALETTE = {
  bg: "#070B14",
  surface: "#0D1424",
  surface2: "#141C30",
  border: "#1E2A44",
  teal: "#2DD9C4",
  amber: "#E8B863",
  mist: "#8D97AC",
  fog: "#E7EAF2",
};

/* ---------------- Waveform signature (canvas) ---------------- */
function Waveform() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let t = 0;
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const grad = ctx.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0, PALETTE.teal);
      grad.addColorStop(1, PALETTE.amber);

      // three staggered traces: code signal + two soundwave echoes
      const traces = [
        { amp: h * 0.16, freq: 0.014, speed: 0.028, alpha: 0.9, width: 2 },
        { amp: h * 0.09, freq: 0.02, speed: 0.02, alpha: 0.35, width: 1.5 },
        { amp: h * 0.06, freq: 0.03, speed: 0.014, alpha: 0.2, width: 1.5 },
      ];

      traces.forEach((tr) => {
        ctx.beginPath();
        for (let x = 0; x <= w; x += 4) {
          const y =
            h / 2 +
            Math.sin(x * tr.freq + t * tr.speed) *
              tr.amp *
              Math.sin(x * 0.003 + t * 0.006); // envelope so it breathes, not a flat sine
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = grad;
        ctx.globalAlpha = tr.alpha;
        ctx.lineWidth = tr.width;
        ctx.lineCap = "round";
        ctx.stroke();
      });
      ctx.globalAlpha = 1;

      if (!prefersReduced) t += 1;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="wf-canvas" aria-hidden="true" />;
}

/* ---------------- Scroll reveal wrapper ---------------- */
function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------------- Data ---------------- */
const SKILLS = [
  {
    label: "LANGUAGES",
    items: ["C++", "JavaScript (ES6+)", "HTML5", "CSS3", "SQL"],
  },
  {
    label: "FRONTEND",
    items: ["React.js", "Next.js", "EJS", "Bootstrap 5", "Material UI", "Tailwind"],
  },
  {
    label: "BACKEND",
    items: ["Node.js", "Express.js", "REST APIs", "MVC Architecture"],
  },
  {
    label: "DATABASES",
    items: ["MongoDB · Mongoose", "MySQL"],
  },
  {
    label: "AUTH & CLOUD",
    items: ["Passport.js", "Cloudinary", "Mapbox GL JS", "Joi Validation"],
  },
  {
    label: "TOOLING",
    items: ["Git & GitHub", "Vercel", "Postman", "VS Code", "MongoDB Atlas"],
  },
];

const PROJECTS = [
  {
    year: "2025",
    name: "Wanderly",
    tagline: "Full-stack Airbnb-style rental listing platform",
    stack: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap 5", "Passport.js", "Cloudinary", "Mapbox GL JS"],
    features: [
      "Complete CRUD for listings, reviews, and user accounts on an MVC architecture",
      "Secure auth & MongoDB-backed sessions via Passport.js + connect-mongo",
      "Cloudinary + Multer image uploads, Mapbox geocoding on every listing",
      "Custom \"Ocean Slate\" design system, star-rated reviews, and Joi-validated forms",
    ],
    live: "https://wanderly-three-opal.vercel.app",
    source: "https://github.com/Alfee123-web/Wanderly",
  },
  {
    year: "2024",
    name: "Weather App",
    tagline: "Real-time city weather, built on Material UI",
    stack: ["React.js (Vite)", "Material UI", "REST API", "JavaScript"],
    features: [
      "Live temperature, humidity, and wind data for any searched city",
      "MUI cards, text fields, and responsive grid layouts",
      "Conditional rendering that shifts with the city's current climate",
    ],
    live: "https://weather-app-material-ui.vercel.app",
    source: "https://github.com/Alfee123-web/Weather-App-MaterialUI",
  },
];

/* ---------------- Page ---------------- */
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Stack" },
    { href: "#projects", label: "Work" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="pf-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .pf-root {
          --bg: ${PALETTE.bg};
          --surface: ${PALETTE.surface};
          --surface2: ${PALETTE.surface2};
          --border: ${PALETTE.border};
          --teal: ${PALETTE.teal};
          --amber: ${PALETTE.amber};
          --mist: ${PALETTE.mist};
          --fog: ${PALETTE.fog};
          background: var(--bg);
          color: var(--fog);
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
        }
        .pf-root * { box-sizing: border-box; }
        .pf-display { font-family: 'Space Grotesk', sans-serif; }
        .pf-mono { font-family: 'JetBrains Mono', monospace; }

        ::selection { background: var(--teal); color: var(--bg); }

        /* focus visibility */
        a:focus-visible, button:focus-visible {
          outline: 2px solid var(--teal);
          outline-offset: 3px;
          border-radius: 4px;
        }

        /* ---- nav ---- */
        .pf-nav {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 6vw;
          background: rgba(7,11,20,0.82);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
        }
        .pf-brand { font-size: 1.15rem; font-weight: 700; letter-spacing: 0.01em; color: var(--fog); text-decoration: none; }
        .pf-brand span { color: var(--teal); }
        .pf-navlinks { display: flex; gap: 2.2rem; list-style: none; margin: 0; padding: 0; }
        .pf-navlinks a {
          color: var(--mist); text-decoration: none; font-size: 0.92rem; font-weight: 500;
          position: relative; transition: color 0.25s ease;
        }
        .pf-navlinks a::after {
          content: ''; position: absolute; left: 0; bottom: -6px; width: 0; height: 1px;
          background: var(--teal); transition: width 0.25s ease;
        }
        .pf-navlinks a:hover { color: var(--fog); }
        .pf-navlinks a:hover::after { width: 100%; }
        .pf-menu-btn { display: none; background: none; border: 1px solid var(--border); color: var(--fog); border-radius: 8px; padding: 8px 10px; cursor: pointer; }

        @media (max-width: 780px) {
          .pf-navlinks { position: fixed; top: 62px; left: 0; right: 0; flex-direction: column; gap: 0;
            background: var(--surface); border-bottom: 1px solid var(--border);
            max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
          .pf-navlinks.open { max-height: 300px; }
          .pf-navlinks li { padding: 14px 6vw; border-top: 1px solid var(--border); }
          .pf-menu-btn { display: block; }
        }

        /* ---- hero ---- */
        .pf-hero {
          position: relative;
          display: grid; grid-template-columns: 1.15fr 0.85fr; align-items: center; gap: 3rem;
          padding: 6.5rem 6vw 5rem; min-height: 88vh;
        }
        .wf-canvas { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.55; pointer-events: none; }
        .pf-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          color: var(--teal); font-size: 0.78rem; letter-spacing: 0.14em; margin-bottom: 1.3rem;
        }
        .pf-eyebrow::before { content: ''; width: 22px; height: 1px; background: var(--teal); display: inline-block; }
        .pf-hero h1 {
          font-size: clamp(2.4rem, 5vw, 4rem); line-height: 1.05; font-weight: 700; margin: 0 0 1.4rem;
          letter-spacing: -0.02em;
        }
        .pf-hero h1 .accent { background: linear-gradient(90deg, var(--teal), var(--amber)); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .pf-hero p { font-size: 1.08rem; color: var(--mist); max-width: 46ch; line-height: 1.7; margin-bottom: 2.2rem; }
        .pf-cta-row { display: flex; gap: 1rem; flex-wrap: wrap; }
        .pf-btn-primary, .pf-btn-ghost {
          font-size: 0.92rem; font-weight: 600; padding: 0.85rem 1.6rem; border-radius: 999px;
          text-decoration: none; transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          display: inline-flex; align-items: center; gap: 8px; cursor: pointer; border: 1px solid transparent;
        }
        .pf-btn-primary { background: var(--teal); color: var(--bg); }
        .pf-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 30px -10px rgba(45,217,196,0.55); }
        .pf-btn-ghost { border-color: var(--border); color: var(--fog); }
        .pf-btn-ghost:hover { border-color: var(--teal); color: var(--teal); transform: translateY(-2px); }

        .pf-photo-wrap { position: relative; display: flex; justify-content: center; }
        .pf-photo-ring {
          position: relative; width: min(320px, 80%); aspect-ratio: 1/1.1; border-radius: 28px;
          overflow: hidden; border: 1px solid var(--border);
          background: linear-gradient(160deg, var(--surface2), var(--surface));
          box-shadow: 0 30px 70px -25px rgba(0,0,0,0.65);
        }
        .pf-photo-ring img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .pf-photo-tag {
          position: absolute; bottom: -18px; left: 50%; transform: translateX(-50%);
          background: var(--surface2); border: 1px solid var(--border); border-radius: 999px;
          padding: 8px 18px; font-size: 0.78rem; color: var(--mist); white-space: nowrap;
        }
        .pf-photo-tag b { color: var(--amber); font-weight: 500; }

        @media (max-width: 900px) {
          .pf-hero { grid-template-columns: 1fr; text-align: left; padding-top: 3.5rem; }
          .pf-photo-wrap { order: -1; margin-bottom: 1rem; }
        }

        /* ---- section shell ---- */
        .pf-section { padding: 6rem 6vw; }
        .pf-section-head { margin-bottom: 3rem; max-width: 60ch; }
        .pf-kicker { color: var(--teal); font-size: 0.78rem; letter-spacing: 0.14em; margin-bottom: 0.7rem; display: block; }
        .pf-section-head h2 { font-size: clamp(1.8rem, 3vw, 2.4rem); font-weight: 700; margin: 0 0 0.8rem; letter-spacing: -0.01em; }
        .pf-section-head p { color: var(--mist); font-size: 1.02rem; line-height: 1.7; }

        /* ---- about ---- */
        .pf-about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
        .pf-about-card {
          background: var(--surface); border: 1px solid var(--border); border-radius: 18px; padding: 2.2rem;
          transition: border-color 0.25s ease, transform 0.25s ease;
        }
        .pf-about-card:hover { transform: translateY(-4px); border-color: rgba(45,217,196,0.35); }
        .pf-about-card h3 { font-size: 1.2rem; margin: 0.6rem 0 0.8rem; }
        .pf-about-card p { color: var(--mist); line-height: 1.75; font-size: 0.98rem; margin: 0; }
        .pf-about-glyph { color: var(--teal); font-size: 1.4rem; }
        .pf-about-card.creative .pf-about-glyph { color: var(--amber); }
        @media (max-width: 780px) { .pf-about-grid { grid-template-columns: 1fr; } }

        /* ---- skills ---- */
        .pf-skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.6rem; }
        .pf-skill-block { border-left: 1px solid var(--border); padding-left: 1.2rem; }
        .pf-skill-label { display: block; color: var(--amber); font-size: 0.74rem; letter-spacing: 0.12em; margin-bottom: 0.9rem; }
        .pf-chip-row { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .pf-chip {
          font-size: 0.82rem; color: var(--fog); background: var(--surface2);
          border: 1px solid var(--border); padding: 0.4rem 0.8rem; border-radius: 8px;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .pf-chip:hover { border-color: var(--teal); color: var(--teal); }

        /* ---- projects ---- */
        .pf-project { 
          display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 2.5rem;
          padding: 2.6rem 0; border-top: 1px solid var(--border);
        }
        .pf-project:last-child { border-bottom: 1px solid var(--border); }
        .pf-project-year { color: var(--mist); }
        .pf-project-name { font-size: 1.8rem; font-weight: 700; margin: 0.3rem 0 0.5rem; }
        .pf-project-tagline { color: var(--teal); font-size: 0.98rem; margin-bottom: 1rem; }
        .pf-project-links { display: flex; gap: 1.2rem; margin-top: 1.3rem; }
        .pf-project-links a { color: var(--fog); font-size: 0.88rem; text-decoration: none; border-bottom: 1px solid var(--border); padding-bottom: 2px; transition: border-color 0.2s ease, color 0.2s ease; }
        .pf-project-links a:hover { color: var(--amber); border-color: var(--amber); }
        .pf-project-stack { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.2rem; }
        .pf-project-stack span { font-size: 0.75rem; color: var(--mist); border: 1px solid var(--border); padding: 0.25rem 0.6rem; border-radius: 6px; }
        .pf-project-features { margin: 0; padding: 0; list-style: none; display: grid; gap: 0.65rem; }
        .pf-project-features li { color: var(--mist); font-size: 0.95rem; line-height: 1.6; padding-left: 1.2rem; position: relative; }
        .pf-project-features li::before { content: '—'; position: absolute; left: 0; color: var(--teal); }
        @media (max-width: 820px) { .pf-project { grid-template-columns: 1fr; } }

        /* ---- resume ---- */
        .pf-resume-card {
          display: flex; align-items: center; justify-content: space-between; gap: 2rem;
          background: var(--surface2); border: 1px solid var(--border); border-radius: 20px;
          padding: 2.6rem 3rem; flex-wrap: wrap;
        }
        @media (max-width: 700px) { .pf-resume-card { flex-direction: column; text-align: center; } }

        /* ---- contact ---- */
        .pf-footer {
          padding: 6rem 6vw 3rem; text-align: center;
          background: linear-gradient(180deg, transparent, var(--surface));
          border-top: 1px solid var(--border);
        }
        .pf-footer h2 { font-size: clamp(1.9rem, 4vw, 2.8rem); margin-bottom: 1rem; }
        .pf-footer p { color: var(--mist); max-width: 46ch; margin: 0 auto 2.2rem; line-height: 1.7; }
        .pf-footer-links { display: flex; justify-content: center; gap: 1.6rem; flex-wrap: wrap; margin-top: 2.6rem; }
        .pf-footer-links a { color: var(--mist); text-decoration: none; font-size: 0.9rem; transition: color 0.2s ease; }
        .pf-footer-links a:hover { color: var(--teal); }
        .pf-footer-bottom { margin-top: 3rem; color: #4B5568; font-size: 0.8rem; }

        /* ---- reveal ---- */
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal-visible { opacity: 1; transform: translateY(0); }

        @media (prefers-reduced-motion: reduce) {
          .reveal { transition: none; opacity: 1; transform: none; }
        }
      `}</style>

      {/* Nav */}
      <nav className="pf-nav">
        <a href="#top" className="pf-brand">Alfee<span>.</span>Khan</a>
        <ul className={`pf-navlinks ${menuOpen ? "open" : ""}`}>
          {navLinks.map((l) => (
            <li key={l.href}><a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a></li>
          ))}
        </ul>
        <button className="pf-menu-btn" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Hero */}
      <header className="pf-hero" id="top">
        <Waveform />
        <div>
          <span className="pf-eyebrow pf-mono">B.TECH CSE · CLASS OF 2027</span>
          <h1 className="pf-display">
            I build <span className="accent">full-stack</span> products,<br />
            end to end.
          </h1>
          <p>
            MERN-stack developer and DSA practitioner in C++ — I care about
            clean architecture as much as clean UI, and I'm currently looking
            for internship opportunities where I can build things that ship.
          </p>
          <div className="pf-cta-row">
            <a href="#projects" className="pf-btn-primary">View my work →</a>
            <a href="#contact" className="pf-btn-ghost">Get in touch</a>
          </div>
        </div>
        <div className="pf-photo-wrap">
          <div className="pf-photo-ring">
      <img src="/profile-photo.jpeg" alt="Alfee Khan" />
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="pf-section">
        <Reveal className="pf-section-head">
          <span className="pf-kicker pf-mono">ABOUT</span>
          <h2 className="pf-display">How I build</h2>
          <p>Two things drive how I approach a project: solid architecture, and a habit of breaking problems down before I write a line of code.</p>
        </Reveal>
        <div className="pf-about-grid">
          <Reveal>
            <div className="pf-about-card">
              <div className="pf-about-glyph">⌘</div>
              <h3 className="pf-display">The Build</h3>
              <p>
                I'm a B.Tech Computer Science student specializing in full-stack
                web development with the MERN stack. I like projects that force
                me to think about architecture end to end — auth, data modeling,
                and the UI someone actually has to use.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="pf-about-card">
              <div className="pf-about-glyph">▲</div>
              <h3 className="pf-display">The Logic</h3>
              <p>
                I spend a lot of my time deep in Data Structures & Algorithms
                in C++ — hash maps, cycle detection, sorting patterns — because
                writing efficient code is a habit, not an afterthought. It's
                the same discipline I carry into every feature I ship.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="pf-section" style={{ background: "var(--surface)" }}>
        <Reveal className="pf-section-head">
          <span className="pf-kicker pf-mono">STACK</span>
          <h2 className="pf-display">Technical arsenal</h2>
          <p>The tools I reach for most, grouped by where they sit in the stack.</p>
        </Reveal>
        <div className="pf-skills-grid">
          {SKILLS.map((group, i) => (
            <Reveal key={group.label} delay={i * 60}>
              <div className="pf-skill-block">
                <span className="pf-skill-label pf-mono">{group.label}</span>
                <div className="pf-chip-row">
                  {group.items.map((s) => (
                    <span className="pf-chip" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="pf-section">
        <Reveal className="pf-section-head">
          <span className="pf-kicker pf-mono">WORK</span>
          <h2 className="pf-display">Featured projects</h2>
          <p>Three shipped, deployed builds — from a full rental platform to a real-time weather app.</p>
        </Reveal>

        {PROJECTS.map((p) => (
          <Reveal key={p.name}>
            <div className="pf-project">
              <div>
                <span className="pf-project-year pf-mono">{p.year}</span>
                <h3 className="pf-project-name pf-display">{p.name}</h3>
                <p className="pf-project-tagline">{p.tagline}</p>
                <div className="pf-project-links">
                  <a href={p.live} target="_blank" rel="noreferrer">Live demo ↗</a>
                  <a href={p.source} target="_blank" rel="noreferrer">Source ↗</a>
                </div>
              </div>
              <div>
                <div className="pf-project-stack pf-mono">
                  {p.stack.map((s) => <span key={s}>{s}</span>)}
                </div>
                <ul className="pf-project-features">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Resume */}
      <section id="resume" className="pf-section" style={{ background: "var(--surface)" }}>
        <Reveal>
          <div className="pf-resume-card">
            <div>
              <span className="pf-kicker pf-mono">RESUME</span>
              <h2 className="pf-display" style={{ marginBottom: "0.5rem" }}>Want the full picture?</h2>
              <p style={{ color: "var(--mist)", maxWidth: "42ch", margin: 0 }}>
                Grab a PDF copy of my resume — education, full project details,
                and certifications in one place.
              </p>
            </div>
            <a href="/Alfee_Khan_Resume.pdf" download className="pf-btn-primary">Download résumé ↓</a>
          </div>
        </Reveal>
      </section>

      {/* Contact */}
      <footer id="contact" className="pf-footer">
        <Reveal>
          <span className="pf-kicker pf-mono">CONTACT</span>
          <h2 className="pf-display">Let's build something.</h2>
          <p>
            I'm currently looking for internship and full-stack opportunities
            for 2026 — and always happy to talk through an idea or a codebase.
          </p>
          <div className="pf-cta-row" style={{ justifyContent: "center" }}>
            <a href="mailto:alfeekhan20@gmail.com" className="pf-btn-primary">Say hello →</a>
          </div>
          <div className="pf-footer-links pf-mono">
            <a href="https://github.com/Alfee123-web" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/alfeekhan509815340" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://leetcode.com/u/alfeekhan" target="_blank" rel="noreferrer">LeetCode</a>
            <a href="mailto:alfeekhan20@gmail.com">Email</a>
          </div>
          <div className="pf-footer-bottom">© {new Date().getFullYear()} Alfee Khan. Built with React.</div>
        </Reveal>
      </footer>
    </div>
  );
}