import React, { Component } from 'react';
import PlayersJackpot from './PlayersJackpot'
import MyDeathJackpot from './MyDeathJackpot';
import Suplices from './Suplices';
import Grid from '@material-ui/core/Grid';

import jsonDeath from '../constants/DeathType';
import jsonSuplices from '../constants/SuplicesType';

let  idDeadPlayer =0;
class DeadJackpot extends Component {
    
    state = { 
        idDeadPlayer :0
     }
    //en attente du nombre de joueurs dans le tableau 

    getRandomInt = (nbPlayers) => {
<<<<<<< HEAD
        return (Math.floor(Math.random() * Math.floor(nbPlayers)));
    }

=======
         idDeadPlayer = (Math.floor(Math.random() * Math.floor(nbPlayers)));
        return idDeadPlayer
      }
>>>>>>> 4d9482ded0306833271d4d192437a415582c0d96
    getRandom = (elem) => {
       
    return (Math.floor(Math.random() * Math.floor(elem)))+1;
    }

    render() { 
        return ( 
            <div className="death-roulette">
                <p className="tooBad">Too bad, you died !</p>
                <Grid container >
                    <Grid item xs={12} md={4} >
                        <PlayersJackpot listPlayers={this.props.listPlayers} idPlayers={this.getRandomInt(this.props.listPlayers.length)}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <MyDeathJackpot listDeath={jsonDeath} idDeath={this.getRandom(jsonDeath.length)}/>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <Suplices listSuplices={jsonSuplices} idSuplice={this.getRandom(jsonSuplices.length)}/>
                    </Grid>
                 </Grid>
                 <Grid>
                 <button onClick ={() => this.props.whoIsDead(idDeadPlayer)} >relance le jeux</button>  
                 </Grid>
                          
            </div> 
        );
    }
}
 
export default DeadJackpot;