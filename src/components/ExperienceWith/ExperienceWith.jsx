import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql, SiDjango } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import "./ExperienceWith.css";


export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Skills!</h2>
      <p className="section-sub">
        Technologies and tools I work with regularly
      </p>
      <div className="skills-grid-pro">
        {/* Frontend */}
        <div className="skill-card-pro">
          <h3>Frontend</h3>
          <div className="skill-tags">
            <span><FaReact /> React.js</span>
            <span><FaJs /> JavaScript</span>
            <span><FaHtml5 /> HTML</span>
            <span><FaCss3Alt /> CSS</span>
            <span><FaBootstrap /> Bootstrap</span>
            <span><SiTailwindcss /> Tailwind CSS</span>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-card-pro">
          <h3>Backend</h3>
          <div className="skill-tags">
            <span><FaNodeJs /> Node.js</span>
            <span><SiDjango /> Django</span>
            <span><FaPython /> Python</span>
            
          </div>
        </div>

        {/* Database */}
        <div className="skill-card-pro">
          <h3>Database</h3>
          <div className="skill-tags">
            <span><SiMysql /> MySQL</span>
            <span><SiMongodb /> MongoDB</span>
            
          </div>
        </div>

        {/* Tools */}
        <div className="skill-card-pro">
          <h3>Tools</h3>
          <div className="skill-tags">
            <span><FaGitAlt /> Git</span>
            <span><FaGithub /> GitHub</span>
            <span><FaDatabase /> Postman</span>
          </div>
        </div>
      </div>
    </section>
  );
}
