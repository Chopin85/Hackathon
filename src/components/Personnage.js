import React from 'react';

import './home.css'

const Personnage = ({getId, id, avatar,player, image, method}) => (
    <div className="Personnage_home">
        <p>{avatar}</p> 
        <img src={image}alt={avatar}/>
        <p>{player}</p>
        <input placeholder='Nom du Joueur' onFocus={() => getId(id)} type="text" onChange={method} />
    </div>
)
export default Personnage;