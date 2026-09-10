import { useState } from "react";
import { Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT } from "../data/config";
import "../styles/contact.css";

function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!CONTACT.web3formsKey) {
      alert("Please add your Web3Forms access key in src/data/config.js first!");
      return;
    }
    
    setStatus("submitting");
    const formData = new FormData(e.target);
    formData.append("access_key", CONTACT.web3formsKey);
    // Optional: send to specific email if needed, but Web3Forms sends to the email registered with the key
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setShowForm(false), 3000);
      } else {
        console.error("Error:", data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      setStatus("error");
    }
  };

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

          <div className="contact-actions" style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button 
              onClick={() => setShowForm(!showForm)} 
              className="btn btn-accent" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              {showForm ? "Close Form" : "Let's Talk"}
            </button>
            
            {CONTACT.whatsapp && (
              <a href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline-custom" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                WhatsApp
              </a>
            )}
            
            {CONTACT.phone && (
              <a href={`tel:${CONTACT.phone}`} className="btn btn-outline-custom" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call Me
              </a>
            )}

            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline-custom" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-custom" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              GitHub
            </a>
          </div>

          <AnimatePresence>
            {showForm && (
              <motion.form
                onSubmit={handleSubmit}
                className="contact-form"
                initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
                exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                transition={{ duration: 0.3 }}
              >
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" className="form-input" required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" className="form-input" required placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" className="form-textarea" required placeholder="Hello, I'd like to talk about..."></textarea>
                </div>
                <button type="submit" className="btn btn-accent" style={{ width: '100%' }} disabled={status === "submitting"}>
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <div className="form-status success">
                    Message sent successfully! I will get back to you soon.
                  </div>
                )}
                {status === "error" && (
                  <div className="form-status error">
                    Something went wrong. Please try again later.
                  </div>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}

export default Contact;
