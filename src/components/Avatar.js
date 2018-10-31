import React from 'react';

const Avatars = (props) => (
   
    
    
    <div className="Avatar_avatar">
    { console.log(props)}
        <p>{props.avatar}</p>
        <img src={props.image}alt={props.avatar}/>
        <p> {`is alive :${props.isAlive}`}</p>
        <p>{props.player}</p>   
    </div>
)
export default Avatars;