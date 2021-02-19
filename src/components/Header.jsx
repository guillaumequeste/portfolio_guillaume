import React, { Component } from "react";

class Header extends Component {

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    /* Use window.innerHeight and multiply it by fraction. For example, if you want 60 vh use (window.innerHeight)*0.6. */
    if ((window.pageYOffset > (window.innerHeight)*0.8) && (window.pageYOffset <= (window.innerHeight)*1.9)) {
      document.querySelector(".nav_about_me").className = "nav-link nav_about_me scroll";
    } else {
      document.querySelector(".nav_about_me").className = "nav-link nav_about_me";
    }
    if ((window.pageYOffset > (window.innerHeight)*1.9) && (window.pageYOffset <= (window.innerHeight)*7.5)) {
      document.querySelector(".nav_projets").className = "nav-link nav_projets scroll";
    } else {
      document.querySelector(".nav_projets").className = "nav-link nav_projets";
    }
    if ((window.pageYOffset > (window.innerHeight)*7.5) && (window.pageYOffset <= (window.innerHeight)*7.8)) {
      document.querySelector(".nav_parcours").className = "nav-link nav_parcours scroll";
    } else {
      document.querySelector(".nav_parcours").className = "nav-link nav_parcours";
    }
    if (window.pageYOffset > (window.innerHeight)*7.8) {
      document.querySelector(".nav_contact").className = "nav-link nav_contact scroll";
    } else {
      document.querySelector(".nav_contact").className = "nav-link nav_contact";
    }
  };


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
                <a className="nav-link nav_about_me" href="#about_me">
                  ABOUT ME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav_projets" href="#projets">
                  PROJETS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav_parcours" href="#parcours">
                  PARCOURS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav_contact" href="#contact">
                  CONTACT
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
