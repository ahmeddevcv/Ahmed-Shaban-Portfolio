import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "Real-World", label: "Projects" },
  { value: "API", label: "Integrations" },
  { value: "Backend +", label: "Full-Stack" },
];

function Stats() {
  return (
    <section className="section" style={{ paddingTop: "3rem", paddingBottom: "3rem", borderTop: "1px solid var(--border-color)" }}>
      <Container>
        <Row className="g-4">
          {stats.map((s, i) => (
            <Col xs={6} lg={3} key={s.label}>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                style={{ textAlign: "left" }}
              >
                <div
                  className="mono"
                  style={{
                    fontSize: "clamp(1.5rem, 1.2rem + 1vw, 2rem)",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  {s.value}
                </div>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.92rem", marginTop: "0.3rem" }}>
                  {s.label}
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Stats;
