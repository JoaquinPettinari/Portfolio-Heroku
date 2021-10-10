import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core';

ReactDOM.render(
  <ThemeProvider theme={theme}>    
    <Router>
      <Suspense fallback="Loading...">
        <App />
      </Suspense>
    </Router>    
  </ThemeProvider>,
  document.getElementById('root')
);

