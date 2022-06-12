import OnChangeFunction from "./on-change-function-interface";

interface InputInterface {
  inputId: string;
  labelText: string;
  inputValue: string;
  onChangeFunction: OnChangeFunction;
}

export default InputInterface;
