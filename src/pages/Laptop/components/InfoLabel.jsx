import React from "react";

const InfoLabel = (props) => {
  const { info } = props;
  return (
    <div className="infoLabel">
      <p className="key">{info}</p>
      <p className="value">{props.children}</p>
    </div>
  );
};

export default InfoLabel;
