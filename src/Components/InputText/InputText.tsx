import { Fragment, useState } from "react";
import {
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
} from "react-hook-form";
import styles from "./InputText.module.css";

type InputTextProps = {
  label?: string;
  field: ControllerRenderProps<FieldValues, string>;
  textInputProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  formState: UseFormStateReturn<FieldValues>;
  left?: any;
  leftWidth?: string | number;
  right?: any;
  rightWidth?: string | number;
  customClassName?: string;
};

function InputText(props: InputTextProps) {
  const {
    label,
    field,
    formState,
    left,
    right,
    textInputProps,
    customClassName,
  } = props;
  const errorMessage = formState.errors?.[field.name]?.message;
  const [focus, setFocus] = useState(false);
  const labelColor = errorMessage
    ? "error"
    : field.value
    ? "primary"
    : focus
    ? "primary"
    : "text";

  return (
    <div className={`mt-[2.8rem] ${styles.formInputContainer}`}>
      {label ? (
        <label
          htmlFor={field.name}
          color={labelColor}
          className={
            "text-[1.6rem] leading-normal text-light-primaryBlack mb-[1.2rem]"
          }
        >
          {label}
        </label>
      ) : (
        <Fragment />
      )}
      <div className={`relative mt-[1.2rem]`}>
        {left && left}
        <input
          id={field.name}
          type="text"
          onFocus={() => setFocus(true)}
          {...field}
          onBlur={() => {
            field.onBlur();
            setFocus(false);
          }}
          {...textInputProps}
          className={`block border border-solid border-light-primaryGrey-tints-100 min-h-[5.6rem] p-[1.6rem] w-full rounded-[10px]  text-light-primaryGrey-tints-800 text-[1.6rem] outline outline-2 outline-transparent focus:outline-offset-[2px] focus:outline-light-primaryPurple-tints-600 focus:bg-light-primaryPurple-tints-50 bg-transparent  ${
            errorMessage ? styles.errorMessage : styles.inputStyle
          } ${left && "pl-[4rem]"} ${right && "pr-[4rem]"}`}
        />
        {right}
      </div>
      {errorMessage && (
        <div className={"formErrorMessage"}>{errorMessage?.toString()}</div>
      )}
    </div>
  );
}

export default InputText;
