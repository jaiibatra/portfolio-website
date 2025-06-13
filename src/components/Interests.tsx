import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Data Analytics",
    "Python",
    "SQL",
    "Power BI",
    "Excel",
];

const labelsSecond = [
    "Large Language Models",
    "OpenAI",
];

const labelsThird = [
    "Web Development",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
];

function Expertise() {
    return (
    <div className="container" id="interests">
        <div className="skills-container">
            <h1>Interests</h1>  {/* You can change the heading here */}
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x" />
                    <h3>Data Analytics</h3>
                    <p>Exploring data to find insights and support data-driven decisions using Python and Power BI.</p>
                    <div className="flex-chips">
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x" />
                    <h3>Large Language Models (LLM)</h3>
                    <p>Interested in generative AI and building smart apps with LLMs like OpenAI models.</p>
                    <div className="flex-chips">
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x" />
                    <h3>Web Development</h3>
                    <p>Learning to build responsive and interactive web apps using React and modern web technologies.</p>
                    <div className="flex-chips">
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
