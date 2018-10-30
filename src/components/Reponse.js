import React, {Component} from "react";
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';

class Reponse extends Component {
     verifyReponse = (resp, player) => {
        (resp === this.props.question.correctAnswer) ?  this.props.response(player , true) : this.props.response(player, false)
        this.setState({selectedValue: ''})
    }

    state = {
        selectedValue: '',
      };
    
      handleChange = event => {
        this.setState({ selectedValue: event.target.value });
      };
    
    render() {

        return ( 
            <div>
            <p>{this.props.question.question}</p>
            {/* {this.props.question.ansewers.map((x, index) =>
            <button key={index} onClick={() => this.verifyReponse(index, 1)}>
              {x}
            </button>
            )} */}

            
                {this.props.question.ansewers.map((x, index) =>
                    <div key={index} >
                        <Radio
                            checked={this.state.selectedValue === index.toString()}
                            onChange={this.handleChange}
                            value={index.toString()}
                            name="radio-button-demo"
                            aria-label="A"
                        />
                        <p>{x}</p>
                    </div>
                )}

              <br/>
            <Button onClick={() => this.verifyReponse(parseInt(this.state.selectedValue), 1)} variant="contained">
                ---Valid---
            </Button>
          </div>
          );
    }
}


export default Reponse;

