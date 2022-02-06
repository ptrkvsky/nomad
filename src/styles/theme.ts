import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { frFR } from '@mui/material/locale';

// Create a theme instance.
const theme = createTheme(
  {
    typography: {
      fontFamily: `Poppins, Arial`,
    },
    palette: {
      primary: {
        main: `hsla(185 93% 32% / 1)`,
      },
      secondary: {
        main: `#19857b`,
      },
      error: {
        main: red.A400,
      },
      text: {
        primary: `#074439`,
      },
    },
  },
  frFR,
);

export default theme;
