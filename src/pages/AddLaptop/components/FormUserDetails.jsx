import React, { useEffect, useState } from "react";

const FormUserDetails = (props) => {
  const {
    formData,
    setFormData,
    step,
    checkValidityOfField,
    teamList,
    positionList,
  } = props;

  const [formattedPositionList, setFormattedPositionList] = useState([]);

  useEffect(() => {
    setOptionsForPositionSelector();

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teamList, positionList]);

  const formatPositionList = (chosenTeamId) => {
    let formattedPositionList = positionList.filter(
      (position) => position.team_id.toString() === chosenTeamId.toString()
    );
    return formattedPositionList;
  };

  const setOptionsForPositionSelector = () => {
    // if teamList is empty just return back from function else set options for position selector
    if (teamList.length === 0 || positionList.length === 0) return;

    const chosenTeamId = document.querySelector(".select.team").value;
    const positionSelector = document.querySelector(".select.position");
    // check if team dropdown is selected and then turn on position dropdown
    if (chosenTeamId) {
      positionSelector.disabled = false;
    }

    let formattedPositionList = formatPositionList(chosenTeamId);
    setFormattedPositionList(formattedPositionList);
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
              pattern="^[ა-ჰ]{2,30}$"
              value={formData.name}
              placeholder="ბადრი"
              // onBlur={checkValidityOfField}
              onChange={(e) => {
                checkValidityOfField(e);
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
              pattern="^[ა-ჰ]{2,15}$"
              placeholder="შუბლაძე"
              value={formData.surname}
              // onBlur={checkValidityOfField}
              onChange={(e) => {
                checkValidityOfField(e);
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
            setOptionsForPositionSelector();
            checkValidityOfField(e);
            setFormData({ ...formData, team_id: e.target.value });
          }}
          className="select team"
          name="team_id"
          // onBlur={checkValidityOfField}
          required
        >
          <option disabled value="">
            თიმი
          </option>
          {teamList.map((team) => {
            const { id, name } = team;
            return (
              <option key={id} value={id}>
                {name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="field position">
        <select
          // onBlur={checkValidityOfField}
          disabled
          value={formData.position_id}
          onChange={(e) => {
            checkValidityOfField(e);
            setFormData({ ...formData, position_id: e.target.value });
          }}
          name="position_id"
          className="select position"
          required
        >
          <option disabled value="">
            პოზიცია
          </option>
          {formattedPositionList.map((position) => {
            const { id, name } = position;
            return (
              <option key={id} value={id}>
                {name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="field email">
        <label className="labelEmail">
          <div className="container">
            მეილი{" "}
            <input
              // onBlur={checkValidityOfField}
              className="input email"
              name="email"
              required
              pattern="^[A-Za-z0-9]+@redberry.ge"
              placeholder="badr777@redberry.ge"
              value={formData.email}
              onChange={(e) => {
                checkValidityOfField(e);
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
              // onBlur={checkValidityOfField}
              className="input number"
              name="phone_number"
              type="tel"
              required
              pattern="^(\+?995)?(79\d{7}|5\d{8})$"
              placeholder="+995 577 77 77 77"
              value={formData.phone_number}
              onChange={(e) => {
                checkValidityOfField(e);
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
