import React, { Component } from 'react';
import PlayersJackpot from './PlayersJackpot'
import MyDeathJackpot from './MyDeathJackpot';
import Suplices from './Suplices';
import Grid from '@material-ui/core/Grid';

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
            <div className="death-roulette">
                <p className="tooBad">Too bad, you died !</p>
                <Grid container >
                    <Grid item md={4} >
                        <PlayersJackpot listPlayers={this.props.listPlayers} idPlayers={this.getRandomInt(this.props.listPlayers.length)}/>
                    </Grid>
                    <Grid item md={4}>
                        <MyDeathJackpot listDeath={jsonDeath} idDeath={this.getRandom(jsonDeath.length)}/>
                    </Grid>
                    <Grid item md={4} >
                        <Suplices listSuplices={jsonSuplices} idSuplice={this.getRandom(jsonSuplices.length)}/>
                    </Grid>
                 </Grid>           
            </div> 
        );
    }
}
 
export default DeadJackpot;