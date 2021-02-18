import React, { Component } from "react";
import Helmet from "./Helmet";
import Footer2 from "./Footer2";
import { NavLink } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div>
        <div className="bodyNotFound">
          <Helmet
            title={"Not Found Portfolio Guillaume Queste"}
            link={"https://www.guillaumequeste.fr/notfound"}
          />
          <div className="titreNotFound">
            <h2>Il n'y a rien ici.</h2>
            <NavLink to="/">Retour à l'accueil</NavLink>
          </div>
        </div>
        <Footer2 />
      </div>
    );
  }
}

export default NotFound;
