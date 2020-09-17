// import actionType constants
import * as types from '../constants/actionTypes';
// add more action creators --> { username: , password: }
export var verifyUser = function (user) { return ({
    type: types.VERIFY_USER,
    payload: user,
}); };
export var addUser = function (newUser) { return ({
    type: types.ADD_USER,
    payload: newUser,
}); };
// payload here is an object with three props
export var updateLanguageLevelStatus = function (languageLevelStatus) { return ({
    type: types.UPDATE_LANGUAGELEVELSTATUS,
    payload: languageLevelStatus,
}); };
export var findPartner = function () { return ({
    type: types.FIND_PARTNER,
}); };
export var incrementSessionCount = function () { return ({
    type: types.INCREMENT_SESSTIONCOUNT,
}); };
export var dummy = function () { return ({
    type: types.DUMMY,
}); };
//# sourceMappingURL=actions.js.map