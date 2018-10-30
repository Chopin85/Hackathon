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
            <div>
                <p>{this.state.suplice.mort}</p>
                {/* <img src={this.state.suplice.url} alt={this.state.suplice.mort}/>  */}
             </div>
        );
    }
}
 
export default Suplices;