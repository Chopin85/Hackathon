import React from 'react';



const Personnage = ({avatar, image, handleChange}) => (
    <div>
    <div>{avatar}</div>
    <img src={image}alt={avatar}/>
    <form>
        <input type="text" onChange={handleChange} />
    </form>
    </div>
)
export default Personnage;