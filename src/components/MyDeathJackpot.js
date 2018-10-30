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
            <div className="blocDeath roulette">
                <div className="roulette-child">
                <hr/>
                <p className="titles-roulette">{this.state.death.mort}</p>
                <img src={this.state.death.url} alt={this.state.death.mort}/> 
                <hr/>
                </div>
             </div>
        );
    }
}
 
export default MyDeathJackpot;