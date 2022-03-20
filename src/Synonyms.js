import React from "react";
import "./Synonyms.css";
export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <p className="Synonyms">
        {props.synonyms.map(function (synonyms, index) {
          return (
            <p>
              Similar:{" "}
              <span className="word" key={index}>
                {" "}
                {synonyms}
              </span>
            </p>
          );
        })}
      </p>
    );
  } else {
    return null;
  }
}
