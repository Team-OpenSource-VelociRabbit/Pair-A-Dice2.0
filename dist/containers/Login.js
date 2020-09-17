var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import our children components
// import LoginForm
// import actions
import * as actions from '../actions/actions.js';
var mapDispatchToProps = function (dispatch) { return ({
    verifyUser: function (newUser) { return dispatch(actions.verifyUser(newUser)); },
}); };
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login(props) {
        return _super.call(this, props) || this;
    }
    // render Logo and LoginForm Component
    Login.prototype.render = function () {
        var _this = this;
        var usernameInput;
        var passwordInput;
        return (React.createElement("div", { className: "login-container" },
            React.createElement("div", { className: "login-logo" }, "pair/a\\dice"),
            React.createElement("div", { className: "login-subTitle" },
                "Pair-programming roulette.",
                React.createElement("br", null)),
            React.createElement("div", { className: "dice" }, "\uD83C\uDFB2\uD83C\uDFB2"),
            React.createElement("div", { className: "login-form" },
                React.createElement("span", { className: "input-fields" },
                    React.createElement("input", { type: "text", id: "username-input", placeholder: "Username", onChange: function (e) { return usernameInput = e.target.value; } }),
                    React.createElement("input", { type: "text", id: "password-input", placeholder: "Password", onChange: function (e) { return passwordInput = e.target.value; } })),
                React.createElement("div", { className: "button-container" },
                    React.createElement("span", { className: "login-register-buttons" },
                        React.createElement(Link, { to: "wait-room", className: "waiting-room-link" },
                            React.createElement("button", { id: "register-button", type: "button" }, "Register")),
                        React.createElement(Link, { to: "/waiting-room", className: "waiting-room-link" },
                            React.createElement("button", { id: "login-button", type: "button", onClick: function () { return _this.props.verifyUser({ username: usernameInput, password: passwordInput }); } }, "Login")),
                        React.createElement("div", null,
                            React.createElement("a", { href: "http://localhost:3000/auth/google" }, "sign in with google")))))));
    };
    return Login;
}(Component));
export default connect(null, mapDispatchToProps)(Login);
//# sourceMappingURL=Login.js.map