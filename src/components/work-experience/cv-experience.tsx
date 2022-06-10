import React from "react";
import Section from "../util/cv-section";
import ExperienceItem from "./experience-item";
import ExperienceItemInterface from "../interfaces/experience-item-interface";

class CVExperience extends React.Component {
  experienceItems: ExperienceItemInterface[];

  constructor(props: any) {
    super(props);
    this.experienceItems = [
      {
        company: "McDonald's",
        jobTitle: "Crew Member",
        start: "Jun 2017",
        end: "Jul 2019",
        location: "Ottawa, ON",
        points: [
          "Worked in a fasted paced environment to ensure customers did not wait long for their food",
          "Took great attention to detail to ensure customers received correct orders",
          "Helped train three new employees in the kitchen and about basic procedures at the restaurant which resulted in a stronger kitchen team",
        ],
      },
      {
        company: "Five Guys and Fries",
        jobTitle: "Manager",
        start: "Jul 2019",
        end: "Present",
        location: "Calgary, AB",
        points: [
          "Worked in a fasted paced environment to ensure customers did not wait long for their food",
          "Took great attention to detail to ensure customers received correct orders",
          "Helped train three new employees in the kitchen and about basic procedures at the restaurant which resulted in a stronger kitchen team",
        ],
      },
    ];
  }

  render() {
    return (
      <div className="flex flex-col gap-2">
        <Section title="Work Experience" icon={["fas", "briefcase"]} />

        <div className="flex flex-col gap-4">
          {this.experienceItems.map((item, index) => {
            return <ExperienceItem {...item} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default CVExperience;
