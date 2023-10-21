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
      main: '#E8DEF8',
      light: '#F3EDF7',
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
    success: {
      main: '#20A645',
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
      default: '#FFF',
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
      fontWeight: 400,
      lineHeight: '125%',
    },
    h2: {
      fontSize: '2rem',
      fontFamily: 'Roboto, sans-serif',
      color: '#000',
      fontWeight: 400,
      lineHeight: '127.273%',
    },
    h3: {
      fontSize: '1.5rem',
      fontFamily: 'Roboto, sans-serif',
      color: '#000',
      fontWeight: 400,
      lineHeight: '133.333%',
    },
    h5: {
      fontSize: '0.875rem',
      fontFamily: 'Roboto, sans-serif',
      color: '#000',
      fontWeight: 400,
      lineHeight: '142.857%',
    },
    h6: {
      fontSize: '0.8rem',
      fontFamily: 'Roboto, sans-serif',
      color: '#000',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          borderRadius: '100px',
          textTransform: 'none',
          fontFamily: 'Roboto, sans-serif',
          padding: '0.625rem 1.5rem',
        },
      },
    },
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          padding: '1rem',
          borderRadius: '100px',
          margin: 0,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
          gap: 0,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: 'none',
          padding: '6px',
        },
      },
    },
  },
});

export default theme;
