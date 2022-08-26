import React from "react";

const Button = (props) => {
  return (
    <button class="button" style={{ width: props.width }}>
      {props.children}
    </button>
  );
};

export default Button;
