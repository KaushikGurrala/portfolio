import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className={`case-study case-${project.accent}`}>
      <nav className="case-nav" aria-label="Case study navigation">
        <Link href="/" className="case-wordmark">KG</Link>
        <Link href="/#work">← ALL WORK</Link>
      </nav>

      <header className="case-hero">
        <div className="case-meta"><span>{project.index}</span><span>{project.kicker}</span></div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <div className="case-stat"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
      </header>

      <section className="case-flow" aria-label={`${project.title} architecture`}>
        {project.flow.map((step, index) => (
          <div key={step}><small>0{index + 1}</small><strong>{step}</strong>{index < project.flow.length - 1 && <span>→</span>}</div>
        ))}
      </section>

      <section className="case-narrative">
        <article><span>01 / CHALLENGE</span><h2>The problem</h2><p>{project.challenge}</p></article>
        <article><span>02 / APPROACH</span><h2>The system</h2><p>{project.approach}</p></article>
        <article><span>03 / RESULT</span><h2>The outcome</h2><p>{project.result}</p></article>
      </section>

      <section className="case-stack">
        <p>TECHNICAL SURFACE</p>
        <div>{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
      </section>

      <section className="case-principles">
        <div><span>01</span><h3>Measure behavior</h3><p>Evaluation and error analysis are part of the system, not a final presentation step.</p></div>
        <div><span>02</span><h3>Keep boundaries clear</h3><p>Each service has an explicit responsibility, contract, and visible failure mode.</p></div>
        <div><span>03</span><h3>Design for operators</h3><p>Technical quality includes the tools people need to inspect and control the workflow.</p></div>
      </section>

      <footer className="case-footer">
        <div><span>NEXT STEP</span><h2>Keep exploring.</h2></div>
        <Link href="/#work">VIEW ALL PROJECTS →</Link>
        {project.github && <a href={project.github} target="_blank" rel="noreferrer">OPEN GITHUB ↗</a>}
      </footer>
    </main>
  );
}
