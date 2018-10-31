import React from 'react';


const divStyle = {
    padding: '2%',
    marginBottom: '4%',
};

const pStyle = {
    fontFamily: 'Creepster',
    fontSize: 'calc(12px + 10vw)',
    textAlign: 'center',
    color: 'red'
};
  

const Header = () => (
    <div style={divStyle}>
        <p style={pStyle}>my horror story</p>  
    </div>
)
export default Header;