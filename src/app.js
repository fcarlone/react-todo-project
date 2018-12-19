import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';

const jsx = (
  <AppRouter />
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    renderApp();
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
    console.log('log in')
  } else {
    renderApp();
    history.push('/');
    console.log('log out')
  }
});
