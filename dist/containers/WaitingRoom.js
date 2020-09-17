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
import { Link, withRouter } from 'react-router-dom';
// import our children components
// import AccountInfo from '../components/AccountInfo.jsx'
// import LevelLanguageForm from '../components/LevelLanguageForm.jsx'
// import actions
import * as actions from '../actions/actions.js';
// mapStateToProps
var mapStateToProps = function (state) { return ({
    username: state.main.currentUser.username,
    sessionCount: state.main.currentUser.sessioncount
}); };
var mapDispatchToProps = function (dispatch) { return ({
    // addUser: (newUser) => dispatch(actions.addUser(newUser)),
    // updateLanguageLevelStatus: (languageLevelStatus) => dispatch(actions.updateLanguageLevelStatus(languageLevelStatus)),
    findPartner: function () { return dispatch(actions.findPartner()); },
}); };
var WaitingRoom = /** @class */ (function (_super) {
    __extends(WaitingRoom, _super);
    function WaitingRoom(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            toggle: 'off',
        };
        return _this;
    }
    WaitingRoom.prototype.componentDidMount = function () {
        this.setState({ toggle: 'on' });
    };
    // render Logo and LoginForm Component
    WaitingRoom.prototype.render = function () {
        console.log(this.state.toggle);
        return (React.createElement("div", { className: "waiting-room-container" },
            React.createElement("span", { className: "login-logo" }, "pair/a\\dice"),
            React.createElement("div", { className: "greeting" },
                React.createElement("center", null,
                    "Hello Friend,",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "Please choose a level and language!",
                    React.createElement("br", null))),
            React.createElement("div", { className: "drop-down" },
                React.createElement("span", { className: "selectors" },
                    React.createElement("select", { className: "skill-selector" },
                        React.createElement("option", { value: "Easy" }, "Easy"),
                        React.createElement("option", { value: "Medium" }, "Medium"),
                        React.createElement("option", { value: "Hard" }, "Hard")),
                    React.createElement("select", { className: "language-selector" },
                        React.createElement("option", { value: "Javascript" }, "Javascript"),
                        React.createElement("option", { value: "Python" }, "Python"),
                        React.createElement("option", { value: "C" }, "C")))),
            React.createElement("div", { className: "level-language-form" },
                React.createElement(Link, { to: "/session-room", className: "session-room-link" },
                    React.createElement("button", { id: "waiting-room-button", type: "button" }, "FIND PARTNER")))));
    };
    return WaitingRoom;
}(Component));
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WaitingRoom));
//# sourceMappingURL=WaitingRoom.js.map