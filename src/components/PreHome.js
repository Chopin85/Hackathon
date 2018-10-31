import React, { Component } from 'react'


const titleStyle = {
    fontFamily: 'Creepster',
    fontSize: 'calc(12px + 10vw)',
    color: 'red',
    position: 'relative',
    top: '15vh'
};

const subtitleStyle = {
    fontWeight: '100',
    fontSize: 'calc(12px + 3vw)',
    color: 'white',
    position: 'relative',
    top: '15vh'
};

const buttonStyle = {
    position: 'relative',
    top: '40vh',
    background: 'none',
    border: 'none',
    fontFamily: 'Creepster',
    fontSize: '5vw',
    width: '50%',
    color: 'white'
};

const fingerStyle = {
    width: '200px',
    filter: 'invert(90%)',
    margin: '0% 2%'
};

const fingerStyle2 = {
    width: '200px',
    filter: 'invert(90%)',
    transform: 'scaleX(-1)',
    margin: '0% 2%'
};

export default class PreHome extends Component {
  render () {

    return (
      <div style={{textAlign: 'center'}}>
        <div style={{position: 'fixed', zIndex: '-99', width: '100%', height: '100%', filter: 'grayscale(90%)'}}>
          <iframe frameborder="0" height="100%" width="100%"
            src="https://youtube.com/embed/NixMabI45s0?autoplay=1&controls=0&showinfo=0&autohide=1&loop=1&modestbranding=1&rel=0">
          </iframe>
        </div>
        <div style={{position: 'absolute', background: 'radial-gradient(transparent 20%, black 70%)', width: '100%', height: '100vh', opacity: '0.85'}} ></div>
        <div style={subtitleStyle}>This is</div>
        <div style={titleStyle}>MY HORROR STORY</div>
        <button style={buttonStyle} onClick={() => this.props.setStep()}>
            <img style={fingerStyle} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Skeleton_hand_pointing.svg/2000px-Skeleton_hand_pointing.svg.png" alt="Finger"/>
            ENTER
            <img style={fingerStyle2} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Skeleton_hand_pointing.svg/2000px-Skeleton_hand_pointing.svg.png" alt="Finger"/>
        </button>
      </div>
    );
  }
}