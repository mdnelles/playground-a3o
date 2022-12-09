export type FaceType = {
   show: boolean;
   css: string;
   body: any;
};

export type AnimType = {
   border?: string;
   degreesHi?: number;
   degreesLow?: number;
   delay: number;
   direction: string;
   duration: number;
   fillMode: string;
   iterationCount: string | number;
   name: string;
   timing: string;
};

export interface ObjState {
   faces: {
      front: FaceType;
      back: FaceType;
      left: FaceType;
      right: FaceType;
      top: FaceType;
      top_rear: FaceType;
      top_front: FaceType;
      bottom_rear: FaceType;
      bottom_front: FaceType;
      bottom: FaceType;
   };
   anim1: AnimType;
   anim2: AnimType;
   width: number;
   height: number;
   depth: number;
   perspectiveOrigin: string;
   perspective: number;
   zIndex: number;
   global: any;
   showCenterDiv: boolean;
}
