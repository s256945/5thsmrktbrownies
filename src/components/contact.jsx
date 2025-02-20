import React from "react";
import "../Home.css";

const Contact = () => {
  return (
    <main>
      <section id="contact-header">
        <div className="welcome-overlay">
          <h2>Get in Touch!</h2>
          <p>We'd love to hear from you. Send us a message below!</p>
        </div>
      </section>

      <section id="contact-form-wrapper">
        <form className="contact-form">
          <input
            type="text"
            placeholder="👤 Your Name *"
            required
            className="fade-in delay-1"
          />
          <input
            type="email"
            placeholder="📧 Your Email *"
            required
            className="fade-in delay-2"
          />
          <textarea
            placeholder="💬 Your Message *"
            rows="5"
            required
            className="fade-in delay-3"
          ></textarea>
          <button type="submit" className="cta-btn fade-in delay-4">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
