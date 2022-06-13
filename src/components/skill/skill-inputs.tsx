import React from "react";
import OnChangeFunction from "../interfaces/on-change-function-interface";
import SkillInterface from "../interfaces/skill-interface";
import SkillItemInterface from "../interfaces/skill-item-interface";
import SkillInput from "./skill-input";

class SkillInputs extends React.Component<
  SkillInterface & { onChangeFunction: OnChangeFunction } & {
    addSkillItem: (newSkillItem: SkillItemInterface) => void;
  } & { removeSkillItem: (index: number) => void },
  {}
> {
  render() {
    return (
      <div className="flex flex-col gap-4">
        <div className="text-white text-3xl">Skills</div>
        {this.props.skillItems.map((item, index) => {
          // Show inputs for each item
          return (
            <SkillInput
              index={index}
              key={index}
              skillItem={item}
              onChangeFunction={this.props.onChangeFunction}
              removeItem={this.props.removeSkillItem}
            />
          );
        })}
        <button
          className="text-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={() =>
            this.props.addSkillItem({
              name: "skill",
              skills: ["skill1", "skill2"],
            })
          }
        >
          Add
        </button>
      </div>
    );
  }
}

export default SkillInputs;
