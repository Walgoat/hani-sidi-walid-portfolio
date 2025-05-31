import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

declare module 'react-vertical-timeline-component';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Expériences Professionnelles</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Nov. 2024 - Avr. 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Engineer Freelance</h3>
            <h4 className="vertical-timeline-element-subtitle">Outlier, Remote</h4>
            <p>
              Conception et optimisation de prompts pour modèles d'IA générative. Analyse des performances et ajustements pour améliorer la pertinence des réponses. Documentation des méthodologies et collaboration avec des équipes techniques.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(38, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Mars 2024 - Oct. 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Stage Data Scientist et Ingénieur Cybersécurité</h3>
            <h4 className="vertical-timeline-element-subtitle">Vinci Energies, Harfleur</h4>
            <p>
              Digitalisation des contrats de maintenance, création de codes d'optimisation des processus industriels, conception de tableaux de bord dynamiques avec Power BI, et élaboration de stratégies pour intégrer la performance énergétique et la cybersécurité.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mars 2023 - Août 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Stage Ingénieur en Pilotage de Projets et Analyse de Données</h3>
            <h4 className="vertical-timeline-element-subtitle">Safran Nacelles, Gonfreville l'Orcher</h4>
            <p>
              Mise en place d'un outil de pilotage de projet, conception d'architectures de bases de données, et création de KPI avec Power BI pour optimiser la visualisation des données.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mars 2021 - Juil. 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Stage Technicien de Maintenance</h3>
            <h4 className="vertical-timeline-element-subtitle">Transdev, Le Havre</h4>
            <p>
              Maintenance dans le secteur du courant faible, redémarrage de valideurs de titre de transport, réseau et caméras de surveillance.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Janv. 2020 - Présent"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Freelance Développeur Web</h3>
            <h4 className="vertical-timeline-element-subtitle">Walgoat, Le Havre</h4>
            <p>
              Création de sites web e-commerce et d'applications web avec des technologies modernes comme React, Vue.js, Angular, Node.js, Python, et PHP. Déploiement d'API REST et GraphQL.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;