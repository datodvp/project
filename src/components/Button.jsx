import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  let path = props.path;
  console.log(path);
  return (
    <Link to={path}>
      <button className="button" style={{ width: props.width }}>
        {props.children}
      </button>
    </Link>
  );
};

export default Button;
