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
        Pair-programming roulette.<br />
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
            <span className="login-register-buttons">
              <Link to="wait-room" className="waiting-room-link">
                <button 
                  id="register-button"
                  type="button"
                  // onClick={() => this.props.addUser()}
                >Register</button>
              </Link>
              <Link to="/waiting-room" className="waiting-room-link">
                <button 
                  id="login-button"
                  type="button"
                  // onClick={() => {
                  //   fetch("http://localhost:8080/auth/google")
                  //     .then(user => console.log(user))
                  //     .catch(err => console.log(err));
                  // }}
                >Login</button>
              </Link>
              <div>
                <a href="http://localhost:8080/auth/google">
                sign in with google
                </a>
              </div>
              <div>
                <a href="http://localhost:8080/auth/facebook">
                sign in with facebook
                </a>
              </div>
              </span>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Login);