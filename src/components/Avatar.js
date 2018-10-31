import React from 'react';

const Avatars = (props) => (
    
    <div className="Avatar_avatar">
        <p>{props.avatar}</p>
        <img src={props.image}alt={props.avatar}/> 
        <p>{props.player}</p>   
    </div>
)
export default Avatars;