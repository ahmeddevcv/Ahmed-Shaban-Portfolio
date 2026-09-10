import { Container, Row, Col } from "react-bootstrap";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import "../styles/projects.css";

function Projects() {
  return (
    <section id="projects" className="section">
      <Container className="section-inner">
        <div className="section-head">
          <div className="section-kicker">WORK</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of real-world applications and backend systems I&apos;ve worked on.
          </p>
        </div>

        <Row className="g-4">
          {projects.map((project, i) => (
            <Col md={6} lg={4} key={project.id}>
              <ProjectCard project={project} index={i} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
