import React from "react";
import CVPersonalInfo from "../personal-info/cv-personal-info";
import CVEducation from "../education/cv-education";
import CVExperience from "../work-experience/cv-experience";
import CVProject from "../project/cv-project";
import CVSkill from "../skill/cv-skill";

import PersonalInfo from "../personal-info/personal-info";
import EducationItemInterface from "../interfaces/education-item-interface";
import ExperienceItemInterface from "../interfaces/experience-item-interface";
import ExperienceInputs from "../work-experience/experience-inputs";
import EducationInputs from "../education/education-inputs";
import ProjectInputs from "../project/project-inputs";
import ProjectItemInterface from "../interfaces/project-item-interface";
import SkillItemInterface from "../interfaces/skill-item-interface";
import SkillInputs from "../skill/skill-inputs";
import PersonalInfoInput from "../personal-info/personal-info-input";

interface CVState {
  personalInfo: PersonalInfo;
  educationItems: EducationItemInterface[];
  experienceItems: ExperienceItemInterface[];
  projectItems: ProjectItemInterface[];
  skillItems: SkillItemInterface[];
}

class CVLayout extends React.Component<{}, CVState> {
  constructor(props: any) {
    super(props);
    this.state = {
      personalInfo: new PersonalInfo(),
      educationItems: [] as EducationItemInterface[],
      experienceItems: [] as ExperienceItemInterface[],
      projectItems: [] as ProjectItemInterface[],
      skillItems: [] as SkillItemInterface[],
    };
    this.onChange = this.onChange.bind(this);
    this.onChangeEducation = this.onChangeEducation.bind(this);
    this.addEducationItem = this.addEducationItem.bind(this);
    this.removeEducationItem = this.removeEducationItem.bind(this);

    this.onChangeExperience = this.onChangeExperience.bind(this);
    this.addExperienceItem = this.addExperienceItem.bind(this);
    this.removeExperienceItem = this.removeExperienceItem.bind(this);

    this.onChangeProject = this.onChangeProject.bind(this);
    this.addProjectItem = this.addProjectItem.bind(this);
    this.removeProjectItem = this.removeProjectItem.bind(this);

    this.onChangeSkill = this.onChangeSkill.bind(this);
    this.addSkillItem = this.addSkillItem.bind(this);
    this.removeSkillItem = this.removeSkillItem.bind(this);
  }

  onChange(newValue: string | string[], name: string): void {
    this.setState((prevState) => ({
      personalInfo: { ...prevState.personalInfo, [name]: newValue },
    }));
  }

  onChangeEducation(
    newValue: string | string[],
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
        { ...educationItems[index], [name]: newValue },
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

  onChangeExperience(
    newValue: string | string[],
    name: string,
    index?: number
  ): void {
    // Hack to make index required
    if (index === undefined) {
      return;
    }
    this.setState(({ experienceItems }) => ({
      experienceItems: [
        ...experienceItems.slice(0, index),
        { ...experienceItems[index], [name]: newValue },
        ...experienceItems.slice(index + 1),
      ],
    }));
  }

  addExperienceItem(newExperienceItem: ExperienceItemInterface) {
    this.setState(({ experienceItems }) => ({
      experienceItems: experienceItems.concat(newExperienceItem),
    }));
  }

  removeExperienceItem(index: number) {
    this.setState(({ experienceItems }) => ({
      experienceItems: [
        ...experienceItems.slice(0, index),
        ...experienceItems.slice(index + 1),
      ],
    }));
  }

  onChangeProject(
    newValue: string | string[],
    name: string,
    index?: number
  ): void {
    // Hack to make index required
    if (index === undefined) {
      return;
    }
    this.setState(({ projectItems }) => ({
      projectItems: [
        ...projectItems.slice(0, index),
        { ...projectItems[index], [name]: newValue },
        ...projectItems.slice(index + 1),
      ],
    }));
  }

  addProjectItem(newProjectItem: ProjectItemInterface) {
    this.setState(({ projectItems }) => ({
      projectItems: projectItems.concat(newProjectItem),
    }));
  }

  removeProjectItem(index: number) {
    this.setState(({ projectItems }) => ({
      projectItems: [
        ...projectItems.slice(0, index),
        ...projectItems.slice(index + 1),
      ],
    }));
  }

  onChangeSkill(
    newValue: string | string[],
    name: string,
    index?: number
  ): void {
    // Hack to make index required
    if (index === undefined) {
      return;
    }
    this.setState(({ skillItems }) => ({
      skillItems: [
        ...skillItems.slice(0, index),
        { ...skillItems[index], [name]: newValue },
        ...skillItems.slice(index + 1),
      ],
    }));
  }

  addSkillItem(newSkillItem: SkillItemInterface) {
    this.setState(({ skillItems }) => ({
      skillItems: skillItems.concat(newSkillItem),
    }));
  }

  removeSkillItem(index: number) {
    this.setState(({ skillItems }) => ({
      skillItems: [
        ...skillItems.slice(0, index),
        ...skillItems.slice(index + 1),
      ],
    }));
  }

  render() {
    return (
      <div className="flex flex-col md:flex-row gap-8">
        <div className="bg-sky-700 p-4 flex flex-col gap-6">
          <PersonalInfoInput
            personalInfo={this.state.personalInfo}
            onChangeFunction={this.onChange}
          />
          <EducationInputs
            educationItems={this.state.educationItems}
            onChangeFunction={this.onChangeEducation}
            addEducationItem={this.addEducationItem}
            removeEducationItem={this.removeEducationItem}
          />
          <ExperienceInputs
            experienceItems={this.state.experienceItems}
            onChangeFunction={this.onChangeExperience}
            addExperienceItem={this.addExperienceItem}
            removeExperienceItem={this.removeExperienceItem}
          />
          <ProjectInputs
            projectItems={this.state.projectItems}
            onChangeFunction={this.onChangeProject}
            addProjectItem={this.addProjectItem}
            removeProjectItem={this.removeProjectItem}
          />
          <SkillInputs
            skillItems={this.state.skillItems}
            onChangeFunction={this.onChangeSkill}
            addSkillItem={this.addSkillItem}
            removeSkillItem={this.removeSkillItem}
          />
        </div>
        <div className="bg-white py-4 px-8 flex flex-col gap-4 w-[21cm] h-[29.7cm]">
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
          <CVExperience experienceItems={this.state.experienceItems} />
          <CVProject projectItems={this.state.projectItems} />
          <CVSkill skillItems={this.state.skillItems} />
        </div>
      </div>
    );
  }
}

export default CVLayout;
