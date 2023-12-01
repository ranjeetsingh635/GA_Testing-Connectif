"use strict";
exports.id = 123;
exports.ids = [123];
exports.modules = {

/***/ 2005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ Hooks_useAuthValue),
  "Y6": () => (/* binding */ getAuthValue),
  "vb": () => (/* binding */ setAuthValue)
});

// UNUSED EXPORTS: resetAuthValue

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/Hooks/useObservableValue.ts

function useObservableValue(observer) {
    const observerRef = (0,external_react_.useRef)(observer);
    const { 0: value , 1: setValue  } = (0,external_react_.useState)(observerRef.current.getValue());
    (0,external_react_.useEffect)(()=>{
        const subscription = observerRef.current.subscribe((item)=>{
            setValue(item);
        });
        return ()=>{
            subscription.unsubscribe();
        };
    }, []);
    return value;
}
/* harmony default export */ const Hooks_useObservableValue = (useObservableValue);

// EXTERNAL MODULE: ./src/Modules/AuthModule/Services/AuthService.ts + 1 modules
var Services_AuthService = __webpack_require__(3973);
;// CONCATENATED MODULE: ./src/Modules/AuthModule/Hooks/useAuthValue.ts


function useAuthValue() {
    return Hooks_useObservableValue(Services_AuthService/* default.authState$ */.Z.authState$);
}
/* harmony default export */ const Hooks_useAuthValue = (useAuthValue);
const getAuthValue = ()=>Services_AuthService/* default.authState$.getValue */.Z.authState$.getValue();
const setAuthValue = (authState)=>Services_AuthService/* default.authState$.next */.Z.authState$.next(authState);
const resetAuthValue = ()=>AuthService.resetAuthValue();


/***/ }),

/***/ 3973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Services_AuthService)
});

// EXTERNAL MODULE: external "rxjs"
var external_rxjs_ = __webpack_require__(1964);
;// CONCATENATED MODULE: ./src/Utils/PersistStorage.ts
class PersistStorage {
    constructor(keyName, observer){
        this.keyName = keyName;
        this.observer = observer;
        if (false) {}
    }
    init = async ()=>{};
}
/* harmony default export */ const Utils_PersistStorage = (PersistStorage);

;// CONCATENATED MODULE: ./src/Modules/AuthModule/Services/AuthService.ts


class AuthService {
    queryKeys = {};
    initialAuthState = {
        loggedIn: false,
        user: undefined,
        token: "",
        accountType: "GOOGLE",
        latitude: undefined,
        longitude: undefined,
        location: undefined,
        language: "en"
    };
    initialRememberMe = {
        email: "",
        password: "",
        checkRemember: false
    };
    authState$ = new external_rxjs_.BehaviorSubject(this.initialAuthState);
    rememberMe$ = new external_rxjs_.BehaviorSubject(this.initialRememberMe);
    constructor(){
        new Utils_PersistStorage("authState", this.authState$);
        new Utils_PersistStorage("rememberMe", this.rememberMe$);
    }
    resetAuthValue = ()=>{
        this.authState$.next(this.initialAuthState);
    };
    resetRememberMe = ()=>{
        this.rememberMe$.next(this.initialRememberMe);
    };
}
/* harmony default export */ const Services_AuthService = (new AuthService());


/***/ }),

/***/ 8123:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_i": () => (/* binding */ fetcher),
/* harmony export */   "qQ": () => (/* binding */ onError)
/* harmony export */ });
/* unused harmony exports COUNTRIES, countryOptions, jsonToFormData, jsonToFormDataWithArray, convertImagesToBase64, getBase64, fetcherUrl, filterUrlData, getNextPageParam, isValidJson, combineStringIds, convertFirstLetterToUpperCaseWithSpace, inOrderDays */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SnackbarHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8545);
/* harmony import */ var states_cities_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4524);
/* harmony import */ var states_cities_db__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(states_cities_db__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Modules_AuthModule_Hooks_useAuthValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2005);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SnackbarHandler__WEBPACK_IMPORTED_MODULE_1__]);
_SnackbarHandler__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// import { getAuthValue } from "../Modules/AuthModule/Hooks/useAuthValue";
// import AuthService from "../Modules/AuthModule/Services/AuthService";

//@ts-ignore


const COUNTRIES = states_cities_db__WEBPACK_IMPORTED_MODULE_2___default().getCountries();
const countryOptions = COUNTRIES.map(({ name , prefix  })=>({
        label: prefix + " - " + name,
        value: prefix
    }));
const fetcher = (config)=>{
    const { url , method ="GET" , data , headers  } = config;
    const { token  } = (0,_Modules_AuthModule_Hooks_useAuthValue__WEBPACK_IMPORTED_MODULE_3__/* .getAuthValue */ .Y6)();
    return axios__WEBPACK_IMPORTED_MODULE_0___default().request({
        baseURL: `http://3.28.9.147:3000/`,
        url,
        method,
        data,
        headers: {
            Authorization: `Bearer ${token ?? ""}`,
            ...headers
        },
        ...config
    });
};
// export const FILE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
const onError = (error)=>{
    if (error?.response) {
        console.log({
            error: error?.response
        });
        if (error?.response?.status === 401) {
        // AuthService.resetAuthValue();
        }
        if (error?.response?.data?.message) {
            _SnackbarHandler__WEBPACK_IMPORTED_MODULE_1__/* ["default"].errorToast */ .Z.errorToast(error?.response?.data?.message);
        }
    } else {
        console.log({
            error
        });
    }
};
const jsonToFormData = (data)=>{
    const formData = new FormData();
    for(let key in data){
        if (data[key] !== null && data[key] !== undefined) {
            if (Array.isArray(data[key])) {
                data[key].forEach((element)=>{
                    formData.append(key, element);
                });
            } else {
                formData.append(key, data[key]);
            }
        }
    }
    return formData;
};
const jsonToFormDataWithArray = (data)=>{
    const formData = new FormData();
    for(let key in data){
        if (data[key] !== null && data[key] !== undefined) {
            if (Array.isArray(data[key])) {
                data[key].forEach((element, index)=>{
                    for(let keys in element){
                        formData.append(`${key}[${index}][${keys}]`, JSON.stringify(element[keys]));
                    }
                });
            } else {
                formData.append(key, data[key]);
            }
        }
    }
    return formData;
};
const convertImagesToBase64 = (file)=>{
    return new Promise((resolve, reject)=>{
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = function() {
            resolve(fileReader.result);
        };
        fileReader.onerror = function(error) {
            console.log("Error: ", error);
            reject(error);
        };
    });
};
const getBase64 = (file, cb)=>{
    if (false) {}
};
const fetcherUrl = (config)=>{
    const { url , method ="GET" , data  } = config;
    return axios.request({
        url,
        method,
        data,
        ...config
    });
};
const filterUrlData = (router, routeName, keyName, value)=>{
    const data = router.query;
    if (value === "") {
        delete data[keyName];
    } else {
        data[keyName] = value;
    }
    const query = new URLSearchParams(data).toString();
    router.push(`${routeName}?${query}`);
};
//----------------for socket-----------------//
const getNextPageParam = (lastPage)=>{
    const { count , limit , page  } = lastPage.data.data;
    const totalPages = Math.ceil(count / limit);
    return totalPages > page ? page + 1 : undefined;
};
const isValidJson = (str)=>{
    try {
        JSON.parse(str);
        return true;
    } catch (error) {
        return false;
    }
};
const combineStringIds = (id1, id2)=>{
    return `${id1}${id2}`.split("").sort((a, b)=>a.charCodeAt(0) - b.charCodeAt(0)).join("");
};
const convertFirstLetterToUpperCaseWithSpace = (item)=>{
    let splitItem = item?.split(" ");
    for(let i = 0; i < splitItem?.length; i++){
        splitItem[i] = splitItem[i].charAt(0).toUpperCase() + splitItem[i].substring(1).toLowerCase();
    }
    return splitItem?.join(" ");
};
const inOrderDays = (arr)=>{
    const list = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];
    return list.filter((each)=>arr.includes(each));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8545:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_0__]);
react_toastify__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

class SnackbarHandler {
    errorToast = (text)=>{
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast)(text, {
            position: "top-right",
            type: "error"
        });
    };
    successToast = (text)=>{
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast)(text, {
            position: "top-right",
            type: "success"
        });
    };
    normalToast = (text)=>{
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast)(text, {
            position: "top-right",
            type: "default"
        });
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new SnackbarHandler());

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;