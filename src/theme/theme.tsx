import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    dark: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    dark?: PaletteOptions['primary'];
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    dark: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#6750A4',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#EADDFF',
      light: '#E8DEF8',
      contrastText: '#FFFFFF',
    },
    tertiary: {
      main: '#7D5260',
      light: '#FFD8E4',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#B3261E',
      contrastText: '#FFFFFF',
    },
    dark: {
      main: '#49454F',
    },
    text: {
      primary: '#1C1B1F',
      secondary: '#49454F',
    },
    background: {
      default: '#FFFBFE',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Roboto, Anton, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h1: {
      fontSize: '1.6rem',
      fontFamily: 'Anton, sans-serif',
      color: '#000',
      fontWeight: 700,
      lineHeight: '127.273%',
    },
    h6: {
      fontSize: '0.8rem',
      fontFamily: 'Roboto, sans-serif',
      color: '#000',
    },
  },
});

export default theme;
