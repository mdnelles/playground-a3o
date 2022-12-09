(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KY": () => (/* binding */ setSession),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports sessionSlice, clearSession, selectSession */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    init: true,
    cpOpen: true,
    darkMode: true
};
const sessionSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "session",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setSession: (state, action)=>action.payload,
        clearSession: (state)=>initialState
    }
});
const { setSession , clearSession  } = sessionSlice.actions;
const selectSession = (state)=>state.session;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sessionSlice.reducer);


/***/ }),

/***/ 587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(184);
// EXTERNAL MODULE: ./features/session/sessionSlice.ts
var sessionSlice = __webpack_require__(474);
;// CONCATENATED MODULE: ./features/obj/objSlice.ts

const configCss = (color)=>{
    return `
   border: 1px solid ${color};
   color:${color};
   backface-visibility: visible;
   text-align:center;
   line-height:10;
   font-family: Arial, Helvetica, sans-serif;`;
};
const initialState = {
    front: {
        show: true,
        css: configCss("#F00"),
        body: "FRONT"
    },
    back: {
        show: true,
        css: configCss("#0F0"),
        body: "Back"
    },
    left: {
        show: true,
        css: configCss("#00F"),
        body: "Left"
    },
    right: {
        show: true,
        css: configCss("#F00"),
        body: "Right"
    },
    top: {
        show: true,
        css: configCss("#eb9b34"),
        body: "Top"
    },
    top_rear: {
        show: true,
        css: configCss("#118f7c"),
        body: "Top Rear"
    },
    top_front: {
        show: true,
        css: configCss("#a31492"),
        body: "Top Front"
    },
    bottom_rear: {
        show: true,
        css: configCss("#97a314"),
        body: "Bottom Rear"
    },
    bottom_front: {
        show: true,
        css: configCss("#453721"),
        body: "Bottom Front"
    },
    bottom: {
        show: true,
        css: configCss("#212f45"),
        body: "Bottom"
    },
    anim1: {
        border: "",
        degreesHi: -15,
        degreesLow: 15,
        delay: 0,
        direction: "normal",
        duration: 8,
        fillMode: "forward",
        iterationCount: "infinite",
        name: "Y360",
        timing: "ease-in-out"
    },
    anim2: {
        border: "",
        degreesHi: 15,
        degreesLow: -15,
        delay: 0,
        direction: "normal",
        duration: 18,
        fillMode: "forward",
        iterationCount: "infinite",
        name: "X360",
        timing: "ease-in-out"
    },
    width: 160,
    depth: 150,
    height: 160,
    perspectiveOrigin: "50% 50%",
    perspective: 900,
    zIndex: 1,
    global: {
        css: configCss("#111"),
        body: "DEFAULT"
    },
    showCenterDiv: false
};
const objSlice = (0,toolkit_.createSlice)({
    name: "obj",
    initialState,
    reducers: {
        setObj: (state, action)=>{
            try {} catch (error) {
                console.log(error);
            }
        },
        clearObj: (state)=>initialState
    }
});
const { setObj , clearObj  } = objSlice.actions;
const selectObj = (state)=>state.obj;
/* harmony default export */ const obj_objSlice = (objSlice.reducer);

;// CONCATENATED MODULE: ./features/snackbar/snackbarSlice.ts

const initFace = {
    msg: "Welcome to the Employee App",
    severity: "info"
};
const snackbarSlice_initialState = {
    visible: true,
    cubeFocus: 1,
    custom: [
        initFace,
        initFace,
        initFace,
        initFace,
        initFace
    ]
};
const snackbarSlice = (0,toolkit_.createSlice)({
    name: "snackbar",
    initialState: snackbarSlice_initialState,
    reducers: {
        setSnackbar: (state, action)=>{
            const { msg ="" , severity ="info" , visible =true  } = action.payload;
            const cubeFocus = state.cubeFocus + 1 <= 4 ? state.cubeFocus + 1 : 1;
            const tmp = state.custom;
            tmp[cubeFocus] = {
                msg,
                severity
            };
            try {
                state.visible = visible;
                state.cubeFocus = cubeFocus;
                state.custom = tmp;
            } catch (error) {
                console.log(error);
            }
        },
        clearSnackbar: (state)=>snackbarSlice_initialState
    }
});
const { setSnackbar , clearSnackbar  } = snackbarSlice.actions;
const selectSnackbar = (state)=>state.snackbar.value;
// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
const snackbarInit = (user)=>(dispatch)=>{
        dispatch(setSnackbar(user));
    };
/* harmony default export */ const snackbar_snackbarSlice = (snackbarSlice.reducer);

;// CONCATENATED MODULE: ./redux/store.ts




const store = (0,toolkit_.configureStore)({
    reducer: {
        session: sessionSlice/* default */.ZP,
        snackbar: snackbar_snackbarSlice,
        obj: obj_objSlice
    }
});

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(692);
;// CONCATENATED MODULE: ./pages/_app.tsx





function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_redux_.Provider, {
        store: store,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.CssBaseline, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}


/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 22:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(587));
module.exports = __webpack_exports__;

})();