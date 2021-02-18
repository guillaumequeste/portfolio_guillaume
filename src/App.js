import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Helmet from "./components/Helmet";
import { NavLink } from "react-router-dom";

import portfolio_marine from "./img/portfolio_marine.png";
import cinema from "./img/cinema.png";
import decouverte from "./img/decouverte.png";
import histoire from "./img/histoire.png";
import map from "./img/map.jpg";
import cuisine from "./img/cuisine.png";
import weather from "./img/weather.png";
import chevaux from "./img/chevaux.png";
import fruitslegumes from "./img/fruitslegumes.png";
import agence from "./img/agence.png";
import litterature from "./img/litterature.png";
import dictionnaire from "./img/dictionnaire.png";
import parallaxe from "./img/parallaxe.jpg";
import voyage from "./img/voyage.jpg";
import actrices from "./img/actrices.jpg";
import serpent from "./img/serpent.jpg";
import agenceimmophp from "./img/agenceimmophp.png";
import sitedynamique from "./img/sitedynamique.jpg";
import linkedin from "./img/linkedin.png";
import github from "./img/github.png";
import parcours from "./img/parcours.jpg";

import cv from "./docs/CVGuillaumeQueste.pdf";
import projets from "./docs/CVGuillaumeQuesteExperiences.pdf";

const App = () => (
  <>
    <Helmet
      title={"Accueil Portfolio Guillaume Queste"}
      link={"https://www.guillaumequeste.fr"}
    />
    <Header />

    <div className="app">
      <a href="/" className="accueil">
        GQ
      </a>

      {/* home */}
      <div className="home" id="home">
        <div className="presentation">
          <p>
            Bonjour, je suis développeur front-end basé en Normandie.
            <br />
            Bienvenue sur mon portfolio !
          </p>
        </div>
        <div className="identite">
          <div className="prenom_nom">
            <p className="p_prenom_nom">Guillaume</p>
            <p>Queste</p>
          </div>
          <div className="photo">photo</div>
        </div>
        <div className="liens">
          <div className="fichiers">
            <div className="div_telecharger">
              <a
                href={cv}
                without="true"
                rel="noopener noreferrer"
                target="_blank"
                title="CV Guillaume Queste"
                className="bouton_telecharger"
              >
                <p className="titre_bouton_telecharger">Télécharger CV</p>
              </a>
            </div>
            <div className="div_telecharger">
              <a
                href={projets}
                without="true"
                rel="noopener noreferrer"
                target="_blank"
                title="Projets Guillaume Queste"
                className="bouton_telecharger"
              >
                <p className="titre_bouton_telecharger">Télécharger Projets</p>
              </a>
            </div>
          </div>
          <div className="reseaux">
            <div className="div_lien">
              <a
                href="https://linkedin.com/in/guillaume-queste-19b88752"
                title="Guillaume Queste lien LinkedIn"
                target="_blank"
                className="lien_reseau lien_reseau_linkedin"
              >
                <img src={linkedin} alt="linkedin" className="img_reseau" />
              </a>

              <a
                href="https://github.com/guillaumequeste"
                title="Guillaume Queste lien GitHub"
                target="_blank"
                className="lien_reseau lien_reseau_github"
              >
                <img src={github} alt="github" className="img_reseau" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* about me */}
      <div className="about_me" id="about_me">
        <div className="texte_about_me">
          <div className="p_texte_about_me">
            <p>
              Ayant découvert le monde du développement web lors d'une
              reconversion professionnelle, j'ai appris, en grande partie, en
              autodidacte.
            </p>
            <p>
              Rigoureux, sérieux et passionné, je peux vous aider à réaliser vos
              projets.
            </p>
          </div>
        </div>
        <div className="barres">
          <div className="p_barres">
            <h5 className="text-center font-italic pt-3 pb-2">
              <u>Compétences</u>
            </h5>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Angular</p>
            <p>Vue</p>
          </div>
        </div>
      </div>

      {/* projets */}
      <div className="projets" id="projets">
        {/* projets React */}
        <h3 className="pl-5 titre_projets">Projets React</h3>
        <div className="row">
          <a
            href="http://www.marinequeste.fr"
            target="_blank"
            className="col-6 col-md-4 projet"
          >
            <img
              src={portfolio_marine}
              alt="portfolio_marine"
              className="img_projet"
            />
          </a>
          <a
            href="http://cinema.guillaumequeste.fr"
            target="_blank"
            className="col-6 col-md-4 projet"
          >
            <img src={cinema} alt="cinema" className="img_projet" />
          </a>
          <a
            href="http://decouverte.guillaumequeste.fr"
            target="_blank"
            className="col-6 col-md-4 projet"
          >
            <img src={decouverte} alt="decouverte" className="img_projet" />
          </a>
          <a
            href="http://histoire.guillaumequeste.fr"
            target="_blank"
            className="col-6 col-md-4 projet"
          >
            <img src={histoire} alt="histoire" className="img_projet" />
          </a>
          <a
            href="http://map.guillaumequeste.fr"
            target="_blank"
            className="col-6 col-md-4 projet"
          >
            <img src={map} alt="map" className="img_projet" />
          </a>
          <a
            href="http://cuisine.guillaumequeste.fr"
            target="_blank"
            className="col-6 col-md-4 projet"
          >
            <img src={cuisine} alt="cuisine" className="img_projet" />
          </a>
          <a
            href="http://weather.guillaumequeste.fr"
            target="_blank"
            className="col-6 col-md-4 projet"
          >
            <img src={weather} alt="weather" className="img_projet" />
          </a>
          <a
            href="http://chevaux.guillaumequeste.fr"
            target="_blank"
            className="col-6 col-md-4 projet"
          >
            <img src={chevaux} alt="chevaux" className="img_projet" />
          </a>
        </div>

        {/* projets Angular */}
        <h3 className="pl-5 titre_projets">Projets Angular</h3>
        <div className="row">
          <a
            href="http://fruitslegumes.guillaumequeste.fr"
            target="_blank"
            className="col-6 col-md-4 projet"
          >
            <img
              src={fruitslegumes}
              alt="fruitslegumes"
              className="img_projet"
            />
          </a>
          <a
            href="http://agence.guillaumequeste.fr"
            target="_blank"
            className="col-6 col-md-4 projet"
          >
            <img src={agence} alt="agence" className="img_projet" />
          </a>
        </div>

        {/* projets Vue */}
        <h3 className="pl-5 titre_projets">Projet Vue</h3>
        <div className="row">
          <a
            href="http://litterature.guillaumequeste.fr"
            target="_blank"
            className="col-6 col-md-4 projet"
          >
            <img src={litterature} alt="litterature" className="img_projet" />
          </a>
        </div>

        {/* projets HTML/CSS */}
        <h3 className="pl-5 titre_projets">Projets HTML/CSS</h3>
        <div className="row">
          <a
            href="http://dictionnaire.guillaumequeste.fr"
            target="_blank"
            className="col-6 col-md-4 projet"
          >
            <img src={dictionnaire} alt="dictionnaire" className="img_projet" />
          </a>
          <a
            href="http://parallaxe.guillaumequeste.fr"
            target="_blank"
            className="col-6 col-md-4 projet"
          >
            <img src={parallaxe} alt="parallaxe" className="img_projet" />
          </a>
          <a
            href="http://voyage.guillaumequeste.fr"
            target="_blank"
            className="col-6 col-md-4 projet"
          >
            <img src={voyage} alt="voyage" className="img_projet" />
          </a>
        </div>

        {/* projets JS */}
        <h3 className="pl-5 titre_projets">Projet JavaScript</h3>
        <div className="row">
          <a
            href="http://actrices.guillaumequeste.fr"
            target="_blank"
            className="col-6 col-md-4 projet"
          >
            <img src={actrices} alt="actrices" className="img_projet" />
          </a>
          <a
            href="http://serpent.guillaumequeste.fr"
            target="_blank"
            className="col-6 col-md-4 projet"
          >
            <img src={serpent} alt="serpent" className="img_projet" />
          </a>
        </div>

        {/* autres projets */}
        <h3 className="pl-5 titre_projets">Autres projets</h3>
        <div className="div_autres_projets">
          <p>
            Curieux de nature, je m'intéresse également au côté back-end et aux
            différentes technologies qui existent. Ainsi, j'ai appris les bases
            des langages PHP et Java et j'ai appris à utiliser les frameworks
            Symfony (avec MySQL) et Eclipse.
          </p>
          <p>J'ai appris à associer React avec :</p>
          <p>
            - Firebase et MongoDB (afin d'avoir des bases de données en ligne)
          </p>
          <p>- Redux pour gérer l'état de mes composants.</p>
          <p>J'ai appris les bases des frameworks Gatsby et Ionic.</p>
        </div>
        <h5 className="pl-5">Projets PHP</h5>
        <div className="row">
          <a
            href="http://agenceimmophp.guillaumequeste.fr"
            target="_blank"
            className="col-6 col-md-4 projet"
          >
            <img
              src={agenceimmophp}
              alt="agenceimmophp"
              className="img_projet"
            />
          </a>
          <a
            href="http://sitedynamique.guillaumequeste.fr"
            target="_blank"
            className="col-6 col-md-4 projet"
          >
            <img
              src={sitedynamique}
              alt="sitedynamique"
              className="img_projet"
            />
          </a>
        </div>
        <div className="div_bouton_autres_projets">
          <NavLink to="/autres_projets" className="bouton_lien">
            <p className="p_bouton_lien">En voir plus sur mes autres projets</p>
          </NavLink>
        </div>
      </div>

      {/* parcours */}
      <div className="parcours" id="parcours">
        <div className="texte_parcours">
          <div className="p_texte_parcours">
            <p>
              Mon parcours atypique me permet de m'adapter à toutes les
              situations.
              <br />
              <NavLink to="/parcours" className="bouton_lien">
                <p className="p_bouton_lien">En voir plus sur mon parcours</p>
              </NavLink>
            </p>
          </div>
        </div>
        <div className="image">
          <img src={parcours} alt="parcours" className="img_parcours" />
        </div>
      </div>

      {/* contact */}
      <div className="contact" id="contact">
        <p className="p-2 text-center">
          Démarrons un projet ensemble, n'hésitez pas à{" "}
          <NavLink to="/contact" className="lien_contact">
            me contacter
          </NavLink>
        </p>
      </div>

      <hr />

      <Footer />
    </div>
  </>
);

export default App;
