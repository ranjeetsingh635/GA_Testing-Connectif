import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { Control, RegisterOptions, useController } from "react-hook-form";
import { INPUT_TYPES, SELECT_OPTIONS } from "../../Utils/Types";
import images from "../../Assets/images";
import InputText from "../InputText/InputText";
import CheckboxInput from "../CheckboxInput/CheckboxInput";
import InputPhone from "../InputPhone/InputPhone";
import InputTextArea from "../InputTextArea/InputTextArea";
import FilePicker from "../FilePicker/FilePicker";
import Image from "next/image";
import RadioInput from "../RadioInput/RadioInput";
import InputMultiSelect from "../InputMultiSelect/InputMultiSelect";

export type FormInputProps = {
  name: string;
  label?: string;
  trigger?: any;
  setValue?: any;
  rules?: Omit<RegisterOptions, "valueAsNumber" | "valueAsDate" | "setValueAs">;
  defaultValue?: unknown;
  callingCodeName?: string;
  control?: Control<any>;
  textInputProps?: any;
  setFocus?: (name: any) => void;
  type: INPUT_TYPES;
  textareaProps?: any;
  left?: any;
  leftWidth?: string | number;
  right?: any;
  rightWidth?: string | number;
  JSX?: (_props: Omit<FormInputProps, "JSX">) => any;
  placeholder?: string;
  radioData?: Array<{
    label: string;
    value: string;
  }>;
  checkboxData?: Array<{
    label: string;
    value: string;
  }>;
  min?: number;
  max?: number;
  value?: string;
  step?: number;
  multiSelectInputProps?: any;
  multiSwitchInputProps?: any;
  options?: Array<string>;
  singleSelect?: boolean;
  customCloseIcon?: boolean;
  cropData?: any;
  setCropData?: Dispatch<SetStateAction<File | undefined>>;
  checked?: boolean;
  onChange?: (value: any) => void;
  required?: boolean;
  customClassName?: string;
  inputProps?: any;
};

function FormInput(props: FormInputProps) {
  const {
    name,
    label,
    rules,
    defaultValue,
    control,
    textInputProps,
    type,
    JSX,
    step,
    callingCodeName = "countryCode",
    left,
    right,
    leftWidth,
    rightWidth,
    radioData,
    checkboxData,
    min,
    max,
    value,
    multiSelectInputProps,
    options,
    singleSelect,
    customCloseIcon,
    cropData,
    setCropData,
    checked,
    onChange,
    multiSwitchInputProps,
    setValue,
    trigger,
    required,
    customClassName,
    inputProps,
  } = props;
  const { field, formState } = useController({
    name,
    rules,
    defaultValue,
    control,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [enabled, setEnabled] = useState(false);
  switch (type) {
    case "text": {
      return (
        <InputText
          textInputProps={textInputProps}
          label={label}
          field={field}
          formState={formState}
          left={left}
          right={right}
          leftWidth={leftWidth}
          rightWidth={rightWidth}
          customClassName={customClassName}
        />
      );
    }

    case "email": {
      return (
        <InputText
          label={label}
          field={field}
          formState={formState}
          textInputProps={textInputProps}
          left={left}
          right={right}
        />
      );
    }
    case "password": {
      return (
        <InputText
          label={label}
          field={field}
          formState={formState}
          // className={'customInputPassword'}
          textInputProps={{
            ...textInputProps,
            type: showPassword ? "text" : "password",
          }}
          left={left}
          right={
            right ?? (
              <button
                type="button"
                className={
                  "absolute rounded-full focus:bg-light-primaryPurple-tints-50 right-[1.4rem] top-1/2 translate-y-[-50%] eyeCustomIcon"
                }
                onClick={() => setShowPassword(!showPassword)}
              >
                <Image
                  width={`16`}
                  height={`16`}
                  className={`transition-all ${
                    showPassword && `primaryPurpleFilter`
                  }`}
                  src={showPassword ? images.showyeopen : images.hideyeclose}
                  alt={showPassword ? `close icon` : `open icon`}
                />
              </button>
            )
          }
        />
      );
    }
    case "radioInput": {
      return (
        <RadioInput
          label={label}
          field={field}
          formState={formState}
          textInputProps={textInputProps}
          left={left}
          right={right}
          radioData={radioData}
        />
      );
    }
    case "checkInput": {
      return (
        <CheckboxInput
          label={label}
          field={field}
          formState={formState}
          textInputProps={textInputProps}
          left={left}
          right={right}
          checkboxData={checkboxData}
        />
      );
    }

    // case "date": {
    //   return (
    //     <DateInput
    //       label={label}
    //       field={field}
    //       formState={formState}
    //       textInputProps={textInputProps}
    //       left={left}
    //       right={right}
    //     />
    //   );
    // }
    case "phone": {
      return (
        <InputPhone
          label={label}
          field={field}
          formState={formState}
          inputProps={{
            ...inputProps,
          }}
          right={right}
          value={value}
          setValue={setValue}
          trigger={trigger}
          callingCodeName={callingCodeName}
          required={required}
        />
      );
    }
    // case "range": {
    //   return (
    //     <RangeInput
    //       label={label}
    //       field={field}
    //       formState={formState}
    //       textInputProps={{
    //         ...textInputProps,
    //       }}
    //       right={right}
    //       min={min}
    //       max={max}
    //       value={value}
    //       step={step}
    //     />
    //   );
    // }
    case "multiSelect": {
      return (
        <InputMultiSelect
          label={label}
          field={field}
          formState={formState}
          multiSelectInputProps={{
            ...multiSelectInputProps,
          }}
          options={options}
          singleSelect={singleSelect}
          left={left}
          right={right}
          customCloseIcon={customCloseIcon}
        />
      );
    }

    case "textArea": {
      return (
        <InputTextArea
          label={label}
          field={field}
          formState={formState}
          textInputProps={{
            ...textInputProps,
          }}
        />
      );
    }

    case "file": {
      return <FilePicker label={label} field={field} formState={formState} />;
    }

    case "custom": {
      return JSX && JSX(props);
    }
  }
}

export default FormInput;
