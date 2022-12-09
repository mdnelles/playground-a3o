import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CPFaces from "../CPFaces";

interface TabPanelProps {
   children?: React.ReactNode;
   index: number;
   value: number;
}

function TabPanel(props: TabPanelProps) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role='tabpanel'
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box sx={{ p: 1 }}>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>
   );
}

function a11yProps(index: number) {
   return {
      "id": `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
   };
}

export default function CPTabs() {
   const [value, setValue] = React.useState(0);

   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
   };

   return (
      <Box sx={{ width: "100%" }}>
         <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChange} aria-label='cp-tabs'>
               <Tab label='Faces' {...a11yProps(0)} />
               <Tab label='Style' {...a11yProps(1)} />
               <Tab label='Anim' {...a11yProps(2)} />
               <Tab label='3d' {...a11yProps(3)} />
            </Tabs>
         </Box>
         <TabPanel value={value} index={0}>
            <CPFaces />
         </TabPanel>
         <TabPanel value={value} index={1}>
            Style
         </TabPanel>
         <TabPanel value={value} index={2}>
            Anim
         </TabPanel>
         <TabPanel value={value} index={2}>
            3d
         </TabPanel>
      </Box>
   );
}
