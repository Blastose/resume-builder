import React from "react";
import InputMaker from "../util/input-maker";
import OnChangeFunction from "../interfaces/on-change-function-interface";
import EducationItemInterface from "../interfaces/education-item-interface";

class EducationInput extends React.Component<
  {
    educationItem: EducationItemInterface;
    onChangeFunction: OnChangeFunction;
    index: number;
  },
  {}
> {
  render() {
    return (
      <div className="flex flex-col">
        <div className="text-lg text-white">#{this.props.index}</div>
        <div>Delete</div>
        <InputMaker
          inputId="institution"
          labelText="Institution"
          inputValue={this.props.educationItem.institution}
          onChangeFunction={this.props.onChangeFunction}
          name="institution"
          index={this.props.index}
        />
        <InputMaker
          inputId="degree"
          labelText="Degree"
          inputValue={this.props.educationItem.degree}
          onChangeFunction={this.props.onChangeFunction}
          name="degree"
          index={this.props.index}
        />
        <InputMaker
          inputId="start"
          labelText="Start:"
          inputValue={this.props.educationItem.start}
          onChangeFunction={this.props.onChangeFunction}
          name="start"
          index={this.props.index}
        />
        <InputMaker
          inputId="end"
          labelText="End:"
          inputValue={this.props.educationItem.end}
          onChangeFunction={this.props.onChangeFunction}
          name="end"
          index={this.props.index}
        />
        <InputMaker
          inputId="location"
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
