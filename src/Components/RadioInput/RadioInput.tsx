import React, { Fragment, useState } from "react";
import { ControllerRenderProps } from "react-hook-form";

type RadioInputProps = {
  label?: string;
  field: ControllerRenderProps<any, string>;
  formState: any;
  textInputProps?: any;
  left?: any;
  right?: any;
  radioData?: Array<{
    label: string;
    value: string;
  }>;
};

function RadioInput(props: RadioInputProps) {
  const { label, field, formState, radioData = [] } = props;
  const errorMessage = formState.errors?.[field.name]?.message;

  return (
    // <div>
    //   <div>
    <div className="custom-radio-wrapper">
      {label ? (
        <label className={"font-Poppins font-semibold"}>{label}</label>
      ) : (
        <Fragment />
      )}
      {/* <div> */}
      <div className={"radio-input-row"}>
        {radioData.map((value, index) => {
          return (
            <div className="custom-input-container" key={`value${index}`}>
              <input
                type={"radio"}
                id={`inline-${label}-9+${index}`}
                checked={field.value === value?.value}
                onClick={() => field.onChange(value?.value)}
              />
              <label
                htmlFor={`inline-${label}-9+${index}`}
                key={index}
                className=""
              >
                {value?.label}
              </label>
            </div>
          );
        })}
      </div>
      <span className="custom-error-message">{errorMessage}</span>
      {/* </div> */}
    </div>
    //   </div>
    // </div>
  );
}

export default RadioInput;
