"use strict";
exports.id = 648;
exports.ids = [648];
exports.modules = {

/***/ 5648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SetupLayout_SetupLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/Modules/LayoutModule/Components/SetupLayoutModule/Breadcrump/Breadcrump.tsx

function BreadCrump() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `mt-15`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `text-gray text-14`,
                children: [
                    "Home/",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: `text-black`,
                        children: "Register"
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const Breadcrump = (BreadCrump);

// EXTERNAL MODULE: ./src/Modules/LayoutModule/Components/SetupLayoutModule/Footer/Footer.tsx
var Footer = __webpack_require__(3262);
// EXTERNAL MODULE: ./src/Modules/LayoutModule/Components/SetupLayoutModule/Header/Header.tsx
var Header = __webpack_require__(8220);
;// CONCATENATED MODULE: ./src/Modules/LayoutModule/Components/SetupLayoutModule/SetupLayout/SetupLayout.tsx




function SetupLayout(props) {
    const { children  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Breadcrump, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    });
}
/* harmony default export */ const SetupLayout_SetupLayout = (SetupLayout);


/***/ })

};
;