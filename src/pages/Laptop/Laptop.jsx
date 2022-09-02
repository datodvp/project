import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Laptop = (props) => {
  const params = useParams();
  const LAPTOP_ID = params.id;

  return <div>Laptop</div>;
};

export default Laptop;
