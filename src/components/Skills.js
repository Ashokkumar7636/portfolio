import React from 'react';
import './Skills.css'; // Import your custom CSS file

import img1 from '../images/images.png'
import img2 from '../images/CSS-Logo.png'
import img3 from '../images/javascript.png'
import img4 from '../images/Bootstrap_logo.svg.png'
import img5 from '../images/React-icon.svg.png'
import img6 from '../images/rb.png'
import img7 from '../images/aws.png'
import img8 from '../images/git.png'
import img9 from '../images/Visual_Studio_Code_1.35_icon.svg.png'


const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="header">
          <div className="icon">
            <span role="img" aria-label="code">💻</span> {/* Example icon */}
          </div>
          <h2 className="title">Skills & Expertise</h2>
        </div>
        <div className="skills-grid">
          <div className="card frontend">
            <img  src={img1} className='img-skills'/>
            <img  src={img2} className='img-skills'/>
            <img  src={img3}className='img-skills'/>
            <img  src={img4}className='img-skills'/>
            <img  src={img5}className='img-skills'/>
            <img  src={img6}className='img-skills'/>
            <img  src={img7}className='img-skills'/>
            <img  src={img8}className='img-skills'/>
            <img  src={img9}className='img-skills'/>


          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
