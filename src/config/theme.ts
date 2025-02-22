"use client";
import { createTheme } from "@mui/material/styles";
import InputTheme from "./components/InputTheme";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  direction: "rtl",
  palette: {
    primary: {
      main: "#8106b4", // Customize your primary color
    },
    secondary: {
      main: "#dc004e", // Customize your secondary color
    },
    background: {
      default: "#e5e7eb",
    },
  },
  components: {
    ...InputTheme,
  },
});

export default theme;
