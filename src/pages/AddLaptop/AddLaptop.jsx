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
    team_id: "",
    position_id: "",
    phone_number: "",
    email: "",
    laptop_name: "",
    laptop_image: "",
    laptop_brand_id: "",
    laptop_cpu: "",
    laptop_cpu_cores: "",
    laptop_cpu_threads: "",
    laptop_ram: "",
    laptop_hard_drive_type: "",
    laptop_state: "",
    laptop_price: "",
    token: "6cd88074ef568dd8ca75490f67b351c7",
  });

  const navigate = useNavigate();

  const checkUserFormVaildity = () => {
    let validated = true;
    const requiredFields = document
      .getElementById("userForm")
      .querySelectorAll("[required]");

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
    return true;
  };

  const checkLaptopFormValidity = () => {
    let validated = true;
    const requiredFields = document
      .getElementById("laptopForm")
      .querySelectorAll("[required]:not([type='radio'])");
    console.log(requiredFields);
    for (let field of requiredFields) {
      if (!field.checkValidity()) {
        field.style.border = "1px solid red";
        field.parentElement.style.color = "red";
        if (field.nextSibling) field.nextSibling.style.color = "red";
        // check if its upload input
        if (field.classList.contains("uploadInput")) {
          changeUploadInput(field);
        }

        validated = false;
      } else {
        field.style.border = "1px solid #8ac0e2";
        field.parentElement.style.color = "black";
        if (field.nextSibling) field.nextSibling.style.color = "black";

        if (field.classList.contains("uploadInput")) {
          changeUploadInput(field);
        }
      }
    }
    return validated;
  };

  const changeUploadInput = (field) => {
    if (!field.checkValidity()) {
      // button text color
      field.parentElement.style.color = "white";
      // container text color
      field.parentElement.previousSibling.style.color = "red";
      // container background color
      field.parentElement.previousSibling.parentElement.style.backgroundColor =
        "#FFF1F1";
      field.parentElement.previousSibling.parentElement.style.border =
        "2px dashed red";
    } else {
      // button text color
      field.parentElement.style.color = "white";
      // container text color
      field.parentElement.previousSibling.style.opacity = "0";
      // container background color
      field.parentElement.previousSibling.parentElement.style.backgroundColor =
        "#F7F7F7";
      field.parentElement.previousSibling.parentElement.style.border =
        "2px dashed #4386A9";
    }
  };

  const checkValidityOfField = (e) => {
    console.log(e);
    const field = e.target;
    if (!field.checkValidity()) {
      field.style.border = "1px solid red";
      field.parentElement.style.color = "red";
      if (field.nextSibling) field.nextSibling.style.color = "red";

      // check if its upload input
      if (field.classList.contains("uploadInput")) {
        changeUploadInput(field);
      }
    } else {
      field.style.border = "1px solid #8ac0e2";
      field.parentElement.style.color = "black";
      if (field.nextSibling) field.nextSibling.style.color = "black";

      // check if its upload input
      if (field.classList.contains("uploadInput")) {
        changeUploadInput(field);
      }
    }
    // checkUserFormVaildity();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedData = new FormData(e.target);

    const imageInput = document.querySelector('input[type="file"]');

    formattedData.append("token", formData.token);
    formattedData.append("laptop_image", imageInput.files[0]);

    let url = "https://pcfy.redberryinternship.ge/api/laptop/create";

    fetch(url, {
      method: "post",
      body: formattedData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
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
      <form
        onSubmit={handleSubmit}
        className="body"
        encType="multipart/form-data"
      >
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
          checkValidityOfField={checkValidityOfField}
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
              <button className="nextButton" onClick={checkLaptopFormValidity}>
                შენახვა
              </button>
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
