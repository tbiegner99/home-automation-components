import TextInput from '../../src/elements/inputs/TextInput';
import { mount } from 'enzyme';
import React from 'react';
describe('TextInput', () => {
  it('mounts', () => {
    mount(<TextInput />);
  });
});
