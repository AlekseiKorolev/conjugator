import React from 'react';
import './App.css';
import { Challenge } from '../Challenge/Challenge';

export class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="header">
          <ul>
            <li>Logo</li>
            <li>Reglas</li>
            <li>Verbos</li>
            <li>Estatistica</li>
          </ul>
        </header>
        <main>
          <Challenge />
        </main>
        <footer>
          by <a href="mailto: aleksei.nik.korolev@gmail.com">Aleksei Korolev</a> 2019
        </footer>
      </div>
    );
  }
}
