import React from "react";
import EducationInputs from "../education/education-inputs";
import EducationItemInterface from "../interfaces/education-item-interface";
import ExperienceItemInterface from "../interfaces/experience-item-interface";
import ProjectItemInterface from "../interfaces/project-item-interface";
import SkillItemInterface from "../interfaces/skill-item-interface";
import PersonalInfo from "../personal-info/personal-info";
import PersonalInfoInput from "../personal-info/personal-info-input";
import ProjectInputs from "../project/project-inputs";
import SkillInputs from "../skill/skill-inputs";
import InputTypes from "../util/input-types";
import ExperienceInputs from "../work-experience/experience-inputs";

class CVInputs extends React.Component<
  {
    active: InputTypes;
    personalInfo: PersonalInfo;
    onChange: (newValue: string | string[], name: string) => void;

    educationItems: EducationItemInterface[];
    onChangeEducation: (
      newValue: string | string[],
      name: string,
      index?: number
    ) => void;
    addEducationItem: (newEducationItem: EducationItemInterface) => void;
    removeEducationItem: (index: number) => void;

    experienceItems: ExperienceItemInterface[];
    onChangeExperience: (
      newValue: string | string[],
      name: string,
      index?: number
    ) => void;
    addExperienceItem: (newExperienceItem: ExperienceItemInterface) => void;
    removeExperienceItem: (index: number) => void;

    projectItems: ProjectItemInterface[];
    onChangeProject: (
      newValue: string | string[],
      name: string,
      index?: number
    ) => void;
    addProjectItem: (newProjectItem: ProjectItemInterface) => void;
    removeProjectItem: (index: number) => void;

    skillItems: SkillItemInterface[];
    onChangeSkill: (
      newValue: string | string[],
      name: string,
      index?: number
    ) => void;
    addSkillItem: (newSkillItem: SkillItemInterface) => void;
    removeSkillItem: (index: number) => void;
  },
  {}
> {
  getActiveInput(name: InputTypes) {
    switch (name) {
      case InputTypes.personal:
        return (
          <PersonalInfoInput
            personalInfo={this.props.personalInfo}
            onChangeFunction={this.props.onChange}
          />
        );
      case InputTypes.education:
        return (
          <EducationInputs
            educationItems={this.props.educationItems}
            onChangeFunction={this.props.onChangeEducation}
            addEducationItem={this.props.addEducationItem}
            removeEducationItem={this.props.removeEducationItem}
          />
        );
      case InputTypes.experience:
        return (
          <ExperienceInputs
            experienceItems={this.props.experienceItems}
            onChangeFunction={this.props.onChangeExperience}
            addExperienceItem={this.props.addExperienceItem}
            removeExperienceItem={this.props.removeExperienceItem}
          />
        );
      case InputTypes.project:
        return (
          <ProjectInputs
            projectItems={this.props.projectItems}
            onChangeFunction={this.props.onChangeProject}
            addProjectItem={this.props.addProjectItem}
            removeProjectItem={this.props.removeProjectItem}
          />
        );
      case InputTypes.skills:
        return (
          <SkillInputs
            skillItems={this.props.skillItems}
            onChangeFunction={this.props.onChangeSkill}
            addSkillItem={this.props.addSkillItem}
            removeSkillItem={this.props.removeSkillItem}
          />
        );
      default:
        return <div></div>;
    }
  }

  render() {
    return this.getActiveInput(this.props.active);
  }
}

export default CVInputs;
