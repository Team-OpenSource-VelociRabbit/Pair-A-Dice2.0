import * as actions from '../client/actions/actions'
import * as types from '../client/constants/actionTypes'
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { idText } from 'typescript';

//Action creators 
describe('actions', () => {
  it('should create an action add a todo', () => {
    const user = 'Vincent'
    const expectedAction = {
      type: types.VERIFY_USER, 
      payload: user
    }
    expect(actions.verifyUser(user)).toEqual(expectedAction)
  })
})