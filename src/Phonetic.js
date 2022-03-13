import React from "react";
import Audio from "./Audio";
import "./Phonetic.css";
export default function Phonetic(props) {
  console.log(props);
  return (
    <div className="Phonetic ">
      <div className="row align-items-center">
        <div className=" pro col">{props.phonetic.text} </div>
        <div className="col Audio">
          <Audio audio={props.phonetic.audio} />
        </div>
      </div>
    </div>
  );
}
