import React from 'react';

import { Grid }  from '@material-ui/core';

import './home.css'

const Personnage = ({getId, id, avatar, image, method}) => (
    <div className="Personnage_home">
    <Grid container spacing={8} justify="center" flex-direction="row">
                    
                    {/* <div className="avatars_home"> */}
                        <Grid item xs={3}  className="item">
        
        <img src={image}alt={avatar}/>
        <p>{avatar}</p>
        <input placeholder='Nom du Joueur' onClick={() => getId(id)} type="text" onChange={method} />    
        </Grid>
                    {/* </div> */}
                    
    </Grid>
    </div>
)
export default Personnage;