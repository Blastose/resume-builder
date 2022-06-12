import React from "react";
import EducationInterface from "../interfaces/education-interface";
import EducationItemInterface from "../interfaces/education-item-interface";
import OnChangeFunction from "../interfaces/on-change-function-interface";
import EducationInput from "./education-input";

class EducationInputs extends React.Component<
  EducationInterface & {
    onChangeFunction: OnChangeFunction;
  } & {
    addEducationItem: (newEducationItem: EducationItemInterface) => void;
  },
  {}
> {
  render() {
    return (
      <div>
        {this.props.educationItems.map((item, index) => {
          // Show inputs for each item
          return (
            <EducationInput
              index={index}
              key={index}
              educationItem={item}
              onChangeFunction={this.props.onChangeFunction}
            />
          );
        })}
        <button
          onClick={() =>
            this.props.addEducationItem({
              institution: "institution",
              degree: "degree",
              start: "start",
              end: "end",
              location: "location",
            })
          }
        >
          Add
        </button>
      </div>
    );
  }
}

export default EducationInputs;
