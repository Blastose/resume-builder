import InputInterface from "../interfaces/input-interface";

function InputMaker(props: InputInterface & { name: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-white" htmlFor={props.inputId}>
        {props.labelText}
      </label>
      <input
        className="py-1 px-3 w-full rounded-lg text-white bg-sky-900 focus:border-blue-500 focus:ring-blue-500"
        type="text"
        id={props.inputId}
        value={props.inputValue}
        onChange={(event) => props.onChangeFunction(event, props.name)}
      />
    </div>
  );
}

export default InputMaker;
