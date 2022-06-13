import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputTypes from "../util/input-types";

function InputTabs(props: {
  currentActive: InputTypes;
  onClickFunction: (newActive: InputTypes) => void;
}) {
  return (
    <div className="flex flex-col text-white">
      <button
        className={`rounded-l-2xl ${
          props.currentActive === InputTypes.personal
            ? "bg-sky-700"
            : "bg-sky-600"
        } hover:bg-sky-700 p-3`}
        onClick={() => props.onClickFunction(InputTypes.personal)}
      >
        <FontAwesomeIcon icon={["fas", "user"]} />
      </button>
      <button
        className={`rounded-l-2xl ${
          props.currentActive === InputTypes.education
            ? "bg-sky-700"
            : "bg-sky-600"
        } hover:bg-sky-700 p-3`}
        onClick={() => props.onClickFunction(InputTypes.education)}
      >
        <FontAwesomeIcon icon={["fas", "graduation-cap"]} />
      </button>
      <button
        className={`rounded-l-2xl ${
          props.currentActive === InputTypes.experience
            ? "bg-sky-700"
            : "bg-sky-600"
        } hover:bg-sky-700 p-3`}
        onClick={() => props.onClickFunction(InputTypes.experience)}
      >
        <FontAwesomeIcon icon={["fas", "briefcase"]} />
      </button>
      <button
        className={`rounded-l-2xl ${
          props.currentActive === InputTypes.project
            ? "bg-sky-700"
            : "bg-sky-600"
        } hover:bg-sky-700 p-3`}
        onClick={() => props.onClickFunction(InputTypes.project)}
      >
        <FontAwesomeIcon icon={["fas", "computer"]} />
      </button>
      <button
        className={`rounded-l-2xl ${
          props.currentActive === InputTypes.skills
            ? "bg-sky-700"
            : "bg-sky-600"
        } hover:bg-sky-700 p-3`}
        onClick={() => props.onClickFunction(InputTypes.skills)}
      >
        <FontAwesomeIcon icon={["fas", "gears"]} />
      </button>
    </div>
  );
}

export default InputTabs;
