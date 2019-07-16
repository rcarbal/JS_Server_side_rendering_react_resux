// Startup point for the client side application
import 'babel-polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Routes from './Routes';

const store = createStore(reducers, window.INITIAL_STATE,  applyMiddleware(thunk))
hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);