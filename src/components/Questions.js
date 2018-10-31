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
            <div className="background-question">
                <Header />
                
                <div className="bloc-presentation2">
                    <p className="text-question1 bloc-text">Lors de la cérémonie, tout ne s’est pas passé comme prévu, vous avez invoqué Freddy Krueger et vous n’auriez pas du... Une seule chance pour se sortir vivant de ce mauvais pas, répondre correctement aux questions de l’esprit maléfique. Une mauvaise réponse et c’est la mort assurée d’un membre de votre équipe.</p>
                    <div className="bloc-text">
                        <h2 className="text-question">Ne tombez pas dans ses griffes !</h2>
                        <p className="text-question">Brûlé vif,  Freddy revient d'entre les morts afin de poursuivre son œuvre démoniaque. À la tombée de la nuit, il rode autour de votre maison et au moment propice vous attrape pour vous assassiner sauvagement..</p>
                    </div>
                    <div className="img-esprit"></div>
                </div>

                <div className="Questions">
                {this.state.CurrentPlayers.map((element,index) => {
                    return(
                        <Avatars dead={element.isAlive} className="Avatar_questions" key={index} image={'/img/' + element.id + '.png'} avatar={element.avatar}  player= {element.player} />
                )})}
                </div>
                <Reponse class="response" response={this.props.response} question={this.props.question}/>
            </div>
        );
    }
}

export default Questions;