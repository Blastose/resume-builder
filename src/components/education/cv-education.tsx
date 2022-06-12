import React from "react";
import Section from "../util/cv-section";
import EducationItem from "./education-item";
import EducationInterface from "../interfaces/education-interface";

class CVEducation extends React.Component<EducationInterface, {}> {
  render() {
    return (
      <div className="flex flex-col gap-2">
        <Section title="Education" icon={["fas", "graduation-cap"]} />

        <div className="flex flex-col gap-2 ml-3">
          {this.props.educationItems.map((item, index) => {
            return <EducationItem {...item} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default CVEducation;
