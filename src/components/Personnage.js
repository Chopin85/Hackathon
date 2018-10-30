import React from 'react';

import './home.css'

const Personnage = ({getId, id, avatar, image, method}) => (
    <div className="Personnage_home">
          <img src={image}alt={avatar}/>
          <p>{avatar}</p> 
          <input placeholder='Nom du Joueur' onFocus={() => getId(id)} type="text" onChange={method} />
       </div>
)
export default Personnage;