
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="page about-page">
      <div className="about-layout">
        <div className="about-photo-wrap">
          <div className="about-photo-frame">
            <img
              src="/arpit.jpg"
              alt="Arpit Gupta"
              className="about-photo"
            />
          </div>

          <div className="about-photo-badge">
            <span className="status-dot"></span>
            Always learning, always growing
          </div>
        </div>

        <div className="about-content">
          <span className="eyebrow">A LITTLE ABOUT ME</span>

          <h1>
            Hello, I'm <span className="blue-text">Arpit Gupta.</span>
          </h1>

          <h3 className="about-subtitle">
            MCA Student · Aspiring Software Developer
          </h3>

          <p>
            I'm passionate about technology, programming and
            building useful digital experiences. I enjoy learning
            new skills and turning ideas into practical projects.
          </p>

          <p>
            My interests include web development, databases,
            Python programming and data analytics. I aim to
            keep improving my technical skills through hands-on
            projects and continuous learning.
          </p>

          <div className="about-highlights">
            <div className="about-highlight">
              <span>01</span>
              <div>
                <strong>Development</strong>
                <p>Building practical web applications</p>
              </div>
            </div>

            <div className="about-highlight">
              <span>02</span>
              <div>
                <strong>Data Analytics</strong>
                <p>Exploring data with SQL and Excel</p>
              </div>
            </div>

            <div className="about-highlight">
              <span>03</span>
              <div>
                <strong>Continuous Learning</strong>
                <p>Learning and improving every day</p>
              </div>
            </div>
          </div>

          <Link to="/projects" className="primary-button">
            Explore My Projects <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
