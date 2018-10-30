import React, { Component } from 'react';

import './App.css';
import questions from './constants/questions';
import players from './constants/players';
import Questions from './components/Questions';
import DeadJackpot from './components/DeadJackpot';


import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <DeadJackpot listPlayers ={players} />
        <Questions listPlayers ={players} question ={questions[0]} />
        <Home  players ={players} />
      </div>
    );
  }
}

export default App;
