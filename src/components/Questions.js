import React, { Component } from 'react';
import Reponse from './Reponse';
import Header from './Header-Small';

class Questions extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <div className="bloc-presentation">
                    <p className="text-presentation">Lors de la cérémonie, tout ne s’est pas passé comme prévu, vous avez invoqué « .. » et vous n’auriez pas du.. Une seule chance pour se sortir vivant de ce mauvais pas, répondre correctement aux questions de l’esprit maléfique. Une mauvaise réponse et c’est la mort assurée d’un membre de votre équipe.</p>
                </div>
                <Reponse response={this.props.response} question={this.props.question}/>
            </div>
          );
    }
}
 
export default Questions;