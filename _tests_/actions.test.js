import { verifyUser } from '../client/actions/actions';
import * as types from '../client/constants/actionTypes';
import configureStore from 'redux-mock-store'; //ES6 modules
// const { configureStore } = require('redux-mock-store') //CommonJS

//Action creators
describe('actions', () => {
  it('VerifyUser should be correct', () => {
    const user = 'Vincent';
    const expectedAction = {
      type: types.VERIFY_USER,
      payload: user,
    };
    expect(verifyUser(user)).toEqual(expectedAction);
  });
});

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('action dispatching', () => {
  it('VerifyUser should dispatch correctly', () => {
    const initialState = {};
    const store = mockStore(initialState);
    let payload = 'Vincent';

    store.dispatch(verifyUser(payload));

    const actions = store.getActions();
    const expectedPayload = {
      type: 'VERIFY_USER',
      payload: payload,
    };
    expect(actions).toEqual([expectedPayload]);
  });
});
