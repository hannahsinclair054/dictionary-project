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
              <ul key={index}>
                <li> {synonyms}</li>
              </ul>
            </p>
          );
        })}
      </p>
    );
  } else {
    return null;
  }
}
