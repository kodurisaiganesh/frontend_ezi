import React, { useState } from "react";
import "../styles/contact.css";

// Use relative path to work through Vite proxy during local dev
const API_URL = "/api/contact-us/";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) e.email = "Email is required";
    else if (!emailRegex.test(form.email)) e.email = "Invalid email";
    const phoneDigits = form.phone.replace(/\D/g, "");
    if (!phoneDigits) e.phone = "Phone is required";
    else if (phoneDigits.length < 7 || phoneDigits.length > 15) e.phone = "Enter a valid phone";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setStatus("");
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setLoading(true);
    try {
      const resp = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.replace(/\D/g, ""),
          message: form.message.trim(),
        }),
      });

      const text = await resp.text(); // capture raw response
      console.log("Raw backend response:", text);

      if (!resp.ok) {
        throw new Error(`Server responded ${resp.status}: ${text}`);
      }

      setStatus("Form Submitted");
      setForm({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error("Contact submit error:", err);
      setStatus("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="vf-container contact-inner">
        <div className="contact-left">
          <h2>Join the Story</h2>
          <p className="lead">Ready to bring your vision to life? Let's talk.</p>
          <div className="contact-info">
            <div className="email">varnan@vvarnanfilms.co.in</div>
            <div className="phone">+91 91710 84667</div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <label>
              <span>Name</span>
              <input name="name" value={form.name} onChange={handleChange} />
              {errors.name && <small className="err">{errors.name}</small>}
            </label>

            <label>
              <span>Email</span>
              <input name="email" value={form.email} onChange={handleChange} />
              {errors.email && <small className="err">{errors.email}</small>}
            </label>

            <label>
              <span>Phone</span>
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="e.g. 908765498" />
              {errors.phone && <small className="err">{errors.phone}</small>}
            </label>

            <label className="full">
              <span>Message</span>
              <textarea name="message" value={form.message} onChange={handleChange} rows="5" />
              {errors.message && <small className="err">{errors.message}</small>}
            </label>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
            <button
              type="button"
              className="btn btn-muted"
              onClick={() => {
                setForm({ name: "", email: "", phone: "", message: "" });
                setErrors({});
                setStatus("");
              }}
            >
              Reset
            </button>
          </div>

          {status && (
            <div
              className={`submit-status ${
                status === "Form Submitted" ? "success" : "error"
              }`}
            >
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
