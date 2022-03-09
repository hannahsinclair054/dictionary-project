import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonyms, index) {
          return <li key={index}>Similar:{" "}{synonyms}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
