import React, { Component } from "react";
import Helmet from "./Helmet";
import Footer2 from "./Footer2";

class Parcours extends Component {
  render() {
    return (
      <div className="bodyParcours">
        <Helmet
          title={"Parcours Portfolio Guillaume Queste"}
          link={"https://www.guillaumequeste.fr/parcours"}
        />

        <a href="/" className="accueil">
          GQ
        </a>

        <div className="div_titres_parcours">
          <div className="titre_parcours">
            <a href="#exp_pro" className="titre_parcours_detail">
              Expérience pro
            </a>
          </div>
          <div className="titre_parcours">
            <a href="#formation" className="titre_parcours_detail">
              Formation
            </a>
          </div>
        </div>

        <h5 id="exp_pro" className="pl-5">
          <u>Expérience professionnelle</u>
        </h5>

        <div className="div_exp_pro_tour">
          <div className="div_exp_pro">
            <h4 className="h4_exp_pro pt-2 text-center">
              Développeur indépendant
            </h4>
            <h6 className="text-center h6_exp_pro">2018 - aujourd'hui</h6>
            <p>Développement de projets</p>
            <p>
              Rédaction du cahier des charges (navigation, disposition des
              différents éléments, couleurs...)
            </p>
            <p>Code, tests et vérifications</p>
            <p>Mise en ligne</p>
            <p>Mises à jour</p>
          </div>
        </div>

        <div className="div_exp_pro_tour">
          <div className="div_exp_pro">
            <h4 className="h4_exp_pro pt-2 text-center">FLUNCH</h4>
            <h4 className="h4_exp_pro text-center">
              Assistant de direction
            </h4>
            <h6 className="text-center h6_exp_pro">2015 - 2017</h6>
            <p>Gestion commerciale : prévision des ventes, tarifs, marges</p>
            <p>Suivi et minimisation des démarques</p>
            <p>Management, gestion de la relation client</p>
          </div>
        </div>

        <div className="div_exp_pro_tour">
          <div className="div_exp_pro">
            <h4 className="h4_exp_pro pt-2 text-center">VEOLIA TRANSDEV</h4>
            <h4 className="h4_exp_pro text-center">
              Assistant au contrôle financier
            </h4>
            <h6 className="text-center h6_exp_pro">2012</h6>
            <p>Consolidation des résultats des sociétés de la région nord-ouest</p>
            <p>Rédaction de notes de synthèse destinées à la direction</p>
          </div>
        </div>

        <div className="div_exp_pro_tour">
          <div className="div_exp_pro">
            <h4 className="h4_exp_pro pt-2 text-center">ESPRIT</h4>
            <h4 className="h4_exp_pro text-center">
              Assistant au contrôle de gestion
            </h4>
            <h6 className="text-center h6_exp_pro">2011</h6>
            <p>Mise en place de reportings mensuels et création de tableaux de bord</p>
            <p>Mise en place d'un système EDI</p>
          </div>
        </div>

        <h5 id="formation" className="pl-5">
          <u>Formation</u>
        </h5>

        <div className="div_exp_pro_tour">
          <div className="div_formation">
          <h6 className="text-center h6_exp_pro pt-2">2018</h6>
            <h4 className="h4_exp_pro text-center">WebForce3</h4>
            <h4 className="h4_exp_pro text-center">
              Formation Développeur / Intégrateur Web
            </h4>
            <hr />
            <p className="text-center">HTML, CSS, JavaScript, JQuery, AJAX, Bootstrap, SASS, SQL, BDD, MySQL, PHP, POO, Symfony, Wordpress, Git, GitHub</p>
          </div>
        </div>

        <div className="div_exp_pro_tour">
          <div className="div_formation">
          <h6 className="text-center h6_exp_pro pt-2">2004 - 2010</h6>
            <h4 className="h4_exp_pro text-center">IAE Caen</h4>
            <h4 className="h4_exp_pro text-center">
              Master 2 Contrôle de Gestion et Systèmes d'Information
            </h4>
            <hr />
            <p className="text-center">Outils de gestion, Pilotage de la peformance, Systèmes d'information, Gstion stratégique, Information comptable et financière, Outils budgétaires, Communication financière</p>
          </div>
        </div>

        <div className="div_exp_pro_tour">
          <div className="div_formation">
          <h6 className="text-center h6_exp_pro pt-2">2002 - 2004</h6>
            <h4 className="h4_exp_pro text-center">IUT Mesures Physiques</h4>
            <h4 className="h4_exp_pro text-center">
              DUT Mesures Physiques
            </h4>
            <hr />
            <p className="text-center">Mathématiques, Physique, Chimie, Optique, Electricité, Electronique, Matériaux</p>
          </div>
        </div>

        <div className="div_exp_pro_tour">
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

        <Footer2 />

      </div>
    );
  }
}

export default Parcours;
