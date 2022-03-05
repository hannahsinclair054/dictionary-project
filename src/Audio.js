import React from "react";
import ReactAudioPlayer from "react-audio-player";
export default function Audio(props) {
  console.log(props);
  if (props.audio) {
    return (
      <div className="Audio">
        <ReactAudioPlayer src={props.audio} controls />
      </div>
    );
  } else {
    return null;
  }
}
