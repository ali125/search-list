import { Components, Theme } from "@mui/material/styles";

const InputTheme: Components<Omit<Theme, "components">> = {
  MuiFilledInput: {
    styleOverrides: {
      root: {
        backgroundColor: "#f3f3f3", // Custom background for filled input
        "&:hover": {
          backgroundColor: "#e0e0e0", // Hover effect
        },
        "&.Mui-focused": {
          borderColor: "green",
        },
        padding: 6,
        borderRadius: 4,
      },

      input: {
        padding: "8px 12px !important",
        textAlign: "right",
      },
    },
  },
};

export default InputTheme;
