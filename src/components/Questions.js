import React, { Component } from 'react';
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
            </div>
        );
    }
}
export default Questions;   