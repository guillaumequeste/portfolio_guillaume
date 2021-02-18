import React, { Component } from "react";
import Helmet from "./Helmet";
import patrimoine from "../img/mern.png";
import bibliotheque from "../img/bibliotheque.png";
import kids from "../img/kids.png";
import Fade from "react-reveal/Fade";

class Autres_projets extends Component {
  render() {
    return (
      <div className="bodyAutres_projets">
        <Helmet
          title={"Autres projets Portfolio Guillaume Queste"}
          link={"https://www.guillaumequeste.fr/autres_projets"}
        />

        <a href="/" className="accueil">
          GQ
        </a>

        <h3 className="text-center pt-5">Autres projets</h3>

        <div className="div_autre_projet pt-5">
          <Fade left>
            <div className="texte_autre_projet">
              <div className="div_texte_autre_projet p-3">
                <p>
                  Projet React, Express, MongoDB, NodeJS (MERN) : utilisation de
                  mongoDB avec partie admin afin de créer, afficher, modifier,
                  supprimer des items.
                  <br />
                  - username : admin
                  <br />- mot de passe : 123456
                </p>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="lien_autre_projet">
              <a
                href="http://gui-patrimoine.herokuapp.com"
                target="_blank"
                className="a_lien_autre_projet"
              >
                <img
                  src={patrimoine}
                  alt="patrimoine"
                  className="img_lien_autre_projet"
                />
              </a>
            </div>
          </Fade>
        </div>

        <div className="div_autre_projet div_autre_projet2 pt-5">
          <Fade left>
            <div className="texte_autre_projet">
              <div className="div_texte_autre_projet p-3">
                <p>
                  Projet React et Firebase : utilisation de Firebase avec partie
                  admin afin de créer, afficher, modifier, supprimer des items.
                </p>
                <p>mail : demo@demo.fr</p>
                <p>mot de passe : demo123</p>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="lien_autre_projet">
              <a
                href="http://bibliotheque.guillaumequeste.fr"
                target="_blank"
                className="a_lien_autre_projet"
              >
                <img
                  src={bibliotheque}
                  alt="bibliotheque"
                  className="img_lien_autre_projet"
                />
              </a>
            </div>
          </Fade>
        </div>

        <div className="div_autre_projet pt-5 pb-5">
          <Fade left>
            <div className="texte_autre_projet">
              <div className="div_texte_autre_projet p-3">
                <p>Projet React-Redux : utilisation de Redux afin de gérer l'état des composants</p>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="lien_autre_projet">
              <a
                href="http://kids.guillaumequeste.fr"
                target="_blank"
                className="a_lien_autre_projet"
              >
                <img src={kids} alt="kids" className="img_lien_autre_projet" />
              </a>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Autres_projets;
