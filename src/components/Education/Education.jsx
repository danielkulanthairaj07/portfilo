import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <section id="education">
      <h2 className="section-title">Education!</h2>

      <div className="experience-wrap">

        {/* ===== BE ===== */}
        <div className="experience-card">
          <span className="exp-dot"></span>

          <div className="exp-content">
            <h3>B.E Computer Science and Engineering </h3>

            <p className="exp-company">
              M.A.M College of Engineering • Tiruchirappalli
            </p>

            <div className="exp-tags">
              <span className="badge">2021 - 2025</span>
              <span className="badge full">CGPA : 7.94</span>
            </div>
          </div>
        </div>

        {/* ===== HSC ===== */}
        <div className="experience-card">
          <span className="exp-dot"></span>

          <div className="exp-content">
            <h3>HSC</h3>

            <p className="exp-company">
              St. Anthony's Higher Secondary School • Thanjavur
            </p>

            <div className="exp-tags">
              <span className="badge">2021</span>
              <span className="badge full">CGPA : 8.95</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
