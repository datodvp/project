import Button from "../../components/Button";
import LeftArrow from "../../assets/photos/LeftArrow.svg";
import Logo2 from "../../assets/photos/Logo2.svg";
import FormUserDetails from "./FormUserDetails";
import FormLaptopDetails from "./FormLaptopDetails";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddLaptop = () => {
  const [step, setStep] = useState(0);
  const stepNames = ["თანამშრომლის ინფო", "ლეპტოპის მახასიათებლები"];

  const navigate = useNavigate();

  const PageDisplay = () => {
    switch (step) {
      case 0:
        return <FormUserDetails />;
      case 1:
        return <FormLaptopDetails />;
    }
  };

  return (
    <div className="addLaptop">
      <div className="header">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="previousPage"
        >
          <img src={LeftArrow} />
        </button>
        {stepNames.map((stepName, index) => {
          return (
            <h4
              className={index === step ? "stepName active" : "stepName"}
              key={index}
            >
              {stepName}
            </h4>
          );
        })}
      </div>
      <div className="body">
        {PageDisplay()}
        {/* Buttons display for forms */}
        {step !== 0 && (
          <button
            className="prevButton"
            onClick={() => {
              setStep((prevStep) => prevStep - 1);
            }}
          >
            უკან
          </button>
        )}
        {step !== stepNames.length - 1 && (
          <button
            className="nextButton"
            onClick={() => {
              setStep((prevStep) => prevStep + 1);
            }}
          >
            შემდეგი
          </button>
        )}
      </div>
      <div className="footer">
        <img className="logo2" src={Logo2} />
      </div>
    </div>
  );
};

export default AddLaptop;
