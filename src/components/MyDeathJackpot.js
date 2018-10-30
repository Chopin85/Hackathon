import React, {Component} from 'react';

class MyDeathJackpot extends Component {
    state = { 
        death:{}
     }
     getDeath(){
        this.props.listDeath.filter(element => {
            if (element.key === this.props.idDeath) {
                this.setState({death :element})
            }

     }
        )}
        componentDidMount() {
            this.getDeath()
        }

    render() { 
        return (  
            <div>
                <p>{this.state.death.mort}</p>
                <img src={this.state.death.url} alt={this.state.death.mort}/> 
             </div>
        );
    }
}
 
export default MyDeathJackpot;