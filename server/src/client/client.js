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
import axios from 'axios';
import Routes from './Routes';

const axiosInstance = axios.create({
  baseURL: '/api'
});

const store = createStore(reducers, window.INITIAL_STATE,  
  applyMiddleware(thunk.withExtraArgument(axiosInstance)));
hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);