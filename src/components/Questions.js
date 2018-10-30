import React, { Component } from 'react';
import Reponse from './Reponse';

class Questions extends Component {
    state = {}
    render() {
        return (
            <div>
                <Reponse getReponse={this.props.getReponse} question={this.props.question} />
            </div>
        );
    }
}

export default Questions;