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
          <Link to={`/projects/${project.slug}`}>View Details →</Link>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="secondary-link">
              GitHub
            </a>
          )}
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="secondary-link">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
