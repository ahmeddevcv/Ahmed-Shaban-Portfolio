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
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-custom">
                      GitHub
                    </a>
                  )}
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                      Live Demo
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
