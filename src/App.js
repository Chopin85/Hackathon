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
    step: -1
  }

  componentDidMount() {
    this.setState({
      step: 4
    })
  }

  render() {
    if (this.state.step === 2) {
      return <Questions listPlayers ={jsonPlayers} question ={jsonQuestions[0]} />
    }
    else if (this.state.step === 3) {
        return <DeadJackpot listPlayers ={jsonPlayers} />
    }
    else if (this.state.step === 1) {
      return <Home listPlayers ={jsonPlayers} />
    }
    else if (this.state.step === 4) {
      return <Finish listPlayers ={jsonPlayers[0]} />
    }
    else {
      return <div>Error Step</div>
    }
  }

}

export default App;
