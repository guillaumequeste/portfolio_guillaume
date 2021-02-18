import React, { Component } from "react";
import Helmet from "./Helmet";

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

        <h3 className="text-center pt-5 pb-5">Autres projets</h3>

        <div className="div_autre_projet">
          <div className="texte_autre_projet">
            <div className="div_texte_autre_projet">
              <p>Projet React, Express, MongoDB, NodeJS</p>
              <p>username : admin</p>
              <p>mot de passe : 123456</p>
            </div>
          </div>
          <div className="lien_autre_projet">lien autre projet</div>
        </div>
      </div>
    );
  }
}

export default Autres_projets;
