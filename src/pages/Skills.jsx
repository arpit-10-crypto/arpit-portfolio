
const skillGroups = [
  {
    title: "Programming",
    icon: "💻",
    skills: ["Python", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Data Analytics",
    icon: "📊",
    skills: ["SQL", "Excel", "Power BI", "Data Visualization"],
  },
  {
    title: "Web Development",
    icon: "🌐",
    skills: ["React", "Tailwind CSS", "Node.js", "Flask"],
  },
  {
    title: "Database & Tools",
    icon: "🗄️",
    skills: ["MySQL", "PostgreSQL", "Git", "GitHub"],
  },
];

export default function Skills() {
  return (
    <section className="page">
      <span className="eyebrow">WHAT I WORK WITH</span>

      <h1>
        My Technical <span className="blue-text">Skills.</span>
      </h1>

      <p>
        Technologies and tools I have studied and used
        while learning and building projects.
      </p>

      <div className="grid-3 skills-grid">
        {skillGroups.map((group) => (
          <div className="card skill-card" key={group.title}>
            <div className="skill-icon">{group.icon}</div>

            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
