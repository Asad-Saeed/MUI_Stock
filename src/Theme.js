import { createTheme } from "@mui/material/styles";
import { red, teal } from "@mui/material/colors";
const Theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: teal[500],
    },
  },
  typography: {
    fontFamily: ["'Oswald', sans-serif"],
    h2: {
      fontFamily: ["sans-serif"],
      fontSize: "2rem",
    },
  },
  spacing: 10,
  //   Padding margin by defult 1=8px now we convert it in 10px
});
export default Theme;
