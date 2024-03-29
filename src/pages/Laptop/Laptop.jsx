import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LeftArrow from '../../assets/photos/LeftArrow.svg';
import './styles.css';
import InfoLabel from './components/InfoLabel';

const Laptop = (props) => {
  const { token } = props;
  const params = useParams();
  const LAPTOP_ID = params.id;
  const laptopPath = `https://pcfy.redberryinternship.ge/api/laptop/${LAPTOP_ID}?token=${token}`;
  const [laptopInfo, setLaptopInfo] = useState();
  const [userInfo, setUserInfo] = useState();
  const [teamName, setTeamName] = useState();
  const [positionName, setPositionName] = useState();
  const [laptopBrand, setLaptopBrand] = useState();
  const navigate = useNavigate();
  let imagePath = '';

  // console.log(laptopInfo);
  // console.log(userInfo);

  // const getTeamList = () => {
  //   fetch("https://pcfy.redberryinternship.ge/api/teams")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

  const getImagePath = () => {
    if (!laptopInfo) return;
    imagePath = 'https://pcfy.redberryinternship.ge' + laptopInfo.image;
    return imagePath;
  };

  useEffect(() => {
    getImagePath();
    getLaptopBrand();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [laptopInfo]);

  const getTeamName = () => {
    if (!userInfo) return;
    fetch('https://pcfy.redberryinternship.ge/api/teams')
      .then((res) => res.json())
      .then((data) => data.data)
      .then((teams) => {
        for (const team of teams) {
          if (team.id === userInfo.team_id) {
            setTeamName(team.name);
          }
        }
      });
  };

  const getPositionName = () => {
    if (!userInfo) return;
    fetch('https://pcfy.redberryinternship.ge/api/positions')
      .then((res) => res.json())
      .then((data) => data.data)
      .then((positions) => {
        for (const position of positions) {
          if (position.id === userInfo.position_id) {
            setPositionName(position.name);
          }
        }
      });
  };

  const getLaptopBrand = () => {
    if (!laptopInfo) return;
    fetch('https://pcfy.redberryinternship.ge/api/brands')
      .then((res) => res.json())
      .then((data) => data.data)
      .then((brands) => {
        for (const brand of brands) {
          if (brand.id === laptopInfo.brand_id) {
            setLaptopBrand(brand.name);
          }
        }
      });
  };

  useEffect(() => {
    getTeamName();
    getPositionName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <img className="laptopImg" src={getImagePath()} alt="alt" />
              <div className="userInfo cont">
                <InfoLabel info="სახელი:">
                  {userInfo.name} {userInfo.surname}
                </InfoLabel>
                <InfoLabel info="თიმი:">{teamName}</InfoLabel>
                <InfoLabel info="პოზიცია:">{positionName}</InfoLabel>
                <InfoLabel info="მეილი:">{userInfo.email}</InfoLabel>
                <InfoLabel info="ტელ.ნომერი:">
                  {userInfo.phone_number}
                </InfoLabel>
              </div>
            </div>
          </div>
          <hr />
          <div className="secondRow">
            <div className="infoDivider bottom">
              <div className="laptopInfo cont">
                <InfoLabel info="ლეპტოპის სახელი:">{laptopInfo.name}</InfoLabel>
                <InfoLabel info="ლეპტოპის ბრენდი:">{laptopBrand}</InfoLabel>
                <InfoLabel info="RAM:">{laptopInfo.ram}</InfoLabel>
                <InfoLabel info="მეხსიერების ტიპი:">
                  {laptopInfo.hard_drive_type}
                </InfoLabel>
              </div>
              <div className="CPUInfo cont">
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
            <div className="infoDivider bottom">
              <div className="laptopState cont">
                <InfoLabel info="ლეპტოპის მდგომარეობა:">
                  {laptopInfo.state === 'new' ? 'ახალი' : 'მეორადი'}
                </InfoLabel>
                <InfoLabel info="ლეპტოპის ფასი:">
                  {laptopInfo.price} ₾
                </InfoLabel>
              </div>
              <div className="buyDate cont">
                <InfoLabel info="შეძენის რიცხვი:">
                  {laptopInfo.purchase_date
                    ? laptopInfo.purchase_date
                    : 'არ არის ინფო'}
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
