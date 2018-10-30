import React from 'react';
import players from '../constants/players';

const Avatars = (props) => (
    <div>
        <p>{props.avatar}</p>
        <img src={props.photo}alt={props.avatar}/>    
    </div>
)
export default Avatars;