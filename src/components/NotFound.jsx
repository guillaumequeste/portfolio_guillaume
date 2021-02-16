import React, { Component } from 'react'
import Helmet from './Helmet'
import { NavLink } from "react-router-dom";

class NotFound extends Component {
  
    render () {
        return (
            <div>
                <Helmet title={"Not Found Portfolio Guillaume Queste"}
                        link={"https://www.guillaumequeste.fr"} />
                <h2>404 Not Found</h2>
                <NavLink to="/">Retour à l'accueil</NavLink>
            </div>
        )
    }
}

export default NotFound