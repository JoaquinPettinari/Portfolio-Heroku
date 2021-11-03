import { createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#191919',
    },
    secondary: {
      main: '#4db6ad',
    },
  },
  typography: {
    fontFamily: [
      'IBM Plex Sans Arabic',
       'sans-serif'
    ].join(','),
  },  
});

export default theme;