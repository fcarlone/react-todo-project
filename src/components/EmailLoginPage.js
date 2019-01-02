import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import styles from '../styles/components/EmailLoginPage.scss'

class EmailLoginPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    };
  };

  handleEmail = (event) => {
    const email = event.target.value;
    this.setState({
      email: email
    });
  };

  handlePassword = (event) => {
    const password = event.target.value;
    this.setState({
      password: password
    });
  };

  handleLogin = () => {
    const email = this.state.email;
    const password = this.state.password;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((error) => {
        alert(error)
        this.props.history.push('/signin')
      });
    this.props.history.push('/dashboard')
  };

  handleSignup = () => {
    const email = this.state.email;
    const password = this.state.password;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        alert(error)
        this.props.history.push('/signin')
      });
    this.props.history.push('/dashboard')

  };

  render() {
    return (
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Login with your email account</h1>
        <form>
          <input
            type="text"
            placeholder="enter email address"
            value={this.state.email}
            onChange={this.handleEmail}
            className={styles.emailField}
          />
          <input
            type="text"
            placeholder="enter password"
            value={this.state.password}
            onChange={this.handlePassword}
            onKeyPress={(e) => { (e.key === 'Enter' ? this.handleLogin() : null) }}
            className={styles.passwordField}
          />
        </form>
        <button
          onClick={this.handleLogin}
          className={styles.emailLoginButton}
        >
          Log in
        </button>
        <button
          onClick={this.handleSignup}
          className={styles.emailSignupButton}
        >
          Sign up
        </button>
      </div>
    )
  }
};

export default EmailLoginPage;
