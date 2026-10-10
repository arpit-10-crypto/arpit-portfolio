
import { useState } from "react";
import { X, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function VisitorPopup({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    purpose: "Job Opportunity",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          visitor_name: form.name,
          visitor_email: form.email,
          visitor_purpose: form.purpose,
          to_email: "arpitgupt326@gmail.com",
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("Details sent successfully!");
      sessionStorage.setItem("visitorPopupSeen", "yes");

      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("Email nahi bheja gaya. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <button
          className="popup-close"
          onClick={onClose}
          type="button"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        <span className="eyebrow">LET'S CONNECT</span>
        <h2>Welcome! 👋</h2>
        <p>Tell me a little about yourself.</p>

        <form onSubmit={handleSubmit} className="popup-form">
          <label htmlFor="visitor-name">Your name</label>
          <input
            id="visitor-name"
            type="text"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            placeholder="Enter your name"
            required
          />

          <label htmlFor="visitor-email">Your email</label>
          <input
            id="visitor-email"
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            placeholder="you@example.com"
            required
          />

          <label htmlFor="visitor-purpose">I'm here for</label>
          <select
            id="visitor-purpose"
            value={form.purpose}
            onChange={(e) =>
              setForm({ ...form, purpose: e.target.value })
            }
          >
            <option>Job Opportunity</option>
            <option>Freelance Work</option>
            <option>Collaboration</option>
            <option>Other</option>
          </select>

          <button
            className="primary-button"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Details"}
            {!loading && <Send size={16} />}
          </button>

          {status && <p role="status">{status}</p>}
        </form>

        <button
          className="popup-skip"
          onClick={onClose}
          type="button"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}