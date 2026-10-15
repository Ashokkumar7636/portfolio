import React from 'react';
import './Projects.css';  // Link to the Projects CSS file

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-list">
          <div className="project-card">
            <img
              src="https://res.cloudinary.com/monday-blogs/fl_lossy,f_auto,q_auto/wp-blog/2026/01/benefits-of-project-management_s1_2026-01-21T13-51-03.png"
              alt="Project 1"
              className="project-image"
            />
            <h3 className="project-name">To-Do, BMI and Age Calculator Apps using React.js</h3>
            <p className="project-description">Integrating APIs for user login and signup functionality to ensure secure and seamless authentication. </p>
          </div>
          <div className="project-card">
            <img
              src="https://www.ntdivyagandhi.com/assets/images/blog/Nutrition-in-Kids.webp"
              alt="Project 2"
              className="project-image"
            />
            <h3 className="project-name">Child Food Diet Plan</h3>
            <p className="project-description">Using react to building a web application that generates personalized diet plans and food recommendations for children based 
            on their age, health conditions, dietary needs, and preferences.</p>
          </div>
          <div className="project-card">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E12AQEgVW9pquyHtw/article-cover_image-shrink_720_1280/B4EaAQVP9qJQAQ-/0/1786980402669?e=2147483647&v=beta&t=tyOAjE1WvU5M0tH5PpSkRenRXZ6IBRq1L1HLOVH5l5o"
              alt="Project 2"
              className="project-image"
            />
            <h3 className="project-name"> Secure ATM Access using Face Biometric Authentication</h3>
            <p className="project-description">Face-based authentication prevents ATM fraud by the use of fake cards and stolen PINs or stolen cards itself. Face verification 
            is embedded with security features.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
