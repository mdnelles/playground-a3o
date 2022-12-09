"use strict";
exports.id = 570;
exports.ids = [570];
exports.modules = {

/***/ 474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CP)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(168);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "@mui/icons-material/SettingsBrightness"
var SettingsBrightness_ = __webpack_require__(83);
var SettingsBrightness_default = /*#__PURE__*/__webpack_require__.n(SettingsBrightness_);
// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var Menu_ = __webpack_require__(365);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: ./redux/hooks.ts
var hooks = __webpack_require__(174);
// EXTERNAL MODULE: ./features/session/sessionSlice.ts
var sessionSlice = __webpack_require__(474);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Tabs"
var Tabs_ = __webpack_require__(544);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);
// EXTERNAL MODULE: external "@mui/material/Tab"
var Tab_ = __webpack_require__(307);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Checkbox"
var Checkbox_ = __webpack_require__(330);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);
// EXTERNAL MODULE: external "@mui/material/FormControlLabel"
var FormControlLabel_ = __webpack_require__(185);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_);
// EXTERNAL MODULE: external "@mui/material/FormGroup"
var FormGroup_ = __webpack_require__(860);
var FormGroup_default = /*#__PURE__*/__webpack_require__.n(FormGroup_);
;// CONCATENATED MODULE: ./components/global/constants.ts
const faceNames = [
    "front",
    "back",
    "left",
    "right",
    "top",
    "bottom",
    "top_rear",
    "top_front",
    "bottom_rear",
    "bottom_front"
];

;// CONCATENATED MODULE: ./components/wigets/CPFaces.tsx







function CPFaces() {
    const handleChange = (face)=>{
        console.log(face);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
            container: true,
            children: faceNames.map((face)=>/*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((FormGroup_default()), {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                            control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                defaultChecked: true
                            }),
                            label: face,
                            onChange: ()=>handleChange(face)
                        })
                    })
                }, face))
        })
    });
}

;// CONCATENATED MODULE: ./components/wigets/Tabs/TabPanel.tsx







function TabPanel(props) {
    const { children , value , index , ...other } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        role: "tabpanel",
        hidden: value !== index,
        id: `simple-tabpanel-${index}`,
        "aria-labelledby": `simple-tab-${index}`,
        ...other,
        children: value === index && /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            sx: {
                p: 1
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                children: children
            })
        })
    });
}
function a11yProps(index) {
    return {
        "id": `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}
function CPTabs() {
    const [value, setValue] = external_react_.useState(0);
    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            width: "100%"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    borderBottom: 1,
                    borderColor: "divider"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Tabs_default()), {
                    value: value,
                    onChange: handleChange,
                    "aria-label": "cp-tabs",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            label: "Faces",
                            ...a11yProps(0)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            label: "Style",
                            ...a11yProps(1)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            label: "Anim",
                            ...a11yProps(2)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            label: "3d",
                            ...a11yProps(3)
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TabPanel, {
                value: value,
                index: 0,
                children: /*#__PURE__*/ jsx_runtime_.jsx(CPFaces, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TabPanel, {
                value: value,
                index: 1,
                children: "Style"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TabPanel, {
                value: value,
                index: 2,
                children: "Anim"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TabPanel, {
                value: value,
                index: 2,
                children: "3d"
            })
        ]
    });
}

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(692);
;// CONCATENATED MODULE: ./pages/cp.tsx











const heightMax = 600, widthMax = 400;
function CP() {
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const session = (0,hooks/* useAppSelector */.C)((state)=>state.session);
    const { darkMode , cpOpen  } = session;
    const [width, setWidth] = (0,external_react_.useState)(heightMax);
    const [height, setHeight] = (0,external_react_.useState)(widthMax);
    const togCP = ()=>{
        cpOpen ? (setWidth(120), setHeight(77)) : (setWidth(widthMax), setHeight(heightMax));
        dispatch((0,sessionSlice/* setSession */.KY)({
            ...session,
            cpOpen: !cpOpen
        }));
    };
    const togDM = ()=>{
        dispatch((0,sessionSlice/* setSession */.KY)({
            ...session,
            darkMode: !darkMode
        }));
    };
    (0,external_react_.useEffect)(()=>{
        console.log(cpOpen);
    }, [
        cpOpen
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Paper_default()), {
            sx: {
                p: 2,
                m: 1,
                width,
                height
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    container: true,
                    spacing: 2,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        item: true,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                color: "primary",
                                onClick: togCP,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Tooltip, {
                                    title: "Toggle Menu",
                                    sx: {
                                        p: 0
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {})
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                color: "primary",
                                onClick: togDM,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Tooltip, {
                                    title: "toggle dark mode",
                                    sx: {
                                        p: 0
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((SettingsBrightness_default()), {})
                                })
                            })
                        ]
                    })
                }),
                cpOpen ? /*#__PURE__*/ jsx_runtime_.jsx(CPTabs, {}) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
            ]
        })
    });
}


/***/ }),

/***/ 174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useAppSelector),
/* harmony export */   "T": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ })

};
;