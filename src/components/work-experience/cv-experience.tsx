import React from "react";
import Section from "../util/cv-section";
import ExperienceItem from "./experience-item";
import ExperienceInterface from "../interfaces/experience-interface";

class CVExperience extends React.Component<ExperienceInterface, {}> {
  render() {
    return (
      <div className="flex flex-col gap-2">
        <Section title="Work Experience" icon={["fas", "briefcase"]} />

        <div className="flex flex-col gap-4">
          {this.props.experienceItems.map((item, index) => {
            return <ExperienceItem {...item} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default CVExperience;
