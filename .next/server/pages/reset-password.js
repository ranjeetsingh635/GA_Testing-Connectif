(() => {
var exports = {};
exports.id = 6;
exports.ids = [6];
exports.modules = {

/***/ 925:
/***/ ((module) => {

// Exports
module.exports = {
	"indicatorBar": "ResetPassword_indicatorBar__g14_n",
	"form": "ResetPassword_form__dQeXB"
};


/***/ }),

/***/ 3687:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_Modules_AuthModule_Components_ResetPassword_ResetPassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4037);
/* harmony import */ var src_Modules_LayoutModule_Components_SetupLayoutModule_SetupLayout_SetupLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_Modules_AuthModule_Components_ResetPassword_ResetPassword__WEBPACK_IMPORTED_MODULE_2__]);
src_Modules_AuthModule_Components_ResetPassword_ResetPassword__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function getServerSideProps(context) {
    return {
        props: {
            params: context.query
        }
    };
}
function ResetPasswordPage({ params  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_Modules_LayoutModule_Components_SetupLayoutModule_SetupLayout_SetupLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_Modules_AuthModule_Components_ResetPassword_ResetPassword__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                resetToken: params?.token
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetPasswordPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4037:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_FormBuilder_FormBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3175);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var _ResetPassword_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(925);
/* harmony import */ var _ResetPassword_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ResetPassword_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Hooks_useResetPasswordMutation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9600);
/* harmony import */ var src_Utils_SnackbarHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8545);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_Utils_Validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4026);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_FormBuilder_FormBuilder__WEBPACK_IMPORTED_MODULE_1__, react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _Hooks_useResetPasswordMutation__WEBPACK_IMPORTED_MODULE_3__, src_Utils_SnackbarHandler__WEBPACK_IMPORTED_MODULE_4__]);
([_Components_FormBuilder_FormBuilder__WEBPACK_IMPORTED_MODULE_1__, react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _Hooks_useResetPasswordMutation__WEBPACK_IMPORTED_MODULE_3__, src_Utils_SnackbarHandler__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function ResetPassword(props) {
    const { resetToken  } = props;
    const { control , formState , setValue , trigger , handleSubmit , watch  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        defaultValues: {
            password: "",
            verifyPassword: ""
        },
        mode: "onChange"
    });
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const resetPasswordMutation = (0,_Hooks_useResetPasswordMutation__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const handleResetPassword = handleSubmit((value)=>{
        resetPasswordMutation.mutate({
            password: value?.password,
            token: resetToken
        }, {
            onSuccess: (res)=>{
                const { status , message  } = res?.data;
                if (status === 200 || 201) {
                    src_Utils_SnackbarHandler__WEBPACK_IMPORTED_MODULE_4__/* ["default"].successToast */ .Z.successToast(message);
                    router.push("/login");
                }
            }
        });
    });
    const minSixChracter = new RegExp("(?=.{1,})");
    const upperCaseAlpha = new RegExp("(?=.*?[A-Z])");
    const lowerCaseAlpha = new RegExp("(?=.*[a-z])");
    const numberValidate = new RegExp("(?=.*?[0-9])");
    const specialCharacter = new RegExp("(?=.*[^A-Za-z0-9])");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "max-w-[45.6rem] mx-auto",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "h1 text-center",
                children: "Reset Your Password"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: `mt-[8rem] ${(_ResetPassword_module_css__WEBPACK_IMPORTED_MODULE_7___default().form)}`,
                onSubmit: handleResetPassword,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_FormBuilder_FormBuilder__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        control: control,
                        formState: formState,
                        trigger: trigger,
                        setValue: setValue,
                        formConfigArray: [
                            {
                                name: "password",
                                type: "password",
                                label: "New Password",
                                textInputProps: {
                                    placeholder: "Enter New Password"
                                },
                                rules: (0,src_Utils_Validators__WEBPACK_IMPORTED_MODULE_6__/* .getPasswordValidationRules */ .tu)()
                            },
                            {
                                name: "",
                                type: "custom",
                                label: "",
                                JSX: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-[1rem]",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: `flex gap-[1rem] mb-[1rem] justify-center items-center`,
                                            children: [
                                                minSixChracter.test(watch("password")) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: `flex-1 rounded-[6px] h-[.5rem] bg-light-primaryGrey-tints-200 ${ true && `bg-[#D42E30]`}`
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: `flex-1 rounded-[6px] h-[.5rem] bg-light-primaryGrey-tints-200`
                                                }),
                                                minSixChracter.test(watch("password")) && upperCaseAlpha.test(watch("password")) && lowerCaseAlpha.test(watch("password")) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: `flex-1 rounded-[6px] h-[.5rem] bg-light-primaryGrey-tints-200 ${ true && `bg-[#F9A61B]`}`
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: `flex-1 rounded-[6px] h-[.5rem] bg-light-primaryGrey-tints-200`
                                                }),
                                                minSixChracter.test(watch("password")) && upperCaseAlpha.test(watch("password")) && lowerCaseAlpha.test(watch("password")) && specialCharacter.test(watch("password")) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: `flex-1 rounded-[6px] h-[.5rem] bg-light-primaryGrey-tints-200 ${ true && `bg-[#10AD76]`}`
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: `flex-1 rounded-[6px] h-[.5rem] bg-light-primaryGrey-tints-200`
                                                }),
                                                minSixChracter.test(watch("password")) && upperCaseAlpha.test(watch("password")) && lowerCaseAlpha.test(watch("password")) && specialCharacter.test(watch("password")) && numberValidate.test(watch("password")) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: `flex-1 rounded-[6px] h-[.5rem] bg-light-primaryGrey-tints-200 ${ true && `bg-[#008559]`}`
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: `flex-1 rounded-[6px] h-[.5rem] bg-light-primaryGrey-tints-200`
                                                })
                                            ]
                                        })
                                    })
                            },
                            {
                                name: "verifyPassword",
                                type: "password",
                                label: "Confirm Password",
                                textInputProps: {
                                    placeholder: "Password"
                                },
                                rules: (0,src_Utils_Validators__WEBPACK_IMPORTED_MODULE_6__/* .getConfirmValidationRules */ .xd)(watch("password"))
                            }, 
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: " mt-[3.2rem] primaryBtn text-[1.6rem] p-[1.6rem] rounded-[10px]",
                        disabled: resetPasswordMutation?.isLoading,
                        children: "Set Password"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetPassword);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9600:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Utils_Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8123);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Utils_Helpers__WEBPACK_IMPORTED_MODULE_0__]);
_Utils_Helpers__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const resetPassword = async (data)=>{
    return (0,_Utils_Helpers__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._i)({
        url: `/web/auth/resetPassword`,
        method: "POST",
        data
    });
};
function useResetPasswordMutation() {
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(resetPassword, {
        onSuccess: (responseData)=>{
            console.log("reset pswdddddddddd", responseData);
        }
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useResetPasswordMutation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 6306:
/***/ ((module) => {

"use strict";
module.exports = require("google-libphonenumber");

/***/ }),

/***/ 9261:
/***/ ((module) => {

"use strict";
module.exports = require("multiselect-react-dropdown");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5452:
/***/ ((module) => {

"use strict";
module.exports = require("react-phone-input-2");

/***/ }),

/***/ 1175:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1964:
/***/ ((module) => {

"use strict";
module.exports = require("rxjs");

/***/ }),

/***/ 4524:
/***/ ((module) => {

"use strict";
module.exports = require("states-cities-db");

/***/ }),

/***/ 5641:
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,675,952,664,597,123,188,648,231,175], () => (__webpack_exec__(3687)));
module.exports = __webpack_exports__;

})();