import React from "react";
import Section from "../util/cv-section";
import EducationItem from "./education-item";
import EducationItemInterface from "../interfaces/education-item-interface";

class CVEducation extends React.Component {
  educationItems: EducationItemInterface[];

  constructor(props: any) {
    super(props);
    this.educationItems = [
      {
        institution: "University of America",
        degree: "BSc Computing Science",
        start: "2017",
        end: "2022",
        location: "Seattle, WA",
      },
      {
        institution: "University of Canada",
        degree: "BASc Engineering Science",
        start: "2012",
        end: "2017",
        location: "Toronto, ON",
      },
    ];
  }

  render() {
    return (
      <div className="flex flex-col gap-2">
        <Section title="Education" icon={["fas", "graduation-cap"]} />

        <div className="flex flex-col gap-2">
          {this.educationItems.map((item, index) => {
            return <EducationItem {...item} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default CVEducation;
