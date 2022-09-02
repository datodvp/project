import { useState } from "react";
import { useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import LeftArrow from "../../assets/photos/LeftArrow.svg";
import "./styles.css";

const Laptop = (props) => {
  const { token } = props;
  const params = useParams();
  const LAPTOP_ID = params.id;
  const laptopPath = `https://pcfy.redberryinternship.ge/api/laptop/${LAPTOP_ID}?token=${token}`;
  const [laptopInfo, setLaptopInfo] = useState({});
  const navigate = useNavigate();

  const getLaptopInfo = () => {
    fetch(laptopPath)
      .then((res) => res.json())
      .then((data) => {
        const laptopInfo = data.data;
        setLaptopInfo(laptopInfo);
      });
  };
  useEffect(() => {
    getLaptopInfo();
  }, []);

  return (
    <div className="laptop">
      <div className="header">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="previousPage"
        >
          <img src={LeftArrow} alt="arrow" />
        </button>
        <h2 className="title">ლეპტოპის ინფო</h2>
      </div>
      <div className="body"></div>
    </div>
  );
};

export default Laptop;
