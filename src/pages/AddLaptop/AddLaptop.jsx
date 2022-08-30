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

  const checkUserFormVaildity = () => {
    let validated = true;
    console.log("shemowmeba");
    const requiredFields = document
      .getElementById("userForm")
      .querySelectorAll("[required]");
    console.log(requiredFields);

    for (let field of requiredFields) {
      if (!field.checkValidity()) {
        field.style.border = "1px solid red";
        field.parentElement.style.color = "red";
        if (field.nextSibling) field.nextSibling.style.color = "red";

        validated = false;
      } else {
        field.style.border = "1px solid #8ac0e2";
        field.parentElement.style.color = "black";
        if (field.nextSibling) field.nextSibling.style.color = "black";
      }
    }
    return validated;
  };

  const checkValidityOfField = () => {
    checkUserFormVaildity();
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
      <form className="body">
        <FormUserDetails
          step={step}
          formData={formData}
          setFormData={setFormData}
          checkValidityOfField={checkValidityOfField}
        />
        <FormLaptopDetails
          step={step}
          formData={formData}
          setFormData={setFormData}
        />
        {/* Buttons display for forms */}
        <div className="buttonsContainer">
          {/* If its first step of the form dont show Back button */}
          {step !== 0 && (
            <button
              type="button"
              className="prevButton"
              onClick={() => {
                setStep((prevStep) => prevStep - 1);
              }}
            >
              უკან
            </button>
          )}
          {step !== stepNames.length - 1 ? (
            <>
              <button
                type="button"
                className="nextButton"
                onClick={() => {
                  if (checkUserFormVaildity()) {
                    setStep((prevStep) => prevStep + 1);
                  }
                }}
              >
                შემდეგი
              </button>
            </>
          ) : (
            <>
              {/* This part of small string for some reason changes behaviour of submit button (this is actually a question
                for stack overflow but i need to atriculate it better yet)  */}
              {""}
              <button className="nextButton">შენახვა</button>
            </>
          )}
          {/* If its last step of the form dont show Next button instead show Submit */}
        </div>
      </form>
      <div className="footer">
        <img className="logo2" alt="arrow" src={Logo2} />
      </div>
    </div>
  );
};

export default AddLaptop;
