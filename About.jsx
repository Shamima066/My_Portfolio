import React from 'react';
import profilePic from '../pic.jpeg';

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="profile-circle">
          <img src={profilePic} alt="Shamima" />
        </div>
        <div className="about-text">
          <p>
            Hi! I am <strong>Shamima Akther Bhuiya</strong>, a passionate
            Computer Science & Engineering student at Metropolitan University,
            Sylhet. I love building web applications and solving real-world
            problems through code.
          </p>
          <br />
          <p>
            I am currently focused on front-end development using React.js and
            always looking for opportunities to grow and contribute to
            meaningful projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;