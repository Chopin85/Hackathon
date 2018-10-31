import React from 'react';
import Avatars from './Avatar'
import './dead.css'

const titleStyle = {

    margin: '5vh 0',
    fontFamily: 'Creepster',
    fontSize: 'calc(12px + 5vw)',
    textAlign: 'center',
    color: 'red'
    };


const h2Style = {
    fontSize: 'calc(5px + 2vw)',
    color: 'white',
    margin: '2vh 0'
}

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
                <h2 style={h2Style}>Congrats!</h2>
                <p>
                    <img src='https://media.giphy.com/media/2bUpP71bbVnZ3x7lgQ/giphy.gif' />
                </p>
                <div className="divDead">
                    <button className="buttonDead" onClick ={() => window.location.reload()} >Rejouer</button>
                </div>
        </div>
        )
    }
    
}

export default Finish;