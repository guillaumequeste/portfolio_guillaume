import React, { Component } from "react";
import Helmet from "./Helmet";
import Footer2 from "./Footer2";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";

class Parcours extends Component {

  render() {
    return (
      <div className="bodyParcours">
        <Helmet
          title={"Parcours Portfolio Guillaume Queste"}
          link={"https://www.guillaumequeste.fr/parcours"}
        />

        <NavLink to="/" className="accueil">
          Home
        </NavLink>

        <div className="div_titres_parcours">
          <div className="titre_parcours">
            <NavLink to="/formation" className="titre_parcours_detail form">
              Formation
            </NavLink>
          </div>
        </div>

        <Fade left>
        <h3 id="exp_pro" className="pl-5">
          <p>Expérience professionnelle</p>
        </h3>
        </Fade>

        <Fade left>
          <div className="div_exp_pro_tour">
            <div className="div_exp_pro">
              <h4 className="h4_exp_pro pt-2 text-center">
                Développeur indépendant
              </h4>
              <h6 className="text-center h6_exp_pro">2018 - aujourd'hui</h6>
              <p className="p_parcours">Développement de projets</p>
              <p className="p_parcours">
                Rédaction du cahier des charges (navigation, disposition des
                différents éléments, couleurs...)
              </p>
              <p className="p_parcours">Code, tests et vérifications</p>
              <p className="p_parcours">Mise en ligne</p>
              <p className="p_parcours">Mises à jour</p>
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className="div_exp_pro_tour">
            <div className="div_exp_pro">
              <h4 className="h4_exp_pro pt-2 text-center">FLUNCH</h4>
              <h4 className="h4_exp_pro text-center">Assistant de direction</h4>
              <h6 className="text-center h6_exp_pro">2015 - 2017</h6>
              <p className="p_parcours">Gestion commerciale : prévision des ventes, tarifs, marges</p>
              <p className="p_parcours">Suivi et minimisation des démarques</p>
              <p className="p_parcours">Management, gestion de la relation client</p>
            </div>
          </div>
        </Fade>

        <Fade left>
          <div className="div_exp_pro_tour">
            <div className="div_exp_pro">
              <h4 className="h4_exp_pro pt-2 text-center">VEOLIA TRANSDEV</h4>
              <h4 className="h4_exp_pro text-center">
                Assistant au contrôle financier
              </h4>
              <h6 className="text-center h6_exp_pro">2012</h6>
              <p className="p_parcours">
                Consolidation des résultats des sociétés de la région nord-ouest
              </p>
              <p className="p_parcours">Rédaction de notes de synthèse destinées à la direction</p>
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className="div_exp_pro_tour pb-5">
            <div className="div_exp_pro">
              <h4 className="h4_exp_pro pt-2 text-center">ESPRIT</h4>
              <h4 className="h4_exp_pro text-center">
                Assistant au contrôle de gestion
              </h4>
              <h6 className="text-center h6_exp_pro">2011</h6>
              <p className="p_parcours">
                Mise en place de reportings mensuels et création de tableaux de
                bord
              </p>
              <p className="p_parcours">Mise en place d'un système EDI</p>
            </div>
          </div>
        </Fade>

        <Footer2 />
      </div>
    );
  }
}

export default Parcours;
