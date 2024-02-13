import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    dark: Palette['primary'];
    light: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    dark?: PaletteOptions['primary'];
    light?: PaletteOptions['primary'];
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    dark: true;
    light: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#415F91',
      light: '#F9F9FF',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#BEE9FF',
      light: '#F3F3FA',
      contrastText: '#FFFFFF',
    },
    tertiary: {
      main: '#02677D',
      light: '#B4EBFF',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#8C1D18',
      light: '#B3261E',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#20A645',
      contrastText: '#FFFFFF',
    },
    dark: {
      main: '#49454F',
      light: '#79747E',
    },
    light: {
      main: '#625B71',
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
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h3: {
      fontSize: '1.5rem',
      fontFamily: 'Roboto, sans-serif',
      color: '#000',
      fontWeight: 400,
      lineHeight: '133.333%',
    },
    h4: {
      fontSize: '1rem',
      fontFamily: 'Roboto, sans-serif',
      color: '#000',
      fontWeight: 400,
      lineHeight: '150%',
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
    body1: {
      fontSize: '0.875rem',
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
