import Obj from "anim-3d-obj/dist/cjs/components/Obj";
import { useAppSelector } from "../redux/hooks";
import { ObjState } from "../features/obj/obj";

export default function Playground() {
   //const dispatch = useAppDispatch();
   const obj: ObjState = useAppSelector((state) => state.obj);
   const faceprops = {
      front: obj.faces.front.show,
      back: obj.faces.back.show,
      left: obj.faces.left.show,
      right: obj.faces.right.show,
      top: obj.faces.top.show,
      top_rear: obj.faces.top_rear.show,
      top_front: obj.faces.top_front.show,
      bottom_rear: obj.faces.bottom_rear.show,
      bottom_front: obj.faces.bottom_front.show,
      bottom: obj.faces.bottom.show,
   };

   const custom: object = {
      bottom: obj.faces.bottom,
      front: obj.faces.bottom,
      back: obj.faces.back,
      top_rear: obj.faces.top_rear,
      top_front: obj.faces.top_front,
      top: obj.faces.top,
      left: obj.faces.left,
      right: obj.faces.right,
      bottom_rear: obj.faces.bottom_rear,
      bottom_front: obj.faces.bottom_front,
   };

   return (
      <div style={{ padding: 300 }}>
         <Obj
            width={obj.width}
            height={obj.height}
            depth={obj.depth}
            perspectiveOrigin={obj.perspectiveOrigin}
            perspective={obj.perspectiveOrigin}
            zIndex={obj.zIndex}
            custom={custom}
            anim1={obj.anim1}
            anim2={obj.anim2}
            faces={faceprops}
            global={obj.global}
            showCenterDiv={obj.showCenterDiv}
         >
            {}
         </Obj>
         <div style={{ padding: 5 }} />
      </div>
   );
}
