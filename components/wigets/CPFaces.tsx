import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import React from "react";
import { faceNames } from "../global/constants";

export default function CPFaces(): JSX.Element {
   const handleChange = (face: string) => {
      console.log(face);
   };
   return (
      <>
         <Grid container>
            {faceNames.map((face) => (
               <Grid item key={face}>
                  <FormGroup>
                     <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label={face}
                        onChange={() => handleChange(face)}
                     />
                  </FormGroup>
               </Grid>
            ))}
         </Grid>
      </>
   );
}
