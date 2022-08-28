import Logo from "../../assets/photos/Logo.svg";
import DesktopLandingImage from "../../assets/photos/DesktopLandingImage.png";
import ButtonLink from "../../components/ButtonLink";

const Landing = () => {
  return (
    <div className="landingPage">
      <img className="landingLogo" src={Logo} alt="Logo" />
      <img className="landingImage" src={DesktopLandingImage} alt="Landing" />
      <ButtonLink path="/addLaptop" width={387}>
        ჩანაწერის დამატება
      </ButtonLink>
      <ButtonLink path="/Laptops" width={387}>
        ჩანაწერების სია
      </ButtonLink>
    </div>
  );
};

export default Landing;
