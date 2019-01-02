import React from 'react';
import { Link } from "react-router-dom";
import { firebase, googleAuthProvider } from '../firebase/firebase';
import styles from '../styles/components/LoginPage.scss';

const startLogin = () => {
  return firebase.auth().signInWithPopup(googleAuthProvider);
};

export const LoginPage = () => (
  <div className={styles.boxLayout}>
    <h1 className={styles.boxHeader}>React Todo App</h1>
    <div className={styles.boxLayoutBox}>
      <h1 className={styles.boxLayoutTitle}>Login to start inputting your todos</h1>
      <div>
        <button className={styles.buttonLayoutGoogle} onClick={startLogin}>Login with your Google account</button>
      </div>
      <div>
        <Link to="/signin" className={styles.buttonLayoutEmail}>Login with your email address</Link>
      </div>
    </div>
  </div>
);

export default LoginPage;
