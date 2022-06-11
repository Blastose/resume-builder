import React from "react";
import Section from "../util/cv-section";
import ProjectItem from "./project-item";
import ProjectItemInterface from "../interfaces/project-item-interface";

class CVProject extends React.Component {
  projectItems: ProjectItemInterface[];

  constructor(props: any) {
    super(props);
    this.projectItems = [
      {
        name: "Resume Builder Website",
        githubLink: "https://www.github.com",
        websiteLink: "https://www.google.com",
        points: [
          "A beautiful resort that provides fun activites like tablemaking and mattress making",
          "A built-in gym inside the Dunder Mifflin office complex that will buy your tin for 5 cents a yard",
        ],
      },
      {
        name: "Tic-Tac-Toe",
        githubLink: "https://www.github.com",
        points: [
          "A beautiful resort that provides fun activites like tablemaking and mattress making",
          "A great daycare for infants with a focus on cognitive development",
        ],
      },
    ];
  }

  render() {
    return (
      <div className="flex flex-col gap-2">
        <Section title="Projects" icon={["fas", "computer"]} />

        <div className="flex flex-col gap-4">
          {this.projectItems.map((item, index) => {
            return <ProjectItem {...item} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default CVProject;
