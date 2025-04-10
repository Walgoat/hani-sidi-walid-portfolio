import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import '../assets/styles/Project.scss';

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projets Personnels</h1>
      <div className="projects-grid">
        {/* Projet 1 : Sécurité Interconnexion */}
        <div className="project">
          <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          <h2>Projet Sécurité Interconnexion</h2>
          <p>
            Ce projet implique la configuration d'un réseau sécurisé à travers diverses actions telles que la mise en place d'un plan d'adressage IP, l'installation de pare-feu et de proxys, ainsi que la centralisation des logs. Les compétences utilisées comprennent la gestion des réseaux, la sécurité informatique (FortiGate, NFTables), l'administration système (Linux, Cisco), l'analyse de paquets (Wireshark) et la gestion des logs (Rsyslog).
          </p>
        </div>

        {/* Projet 2 : KINED - Solution Domotique */}
        <div className="project">
          <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
          <h2>KINED : Solution Domotique Innovante</h2>
          <p>
            "KINED" est une solution innovante qui utilise une Kinect recyclée de Microsoft pour détecter les mouvements et effectuer des tâches domotiques pour les personnes ayant une mobilité réduite. Le projet a été développé en utilisant des technologies de détection de mouvement, de programmation de microcontrôleurs et des scripts shell.
          </p>
        </div>

        {/* Projet 3 : Netflix Movie Prediction */}
        <div className="project">
          <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
          <h2>Netflix Movie Prediction</h2>
          <p>
            Ce projet consiste en une analyse approfondie des données de films IMDB pour développer un modèle de prédiction des préférences des utilisateurs. J'ai également conçu un tableau de bord interactif pour l'analyse des données de vente en utilisant Power BI et Tableau.
          </p>
        </div>

        {/* Projet 4 : Rue Bricka - Plateforme E-commerce */}
        <div className="project">
          <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
          <h2>Rue Bricka : Plateforme E-commerce</h2>
          <p>
            "Rue Bricka" est une plateforme e-commerce dédiée à la vente de vêtements, développée avec Vue JS, Vuex et Firebase. Le projet inclut une gestion efficace des stocks, une interface utilisateur intuitive et des protocoles de sécurité avancés.
          </p>
        </div>

        {/* Projet 5 : Jeu CLI - Space Invaders */}
        <div className="project">
          <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
          <h2>Jeu CLI : Space Invaders</h2>
          <p>
            Un jeu en mode terminal développé en C, où le joueur doit défendre sa base contre des envahisseurs spatiaux. Le projet utilise la bibliothèque ncurses pour une expérience de jeu rétro et immersive.
          </p>
        </div>

        {/* Projet 6 : Cryptographie Appliquée */}
        <div className="project">
          <img src={mock06} className="zoom" alt="thumbnail" width="100%" />
          <h2>Projet Cryptographie Appliquée</h2>
          <p>
            Ce projet consiste en la génération de clés RSA et leur conversion en 256, 512, 1024 et 2048 bits. Il inclut également la vérification des doublons avec des facteurs communs.
          </p>
        </div>

        {/* Projet 7 : Projet SQL */}
        <div className="project">
          <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
          <h2>Projet SQL</h2>
          <p>
            Création et gestion d'une base de données, manipulation de données (sélection, mise à jour, création de vues) et gestion des droits des utilisateurs.
          </p>
        </div>

        {/* Projet 8 : Lendli - Plateforme de location */}
        <div className="project">
          <img src={mock08} className="zoom" alt="Lendli platform" width="100%" />
          <h2>Lendli - Plateforme de location</h2>
          <p>
            Plateforme web et mobile de location d'objets entre particuliers développée avec React/TypeScript, Node.js et MongoDB. Intègre un système de paiement sécurisé (Stripe), une API de géolocalisation (Google Maps) et une messagerie instantanée. Architecture modulaire avec séparation front-end/back-end via une API RESTful.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;