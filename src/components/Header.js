import React from 'react';
import { firebase } from '../firebase/firebase';
import { NavLink } from 'react-router-dom';

const startLogout = () => {
  return firebase.auth().signOut();
};

const Header = () => (
  <header>
    <div>
      <h1>Header Component</h1>
      <button onClick={startLogout}>Logout</button>
    </div>
  </header>
);

export default Header;
