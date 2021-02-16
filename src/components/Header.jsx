import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
        <div className="bodyHeader">
      <nav className="navbar navbar-expand-lg navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about_me"
              >
                About me
              </a>
            </li>
            {/* <li className="nav-item">
              <a
                className="nav-link"
                href="#parcours"
              >
                Parcours
              </a>
    </li> */}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#projets"
              >
                Projets
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    );
  }
}

export default Header;
