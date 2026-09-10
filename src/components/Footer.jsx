import { Container } from "react-bootstrap";
import { CONTACT, SITE } from "../data/config";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <div className="footer-brand">
          <span className="mono">{SITE.brand}</span>
          <p>Full-Stack .NET Developer</p>
          <p className="mono footer-stack">C# • ASP.NET Core • React • Angular</p>
        </div>

        <div className="footer-links">
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>

        <div className="footer-bottom">© 2026 {SITE.name}. All rights reserved.</div>
      </Container>
    </footer>
  );
}

export default Footer;
