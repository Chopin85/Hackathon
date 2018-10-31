import React from 'react';

import './question.css'
import './finish.css'


let className= '';

class Avatars extends React.Component{
    
    render() { 
        this.props.isAlive?className="Avatar_avatar":className="Avatar_dead"       
        return(
            
        <div>   
            <div className={className}>            
                <p>{this.props.avatar}</p>
                <img src={this.props.image}alt={this.props.avatar}/>
                {/* <p> {`is alive :${props.isAlive}`}</p> */}
                <p>{this.props.player}</p>   
            </div>
        </div>
        )
    }
    
}
export default Avatars; 