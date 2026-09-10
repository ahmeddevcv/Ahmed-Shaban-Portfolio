import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { experience, education, training } from "../data/experience";
import "../styles/experience.css";

function Experience() {
  return (
    <section id="experience" className="section">
      <Container className="section-inner">
        <div className="section-head">
          <div className="section-kicker">EXPERIENCE</div>
          <h2 className="section-title">Where I&apos;ve Worked</h2>
        </div>

        <Row>
          <Col lg={9}>
            <div className="timeline">
              {experience.map((item, i) => (
                <motion.div
                  className="timeline-item"
                  key={item.id}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <span className="timeline-dot" />
                  <div className="timeline-item-head">
                    <h3>{item.company}</h3>
                    {item.type && <span className="pill">{item.type}</span>}
                    <span className="timeline-period">{item.period}</span>
                  </div>
                  <div className="timeline-role">{item.role}</div>
                  <p className="timeline-desc">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="sub-block">
              <div className="sub-block-title">Education</div>
              {education.map((edu) => (
                <div className="mini-entry" key={edu.id}>
                  <div>
                    <div className="mini-entry-title">{edu.degree}</div>
                    {edu.institution && <div className="mini-entry-sub">{edu.institution}</div>}
                  </div>
                  {edu.period && <div className="mini-entry-period">{edu.period}</div>}
                </div>
              ))}
            </div>

            <div className="sub-block">
              <div className="sub-block-title">Training</div>
              {training.map((t) => (
                <div className="mini-entry" key={t.id}>
                  <div>
                    <div className="mini-entry-title">{t.track}</div>
                    <div className="mini-entry-sub">{t.institution}</div>
                  </div>
                  <div className="mini-entry-period">{t.period}</div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
