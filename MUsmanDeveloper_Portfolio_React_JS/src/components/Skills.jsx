// src/components/Skills.jsx
import React, { useEffect } from 'react';
import './Skills.css'; // Import your CSS file

const Skills = () => {
  useEffect(() => {
    // Select all progress bars
    const progressBars = document.querySelectorAll('.skill-progress-fill');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-percentage'); // Get percentage to fill
        
        if (entry.isIntersecting) {
          // Animate to the target width when the bar enters viewport
          bar.style.width = targetWidth;
        } else {
          // Animate back to 0% width when bar exits viewport
          bar.style.width = '0%';
        }
      });
    }, {
      threshold: 0.5, // Trigger when at least 50% of element is visible
    });

    // Observe each progress bar
    progressBars.forEach((bar) => {
      observer.observe(bar);
    });

    // Cleanup observer on component unmount
    return () => {
      progressBars.forEach((bar) => {
        observer.unobserve(bar);
      });
    };
  }, []);

  return (
    <section id="skills-section-id" className="skills-section" aria-labelledby="skills-heading">
      <header className="skills-header">
        <h2 id="skills-heading" className="display-5 mb-5">My Skills</h2>
      </header>
      <div className="skills-content">
        {/* Skill: HTML */}
        <article className="skill">
          <div className="skill-info">
            <div className="skill-name">HTML</div>
            <div className="skill-percentage">90%</div>    
          </div>
          <div className="skill-progress-bar first-skill-progress-bar">
            <div className="skill-progress-fill" data-percentage="90%"></div>
          </div>
        </article>
        {/* Skill: CSS */}
        <article className="skill">
          <div className="skill-info">
            <div className="skill-name">CSS</div>
            <div className="skill-percentage">70%</div>    
          </div>
          <div className="skill-progress-bar second-skill-progress-bar">
            <div className="skill-progress-fill" data-percentage="70%"></div>
          </div>
        </article>
        {/* Skill: Angular JS */}
        <article className="skill">
          <div className="skill-info">
            <div className="skill-name">Angular JS</div>
            <div className="skill-percentage">55%</div>
          </div>
          <div className="skill-progress-bar fourth-skill-progress-bar">
            <div className="skill-progress-fill" data-percentage="55%"></div>
          </div>
        </article>                
        {/* Skill: JavaScript */}
        <article className="skill">
          <div className="skill-info">
            <div className="skill-name">JavaScript</div>
            <div className="skill-percentage">85%</div>
          </div>
          <div className="skill-progress-bar third-skill-progress-bar">
            <div className="skill-progress-fill" data-percentage="85%"></div>
          </div>
        </article>
        {/* Skill: WordPress */}
        <article className="skill">
          <div className="skill-info">
            <div className="skill-name">WordPress</div>
            <div className="skill-percentage">80%</div>
          </div>
          <div className="skill-progress-bar fifth-skill-progress-bar">
            <div className="skill-progress-fill" data-percentage="80%"></div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Skills;