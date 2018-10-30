import React, { Component } from 'react';
import PlayersJackpot from './PlayersJackpot'

class DeadJackpot extends Component {
    
    state = {  }
    //en attente du nombre de joueurs dans le tableau 

    getRandomInt = (nbPlayers) => {
        return (Math.floor(Math.random() * Math.floor(nbPlayers)))+1;
      }
    
    render() { 
        console.log("blabla" + this.props.listPlayers)
        return ( 
            <div>
                 <PlayersJackpot listPlayers={this.props.listPlayers} idPlayers={this.getRandomInt(4)}/> 
            </div> 
        );
    }
}
 
export default DeadJackpot;