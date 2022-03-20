import React from "react";
import Synonyms from "./Synonyms";
import "./meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meanings">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                <strong>Definition:</strong> {definition.definition}
                <br />{" "}
                <p className="examples">
                  <strong>Example: </strong> {definition.example}
                </p>
                <Synonyms synonyms={definition.synonyms} />
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
