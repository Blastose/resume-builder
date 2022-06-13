import Link from "../interfaces/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Links(props: { linkedin: Link; github: Link; website: Link }) {
  return (
    <div className="flex flex-col leading-tight">
      <div className="flex gap-2 items-center">
        <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
        <a href={props.linkedin.href} className="text-blue-600">
          <span>/</span>
          {props.linkedin.text}
        </a>
      </div>
      <div className="flex gap-2 items-center">
        <FontAwesomeIcon icon={["fab", "github"]} />
        <a href={props.github.href} className="text-blue-600">
          <span>/</span>
          {props.github.text}
        </a>
      </div>
      <div className="flex gap-2 items-center">
        <FontAwesomeIcon icon={["fas", "earth-america"]} />
        <a href={props.website.href} className="text-blue-600">
          {props.website.text}
        </a>
      </div>
    </div>
  );
}

export default Links;
