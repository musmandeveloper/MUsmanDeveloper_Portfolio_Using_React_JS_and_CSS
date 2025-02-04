// src/components/Projects.jsx
import React, { useEffect, useState } from 'react';
import './Projects.css'; // Import your CSS file

const Projects = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description for Project 1',
      card: 'project-1',
      image: 'src/assets/Placeholder Image .png', // Replace with actual image URL
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description for Project 2',
      card: 'project-2',
      image: 'src/assets/Placeholder Image .png',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description for Project 3',
      card: 'project-3',
      image: 'src/assets/Placeholder Image .png',
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Description for Project 4',
      card: 'project-4',
      image: 'src/assets/Placeholder Image .png',
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'Description for Project 5',
      card: 'project-5',
      image: 'src/assets/Placeholder Image .png',
    },
    {
      id: 6,
      title: 'Project 6',
      description: 'Description for Project 6',
      card: 'project-6',
      image: 'src/assets/Placeholder Image .png',
    },
  ];

  const [projectViews, setProjectViews] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

  useEffect(() => {
    initializeProjectViews();
  }, []);

  const initializeProjectViews = () => {
    const views = {};
    projects.forEach(project => {
      views[project.card] = 0; // Set initial views to 0
    });
    setProjectViews(views);
  };

  const formatViews = (views) => {
    if (views >= 1e12) return (views / 1e12).toFixed(2) + 'T';
    if (views >= 1e9) return (views / 1e9).toFixed(2) + 'B';
    if (views >= 1e6) return (views / 1e6).toFixed(2) + 'M';
    if (views >= 1e3) return (views / 1e3).toFixed(2) + 'K';
    return views.toFixed(0);
  };

  const incrementViews = (projectId) => {
    setProjectViews(prevViews => {
      const newViews = { ...prevViews };
      newViews[projectId]++;
      return newViews;
    });
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(projects.length / articlesPerPage);
    return (
      <div id="pagination-buttons">
        {currentPage > 1 && (
          <button onClick={() => changePage(currentPage - 1)}>Prev</button>
        )}
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              onClick={() => changePage(page)}
              className={page === currentPage ? 'active' : ''}
            >
              {page}
            </button>
          );
        })}
        {currentPage < totalPages && (
          <button onClick={() => changePage(currentPage + 1)}>Next</button>
        )}
      </div>
    );
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const showCurrentPageArticles = () => {
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    return projects.slice(startIndex, endIndex).map(project => (
      <article key={project.id} className="project" data-card={project.card}>
        <img src={project.image} alt={project.title} className="project-image" />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-link-source">
          <a href="#" onClick={(e) => incrementViews(project.card)}>View Live</a>
          <a href="#" onClick={(e) => incrementViews(project.card)}>View GitHub</a>
        </div>
        <div className="views">
          <i className="fa fa-eye"></i>
          <span>{formatViews(projectViews[project.card] || 0)}</span>
        </div>
      </article>
    ));
  };

  return (
    <div className="projects-list">
      {showCurrentPageArticles()}
      {renderPagination()}
    </div>
  );
};

export default Projects;


