import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme';
import { Container, makeStyles, ThemeProvider } from '@material-ui/core';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Router>
        <Suspense fallback="Loading...">
            <App />
        </Suspense>
      </Router>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

