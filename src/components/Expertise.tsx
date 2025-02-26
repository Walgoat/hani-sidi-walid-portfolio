import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faSearch, faShieldAlt, faNetworkWired } from '@fortawesome/free-solid-svg-icons'; // Icônes mises à jour
import { faDocker, faReact as faReactBrand } from '@fortawesome/free-brands-svg-icons'; // Icônes Docker et React (Brands)
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

// Compétences pour chaque catégorie
const cybersecuriteSkills = [
  "Audits de sécurité", "Reverse Engineering", "Analyse Forensique", "Cybersurveillance (SOC)",
  "Sécurisation des réseaux", "Configuration et gestion des VPN", "IAM (Identity and Access Management)",
  "Cryptographie", "Pentesting", "Gestion des incidents de sécurité"
];

const dataScientistSkills = [
  "Machine Learning", "Data Analysis", "Power BI", "Tableau", "Pandas", "NumPy",
  "Scikit-Learn", "TensorFlow", "Data Visualization", "Big Data", "Apache Spark", "Hadoop",
  "Natural Language Processing (NLP)", "Deep Learning"
];

const devSecOpsSkills = [
  "CI/CD (GitLab CI, Jenkins)", "Docker", "Kubernetes", "Terraform", "Ansible",
  "Sécurité des pipelines", "Gestion des vulnérabilités (Snyk, SonarQube)", "AWS Security",
  "Azure DevOps", "Monitoring (Prometheus, Grafana)"
];

const cloudSkills = [
  "AWS", "Azure", "Google Cloud", "Load Balancing", "DNS", "SDN (Software Defined Networking)",
  "Serverless Architecture", "Cloud Security", "Containers (Docker, Kubernetes)", "Infrastructure as Code (Terraform)"
];

const developpementSkills = [
  "Python", "JavaScript", "TypeScript", "React", "Node.js", "Vue.js", "Angular",
  "HTML5", "CSS3", "SASS", "Git", "API REST", "GraphQL", "Bases de données (SQL, NoSQL)"
];

const reseauxSkills = [
  "Protocoles (TCP/IP, FTP, SSH)", "Réseaux VLAN", "Firewalls (FortiGate, NFTables)", "VPN",
  "Routage et commutation", "Wi-Fi sécurisé", "SDN (Software Defined Networking)", "Analyse de paquets (Wireshark)",
  "Gestion des réseaux", "Sécurité des réseaux"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          {/* Compétence 1 : Cybersécurité */}
          <div className="skill">
            <FontAwesomeIcon icon={faLock} size="3x" /> {/* Icône mise à jour */}
            <h3>Cybersécurité</h3>
            <p>
              Expertise en sécurité informatique, incluant les audits de sécurité, la cybersurveillance (SOC), la sécurisation des réseaux, et la gestion des incidents de sécurité.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {cybersecuriteSkills.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          {/* Compétence 2 : Data Scientist */}
          <div className="skill">
            <FontAwesomeIcon icon={faSearch} size="3x" />
            <h3>Data Scientist</h3>
            <p>
              Analyse de données, machine learning, et visualisation de données avec des outils comme Power BI, Tableau, Pandas, et Scikit-Learn. Expérience en traitement de données massives (Big Data).
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {dataScientistSkills.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          {/* Compétence 3 : DevSecOps */}
          <div className="skill">
            <FontAwesomeIcon icon={faShieldAlt} size="3x" />
            <h3>DevSecOps</h3>
            <p>
              Intégration de la sécurité dans les processus DevOps pour garantir des déploiements sécurisés et automatisés. Compétences en gestion des vulnérabilités, CI/CD sécurisé, et outils comme GitLab CI, Jenkins, Docker, et Kubernetes.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {devSecOpsSkills.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          {/* Compétence 4 : Cloud */}
          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" /> {/* Icône Docker importée depuis les brands */}
            <h3>Cloud</h3>
            <p>
              Conception, configuration et gestion des infrastructures cloud. Expérience avec AWS, Azure, Google Cloud, et les architectures serverless.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {cloudSkills.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          {/* Compétence 5 : Développement */}
          <div className="skill">
            <FontAwesomeIcon icon={faReactBrand} size="3x" /> {/* Icône React importée depuis les brands */}
            <h3>Développement</h3>
            <p>
              Développement d'applications web et mobiles avec des technologies modernes comme React, Node.js, Vue.js, et Angular. Expérience en conception d'API REST et GraphQL.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {developpementSkills.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          {/* Compétence 6 : Réseaux */}
          <div className="skill">
            <FontAwesomeIcon icon={faNetworkWired} size="3x" />
            <h3>Réseaux</h3>
            <p>
              Conception, configuration et gestion des réseaux. Compétences en protocoles réseaux, sécurité des réseaux, et analyse de paquets avec Wireshark.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {reseauxSkills.map((label, index) => (
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