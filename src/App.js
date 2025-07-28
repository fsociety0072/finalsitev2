import React, { useState } from "react";
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="site-wrapper">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <span className="logo-icon">⚖️</span>
          <div>
            <h1 className="site-title">Consumer Protection Advocate</h1>
            <p className="site-subtitle">Legal Services</p>
          </div>
        </div>

        {/* Desktop Navigation & CTA */}
        <div className="header-desktop-nav">
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-right">
            <a href="tel:+917981650127" className="phone-icon-link">
              <img src="/assets/phone-icon.png" alt="Call" />
            </a>
            <a href="tel:+917981650127" className="phone-link">+91 7981650127</a>
            <a href="#contact" className="consult-btn">FREE CONSULTATION</a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation Menu (appears when open) */}
        <nav className={`nav-mobile ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="tel:+917981650127" className="phone-link-mobile" onClick={closeMenu}>Call Now</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-top-row">
            <div className="hero-shield-icon-wrapper">
              <img src='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>' alt="Shield Icon" className="hero-shield-icon" />
            </div>
            <span className="hero-top-text">Advocate for Consumer Rights</span>
          </div>
          <h2 className="hero-title">
            LICENSED ADVOCATE<br />
            FOR <span className="highlight-orange">CONSUMER PROTECTION</span> UNDER<br />
            Consumer Protection Act 2019
          </h2>
          <p className="hero-desc">
            I am a licensed advocate, enrolled with the Bar Council, dedicated to assisting consumers in asserting their rights under the Consumer Protection Act, 2019. My practice focuses on addressing grievances and ensuring justice for consumers across India.
          </p>
          <div className="hero-bullets">
            <span className="bullet-orange">•</span> Licensed Advocate &nbsp;
            <span className="bullet-orange">•</span> Consumer Protection Specialist &nbsp;
            <span className="bullet-orange">•</span> Professional Legal Services
          </div>
          <div className="hero-btn-row">
            <a href="#contact" className="consult-btn hero-btn">FREE CONSULTATION <span className="arrow">→</span></a>
            <input className="hero-input" disabled value="" />
          </div>
        </div>
        <div className="hero-image">
          <img src="/assets/lady-justice-CIDagae7.png" alt="Lady Justice" />
        </div>
      </section>

      {/* Trusted Platform Section */}
      <section className="trusted-platform">
        <div className="trusted-header-row">
          <span className="shield-icon">🛡️</span>
          <span className="trusted-header-text">About Our Platform</span>
        </div>
        <h2 className="trusted-title">India's Most Trusted Legal Services Platform</h2>
        <p className="trusted-desc">We are India's leading legal technology platform, dedicated to making quality legal services accessible to every consumer. Our platform connects you with verified legal professionals who specialize in consumer protection law and various other legal domains.</p>
        <div className="trusted-expertise-row">
          <div className="trusted-expertise-areas">
            <div className="expertise-title">Our Expertise Areas:</div>
            <div className="expertise-columns">
              <ul>
                <li>Consumer Protection</li>
                <li>Property Disputes</li>
                <li>Criminal Defense</li>
              </ul>
              <ul>
                <li>Civil Matters</li>
                <li>Family Law</li>
                <li>Corporate Law</li>
              </ul>
            </div>
            <div className="expertise-desc">Our platform facilitates seamless connections between consumers and legal experts, ensuring you receive professional guidance for filing complaints, understanding legal procedures, and protecting your rights under various Indian laws.</div>
          </div>
          <div className="trusted-stats-grid">
            <div className="trusted-stat-card">
              <div className="trusted-stat-icon">👤</div>
              <div className="trusted-stat-value">500+</div>
              <div className="trusted-stat-label">Verified Lawyers</div>
            </div>
            <div className="trusted-stat-card">
              <div className="trusted-stat-icon">🎖️</div>
              <div className="trusted-stat-value">10,000+</div>
              <div className="trusted-stat-label">Cases Resolved</div>
            </div>
            <div className="trusted-stat-card">
              <div className="trusted-stat-icon">⏰</div>
              <div className="trusted-stat-value">24/7</div>
              <div className="trusted-stat-label">Support Available</div>
            </div>
            <div className="trusted-stat-card">
              <div className="trusted-stat-icon">🛡️</div>
              <div className="trusted-stat-value">100%</div>
              <div className="trusted-stat-label">Secure Platform</div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Services Platform Section */}
      <section className="legal-services-platform">
        <h2 className="legal-services-title">Our Legal Services Platform</h2>
        <div className="legal-services-subtitle">Comprehensive legal assistance through our network of verified professionals</div>
        <div className="legal-services-grid">
          <div className="legal-service-card">
            <div className="legal-service-icon">⚖️</div>
            <div className="legal-service-content">
              <div className="legal-service-title">Consumer Protection</div>
              <div className="legal-service-desc">Expert assistance with consumer complaints, defective products, deficient services, and unfair trade practices under the Consumer Protection Act, 2019.</div>
              <ul>
                <li>Product defect complaints</li>
                <li>Service deficiency issues</li>
                <li>E-commerce disputes</li>
                <li>Misleading advertisement cases</li>
              </ul>
            </div>
          </div>
          <div className="legal-service-card">
            <div className="legal-service-icon">📄</div>
            <div className="legal-service-content">
              <div className="legal-service-title">Legal Documentation</div>
              <div className="legal-service-desc">Professional help with drafting and reviewing legal documents, contracts, and complaint applications for various legal matters.</div>
              <ul>
                <li>Complaint drafting</li>
                <li>Legal notice preparation</li>
                <li>Document review</li>
                <li>Contract analysis</li>
              </ul>
            </div>
          </div>
          <div className="legal-service-card">
            <div className="legal-service-icon">👤</div>
            <div className="legal-service-content">
              <div className="legal-service-title">Legal Consultation</div>
              <div className="legal-service-desc">Connect with experienced legal professionals for expert advice on civil matters, property disputes, family law, and corporate legal issues.</div>
              <ul>
                <li>Civil litigation guidance</li>
                <li>Property dispute resolution</li>
                <li>Family law matters</li>
                <li>Corporate legal advice</li>
              </ul>
            </div>
          </div>
          <div className="legal-service-card">
            <div className="legal-service-icon">🛡️</div>
            <div className="legal-service-content">
              <div className="legal-service-title">Legal Representation</div>
              <div className="legal-service-desc">Professional representation in consumer courts, district forums, and other legal proceedings.</div>
              <ul>
                <li>Consumer court representation</li>
                <li>District forum proceedings</li>
                <li>State commission cases</li>
                <li>National commission matters</li>
              </ul>
            </div>
          </div>
          <div className="legal-service-card">
            <div className="legal-service-icon">📄</div>
            <div className="legal-service-content">
              <div className="legal-service-title">Case Management</div>
              <div className="legal-service-desc">Comprehensive case tracking and management services to ensure your legal matters are handled efficiently.</div>
              <ul>
                <li>Case status tracking</li>
                <li>Document management</li>
                <li>Hearing reminders</li>
                <li>Progress updates</li>
              </ul>
            </div>
          </div>
          <div className="legal-service-card">
            <div className="legal-service-icon">👤</div>
            <div className="legal-service-content">
              <div className="legal-service-title">Platform Support</div>
              <div className="legal-service-desc">Dedicated support team to assist you with platform navigation, legal process guidance, and more.</div>
              <ul>
                <li>24/7 customer support</li>
                <li>Platform guidance</li>
                <li>Technical assistance</li>
                <li>Query resolution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Get Legal Help Section (with subtitle and icons) */}
      <section className="get-legal-help">
        <h2 className="get-legal-help-title">Ready to Get Legal Help?</h2>
        <p className="get-legal-help-desc">Join thousands of satisfied users who have found expert legal assistance through our platform</p>
        <div className="get-legal-help-icons-row">
          <div className="get-legal-help-icon-col">
            <span className="get-legal-help-icon">⚡</span>
            <div className="get-legal-help-icon-label">Quick Response</div>
          </div>
          <div className="get-legal-help-icon-col">
            <span className="get-legal-help-icon">💸</span>
            <div className="get-legal-help-icon-label">Transparent Pricing</div>
          </div>
          <div className="get-legal-help-icon-col">
            <span className="get-legal-help-icon">🧑‍⚖️</span>
            <div className="get-legal-help-icon-label">Expert Guidance</div>
          </div>
        </div>
      </section>

      {/* How Our Platform Works Section */}
      <section className="platform-works">
        <h2 className="platform-works-title">How Our Platform Works</h2>
        <div className="platform-works-subtitle">Get connected with expert legal professionals in just a few simple steps</div>
        <div className="platform-works-steps-row">
          <div className="platform-works-step-card">
            <div className="platform-works-step-icon">💬</div>
            <div className="platform-works-step-title">1. Share Your Query</div>
            <div className="platform-works-step-desc">Describe your legal issue through our secure platform. Provide details about your consumer protection or legal matter.</div>
          </div>
          <div className="platform-works-step-card">
            <div className="platform-works-step-icon">👥</div>
            <div className="platform-works-step-title">2. Get Matched</div>
            <div className="platform-works-step-desc">Our system matches you with verified lawyers who specialize in your specific legal area and have relevant experience.</div>
          </div>
          <div className="platform-works-step-card">
            <div className="platform-works-step-icon">📞</div>
            <div className="platform-works-step-title">3. Consultation</div>
            <div className="platform-works-step-desc">Connect with your matched lawyer via video call, phone, or secure messaging for detailed legal consultation and advice.</div>
          </div>
          <div className="platform-works-step-card">
            <div className="platform-works-step-icon">📝</div>
            <div className="platform-works-step-title">4. Legal Action</div>
            <div className="platform-works-step-desc">Receive expert guidance on legal procedures, document preparation, and case strategy. Get professional representation if needed.</div>
          </div>
          <div className="platform-works-step-card">
            <div className="platform-works-step-icon">✅</div>
            <div className="platform-works-step-title">5. Resolution</div>
            <div className="platform-works-step-desc">Track your case progress and work towards a successful resolution with ongoing support from your legal professional.</div>
          </div>
        </div>
        <div className="platform-works-features-row">
          <div className="platform-works-feature">
            <span className="platform-works-feature-icon">⚡</span>
            <div className="platform-works-feature-title">Quick Response</div>
            <div className="platform-works-feature-desc">Get connected with lawyers within 2-4 hours during business hours</div>
          </div>
          <div className="platform-works-feature">
            <span className="platform-works-feature-icon">💸</span>
            <div className="platform-works-feature-title">Transparent Pricing</div>
            <div className="platform-works-feature-desc">Clear pricing structure with no hidden costs or surprise fees</div>
          </div>
          <div className="platform-works-feature">
            <span className="platform-works-feature-icon">🔒</span>
            <div className="platform-works-feature-title">Secure Platform</div>
            <div className="platform-works-feature-desc">All communications and documents are encrypted and secure</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="testimonials-title">What Our Users Say About Our Platform</h2>
        <div className="testimonials-subtitle">Thousands of satisfied users have found expert legal assistance through our trusted platform</div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-quote">❝</div>
            <div className="testimonial-stars">★★★★★</div>
            <div className="testimonial-text">"This platform made it incredibly easy to find the right lawyer for my consumer complaint. The process was straightforward, and I received expert guidance within hours. Highly recommend for anyone facing consumer issues."</div>
            <div className="testimonial-user">Priya S.</div>
            <div className="testimonial-case">Consumer Protection Case</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-quote">❝</div>
            <div className="testimonial-stars">★★★★★</div>
            <div className="testimonial-text">"I was confused about filing a complaint against an e-commerce company. This platform connected me with an experienced lawyer who explained everything clearly and helped me get my refund successfully."</div>
            <div className="testimonial-user">Rajesh M.</div>
            <div className="testimonial-case">E-commerce Dispute</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-quote">❝</div>
            <div className="testimonial-stars">★★★★★</div>
            <div className="testimonial-text">"The transparency in pricing and the quality of legal professionals on this platform is excellent. I got my property dispute resolved efficiently with their help. Great service!"</div>
            <div className="testimonial-user">Anita K.</div>
            <div className="testimonial-case">Property Dispute</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-quote">❝</div>
            <div className="testimonial-stars">★★★★★</div>
            <div className="testimonial-text">"Quick response time and professional service. The lawyer I was connected with was very knowledgeable about consumer rights and helped me understand my options clearly."</div>
            <div className="testimonial-user">Vikram T.</div>
            <div className="testimonial-case">Consumer Rights Consultation</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-quote">❝</div>
            <div className="testimonial-stars">★★★★★</div>
            <div className="testimonial-text">"I had a complex family law matter and this platform matched me with a specialist who handled my case professionally. The entire process was smooth and stress-free."</div>
            <div className="testimonial-user">Meera D.</div>
            <div className="testimonial-case">Family Law Case</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-quote">❝</div>
            <div className="testimonial-stars">★★★★★</div>
            <div className="testimonial-text">"Excellent platform for legal assistance. The 24/7 support and verified lawyer network gives confidence. I successfully resolved my civil matter with their help."</div>
            <div className="testimonial-user">Suresh R.</div>
            <div className="testimonial-case">Civil Litigation</div>
          </div>
        </div>
        <div className="testimonials-stats-row">
          <div className="testimonials-stat">
            <div className="testimonials-stat-value">10,000+</div>
            <div className="testimonials-stat-label">Happy Clients</div>
          </div>
          <div className="testimonials-stat">
            <div className="testimonials-stat-value">500+</div>
            <div className="testimonials-stat-label">Verified Lawyers</div>
          </div>
          <div className="testimonials-stat">
            <div className="testimonials-stat-value">4.8/5</div>
            <div className="testimonials-stat-label">Average Rating</div>
          </div>
          <div className="testimonials-stat">
            <div className="testimonials-stat-value">95%</div>
            <div className="testimonials-stat-label">Success Rate</div>
          </div>
        </div>
      </section>

      {/* Contact Section - Two Column Layout */}
      <section className="contact-section" id="contact">
        <h2 className="contact-title"><span className="contact-title-icon">📞</span> Contact <span className="highlight-orange">Information</span></h2>
        <div className="contact-subtitle">Ready to protect your consumer rights? Contact me for a free consultation</div>
        <div className="contact-two-col">
          {/* Left: Contact Info */}
          <div className="contact-info-card">
            <div className="contact-info-desc">Professional legal guidance for all your consumer protection needs. Reach out to me through any of the following channels.</div>
            <div className="contact-info-list">
              <div className="contact-info-item"><span className="contact-info-icon">👤</span> <strong>Name</strong></div>
              <div className="contact-info-item"><span className="contact-info-icon">#️⃣</span> <strong>Enrollment Number</strong><div className="contact-info-detail">[Your Enrollment Number]</div></div>
              <div className="contact-info-item"><span className="contact-info-icon">🏛️</span> <strong>Bar Council</strong><div className="contact-info-detail">[Your State Bar Council]</div></div>
              <div className="contact-info-item"><span className="contact-info-icon">📍</span> <strong>Address</strong><div className="contact-info-detail">Nellore, Vedayapalem, near Childrens Park</div></div>
              <div className="contact-info-item"><span className="contact-info-icon">📞</span> <strong>Phone</strong><div className="contact-info-detail">+917981650127</div></div>
              <div className="contact-info-item"><span className="contact-info-icon">✉️</span> <strong>Email</strong><div className="contact-info-detail">fsociety5@gmail.com</div></div>
            </div>
            <div className="contact-office-hours-card">
              <div className="contact-office-hours-title"><span className="contact-info-icon">🕒</span> <strong>Office Hours</strong></div>
              <div className="contact-office-hours-detail">Monday - Friday: 9:00 AM - 7:00 PM<br/>Saturday: 10:00 AM - 4:00 PM<br/>Sunday: Emergency consultations only</div>
            </div>
          </div>
          {/* Right: Send a Message Form (Web3Forms) */}
          <div className="contact-form-card">
            <ContactFormWeb3Forms />
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/917981650127"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
      >
        <svg className="whatsapp-icon" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386"/>
        </svg>
      </a>

      {/* Disclaimer Section */}
      <section className="disclaimer-section">
        <div className="disclaimer-card">
          <strong>Disclaimer</strong><br/>
          This website is intended solely for informational purposes and does not constitute advertising or solicitation. The content herein complies with the guidelines set forth by the Bar Council of India.
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-col footer-brand">
            <div className="footer-logo-row">
              <span className="footer-logo">⚖️</span>
              <span className="footer-brand-title">GetMyRefund</span>
            </div>
            <div className="footer-brand-subtitle">Consumer Protection</div>
            <div className="footer-brand-desc">GetMyRefund.in does not offer legal advice and does not establish an attorney-client relationship. If you require legal assistance, you should consult a qualified advocate directly. GetMyRefund.in operates as an independent platform and is not affiliated with any brand, company, government body, or legal forum.</div>
            <div className="footer-brand-note">All trademarks, product names, logos, and brand identities belong to their respective owners.</div>
            <div className="footer-social-row">
              <span className="footer-social-label">SOCIAL</span>
              <span className="footer-social-icons">
                <a href="https://facebook.com" className="footer-social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#1877F3" d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 6.019 4.438 10.987 10.125 11.854v-8.385H7.078v-3.47h3.047V9.797c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.953.926-1.953 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.562 22.987 24 18.019 24 12z"/></svg>
                </a>
                <a href="https://instagram.com" className="footer-social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#E4405F" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406c-.98.98-1.274 2.092-1.334 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.06 1.282.354 2.394 1.334 3.374.98.98 2.092 1.274 3.374 1.334C8.332 21.987 8.741 22 12 22s3.668-.013 4.948-.072c1.282-.06 2.394-.354 3.374-1.334.98-.98 1.274-2.092 1.334-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.06-1.282-.354-2.394-1.334-3.374-.98-.98-2.092-1.274-3.374-1.334C15.668.013 15.259 0 12 0z"/><path fill="#fff" d="M12 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 12 8a3.999 3.999 0 0 1 0 7.999zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>
                </a>
                <a href="https://linkedin.com" className="footer-social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#0077B5" d="M22.23 0H1.77C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.77 24h20.46C23.208 24 24 23.226 24 22.271V1.729C24 .774 23.208 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.433a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm15.112 13.019h-3.56v-5.604c0-1.336-.025-3.057-1.865-3.057-1.867 0-2.153 1.454-2.153 2.957v5.704h-3.56V9h3.418v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.267 2.37 4.267 5.455v6.286z"/></svg>
                </a>
                <a href="https://twitter.com" className="footer-social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#1DA1F2" d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.92 2.206-4.92 4.924 0 .386.045.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.015-.634A9.936 9.936 0 0 0 24 4.557z"/></svg>
                </a>
              </span>
            </div>
          </div>
          <div className="footer-col footer-links">
            <div className="footer-links-title">Quick Links</div>
            <div className="footer-link-list">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Complaints</a>
              <a href="#contact">Contact Us</a>
            </div>
          </div>
          <div className="footer-col footer-contact">
            <div className="footer-contact-title">Contact Info</div>
            <div className="footer-contact-list">
              <div><span className="footer-contact-icon">📞</span> +91 79816 50127</div>
              <div><span className="footer-contact-icon">✉️</span> info@getmyrefund.in</div>
              <div><span className="footer-contact-icon">🏢</span> Adeep Newtronics Pvt Ltd<br/>Kothrud, Pune, Maharashtra, India</div>
              <div style={{marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #444'}}>
                <a href="/admin" style={{color: '#666', fontSize: '12px', textDecoration: 'none'}}>🛡️ Admin Access</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Contact Form Component with Backend Integration
function ContactFormWeb3Forms() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("Submitting...");
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Submit form data to Netlify
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        'form-name': 'contact',
        ...Object.fromEntries(formData)
      }).toString()
    })
      .then(response => {
        if (response.ok) {
          // Redirect to thank you page on success
          window.location.href = "/thanks/";
        } else {
          throw new Error(`Form submission failed with status: ${response.status}`);
        }
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        setResult("Failed to send message. Please try again later.");
        setLoading(false);
        setTimeout(() => setResult(""), 5000);
      });
  };

  return (
    <form 
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </p>
      <div className="contact-form-row">
        <div className="contact-form-group">
          <label>Full Name *</label>
          <input type="text" name="name" placeholder="Enter your full name" required style={{width: '100%'}} />
        </div>
        <div className="contact-form-group">
          <label>Phone Number *</label>
          <input type="tel" name="phone" placeholder="Enter your phone number" required style={{width: '100%'}} />
        </div>
      </div>
      <div className="contact-form-group">
        <label>Email Address *</label>
        <input type="email" name="email" placeholder="Enter your email address" required style={{width: '100%'}} />
      </div>
      <div className="contact-form-group">
        <label>Message *</label>
        <textarea name="message" placeholder="Describe your consumer protection issue..." required style={{width: '100%'}}></textarea>
      </div>
      <input type="hidden" name="botcheck" />
      <button type="submit" className="consult-btn contact-form-btn" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </button>
      <div className="contact-form-note" id="result">{result}</div>
    </form>
  );
}

export default App;