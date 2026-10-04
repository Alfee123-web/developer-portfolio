import { useState } from "react";
import { NAV, SKILLS, PROJECTS, CERTS, LEETCODE as LC } from "./data";
import { Reveal, GlowCard, Counter, Head } from "./ui";

function Ring() {
  const R = 70, C = 2 * Math.PI * R;
  let offset = 0;
  return (
    <svg viewBox="0 0 180 180" className="ring">
      <circle cx="90" cy="90" r={R} fill="none" stroke="#1a1a1f" strokeWidth="12" />
      {LC.levels.map((l) => {
        const len = (l.n / LC.solved) * C - 4;
        const el = (
          <circle key={l.name} cx="90" cy="90" r={R} fill="none" stroke={l.c} strokeWidth="12"
            strokeLinecap="round" strokeDasharray={`${len} ${C - len}`} strokeDashoffset={-offset}
            transform="rotate(-90 90 90)" />
        );
        offset += (l.n / LC.solved) * C;
        return el;
      })}
      <text x="90" y="92" textAnchor="middle" className="ring-n">{LC.solved}</text>
      <text x="90" y="112" textAnchor="middle" className="ring-l">solved</text>
    </svg>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="nav">
        <a href="#top" className="brand">Alfee<span>.</span>Khan</a>
        <ul className={open ? "open" : ""}>
          {NAV.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)}>{label}</a></li>
          ))}
        </ul>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">{open ? "✕" : "☰"}</button>
      </nav>

      {/* HERO */}
      <header className="hero" id="top">
        <div className="orb o1" /><div className="orb o2" />
        <div className="hero-txt">
          <span className="kicker mono">B.TECH CSE · CLASS OF 2027</span>
          <h1 className="display"><span className="grad">Full-stack</span> developer who ships.</h1>
       <p>
  I work across the MERN and Next.js/PostgreSQL stacks and practise DSA in C++.
  I care about clean architecture as much as clean UI, and I'm currently looking
  for internship opportunities where I can build things that ship.
</p>
          <div className="row">
            <a href="#work" className="btn solid">View my work →</a>
            <a href="#contact" className="btn ghost">Get in touch</a>
          </div>
        </div>
        <div className="photo"><img src="/profile-photo.jpeg" alt="Alfee Khan" /></div>
      </header>

      {/* ABOUT */}
      <section id="about" className="sec">
        <Head kicker="ABOUT" title="How I build"
          text="Two things drive how I approach a project: solid architecture, and a habit of breaking problems down before I write a line of code." />
        <div className="grid2">
          <Reveal><GlowCard c="var(--blue)">
            <div className="glyph">⌘</div><h3 className="display">The Build</h3>
            <p>I'm a B.Tech Computer Science student specializing in full-stack web development with the MERN stack. I like projects that force me to think about architecture end to end — auth, data modeling, and the UI someone actually has to use.</p>
          </GlowCard></Reveal>
          <Reveal delay={120}><GlowCard c="var(--orange)">
            <div className="glyph">▲</div><h3 className="display">The Logic</h3>
            <p>I spend a lot of my time deep in Data Structures & Algorithms in C++ — hash maps, cycle detection, sorting patterns — because writing efficient code is a habit, not an afterthought. It's the same discipline I carry into every feature I ship.</p>
          </GlowCard></Reveal>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="sec">
        <Head kicker="STACK" title="Technical arsenal" text="The tools I reach for most, grouped by where they sit in the stack." />
        <div className="grid3">
          {SKILLS.map((g, i) => (
            <Reveal key={g.label} delay={i * 70}>
              <GlowCard c={g.c}>
                <span className="label mono" style={{ color: g.c }}>{g.label}</span>
                <div className="chips">{g.items.map((s) => <span key={s}>{s}</span>)}</div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="sec">
        <Head kicker="WORK" title="Featured projects" text="Three shipped, deployed builds — from a subscription tracker to a full rental platform and a real-time weather app." />
        <div className="grid3 tall">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <GlowCard c={p.c} className="proj">
                <span className="mono mute">{p.year}</span>
                <h3 className="display big">{p.name}</h3>
                <p className="tag" style={{ color: p.c }}>{p.tagline}</p>
                <div className="chips small mono">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
                <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
                <div className="links">
                  <a href={p.live} target="_blank" rel="noreferrer">Live demo ↗</a>
                  <a href={p.source} target="_blank" rel="noreferrer">Source ↗</a>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certs" className="sec">
        <Head kicker="CERTIFICATES" title="Proof of learning" text="Courses and trainings I've completed." />
        <div className="grid3">
          {CERTS.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <GlowCard c={c.c} className="cert">
                <div className="cert-img">
                  <img src={c.img} alt={c.title} onError={(e) => (e.currentTarget.style.display = "none")} />
                </div>
                <h3 className="display">{c.title}</h3>
                <p className="mute">{c.by}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CODING PROFILES */}
      <section id="coding" className="sec">
        <Head kicker="CODING" title="GitHub & LeetCode" text="Where the practice happens — building on GitHub, problem-solving on LeetCode." />
        <div className="grid2">
          <Reveal><GlowCard c="var(--teal)" className="gh">
            <span className="label mono" style={{ color: "var(--teal)" }}>GITHUB · Alfee123-web</span>
            <img className="ghchart" alt="GitHub contributions" src="https://ghchart.rshah.org/2dd9c4/Alfee123-web" />
            <p className="mute">Full-stack projects, DSA solutions and my learning repos — all public.</p>
            <a className="btn ghost" href="https://github.com/Alfee123-web" target="_blank" rel="noreferrer">Open GitHub ↗</a>
          </GlowCard></Reveal>

          <Reveal delay={120}><GlowCard c="var(--orange)" className="lc">
            <span className="label mono" style={{ color: "var(--orange)" }}>LEETCODE · {LC.user}</span>
            <div className="lc-top">
              <Ring />
              <div className="bars">
                {LC.levels.map((l) => (
                  <div key={l.name}>
                    <div className="bar-h"><span>{l.name}</span><b style={{ color: l.c }}>{l.n}</b></div>
                    <div className="bar"><i style={{ width: `${(l.n / LC.solved) * 100}%`, background: l.c }} /></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="stats">
              <div><b><Counter to={LC.rating} /></b><span>Contest rating</span></div>
              <div><b><Counter to={LC.streak} /></b><span>Max streak</span></div>
              <div><b><Counter to={LC.submissions} /></b><span>Submissions / yr</span></div>
              <div><b><Counter to={LC.days} /></b><span>Active days</span></div>
            </div>
            <a className="btn ghost" href={`https://leetcode.com/u/${LC.user}`} target="_blank" rel="noreferrer">Open LeetCode ↗</a>
          </GlowCard></Reveal>
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" className="sec">
        <Reveal>
          <GlowCard c="var(--pink)" className="resume">
            <div>
              <span className="kicker mono">RESUME</span>
              <h2 className="display">Want the full picture?</h2>
              <p className="mute">Grab a PDF copy of my resume — education, full project details, and certifications in one place.</p>
            </div>
           <a href="/Alfee_Khan_Resume.pdf" download="Alfee_Khan_Resume.pdf" className="btn solid">Download résumé ↓</a>
          </GlowCard>
        </Reveal>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="foot">
        <Reveal>
          <span className="kicker mono">CONTACT</span>
          <h2 className="display">Let's build <span className="grad">something.</span></h2>
          <p>I'm currently looking for internship and full-stack opportunities for 2026 — and always happy to talk through an idea or a codebase.</p>
          <a href="mailto:alfeekhan20@gmail.com" className="btn solid">Say hello →</a>
          <div className="flinks mono">
            <a href="https://github.com/Alfee123-web" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/alfeekhan509815340" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://leetcode.com/u/alfeekhan" target="_blank" rel="noreferrer">LeetCode</a>
            <a href="mailto:alfeekhan20@gmail.com">Email</a>
          </div>
          <div className="copy">© {new Date().getFullYear()} Alfee Khan. Built with React.</div>
        </Reveal>
      </footer>
    </>
  );
}