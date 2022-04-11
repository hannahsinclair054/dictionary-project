import React from "react";
import Example from "./Example";
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
              <div>
                <p>
                  <strong>Definition:</strong> {definition.definition}
                  <br />{" "}
                  <p className="examples">
                    <Example example={definition.example} />
                  </p>
                  <Synonyms synonyms={definition.synonyms} />
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
