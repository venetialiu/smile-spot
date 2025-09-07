import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk'; 
import { AUTH } from './constants/actionTypes';

import { GoogleOAuthProvider } from '@react-oauth/google'; 

import reducers from './reducers';
import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

// Rehydrate auth from localStorage
const profile = JSON.parse(localStorage.getItem('profile'));
if (profile) {
  store.dispatch({ type: AUTH, data: profile });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="56398412448-hbpuogsgisk2eqmu05mou03gneovvm6q.apps.googleusercontent.com"> 
      <App />
    </GoogleOAuthProvider>
  </Provider>
);
