// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        {/* Footer Columns */}
        <div className="footer-columns">
          <div className="footer-column-1">
            <h3>About</h3>
            <FontAwesomeIcon icon={['fas', 'coffee']} />
            <div className="footer-about-content">
              <p className="footer-about-description">
                I am a passionate developer with expertise in Web Development, App Development, and Software Development. 
                With a Bachelor's degree in Computer Science and a robust skill set in WordPress, Shopify, Laravel, Flutter, 
                Python, and Machine Learning, I strive to create innovative solutions that drive success. 
                <br /><br /><br />
                Follow me on:
              </p>
              <ul className="footer-about-social-links">
                <li><a href="https://www.linkedin.com/in/musmandeveloper/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
                <li><a href="https://github.com/musmandeveloper" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
                <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'youtube']} /></a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                <li><a href="mailto:usmanedu8250998@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'envelope']} /></a></li>
              </ul>
            </div>
          </div>
          <div className="footer-column-2">
            <h3>Quick Links</h3>
            <ul className="footer-pages-links">
              <li><a href="#about-section-id">About</a></li>
              <li><a href="#services-section-id">Services</a></li>
              <li><a href="#skills-section-id">Skills</a></li>
              <li><a href="#edu-expr-section-id">Education & Experience</a></li>
              <li><a href="#projects-section-id">Projects</a></li>
              <li><a href="#testimonials-section-id">Testimonials</a></li>
              <li><a href="#achievements-section-id">Achievements</a></li>
              <li><a href="#contact-section-id">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column-3">
            <h3>Get in Touch</h3>
            <ul className="footer-contact-details">
              <li>
                <div>
                  <a href="mailto:usmanedu8250998@gmail.com" target="_blank" rel="noopener noreferrer">
                    <span><FontAwesomeIcon icon={['fas', 'envelope']} /></span>
                    <p>usmanedu8250998@gmail.com</p>
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <a href="tel:+923478250998" target="_blank" rel="noopener noreferrer">
                    <span><FontAwesomeIcon icon={['fas', 'phone']} /></span>
                    <p>+923478250998</p>
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <a href="https://wa.me/923478250998" target="_blank" rel="noopener noreferrer">
                    <span><FontAwesomeIcon icon={['fab', 'whatsapp']} /></span>
                    <p>+923478250998</p>
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <a href="https://www.google.com/maps?q=Taxila+Cantt" target="_blank" rel="noopener noreferrer">
                    <span><FontAwesomeIcon icon={['fas', 'location-dot']} /></span>
                    <p>Taxila Cantt, PO 47070, Taxila, Punjab, Pakistan</p>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Horizontal Line */}
        <hr />
        {/* Footer Horizontal Line */}

        {/* Footer Copyright Bar */}
        <div className="footer-copyright">
          <p className="Copyright-text">
            Copyright &copy; 2024-<span id="current-year">{new Date().getFullYear()}</span> 
            <a href="/" target="_self" title="Muhammad Usman">Muhammad Usman</a> All rights reserved.
          </p>
          <p className="developer-text">
            Developed by <a href="/" target="_blank" title="Muhammad Usman">Muhammad Usman aka Markhor Badshah</a>
          </p>
        </div>
        {/* Footer Copyright Bar */}
      </div>
    </footer>
  );
};

export default Footer;

