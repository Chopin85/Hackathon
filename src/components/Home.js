import React, { Component } from 'react';
import Personnage from './Personnage';


class Home extends Component {
    state = { 
        idSelect: null,
        people2 : [],
        people : [
            {
                id: 1,
                avatar: "Le sportif",
                photo : "https://via.placeholder.com/200x200",
                gender: "male",
                skinColor: "light",
                player : ""
            },
            {
                id: 2,
                avatar: "La blonde",
                photo : "https://via.placeholder.com/200x200",
                gender: "male",
                skinColor: "light",
                player : ""
            },
            {
                id: 3,
                avatar: "Le noir",
                photo : "https://via.placeholder.com/200x200",
                gender: "male",
                skinColor: "light",
                player : ""
            },
            {
                id: 4,
                avatar: "Le geek",
                photo : "https://via.placeholder.com/200x200",
                gender: "male",
                skinColor: "light",
                player : ""
            },
            {
                id: 5,
                avatar: "Le rebelle",
                photo : "https://via.placeholder.com/200x200",
                gender: "female",
                skinColor: "light",
                player : ""
            },
            {
                id: 6,
                avatar: "Chef d'enteprise",
                photo : "https://via.placeholder.com/200x200",
                gender: "male",
                skinColor: "light",
                player : ""
            }
        ]
     }

     handelChange = (e) => {
         let prova = this.state.people.find(e => e.id === this.state.idSelect)
         prova.player = e.target.value
         //console.log("provaaaaa",prova)
         //console.log(this.state.people[0])
        //  this.setState(() => {
        //     people : [...this.state.people.filter(e => e.id !== prova.id), prova]
        // })
        this.setState(previousState => {

            //const a = previousState[index].name = "newNmae"
            return {
            people: 
            [...previousState.people.filter(e => e.id !== prova.id), prova]
            };
        });
        console.log("modif", this.state.people)
        if (e.target.key === 'Enter') {
            e.preventDefault()
        }
     }

     getId = (id) => {
         this.setState({idSelect : id})
     }

    render() { 
        console.log(this.state.idSelect)
        return ( 
            <div>
                
                {this.state.people.sort((a,b) => a.id-b.id).map((element , index) =>
                    <Personnage image={element.photo} avatar={element.avatar} getId={this.getId} id={element.id} key={index} method={this.handelChange} />
                )}
            </div>
         );
    }
}
 
export default Home;