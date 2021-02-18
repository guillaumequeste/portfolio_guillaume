import React, { Component } from "react";
import chevron_up from "../img/chevron_up.svg";

class Footer extends Component {
  render() {
    return (
      <div className="bodyFooter">
        <div className="text-center texte_footer">
          Créé par Guillaume Queste, 2021{" "}
          <a href="#home">
            <img src={chevron_up} alt="chevron_up" className="chevron" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
