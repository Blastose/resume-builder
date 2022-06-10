import EducationItemInterface from "../interfaces/education-item-interface";

function EducationItem(props: EducationItemInterface) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col leading-tight">
        <div className="font-bold">{props.institution}</div>
        <div className="italic text-sm">{props.degree}</div>
      </div>

      <div className="flex flex-col leading-none text-right">
        <div className="font-medium">
          {props.start}-{props.end}
        </div>
        <div className="italic text-sm">{props.location}</div>
      </div>
    </div>
  );
}

export default EducationItem;
