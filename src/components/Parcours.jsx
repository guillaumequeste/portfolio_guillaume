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

        <a href="/" className="accueil">
          accueil
        </a>

        <h3 className="text-center pt-2">Parcours</h3>

        
       
      </div>
    );
  }
}

export default Parcours;
