import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
// https://bareynol.github.io/mui-theme-creator/
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#251e5b',
    },
    secondary: {
      main: '#00dec2',
    },
  },
});

export default theme;
