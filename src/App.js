import React, { Component } from 'react';
import './App.css';
import Carte from './components/carte.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Nos livres</h1>
          <br/>
          <div className="container-fluid">
            <div className="row">
              <Carte image="./res/l'homme qui voulait etre heureux.jpg" name="L'homme qui voulait être heureux" author="Laurent Gounelle"></Carte>
              <Carte image="./res/soufi-mon-amour.jpg" name="Soufi mon amour" author="Elif Shafak"></Carte>
              <Carte image="./res/le monde de sophie.jpg" name="Le monde de sophie" author="Jostein Gaarder"></Carte>
              <Carte image="./res/la-formule-de-dieu.jpg" name="La formule de dieu" author="Dos Santos José Rodrigues"></Carte>
            </div>
          </div>
        </header>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        */}
      </div>
    );
  }
}

export default App;
