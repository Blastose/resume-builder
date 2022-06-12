import React from "react";
import ExperienceInterface from "../interfaces/experience-interface";
import ExperienceItemInterface from "../interfaces/experience-item-interface";
import OnChangeFunction from "../interfaces/on-change-function-interface";
import ExperienceInput from "./experience-input";

class ExperienceInputs extends React.Component<
  ExperienceInterface & { onChangeFunction: OnChangeFunction } & {
    addExperienceItem: (newExperienceItem: ExperienceItemInterface) => void;
  } & { removeExperienceItem: (index: number) => void },
  {}
> {
  render() {
    return (
      <div className="flex flex-col gap-4">
        <div className="text-white text-3xl">Work Experience</div>
        {this.props.experienceItems.map((item, index) => {
          // Show inputs for each item
          return (
            <ExperienceInput
              index={index}
              key={index}
              experienceItem={item}
              onChangeFunction={this.props.onChangeFunction}
              removeItem={this.props.removeExperienceItem}
            />
          );
        })}
        <button
          className="text-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={() =>
            this.props.addExperienceItem({
              company: "company",
              jobTitle: "job title",
              start: "start",
              end: "end",
              location: "location",
              points: ["points1", "points2"],
            })
          }
        >
          Add
        </button>
      </div>
    );
  }
}

export default ExperienceInputs;
