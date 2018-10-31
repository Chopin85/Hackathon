import React, {Component} from 'react';

class Suplices extends Component {
    state = { 
        suplice:{}
     }
     getSuplice(){
        this.props.listSuplices.filter(element => {
            if (element.key === this.props.idSuplice) {
                this.setState({suplice :element})
            }

     }
        )}
        componentDidMount() {
            this.getSuplice()
        }

    render() { 
        return (  
            <div className="blocSuplice roulette">
            <div className="roulette-child">
                <hr/>
                <p className="titles-roulette">{this.state.suplice.mort}</p>
                {/* <img src={this.state.suplice.url} alt={this.state.suplice.mort}/>  */}
                <hr/>
                </div>
             </div>
        );
    }
}
 
export default Suplices;