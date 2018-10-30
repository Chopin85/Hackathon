import React, { Component } from 'react';

class Home extends Component {
    state = { 
        people : [
            {
                id: 1,
                avatar: "Le sportif",
                photo : "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_1280.png",
                gender: "male",
                skinColor: "light",
                player : ""
            },
            {
                id: 2,
                avatar: "La blonde",
                photo : "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_1280.png",
                gender: "male",
                skinColor: "light",
                player : ""
            },
            {
                id: 3,
                avatar: "Le noir",
                photo : "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_1280.png",
                gender: "male",
                skinColor: "light",
                player : ""
            },
            {
                id: 4,
                avatar: "Le geek",
                photo : "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_1280.png",
                gender: "male",
                skinColor: "light",
                player : ""
            },
            {
                id: 5,
                avatar: "Le rebelle",
                photo : "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_1280.png",
                gender: "female",
                skinColor: "light",
                player : ""
            },
            {
                id: 6,
                avatar: "Chef d'enteprise",
                photo : "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_1280.png",
                gender: "male",
                skinColor: "light",
                player : ""
            }
        ]
     }

     handelChange = (e) => {
         this.setState({
            people[0].player : e.target.value,
         })
     }

    render() { 
        return ( 
            <div>
                
            </div>
         );
    }
}
 
export default Home;