import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { App } from './App';
import { MyComponent } from '../components';

describe('<App />', () => {
  it('should render a MyComponent component', () => {
    const app = shallow(<App/>);
    expect(app.find(MyComponent)).to.have.length(1);
  });
});
