import React from "react";
import ProjectInterface from "../interfaces/project-interface";
import OnChangeFunction from "../interfaces/on-change-function-interface";
import ProjectInput from "./project-input";
import ProjectItemInterface from "../interfaces/project-item-interface";

class ProjectInputs extends React.Component<
  ProjectInterface & { onChangeFunction: OnChangeFunction } & {
    addProjectItem: (newProjectItem: ProjectItemInterface) => void;
  } & { removeProjectItem: (index: number) => void },
  {}
> {
  render() {
    return (
      <div className="flex flex-col gap-4">
        <div className="text-white text-3xl">Projects</div>
        {this.props.projectItems.map((item, index) => {
          // Show inputs for each item
          return (
            <ProjectInput
              index={index}
              key={index}
              projectItem={item}
              onChangeFunction={this.props.onChangeFunction}
              removeItem={this.props.removeProjectItem}
            />
          );
        })}
        <button
          className="text-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={() =>
            this.props.addProjectItem({
              name: "project",
              points: ["My project point1", "My project point2"],
            })
          }
        >
          Add
        </button>
      </div>
    );
  }
}

export default ProjectInputs;
