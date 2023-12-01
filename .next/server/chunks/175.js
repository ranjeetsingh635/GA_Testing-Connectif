"use strict";
exports.id = 175;
exports.ids = [175];
exports.modules = {

/***/ 3175:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormInput_FormInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6578);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FormInput_FormInput__WEBPACK_IMPORTED_MODULE_2__]);
_FormInput_FormInput__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function FormBuilder(props) {
    const { formConfigArray , control , setFocus , formState , trigger , setValue  } = props;
    const onNextInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((index, configArray)=>{
        if (configArray[index + 1]) {
            if (setFocus && configArray[index + 1].type !== "custom" && configArray[index + 1].type !== "select" && configArray[index + 1].type !== "autocomplete" && configArray[index + 1].type !== "date") {
                if (setFocus) {
                    setFocus(configArray[index + 1].name);
                }
            }
        }
    }, [
        setFocus
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            formConfigArray.map((item, index)=>Array.isArray(item) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "formRow flex gap-[15px] mb-[2.8rem]",
                            children: item.map((innerItem, innerIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "formCol flex-1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormInput_FormInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                ...innerItem,
                                                control: control,
                                                textInputProps: {
                                                    ...innerItem.textInputProps,
                                                    onSubmitEditing: innerItem.textInputProps?.onSubmitEditing ?? (()=>{
                                                        onNextInput(innerIndex === item.length - 1 ? index : innerIndex, innerIndex === item.length - 1 ? formConfigArray : item);
                                                    }),
                                                    returnKeyType: index !== formConfigArray.length - 1 ? "next" : "done"
                                                },
                                                trigger: trigger,
                                                setValue: setValue
                                            })
                                        }),
                                        innerIndex !== item.length - 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "dNone",
                                            style: {
                                                width: 0
                                            }
                                        })
                                    ]
                                }, innerItem.name))
                        }),
                        index !== formConfigArray.length - 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "dNone",
                            style: {
                                height: 0
                            }
                        })
                    ]
                }, index) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormInput_FormInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            ...item,
                            control: control,
                            textInputProps: {
                                ...item.textInputProps,
                                onSubmitEditing: item.textInputProps?.onSubmitEditing ?? (()=>{
                                    onNextInput(Array.isArray(formConfigArray[index + 1]) ? -1 : index, Array.isArray(formConfigArray[index + 1]) ? formConfigArray[index + 1] : formConfigArray);
                                }),
                                returnKeyType: index !== formConfigArray.length - 1 ? "next" : "done"
                            },
                            trigger: trigger,
                            setValue: setValue
                        }),
                        index !== formConfigArray.length - 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "dNone",
                            style: {
                                height: 0
                            }
                        })
                    ]
                }, item.name)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "dNone",
                style: {
                    height: 0,
                    display: "none"
                }
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormBuilder);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;