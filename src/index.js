import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core';
import rootReducers from './reducers/rootReducers'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

const store = createStore(rootReducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  <ThemeProvider theme={theme}>    
    <Provider store={store}>
      <Router>
        <Suspense fallback="Loading...">
          <App />
        </Suspense>
      </Router>    
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

