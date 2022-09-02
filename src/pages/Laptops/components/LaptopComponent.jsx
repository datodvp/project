import React from "react";
import { Link } from "react-router-dom";

const LaptopComponent = (props) => {
  const { laptopInfo } = props;
  const { laptop, user } = laptopInfo;
  const getImgUrl = (imagePath) => {
    const defaultUrl = "https://pcfy.redberryinternship.ge";
    return defaultUrl + imagePath;
  };

  const createLaptopPath = () => {
    const path = "/Laptop/";
    const laptopPath = path + `${laptop.id}`;

    return laptopPath;
  };

  return (
    <div className="laptopComponent">
      <img
        src={getImgUrl(laptop.image)}
        alt="laptopImg"
        className="laptopImg"
      />
      <div className="laptopInfo">
        <p className="name">
          {user.name} {user.surname}
        </p>
        <p className="laptopName">{laptop.name}</p>
        <Link to={createLaptopPath()} className="moreInfo">
          მეტის ნახვა
        </Link>
      </div>
    </div>
  );
};

export default LaptopComponent;
