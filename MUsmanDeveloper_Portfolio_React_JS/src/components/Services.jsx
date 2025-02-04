// src/components/Services.jsx
import React from 'react';
import './Services.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

const Services = () => {
  return (
    <section id="services-section-id" className="services-section" aria-labelledby="services-heading">
      <header className="services-header">
        <h2>My Services</h2>
      </header>
      <div className="services-content wow slideInUp" data-wow-delay="1.5s" data-wow-duration="1.5s">
        <div className="services-list">
          {/* Service Card 1 - Web Design */}
          <article className="serv-tile-box" aria-labelledby="service-web-design">
            <div className="serv-tile-box-avatar">
              <FontAwesomeIcon className='serv-icon' icon={['fas', 'paintbrush']} />
            </div>
            <div className="serv-tile-box-info">
              <h3 id="service-web-design" className="serv-tile-box-title">Web Design</h3>
              <p className="serv-tile-box-meta">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.</p>
            </div>
          </article>

          {/* Service Card 2 - Web Development */}
          <article className="serv-tile-box" aria-labelledby="service-web-development">
            <div className="serv-tile-box-avatar">
              <FontAwesomeIcon className='serv-icon' icon={['fas', 'code']} />
            </div>
            <div className="serv-tile-box-info">
              <h3 id="service-web-development" className="serv-tile-box-title">Web Development</h3>
              <p className="serv-tile-box-meta">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.</p>
            </div>
          </article>

          {/* Service Card 3 - WordPress */}
          <article className="serv-tile-box" aria-labelledby="service-wordpress">
            <div className="serv-tile-box-avatar">
              <FontAwesomeIcon className='serv-icon' icon={['fab', 'wordpress-simple']} />
            </div>
            <div className="serv-tile-box-info">
              <h3 id="service-wordpress" className="serv-tile-box-title">WordPress</h3>
              <p className="serv-tile-box-meta">Building and customizing WordPress sites for your business needs.</p>
            </div>
          </article>

          {/* Service Card 4 - SEO */}
          <article className="serv-tile-box" aria-labelledby="service-seo">
            <div className="serv-tile-box-avatar">
             <FontAwesomeIcon className='serv-icon' icon={['fas', 'chart-simple']} />
            </div>
            <div className="serv-tile-box-info">
              <h3 id="service-seo" className="serv-tile-box-title">SEO</h3>
              <p className="serv-tile-box-meta">Optimizing websites to enhance search engine rankings and visibility.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;

