import React from 'react';
import * as firebase from 'firebase';

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
    console.log('handleLogin', email, password)

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log(error)
      });
    this.props.history.push('/dashboard')
  };

  handleSignup = () => {
    console.log(this.state)
    const email = this.state.email;
    const password = this.state.password;
    console.log('handleSignup', email, password)

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log(error)
      });
    this.props.history.push('/dashboard')

  };

  render() {
    return (
      <div>
        <h1>Login with your email account</h1>
        <form>
          <input
            type="text"
            placeholder="enter email address"
            value={this.state.email}
            onChange={this.handleEmail}
          />
          <input
            type="text"
            placeholder="enter password"
            value={this.state.password}
            onChange={this.handlePassword}
          />
        </form>
        <button onClick={this.handleLogin}>Log in</button>
        <button onClick={this.handleSignup}>Sign up</button>
      </div>
    )
  }
};

export default EmailLoginPage;
