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
  } & {
    removeEducationItem: (index: number) => void;
  },
  {}
> {
  render() {
    return (
      <div className="flex flex-col gap-4">
        <div className="text-white text-3xl">Education</div>
        {this.props.educationItems.map((item, index) => {
          // Show inputs for each item
          return (
            <EducationInput
              index={index}
              key={index}
              educationItem={item}
              onChangeFunction={this.props.onChangeFunction}
              removeItem={this.props.removeEducationItem}
            />
          );
        })}
        <button
          className="text-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
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
