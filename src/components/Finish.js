import React from 'react';
import Avatars from './Avatar'

// import './finisn.css'
const titleStyle = {
    fontWeight: '100',
    paddingTop: '70px ',
    fontSize: 'calc(35px + 3vw)',
    color: 'white',
    fontWeight: '800',
    // position: 'relative',
    marginBottom: '15vh'
};

const h2Style = {
    fontSize: 'calc(18px + 3vw)',
    color: 'white'
}

class Finish extends React.Component{

    state = {
        CurrentPlayers: this.props.listPlayers,
    }
    render() {
        console.log('finish', this.state.CurrentPlayers)
        return (
            <div style={{textAlign:"center"}}>
                <h1 style={titleStyle}>Finish</h1>
                <div className="Avatar_finish">
                    {this.state.CurrentPlayers.map((element,index) => {
                        return(
                            <Avatars isAlive={true} key={index} image={'/img/' + element.id + '.png'} avatar={element.avatar}  player= {element.player} />
                        )}
                    )}
                </div>
                <h2 style={h2Style}>cool!!! You Survive</h2>
                <p>
                    <img src='https://media.giphy.com/media/2bUpP71bbVnZ3x7lgQ/giphy.gif' />
                </p>
        </div>
        )
    }
    
}

export default Finish;