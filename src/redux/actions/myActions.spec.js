import { expect } from 'chai';
import * as actions from './myActions';

describe('Actions', () => {
  describe('Code', () => {
    it('setValue should create SET_VALUE action', (done) => {
      const value = 'test';
      const fn = actions.setValue(value);
      const dispatch = (action) => {
        expect(action).to.deep.equal({
          type: actions.SET_HTML_SOURCE,
          value,
        });
        done();
      };
      fn(dispatch, () => {});
    });
  });
});
