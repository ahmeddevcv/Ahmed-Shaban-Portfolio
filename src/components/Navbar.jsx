import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CONTACT, SITE } from "../data/config";
import { useTheme } from "../context/ThemeContext";
import "../styles/navbar.css";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") return;
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [location.pathname]);

  const goToSection = (id) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 60);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className={`site-navbar ${scrolled ? "is-scrolled" : ""}`}>
        <div className="navbar-inner">
          <a
            href="#home"
            className="brand-mark"
            onClick={(e) => {
              e.preventDefault();
              goToSection("home");
            }}
          >
            <span className="dot">&lt;/&gt;</span> {SITE.brand}
          </a>

          <nav className="nav-links">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className={activeId === item.id ? "active" : ""}
                onClick={() => goToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="nav-right">
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-github-link d-none d-lg-inline-flex"
            >
              GitHub ↗
            </a>
            <button
              className="theme-toggle"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggle}
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              <span className="theme-toggle-icon">
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </span>
            </button>
            <button
              className="nav-toggle"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={activeId === item.id ? "active" : ""}
              onClick={() => goToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: "0.85rem 0", color: "var(--text-secondary)" }}
          >
            GitHub ↗
          </a>
        </div>
      )}
    </>
  );
}

export default Navbar;

