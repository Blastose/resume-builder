import InputInterface from "../interfaces/input-interface";

function InputTextareaMaker(
  props: InputInterface & { name: string; index?: number }
) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-white" htmlFor={props.inputId}>
        {props.labelText}
      </label>
      <textarea
        className="py-1 px-3 w-full rounded-lg text-white bg-sky-900 focus:border-blue-500 focus:ring-blue-500"
        id={props.inputId}
        rows={3}
        value={props.inputValue}
        onChange={(event) =>
          props.onChangeFunction(
            event.target.value.split("\n"),
            props.name,
            props.index
          )
        }
      ></textarea>
    </div>
  );
}

export default InputTextareaMaker;
