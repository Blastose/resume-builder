import React from "react";
import CVPersonalInfo from "../personal-info/cv-personal-info";
import CVEducation from "../education/cv-education";
import CVExperience from "../work-experience/cv-experience";

class CVLayout extends React.Component {
  render() {
    return (
      <div className="bg-white h-min py-4 px-8 flex flex-col gap-2">
        <CVPersonalInfo />
        <CVEducation />
        <CVExperience />
      </div>
    );
  }
}

export default CVLayout;
