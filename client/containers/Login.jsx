import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import our children components
// import LoginForm

// import actions
import * as actions from '../actions/actions.js';


const mapDispatchToProps = dispatch => ({
  verifyUser: (newUser) => dispatch(actions.verifyUser(newUser)),
})

class Login extends Component {
  constructor(props) {
    super(props);
  }

  // render Logo and LoginForm Component
  render() {

    let usernameInput;
    let passwordInput;

    return(
      <div className="login-container">
        <div className="login-logo">
        pair/a\dice
        {/* 👥🎲 */}
        </div>
        <div className="login-subTitle">
        a pair-programming roulette<br />
        </div>
        <div className="dice">🎲🎲</div>
        <div className="login-form">
          <span className="input-fields">
            <input
              type="text"
              id="username-input"
              placeholder="Username"
              onChange={e => usernameInput = e.target.value}
            ></input>
            <input
              type="text"
              id="password-input"
              placeholder="Password"
              onChange={e => passwordInput = e.target.value}
            ></input>
          </span>
          <div className="button-container">
          <form className="login-buttons">
          <input type="submit" value="Login / Register" className="login-buttons"/>
        </form>
          </div>
          <div className="button-container">
            <form action="http://localhost:8080/auth/google">
              <input type="submit" value="Sign in with Google" className="login-buttons"/>
            </form>
          </div>
          <div className="button-container">
            <form action="http://localhost:8080/auth/facebook">
              <input type="submit" value="Sign in with Facebook" className="login-buttons"/>
            </form>
          </div>
          </div>
        </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Login);