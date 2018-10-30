import React from "react";


const Reponse = props => {

    const verifyReponse = (resp, player) => {
        (resp === props.question.correctAnswer) ?  props.response(player , true) : props.response(player, false)
    }

    console.log(props)
  return (
    <div>
      <p>{props.question.question}</p>
      {props.question.ansewers.map((x, index) =>
      <button key={index} onClick={() => verifyReponse(index, 1)}>
        {x}
      </button>
      )}
    </div>
  );
};
export default Reponse;
