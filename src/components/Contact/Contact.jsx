import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get In Touch!</h2>

        <p className="contact-desc">
       “I’m a passionate fresher focused on learning, building, and delivering clean, user-friendly web experiences.”— I’m here to help.
      </p>

      <div className="contact-socials icons-only">
        <a
          href="https://www.linkedin.com/in/danielkulanthairaj16/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/danielkulanthairaj07"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="mailto:rajd46697@gmail.com"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>

        <a
          href="tel:+917708908863"
          aria-label="Phone"
        >
          <FaPhoneAlt />
        </a>
      </div>
    </section>
  );
}
