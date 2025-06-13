import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* You can remove or keep image here */}
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/jaiibatra" target="_blank" rel="noreferrer" title="GitHub">
              <GitHubIcon />
            </a>
            
          </div>

          <h1>Jai Batra</h1>
          <p>
            Aurora, IL&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="mailto:jaibatra0@gmail.com">jaibatra0@gmail.com</a>
          </p>
          <p>CS Student at University of Illinois at Chicago</p>  

          <div className="mobile_social_icons">
            <a href="https://github.com/jaiibatra" target="_blank" rel="noreferrer" title="GitHub">
              <GitHubIcon />
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
