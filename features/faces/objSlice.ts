import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { ObjState } from "./obj";

const configCss = (color: string) => {
   return `
   border: 1px solid ${color};
   color:${color};
   backface-visibility: visible;
   text-align:center;
   line-height:10;
   font-family: Arial, Helvetica, sans-serif;`;
};

const initialState: ObjState = {
   faces: {
      front: {
         show: true,
         css: configCss("#F00"),
         body: "FRONT",
      },
      back: {
         show: true,
         css: configCss("#0F0"),
         body: "Back",
      },
      left: {
         show: true,
         css: configCss("#00F"),
         body: "Left",
      },
      right: {
         show: true,
         css: configCss("#F00"),
         body: "Right",
      },
      top: {
         show: true,
         css: configCss("#eb9b34"),
         body: "Top",
      },
      top_rear: {
         show: true,
         css: configCss("#118f7c"),
         body: "Top Rear",
      },
      top_front: {
         show: true,
         css: configCss("#a31492"),
         body: "Top Front",
      },
      bottom_rear: {
         show: true,
         css: configCss("#97a314"),
         body: "Bottom Rear",
      },
      bottom_front: {
         show: true,
         css: configCss("#453721"),
         body: "Bottom Front",
      },
      bottom: {
         show: true,
         css: configCss("#212f45"),
         body: "Bottom",
      },
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
      timing: "ease-in-out",
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
      timing: "ease-in-out",
   },
   width: 160,
   depth: 150,
   height: 160,
   perspectiveOrigin: "50% 50%",
   perspective: 900,
   zIndex: 1,
   global: {
      css: configCss("#111"),
      body: "DEFAULT",
   },
   showCenterDiv: false,
};

export const objSlice = createSlice({
   name: "obj",
   initialState,

   reducers: {
      setObj: (state: ObjState, action: PayloadAction<any>) => {
         action.payload;
      },
      clearObj: (state) => initialState,
   },
});

export const { setObj, clearObj } = objSlice.actions;

export const selectObj = (state: RootState) => state.obj;

export default objSlice.reducer;
