import { useEffect, useState } from "react";
import { FaGithub, FaWhatsapp, FaRegEnvelope, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { LANGS, ui, links, projects, skillGroups, certificates } from "./data/content";
import { skillIcons } from "./components/icons";
import profile from "./assets/profile.jpeg";

function App() {
  const [lang, setLang] = useState<number>(() => {
    const saved = Number(localStorage.getItem("lang"));
    if (saved >= 0 && saved <= 2 && localStorage.getItem("lang")) return saved;
    const nav = navigator.language.toLowerCase();
    return nav.startsWith("pt") ? 1 : nav.startsWith("es") ? 2 : 0;
  });
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("lang", String(lang));
    document.documentElement.lang = ["en", "pt", "es"][lang];
  }, [lang]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (open === null) return;
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((open + 1) % certificates.length);
      if (e.key === "ArrowLeft") setOpen((open - 1 + certificates.length) % certificates.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Reveal on scroll
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <header className="nav">
        <a href="#top" className="brand">
          <span className="logo-r">R</span><span className="logo-s">S</span>
          <span className="brand-name">raphael.dev</span>
        </a>
        <nav className="nav-links">
          <a href="#skills">{ui.nav.skills[lang]}</a>
          <a href="#projects">{ui.nav.projects[lang]}</a>
          <a href="#certificates">{ui.nav.certificates[lang]}</a>
          <a href="#contact">{ui.nav.contact[lang]}</a>
        </nav>
        <div className="lang" role="group" aria-label="Language">
          {LANGS.map((l, i) => (
            <button key={l} className={i === lang ? "active" : ""} onClick={() => setLang(i)}>{l}</button>
          ))}
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="glow glow-pink" /><div className="glow glow-cyan" />
          <div className="container hero-grid">
            <div className="fade-up">
              <span className="pill"><i className="dot" />{ui.hero.label[lang]}</span>
              <p className="hi">{ui.hero.hi[lang]}</p>
              <h1 className="name">{ui.hero.name}</h1>
              <h2 className="role">
                {ui.hero.role[lang]} <span className="gradient-text">{ui.hero.roleAccent[lang]}</span>
              </h2>
              <p className="lead">{ui.hero.text[lang]}</p>
              <div className="actions">
                <a href="#projects" className="btn-primary">{ui.hero.cta1[lang]} <FaArrowRight /></a>
                <a href="#contact" className="btn-outline">{ui.hero.cta2[lang]}</a>
              </div>
              <div className="stats">
                {ui.hero.stats.map((s) => (
                  <div key={s.n}><b>{s.n}</b><span>{s.l[lang]}</span></div>
                ))}
              </div>
            </div>

            <div className="hero-visual fade-up d2">
              <div className="avatar-ring"><img src={profile} alt="Raphael Sanseverino" /></div>
              <div className="float-card fc1">
                <span className="tl"><i /><i /><i /></span>
                <code><em>const</em> dev = {"{"} <br />&nbsp;&nbsp;stack: <u>"React · Node · TS"</u>,<br />&nbsp;&nbsp;open: <strong>true</strong><br />{"}"}</code>
              </div>
              <div className="float-card fc2">{skillIcons["React"]}{skillIcons["Node.js"]}{skillIcons["TypeScript"]}</div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="container">
            <div className="head reveal"><span className="section-label">{ui.skills.label[lang]}</span>
              <h2>{ui.skills.title[lang]}</h2></div>
            <div className="skill-grid">
              {skillGroups.map((g, i) => (
                <article key={i} className="card skill-card reveal" style={{ ["--c" as any]: g.color, transitionDelay: `${i * 60}ms` }}>
                  <h3>{g.title[lang]}</h3>
                  <div className="chips">
                    {g.items.map((n) => (
                      <span key={n} className="chip">{skillIcons[n]}{n}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section alt">
          <div className="container">
            <div className="head reveal"><span className="section-label">{ui.projects.label[lang]}</span>
              <h2>{ui.projects.title[lang]}</h2></div>
            <div className="project-grid">
              {projects.map((p, i) => (
                <article key={p.name} className="card project reveal" style={{ ["--c" as any]: p.accent, transitionDelay: `${i * 80}ms` }}>
                  <div className="project-top"><span className="project-name">{p.name}</span></div>
                  <p>{p.desc[lang]}</p>
                  <div className="chips small">{p.stack.map((s) => <span key={s} className="tag">{s}</span>)}</div>
                  <div className="project-actions">
                    {p.code && <a className="btn-pink" href={p.code} target="_blank" rel="noreferrer"><FaGithub /> {ui.projects.code[lang]}</a>}
                    {p.live && <a className="btn-orange" href={p.live} target="_blank" rel="noreferrer"><FaExternalLinkAlt /> {ui.projects.live[lang]}</a>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATES */}
        <section id="certificates" className="section">
          <div className="container">
            <div className="head reveal"><span className="section-label">{ui.certs.label[lang]}</span>
              <h2>{ui.certs.title[lang]}</h2></div>
          </div>
          <div className="cert-strip reveal">
            {certificates.map((c, i) => (
              <button key={c.img} className="cert" onClick={() => setOpen(i)} aria-label={c.title}>
                <img src={c.img} alt={c.title} loading="lazy" />
                <span>{c.title}</span>
              </button>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="container">
            <div className="cta card reveal">
              <span className="section-label">{ui.contact.label[lang]}</span>
              <h2>{ui.contact.title[lang]}</h2>
              <p>{ui.contact.text[lang]}</p>
              <div className="actions center">
                <a className="btn-primary" href={links.email}><FaRegEnvelope /> {ui.contact.mail[lang]}</a>
                <a className="btn-outline" href={links.whatsapp} target="_blank" rel="noreferrer"><FaWhatsapp /> WhatsApp</a>
                <a className="btn-outline" href={links.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Raphael Sanseverino</footer>

      {open !== null && (
        <div className="lightbox" onClick={() => setOpen(null)}>
          <img src={certificates[open].img} alt={certificates[open].title} onClick={(e) => e.stopPropagation()} />
          <p>{certificates[open].title}</p>
        </div>
      )}
    </>
  );
}

export default App;
