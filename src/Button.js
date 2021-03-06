import React from "react";

function Button(props) {
  return (
    <button
      className={props.className}
      id={props.id}
      onClick={props.handleClick}
    >
      {props.name}
    </button>
  );
}

export default Button;
