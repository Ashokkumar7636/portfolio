import React from 'react';
import './Education.css';  // Link to the Education CSS file

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2 className="education-title">Education</h2>
        <div className="education-list">
          <div className="education-item">
            <h3 className="education-degree">Computer Science and Engineering</h3>
            <span className="education-institution">Sree Sakthi Engineering College</span><br/>
            <span className="education-year">2020-2024</span>
          </div>
          <div className="education-item">
            <h3 className="education-degree">Frontend Development : INTERNSHIP</h3>
            <span className="education-institution">Glacier Technologies</span><br/>
            <span className="education-year">Period Of Time: 2 months</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
