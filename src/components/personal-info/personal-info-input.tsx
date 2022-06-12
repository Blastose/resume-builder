import React from "react";
import InputMaker from "../util/input-maker";
import PersonalInfo from "./personal-info";
import OnChangeFunction from "../interfaces/on-change-function-interface";

class PersonalInfoInput extends React.Component<
  {
    personalInfo: PersonalInfo;
    onChangeFunction: OnChangeFunction;
  },
  {}
> {
  render() {
    return (
      <div className="flex flex-col">
        <InputMaker
          inputId="fullName"
          labelText="Full Name:"
          inputValue={this.props.personalInfo.fullName}
          onChangeFunction={this.props.onChangeFunction}
          name="fullName" // This corresponds to the personalInfo.fullName key; not sure if there's a better way to get/use the key name
        />
        <InputMaker
          inputId="phoneNumber"
          labelText="Phone Number:"
          inputValue={this.props.personalInfo.contactInfo.phoneNumber}
          onChangeFunction={this.props.onChangeFunction}
          name=""
        />
      </div>
    );
  }
}

export default PersonalInfoInput;
