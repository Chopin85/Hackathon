import React, { Component } from 'react';
import './App.css';
import Personnage from './Personnage';
import questions from './questions';
import players from './players';
import { element } from 'prop-types';


class App extends Component {
  render() {

    return(
      players.map(element =>(
        <Personnage avatar ={element.avatar} image ={element.photo} />
      )
        
    )
    )
  }
}

export default App;
