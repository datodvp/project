import React from "react";
import SuccessImg from "../../../assets/photos/Success.svg";
import { Link } from "react-router-dom";

const Success = () => {
  const laptopsPagePath = "/Laptops";
  const landingPagePath = "/";
  return (
    <div className="successContainer">
      <div className="popup">
        <img src={SuccessImg} alt="success" className="successImg" />
        <h2 className="successMessage">ჩანაწერი დამატებულია!</h2>
        <Link to={laptopsPagePath}>
          <button className="listButton">სიაში გადაყვანა</button>
        </Link>
        <Link to={landingPagePath}>
          <button className="landingButton">მთავარი</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
