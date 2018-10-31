import React from 'react';
import Avatars from './Avatar'

// import './finisn.css'


class Finish extends React.Component{

    state = {
        CurrentPlayers: this.props.listPlayers,
    }
    render() {
        console.log('finish', this.state.CurrentPlayers)
        return (
            <div>
                <h1>Finish</h1>
                {this.state.CurrentPlayers.map((element,index) => {
                return(
                    <Avatars dead={element.isAlive[1]} key={index} image={'/img/' + element.id + '.png'} avatar={element.avatar}  player= {element.player} />
                    )
                }
            )}
        </div>
        )
    }
    
}

export default Finish;