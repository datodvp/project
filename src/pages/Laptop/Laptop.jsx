import { useState } from "react";
import { useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import LeftArrow from "../../assets/photos/LeftArrow.svg";
import "./styles.css";
import imege from "../../assets/photos/DesktopLandingImage.png";
import InfoLabel from "./components/InfoLabel";

const Laptop = (props) => {
  const { token } = props;
  const params = useParams();
  const LAPTOP_ID = params.id;
  const laptopPath = `https://pcfy.redberryinternship.ge/api/laptop/${LAPTOP_ID}?token=${token}`;
  const [laptopInfo, setLaptopInfo] = useState();
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();

  console.log(laptopInfo);
  console.log(userInfo);

  const getLaptopInfo = () => {
    fetch(laptopPath)
      .then((res) => res.json())
      .then((data) => {
        const laptopInfo = data.data;
        setLaptopInfo(laptopInfo.laptop);
        setUserInfo(laptopInfo.user);
      });
  };
  useEffect(() => {
    getLaptopInfo();
  }, []);
  if (!laptopInfo && !userInfo) {
    return <h1>Loading...</h1>;
  }
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
      <div className="body">
        <div className="infoContainer">
          <div className="firstRow">
            <div className="infoDivider">
              <img className="laptopImg" src={imege} alt="alt" />
              <div className="userInfo">
                <InfoLabel info="სახელი:">
                  {userInfo.name} {userInfo.surname}
                </InfoLabel>
                <InfoLabel info="თიმი:"></InfoLabel>
                <InfoLabel info="პოზიცია:"></InfoLabel>
                <InfoLabel info="მეილი:">{userInfo.email}</InfoLabel>
                <InfoLabel info="ტელ.ნომერი:">
                  {userInfo.phone_number}
                </InfoLabel>
              </div>
            </div>
          </div>
          <hr />
          <div className="secondRow">
            <div className="infoDivider">
              <div className="laptopInfo">
                <InfoLabel info="ლეპტოპის სახელი:">{laptopInfo.name}</InfoLabel>
                <InfoLabel info="ლეპტოპის ბრენდი:"></InfoLabel>
                <InfoLabel info="RAM:">{laptopInfo.ram}</InfoLabel>
                <InfoLabel info="მეხსიერების ტიპი:">
                  {laptopInfo.hard_drive_type}
                </InfoLabel>
              </div>
              <div className="CPUInfo">
                <InfoLabel info="CPU:">{laptopInfo.cpu.name}</InfoLabel>
                <InfoLabel info="CPU-ს ბირთვი:">
                  {laptopInfo.cpu.cores}
                </InfoLabel>
                <InfoLabel info="CPU-ს ნაკადი:">
                  {laptopInfo.cpu.threads}
                </InfoLabel>
              </div>
            </div>
          </div>
          <hr />
          <div className="thirdRow">
            <div className="infoDivider">
              <div className="laptopState">
                <InfoLabel info="ლეპტოპის მდგომარეობა:"></InfoLabel>
                <InfoLabel info="ლეპტოპის ფასი:">
                  {laptopInfo.price} ₾
                </InfoLabel>
              </div>
              <div className="buyDate">
                <InfoLabel info="შეძენის რიცხვი:">
                  {laptopInfo.purchase_date
                    ? laptopInfo.purchase_date
                    : "არ არის ინფო"}
                </InfoLabel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptop;
