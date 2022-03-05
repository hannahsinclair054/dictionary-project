import React from "react";
import Audio from "./Audio";
export default function Phonetic(props) {
  console.log(props);
  return (
    <div className="Phonetic">
      {props.phonetic.text}
      <section className="Audio">
        <Audio audio={props.phonetic.audio} />
      </section>{" "}
    </div>
  );
}
