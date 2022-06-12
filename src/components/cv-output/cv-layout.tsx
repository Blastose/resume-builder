import React from "react";
import CVPersonalInfo from "../personal-info/cv-personal-info";
import CVEducation from "../education/cv-education";
import CVExperience from "../work-experience/cv-experience";
import CVProject from "../project/cv-project";
import CVSkill from "../skill/cv-skill";

import PersonalInfo from "../personal-info/personal-info";
import EducationItemInterface from "../interfaces/education-item-interface";
import EducationInputs from "../education/education-inputs";

interface CVState {
  personalInfo: PersonalInfo;
  educationItems: EducationItemInterface[];
}

class CVLayout extends React.Component<{}, CVState> {
  constructor(props: any) {
    super(props);
    this.state = {
      personalInfo: new PersonalInfo(),
      educationItems: [] as EducationItemInterface[],
    };
    this.onChange = this.onChange.bind(this);
    this.onChangeEducation = this.onChangeEducation.bind(this);
    this.addEducationItem = this.addEducationItem.bind(this);
    this.removeEducationItem = this.removeEducationItem.bind(this);
  }

  onChange(event: React.ChangeEvent<HTMLInputElement>, name: string): void {
    this.setState((prevState) => ({
      personalInfo: { ...prevState.personalInfo, [name]: event.target.value },
    }));
  }

  onChangeEducation(
    event: React.ChangeEvent<HTMLInputElement>,
    name: string,
    index?: number
  ): void {
    // Hack to make index required
    if (index === undefined) {
      return;
    }

    this.setState(({ educationItems }) => ({
      educationItems: [
        ...educationItems.slice(0, index),
        { ...educationItems[index], [name]: event.target.value },
        ...educationItems.slice(index + 1),
      ],
    }));
  }

  addEducationItem(newEducationItem: EducationItemInterface) {
    this.setState(({ educationItems }) => ({
      educationItems: educationItems.concat(newEducationItem),
    }));
  }

  removeEducationItem(index: number) {
    this.setState(({ educationItems }) => ({
      educationItems: [
        ...educationItems.slice(0, index),
        ...educationItems.slice(index + 1),
      ],
    }));
  }

  render() {
    return (
      <div className="flex flex-col md:flex-row gap-8">
        <div className="bg-sky-700 p-4">
          {/* <PersonalInfoInput
            personalInfo={this.state.personalInfo}
            onChangeFunction={this.onChange}
          /> */}
          <EducationInputs
            educationItems={this.state.educationItems}
            onChangeFunction={this.onChangeEducation}
            addEducationItem={this.addEducationItem}
            removeEducationItem={this.removeEducationItem}
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
          <CVEducation educationItems={this.state.educationItems} />
          <CVExperience />
          <CVProject />
          <CVSkill />
        </div>
      </div>
    );
  }
}

export default CVLayout;
