import React, { Component } from "react";
import Helmet from "./Helmet";
import Footer2 from "./Footer2";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";

class Formation extends Component {

  render() {
    return (
      <div className="bodyParcours">
        <Helmet
          title={"Formation Portfolio Guillaume Queste"}
          link={"https://www.guillaumequeste.fr/formation"}
        />

        <NavLink to="/" className="accueil">
          Home
        </NavLink>

        <div className="div_titres_parcours">
          <div className="titre_parcours">
            <NavLink to="/parcours" className="titre_parcours_detail exp">
              Expérience pro
            </NavLink>
          </div>
        </div>

        <Fade left>
        <h3 id="formation" className="pl-5">
          <p>Formation</p>
        </h3>
        </Fade>

        <Fade left>
          <div className="div_exp_pro_tour">
            <div className="div_formation">
              <h6 className="text-center h6_exp_pro pt-2">2018</h6>
              <h4 className="h4_exp_pro text-center">WebForce3</h4>
              <h4 className="h4_exp_pro text-center">
                Formation Développeur / Intégrateur Web
              </h4>
              <hr />
              <p className="text-center">
                HTML, CSS, JavaScript, JQuery, AJAX, Bootstrap, SASS, SQL, BDD,
                MySQL, PHP, POO, Symfony, Wordpress, Git, GitHub
              </p>
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className="div_exp_pro_tour">
            <div className="div_formation">
              <h6 className="text-center h6_exp_pro pt-2">2004 - 2010</h6>
              <h4 className="h4_exp_pro text-center">IAE Caen</h4>
              <h4 className="h4_exp_pro text-center">
                Master 2 Contrôle de Gestion et Systèmes d'Information
              </h4>
              <hr />
              <p className="text-center">
                Outils de gestion, Pilotage de la peformance, Systèmes
                d'information, Gstion stratégique, Information comptable et
                financière, Outils budgétaires, Communication financière
              </p>
            </div>
          </div>
        </Fade>

        <Fade left>
          <div className="div_exp_pro_tour">
            <div className="div_formation">
              <h6 className="text-center h6_exp_pro pt-2">2002 - 2004</h6>
              <h4 className="h4_exp_pro text-center">IUT Mesures Physiques</h4>
              <h4 className="h4_exp_pro text-center">DUT Mesures Physiques</h4>
              <hr />
              <p className="text-center">
                Mathématiques, Physique, Chimie, Optique, Electricité,
                Electronique, Matériaux
              </p>
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className="div_exp_pro_tour pb-5">
            <div className="div_formation">
              <h6 className="text-center h6_exp_pro pt-2">2002</h6>
              <h4 className="h4_exp_pro text-center">Lycée Jehan Ango</h4>
              <h4 className="h4_exp_pro text-center">
                Baccalauréat Scientifique
              </h4>
              <hr />
              <p className="text-center">Option Mathématiques</p>
            </div>
          </div>
        </Fade>

        <Footer2 />
      </div>
    );
  }
}

export default Formation;
