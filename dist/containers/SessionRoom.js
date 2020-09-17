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
import CodeEditor from '../components/CodeEditor.jsx';
// import our children components
// import actions
import * as actions from '../actions/actions.js';
// mapStateToProps
var mapStateToProps = function (state) { return ({
    // add pertinent state here, auto given store state
    username: state.main.currentUser.username,
}); };
var mapDispatchToProps = function (dispatch) { return ({
    dummy: function () { return dispatch(actions.dummy()); },
}); };
var SessionRoom = /** @class */ (function (_super) {
    __extends(SessionRoom, _super);
    function SessionRoom(props) {
        return _super.call(this, props) || this;
    }
    // render Logo and LoginForm Component
    SessionRoom.prototype.render = function () {
        return (React.createElement("div", { className: "waiting-room-container" },
            React.createElement("span", { className: "login-logo" }, "pair/a\\dice"),
            React.createElement("div", { className: "greeting" },
                React.createElement("center", null,
                    "User meet Partner, Partner meet User.",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "Please follow the links to Pair-Program!",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("br", null)),
                React.createElement("div", { className: "sessions-links" },
                    React.createElement("center", null,
                        React.createElement("pre", null,
                            React.createElement("code", null,
                                React.createElement("span", null,
                                    "\"Write a program that prints the numbers from 1 to 100. ",
                                    React.createElement("br", null),
                                    "But for multiples of three print \u201CFizz\u201D instead of the number and ",
                                    React.createElement("br", null),
                                    "for the multiples of five print \u201CBuzz\u201D. For numbers which are multiples ",
                                    React.createElement("br", null),
                                    "of both three and five print \u201CFizzBuzz\u201D.\""))))),
                React.createElement("center", null,
                    React.createElement("div", { className: "codeeditor" },
                        React.createElement(CodeEditor, null))),
                React.createElement("div", { className: "level-language-form" },
                    React.createElement(Link, { to: "/waiting-room", className: "session-room-link" },
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("center", null,
                            React.createElement("button", { id: "session-room-button", type: "button" }, "END SESSION")))))));
    };
    return SessionRoom;
}(Component));
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionRoom));
//# sourceMappingURL=SessionRoom.js.map