import React, { Component } from 'react';
import Reponse from './Reponse';

class Questions extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Reponse response={this.props.response} question={this.props.question}/>
            </div>
          );
    }
}
 
export default Questions;