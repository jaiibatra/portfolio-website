import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss'; 

const educationGroups = [
  {
    title: "University of Illinois at Chicago",
    description: "Bachelor of Science in Computer Science.",
    chips: ["Expected May 2026", "Data Structures and Algorithms", "Statistics", "Discrete Math"],
  },
  {
    title: "College of Dupage",
    description: "Associates in Science",
    chips: ["Graduated 2022", "Python Programming", "Fundamentals of Java"],
  }
];

function Education() {
  return (
    <div className="container" id="education">
      <div className="skills-container">
        <h1>Education</h1>
        <div className="skills-grid">
          {educationGroups.map(({title, description, chips}, idx) => (
            <div className="skill" key={idx}>
              <FontAwesomeIcon icon={faGraduationCap} size="3x" />
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="flex-chips">
                {chips.map((label, index) => (
                  <Chip key={index} className="chip" label={label} variant="outlined" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
