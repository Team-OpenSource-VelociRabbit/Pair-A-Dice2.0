import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SessionRoom from '../client/containers/SessionRoom';
import store from '../client/store';
import { Provider } from 'react-redux';

configure({ adapter: new Adapter() });

describe('SessionRoomComponent', () => {
  it('should', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <SessionRoom />
      </Provider>
    );
    console.log(wrapper.debug());
  });
});
