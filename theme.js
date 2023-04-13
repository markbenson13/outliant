import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#000000",
      dark: "#ececec",
    },
    secondary: {
      main: "#636262",
    },
    success: {
      main: "#4caf50",
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: "Montserrat",
    color: "#636262",
    h3: {
      fontWeight: 700,
      fontSize: "2.2rem",
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.75rem",
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
          padding: "1rem",
          borderRadius: "10px",
        },
      },
    },
  },
});

export default theme;
