import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.09 }}
    >
      <div className="project-card-media">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <span className="placeholder-number">{project.number}</span>
        )}
      </div>

      <div className="project-card-body">
        <div className="project-meta-row">
          <span className="project-number">{project.number}</span>
          <span className="project-category">{project.category}</span>
        </div>

        <h3>{project.title}</h3>
        <p className="desc">{project.description}</p>

        {project.highlight && <div className="project-highlight">{project.highlight}</div>}

        <div className="project-tech-row">
          {project.technologies.slice(0, 5).map((tech) => (
            <span className="tech-tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card-actions">
          <Link to={`/projects/${project.slug}`} className="project-details-btn">
            <span>View Details</span>
            <span aria-hidden="true">→</span>
          </Link>
          {(project.github || project.liveDemo) && (
            <div className="project-links-group">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn-github"
                  title="View GitHub Repository"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span>GitHub</span>
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn-live"
                  title="Open Live Demo"
                >
                  <span className="live-pulse-dot" aria-hidden="true"></span>
                  <span>Live Demo</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
