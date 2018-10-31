import React, { Component } from 'react';
import Reponse from './Reponse';
import Header from './Header-Small';
import Avatars from './Avatar';

import './question.css'


class Questions extends Component {
    state = { 
        CurrentPlayers: this.props.CurrentPlayers, 
    }
    render() { 
        console.log('props',this.props.listPlayers)
        return ( 
            <div >
                <Header />
                <div className="Questions">
                {this.state.CurrentPlayers.map((element,index) => {
                    return(
                        <Avatars dead={element.isAlive} className="Avatar_questions" key={index} image={'/img/' + element.id + '.png'} avatar={element.avatar}  player= {element.player} />
                )})}
                </div>
                <Reponse response={this.props.response} question={this.props.question}/>
            </div>
        );
    }
}

export default Questions;