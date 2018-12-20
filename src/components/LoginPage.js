// Stateless functional component
import React from 'react';
import { firebase, googleAuthProvider } from '../firebase/firebase';
import styles from '../styles/components/LoginPage.scss';

const startLogin = () => {
  return firebase.auth().signInWithPopup(googleAuthProvider)
    .then((user) => {
      console.log('startLogin')
    });
};

export const LoginPage = () => (
  <div className={styles.layout}>
    <h1>LoginPage Component</h1>
    <div className={styles.container}>
      <p>Login here</p>
      <button onClick={startLogin}>Login</button>
    </div>
  </div>
);

export default LoginPage;
