import React, { Component } from 'react';
import Personnage from './Personnage';
import Header from './Header-Home'

import './home.css'

class Home extends Component {

    // constructor () {
    //     super();
    //     console.log("constructor");
    // }

    state = { 
        idSelect: null,
        people : this.props.listPlayers
    }

    handelChange = (e) => {
        let prova = this.state.people.find(e => e.id === this.state.idSelect)
        prova.player = e.target.value

        this.setState(previousState => {

            //const a = previousState[index].name = "newNmae"
            return {
            people: 
            [...previousState.people.filter(e => e.id !== prova.id), prova]
            };
        });
        if (e.target.key === 'Enter') {
            e.preventDefault()
        }
    }

    getId = (id) => {
        this.setState({idSelect : id})
    }

    start = () => {
        if(this.state.people.filter(e => e.player.length !== 0).length > 1)
            this.props.startGame(this.state.people)
    }

    componentDidMount(){
        window.scrollTo(0,0)
    }

    render() { 
        return ( 
            <div className="Home">
                <Header />
                <div className="bloc-presentation">
                    <p className="text-presentation">Vous avez toujours rêvé d’invoquer les esprits , ce soir c’est Halloween, inscrivez-vous à la prochaine session avec vos amis. Frissons garantis !</p>
                </div>
                <div className="avatars_home">
                    {this.state.people.sort((a,b) => a.id-b.id).map((element , index) =>
                        <Personnage image={'/img/' + element.id + '.png'} avatar={element.avatar}  player= {element.player} getId={this.getId} id={element.id} key={index} method={this.handelChange} />
                    )}
                </div>
                <div className="buttonHome_home">
                    <button onClick ={this.start}> Start Game</button>
                </div>
            </div>
        );
    }
}
    
export default Home;