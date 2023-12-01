import Multiselect from "multiselect-react-dropdown";
import { Fragment, useState } from "react";
import {
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
} from "react-hook-form";
import styles from "./InputMultiSelect.module.css";

type InputMultiSelectProps = {
  label?: string;
  field: ControllerRenderProps<FieldValues, string>;
  formState: UseFormStateReturn<FieldValues>;
  multiSelectInputProps?: any;
  left?: any;
  leftWidth?: string | number;
  right?: any;
  rightWidth?: string | number;
  options?: Array<string>;
  singleSelect?: boolean;
  customCloseIcon?: boolean;
};

function InputMultiSelect(props: InputMultiSelectProps) {
  const {
    label,
    field,
    formState,
    multiSelectInputProps,
    left,
    right,
    options = [],
    singleSelect,
    customCloseIcon,
  } = props;
  const errorMessage: any = formState.errors?.[field.name]?.message;
  const [focus, setFocus] = useState(false);
  const labelColor = errorMessage
    ? "error"
    : field.value
    ? "primary"
    : focus
    ? "primary"
    : "text";
  const inputColor = errorMessage
    ? "error"
    : field.value
    ? "primary"
    : focus
    ? "primary"
    : "divider";
  return (
    <div>
      {label ? (
        <label
          htmlFor={field.name}
          color={labelColor}
          className={"font-Poppins font-semibold"}
        >
          {label}
        </label>
      ) : (
        <Fragment />
      )}
      <div
        className={
          !errorMessage
            ? `${styles.multiColor}`
            : `${styles.borderError}`
        }
      >
        {left}
        <Multiselect
          isInvalid={errorMessage}
          onFocus={() => setFocus(true)}
          {...field}
          onBlur={() => {
            field.onBlur();
            setFocus(false);
          }}
          singleSelect={singleSelect}
          customCloseIcon={customCloseIcon}
          isObject={false}
          onRemove={(event: any) => field.onChange(event)}
          onSelect={(event: any) => field.onChange(event)}
          options={options}
          {...multiSelectInputProps}
          showCheckbox
          className={styles?.listColor}
        />
        {right}
      </div>
      <span className="custom-error-message">{errorMessage}</span>
    </div>
  );
}

export default InputMultiSelect;
