import React, { Component } from 'react';

class Questions extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <p>Questions</p>
                <button onClick={() => this.props.response(1, true)}>ok</button>
                <button onClick={() => this.props.response(1, false)}>ko</button>
            </div>
        )
    }
}
 
export default Questions;