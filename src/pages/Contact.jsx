
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Job Opportunity",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const emailSubject = encodeURIComponent(
      `${form.subject} - Portfolio Contact`
    );

    const emailBody = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Reason: ${form.subject}\n\n` +
      `Message:\n${form.message}`
    );

    window.location.href =
      `mailto:arpitgupt326@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  }

  function updateField(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <section className="page contact-page">
      <div className="contact-heading">
        <span className="eyebrow">GET IN TOUCH</span>

        <h1>
          Let's work <span className="blue-text">together.</span>
        </h1>

        <p>
          Have a job opportunity, project idea or question?
          Send me a message. I'd love to connect.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <div className="card contact-info-card">
            <span className="contact-icon">@</span>
            <h3>Email Me</h3>
            <p>For jobs, projects and collaborations.</p>
            <a href="mailto:arpitgupt326@gmail.com">
              arpitgupt326@gmail.com ↗
            </a>
          </div>

          <div className="card contact-info-card">
            <span className="contact-icon">☎</span>
            <h3>Call Me</h3>
            <p>Let's discuss an opportunity.</p>
            <a href="tel:9795999253">
              9795999253 ↗
            </a>
          </div>

          <div className="card contact-info-card">
            <span className="contact-icon">GH</span>
            <h3>GitHub</h3>
            <p>Explore my code and projects.</p>
            <a
              href="https://github.com/arpit-10-crypto"
              target="_blank"
              rel="noreferrer"
            >
              Visit GitHub ↗
            </a>
          </div>

          <div className="card contact-info-card">
            <span className="contact-icon">in</span>
            <h3>LinkedIn</h3>
            <p>Connect with me professionally.</p>
            <a
              href="https://www.linkedin.com/in/arpit-gupt-6a8349393/"
              target="_blank"
              rel="noreferrer"
            >
              Visit LinkedIn ↗
            </a>
          </div>
        </div>

        <form className="card contact-form" onSubmit={handleSubmit}>
          <h2>Send a Message</h2>
          <p>Fill in the details below to get in touch.</p>

          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={updateField}
            placeholder="Enter your full name"
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={updateField}
            placeholder="you@example.com"
            required
          />

          <label htmlFor="subject">What is this about?</label>
          <select
            id="subject"
            name="subject"
            value={form.subject}
            onChange={updateField}
          >
            <option>Job Opportunity</option>
            <option>Freelance Work</option>
            <option>Project Collaboration</option>
            <option>General Inquiry</option>
          </select>

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={updateField}
            placeholder="Write your message here..."
            rows={5}
            required
          />

          <button className="primary-button" type="submit">
            Send Message ↗
          </button>

          <p className="form-note">
            This currently opens your email application.
          </p>
        </form>
      </div>
    </section>
  );
}
