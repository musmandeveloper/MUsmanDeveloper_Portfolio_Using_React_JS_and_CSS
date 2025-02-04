// src/components/EducationExperience.jsx
import React, { useEffect, useState } from 'react';
import './EducationExperience.css'; // Import your CSS file

const EducationExperience = () => {
  const edu_data = [
    {
      year: 'Feb 2024 - Mar 2024',
      title: 'Web Design',
      organization: 'COMSATS University Islamabad, Wah Campus',
      description: 'Details about education 1. Details about education 1. Details about education 1. Details about education 1. Details about education 1.'
    },
    {
      year: 'Feb 2024 - Mar 2024',
      title: 'FSc Pre-Eng',
      organization: 'FG Degree College For Men, Wah Cantt',
      description: 'Details about education 2. Details about education 2.Details about education 2. Details about education 2. Details about education 2.'
    },
    {
      year: 'Feb 2016 - Mar 2018',
      title: 'Matric Science (Biology)',
      organization: 'FG Public High School, Taxila Cantt',
      description: 'Details about education 3. Details about education 3. Details about education 3. Details about education 3. Details about education 3.'
    }
  ];

  const expr_data = [
    {
      year: 'Feb 2024 - Mar 2024',
      title: 'Internee as Web Developer',
      organization: 'ABC Company, XYZ Address',
      description: 'Details about experience 1. Details about experience 1. Details about experience 1. Details about experience 1. Details about experience 1.'
    },
    {
      year: 'Feb 2024 - Mar 2024',
      title: 'Internee as Web Developer',
      organization: 'ABC Company, XYZ Address',
      description: 'Details about experience 2. Details about experience 2. Details about experience 2. Details about experience 2. Details about experience 2.'
    },
    {
      year: 'Feb 2024 - Mar 2024',
      title: 'Internee as Web Developer',
      organization: 'ABC Company, XYZ Address',
      description: 'Details about experience 3. Details about experience 3. Details about experience 3. Details about experience 3. Details about experience 3.'
    }
  ];

  const [eduActiveIndex, setEduActiveIndex] = useState(-1);
  const [exprActiveIndex, setExprActiveIndex] = useState(-1);
  const [eduTimelineAnimated, setEduTimelineAnimated] = useState(false);
  const [exprTimelineAnimated, setExprTimelineAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const eduTimeline = document.getElementById('edu-timeline');
      const exprTimeline = document.getElementById('expr-timeline');

      if (!eduTimelineAnimated && eduTimeline.getBoundingClientRect().top < window.innerHeight) {
        setEduTimelineAnimated(true);
        animateTimeline(edu_data.length, setEduActiveIndex);
      }

      if (!exprTimelineAnimated && exprTimeline.getBoundingClientRect().top < window.innerHeight) {
        setExprTimelineAnimated(true);
        animateTimeline(expr_data.length, setExprActiveIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [eduTimelineAnimated, exprTimelineAnimated]);

  const animateTimeline = (length, setActiveIndex) => {
    let activeIndex = 0;
    const animateNodes = () => {
      if (activeIndex < length) {
        setActiveIndex(activeIndex);
        setTimeout(() => {
          setActiveIndex(-1); // Deactivate all nodes/cards
        }, 1000);
        activeIndex++;
        setTimeout(animate, Nodes, 1000);
      }
    };
    animateNodes();
  };

  const handleNodeClick = (index, type) => {
    if (type === 'edu') {
      setEduActiveIndex(index);
    } else {
      setExprActiveIndex(index);
    }
  };

  const handleMouseEnter = (index, type) => {
    if (type === 'edu') {
      setEduActiveIndex(index);
    } else {
      setExprActiveIndex(index);
    }
  };

  const handleMouseLeave = () => {
    setEduActiveIndex(-1);
    setExprActiveIndex(-1);
  };

  return (
    <section id="edu-expr-section-id" className="edu-expr-section" aria-labelledby="education-experience-heading">
      <header className="edu-expr-header">
        <h2>My Education & Experience</h2>
      </header>
      <div className="edu-expr-content">
        {/* Education Timeline */}
        <div className="education-timeline">
          <div className="education-header">
            <h3>Education</h3>
          </div>
          <div className="edu-timeline-container">
            <div className="edu-timeline" id="edu-timeline">
              {edu_data.map((item, index) => (
                <div
                  key={index}
                  className={`edu-node ${eduActiveIndex === index ? 'edu-active' : ''}`}
                  onClick={() => handleNodeClick(index, 'edu')}
                  onMouseEnter={() => handleMouseEnter(index, 'edu')}
                  onMouseLeave={handleMouseLeave}
                />
              ))}
            </div>
            <div className="edu-cards" id="edu-cards">
              {edu_data.map((item, index) => (
                <div
                  key={index}
                  className={`edu-card ${eduActiveIndex === index ? 'edu-active' : ''}`}
                  onClick={() => handleNodeClick(index, 'edu')}
                  onMouseEnter={() => handleMouseEnter(index, 'edu')}
                  onMouseLeave={handleMouseLeave}
                >
                  <h5>{item.year}</h5>
                  <h3>{item.title}</h3>
                  <h4>{item.organization}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Experience Timeline */}
        <div className="experience-timeline">
          <div className="experience-header">
            <h3>Experience</h3>
          </div>
          <div className="expr-timeline-container">
            <div className="expr-timeline" id="expr-timeline">
              {expr_data.map((item, index) => (
                <div
                  key={index}
                  className={`expr-node ${exprActiveIndex === index ? 'expr-active' : ''}`}
                  onClick={() => handleNodeClick(index, 'expr')}
                  onMouseEnter={() => handleMouseEnter(index, 'expr')}
                  onMouseLeave={handleMouseLeave}
                />
              ))}
            </div>
            <div className="expr-cards" id="expr-cards">
              {expr_data.map((item, index) => (
                <div
                  key={index}
                  className={`expr-card ${exprActiveIndex === index ? 'expr-active' : ''}`}
                  onClick={() => handleNodeClick(index, 'expr')}
                  onMouseEnter={() => handleMouseEnter(index, 'expr')}
                  onMouseLeave={handleMouseLeave}
                >
                  <h5>{item.year}</h5>
                  <h3>{item.title}</h3>
                  <h4>{item.organization}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;