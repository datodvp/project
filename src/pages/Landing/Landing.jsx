import Logo from "../../assets/photos/Logo.svg";
import DesktopLandingImage from "../../assets/photos/DesktopLandingImage.png";
import Button from "../../components/Button";

const Landing = () => {
  return (
    <div className="landingPage">
      <img className="landingLogo" src={Logo} alt="Logo" />
      <img className="landingImage" src={DesktopLandingImage} alt="Landing" />
      <Button path="/addLaptop" width={387}>
        ჩანაწერის დამატება
      </Button>
      <Button path="/Laptops" width={387}>
        ჩანაწერების სია
      </Button>
    </div>
  );
};

export default Landing;
