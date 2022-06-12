import React from "react";
import Section from "../util/cv-section";
import ProjectItem from "./project-item";
import ProjectInterface from "../interfaces/project-interface";

class CVProject extends React.Component<ProjectInterface, {}> {
  render() {
    return (
      <div className="flex flex-col gap-2">
        <Section title="Projects" icon={["fas", "computer"]} />

        <div className="flex flex-col gap-4">
          {this.props.projectItems.map((item, index) => {
            return <ProjectItem {...item} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default CVProject;
