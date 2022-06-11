import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectHeading(props: {
  name: string;
  githubLink?: string;
  websiteLink?: string;
}) {
  return (
    <div className="flex justify-between">
      <div className="font-bold">{props.name}</div>
      <div className="flex gap-2">
        {props.githubLink && (
          <div>
            <div className="flex gap-2 items-center">
              <a href={props.githubLink} className="text-blue-700">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </div>
          </div>
        )}
        {props.websiteLink && (
          <div>
            <div className="flex gap-2 items-center">
              <a href={props.websiteLink} className="text-blue-700">
                <FontAwesomeIcon icon={["fas", "earth-america"]} />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectHeading;
