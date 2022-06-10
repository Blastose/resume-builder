import EducationItemInterface from "../interfaces/education-item-interface";
import ItemInfo from "../util/item-info";

function EducationItem(props: EducationItemInterface) {
  return (
    <ItemInfo
      name={props.institution}
      sub={props.degree}
      start={props.start}
      end={props.end}
      location={props.location}
    />
  );
}

export default EducationItem;
