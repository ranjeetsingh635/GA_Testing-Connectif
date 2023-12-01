import React, { Fragment, useState } from "react";
import {
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
} from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type InputPhoneProps = {
  label?: string;
  field: ControllerRenderProps<FieldValues, string>;
  formState: UseFormStateReturn<FieldValues>;
  textInputProps?: any;
  right?: any;
  trigger?: any;
  setValue?: any;
  callingCodeName: string;
  required?: boolean;
  value?: string;
  inputProps?: any;
};

function InputPhone(props: InputPhoneProps) {
  const {
    label,
    field,
    formState,
    textInputProps,
    right,
    setValue,
    trigger,
    callingCodeName,
    required,
    value,
    inputProps,
  } = props;
  const errorMessage: any = formState.errors?.[field.name]?.message;
  const [focus, setFocus] = useState(false);

  return (
    <div className="telInputRow">
      {label ? (
        <label
          className={
            errorMessage ? "text-danger" : focus ? "text-primary" : undefined
          }
        >
          {label}{" "}
          {required && (
            <span style={{ color: "#ffab40", fontSize: "17px" }}>*</span>
          )}
        </label>
      ) : (
        <Fragment />
      )}
      <div className="relative">
        <PhoneInput
          country={"sa"}
          buttonClass={"p-2"}
          enableSearch
          autocompleteSearch
          countryCodeEditable={false}
          value={value}
          onBlur={() => {
            field.onBlur();
            setFocus(false);
          }}
          onChange={(value: string, data: any) => {
            setValue(callingCodeName, "+" + data.dialCode);
            setValue(field.name, value.replace(data.dialCode, ""));
            setTimeout(() => {
              trigger(field.name);
            }, 100);
          }}
          inputProps={{
            className: `phone-control-custom ${
              errorMessage ? "text-danger borderClr" : ""
            }`,
            placeholder: "Phone Number",
            style: {
              paddingLeft: 65,
              width: "100%",
              height: "auto",
              zIndex: "auto",
            },
            // ...textInputProps,
          }}
        />
        {right}
        <div
          className="errorMessage"
          style={{ display: errorMessage ? "block" : "none" }}
        >
          {errorMessage}
        </div>
      </div>
    </div>
  );
}

export default InputPhone;
