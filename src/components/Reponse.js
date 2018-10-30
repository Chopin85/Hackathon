import React, {Component} from "react";
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

class Reponse extends Component {
     verifyReponse = (resp, player) => {
        (resp === this.props.question.correctAnswer) ?  this.props.response(player , true) : this.props.response(player, false)
    }

        state = {
          checkedA: false,
        };
      
        handleChange = name => event => {
          this.setState({ [name]: event.target.checked });
        };
      

        
        
    render() {
        console.log(this.state.checkedA)
        return ( 
            <div>
            <p>{this.props.question.question}</p>
            {this.props.question.ansewers.map((x, index) =>
            <button key={index} onClick={() => this.verifyReponse(index, 1)}>
              {x}
            </button>
            )}
            <Checkbox
                checked={this.state.checkedA}
                onChange={this.handleChange('checkedA')}
                value="checkedA"
              />firklcrehc
              <br/>
            <Button variant="contained">
                ---Valid---
            </Button>
          </div>
          );
    }
}


export default Reponse;

