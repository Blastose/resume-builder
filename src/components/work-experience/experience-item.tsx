import ExperienceItemInterface from "../interfaces/experience-item-interface";
import ItemInfo from "../util/item-info";

function ExperienceItem(props: ExperienceItemInterface) {
  return (
    <div className="flex flex-col gap-1 ml-3">
      <ItemInfo
        name={props.company}
        sub={props.jobTitle}
        start={props.start}
        end={props.end}
        location={props.location}
      />
      <ul className="list-disc list-inside leading-tight">
        {props.points.map((point, index) => {
          return <li key={index}>{point}</li>;
        })}
      </ul>
    </div>
  );
}

export default ExperienceItem;
