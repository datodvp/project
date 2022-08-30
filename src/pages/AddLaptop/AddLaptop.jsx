import LeftArrow from "../../assets/photos/LeftArrow.svg";
import Logo2 from "../../assets/photos/Logo2.svg";
import FormUserDetails from "./components/FormUserDetails";
import FormLaptopDetails from "./components/FormLaptopDetails";
import "./styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddLaptop = () => {
  const [step, setStep] = useState(0);
  const stepNames = ["თანამშრომლის ინფო", "ლეპტოპის მახასიათებლები"];
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    number: "",
    laptopName: "",
    CPUCores: "",
    CPUThreads: "",
    RAM: "",
    price: "",
    condition: "",
  });

  const navigate = useNavigate();

  const PageDisplay = () => {
    switch (step) {
      case 0:
        return (
          <FormUserDetails formData={formData} setFormData={setFormData} />
        );
      case 1:
        return (
          <FormLaptopDetails formData={formData} setFormData={setFormData} />
        );
      default:
        break;
    }
  };

  const formSubmit = () => {
    console.log(formData);
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
          <img src={LeftArrow} alt="arrow" />
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
        <div className="buttonsContainer">
          {/* If its first step of the form dont show Back button */}
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
          {/* If its last step of the form dont show Next button instead show Submit */}
          {step !== stepNames.length - 1 ? (
            <button
              className="nextButton"
              onClick={() => {
                setStep((prevStep) => prevStep + 1);
              }}
            >
              შემდეგი
            </button>
          ) : (
            <button className="nextButton" onClick={formSubmit}>
              შენახვა
            </button>
          )}
        </div>
      </div>
      <div className="footer">
        <img className="logo2" alt="arrow" src={Logo2} />
      </div>
    </div>
  );
};

export default AddLaptop;
