import LeftArrow from "../../assets/photos/LeftArrow.svg";
import Logo2 from "../../assets/photos/Logo2.svg";
import FormUserDetails from "./components/FormUserDetails";
import FormLaptopDetails from "./components/FormLaptopDetails";
import "./styles.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import Success from "./components/Success";

const AddLaptop = (props) => {
  const TEAMS_API = "https://pcfy.redberryinternship.ge/api/teams";
  const BRANDS_API = "https://pcfy.redberryinternship.ge/api/brands";
  const CPUS_API = "https://pcfy.redberryinternship.ge/api/cpus";
  const POSITIONS_API = "https://pcfy.redberryinternship.ge/api/positions";
  const [brandList, setBrandList] = useState([]);
  const [CPUList, setCPUList] = useState([]);
  const [positionList, setPositionList] = useState([]);
  const [teamList, setTeamList] = useState([]);
  const [step, setStep] = useLocalStorage("step", 0);
  const stepNames = ["თანამშრომლის ინფო", "ლეპტოპის მახასიათებლები"];
  const [registrationFinished, setRegistrationFinished] = useState(false);
  const [formData, setFormData] = useLocalStorage("formData", {
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
    token: props.token,
  });

  const getData = async (url) => {
    const data = await fetch(url);
    return data;
  };

  useEffect(() => {
    // set TEAMS STATE
    let response = getData(TEAMS_API);
    response
      .then((res) => res.json())
      .then((resData) => {
        const { data } = resData;
        setTeamList(data);
      });

    // set BRANDS STATE
    response = getData(BRANDS_API);
    response
      .then((res) => res.json())
      .then((resData) => {
        const { data } = resData;
        setBrandList(data);
      });

    // set CPUS STATE
    response = getData(CPUS_API);
    response
      .then((res) => res.json())
      .then((resData) => {
        const { data } = resData;
        setCPUList(data);
      });

    // set POSITIONS STATE
    response = getData(POSITIONS_API);
    response
      .then((res) => res.json())
      .then((resData) => {
        const { data } = resData;
        setPositionList(data);
      });

    // check radio inputs if they are checked  and fix them after first load

    checkRadioInputs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    return validated;
  };

  const checkLaptopFormValidity = () => {
    let validated = true;
    const requiredFields = document
      .getElementById("laptopForm")
      .querySelectorAll("[required]:not([type='radio'])");
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

  const checkRadioInputs = () => {
    const radionInps = document.querySelectorAll('input[type="radio"]');
    // set radio checked for hard drive
    for (const radioInp of radionInps) {
      if (radioInp.value === formData.laptop_hard_drive_type) {
        radioInp.checked = true;
      }
    }
    // set radio checked for laptop state
    for (const radioInp of radionInps) {
      if (radioInp.value === formData.laptop_state) {
        radioInp.checked = true;
      }
    }
  };

  const checkRadioInputField = (e) => {
    let textContainer = e.target.parentElement.parentElement.previousSibling;

    textContainer.style.color = "black";
    textContainer.querySelector("img").style.display = "none";
  };

  const checkRadioInputsValidity = (e) => {
    const requiredFields = document
      .getElementById("laptopForm")
      .getElementsByClassName("radioContainer");

    for (let container of requiredFields) {
      let inputFieldInvalid = container.nextSibling.querySelector(
        'input[type="radio"]:invalid'
      );
      if (inputFieldInvalid) {
        container.style.color = "red";
        container.querySelector("img").style.display = "block";
      }

      let inputFieldValid = container.nextSibling.querySelector(
        'input[type="radio"]:valid'
      );
      if (inputFieldValid) {
        container.style.color = "black";
        container.querySelector("img").style.display = "none";
      }
    }
  };

  const changeUploadInput = (field) => {
    function bytesConvertToSize(fileSize) {
      let fSExt = ["Bytes", "kb", "mb", "gb"],
        i = 0;
      while (fileSize > 900) {
        fileSize /= 1024;
        i++;
      }
      return Math.round(fileSize * 100) / 100 + " " + fSExt[i];
    }

    if (!field.checkValidity()) {
      // button text color
      field.parentElement.style.color = "white";
      // container text color
      field.parentElement.previousSibling.style.color = "red";
      // container image display
      field.parentElement.previousSibling.previousSibling.style.display =
        "block";
      // container background color
      field.parentElement.previousSibling.parentElement.style.backgroundColor =
        "#FFF1F1";
      field.parentElement.previousSibling.parentElement.style.border =
        "2px dashed red";
    } else {
      // hide button
      field.parentElement.style.opacity = "0";
      // container text color
      field.parentElement.previousSibling.style.opacity = "0";
      // container image display
      field.parentElement.previousSibling.previousSibling.style.display =
        "none";
      // container background color
      field.parentElement.previousSibling.parentElement.style.backgroundColor =
        "#F7F7F7";

      const fileName = field.files[0].name;
      let fileSize = field.files[0].size;

      fileSize = bytesConvertToSize(fileSize);

      document.getElementsByClassName("photoInfoContainer")[0].style.display =
        "flex";
      field.parentElement.previousSibling.parentElement.style.border = "none";
      document.getElementsByClassName("photoInfoLabel")[0].innerHTML = fileName;
      document.getElementsByClassName("photoSizeLabel")[0].innerHTML = fileSize;
    }
  };

  const checkValidityOfField = (e) => {
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
        // restart inputs after succesfull upload
        setRegistrationFinished(true);
        setFormData({
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
      })
      .catch((error) => {
        throw error;
      });
  };
  if (registrationFinished) {
    return <Success />;
  }
  return (
    <div className="addLaptop">
      <div className="header">
        <button
          onClick={() => {
            if (step > 0) {
              setStep((prev) => prev - 1);
            } else {
              navigate(-1);
            }
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
              onClick={() => {
                // checks if click is on second form step and if it is checks first fields before letting user go to next page
                if (index > 0 && checkUserFormVaildity()) {
                  setStep(index);
                } else {
                  setStep(0);
                }
              }}
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
          teamList={teamList}
          positionList={positionList}
        />
        <FormLaptopDetails
          step={step}
          formData={formData}
          setFormData={setFormData}
          checkValidityOfField={checkValidityOfField}
          // checkRadioInputsValidity={checkRadioInputsValidity}
          checkRadioInputField={checkRadioInputField}
          brandList={brandList}
          CPUList={CPUList}
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
                    window.scrollTo(0, 0);
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
              <button
                className="nextButton"
                onClick={() => {
                  checkLaptopFormValidity();
                  checkRadioInputsValidity();
                }}
              >
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
