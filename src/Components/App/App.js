import React from 'react';
import './App.css';
import { Challenge } from '../Challenge/Challenge';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header />
        <div className="main">
          <Challenge />
        </div>
        <Footer />
      </div>
    );
  }
}
