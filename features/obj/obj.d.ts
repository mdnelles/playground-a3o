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
