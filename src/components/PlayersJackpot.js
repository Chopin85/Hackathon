import React, {Component} from 'react';

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
            <div>
            
            
        <p>{this.props.listPlayers[this.props.idPlayers].avatar}</p>
        <img src={this.props.listPlayers[this.props.idPlayers].photo} alt={this.props.listPlayers[this.props.idPlayers].avatar}/> 
        <p>{this.props.listPlayers[this.props.idPlayers].player}</p>
     
        <div>{this.props.listPlayers[this.props.idPlayers].idPlayers}</div>
    </div>
        );
    }
}
 
export default PlayersJackpot;