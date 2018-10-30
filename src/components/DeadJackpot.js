import React, { Component } from 'react';
import PlayersJackpot from './PlayersJackpot'
import MyDeathJackpot from './MyDeathJackpot';
import Suplices from './Suplices';

import jsonDeath from '../constants/DeathType';
import jsonSuplices from '../constants/SuplicesType';


class DeadJackpot extends Component {
    
    state = {  }
    //en attente du nombre de joueurs dans le tableau 

    getRandomInt = (nbPlayers) => {
<<<<<<< HEAD
        return (Math.floor(Math.random() * Math.floor(nbPlayers)))+1;
=======
        return (Math.floor(Math.random() * Math.floor(nbPlayers)));
      }

    getRandom = (elem) => {
    return (Math.floor(Math.random() * Math.floor(elem)))+1;
>>>>>>> 9768b5938a9d246bd873bd70684ade6db985998c
    }
    
    render() { 
        return ( 
            <div>
                <div>DeadJackpot</div>
<<<<<<< HEAD
                <PlayersJackpot listPlayers={this.props.listPlayers} idPlayers={this.getRandomInt(4)}/> 
=======
                 <PlayersJackpot listPlayers={this.props.listPlayers} idPlayers={this.getRandomInt(this.props.listPlayers.length)}/>
                 <MyDeathJackpot listDeath={jsonDeath} idDeath={this.getRandom(jsonDeath.length)}/>
                 <Suplices listSuplices={jsonSuplices} idSuplice={this.getRandom(jsonSuplices.length)}/>
>>>>>>> 9768b5938a9d246bd873bd70684ade6db985998c
            </div> 
        );
    }
}
 
export default DeadJackpot;