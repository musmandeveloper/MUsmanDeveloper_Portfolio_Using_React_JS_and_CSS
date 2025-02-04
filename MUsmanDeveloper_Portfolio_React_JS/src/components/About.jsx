import React from 'react';
import { useState } from 'react';
import './About.css';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const openProfilePopup = (src) => {
    setImageSrc(src);
    setIsOpen(true);
  };

  const closeProfilePopup = () => {
    setIsOpen(false);
  };

  return (
    <section id="about-section-id" className="about-section">
      <header className="about-header">
        <h2>About Me</h2>
      </header>
      <div className="about-content">
        <div className="personal-info">
          <div className="personal-profile" onClick={() => openProfilePopup('assets/about_section/IPS-38314 Orginal BlueBG .jpg')}>
            <img src="src/assets/Usman BlueBG Passport Photo Original .jpg" alt="Muhammad Usman - Profile Picture" title="Muhammad Usman - Profile Picture" />
          </div>

          {/* PopUp Window */}
          {isOpen && (
            <div className="profile-image-popup-modal">
              <span className="close-btn" onClick={closeProfilePopup}>&times;</span>
              <img className="profile-popup-content" src={imageSrc} alt="Profile" />
            </div>
          )}

          <div className="personal-bio-data">
            <div className="key-point">
              <span>Name:</span> <p>Muhammad Usman</p>
            </div>
            <div className="key-point">
              <span>Degree:</span><p>Bachelor in Computer Science (BCS)</p>
            </div>
            <div className="key-point">
              <span>Phone:</span><p>+92 347 8250998</p>
            </div>
            <div className="key-point">
              <span>Email:</span><p>usmanedu8250998@gmail.com</p>
            </div>
            <div className="key-point">
              <span>Address:</span><p>Taxila Cantt, Rawalpindi, Punjab, Pakistan</p>
            </div>
            <div className="key-point">
              <span>Freelance:</span><p>Available</p>
            </div>
          </div>
        </div>

        <div className="description">
          <p>
            I am a passionate developer with expertise in Web Development, App Development, and Software Development. 
            With a Bachelor's degree in Computer Science and a robust skill set in WordPress, Shopify, Laravel, Flutter, Python, 
            and Machine Learning, I strive to create innovative solutions that drive success. My journey in the tech 
            world is fueled by a commitment to continuous learning and an enthusiasm for tackling new challenges. 
            Whether it's building a responsive website, developing a feature-rich application, or designing intuitive 
            user interfaces, I am dedicated to delivering high-quality results.
          </p>
        </div>

        <div className="statistics">
          <div className="card">
            <h3 className="stats-value" data-final-value="10">0</h3>
            <h4 className="stats-name">Years Experience</h4>
          </div>
          <div className="card">
            <h3 className="stats-value" data-final-value="200">0</h3>
            <h4 className="stats-name">Happy Clients</h4>
          </div>
          <div className="card">
            <h3 className="stats-value" data-final-value="300">0</h3>
            <h4 className="stats-name">Projects Completed</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;