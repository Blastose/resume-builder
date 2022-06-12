import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import OnChangeFunction from "../interfaces/on-change-function-interface";
import ProjectItemInterface from "../interfaces/project-item-interface";
import InputMaker from "../util/input-maker";
import InputTextareaMaker from "../util/input-textarea-maker";

class ProjectInput extends React.Component<
  {
    projectItem: ProjectItemInterface;
    onChangeFunction: OnChangeFunction;
    removeItem: (index: number) => void;
    index: number;
  },
  {}
> {
  render() {
    return (
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="text-lg text-white">#{this.props.index + 1}</div>
          <button
            className="text-white hover:text-gray-400"
            onClick={() => this.props.removeItem(this.props.index)}
          >
            <FontAwesomeIcon icon={["fas", "trash-can"]} />
          </button>
        </div>
        <InputMaker
          inputId={`projectName${this.props.index}`}
          labelText="Project:"
          inputValue={this.props.projectItem.name}
          onChangeFunction={this.props.onChangeFunction}
          name="name"
          index={this.props.index}
        />
        <InputMaker
          inputId={`githubLink${this.props.index}`}
          labelText="Github link:"
          inputValue={
            this.props.projectItem.githubLink
              ? this.props.projectItem.githubLink
              : ""
          }
          onChangeFunction={this.props.onChangeFunction}
          name="githubLink"
          index={this.props.index}
        />
        <InputMaker
          inputId={`websiteLink${this.props.index}`}
          labelText="Website link:"
          inputValue={
            this.props.projectItem.websiteLink
              ? this.props.projectItem.websiteLink
              : ""
          }
          onChangeFunction={this.props.onChangeFunction}
          name="websiteLink"
          index={this.props.index}
        />
        <InputTextareaMaker
          inputId={`textarea${this.props.index}`}
          labelText="Points"
          inputValue={this.props.projectItem.points.join("\n")}
          onChangeFunction={this.props.onChangeFunction}
          name="points"
          index={this.props.index}
        />
      </div>
    );
  }
}

export default ProjectInput;
