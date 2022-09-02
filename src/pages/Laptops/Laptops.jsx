import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftArrow from "../../assets/photos/LeftArrow.svg";
import LaptopComponent from "./components/LaptopComponent";
import "./styles.css";

const Laptops = (props) => {
  const url = `https://pcfy.redberryinternship.ge/api/laptops?token=${props.token}`;
  const [laptopsList, setLaptopsList] = useState([]);
  const navigate = useNavigate();

  const getLaptopsList = () => {
    // if laptops are available already dont re-render to stop looping
    if (laptopsList.length > 0) return;

    fetch(url, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        let laptopsList = data.data;

        // if laptop list is emtly dont re-render, as it will loop infinitely
        if (laptopsList.length) {
          setLaptopsList(laptopsList);
        }
      });
  };

  getLaptopsList();

  return (
    <div className="laptops">
      <div className="header">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="previousPage"
        >
          <img src={LeftArrow} alt="arrow" />
        </button>
        <h2 className="title">ჩანაწერების სია</h2>
      </div>
      <div className="body">
        <div className="laptopsContainer">
          {laptopsList.length &&
            laptopsList.map((laptopInfo) => {
              return (
                <LaptopComponent
                  key={laptopInfo.laptop.id}
                  laptopInfo={laptopInfo}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Laptops;
