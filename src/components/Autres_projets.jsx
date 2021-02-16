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
          accueil
        </a>

        <p>Autres projets</p>

      </div>
    );
  }
}

export default Autres_projets;
