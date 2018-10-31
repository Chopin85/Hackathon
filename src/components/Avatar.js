import React from 'react';

import './question.css'

const Avatars = (props) => (
    
    <div className="Avatar_avatar">
        <p>{props.avatar}</p>
        {(props.isAlive) ?(
            <img src={props.image}alt={props.avatar}/>)
        :(
        <img className ="dead" src={props.image}alt={props.avatar}/>)

        }

        <p>{props.player}</p>

        
        <p>{props.isAlive?"vivant":"mort"}</p>
    </div>
)
export default Avatars;