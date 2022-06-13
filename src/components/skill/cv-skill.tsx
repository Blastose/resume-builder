import React from "react";
import SkillInterface from "../interfaces/skill-interface";
import Section from "../util/cv-section";
import SkillItem from "./skill-item";

class CVSkill extends React.Component<SkillInterface, {}> {
  render() {
    return (
      <div className="flex flex-col gap-2">
        <Section title="Skills" icon={["fas", "gears"]} />

        <div className="flex flex-col gap-1">
          {this.props.skillItems.map((item, index) => {
            return <SkillItem {...item} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default CVSkill;
