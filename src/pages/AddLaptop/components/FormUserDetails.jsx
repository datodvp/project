import React from "react";

const FormUserDetails = () => {
  return (
    <div className="formUserDetails">
      <div className="field name">
        <label className="labelName">
          <div className="container">
            სახელი <input className="input name" />
            <label className="name error">
              მინიმუმ 2 სიმბოლო, ქართული ასოები
            </label>
          </div>
        </label>
        <label className="labelSurname">
          <div className="container">
            გვარი <input className="input surname" />
            <label className="surname error">
              მინიმუმ 2 სიმბოლო, ქართული ასოები
            </label>
          </div>
        </label>
      </div>
      <div className="field team">
        <select defaultValue={1} className="select team">
          <option disabled value="1">
            თიმი
          </option>
          <option value="2">დეველოპმენტი</option>
          <option value="3">HR</option>
        </select>
      </div>
      <div className="field position">
        <select defaultValue={1} className="select position">
          <option disabled value="1">
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
            <input className="input email" placeholder="grish777@redberry.ge" />
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
            <input className="input number" placeholder="+995 577 77 77 77" />
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