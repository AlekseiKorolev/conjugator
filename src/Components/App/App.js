import React from 'react';
import './App.css';

function App() {
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
        <div className="conjugacion">
          <div>Tiempos</div>
          <div>Personas</div>
          <div>Formas de verbos</div>
          <div>Traductor</div>
          <div>Mostrar respuesta verdadera</div>
        </div>
        <div>
          Reglas
        </div>
        <div>
          Verbos
        </div>
        <div>
          Estatistica
        </div>
      </main>
      <footer>
        by <a href="mailto: aleksei.nik.korolev@gmail.com">Aleksei Korolev</a> 2019
      </footer>
    </div>
  );
}

export default App;
