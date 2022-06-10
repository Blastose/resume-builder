import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconPrefix, IconName } from "@fortawesome/fontawesome-common-types";

function Section(props: {
  title: string;
  icon: [type: IconPrefix, name: IconName];
}) {
  return (
    <div className="flex gap-2 items-center bg-sky-800 self-start px-2 text-white">
      <FontAwesomeIcon icon={props.icon} />
      <div className="font-semibold">{props.title}</div>
    </div>
  );
}

export default Section;
