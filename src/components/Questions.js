import React, { Component } from 'react';
import Reponse from './Reponse';
import Header from './Header-Small';

class Questions extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <Reponse response={this.props.response} question={this.props.question}/>
            </div>
          );
    }
}
 
export default Questions;