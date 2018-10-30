// import React from 'react';


// const PlayersJackpot = ({idPlayers, listPlayers}) => (
    
//     <div>
//         {listPlayers.filter(element => {
//             if (element.id == idPlayers) {
//             <div>{element.avatar}</div>
//             }
//         })}
//         <div>{idPlayers}</div>
//     </div>

// )
// export default PlayersJackpot;
import React, {Component} from 'react';
import Personnage from './Personnage';

class PlayersJackpot extends Component {
    state = { 
        player:{}
     }
     getPlayer(){
        this.props.listPlayers.filter(element => {
            if (element.id == this.props.idPlayers) {
                this.setState({player :element})
            }

     }
        )}
        componentDidMount() {
            this.getPlayer()
        }

    render() { 
        console.log(this.state.player.avatar)
        return (  
            <div>
            
            
        <p>{this.state.player.avatar}</p>
        <img src={this.state.player.photo}alt={this.state.player.avatar}/> 
        <p>{this.state.player.player}</p>
     
        <div>{this.props.idPlayers}</div>
    </div>
        );
    }
}
 
export default PlayersJackpot;