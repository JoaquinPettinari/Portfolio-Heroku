import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

