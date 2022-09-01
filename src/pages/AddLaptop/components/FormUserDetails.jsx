import React from "react";

const FormUserDetails = (props) => {
  const { formData, setFormData, step, checkValidityOfField } = props;

  const giveTelPattern = () => {
    // gives phone number a pattern
  };

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
              pattern="^(?!.* )([ა-ჰ]).{1,}"
              value={formData.name}
              placeholder="ბადრი"
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
              pattern="^(?!.* )([ა-ჰ]).{1,}"
              placeholder="შუბლაძე"
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
          value={formData.team_id}
          onChange={(e) => {
            setFormData({ ...formData, team_id: e.target.value });
          }}
          className="select team"
          name="team_id"
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
          value={formData.position_id}
          onChange={(e) => {
            setFormData({ ...formData, position_id: e.target.value });
          }}
          name="position_id"
          className="select position"
          required
        >
          <option disabled value="">
            პოზიცია
          </option>
          <option value="1">ჯუნიორი</option>
          <option value="2">მიდლი</option>
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
              pattern="^[A-Za-z0-9]+@redberry.ge"
              placeholder="badr777@redberry.ge"
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
              type="tel"
              required
              pattern="^(\+?995)?(79\d{7}|5\d{8})$"
              placeholder="+995 577 77 77 77"
              value={formData.phone_number}
              onChange={(e) => {
                setFormData({ ...formData, phone_number: e.target.value });
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
