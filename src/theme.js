import { createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3b6978',
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