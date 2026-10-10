
const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    status: "Currently Studying",
    description:
      "Learning programming, data structures and advanced computer applications.",
    icon: "🎓",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    status: "Completed",
    description:
      "Studied computer applications, programming, databases and web technologies.",
    icon: "💻",
  },
  {
    degree: "Class XII",
    status: "Completed",
    description:
      "Senior secondary education.",
    icon: "📘",
  },
  {
    degree: "Class X",
    status: "Completed",
    description:
      "Secondary school education.",
    icon: "📚",
  },
];

export default function Education() {
  return (
    <section className="page">
      <span className="eyebrow">MY LEARNING JOURNEY</span>

      <h1>
        Education & <span className="blue-text">Learning.</span>
      </h1>

      <p>
        My academic journey and the foundation behind
        my interest in technology.
      </p>

      <div className="education-list">
        {education.map((item, index) => (
          <article className="card education-card" key={item.degree}>
            <div className="education-icon">{item.icon}</div>

            <div className="education-content">
              <span className="education-status">
                {item.status}
              </span>

              <h3>{item.degree}</h3>

              <p>{item.description}</p>
            </div>

            <span className="education-number">
              0{index + 1}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
