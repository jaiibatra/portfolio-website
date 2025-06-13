import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/jaiibatra" target="_blank" rel="noreferrer"><GitHubIcon/></a>

      </div>
      <p>A portfolio designed & built by <a href="https://github.com/jaiibatra" target="_blank" rel="noreferrer">Jai Batra</a> with 💜</p>
    </footer>
  );
}

export default Footer;