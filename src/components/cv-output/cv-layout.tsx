import React from "react";
import CVPersonalInfo from "../personal-info/cv-personal-info";

class CVLayout extends React.Component {
  render() {
    return (
      <div className="bg-white h-min py-4 px-8">
        <CVPersonalInfo />
      </div>
    );
  }
}

export default CVLayout;
