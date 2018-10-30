import React from 'react';


const divStyle = {
    padding: '1%',
    marginBottom: '2%',
};

const pStyle = {
    fontFamily: 'Creepster',
    fontSize: 'calc(12px + 1vw)',
    textAlign: 'center',
    color: 'red'
};
  

const Header = () => (
    <div style={divStyle}>
        <p style={pStyle}>my horror story</p>  
    </div>
)
export default Header;