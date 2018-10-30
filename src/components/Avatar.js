import React from 'react';

const Avatars = (props) => (
    <div>
        <p>{props.avatar}</p>
        <img src={props.photo}alt={props.avatar}/>    
    </div>
)
export default Avatars;