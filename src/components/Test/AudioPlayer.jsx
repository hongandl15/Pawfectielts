import React from 'react'
import ReactAudioPlayer from 'react-audio-player';

const AudioPlayer = (props) => {

    return (
        <ReactAudioPlayer
            src="https://study4.com/media/c18/section1-part1.mp3"
            autoPlay
            controls
            className="ReactAudioPlayer m-auto mt-5">
        </ReactAudioPlayer>
    )
}

export default AudioPlayer


