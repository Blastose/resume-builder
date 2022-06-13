import React from "react";
import InputMaker from "../util/input-maker";
import OnChangeFunction from "../interfaces/on-change-function-interface";
import EducationItemInterface from "../interfaces/education-item-interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class EducationInput extends React.Component<
  {
    educationItem: EducationItemInterface;
    onChangeFunction: OnChangeFunction;
    removeItem: (index: number) => void;
    index: number;
  },
  {}
> {
  render() {
    return (
      <div className="flex flex-col gap-2">
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
          inputId={`educationinstitution${this.props.index}`}
          labelText="Institution"
          inputValue={this.props.educationItem.institution}
          onChangeFunction={this.props.onChangeFunction}
          name="institution"
          index={this.props.index}
        />
        <InputMaker
          inputId={`educationdegree${this.props.index}`}
          labelText="Degree"
          inputValue={this.props.educationItem.degree}
          onChangeFunction={this.props.onChangeFunction}
          name="degree"
          index={this.props.index}
        />
        <InputMaker
          inputId={`educationstart${this.props.index}`}
          labelText="Start:"
          inputValue={this.props.educationItem.start}
          onChangeFunction={this.props.onChangeFunction}
          name="start"
          index={this.props.index}
        />
        <InputMaker
          inputId={`educationend${this.props.index}`}
          labelText="End:"
          inputValue={this.props.educationItem.end}
          onChangeFunction={this.props.onChangeFunction}
          name="end"
          index={this.props.index}
        />
        <InputMaker
          inputId={`educationlocation${this.props.index}`}
          labelText="Location:"
          inputValue={this.props.educationItem.location}
          onChangeFunction={this.props.onChangeFunction}
          name="location"
          index={this.props.index}
        />
      </div>
    );
  }
}

export default EducationInput;
