import React, { Component } from 'react';

import './App.css';
import questions from './constants/questions';
import players from './constants/players'

import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Home  players ={players} />
      </div>
    );
  }
}

export default App;
