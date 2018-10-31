import React, { Component } from 'react';
import Questions from './components/Questions';
import DeadJackpot from './components/DeadJackpot';
import Home from './components/Home';
import Finish from './components/Finish';
import './App.css';

import jsonQuestions from './constants/questions';
import jsonPlayers from './constants/players';

class App extends Component {

  state = {
    CurrentPlayers :[],
    step: -1,
    cptQuestions : 0
  }

  componentDidMount() {
    this.setState({
      step: 1
    })
  }

  startGame =(players)=>{
    const filterPlayers = players.filter(element => element.player !== "")
    this.setState( () => ({
      CurrentPlayers :filterPlayers,
      step: 2
    }));
  }

  response = (idPlayer, isCorrectAnswer) => {
    if ((isCorrectAnswer === true) && (this.state.cptQuestions === 2))
    {
      this.setState(previousState => ({
        cptQuestions: previousState.cptQuestions + 1,
        step: 4
      }));
    }
    else if (isCorrectAnswer === true) {
      this.setState(previousState => ({cptQuestions: previousState.cptQuestions + 1}));
    }
    else {
      this.setState(() => ({
        step: 3
      }));      
    }
  }

  render() {
    console.log(this.state.CurrentPlayers);
    if (this.state.step === 2) {
      console.log("step2", this.state);
      
      return <Questions CurrentPlayers={this.state.CurrentPlayers} listPlayers={jsonPlayers} question={jsonQuestions[this.state.cptQuestions]} response={this.response}/>
    }
    else if (this.state.step === 3) {
      return <DeadJackpot listPlayers={this.state.CurrentPlayers} />
    }
    else if (this.state.step === 1) {
      return <Home listPlayers={jsonPlayers} startGame ={this.startGame}/>
    }
    else if (this.state.step === 4) {
      return <Finish listPlayers={jsonPlayers[0]} />
    }
    else {
      return <div>Error Step</div>
    }
  }

}

export default App;
