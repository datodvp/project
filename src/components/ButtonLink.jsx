import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = (props) => {
  let path = props.path;
  return (
    <Link to={path}>
      <button className="button" style={{ width: props.width || 300 }}>
        {props.children}
      </button>
    </Link>
  );
};

export default ButtonLink;
