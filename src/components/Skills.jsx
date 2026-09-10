import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";
import "../styles/skills.css";

function Skills() {
  return (
    <section id="skills" className="section">
      <Container className="section-inner">
        <div className="section-head">
          <div className="section-kicker">SKILLS</div>
          <h2 className="section-title">Technologies I Work With</h2>
        </div>

        <Row className="g-4">
          {skillGroups.map((group, i) => (
            <Col md={6} lg={4} key={group.id}>
              <motion.div
                className="skill-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              >
                <div className="skill-card-title">{group.title}</div>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span className="tech-tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
