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
        <h2 className="text-white text-3xl">Personal info</h2>
        {/* Maybe use a loop instead of writing by hand all the inputs */}
        <InputMaker
          inputId="fullName"
          labelText="Full name:"
          inputValue={this.props.personalInfo.fullName}
          onChangeFunction={this.props.onChangeFunction}
          name="fullName" // This corresponds to the personalInfo.fullName key; not sure if there's a better way to get/use the key name
        />
        <InputMaker
          inputId="phoneNumber"
          labelText="Phone number:"
          inputValue={this.props.personalInfo.phoneNumber}
          onChangeFunction={this.props.onChangeFunction}
          name="phoneNumber"
        />
        <InputMaker
          inputId="email"
          labelText="Email:"
          inputValue={this.props.personalInfo.email}
          onChangeFunction={this.props.onChangeFunction}
          name="email"
        />
        <InputMaker
          inputId="linkedinHref"
          labelText="Linkedin link:"
          inputValue={this.props.personalInfo.linkedinHref}
          onChangeFunction={this.props.onChangeFunction}
          name="linkedinHref"
        />
        <InputMaker
          inputId="linkedinText"
          labelText="Linkedin text:"
          inputValue={this.props.personalInfo.linkedinText}
          onChangeFunction={this.props.onChangeFunction}
          name="linkedinText"
        />
        <InputMaker
          inputId="githubHref"
          labelText="Github link:"
          inputValue={this.props.personalInfo.githubHref}
          onChangeFunction={this.props.onChangeFunction}
          name="githubHref"
        />
        <InputMaker
          inputId="githubText"
          labelText="Github text:"
          inputValue={this.props.personalInfo.githubText}
          onChangeFunction={this.props.onChangeFunction}
          name="githubText"
        />
        <InputMaker
          inputId="websiteHref"
          labelText="Website link:"
          inputValue={this.props.personalInfo.websiteHref}
          onChangeFunction={this.props.onChangeFunction}
          name="websiteHref"
        />
        <InputMaker
          inputId="websiteText"
          labelText="Website text:"
          inputValue={this.props.personalInfo.websiteText}
          onChangeFunction={this.props.onChangeFunction}
          name="websiteText"
        />
      </div>
    );
  }
}

export default PersonalInfoInput;
