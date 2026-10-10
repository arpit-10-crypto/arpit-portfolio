
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "ICU Virtual Visit System",
    category: "BCA Final Year Project",
    description:
      "A hospital virtual visiting platform designed to help families communicate with ICU patients through supervised video visits.",
    tech: ["HTML", "CSS", "JavaScript", "Python Flask", "Socket.IO"],
    github: "https://github.com/arpit-10-crypto",
  },
  {
    number: "02",
    title: "E-commerce Website",
    category: "Web Development",
    description:
      "A responsive shopping interface with product listings, categories, seller sections and reusable React components.",
    tech: ["React", "Vite", "Tailwind CSS", "React Router"],
    github: "https://github.com/arpit-10-crypto",
  },
  {
    number: "03",
    title: "Data Analytics Portfolio",
    category: "Data Analytics",
    description:
      "A collection of data analysis work using SQL, Excel, Python and Power BI. Add your completed analysis projects here.",
    tech: ["SQL", "Excel", "Python", "Power BI"],
    github: "https://github.com/arpit-10-crypto",
  },
];

export default function Projects() {
  return (
    <section className="page">
      <span className="eyebrow">MY WORK</span>

      <h1>
        Featured <span className="blue-text">Projects.</span>
      </h1>

      <p>
        A selection of projects that reflect my learning
        and interest in software development and analytics.
      </p>

      <div className="project-list">
        {projects.map((project) => (
          <article className="card project-card" key={project.number}>
            <div className="project-number">{project.number}</div>

            <div className="project-content">
              <span className="project-category">
                {project.category}
              </span>

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <div className="skill-tags">
                {project.tech.map((tech) => (
                  <span className="skill-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <a
                className="project-link"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <strong>GH</strong>
                View GitHub
                <ArrowUpRight size={17} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
