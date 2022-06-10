import Link from "../interfaces/link";

function Links(props: { linkedin: Link; github: Link; website: Link }) {
  return (
    <div className="flex flex-col">
      <div>
        <a href={props.linkedin.href}>{props.linkedin.text}</a>
      </div>
      <div>
        <a href={props.github.href}>{props.github.text}</a>
      </div>
      <div>
        <a href={props.website.href}>{props.website.text}</a>
      </div>
    </div>
  );
}

export default Links;
