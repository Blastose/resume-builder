import SkillItemInterface from "../interfaces/skill-item-interface";

function SkillItem(props: SkillItemInterface) {
  return (
    <div className="flex gap-4 ml-3">
      <div className="font-bold">{props.name}</div>
      <div>{props.skills.join(", ")}</div>
    </div>
  );
}

export default SkillItem;
