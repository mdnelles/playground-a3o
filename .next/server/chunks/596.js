"use strict";
exports.id = 596;
exports.ids = [596];
exports.modules = {

/***/ 596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Playground)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var anim_3d_obj_dist_cjs_components_Obj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony import */ var anim_3d_obj_dist_cjs_components_Obj__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(anim_3d_obj_dist_cjs_components_Obj__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(174);



function Playground() {
    //const dispatch = useAppDispatch();
    const obj = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .C)((state)=>state.obj);
    const faceprops = {
        front: obj.front.show,
        back: obj.back.show,
        left: obj.left.show,
        right: obj.right.show,
        top: obj.top.show,
        top_rear: obj.top_rear.show,
        top_front: obj.top_front.show,
        bottom_rear: obj.bottom_rear.show,
        bottom_front: obj.bottom_front.show,
        bottom: obj.bottom.show
    };
    const custom = {
        bottom: obj.bottom,
        front: obj.bottom,
        back: obj.back,
        top_rear: obj.top_rear,
        top_front: obj.top_front,
        top: obj.top,
        left: obj.left,
        right: obj.right,
        bottom_rear: obj.bottom_rear,
        bottom_front: obj.bottom_front
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            padding: 300
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((anim_3d_obj_dist_cjs_components_Obj__WEBPACK_IMPORTED_MODULE_1___default()), {
                width: obj.width,
                height: obj.height,
                depth: obj.depth,
                perspectiveOrigin: obj.perspectiveOrigin,
                perspective: obj.perspectiveOrigin,
                zIndex: obj.zIndex,
                custom: custom,
                anim1: obj.anim1,
                anim2: obj.anim2,
                faces: faceprops,
                global: obj.global,
                showCenterDiv: obj.showCenterDiv
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    padding: 5
                }
            })
        ]
    });
}


/***/ })

};
;