"use client";
import { createTheme } from "@mui/material/styles";
import { Titillium_Web } from "next/font/google";

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["300", "600", "700"],
});

const theme = createTheme({
  typography: {
    fontFamily: titillium.style.fontFamily,
    fontWeightBold: "600",
    fontWeightRegular: "300",
    allVariants: { color: "#363636" },
    body1: {
      "& strong": {
        fontWeight: "600",
      },
    },
    h1: {
      fontSize: 32,
      fontWeight: "300",

      "& strong": {
        fontWeight: "600",
      },

      "@media (min-width:600px)": {
        fontSize: 48,
      },
    },
    h2: {
      fontSize: 24,
      fontWeight: "300",

      "& strong": {
        fontWeight: "600",
      },

      "@media (min-width:600px)": {
        fontSize: 32,
      },
    },
    button: {
      fontWeight: "600",
    },
  },
  palette: {
    primary: {
      light: "#e5e5ff",
      main: "#252552",
    },

    secondary: {
      light: "#fff2f2",
      main: "#D1224A",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: "8px",
          fontSize: "16px",

          "@media (min-width:600px)": {
            padding: "8px 22px", // padding padrão do botão "large"
            fontSize: "0.9375rem",
          },
        },
        containedSecondary: {
          // color: "#363636",
        },
      },
    },
  },
});

export default theme;
