var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as types from '../constants/actionTypes';
// userSessions:[{session: {1 session}, mainuser:{}, partner:{}},...]
var initialState = {
    currentUser: {
        _id: 5,
        username: 'usertest',
        sessioncount: 10,
    },
    currentPartner: {
        _id: 4,
        partnername: 'partnertest1',
        sessioncount: 2,
    },
};
var mainReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // Verify User
        case types.VERIFY_USER:
            console.log('action.payload', action.payload);
            var user_1 = {
                id: null,
                username: null,
                sessioncount: null,
            };
            // {body: {username: action.payload.username, password: action.payload.password}}
            fetch("http://localhost:8080/api/user/?username=" + action.payload.username + "&password=" + action.payload.password)
                .then(function (response) { return response.json(); }).then(function (data) {
                // console.log('data:', data)
                user_1.id = data._id;
                user_1.username = data.username;
                user_1.sessioncount = data.sessioncount;
                console.log('User: ', user_1);
                // console.log('state after login: ', {
                //   ...state,
                //   currentUser: {
                //     ...state.currentUser,
                //     _id: user.id,
                //     username: user.username,
                //     sessioncount: user.sessioncount
                //   }
                // })
                return __assign(__assign({}, state), { currentUser: __assign(__assign({}, state.currentUser), { _id: user_1.id, username: user_1.username, sessioncount: user_1.sessioncount }) });
            })
                .catch(function (err) { return console.log(err); });
        // Add User
        // LevelLanguage
        // Find Partner
        // eslint-disable-next-line no-fallthrough
        case types.FIND_PARTNER:
            console.log('state before find partner', __assign({}, state));
            var partner_1;
            // fetch request to get a partner
            fetch('http://localhost:8080/api/partner/?language=Javascript&skill=Easy&_id=5') // fetch('/api/partner' + '/' + 'Javascript' + '&' + 'skill'
                .then(function (response) { return response.json(); })
                .then(function (data) {
                partner_1 = data;
                console.log('state after find partner', __assign(__assign({}, state), { currentPartner: partner_1 }));
            })
                .catch(function (err) { return console.log(err); });
            // return updated state
            return __assign(__assign({}, state), { currentPartner: partner_1 });
        case types.DUMMY:
            console.log('DUMMY STATE', state);
        // Increment Session
        // Pair Again
        default:
            return state;
    }
};
export default mainReducer;
//# sourceMappingURL=mainReducer.js.map