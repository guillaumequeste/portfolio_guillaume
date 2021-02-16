import React, { Component } from "react";
import Helmet from "./Helmet";

class Parcours extends Component {

  render() {
    return (
      <div className="bodyParcours">
        <Helmet
          title={"Parcours Portfolio Guillaume Queste"}
          link={"https://www.guillaumequeste.fr/parcours"}
        />

        <a href="/" class="accueil">
          accueil
        </a>

        <p>Parcours</p>

      </div>
    );
  }
}

export default Parcours;
