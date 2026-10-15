import React from 'react';
import './About.css'; // Import the About.css file
import { User, ChevronRight } from 'lucide-react';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="card-gradient rounded-3xl p-12">
          <div className="section-header">
            <User className="text-purple-400" size={32} />
            <h2 className="text-4xl font-bold gradient-text">About Me</h2>
          </div>
          <div className="card">
            <div className="text">
              <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Front-End Developer with hands-on experience from my internship, where I worked with HTML, CSS, JavaScript, and React. I'm focused on building responsive, user-friendly web applications!
              </p>
              <div className="details">
                <div className="flex items-center gap-4">
                  <p><ChevronRight className="text-purple-400"/>Glacier Technologies</p>
                </div>
                <div className="flex items-center gap-4">
                  <p><ChevronRight className="text-purple-400" />Available for freelance projects</p>
                </div>
              </div>
            </div>
            <div className="statistics">
              {/* <div className="stat">
                <h3 className="text-4xl font-bold gradient-text mb-2">5+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div> */}
              <div className="stat">
                <h3 className="text-4xl font-bold gradient-text mb-2">6+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
