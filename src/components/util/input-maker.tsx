import InputInterface from "../interfaces/input-interface";

function InputMaker(props: InputInterface & { name: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-white" htmlFor={props.inputId}>
        {props.labelText}
      </label>
      <input
        type="text"
        id={props.inputId}
        value={props.inputValue}
        onChange={(event) => props.onChangeFunction(event, "fullName")}
      />
    </div>
  );
}

export default InputMaker;
