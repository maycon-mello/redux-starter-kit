import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';

import MyComponent from './index';

describe('<MyComponent />', () => {
  it('should render a html input', () => {
    const value = 'test';
    const component = shallow(<MyComponent value={value}/>);
    expect(component.find('input')).to.have.length(1);
  });

  it('should call onChange after editor change', () => {
    const onChange = spy();
    const value = 'test';
    const component = shallow(<MyComponent value={value} onChange={onChange}/>);
    component.find('input').simulate('keydown', { which: 'a' });
    expect(onChange).to.have.property('callCount', 1);
  });
});
