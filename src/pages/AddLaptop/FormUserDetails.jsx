import React from "react";

const FormUserDetails = () => {
  return (
    <div className="formUserDetails">
      <div className="field name">
        <label className="labelName">
          სახელი <input className="input name" />
          <label className="name error">
            მინიმუმ 2 სიმბოლო, ქართული ასოები
          </label>
        </label>
        <label className="labelSurname">
          გვარი <input className="input surname" />
          <label className="surname error">
            მინიმუმ 2 სიმბოლო, ქართული ასოები
          </label>
        </label>
      </div>
      <div className="field team">team</div>
      <div className="field position">position</div>
      <div className="field email">email</div>
      <div className="field number">number</div>
    </div>
  );
};

export default FormUserDetails;
