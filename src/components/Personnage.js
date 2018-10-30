import React from 'react';

import './home.css'

const Personnage = ({getId, id, avatar, image, method}) => (
    <div className="Personnage">
        <p>{avatar}</p>
        <img src={image}alt={avatar}/>    
        <input placeholder='Nom du Joueur' onClick={() => getId(id)} type="text" onChange={method} />    
    </div>
)
export default Personnage;