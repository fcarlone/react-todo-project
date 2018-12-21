import React from 'react';
import { firebase } from '../firebase/firebase';
import styles from '../styles/components/Header.scss';


const startLogout = () => {
  return firebase.auth().signOut();
};

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerContent}>
      <h1 className={styles.headerTitle}>React Todo App</h1>
      <button className={styles.buttonLayout} onClick={startLogout}>Logout</button>
    </div>
  </header>
);

export default Header;
