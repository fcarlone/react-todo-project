// Stateless functional component
import React from 'react';
import { firebase, googleAuthProvider } from '../firebase/firebase';

const startLogin = () => {
  return firebase.auth().signInWithPopup(googleAuthProvider)
    .then((user) => {
      console.log('startLogin', user)
    });
};

export const LoginPage = () => (
  <div>
    <h1>LoginPage Component</h1>
    <button onClick={startLogin}>Login</button>
  </div>
);

