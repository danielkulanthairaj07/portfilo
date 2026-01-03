import "./Projects.css";

const GITHUB_URL = "https://github.com/danielkulanthairaj07";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects!</h2>

        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <img src="/projects/netflix.png" alt="Netflix Clone" />
            <div className="project-info">
              <div>
                <h3>Netflix Clone</h3>
                <span>2025</span>
              </div>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow"
              >
                →
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <img src="/projects/ecommerce.png" alt="E-Commerce App" />
            <div className="project-info">
              <div>
                <h3>E-Commerce App</h3>
                <span>2025</span>
              </div>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow"
              >
                →
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <img src="/projects/portfolio.png" alt="Portfolio Website" />
            <div className="project-info">
              <div>
                <h3>Portfolio Website</h3>
                <span>2025</span>
              </div>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow"
              >
                →
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-card">
            <img src="/projects/ems.png" alt="Employee Management System" />
            <div className="project-info">
              <div>
                <h3>Employee Management System</h3>
                <span>2025</span>
              </div>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow"
              >
                →
              </a>
            </div>
          </div>

          {/* Project 5 */}
          <div className="project-card">
            <img src="/projects/thoughtstream.png" alt="ThoughtStream Hub" />
            <div className="project-info">
              <div>
                <h3>ThoughtStream Hub</h3>
                <span>2025</span>
              </div>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow"
              >
                →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
