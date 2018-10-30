import React, { Component } from 'react';

import Reponse from './Reponse';
import Avatars from './Avatar';

class Questions extends Component {
    state = {
    }
    render() { 
        console.log(this.props.listPlayers)
        return ( 
            <div>
                {this.props.listPlayers.map((e,i) => 
                    <Avatars key={i} avatar={e.avatar} photo={e.photo} />
                    )}
                    <Reponse getReponse={this.props.getReponse} question={this.props.question} />



            </div>
        );
    }
}
export default Questions;   
