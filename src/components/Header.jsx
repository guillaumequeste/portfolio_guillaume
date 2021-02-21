import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    /* Use window.innerHeight and multiply it by fraction. For example, if you want 60 vh use (window.innerHeight)*0.6. */
    if (
      window.pageYOffset > window.innerHeight * 0.8 &&
      window.pageYOffset <= window.innerHeight * 1.9
    ) {
      document.querySelector(".nav_about_me").className =
        "nav_about_me scroll";
    } else {
      document.querySelector(".nav_about_me").className =
        "nav_about_me";
    }
    if (
      window.pageYOffset > window.innerHeight * 1.9 &&
      window.pageYOffset <= window.innerHeight * 6.8
    ) {
      document.querySelector(".nav_projets").className =
        "nav_projets scroll";
    } else {
      document.querySelector(".nav_projets").className = "nav_projets";
    }
    if (
      window.pageYOffset > window.innerHeight * 6.8
    ) {
      document.querySelector(".nav_parcours").className =
        "nav_parcours scroll";
    } else {
      document.querySelector(".nav_parcours").className =
        "nav_parcours";
    }
  };

  render() {
    return (
      <div className="bodyHeader">
        <div className="navigation">
        <a className="nav_about_me" href="#about_me">
          ABOUT ME
        </a>

        <a className="nav_projets" href="#projets">
          PROJETS
        </a>

        <a className="nav_parcours" href="#parcours">
          PARCOURS
        </a>

        <NavLink className="nav_contact" to="/contact">
          CONTACT
        </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
