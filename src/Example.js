import React from "react";

export default function Example(props) {
  console.log(props.example);

  if (props.example) {
    return (
      <p className="Example">
        {props.example.map(function (example, index) {
          return (
            <p>
              Similar:{" "}
              <ul key={index}>
                <li> {example}</li>
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
