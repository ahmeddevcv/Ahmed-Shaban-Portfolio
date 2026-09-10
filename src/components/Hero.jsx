import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { CONTACT } from "../data/config";
import "../styles/hero.css";

const codeLines = [
  { t: [{ c: "tok-kw", v: "public class " }, { c: "tok-type", v: "Developer" }, { c: "tok-punc", v: "" }] },
  { t: [{ c: "tok-punc", v: "{" }] },
  { t: [{ c: "tok-kw", v: "    public string " }, { c: "tok-prop", v: "Name" }, { c: "tok-punc", v: " => " }, { c: "tok-str", v: '"Ahmed"' }, { c: "tok-punc", v: ";" }] },
  { t: [{ c: "tok-punc", v: "" }] },
  { t: [{ c: "tok-kw", v: "    public string " }, { c: "tok-prop", v: "Role" }, { c: "tok-punc", v: " =>" }] },
  { t: [{ c: "tok-str", v: '        "Full-Stack .NET Developer"' }, { c: "tok-punc", v: ";" }] },
  { t: [{ c: "tok-punc", v: "" }] },
  { t: [{ c: "tok-kw", v: "    public string " }, { c: "tok-prop", v: "Backend" }, { c: "tok-punc", v: " =>" }] },
  { t: [{ c: "tok-str", v: '        "ASP.NET Core"' }, { c: "tok-punc", v: ";" }] },
  { t: [{ c: "tok-punc", v: "" }] },
  { t: [{ c: "tok-kw", v: "    public string " }, { c: "tok-prop", v: "Frontend" }, { c: "tok-punc", v: " =>" }] },
  { t: [{ c: "tok-str", v: '        "React / Angular"' }, { c: "tok-punc", v: ";" }] },
  { t: [{ c: "tok-punc", v: "" }] },
  { t: [{ c: "tok-kw", v: "    public string " }, { c: "tok-prop", v: "Experience" }, { c: "tok-punc", v: " =>" }] },
  { t: [{ c: "tok-str", v: '        "2+ Years"' }, { c: "tok-punc", v: ";" }] },
  { t: [{ c: "tok-punc", v: "}" }] },
];

function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-grid" aria-hidden="true" />
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="hero-eyebrow">
                <span className="blink" />
                FULL-STACK .NET DEVELOPER
              </div>
              <h1 className="hero-headline">
                Building Web Applications
                <br />
                That Solve Real Problems.
              </h1>
              <p className="hero-desc">
                I&apos;m Ahmed Shaban, a Computer Science graduate at 2023 / 2024 and Full-Stack .NET Developer with
                2+ years of experience building backend systems, RESTful APIs, and full-stack
                web applications.
              </p>
              <div className="hero-actions">
                <button className="btn btn-accent" onClick={() => scrollTo("projects")}>
                  View My Work →
                </button>
                <button className="btn btn-outline-custom" onClick={() => scrollTo("contact")}>
                  Let&apos;s Talk
                </button>
              </div>
              <div className="hero-socials">
                <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                {CONTACT.email && <a href={`mailto:${CONTACT.email}`}>Email</a>}
              </div>
            </motion.div>
          </Col>

          <Col lg={5}>
            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            >
              <div className="code-editor-card">
                <div className="code-editor-header">
                  <span className="editor-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <span className="editor-filename">developer.cs</span>
                </div>
                <div className="code-editor-body">
                  {codeLines.map((line, i) => (
                    <div className="line" key={i}>
                      <span className="line-num">{i + 1}</span>
                      {line.t.map((tok, j) => (
                        <span className={tok.c} key={j}>
                          {tok.v}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
