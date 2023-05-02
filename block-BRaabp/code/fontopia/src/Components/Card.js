import React from "react";

const Card = (props) => {
  let style = {
    fontSize: 38,
    fontFamily: props.font,
  };
  return (
    <article className="card">
      <h2>{props.font}</h2>
      <p style={style}>
        {props.prev
          ? props.prev
          : "Whereas disregard and contempt for human rights have resulted"}
      </p>
    </article>
  );
};

export default Card;
