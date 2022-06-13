import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import OnChangeFunction from "../interfaces/on-change-function-interface";
import SkillItemInterface from "../interfaces/skill-item-interface";
import InputMaker from "../util/input-maker";
import InputTextareaMaker from "../util/input-textarea-maker";

class SkillInput extends React.Component<
  {
    skillItem: SkillItemInterface;
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
          inputId={`skillName${this.props.index}`}
          labelText="Name:"
          inputValue={this.props.skillItem.name}
          onChangeFunction={this.props.onChangeFunction}
          name="name"
          index={this.props.index}
        />
        <InputTextareaMaker
          inputId={`textarea${this.props.index}`}
          labelText="Skills"
          inputValue={this.props.skillItem.skills.join("\n")}
          onChangeFunction={this.props.onChangeFunction}
          name="skills"
          index={this.props.index}
        />
      </div>
    );
  }
}

export default SkillInput;
