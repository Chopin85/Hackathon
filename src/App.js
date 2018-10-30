import React, { Component } from 'react';
<<<<<<< HEAD
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
=======

import './App.css';

import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
>>>>>>> 0728b450cfd641e5c0a09a29fc5ec8e0ed87bc39
  }
}

export default App;
