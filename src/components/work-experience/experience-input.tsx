import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ExperienceItemInterface from "../interfaces/experience-item-interface";
import OnChangeFunction from "../interfaces/on-change-function-interface";
import InputMaker from "../util/input-maker";
import InputTextareaMaker from "../util/input-textarea-maker";

class ExperienceInput extends React.Component<
  {
    experienceItem: ExperienceItemInterface;
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
          inputId={`experiencecompany${this.props.index}`}
          labelText="Company:"
          inputValue={this.props.experienceItem.company}
          onChangeFunction={this.props.onChangeFunction}
          name="company"
          index={this.props.index}
        />
        <InputMaker
          inputId={`experiencejobTitle${this.props.index}`}
          labelText="Job title:"
          inputValue={this.props.experienceItem.jobTitle}
          onChangeFunction={this.props.onChangeFunction}
          name="jobTitle"
          index={this.props.index}
        />
        <InputMaker
          inputId={`experiencestart${this.props.index}`}
          labelText="Start:"
          inputValue={this.props.experienceItem.start}
          onChangeFunction={this.props.onChangeFunction}
          name="start"
          index={this.props.index}
        />
        <InputMaker
          inputId={`experienceend${this.props.index}`}
          labelText="End:"
          inputValue={this.props.experienceItem.end}
          onChangeFunction={this.props.onChangeFunction}
          name="end"
          index={this.props.index}
        />
        <InputMaker
          inputId={`experiencelocation${this.props.index}`}
          labelText="Location"
          inputValue={this.props.experienceItem.location}
          onChangeFunction={this.props.onChangeFunction}
          name="location"
          index={this.props.index}
        />
        <InputTextareaMaker
          inputId={`experiencetextarea${this.props.index}`}
          labelText="Points"
          inputValue={this.props.experienceItem.points.join("\n")}
          onChangeFunction={this.props.onChangeFunction}
          name="points"
          index={this.props.index}
        />
      </div>
    );
  }
}

export default ExperienceInput;
