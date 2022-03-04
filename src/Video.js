import React, { Component } from "react";
import ReactPlayer from "react-player";

class Video extends Component {
  render() {
    return (
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player fixed-bottom"
          url="videos/aaron-burden-fgmf2Eyrwm4-unsplash-best.mp4"
          width="100%"
          height="100%"
          controls={true}
          playing
          muted
          config={{
            file: {
              attributes: {
                autoPlay: true,
                muted: true,
              },
            },
          }}
        />
      </div>
    );
  }
}
export default Video;
