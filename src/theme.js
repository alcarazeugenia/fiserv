import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2F3841",
    },
    secondary: {
      main: "#A1B6C6",
    },
    background: {
      default: "#E7E7E7",
    },
  },

  //Within typography, lineHeight property is unitless and its conversion to px can be done multiplying this number by its fontSize value expressed in px.
  typography: {
    fontFamily: "Inter, sans-serif",
    subtitle1: {
      fontSize: "3.69rem",
      fontWeight: 900,
    },
    subtitle2: {
      fontSize: "3.69rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1.2rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "1.69rem",
      fontWeight: 400,
    },
    button: {
      fontSize: "1.5rem",
      fontWeight: 400,
      textTransform: "capitalize",
    },
    caption: {
      fontSize: "3rem",
      fontWeight: 700,
    },
  },
});

export default theme;
