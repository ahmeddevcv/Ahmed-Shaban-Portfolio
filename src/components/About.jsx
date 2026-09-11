import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import AhmedPhoto from "../assets/images/Ahmed_Shaban_Photo.png";
import "../styles/about.css";

const badges = [
  "Computer Science Graduate",
  ".NET Developer",
  "Backend Focused",
  "Full-Stack Experience",
];

function About() {
  return (
    <section id="about" className="section">
      <Container className="section-inner">
        <div className="section-head">
          <div className="section-kicker">ABOUT</div>
          <h2 className="section-title">About Me</h2>
        </div>

        <Row className="align-items-center g-5">
          <Col lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="about-avatar-card"
            >
              <div className="about-photo-wrapper">
                <img
                  src={AhmedPhoto}
                  alt="Ahmed Shaban — Full-Stack .NET Developer"
                  className="about-photo"
                />
              </div>

              <h3>Ahmed Shaban</h3>
              <div className="role">Full-Stack .NET Developer</div>
              <div className="about-badges">
                {badges.map((b) => (
                  <span className="pill" key={b}>
                    {b}
                  </span>
                ))}
              </div>
            </motion.div>
          </Col>

          <Col lg={8}>
            <motion.div
              className="about-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p>
                I&apos;m Ahmed Shaban, a Computer Science graduate at 2023/2024 and Full-Stack .NET Developer
                focused on building reliable backend systems and modern web applications.
              </p>
              <p>
                My main expertise is in C#, ASP.NET Core, RESTful APIs, Entity Framework Core,
                SQL, and PostgreSQL.
              </p>
              <p>
                On the frontend, I work with React and Angular, along with JavaScript, HTML5,
                CSS3, and Bootstrap.
              </p>
              <p>
                I&apos;ve worked on real-world applications involving booking systems,
                e-learning platforms, ordering systems, accounting applications, payments,
                third-party API integrations, real-time communication, background jobs, and
                cloud services.
              </p>
              <p>I enjoy turning business requirements into practical, maintainable software.</p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
