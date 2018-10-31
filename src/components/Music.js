import React, { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player'


export default class Music extends Component {
  render () {

    return (
      <div>
        <ReactAudioPlayer
          src="talking-heads-psycho-killer_cut.mp3"
          autoPlay
        />
      </div>
    );
  }
}
