import React from 'react';
import { shallow } from 'enzyme';
import UserIndex from '..';

test('<UserIndex /> snapshot', () => {
  const wrapper = shallow(<UserIndex />);
  wrapper.debug();
  expect(wrapper).toMatchSnapshot();
});
