import Logo from "../../assets/photos/Logo.svg";
import DesktopLandingImage from "../../assets/photos/DesktopLandingImage.png";
import Button from "../../components/Button";

const Landing = () => {
  return (
    <div className="landingPage">
      <img class="landingLogo" src={Logo} alt="Logo" />
      <img class="landingImage" src={DesktopLandingImage} alt="Landing" />
      <Button width={387}>ჩანაწერის დამატება</Button>
      <Button width={387}>ჩანაწერების სია</Button>
    </div>
  );
};

export default Landing;
