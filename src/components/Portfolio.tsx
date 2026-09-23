"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { buildProcess, capabilities, experience, profile, projects } from "@/content/portfolio";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
      <path d={diagonal ? "M7 17 17 7M8 7h9v9" : "M5 12h14m-5-5 5 5-5 5"} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="19" height="19">
      <path fill="currentColor" d="M12 .8a11.4 11.4 0 0 0-3.6 22.2c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.3-1.4-1.7-1.4-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 0 1 1.3-3.3c-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.3a11.8 11.8 0 0 1 6.2 0C18 4 19 4.4 19 4.4c.7 1.7.3 3 .2 3.3a4.7 4.7 0 0 1 1.3 3.3c0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.2c0 .4.2.7.8.6A11.4 11.4 0 0 0 12 .8Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
      <path fill="currentColor" d="M5.2 3.5A2.3 2.3 0 1 1 .6 3.5a2.3 2.3 0 0 1 4.6 0ZM1 7h4.3v14H1V7Zm6.8 0H12v1.9h.1c.6-1.1 2-2.3 4.1-2.3 4.4 0 5.2 2.9 5.2 6.7V21h-4.3v-6.8c0-1.6 0-3.7-2.3-3.7s-2.6 1.8-2.6 3.6V21H7.8V7Z" />
    </svg>
  );
}

function ThemeIcon({ dark }: { dark: boolean }) {
  return dark ? (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.7"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"><path d="M20.5 15.5A8.8 8.8 0 0 1 8.5 3.5a9 9 0 1 0 12 12Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>
  );
}

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="section-intro reveal">
      <p className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</p>
      <div className="section-intro-grid">
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </div>
  );
}

function SystemMap() {
  const nodes = ["INPUT", "CLASSIFY", "EXTRACT", "SERVE", "AUDIT", "INTERFACE"];
  return (
    <div className="system-map" aria-label="AI delivery pipeline: input, classify, extract, serve, audit, interface">
      <div className="system-map-topline"><span>LIVE SYSTEM MAP</span><span className="system-status">OPERATIONAL</span></div>
      <div className="map-orbit orbit-one" />
      <div className="map-orbit orbit-two" />
      <svg className="map-lines" viewBox="0 0 720 440" role="presentation">
        <path className="path-muted" d="M80 220 C170 105 260 105 350 220 S530 335 640 220" />
        <path className="path-signal" d="M80 220 C170 105 260 105 350 220 S530 335 640 220" />
        <path className="path-muted path-secondary" d="M160 330 C280 260 410 115 570 120" />
      </svg>
      <div className="map-core"><span>KG</span><small>BUILD / EVALUATE / SHIP</small></div>
      <div className="map-nodes">
        {nodes.map((node, index) => (
          <div className={`map-node node-${index + 1}`} key={node}>
            <span className="node-pulse" />
            <small>0{index + 1}</small>
            <strong>{node}</strong>
          </div>
        ))}
      </div>
      <div className="map-readout readout-a"><span>LATENCY</span><strong>VISIBLE</strong></div>
      <div className="map-readout readout-b"><span>QUALITY</span><strong>MEASURED</strong></div>
    </div>
  );
}

function ProjectVisual({ projectIndex }: { projectIndex: number }) {
  if (projectIndex === 0) {
    return (
      <div className="project-visual clinical-visual" aria-hidden="true">
        <div className="terminal-bar"><span/><span/><span/><em>inference.pipeline</em></div>
        <div className="clinical-grid">
          <div className="input-copy"><small>INPUT / 0048</small><p>The patient reports persistent pain and is taking...</p></div>
          <div className="decision"><small>PATIENT-CARE GATE</small><strong>SEND</strong><span>0.989</span></div>
          <div className="entity-lines"><i style={{width:"82%"}}/><i style={{width:"58%"}}/><i style={{width:"71%"}}/><i style={{width:"43%"}}/></div>
          <div className="entity-chip chip-a">Medication</div><div className="entity-chip chip-b">Symptom</div>
        </div>
      </div>
    );
  }
  if (projectIndex === 1) {
    return (
      <div className="project-visual agent-visual" aria-hidden="true">
        <svg viewBox="0 0 640 360"><path d="M90 180H215M265 180H380M430 180H550"/><path d="M240 155V80H430M405 105v50"/></svg>
        {["Strategy", "Research", "Risk", "Gate"].map((name, i) => <div className={`agent-node agent-${i+1}`} key={name}><small>0{i+1}</small><strong>{name}</strong><span>{i === 3 ? "PASS / FAIL" : "ACTIVE"}</span></div>)}
        <div className="agent-signal signal-one"/><div className="agent-signal signal-two"/>
      </div>
    );
  }
  return (
    <div className="project-visual forecast-visual" aria-hidden="true">
      <div className="chart-label"><span>ACTUAL</span><span>PREDICTED</span></div>
      <svg viewBox="0 0 640 360">
        <g className="gridlines"><path d="M0 72h640M0 144h640M0 216h640M0 288h640"/></g>
        <path className="actual-line" d="M0 262C35 252 53 199 82 211s43 83 74 57 45-170 81-160 34 137 71 130 42-92 78-84 45 113 79 94 48-142 82-128 42 106 73 94 54-67 100-44"/>
        <path className="prediction-line" d="M0 268C38 248 51 207 83 216s42 74 73 50 46-157 81-151 35 127 71 127 42-84 78-80 43 102 79 91 47-133 82-126 41 100 74 92 54-60 99-43"/>
      </svg>
      <div className="score"><small>TEST R²</small><strong>0.998</strong></div>
    </div>
  );
}

export function Portfolio() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("work");
  const [progress, setProgress] = useState(0);
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
      const sections = ["work", "capabilities", "experience", "about", "contact"];
      const current = sections.findLast((id) => {
        const element = document.getElementById(id);
        return element ? element.getBoundingClientRect().top < window.innerHeight * 0.42 : false;
      });
      if (current) setActiveSection(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="progress-track" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="site-header">
        <a href="#top" className="wordmark" onClick={closeMenu} aria-label="Kaushik Gurrala, home">
          <span>KG</span><em>KAUSHIK GURRALA</em>
        </a>
        <button className="menu-button" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen(!menuOpen)}>
          <span>{menuOpen ? "CLOSE" : "MENU"}</span><i/><i/>
        </button>
        <nav id="primary-nav" className={menuOpen ? "nav-open" : ""} aria-label="Primary navigation">
          {["work", "experience", "about", "contact"].map((item) => (
            <a key={item} href={`#${item}`} className={activeSection === item ? "active" : ""} onClick={closeMenu}>{item}</a>
          ))}
          <button className="theme-button" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? "light" : "dark"} mode`}><ThemeIcon dark={dark}/></button>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-kicker"><span className="status-pulse"/>AI/ML SOFTWARE ENGINEER <em>NEW JERSEY / USA</em></div>
              <h1><span>I build AI systems</span><span>that move from</span><span className="accent-text">models to real products.</span></h1>
              <p>Working across model evaluation, agentic workflows, backend APIs, containerized deployment, database integration, and user-facing applications.</p>
              <div className="hero-actions">
                <a href="#work" className="button button-primary">Explore selected work <Arrow/></a>
                <a href={profile.github} className="button button-secondary" target="_blank" rel="noreferrer"><GithubIcon/> GitHub <Arrow diagonal/></a>
              </div>
              <div className="availability"><span/><p><strong>OPEN TO OPPORTUNITIES</strong>AI/ML · Backend · Full-stack AI</p></div>
            </div>
            <SystemMap />
          </div>
          <div className="hero-footer"><span>SCROLL TO EXPLORE</span><div/><span>01 — 06</span></div>
        </section>

        <section className="projects-section" id="work">
          <SectionIntro eyebrow="Selected work" title="Systems built to survive the prototype." copy="Three projects showing how I move from an uncertain problem to an evaluated, integrated, and understandable system." />
          <div className="projects-list">
            {projects.map((project, index) => (
              <article className={`project project-${project.accent} reveal`} key={project.slug}>
                <div className="project-heading">
                  <span className="project-index">{project.index}</span>
                  <div><p className="project-kicker">{project.kicker}</p><h3>{project.title}</h3></div>
                  <div className="project-metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
                </div>
                <div className="project-body">
                  <div className="project-story">
                    <p className="project-description">{project.description}</p>
                    <p className="project-impact">{project.impact}</p>
                    <div className="tech-list">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
                    <div className="project-links">
                      <Link href={`/work/${project.slug}`} className="text-link">Read case study <Arrow/></Link>
                      {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="icon-link" aria-label={`${project.title} GitHub repository`}><GithubIcon/></a>}
                    </div>
                  </div>
                  <ProjectVisual projectIndex={index}/>
                </div>
                <div className="project-flow" aria-label={`${project.title} workflow`}>
                  {project.flow.map((step, i) => <div key={step}><small>0{i+1}</small><span>{step}</span>{i < project.flow.length - 1 && <Arrow/>}</div>)}
                </div>
              </article>
            ))}
          </div>
          <article className="lab-card reveal">
            <div><p className="eyebrow"><span className="eyebrow-dot"/>ENGINEERING LAB</p><h3>Containerized Travel API</h3></div>
            <p>A focused Flask REST API with SQLAlchemy persistence, automated tests, Docker, and a GitHub Actions workflow.</p>
            <a href="https://github.com/KaushikGurrala/flask-travel-api" target="_blank" rel="noreferrer" className="text-link">View repository <Arrow diagonal/></a>
          </article>
        </section>

        <section className="capabilities-section" id="capabilities">
          <SectionIntro eyebrow="Engineering range" title="Across the system—not just the model." copy="The strongest AI products depend on sound evaluation, reliable software, and clear interfaces working together." />
          <div className="capability-list">
            {capabilities.map((item) => (
              <article className="capability reveal" key={item.number}>
                <span>{item.number}</span><h3>{item.title}</h3><p>{item.detail}</p><i><Arrow diagonal/></i>
              </article>
            ))}
          </div>
          <div className="ticker" aria-hidden="true"><div>PYTHON · FASTAPI · TRANSFORMERS · LANGGRAPH · RAG · REACT · TYPESCRIPT · DOCKER · SQL · EVALUATION ·&nbsp;</div></div>
        </section>

        <section className="experience-section" id="experience">
          <SectionIntro eyebrow="Experience" title="Applied work, presented without the noise." />
          <div className="experience-grid">
            <div className="experience-lead reveal"><p>My recent work sits at the boundary between machine learning and software delivery.</p><span>ROLE HISTORY / 2023—NOW</span></div>
            <div className="experience-list">
              {experience.map((role, i) => (
                <article className="experience-item reveal" key={role.period}>
                  <div className="experience-number">0{i+1}</div>
                  <div><p className="experience-period">{role.period}</p><h3>{role.title}</h3><p className="experience-summary">{role.summary}</p><div className="tech-list">{role.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section">
          <SectionIntro eyebrow="How I build" title="Evidence before ornament." copy="A practical loop for turning ambiguous AI ideas into systems people can inspect, trust, and improve." />
          <div className="process-rail">
            {buildProcess.map(([title, detail], i) => (
              <article className="process-step reveal" key={title}><span>0{i+1}</span><div className="process-marker"/><h3>{title}</h3><p>{detail}</p></article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-label reveal"><p className="eyebrow"><span className="eyebrow-dot"/>ABOUT</p><div className="monogram">KG<span>AI / SE</span></div></div>
          <div className="about-copy reveal">
            <h2>I enjoy the space where machine learning stops being a notebook and starts becoming software.</h2>
            <div className="about-columns">
              <p>I am an AI/ML Software Engineer based in New Jersey. My work spans clinical NLP, agentic AI, retrieval-augmented generation, backend integration, model evaluation, containerization, and full-stack development.</p>
              <p>I care about understanding the problem first, measuring system behavior honestly, and building solutions that remain understandable after the prototype stage.</p>
            </div>
            <div className="education">
              <div><span>2024—2025</span><strong>M.E. Computer Science</strong><p>New Jersey Institute of Technology</p></div>
              <div><span>2020—2024</span><strong>B.E. Computer Science</strong><p>GITAM University</p></div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-top reveal"><p className="eyebrow"><span className="eyebrow-dot"/>CONTACT / AVAILABLE</p><span>{profile.location}</span></div>
          <div className="contact-main reveal">
            <h2>Let’s build<br/><em>something useful.</em></h2>
            <p>I’m interested in early-career AI, machine-learning, backend, and full-stack software-engineering opportunities.</p>
          </div>
          <div className="contact-actions reveal">
            <a href={`mailto:${profile.email}`} className="contact-email">{profile.email}<Arrow diagonal/></a>
            <div><a href={profile.github} target="_blank" rel="noreferrer"><GithubIcon/>GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon/>LinkedIn</a></div>
          </div>
        </section>
      </main>

      <footer><span>© {year} KAUSHIK GURRALA</span><span>DESIGNED AROUND SYSTEMS, EVIDENCE, AND USEFUL WORK.</span><a href="#top">BACK TO TOP ↑</a></footer>
    </>
  );
}
