import React, {Component} from "react";
import Radio from '@material-ui/core/Radio';
//import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';


import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import './question.css'



class Reponse extends Component {
     verifyReponse = (resp, player) => {
        ((resp === this.props.question.correctAnswer) ?  this.props.response(player , true) : this.props.response(player, false))
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
            <div style={{background: '#212121'}}>
            <p style={{color: "White", display: 'flex', justifyContent: 'center', fontSize:'20px'}} >{this.props.question.question}</p>
            <div className="response">
            <RadioGroup
                // className="radio"
                // style={{color: "White"}}
                aria-label="Gender"
                name="gender1"
                value={this.state.selectedValue}
                onChange={this.handleChange}
                >
                {this.props.question.ansewers.map((x, index) =>
                        // <div className="radio">
                      
                      
                        // <Radio className="check"
                        //     checked={this.state.selectedValue === index.toString()}
                        //     onChange={this.handleChange}
                        //     value={index.toString()}
                        //     name="radio-button-demo"
                        //     aria-label="A"
                        // />
                        // {x}
                        
                        // </div>
                        <FormControlLabel value={index.toString()} control={<Radio color="secondary"/>} label={x}/>
                )}
                {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" /> */}

                </RadioGroup>
              <br/>
            </div>
              <div className="button-response" style={{display: 'flex', justifyContent: 'center'}}>
                <button className="btn-response" onClick={() => this.verifyReponse(parseInt(this.state.selectedValue), 1)} variant="contained">
                    Valid
                </button>
              </div>
            </div>
          );
    }
}


export default Reponse;

