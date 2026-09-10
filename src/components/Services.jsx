import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "../styles/services.css";

const capabilities = [
  {
    title: "Backend Systems",
    description:
      "Scalable backend applications and RESTful APIs using ASP.NET Core and C#.",
  },
  {
    title: "Full-Stack Applications",
    description:
      "Complete web applications connecting modern frontend experiences with robust .NET backends.",
  },
  {
    title: "API Integrations",
    description:
      "Third-party API integrations including payments, communication, booking, cloud, and external services.",
  },
  {
    title: "Real-Time Applications",
    description:
      "Real-time features and communication using SignalR and WebRTC.",
  },
];

const services = [
  {
    title: "Backend Development",
    description:
      "ASP.NET Core APIs, business logic, authentication, databases, and backend architecture.",
  },
  {
    title: "Full-Stack Development",
    description: "Modern web applications using .NET with React or Angular.",
  },
  {
    title: "API Integration",
    description:
      "Payment gateways, communication APIs, booking APIs, cloud services, and third-party integrations.",
  },
  {
    title: "Existing System Development",
    description:
      "Adding features, fixing issues, improving backend functionality, and extending existing applications.",
  },
];

function Services() {
  return (
    <section id="services" className="section">
      <Container className="section-inner">
        <div className="section-head">
          <div className="section-kicker">CAPABILITIES</div>
          <h2 className="section-title">What I Can Build</h2>
        </div>

        <Row className="g-4 capability-row">
          {capabilities.map((c, i) => (
            <Col md={6} lg={3} key={c.title}>
              <motion.div
                className="capability-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.07 }}
              >
                <h3>{c.title}</h3>
                <p>{c.description}</p>
              </motion.div>
            </Col>
          ))}
        </Row>

        <div className="section-head services-head">
          <div className="section-kicker">SERVICES</div>
          <h2 className="section-title">How I Can Help</h2>
        </div>

        <Row className="g-4">
          {services.map((s, i) => (
            <Col md={6} key={s.title}>
              <motion.div
                className="service-row"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              >
                <div className="service-index">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.description}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;
