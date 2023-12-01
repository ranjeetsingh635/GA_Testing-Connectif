exports.id = 231;
exports.ids = [231];
exports.modules = {

/***/ 8187:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 5834:
/***/ ((module) => {

// Exports
module.exports = {
	"inputStyle": "InputText_inputStyle__Sxa1F",
	"errorMessage": "InputText_errorMessage__3Fhxi",
	"aaaa": "InputText_aaaa__izqt8",
	"formInputContainer": "InputText_formInputContainer__uez_R"
};


/***/ }),

/***/ 1881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function CheckboxInput(props) {
    const { label , field , formState , checkboxData =[] , textInputProps  } = props;
    const errorMessage = formState.errors?.[field.name]?.message;
    const setValues = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((_value)=>{
        const values = field.value;
        if (!values.includes(_value)) {
            field.onChange([
                ...values,
                _value
            ]);
        } else {
            field.onChange(values.filter((_str)=>_str !== _value));
        }
    }, [
        field
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    label ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "font-Poppins font-semibold",
                        children: label
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `checkBoxWrapper flex`,
                                children: checkboxData.map((value, index)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "checkboxInput",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                            className: "flex gap-1",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "checkbox",
                                                    id: `checkbox-${label}-9+${index}`,
                                                    checked: (field.value || []).includes(value.value),
                                                    ...field,
                                                    ...textInputProps,
                                                    onChange: ()=>{
                                                        setValues(value?.value);
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: value?.label
                                                })
                                            ]
                                        })
                                    }, index);
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: errorMessage
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckboxInput);


/***/ }),

/***/ 4499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function FilePicker(props) {
    const { label , field , formState , left , right  } = props;
    const { 0: file , 1: setFile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const handleChange = (event)=>{
        field?.onChange(event.target.files);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            label ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: field.name,
                className: "font-Poppins font-semibold",
                children: label
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    left,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "file",
                        accept: ".pdf",
                        onChange: handleChange
                    }),
                    right
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilePicker);


/***/ }),

/***/ 6578:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var _Assets_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5597);
/* harmony import */ var _InputText_InputText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3012);
/* harmony import */ var _CheckboxInput_CheckboxInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1881);
/* harmony import */ var _InputPhone_InputPhone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3967);
/* harmony import */ var _InputTextArea_InputTextArea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7328);
/* harmony import */ var _FilePicker_FilePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4499);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _RadioInput_RadioInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7908);
/* harmony import */ var _InputMultiSelect_InputMultiSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1007);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












function FormInput(props) {
    const { name , label , rules , defaultValue , control , textInputProps , type , JSX , step , callingCodeName ="countryCode" , left , right , leftWidth , rightWidth , radioData , checkboxData , min , max , value , multiSelectInputProps , options , singleSelect , customCloseIcon , cropData , setCropData , checked , onChange , multiSwitchInputProps , setValue , trigger , required , customClassName , inputProps ,  } = props;
    const { field , formState  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useController)({
        name,
        rules,
        defaultValue,
        control
    });
    const { 0: showPassword , 1: setShowPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: enabled , 1: setEnabled  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    switch(type){
        case "text":
            {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputText_InputText__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    textInputProps: textInputProps,
                    label: label,
                    field: field,
                    formState: formState,
                    left: left,
                    right: right,
                    leftWidth: leftWidth,
                    rightWidth: rightWidth,
                    customClassName: customClassName
                });
            }
        case "email":
            {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputText_InputText__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    label: label,
                    field: field,
                    formState: formState,
                    textInputProps: textInputProps,
                    left: left,
                    right: right
                });
            }
        case "password":
            {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputText_InputText__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    label: label,
                    field: field,
                    formState: formState,
                    // className={'customInputPassword'}
                    textInputProps: {
                        ...textInputProps,
                        type: showPassword ? "text" : "password"
                    },
                    left: left,
                    right: right ?? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        className: "absolute rounded-full focus:bg-light-primaryPurple-tints-50 right-[1.4rem] top-1/2 translate-y-[-50%] eyeCustomIcon",
                        onClick: ()=>setShowPassword(!showPassword),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_9___default()), {
                            width: `16`,
                            height: `16`,
                            className: `transition-all ${showPassword && `primaryPurpleFilter`}`,
                            src: showPassword ? _Assets_images__WEBPACK_IMPORTED_MODULE_3__/* ["default"].showyeopen */ .Z.showyeopen : _Assets_images__WEBPACK_IMPORTED_MODULE_3__/* ["default"].hideyeclose */ .Z.hideyeclose,
                            alt: showPassword ? `close icon` : `open icon`
                        })
                    })
                });
            }
        case "radioInput":
            {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RadioInput_RadioInput__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    label: label,
                    field: field,
                    formState: formState,
                    textInputProps: textInputProps,
                    left: left,
                    right: right,
                    radioData: radioData
                });
            }
        case "checkInput":
            {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CheckboxInput_CheckboxInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    label: label,
                    field: field,
                    formState: formState,
                    textInputProps: textInputProps,
                    left: left,
                    right: right,
                    checkboxData: checkboxData
                });
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
        case "phone":
            {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputPhone_InputPhone__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    label: label,
                    field: field,
                    formState: formState,
                    inputProps: {
                        ...inputProps
                    },
                    right: right,
                    value: value,
                    setValue: setValue,
                    trigger: trigger,
                    callingCodeName: callingCodeName,
                    required: required
                });
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
        case "multiSelect":
            {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputMultiSelect_InputMultiSelect__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    label: label,
                    field: field,
                    formState: formState,
                    multiSelectInputProps: {
                        ...multiSelectInputProps
                    },
                    options: options,
                    singleSelect: singleSelect,
                    left: left,
                    right: right,
                    customCloseIcon: customCloseIcon
                });
            }
        case "textArea":
            {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputTextArea_InputTextArea__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    label: label,
                    field: field,
                    formState: formState,
                    textInputProps: {
                        ...textInputProps
                    }
                });
            }
        case "file":
            {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FilePicker_FilePicker__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    label: label,
                    field: field,
                    formState: formState
                });
            }
        case "custom":
            {
                return JSX && JSX(props);
            }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormInput);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9261);
/* harmony import */ var multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _InputMultiSelect_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8187);
/* harmony import */ var _InputMultiSelect_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_InputMultiSelect_module_css__WEBPACK_IMPORTED_MODULE_3__);




function InputMultiSelect(props) {
    const { label , field , formState , multiSelectInputProps , left , right , options =[] , singleSelect , customCloseIcon ,  } = props;
    const errorMessage = formState.errors?.[field.name]?.message;
    const { 0: focus , 1: setFocus  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const labelColor = errorMessage ? "error" : field.value ? "primary" : focus ? "primary" : "text";
    const inputColor = errorMessage ? "error" : field.value ? "primary" : focus ? "primary" : "divider";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            label ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: field.name,
                color: labelColor,
                className: "font-Poppins font-semibold",
                children: label
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: !errorMessage ? `${(_InputMultiSelect_module_css__WEBPACK_IMPORTED_MODULE_3___default().multiColor)}` : `${(_InputMultiSelect_module_css__WEBPACK_IMPORTED_MODULE_3___default().borderError)}`,
                children: [
                    left,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_1___default()), {
                        isInvalid: errorMessage,
                        onFocus: ()=>setFocus(true),
                        ...field,
                        onBlur: ()=>{
                            field.onBlur();
                            setFocus(false);
                        },
                        singleSelect: singleSelect,
                        customCloseIcon: customCloseIcon,
                        isObject: false,
                        onRemove: (event)=>field.onChange(event),
                        onSelect: (event)=>field.onChange(event),
                        options: options,
                        ...multiSelectInputProps,
                        showCheckbox: true,
                        className: (_InputMultiSelect_module_css__WEBPACK_IMPORTED_MODULE_3___default())?.listColor
                    }),
                    right
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "custom-error-message",
                children: errorMessage
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputMultiSelect);


/***/ }),

/***/ 3967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5452);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2__WEBPACK_IMPORTED_MODULE_2__);




function InputPhone(props) {
    const { label , field , formState , textInputProps , right , setValue , trigger , callingCodeName , required , value , inputProps ,  } = props;
    const errorMessage = formState.errors?.[field.name]?.message;
    const { 0: focus , 1: setFocus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "telInputRow",
        children: [
            label ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                className: errorMessage ? "text-danger" : focus ? "text-primary" : undefined,
                children: [
                    label,
                    " ",
                    required && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        style: {
                            color: "#ffab40",
                            fontSize: "17px"
                        },
                        children: "*"
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_phone_input_2__WEBPACK_IMPORTED_MODULE_2___default()), {
                        country: "sa",
                        buttonClass: "p-2",
                        enableSearch: true,
                        autocompleteSearch: true,
                        countryCodeEditable: false,
                        value: value,
                        onBlur: ()=>{
                            field.onBlur();
                            setFocus(false);
                        },
                        onChange: (value, data)=>{
                            setValue(callingCodeName, "+" + data.dialCode);
                            setValue(field.name, value.replace(data.dialCode, ""));
                            setTimeout(()=>{
                                trigger(field.name);
                            }, 100);
                        },
                        inputProps: {
                            className: `phone-control-custom ${errorMessage ? "text-danger borderClr" : ""}`,
                            placeholder: "Phone Number",
                            style: {
                                paddingLeft: 65,
                                width: "100%",
                                height: "auto",
                                zIndex: "auto"
                            }
                        }
                    }),
                    right,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "errorMessage",
                        style: {
                            display: errorMessage ? "block" : "none"
                        },
                        children: errorMessage
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputPhone);


/***/ }),

/***/ 3012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InputText_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5834);
/* harmony import */ var _InputText_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_InputText_module_css__WEBPACK_IMPORTED_MODULE_2__);



function InputText(props) {
    const { label , field , formState , left , right , textInputProps , customClassName ,  } = props;
    const errorMessage = formState.errors?.[field.name]?.message;
    const { 0: focus , 1: setFocus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const labelColor = errorMessage ? "error" : field.value ? "primary" : focus ? "primary" : "text";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `mt-[2.8rem] ${(_InputText_module_css__WEBPACK_IMPORTED_MODULE_2___default().formInputContainer)}`,
        children: [
            label ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: field.name,
                color: labelColor,
                className: "text-[1.6rem] leading-normal text-light-primaryBlack mb-[1.2rem]",
                children: label
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `relative mt-[1.2rem]`,
                children: [
                    left && left,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        id: field.name,
                        type: "text",
                        onFocus: ()=>setFocus(true),
                        ...field,
                        onBlur: ()=>{
                            field.onBlur();
                            setFocus(false);
                        },
                        ...textInputProps,
                        className: `block border border-solid border-light-primaryGrey-tints-100 min-h-[5.6rem] p-[1.6rem] w-full rounded-[10px]  text-light-primaryGrey-tints-800 text-[1.6rem] outline outline-2 outline-transparent focus:outline-offset-[2px] focus:outline-light-primaryPurple-tints-600 focus:bg-light-primaryPurple-tints-50 bg-transparent  ${errorMessage ? (_InputText_module_css__WEBPACK_IMPORTED_MODULE_2___default().errorMessage) : (_InputText_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputStyle)} ${left && "pl-[4rem]"} ${right && "pr-[4rem]"}`
                    }),
                    right
                ]
            }),
            errorMessage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "formErrorMessage",
                children: errorMessage?.toString()
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputText);


/***/ }),

/***/ 7328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function InputTextarea(props) {
    const { label , field , formState , textInputProps , left , right , leftWidth , rightWidth , placeholder ,  } = props;
    const errorMessage = formState.errors?.[field.name]?.message;
    const { 0: focus , 1: setFocus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const labelColor = errorMessage ? "error" : field.value ? "primary" : focus ? "primary" : "text";
    const inputColor = errorMessage ? "error" : field.value ? "primary" : focus ? "primary" : "divider";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            label ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: field.name,
                color: labelColor,
                className: "font-Poppins font-semibold",
                children: label
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "customTextArea",
                children: [
                    left,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        id: field.name,
                        type: "textarea",
                        isInvalid: errorMessage ? true : false,
                        focusBorderColor: inputColor,
                        errorBorderColor: inputColor,
                        onFocus: ()=>setFocus(true),
                        ...field,
                        onBlur: ()=>{
                            field.onBlur();
                            setFocus(false);
                        },
                        pl: leftWidth,
                        pr: rightWidth,
                        placeholder: placeholder,
                        ...textInputProps,
                        className: "w-full min-h-120 bg-eyeColor rounded-3xl p-2"
                    }),
                    right
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "formErrorMessage",
                children: errorMessage?.toString()
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputTextarea);


/***/ }),

/***/ 7908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function RadioInput(props) {
    const { label , field , formState , radioData =[]  } = props;
    const errorMessage = formState.errors?.[field.name]?.message;
    return(// <div>
    //   <div>
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "custom-radio-wrapper",
        children: [
            label ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "font-Poppins font-semibold",
                children: label
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "radio-input-row",
                children: radioData.map((value, index)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "custom-input-container",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "radio",
                                id: `inline-${label}-9+${index}`,
                                checked: field.value === value?.value,
                                onClick: ()=>field.onChange(value?.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: `inline-${label}-9+${index}`,
                                className: "",
                                children: value?.label
                            }, index)
                        ]
                    }, `value${index}`);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "custom-error-message",
                children: errorMessage
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioInput);


/***/ }),

/***/ 4026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$b": () => (/* binding */ getRequiredRules),
/* harmony export */   "YS": () => (/* binding */ getEmailValidationRules),
/* harmony export */   "iW": () => (/* binding */ getPhoneNumberValidationRules),
/* harmony export */   "jv": () => (/* binding */ isValidUrl),
/* harmony export */   "tu": () => (/* binding */ getPasswordValidationRules),
/* harmony export */   "xd": () => (/* binding */ getConfirmValidationRules)
/* harmony export */ });
/* unused harmony exports isValidNumber, getNumberData, isValidInputNumber, isValidInputhours, acceptNumbersOnly */
/* harmony import */ var google_libphonenumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6306);
/* harmony import */ var google_libphonenumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_libphonenumber__WEBPACK_IMPORTED_MODULE_0__);

// import { strings } from "./localization";
const getEmailValidationRules = (requiredMessage = "Email is required", invalidMessage = "Email is invalid")=>{
    return {
        validate: (value)=>value?.trim() ? true : requiredMessage,
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: invalidMessage
        }
    };
};
// export const getSignupEmailValidationRules = (
//   requiredMessage: string = `${strings.email} ${strings.is_required}`,
//   invalidMessage: string = `${strings.email} ${strings.is_invalid}`,
//   alreadyExists: string = `${strings.email} ${strings.already_exists}`
// ) => {
//   return {
//     validate: async (value: string) => {
//       if (value.trim()) {
//         // api hit
//         try {
//           const data = await fetcher({
//             url: "/api/v1/web/auth/check-email",
//             method: "POST",
//             data: {
//               email: value,
//             },
//           });
//           if (data?.status === 200) {
//             return true;
//           }
//         } catch (error: any) {
//           console.log(error?.response);
//           if (error?.response?.data?.status === 409) {
//             return alreadyExists;
//           }
//         }
//       } else {
//         return requiredMessage;
//       }
//     },
//     pattern: {
//       value:
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//       message: invalidMessage,
//     },
//   };
// };
const getPasswordValidationRules = (requiredMessage = "Password is required", invalidMessage = " Password should contain at least one uppercase, lowercase, digit,symbol and minimum of 6 characters")=>{
    return {
        validate: (value)=>value.trim() ? true : requiredMessage,
        pattern: {
            value: /^(?=.*?[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9])(?=.*?[0-9]).{6,}$/,
            message: invalidMessage
        }
    };
};
const getConfirmValidationRules = (password)=>{
    return {
        validate: (value)=>value?.trim() ? value === password ? true : "Passwords do not match" : "Confirm Password is required"
    };
};
const getRequiredRules = (label, requiredMessage)=>{
    return {
        validate: (value)=>String(value).trim() ? true : requiredMessage ? requiredMessage : `${label} is required`
    };
};
const phoneUtil = google_libphonenumber__WEBPACK_IMPORTED_MODULE_0__.PhoneNumberUtil.getInstance();
const isValidNumber = (phoneNumber)=>{
    try {
        if (phoneNumber.indexOf(".") !== -1) {
            return false;
        }
        const phone = phoneUtil.parse(phoneNumber);
        return phoneUtil.isValidNumber(phone);
    } catch (error) {
        return false;
    }
};
const getNumberData = (phoneNumber)=>{
    try {
        if (phoneNumber.indexOf(".") !== -1) {
            return false;
        }
        const phone = phoneUtil.parse(phoneNumber);
        return phone;
    } catch (error) {
        return undefined;
    }
};
const getPhoneNumberValidationRules = (country_code)=>{
    return {
        validate: (value)=>value?.trim() ? isValidNumber(`${country_code ? "+" : ""}${country_code}${value}`) ? true : `Phone number is invalid` : `Phone number is required`
    };
};
const isValidInputNumber = (label)=>{
    return {
        validate: (value)=>value ? true : `${label} is required`,
        pattern: {
            value: /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/,
            message: "Invalid Number"
        }
    };
};
const isValidInputhours = (label)=>{
    return {
        validate: (value)=>value !== undefined && value !== "" ? true : `${value} is required`,
        pattern: {
            value: /^[0-9]{1,2}$/,
            message: "Invalid Number"
        }
    };
};
const isValidUrl = ()=>{
    return {
        validate: (value)=>value !== undefined && value !== "" ? true : `URL is required`,
        pattern: {
            value: /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/,
            message: "Invalid Url"
        }
    };
};
const acceptNumbersOnly = (label)=>{
    return {
        validate: (value)=>!value ? `${label} is required` : true,
        pattern: {
            value: /^[0-9]*$/,
            message: `Enter the number`
        }
    };
};


/***/ })

};
;