import ProjectItemInterface from "../interfaces/project-item-interface";
import ProjectHeading from "./project-heading";

function ProjectItem(props: ProjectItemInterface) {
  return (
    <div className="flex flex-col gap-1 ml-3">
      <ProjectHeading
        name={props.name}
        githubLink={props.githubLink}
        websiteLink={props.websiteLink}
      />
      <ul className="list-disc list-inside leading-tight">
        {props.points.map((point, index) => {
          return <li key={index}>{point}</li>;
        })}
      </ul>
    </div>
  );
}

export default ProjectItem;
