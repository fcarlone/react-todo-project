import React from 'react';
import { firebase } from '../firebase/firebase';
import styles from '../styles/components/Header.scss';

class Header extends React.Component {

  startLogout = () => {
    window.location.reload();
    return firebase.auth().signOut();
  };

  render() {
    if (window.location.pathname === '/') {
      return null;
    } else {
      return (
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.headerTitle}>React Todo App</h1>
            <button className={styles.buttonLayout} onClick={this.startLogout}>Logout</button>
          </div>
        </header>
      )
    }
  }
};

export default Header;
