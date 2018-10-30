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
        return (Math.floor(Math.random() * Math.floor(nbPlayers)));
    }

    getRandom = (elem) => {
    return (Math.floor(Math.random() * Math.floor(elem)))+1;
    }
    
    render() { 
        return ( 
            <div>
                <div>DeadJackpot</div>
                 <PlayersJackpot listPlayers={this.props.listPlayers} idPlayers={this.getRandomInt(this.props.listPlayers.length)}/>
                 <MyDeathJackpot listDeath={jsonDeath} idDeath={this.getRandom(jsonDeath.length)}/>
                 <Suplices listSuplices={jsonSuplices} idSuplice={this.getRandom(jsonSuplices.length)}/>
            </div> 
        );
    }
}
 
export default DeadJackpot;