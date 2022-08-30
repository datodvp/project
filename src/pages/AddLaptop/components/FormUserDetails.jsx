import React from "react";

const FormUserDetails = (props) => {
  const { formData, setFormData, step, checkValidityOfField } = props;

  return (
    <div
      id="userForm"
      className="formUserDetails"
      style={step === 0 ? { display: "flex" } : { display: "none" }}
    >
      <div className="field name">
        <label className="labelName">
          <div className="container">
            <p className="error">სახელი</p>{" "}
            <input
              className="input name"
              name="name"
              required
              value={formData.name}
              onBlur={checkValidityOfField}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
            />
            <label className="name error">
              მინიმუმ 2 სიმბოლო, ქართული ასოები
            </label>
          </div>
        </label>
        <label className="labelSurname">
          <div className="container">
            გვარი{" "}
            <input
              className="input surname"
              name="surname"
              required
              value={formData.surname}
              onBlur={checkValidityOfField}
              onChange={(e) => {
                setFormData({ ...formData, surname: e.target.value });
              }}
            />
            <label className="surname error">
              მინიმუმ 2 სიმბოლო, ქართული ასოები
            </label>
          </div>
        </label>
      </div>
      <div className="field team">
        <select
          defaultValue={""}
          className="select team"
          onBlur={checkValidityOfField}
          required
        >
          <option disabled value="">
            თიმი
          </option>
          <option value="1">დეველოპმენტი</option>
          <option value="2">HR</option>
        </select>
      </div>
      <div className="field position">
        <select
          onBlur={checkValidityOfField}
          defaultValue={""}
          className="select position"
          required
        >
          <option disabled value="">
            პოზიცია
          </option>
          <option value="2">ჯუნიორი</option>
          <option value="3">მიდლი</option>
        </select>
      </div>
      <div className="field email">
        <label className="labelEmail">
          <div className="container">
            მეილი{" "}
            <input
              onBlur={checkValidityOfField}
              className="input email"
              name="email"
              required
              placeholder="grish777@redberry.ge"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
            />
            <label className="email error">
              უნდა მთავრდებოდეს @redberry.ge-ით
            </label>
          </div>
        </label>
      </div>
      <div className="field number">
        <label className="labelNumber">
          <div className="container">
            ტელეფონის ნომერი{" "}
            <input
              onBlur={checkValidityOfField}
              className="input number"
              name="phone_number"
              required
              placeholder="+995 577 77 77 77"
              value={formData.number}
              onChange={(e) => {
                setFormData({ ...formData, number: e.target.value });
              }}
            />
            <label className="number error">
              უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს
            </label>
          </div>
        </label>
      </div>
    </div>
  );
};

export default FormUserDetails;
