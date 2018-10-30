import React, { Component } from 'react';

import './App.css';
import questions from './constants/questions';
import players from './constants/players';
import Questions from './components/Questions';
import DeadJackpot from './components/DeadJackpot';


import Home from './components/Home';

class App extends Component {
  state = {
    reponse : null
  }

  //Function for get reponse from Reponse.js
  getReponse = (repo) => {
    this.setState({
      reponse : repo
    })
  }

  render() {
    return (
      <div>
        <DeadJackpot listPlayers ={players} />
        <Home  players ={players} />
        <Questions listPlayers ={players} question ={questions[0]} getReponse={this.getReponse} />
      </div>
    );
  }
}

export default App;
