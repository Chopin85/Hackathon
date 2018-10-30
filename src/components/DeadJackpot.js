import React, { Component } from 'react';
import PlayersJackpot from './PlayersJackpot'

class DeadJackpot extends Component {
    
    state = { 
        idDeadPlayer :0
     }
    //en attente du nombre de joueurs dans le tableau 

    getRandomInt = (nbPlayers) => {
       
        let idDeadPlayer = (Math.floor(Math.random() * Math.floor(nbPlayers)))+1;
        this.setState({idDeadPlayer})
        return  idDeadPlayer
      }
    componentDidMount(){
        console.log('did mount ',this.state.idDeadPlayer);
        
    }
    render() { 
        
        return ( 
            <div>
                <div>DeadJackpot</div>
                 <PlayersJackpot listPlayers={this.props.listPlayers} idPlayers={this.getRandomInt(this.props.listPlayers.length)}/> 
            </div> 
        );
    }
}
 
export default DeadJackpot;