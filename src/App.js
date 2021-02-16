import React from 'react';
import './App.css';
import Header from './components/Header'
import Helmet from './components/Helmet'

const App = () => (
  <>
    <Helmet title={"Accueil Portfolio Guillaume Queste"}
              link={"https://www.guillaumequeste.fr"} />
    <Header />
    <div className="app">
      <a href="/" class="accueil">accueil</a>
      <div class="home">home</div>
      <div class="about_me" id="about_me">
        <p>about me</p>
      </div>
      <div class="parcours" id="parcours">
        <p>parcours</p>
      </div>
      <div class="projets" id="projets">
        <p>projets</p>
      </div>
      <div class="contact" id="contact">
        <p>contact</p>
      </div>
    </div>
  </>
)

export default App;