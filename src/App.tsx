import { LANGS, ui, links, projects, skillGroups, certificates, experience, featured, languagesSpoken } from "./data/content";
import { FaGithub, FaWhatsapp, FaRegEnvelope, FaArrowRight, FaExternalLinkAlt, FaRegUser, FaLinkedin, FaRegFileCode } from "react-icons/fa";
import { MdArrowBackIosNew, MdArrowForwardIos, MdClose } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { GiSoapExperiment } from "react-icons/gi";
import { skillIcons } from "./components/icons";
import { BiBookBookmark } from "react-icons/bi";
import { RiGalleryLine } from "react-icons/ri";
import { FiSmartphone } from "react-icons/fi";
import profile from "./assets/profile.jpeg";

function App() {
  const [lang, setLang] = useState<number>(() => {
    const saved = Number(localStorage.getItem("lang"));
    if (saved >= 0 && saved <= 2 && localStorage.getItem("lang")) return saved;
    const nav = navigator.language.toLowerCase();
    return nav.startsWith("pt") ? 1 : nav.startsWith("es") ? 2 : 0;
  });
  const [cur, setCur] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [zoom, setZoom] = useState(false);
  const thumbs = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const total = certificates.length;
  const go = (i: number) => setCur(((i % total) + total) % total);

  useEffect(() => {
    localStorage.setItem("lang", String(lang));
    document.documentElement.lang = ["en", "pt", "es"][lang];
  }, [lang]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setLightbox(false); setZoom(false); }
      if (!lightbox) return;
      if (e.key === "ArrowRight") go(cur + 1);
      if (e.key === "ArrowLeft") go(cur - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  // Preload only the neighbours of the current certificate (never all of them at once)
  useEffect(() => {
    [cur + 1, cur - 1].forEach((i) => { new Image().src = certificates[((i % total) + total) % total].full; });
  }, [cur, total]);

  // Keep the active thumbnail centred inside its own scroller (doesn't scroll the page)
  useEffect(() => {
    const box = thumbs.current; const el = box?.children[cur] as HTMLElement | undefined;
    if (box && el) box.scrollTo({ left: el.offsetLeft - box.clientWidth / 2 + el.clientWidth / 2, behavior: "smooth" });
  }, [cur]);

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
      <div className="lang" role="group" aria-label="Language">
        {LANGS.map((l, i) => (
          <button key={l} className={i === lang ? "active" : ""} onClick={() => setLang(i)}>{l}</button>
        ))}
      </div>

      <nav className="dock" aria-label="Sections">
        <a href="#top" aria-label={ui.nav.about[lang]} title={ui.nav.about[lang]}><FaRegUser /></a>
        <a href="#experience" aria-label={ui.nav.skills[lang]} title={ui.nav.skills[lang]}><GiSoapExperiment /></a>
        <a href="#skills" aria-label={ui.nav.skills[lang]} title={ui.nav.skills[lang]}><BiBookBookmark /></a>
        <a href="#certificates" aria-label={ui.nav.certificates[lang]} title={ui.nav.certificates[lang]}><RiGalleryLine /></a>
        <a href="#contact" aria-label={ui.nav.contact[lang]} title={ui.nav.contact[lang]}><FiSmartphone /></a>
      </nav>

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
        
        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <div className="container">
            <div className="head reveal">
              <span className="section-label">{experience.label[lang]}</span>
              <h2>{experience.title[lang]}</h2>
            </div>

            <div className="timeline">
              <article className="reveal" style={{ position: "relative", ["--c" as any]: "#e91e8c", transitionDelay: `80ms` }}>
                <header className="job-head" style={{ marginBottom: 0 }}>
                  <span className="job-dot" style={{ top: 10 }}/>
                  <h2>Companies</h2>
                </header>
              </article>
              
              {experience.jobs.map((job, i) => (
                <article key={job.company} className="job card reveal" style={{ ["--c" as any]: job.accent, ["--next-c" as any]: experience.jobs[i + 1]?.accent, transitionDelay: `${i * 80}ms` }}>
                  <span className="job-dot" />
                  <header className="job-head">
                    <div>
                      <h3 className="job-company">{job.company}</h3>
                      <p className="job-role">{job.role[lang]}</p>
                    </div>
                    <div className="job-meta">
                      <span className="tag">{job.period[lang]}</span>
                      <span className="tag">{job.place[lang]}</span>
                      {job.team && <span className="tag">{job.team[lang]}</span>}
                    </div>
                  </header>
                  <ul className="bullets">
                    {job.bullets[lang].map((b) => <li key={b}>{b}</li>)}
                    
                    {job.result && <span className="result" key={job.company}>
                        <strong>{job.result.text[lang]}</strong>
                        <br></br>
                        <br></br>
                      <a href={job.result.link} target="_blank" rel="noreferrer"><strong>{job.result.label}</strong></a>
                    </span>}
                  </ul>
                </article>
              ))}
            </div> 

            <div className="timeline">
              <article className="reveal" style={{ position: "relative", ["--c" as any]: "#e91e8c", transitionDelay: `80ms` }}>
                <header className="job-head" style={{ marginBottom: 0 }}>
                  <span className="job-dot" style={{ top: 10 }}/>
                  <h3>{experience.freelance.role[lang]}</h3>
                  <span className="tag">{experience.freelance.period[lang]}</span>
                  <div className="job-meta">
                    <p>{experience.freelance.text[lang]}</p>
                    <h4 className="selected-projects">Selected Projects:</h4>
                  </div>
                </header>
              </article>

              {experience.freelance.jobs.map((job, i) => (
                <article key={job.company} className="job card reveal" style={{ ["--c" as any]: job.accent, ["--next-c" as any]: experience.jobs[i + 1]?.accent, transitionDelay: `${i * 80}ms` }}>
                  <span className="job-dot" />
                  <header className="job-head">
                    <div><h3 className="job-company">{job.company}</h3></div>
                    <div className="job-meta">
                      <span className="tag">{job.place && job.place[lang]}</span>
                      {job.team && <span className="tag">{job.team[lang]}</span>}
                    </div>
                  </header>
                  <ul className="bullets">
                    {job.bullets[lang].map((b) => <li key={b}>{b}</li>)}
                    
                    {job.result && <span className="result" key={job.company}>
                        <strong>{job.result.text[lang]}</strong>
                        <br></br>
                        <br></br>
                      <a href={job.result.link} target="_blank" rel="noreferrer"><strong>{job.result.label}</strong></a>
                    </span>}
                  </ul>
                </article>
              ))}
            </div>

            <div className="head langs-head reveal"><span className="section-label">{languagesSpoken.label[lang]}</span>
              <h2>{languagesSpoken.title[lang]}</h2></div>
            <div className="lang-grid">
              {languagesSpoken.items.map((l, i) => (
                <div key={l.color} className="card lang-card reveal" style={{ ["--c" as any]: l.color, transitionDelay: `${i * 60}ms` }}>
                  <b>{l.name[lang]}</b>
                  <span>{l.level[lang]}</span>
                  <div className="meter">{[1, 2, 3, 4, 5].map((n) => <i key={n} className={n <= l.dots ? "on" : ""} />)}</div>
                </div>
              ))}
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
              <h2>{ui.projects.title[lang]}</h2>
            </div>
              <article className="card featured reveal" style={{ ["--c" as any]: "#ff6b35" }}>
                <span className="badge">★ {featured.badge[lang]}</span>
                <h3>{featured.name[lang]}</h3>
                <p className="featured-sub">{featured.sub[lang]}</p>
                <p>{featured.desc[lang]}</p>
                <div className="chips small">{featured.stack.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                <div className="project-actions">
                  <a className="btn-orange" href={featured.code} rel="noreferrer"><FaRegFileCode /> {ui.projects.code[lang]}</a>
                </div>
            </article>
            <div className="project-grid">
              {projects.map((p, i) => (
                <article key={p.name} className="card project reveal" style={{ ["--c" as any]: p.accent, transitionDelay: `${i * 80}ms` }}>
                  <div className="project-top"><span className="project-name">{p.name}</span></div>
                  <p>{p.desc[lang]}</p>
                  <div className="chips small">{p.stack.map((s) => <span key={s} className="tag">{s}</span>)}</div>
                  <div className="project-actions">
                    {p.code && <a className="btn-pink" href={p.code} rel="noreferrer"><FaRegFileCode /> {ui.projects.code[lang]}</a>}
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
          <div className="container">
            <div className="carousel reveal">
              <div className="stage"
                onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
                onTouchEnd={(e) => {
                  if (touchX.current === null) return;
                  const dx = e.changedTouches[0].clientX - touchX.current;
                  if (Math.abs(dx) > 50) go(cur + (dx < 0 ? 1 : -1));
                  touchX.current = null;
                }}>
                <button className="arrow left" onClick={() => go(cur - 1)} aria-label="Previous"><MdArrowBackIosNew /></button>
                <button className="frame" onClick={() => setLightbox(true)} aria-label="Enlarge">
                  <img key={cur} src={certificates[cur].full} alt={certificates[cur].title} />
                  <span className="zoom-hint">⤢</span>
                </button>
                <button className="arrow right" onClick={() => go(cur + 1)} aria-label="Next"><MdArrowForwardIos /></button>
              </div>
              <div className="meta">
                <h3>{certificates[cur].title}</h3>
                <span className="count"><b>{String(cur + 1).padStart(2, "0")}</b> / {total}</span>
              </div>
              <div className="progress"><i style={{ width: `${((cur + 1) / total) * 100}%` }} /></div>
              <div className="thumbs" ref={thumbs}>
                {certificates.map((c, i) => (
                  <button key={c.thumb} className={i === cur ? "thumb on" : "thumb"} onClick={() => setCur(i)} aria-label={c.title}>
                    <img src={c.thumb} alt="" loading="lazy" width={160} height={108} />
                  </button>
                ))}
              </div>
            </div>
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
                <a className="btn-primary" href={links.whatsapp} target="_blank" rel="noreferrer"><FaWhatsapp /> WhatsApp</a>
                <a className="btn-outline" href={links.email}><FaRegEnvelope /> {ui.contact.mail[lang]}</a>
                <a className="btn-outline" href={links.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
                <a className="btn-outline" href={links.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /> Linkedin</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Raphael Sanseverino</footer>

      {lightbox && (
        <div className="lightbox" onClick={() => { setLightbox(false); setZoom(false); }}>
          <button className="lb-close" aria-label="Close"><MdClose /></button>
          <button className="arrow left" onClick={(e) => { e.stopPropagation(); go(cur - 1); }} aria-label="Previous"><MdArrowBackIosNew /></button>
          <div className={zoom ? "lb-scroll zoomed" : "lb-scroll"} onClick={(e) => e.stopPropagation()}>
            <img src={certificates[cur].full} alt={certificates[cur].title} onClick={() => setZoom(!zoom)} />
          </div>
          <button className="arrow right" onClick={(e) => { e.stopPropagation(); go(cur + 1); }} aria-label="Next"><MdArrowForwardIos /></button>
          <p onClick={(e) => e.stopPropagation()}>{certificates[cur].title} · {cur + 1}/{total}<small>{zoom ? " — click to fit" : " — click image to zoom"}</small></p>
        </div>
      )}
    </>
  );
}

export default App;
