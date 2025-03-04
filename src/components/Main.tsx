import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://i.imgur.com/vv9WGOy.jpeg" alt="Avatar" /> {/*  */}
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Walgoat" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/sidi-walid-hani" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Sidi-Walid Hani</h1>
          <p>Ingénieur en Sécurité Informatique et Data Scientist</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Walgoat" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/sidi-walid-hani" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;