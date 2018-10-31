import React from 'react';
import Avatars from './Avatar'
import './dead.css'

const titleStyle = {
    color: 'red',
    fontSize: 'calc(12px + 5vw)',
    padding: '30px',
    textAlign: 'center',
    fontFamily: 'Creepster',   
};

class Finish extends React.Component{

    state = {
        CurrentPlayers: this.props.listPlayers,
    }
    render() {
        console.log('finish', this.state.CurrentPlayers)
        return (
            <div style={{textAlign:"center"}}>
                <h1 style={titleStyle}>You survived</h1>
                <div className="Avatar_finish">
                    {this.state.CurrentPlayers.map((element,index) => {
                        return(
                            <Avatars isAlive={true} key={index} image={'/img/' + element.id + '.png'} avatar={element.avatar}  player= {element.player} />
                        )}
                    )}
                </div>
                <div className="divDead">
                    <button className="buttonDead" onClick ={() => window.location.reload()} >Rejouer</button>
                </div>
        </div>
        )
    }
    
}

export default Finish;