import React, {Component} from 'react';
import './deadJackpot.css';

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
            window.scrollTo(0,0)
        }
    render() { 
        return (  
            <div className="blocDeath roulette">
                <div className="roulette-child">
                    <hr/>
                    <p className="titles-roulette">{this.state.death.mort}</p>
                    <img className="giphy-img" src={this.state.death.url} alt={this.state.death.mort}/> 
                    <hr/>
                </div>
             </div>
        );
    }
}
 
export default MyDeathJackpot;