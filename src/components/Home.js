import React, { Component } from 'react';
import Personnage from './Personnage';

import { Grid }  from '@material-ui/core';

import './home.css'
import Header from './Header-Home';

class Home extends Component {
    state = { 
        idSelect: null,
        people : this.props.listPlayers,
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


    render() { 
        // console.log(this.state.idSelect)
        return ( 
            <div className="Home">

                <Header />
                <div className="avatars">
                    {this.state.people.sort((a,b) => a.id-b.id).map((element , index) =>
                        <Personnage image={element.photo} avatar={element.avatar} getId={this.getId} id={element.id} key={index} method={this.handelChange} />
                    )}
                </div>
                <div className="buttonHome">
                    <button onClick ={() => this.props.startGame(this.state.people)}> Start Game</button>
                </div>

            </div>
            
        );
    }
}
    
export default Home;