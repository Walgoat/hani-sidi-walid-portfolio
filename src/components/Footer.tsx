import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Walgoat" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/sidi-walid-hani-" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
      </div>
      <p>Un portfolio conçu et développé par <a href="https://github.com/Walgoat" target="_blank" rel="noreferrer">Sidi Walid Hani</a> avec 💜</p>
    </footer>
  );
}

export default Footer;