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
                    <Reponse getReponse={this.props.response} question={this.props.question} />
                    {/* <button onClick={() => this.props.response(1, true)}>ok</button> */}
                    {/* <button onClick={() => this.props.response(1, false)}>ko</button> */}
            </div>
        );
    }
}
export default Questions;   
