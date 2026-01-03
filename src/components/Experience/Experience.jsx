import React from "react";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">Experience!</h2>

      <div className="experience-wrap">

        {/* ===== Experience 1 (Latest) ===== */}
        <div className="experience-card">
          <span className="exp-dot"></span>

          <div className="exp-content">
            <h3>Software Developer</h3>

            <p className="exp-company">
              National Skill Development Corporation (NSDC) • Thanjavur
            </p>

            <div className="exp-tags">
              <span className="badge full">Full-Time</span>
              <span className="badge intern">On-site</span>
            </div>

            <ul className="exp-points">
              <li>
                Delivered production-ready web applications with clean, scalable code while collaborating with cross-functional teams to ensure reliability, performance, and timely delivery.
              </li>
            </ul>
          </div>

          <span className="exp-year">Feb 2025 – Jul 2025</span>
        </div>

        {/* ===== Experience 2 ===== */}
        <div className="experience-card">
          <span className="exp-dot"></span>

          <div className="exp-content">
            <h3>Full Stack Web Developer Intern</h3>

            <p className="exp-company">
              GB Tech Corp Software Company • Chennai
            </p>

            <div className="exp-tags">
              <span className="badge intern">Internship</span>
              <span className="badge full">Full Stack</span>
            </div>

            <ul className="exp-points">
              <li>
                Engineered scalable full-stack solutions by building high-performance UI components and secure REST APIs, accelerating delivery speed and optimizing application performance within an Agile team.
              </li>
            </ul>
          </div>

          <span className="exp-year">Aug 2024 – Sep 2024</span>
        </div>

        {/* ===== Experience 3 (Oldest) ===== */}
        <div className="experience-card">
          <span className="exp-dot"></span>

          <div className="exp-content">
            <h3>Web Developer Intern</h3>

            <p className="exp-company">
              CodeBind Technologies • Tiruchirappalli
            </p>

            <div className="exp-tags">
              <span className="badge intern">Internship</span>
              <span className="badge full">Frontend</span>
            </div>

            <ul className="exp-points">
              <li>
                Built responsive and reusable web interfaces using HTML, CSS, and JavaScript, strengthening real-world frontend development skills and professional coding standards.
              </li>
            </ul>
          </div>

          <span className="exp-year">Jun 2023 – Jul 2023</span>
        </div>

      </div>
    </section>
  );
}
