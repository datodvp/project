import ErrorImg from "../../../assets/photos/Error.svg";

const FormLaptopDetails = () => {
  return (
    <div className="formLaptopDetails">
      <div className="container">
        <div className="uploadPhoto">
          <img src={ErrorImg} alt="error" className="error img" />
          <label className="text">ჩააგდე ან ატვირთე ლეპტოპის ფოტო</label>
          <label className="uploadLabel">
            ატვირთე
            <input type="file" className="uploadInput" />
          </label>
        </div>
        <div className="field laptopName">
          <label className="labelLaptopName">
            <div className="laptopNameContainer">
              სახელი <input className="input laptopName" />
              <label className="laptopName error">
                {"ლათინური ასოები, ციფრები, !@#$%^&*()_+="}
              </label>
            </div>
          </label>
          <div className="field laptopBrand">
            <div className="laptopBrandcontainer">
              <select defaultValue={1} className="select laptopBrand">
                <option disabled value="1">
                  ბრენდი
                </option>
                <option value="2">Asus</option>
                <option value="3">Intel</option>
              </select>
            </div>
          </div>
        </div>
        <hr className="dividerLine" />
        <div className="CPUField">
          <div className="inputsContainer">
            <select defaultValue={1} className="select CPUBrand choose1">
              <option disabled value="1">
                CPU
              </option>
              <option value="2">Intel</option>
              <option value="3">AMD</option>
            </select>
            <label className="labelCPUCores choose">
              <div className="CPUCoresContainer">
                CPU-ს ბირთვი{" "}
                <input className="inputCPUCores" placeholder="14" />
                <label className="CPUCores error">{"მხოლოდ ციფრები"}</label>
              </div>
            </label>
            <label className="labelCPUThreads choose">
              <div className="CPUThreadsContainer">
                CPU-ს ნაკადი{" "}
                <input className="inputCPUThreads" placeholder="64" />
                <label className="CPUThreads error">{"მხოლოდ ციფრები"}</label>
              </div>
            </label>
          </div>
        </div>
        <div className="memoryInputsWrapper">
          <div className="memoryInputsContainer">
            <label className="labelRAM">
              {"ლეპტოპის RAM (GB)"}
              <input type="number" className="RAM" />
              <label className="error">მხოლოდ ციფრები</label>
            </label>
            <div className="hardDiskInput">
              <label className="name">მეხსიერების ტიპი</label>
              <div className="flexContainer">
                <label className="labelSSD">
                  <input type="radio" className="ssd" name="hardDisk" /> SSD
                </label>
                <label className="labelHDD">
                  <input type="radio" className="hdd" name="hardDisk" /> HDD
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
            <input type="number" className="price" />
            <label className="error">მხოლოდ ციფრები</label>
          </label>
        </div>
        <div className="conditionInputsWrapper">
          <div className="conditionInputsContainer">
            <div className="conditionInput">
              <label className="name">მეხსიერების ტიპი</label>
              <div className="flexContainer">
                <label className="labelNew">
                  <input type="radio" className="new" name="condition" /> ახალი
                </label>
                <label className="labelOld">
                  <input type="radio" className="old" name="condition" />{" "}
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
