import { portfolioConfig } from "@/lib/data";

export default function Portfolio() {
  return <main className="page">
    <header className="page-hero"><p className="eyebrow">SELECTED WORK</p><h1>Stories we<br/><i>love to tell.</i></h1><p>Our portfolio is structured for real wedding films, photography, pre-wedding stories and event productions. Add each new project in the portfolio content catalog.</p></header>
    <section className="section">
      <div className="portfolio-grid">
        {portfolioConfig.projects.map(project => <article className="portfolio-placeholder" key={project.id}>
          <span>{project.category.toUpperCase()} • {project.title.toUpperCase()}</span>
          {project.videoLink && <a className="text-link" href={project.videoLink} target="_blank" rel="noreferrer">Watch Film</a>}
        </article>)}
      </div>
    </section>
  </main>;
}
