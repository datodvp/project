import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Laptop = (props) => {
  const params = useParams();
  const LAPTOP_ID = params.id;
  console.log(LAPTOP_ID);
  return <div>Laptop</div>;
};

export default Laptop;
