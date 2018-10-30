import React, {Component} from 'react';
import './deadJackpot.css'

class PlayersJackpot extends Component {
    // state = { 
    //     player:{}
    //  }
    //  getPlayer(){
    //      console.log("random" + this.props.CurrentPlayers)
    //     this.props.listPlayers.filter(element => {
    //         if (element.id === this.props.idPlayers) {
    //             this.setState({player :element})
    //         }

    //  }
        // )}
        // componentDidMount() {
        //     this.getPlayer()
        // }

    render() { 
        return (  
            <div className="blocPlayer roulette">
                <div className="roulette-child">
                <hr/>
                <p className="titles-roulette">{this.props.listPlayers[this.props.idPlayers].avatar}</p>
                <img src={this.props.listPlayers[this.props.idPlayers].photo} alt={this.props.listPlayers[this.props.idPlayers].avatar}/> 
                <p>{this.props.listPlayers[this.props.idPlayers].player}</p>
                <hr/>
                </div>
            </div>
        );
    }
}
 
export default PlayersJackpot;