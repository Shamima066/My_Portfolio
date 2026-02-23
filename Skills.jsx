import React, { useState } from 'react';
import certificate from '../certificate.jpeg';

function Skills() {
  const skillList = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React.js',
    'Python',
    'C Programming',
    'Git & GitHub',
    'Responsive Design',
  ];

  const [showCert, setShowCert] = useState(false);

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillList.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>

      <div className="certificate-box">
        <h3>Certificate</h3>
        <div className="certificate-card">
          <div className="certificate-icon">🏆</div>
          <div className="certificate-info">
            <h4>Research 360</h4>
            <p>Organized by Metropolitan University Research Society</p>
            <span className="certificate-badge">Degree Sine</span>
            <br />
            <br />
            <button
              className="project-btn"
              onClick={() => setShowCert(!showCert)}
            >
              {showCert ? 'Hide Certificate' : 'View Certificate'}
            </button>
          </div>
        </div>
        {showCert && (
          <div className="certificate-image-box">
            <img
              src={certificate}
              alt="Research 360 Certificate"
              className="certificate-image"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
