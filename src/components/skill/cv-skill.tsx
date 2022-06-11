import React from "react";
import Section from "../util/cv-section";
import SkillItem from "./skill-item";
import SkillItemInterface from "../interfaces/skill-item-interface";

class CVSkill extends React.Component {
  skillItems: SkillItemInterface[];

  constructor(props: any) {
    super(props);
    this.skillItems = [
      {
        name: "Languages",
        skills: ["Python", "C++", "JavaScript", "TypeScript"],
      },
      {
        name: "Techonologies",
        skills: ["VSCode", "Excel", "Intellij", "Word"],
      },
    ];
  }

  render() {
    return (
      <div className="flex flex-col gap-2">
        <Section title="Skills" icon={["fas", "gears"]} />

        <div className="flex flex-col gap-1">
          {this.skillItems.map((item, index) => {
            return <SkillItem {...item} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default CVSkill;
