import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { CONTACT, AVAILABILITY } from "../data/config";
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
              
              {AVAILABILITY.isAvailable && (
                <>
                  <div className="availability-badge">
                    <span className="availability-dot"></span>
                    {AVAILABILITY.statusText}
                  </div>
                  <div className="availability-hire-bar">
                    <span className="hire-bar-label">📅 Schedule an interview:</span>
                    <a
                      href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}?text=Hi%20Ahmed,%20I'd%20like%20to%20book%20an%20interview%20with%20you.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hire-bar-link whatsapp"
                    >
                      WhatsApp
                    </a>
                    <span className="hire-bar-sep">·</span>
                    <a
                      href={`mailto:${CONTACT.email}?subject=Interview%20Invitation%20for%20Ahmed%20Shaban`}
                      className="hire-bar-link email"
                    >
                      Email
                    </a>
                    <span className="hire-bar-sep">·</span>
                    <a href={`tel:${CONTACT.phone}`} className="hire-bar-link phone">
                      📞 {CONTACT.phone}
                    </a>
                    {CONTACT.phone2 && (
                      <>
                        <span className="hire-bar-sep">·</span>
                        <a href={`tel:${CONTACT.phone2}`} className="hire-bar-link phone">
                          📞 {CONTACT.phone2}
                        </a>
                      </>
                    )}
                  </div>
                </>
              )}

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

              <div className="recruiter-box">
                <p className="recruiter-title">Want to hire me? Schedule an interview:</p>
                <div className="recruiter-actions">
                  <a 
                    href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}?text=Hi%20Ahmed,%20I'd%20like%20to%20book%20an%20interview%20with%20you.`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn recruiter-btn whatsapp" 
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    WhatsApp
                  </a>
                  <a 
                    href={`mailto:${CONTACT.email}?subject=Interview%20Invitation%20for%20Ahmed%20Shaban&body=Hi%20Ahmed,%0A%0AWe%20would%20like%20to%20invite%20you%20for%20an%20interview...`} 
                    className="btn recruiter-btn email" 
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    Email
                  </a>
                  <a href={`tel:${CONTACT.phone}`} className="btn recruiter-btn phone">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Call: {CONTACT.phone}
                  </a>
                  {CONTACT.phone2 && (
                    <a href={`tel:${CONTACT.phone2}`} className="btn recruiter-btn phone">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      Call: {CONTACT.phone2}
                    </a>
                  )}
                </div>
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
