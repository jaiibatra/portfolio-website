import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faGitAlt, } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Skills.scss';

const labelsFirst = [
  "JavaScript",
  "Java",
  "React",
  "C++",
  "Python",
  "HTML/CSS",
];

const labelsSecond = [
  "Git",
  "GitHub",
  "PyCharm",
  "VsCode",
  "Postman",
];

function Skills() {
  return (
    <div className="skills-container" id="skills">
      <h1>Skills</h1>
      <div className="skills-grid">
        <div className="skill">
          <FontAwesomeIcon icon={faJsSquare} size="3x" />
          <h3>Programming Languages</h3>
          <p>Growing my knowledge in HTML/CSS, JS. Proficient in Python, Java, C++</p>
          <div className="flex-chips">
            {labelsFirst.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
        </div>

        <div className="skill">
          <FontAwesomeIcon icon={faGitAlt} size="3x" />
          <h3>Tools</h3>
          <p>Familiar with different programming tools.</p>
          <div className="flex-chips">
            {labelsSecond.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
