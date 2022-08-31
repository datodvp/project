import { useEffect, useState } from "react";
import ErrorImg from "../../../assets/photos/Error.svg";

const FormLaptopDetails = (props) => {
  const {
    formData,
    setFormData,
    step,
    checkValidityOfField,
    checkRadioInputsValidity,
    checkRadioInputField,
  } = props;
  const [previewImage, setPreviewImage] = useState("");

  const handlePreviewImage = (e) => {
    const imageContainer = document.getElementsByClassName("uploadPhoto")[0];
    const FINISHED_UPLOAD = 2;
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === FINISHED_UPLOAD) {
        setPreviewImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div
      id="laptopForm"
      className="formLaptopDetails"
      style={step === 1 ? { display: "flex" } : { display: "none" }}
    >
      <div className="container">
        <label
          className="uploadPhoto"
          htmlFor="imageInput"
          style={{
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#F7F7F7",
            backgroundImage: `url(${previewImage})`,
            backgroundSize: "cover",
          }}
        >
          <img src={ErrorImg} alt="error" className="error img" />
          <label className="text">ჩააგდე ან ატვირთე ლეპტოპის ფოტო</label>
          <div className="uploadLabel">
            ატვირთე
            <input
              id="imageInput"
              required
              type="file"
              className="uploadInput"
              name="laptop_image"
              accept=".png, jpeg, .svg"
              onChange={(e) => {
                checkValidityOfField(e);
                handlePreviewImage(e);
                setFormData({ ...formData, laptop_image: e.target.files[0] });
              }}
            />
          </div>
        </label>
        <div className="field laptopName">
          <label className="labelLaptopName">
            <div className="laptopNameContainer">
              სახელი{" "}
              <input
                name="laptop_name"
                onBlur={checkValidityOfField}
                required
                className="input laptopName"
                value={formData.laptop_name}
                onChange={(e) => {
                  setFormData({ ...formData, laptop_name: e.target.value });
                }}
              />
              <label className="laptopName error">
                {"ლათინური ასოები, ციფრები, !@#$%^&*()_+="}
              </label>
            </div>
          </label>
          <div className="field laptopBrand">
            <div className="laptopBrandcontainer">
              <select
                onBlur={checkValidityOfField}
                name="laptop_brand_id"
                required
                value={formData.laptop_brand_id}
                onChange={(e) => {
                  setFormData({ ...formData, laptop_brand_id: e.target.value });
                }}
                className="select laptopBrand"
              >
                <option disabled value="">
                  ბრენდი
                </option>
                <option value="1">AMD</option>
                <option value="2">Intel</option>
              </select>
            </div>
          </div>
        </div>
        <hr className="dividerLine" />
        <div className="CPUField">
          <div className="inputsContainer">
            <select
              onBlur={checkValidityOfField}
              name="laptop_cpu"
              required
              value={formData.laptop_cpu}
              onChange={(e) => {
                setFormData({ ...formData, laptop_cpu: e.target.value });
              }}
              className="select CPUBrand choose1"
            >
              <option disabled value="">
                CPU
              </option>
              <option value="Intel Core i3">Intel Core i3</option>
              <option value="2">AMD</option>
            </select>
            <label className="labelCPUCores choose">
              <div className="CPUCoresContainer">
                CPU-ს ბირთვი{" "}
                <input
                  onBlur={checkValidityOfField}
                  className="inputCPUCores"
                  name="laptop_cpu_cores"
                  placeholder="14"
                  required
                  value={formData.laptop_cpu_cores}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      laptop_cpu_cores: e.target.value,
                    });
                  }}
                />
                <label className="CPUCores error">{"მხოლოდ ციფრები"}</label>
              </div>
            </label>
            <label className="labelCPUThreads choose">
              <div className="CPUThreadsContainer">
                CPU-ს ნაკადი{" "}
                <input
                  onBlur={checkValidityOfField}
                  className="inputCPUThreads"
                  name="laptop_cpu_threads"
                  placeholder="64"
                  required
                  value={formData.laptop_cpu_threads}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      laptop_cpu_threads: e.target.value,
                    });
                  }}
                />
                <label className="CPUThreads error">{"მხოლოდ ციფრები"}</label>
              </div>
            </label>
          </div>
        </div>
        <div className="memoryInputsWrapper">
          <div className="memoryInputsContainer">
            <label className="labelRAM">
              {"ლეპტოპის RAM (GB)"}
              <input
                onBlur={checkValidityOfField}
                type="number"
                className="RAM"
                name="laptop_ram"
                required
                value={formData.laptop_ram}
                onChange={(e) => {
                  setFormData({ ...formData, laptop_ram: e.target.value });
                }}
              />
              <label className="error">მხოლოდ ციფრები</label>
            </label>
            <div className="hardDiskInput">
              <div className="flexContainer radioContainer">
                <label style={{ marginRight: 15 }} className="name radioError">
                  მეხსიერების ტიპი
                </label>
                <img
                  className="errorImg"
                  src={ErrorImg}
                  style={{ width: 22, height: 22 }}
                />
              </div>
              <div className="flexContainer">
                <label className="labelSSD">
                  <input
                    type="radio"
                    required
                    value="SSD"
                    className="ssd"
                    name="laptop_hard_drive_type"
                    onChange={(e) => {
                      checkRadioInputField(e);
                      setFormData({
                        ...formData,
                        laptop_hard_drive_type: e.target.value,
                      });
                    }}
                  />{" "}
                  SSD
                </label>
                <label className="labelHDD">
                  <input
                    type="radio"
                    value="HDD"
                    className="hdd"
                    name="laptop_hard_drive_type"
                    onChange={(e) => {
                      checkRadioInputField(e);
                      setFormData({
                        ...formData,
                        laptop_hard_drive_type: e.target.value,
                      });
                    }}
                  />{" "}
                  HDD
                </label>
              </div>
            </div>
          </div>
        </div>
        <hr className="dividerLine" />
        <div className="laptopInfoContainer">
          <label className="labelDate">
            {"შეძენის რიცხვი (არჩევითი)"}
            <input type="date" className="date" />
          </label>
          <label className="labelPrice">
            {"ლეპტოპის ფასი"}
            <input
              onBlur={checkValidityOfField}
              type="number"
              className="price"
              name="laptop_price"
              required
              value={formData.laptop_price}
              onChange={(e) => {
                setFormData({ ...formData, laptop_price: e.target.value });
              }}
            />
            <label className="error">მხოლოდ ციფრები</label>
          </label>
        </div>
        <div className="conditionInputsWrapper">
          <div className="conditionInputsContainer">
            <div className="conditionInput">
              <div className="flexContainer radioContainer">
                <label style={{ marginRight: 15 }} className="name radioError">
                  მდგომარეობა
                </label>
                <img
                  className="errorImg"
                  src={ErrorImg}
                  style={{ width: 22, height: 22 }}
                />
              </div>
              <div className="flexContainer">
                <label className="labelNew">
                  <input
                    type="radio"
                    className="new"
                    name="laptop_state"
                    value="new"
                    required
                    onClick={(e) => {
                      checkRadioInputField(e);
                      setFormData({
                        ...formData,
                        laptop_state: e.target.value,
                      });
                    }}
                  />{" "}
                  ახალი
                </label>
                <label className="labelOld">
                  <input
                    type="radio"
                    className="old"
                    name="laptop_state"
                    required
                    value="old"
                    onClick={(e) => {
                      checkRadioInputField(e);
                      setFormData({
                        ...formData,
                        laptop_state: e.target.value,
                      });
                    }}
                  />{" "}
                  მეორადი
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLaptopDetails;
