import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import "../styles/project-details.css";

function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="project-details-page">
      <Container className="section-inner details-inner">
        <Link to="/#projects" className="back-link">
          ← Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="details-meta-row">
            <span className="project-number">{project.number}</span>
            <span className="project-category">{project.category}</span>
          </div>

          <h1 className="details-title">{project.title}</h1>

          <div className="details-tech-row">
            {project.technologies.map((tech) => (
              <span className="tech-tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>

          {project.image && (
            <div className="details-image">
              <img src={project.image} alt={project.title} />
            </div>
          )}

          <div className="details-grid">
            <section className="details-block">
              <h2>Project Overview</h2>
              <p>{project.overview}</p>
            </section>

            <section className="details-block">
              <h2>Problem</h2>
              <p>{project.problem}</p>
            </section>

            <section className="details-block">
              <h2>Solution</h2>
              <p>{project.solution}</p>
            </section>

            <section className="details-block">
              <h2>Architecture</h2>
              <div className="architecture-flow">
                {project.architecture.map((step, i) => (
                  <div className="architecture-step" key={step}>
                    <div className="architecture-node">{step}</div>
                    {i < project.architecture.length - 1 && (
                      <div className="architecture-arrow" aria-hidden="true">
                        ↓
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {project.externalServices?.length > 0 && (
                <div className="external-services">
                  <span className="mini-entry-sub">External services: </span>
                  {project.externalServices.map((svc) => (
                    <span className="tech-tag" key={svc}>
                      {svc}
                    </span>
                  ))}
                </div>
              )}
            </section>

            <section className="details-block">
              <h2>Technical Highlights</h2>
              <p>{project.highlight}</p>
            </section>

            {(project.github || project.liveDemo) && (
              <section className="details-block">
                <h2>Links</h2>
                <div className="details-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn-github project-btn-lg"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      <span>GitHub Repository</span>
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn-live project-btn-lg"
                    >
                      <span className="live-pulse-dot" aria-hidden="true"></span>
                      <span>Live Demo</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                </div>
              </section>
            )}
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default ProjectDetails;
