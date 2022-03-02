import React from "react";
import "./meaning.css";
export default function Meaning(props) {
  console.log(props.meaning);

  return (
    <div className="Meanings">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                {definition.definition}
                <br />
                <p className="examples">{definition.example}</p>
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
