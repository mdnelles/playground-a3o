import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { darkTheme, lightTheme } from "../components/themes/Theme";
import { SessionState } from "../features/session/session";
import { useAppSelector } from "../redux/hooks";
import CP from "./cp";
import Playground from "./playground";

export default function Home() {
   const session: SessionState = useAppSelector((state) => state.session);
   return (
      <>
         <ThemeProvider theme={!session.darkMode ? lightTheme : darkTheme}>
            <CssBaseline />
            <CP />
            <Playground />
         </ThemeProvider>
      </>
   );
}
