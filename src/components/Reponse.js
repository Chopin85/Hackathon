import React from "react";

const Reponse = props => {
  return (
    <div>
      <p>{props.question.question}</p>
      <button onClick={() => props.getReponse(props.question.ansewers[0])}>
        {props.question.ansewers[0]}
      </button>
      <button onClick={() => props.getReponse(props.question.ansewers[1])}>
        {props.question.ansewers[1]}
      </button>
      <button onClick={() => props.getReponse(props.question.ansewers[2])}>
        {props.question.ansewers[2]}
      </button>
    </div>
  );
};
export default Reponse;
