import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Helvetica",
    displaySmall: {
      fontFamily: "Helvetica",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      color: "blue",
    },
    displayMedium: {
      fontFamily: "Helvetica",
      fontWeight: 400,
      fontSize: "4rem",
      lineHeight: 1.8,
      color: "blue",
    },
    displayLarge: {
      fontFamily: "Helvetica",
      fontWeight: 400,
      fontSize: "6rem",
      lineHeight: 2,
      color: "blue",
    },
    // Disable h3 variant
    h3: undefined,
  },
});
