import React, { useEffect, useState } from "react";

import Paper from "@mui/material/Paper";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import MenuIcon from "@mui/icons-material/Menu";
import { SessionState } from "../features/session/session";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setSession } from "../features/session/sessionSlice";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";

import CPTabs from "../components/wigets/Tabs/TabPanel";
import { Tooltip } from "@mui/material";

const heightMax = 600,
   widthMax = 400;

export default function CP(): JSX.Element {
   const dispatch = useAppDispatch();
   const session: SessionState = useAppSelector((state) => state.session);
   const { darkMode, cpOpen } = session;
   const [width, setWidth] = useState<number>(heightMax);
   const [height, setHeight] = useState<number>(widthMax);

   const togCP = () => {
      cpOpen
         ? (setWidth(120), setHeight(77))
         : (setWidth(widthMax), setHeight(heightMax));
      dispatch(setSession({ ...session, cpOpen: !cpOpen }));
   };
   const togDM = () => {
      dispatch(setSession({ ...session, darkMode: !darkMode }));
   };

   useEffect(() => {
      console.log(cpOpen);
   }, [cpOpen]);

   return (
      <>
         <Paper sx={{ p: 2, m: 1, width, height }}>
            <Grid container spacing={2}>
               <Grid item>
                  <IconButton color='primary' onClick={togCP}>
                     <Tooltip title='Toggle Menu' sx={{ p: 0 }}>
                        <MenuIcon />
                     </Tooltip>
                  </IconButton>
                  <IconButton color='primary' onClick={togDM}>
                     <Tooltip title='toggle dark mode' sx={{ p: 0 }}>
                        <SettingsBrightnessIcon />
                     </Tooltip>
                  </IconButton>
               </Grid>
            </Grid>
            {cpOpen ? <CPTabs /> : <></>}
         </Paper>
      </>
   );
}
