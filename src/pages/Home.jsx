
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="eyebrow">
          AVAILABLE FOR OPPORTUNITIES
        </span>

        <h1>
          Hello, I'm <span>Arpit Gupta.</span>
          <br />
          I build things for the web.
        </h1>

        <p className="hero-description">
          MCA student and aspiring Software Developer
          and Data Analyst. I enjoy building useful
          web applications and turning data into
          meaningful insights.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="primary-button">
            Explore Projects <span>↗</span>
          </Link>

          <Link to="/contact" className="secondary-button">
            Contact Me
          </Link>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/arpit-10-crypto"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <strong>GH</strong>
          </a>

          <a
            href="https://www.linkedin.com/in/arpit-gupt-6a8349393/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <strong>in</strong>
          </a>

          <span className="hero-skill">
            &lt;/&gt; Developer &amp; Learner
          </span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-orbit orbit-one"></div>
        <div className="hero-orbit orbit-two"></div>

        <div className="hero-card">
          <div className="hero-card-icon">
            &lt;/&gt;
          </div>

          <h2>Turning ideas</h2>
          <h2 className="blue-text">into reality.</h2>

          <p>Code · Create · Improve</p>
        </div>

        <div className="floating-tag tag-top">
          <span>✦</span> Creative Thinking
        </div>

        <div className="floating-tag tag-bottom">
          &lt;/&gt; Clean Code
        </div>
      </div>
    </section>
  );
}
