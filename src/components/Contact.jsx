import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { CONTACT } from "../data/config";
import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <Container className="section-inner">
        <motion.div
          className="contact-panel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-kicker">CONTACT</div>
          <h2 className="contact-heading">Have a project in mind?</h2>
          <p className="contact-subheading">Let&apos;s build something useful together.</p>
          <p className="contact-desc">
            I&apos;m open to remote opportunities, freelance projects, and collaborations.
          </p>

          <div className="contact-actions">
            {CONTACT.email && (
              <a href={`mailto:${CONTACT.email}`} className="btn btn-accent">
                Let&apos;s Talk
              </a>
            )}
            {!CONTACT.email && (
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                Let&apos;s Talk
              </a>
            )}
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline-custom">
              LinkedIn
            </a>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-custom">
              GitHub
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Contact;
