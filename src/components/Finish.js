import React from 'react';
import Avatars from './Avatar'

export default () => {
    return (
        <div>
            {this.state.CurrentPlayers.map((element,index) => {
            return(
                <Avatars dead={element.isAlive} className="Avatar_questions" key={index} image={'/img/' + element.id + '.png'} avatar={element.avatar}  player= {element.player} />
        )})}
    </div>
    )
}