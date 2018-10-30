import React from 'react';
const Personnage = ({getId, id, avatar, image, method}) => (
    <div>
    <div>{avatar}</div>
    <img src={image}alt={avatar}/>
    
        <input placeholder={avatar} onClick={() => getId(id)} type="text" onChange={method} />
    
    </div>
)
export default Personnage;