import React from "react";
import CVPersonalInfo from "../personal-info/cv-personal-info";
import CVEducation from "../education/cv-education";
import CVExperience from "../work-experience/cv-experience";
import CVProject from "../project/cv-project";
import CVSkill from "../skill/cv-skill";

import PersonalInfoInput from "../personal-info/personal-info-input";
import PersonalInfo from "../personal-info/personal-info";

interface CVState {
  personalInfo: PersonalInfo;
}

class CVLayout extends React.Component<{}, CVState> {
  constructor(props: any) {
    super(props);
    this.state = { personalInfo: new PersonalInfo() };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event: React.ChangeEvent<HTMLInputElement>, name: string): void {
    this.setState((prevState) => ({
      personalInfo: { ...prevState.personalInfo, [name]: event.target.value },
    }));
  }

  render() {
    return (
      <div className="flex flex-col md:flex-row gap-8">
        <div className="bg-sky-700 p-4">
          <PersonalInfoInput
            personalInfo={this.state.personalInfo}
            onChangeFunction={this.onChange}
          />
        </div>
        <div className="bg-white h-min py-4 px-8 flex flex-col gap-4 w-[720px]">
          <CVPersonalInfo
            fullName={this.state.personalInfo.fullName}
            links={{
              linkedin: {
                href: this.state.personalInfo.linkedinHref,
                text: this.state.personalInfo.linkedinText,
              },
              github: {
                href: this.state.personalInfo.githubHref,
                text: this.state.personalInfo.githubText,
              },
              website: {
                href: this.state.personalInfo.websiteHref,
                text: this.state.personalInfo.websiteText,
              },
            }}
            contactInfo={{
              phoneNumber: this.state.personalInfo.phoneNumber,
              email: this.state.personalInfo.email,
            }}
          />
          <CVEducation />
          <CVExperience />
          <CVProject />
          <CVSkill />
        </div>
      </div>
    );
  }
}

export default CVLayout;
