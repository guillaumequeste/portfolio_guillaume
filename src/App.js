import React from "react";
import "./App.css";
import Header from "./components/Header";
import Helmet from "./components/Helmet";

const App = () => (
  <>
    <Helmet
      title={"Accueil Portfolio Guillaume Queste"}
      link={"https://www.guillaumequeste.fr"}
    />
    <Header />
    <div className="app">
      <a href="/" class="accueil">
        accueil
      </a>

      {/* home */}
      <div class="home">home</div>

      {/* about me */}
      <div class="about_me" id="about_me">
        <div class="texte_about_me">
          <p>
            Ayant découvert le monde du développement web lors d'une
            reconversion professionnelle, j'ai appris, en grande partie, en
            autodidacte.
          </p>
          <p>
            Rigoureux, sérieux et passionné, je peux vous aider à réaliser vos
            projets.
          </p>
        </div>
        <div class="barres">
          <p>react 80%</p>
          <p>angular 80%</p>
          <p>vue 70%</p>
          <p>html 90%</p>
          <p>css 90%</p>
          <p>javascript 80%</p>
        </div>
      </div>

      {/* parcours */}
      <div class="parcours" id="parcours">
        <div class="texte_parcours">
          <p>
            Mon parcours atypique me permet de m'adapter à toutes les
            situations.
          </p>
        </div>
        <div class="image">
          <p>image</p>
        </div>
      </div>

      {/* projets */}
      <div class="projets" id="projets">
        <p>projets</p>
        <p>React</p>
        <div class="row">
          <div class="col-6 col-md-4 projet">1</div>
          <div class="col-6 col-md-4 projet">2</div>
          <div class="col-6 col-md-4 projet">3</div>
          <div class="col-6 col-md-4 projet">4</div>
          <div class="col-6 col-md-4 projet">5</div>
          <div class="col-6 col-md-4 projet">6</div>
          <div class="col-6 col-md-4 projet">7</div>
          <div class="col-6 col-md-4 projet">8</div>
        </div>
        <p>Angular</p>
        <div class="row">
          <div class="col-6 col-md-4 projet">1</div>
          <div class="col-6 col-md-4 projet">2</div>
        </div>
        <p>Vue</p>
        <div class="row">
          <div class="col-6 col-md-4 projet">1</div>
        </div>
        <p>HTML/CSS</p>
        <div class="row">
          <div class="col-6 col-md-4 projet">1</div>
          <div class="col-6 col-md-4 projet">2</div>
          <div class="col-6 col-md-4 projet">3</div>
        </div>
        <p>JS</p>
        <div class="row">
          <div class="col-6 col-md-4 projet">1</div>
          <div class="col-6 col-md-4 projet">2</div>
        </div>
        <p>PHP</p>
        <div class="row">
          <div class="col-6 col-md-4 projet">1</div>
          <div class="col-6 col-md-4 projet">2</div>
        </div>
        <p>Autres projets React + backend</p>
        <p>lien</p>
      </div>

      {/* contact */}
      <div class="contact" id="contact">
        <p>contact</p>
      </div>
    </div>
  </>
);

export default App;
