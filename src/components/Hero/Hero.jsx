import { useEffect, useState } from "react";
import "./Hero.css";

const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "React Developer",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1200);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    // 🔥 IMPORTANT CHANGE HERE
    <section className="hero" id="about">
      <div className="container hero-inner">
        <div className="hero-left">
          <h1>
            Hi, I'm <span className="name-white">Daniel</span>
          </h1>

          <h2 className="typing-line">
            I'm a <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </h2>

          <p>
            I specialize in building modern, scalable web applications using
            React, JavaScript, and backend technologies, focused on clean UI
            and real-world performance.
          </p>

          <div className="hero-btns">
            <a href="#contact" className="btn-white">
              Get in touch
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-img-wrap">
            <img src="/profile.png" alt="Daniel Profile" />
          </div>
        </div>
      </div>
    </section>
  );
}
